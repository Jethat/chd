"use client";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  ORDER_FLOW, SEED_BOOKS, SEED_PROMOS, STAFF,
  type Address, type AuditEntry, type Book, type BookStatus, type CartLine, type Notice,
  type Order, type OrderStatus, type Promo, type Role, type Ticket, type User,
} from "./data";
import { SHIP_FLAT, SHIP_FREE_ABOVE, isEmail, isMobile, money } from "./utils";

const KEY = "chd-ecart-v1";
/** Demo only: moves orders along automatically. Set false when a real backend updates order status. */
const AUTO_PROGRESS = true;
const STEP_MS = 25_000;

interface S {
  books: Book[]; users: User[]; sessionId: string | null;
  carts: Record<string, CartLine[]>; wishes: Record<string, string[]>;
  orders: Order[]; notices: Notice[]; promos: Promo[]; audit: AuditEntry[]; tickets: Ticket[]; coupon: string | null;
}
export type Result = { ok: boolean; error?: string };
export type OtpResult = Result & { needName?: boolean; demoOtp?: string };

const uid8 = () => Math.random().toString(36).slice(2, 10);
const seed = (): S => ({
  books: SEED_BOOKS, users: [], sessionId: null, carts: {}, wishes: {}, orders: [], promos: SEED_PROMOS,
  audit: [], tickets: [], coupon: null,
  notices: [
    { id: "n1", title: "New release: Travel Hindi Conversation Guide", body: "Now available in the E-Cart.", channels: ["App", "Email"], ts: "2026-10-20T09:00:00.000Z", read: false },
    { id: "n2", title: "Use HINDI10 for 10% off", body: "Valid on orders above ₹300.", channels: ["App", "Email"], ts: "2026-10-22T09:00:00.000Z", read: false },
  ],
});

const notice = (s: S, n: Omit<Notice, "id" | "ts" | "read">): S => ({
  ...s, notices: [{ id: uid8(), ts: new Date().toISOString(), read: false, ...n }, ...s.notices],
});
const log = (s: S, a: User, action: string, target: string): S => ({
  ...s, audit: [{ id: uid8(), ts: new Date().toISOString(), actor: a.name, role: a.role, action, target }, ...s.audit],
});
const advance = (s: S, id: string, to?: OrderStatus): S => {
  const o = s.orders.find((x) => x.id === id);
  if (!o || o.status === "Delivered" || o.status === "Cancelled") return s;
  const next = to ?? ORDER_FLOW[ORDER_FLOW.indexOf(o.status) + 1];
  if (!next) return s;
  const ts = new Date().toISOString();
  const orders = s.orders.map((x) => (x.id === id ? { ...x, status: next, history: [...x.history, { status: next, ts }] } : x));
  return notice({ ...s, orders }, {
    userId: o.userId, title: `Order ${id}: ${next}`,
    body: next === "Delivered" ? "Your order has been delivered. Thank you!" : `Your order is now ${next.toLowerCase()}.`,
    channels: ["App", "SMS", "Email"],
  });
};

/** Who may move a book from one workflow stage to another. */
const FLOW: Record<BookStatus, Partial<Record<BookStatus, Role[]>>> = {
  draft: { review: ["creator"] },
  review: { approved: ["reviewer", "approver"], draft: ["reviewer", "approver"] },
  approved: { published: ["publisher"], draft: ["approver"] },
  published: { approved: ["publisher"] },
};
const DENIED: Result = { ok: false, error: "Your role isn’t permitted to do this." };

function useBuildStore() {
  const [s, setS] = useState<S>(seed);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const otp = useRef<{ ident: string; code: string; exp: number; tries: number; name?: string } | null>(null);

  useEffect(() => {
    try { const raw = localStorage.getItem(KEY); if (raw) setS({ ...seed(), ...JSON.parse(raw) }); } catch {}
    setReady(true);
  }, []);
  useEffect(() => { if (ready) try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} }, [s, ready]);
  useEffect(() => {
    if (!ready || !AUTO_PROGRESS) return;
    const t = setInterval(() => setS((p) => {
      let n = p;
      for (const o of p.orders) {
        const last = o.history[o.history.length - 1];
        if (!o.id.includes("DEMO") && o.status !== "Delivered" && o.status !== "Cancelled" && Date.now() - +new Date(last.ts) > STEP_MS) n = advance(n, o.id);
      }
      return n;
    }), 5000);
    return () => clearInterval(t);
  }, [ready]);

  const say = (m: string) => { setToast(m); setTimeout(() => setToast(null), 2600); };

  /* ---------- derived ---------- */
  const user = s.users.find((u) => u.id === s.sessionId) ?? null;
  const uid = user?.id ?? "";
  const cart = s.carts[uid] ?? [];
  const wishlist = s.wishes[uid] ?? [];
  const shop = s.books.filter((b) => b.status === "published");
  const lines = cart.map((c) => ({ ...c, book: s.books.find((b) => b.id === c.bookId)! })).filter((l) => l.book);
  const subtotal = lines.reduce((t, l) => t + l.book.price * l.qty, 0);
  const promo = s.promos.find((p) => p.active && p.code === s.coupon);
  const discount = promo && subtotal >= promo.minOrder ? Math.round((subtotal * promo.percent) / 100) : 0;
  const shipping = subtotal - discount === 0 || subtotal - discount >= SHIP_FREE_ABOVE ? 0 : SHIP_FLAT;
  const quote = { lines, subtotal, discount, shipping, total: subtotal - discount + shipping, promo: discount ? promo : undefined, count: lines.reduce((t, l) => t + l.qty, 0) };
  const orders = s.orders.filter((o) => o.userId === uid);
  const notices = s.notices.filter((n) => !n.userId || n.userId === uid);
  const staff = !!user && user.role !== "customer";

  /* ---------- auth (OTP is shown on screen in demo mode) ---------- */
  const sendOtp = (ident: string, name?: string): OtpResult => {
    const id = ident.trim().toLowerCase();
    if (!isEmail(id) && !isMobile(id)) return { ok: false, error: "Enter a valid email address or 10-digit mobile number." };
    const known = s.users.some((u) => u.email === id || u.mobile === id) || !!STAFF[id];
    if (!known && !name?.trim()) return { ok: false, needName: true };
    const code = String(Math.floor(100000 + Math.random() * 900000));
    otp.current = { ident: id, code, exp: Date.now() + 5 * 60_000, tries: 0, name: name?.trim() };
    return { ok: true, demoOtp: code }; // production: send via SMS / email gateway and never return the code
  };
  const verifyOtp = (code: string): Result => {
    const o = otp.current;
    if (!o || Date.now() > o.exp) return { ok: false, error: "OTP expired. Please request a new one." };
    if (++o.tries > 3) { otp.current = null; return { ok: false, error: "Too many attempts. Request a new OTP." }; }
    if (code !== o.code) return { ok: false, error: "Incorrect OTP." };
    otp.current = null;
    const existing = s.users.find((u) => u.email === o.ident || u.mobile === o.ident);
    const st = STAFF[o.ident];
    const u: User = existing ?? { id: uid8(), name: st?.name ?? o.name ?? "Reader", role: st?.role ?? "customer", ...(isEmail(o.ident) ? { email: o.ident } : { mobile: o.ident }) };
    setS((p) => ({ ...p, users: existing ? p.users : [...p.users, u], sessionId: u.id }));
    return { ok: true };
  };
  const logout = () => setS((p) => ({ ...p, sessionId: null, coupon: null }));

  /* ---------- cart, wishlist, coupon ---------- */
  const setCart = (fn: (c: CartLine[]) => CartLine[]) =>
    setS((p) => ({ ...p, carts: { ...p.carts, [uid]: fn(p.carts[uid] ?? []) } }));
  const addToCart = (id: string, qty = 1) => {
    const b = s.books.find((x) => x.id === id);
    if (!b || b.stock === 0) return say("This book is out of stock.");
    const have = cart.find((c) => c.bookId === id)?.qty ?? 0;
    if (have + qty > b.stock) return say(`Only ${b.stock} copies available.`);
    setCart((c) => (have ? c.map((x) => (x.bookId === id ? { ...x, qty: x.qty + qty } : x)) : [...c, { bookId: id, qty }]));
    say(`Added “${b.title}” to your cart`);
  };
  const setQty = (id: string, qty: number) => {
    const max = s.books.find((b) => b.id === id)?.stock ?? 1;
    setCart((c) => c.map((x) => (x.bookId === id ? { ...x, qty: Math.max(1, Math.min(qty, max)) } : x)));
  };
  const removeFromCart = (id: string) => setCart((c) => c.filter((x) => x.bookId !== id));
  const toggleWish = (id: string) =>
    setS((p) => { const w = p.wishes[uid] ?? []; return { ...p, wishes: { ...p.wishes, [uid]: w.includes(id) ? w.filter((x) => x !== id) : [...w, id] } }; });
  const applyCoupon = (code: string): Result => {
    const p = s.promos.find((x) => x.active && x.code === code.trim().toUpperCase());
    if (!p) return { ok: false, error: "Invalid or expired coupon." };
    if (subtotal < p.minOrder) return { ok: false, error: `Add ${money(p.minOrder - subtotal)} more to use ${p.code}.` };
    setS((x) => ({ ...x, coupon: p.code }));
    return { ok: true };
  };
  const removeCoupon = () => setS((x) => ({ ...x, coupon: null }));

  /* ---------- checkout ---------- */
  /** `raw` is only used by the simulated gateway and is never stored. `label` is the masked text saved on the order. */
  const placeOrder = async (address: Address, pay: { method: string; raw: string; label: string }): Promise<Result & { order?: Order }> => {
    if (!user) return { ok: false, error: "Please log in." };
    if (!lines.length) return { ok: false, error: "Your cart is empty." };
    if (lines.some((l) => l.qty > l.book.stock)) return { ok: false, error: "Some items are no longer in stock. Please update your cart." };
    await new Promise((r) => setTimeout(r, 1400)); // simulated payment gateway
    if (/fail|0000$/i.test(pay.raw.replace(/\s/g, ""))) return { ok: false, error: "Payment was declined by the bank. Please try another method." };
    const ts = new Date().toISOString();
    const order: Order = {
      id: `CHD-${new Date().getFullYear()}-${String(1000 + s.orders.length + 1).padStart(5, "0")}`, userId: user.id,
      items: lines.map((l) => ({ bookId: l.book.id, title: l.book.title, price: l.book.price, qty: l.qty })),
      subtotal: quote.subtotal, discount: quote.discount, shipping: quote.shipping, total: quote.total, coupon: quote.promo?.code,
      address, payment: { method: pay.method, label: pay.label, ref: `TXN${Date.now().toString(36).toUpperCase()}` },
      status: "Placed", history: [{ status: "Placed", ts }], createdAt: ts,
    };
    setS((p) => notice({
      ...p, orders: [order, ...p.orders], carts: { ...p.carts, [user.id]: [] }, coupon: null,
      books: p.books.map((b) => { const l = lines.find((x) => x.book.id === b.id); return l ? { ...b, stock: b.stock - l.qty } : b; }),
    }, { userId: user.id, title: `Order ${order.id} confirmed`, body: `Payment of ${money(order.total)} received.`, channels: ["App", "SMS", "Email"] }));
    return { ok: true, order };
  };
  const cancelOrder = (id: string): Result => {
    const o = s.orders.find((x) => x.id === id && x.userId === uid);
    if (!o || !["Placed", "Confirmed"].includes(o.status)) return { ok: false, error: "This order can no longer be cancelled." };
    const ts = new Date().toISOString();
    setS((p) => notice({
      ...p,
      orders: p.orders.map((x) => (x.id === id ? { ...x, status: "Cancelled", history: [...x.history, { status: "Cancelled", ts }] } : x)),
      books: p.books.map((b) => { const it = o.items.find((i) => i.bookId === b.id); return it ? { ...b, stock: b.stock + it.qty } : b; }),
    }, { userId: uid, title: `Order ${id} cancelled`, body: "Your refund will be credited to the original payment method.", channels: ["App", "Email"] }));
    return { ok: true };
  };
  const orderById = (id: string) => s.orders.find((o) => o.id === id && (staff || o.userId === uid));

  /* ---------- notifications and support ---------- */
  const markAllRead = () => setS((p) => ({ ...p, notices: p.notices.map((n) => (!n.userId || n.userId === uid ? { ...n, read: true } : n)) }));
  const submitTicket = (t: { name: string; email: string; subject: string; message: string }): Ticket => {
    const ticket: Ticket = { id: `TKT-${1000 + s.tickets.length + 1}`, ts: new Date().toISOString(), userId: uid || undefined, ...t };
    setS((p) => notice({ ...p, tickets: [ticket, ...p.tickets] }, { userId: uid || "guest", title: `Ticket ${ticket.id} received`, body: "The helpdesk will reply by email.", channels: ["Email"] }));
    return ticket;
  };

  /* ---------- admin / CMS (UI arrives in Part 2) ---------- */
  const saveBook = (b: Book): Result => {
    if (!user || !["creator", "publisher"].includes(user.role)) return DENIED;
    setS((p) => log({ ...p, books: p.books.some((x) => x.id === b.id) ? p.books.map((x) => (x.id === b.id ? b : x)) : [b, ...p.books] }, user, "Saved book", b.title));
    return { ok: true };
  };
  const moveBook = (id: string, to: BookStatus): Result => {
    const b = s.books.find((x) => x.id === id);
    if (!user || !b || !FLOW[b.status][to]?.includes(user.role)) return DENIED;
    setS((p) => {
      let n = log({ ...p, books: p.books.map((x) => (x.id === id ? { ...x, status: to } : x)) }, user, `Moved to ${to}`, b.title);
      if (to === "published") n = notice(n, { title: `New release: ${b.title}`, body: "Now available in the E-Cart.", channels: ["App", "Email"] });
      return n;
    });
    return { ok: true };
  };
  const savePromo = (pr: Promo): Result => {
    if (!user || !["approver", "publisher"].includes(user.role)) return DENIED;
    setS((p) => log({ ...p, promos: p.promos.some((x) => x.code === pr.code) ? p.promos.map((x) => (x.code === pr.code ? pr : x)) : [...p.promos, pr] }, user, "Saved promotion", pr.code));
    if (pr.active) setS((p) => notice(p, { title: `Use ${pr.code} for ${pr.percent}% off`, body: `Valid on orders above ${money(pr.minOrder)}.`, channels: ["App", "Email"] }));
    return { ok: true };
  };
  const setOrderStatus = (id: string, to: OrderStatus): Result => {
    if (!user || user.role !== "publisher") return DENIED;
    setS((p) => log(advance(p, id, to), user, `Order set to ${to}`, id));
    return { ok: true };
  };

    const moves = (b: Book): BookStatus[] =>
    user ? (Object.entries(FLOW[b.status]) as [BookStatus, Role[]][]).filter(([, r]) => r.includes(user.role)).map(([to]) => to) : [];

  const setRole = (id: string, role: Role): Result => {
    if (!user || user.role !== "publisher" || id === user.id) return DENIED;
    const t = s.users.find((u) => u.id === id);
    if (!t) return DENIED;
    setS((p) => log({ ...p, users: p.users.map((u) => (u.id === id ? { ...u, role } : u)) }, user, `Role set to ${role}`, t.name));
    return { ok: true };
  };

  const broadcast = (title: string, body: string, channels: Notice["channels"]): Result => {
    if (!user || !["approver", "publisher"].includes(user.role)) return DENIED;
    setS((p) => log(notice(p, { title, body, channels }), user, "Sent notification", title));
    return { ok: true };
  };

  /** Fills the dashboard with sample customers, orders, carts and wishlists. */
  const seedDemo = (): Result => {
    if (!user || !staff) return DENIED;
    if (s.users.some((u) => u.id === "demo0")) return { ok: false, error: "Demo data is already loaded." };
    const rnd = (n: number) => Math.floor(Math.random() * n);
    const pub = s.books.filter((b) => b.status === "published");
    const demoUsers: User[] = ["Anita Sharma", "Ravi Kumar", "Meera Iyer", "Imran Khan", "Sunita Das", "Gurpreet Singh"]
      .map((name, i) => ({ id: `demo${i}`, name, mobile: `98000001${i}0`, role: "customer" as Role }));
    const demoOrders: Order[] = Array.from({ length: 30 }, (_, k) => {
      const u = demoUsers[rnd(demoUsers.length)];
      const items = [...new Set(Array.from({ length: 1 + rnd(3) }, () => pub[rnd(pub.length)]))].map((b) => ({ bookId: b.id, title: b.title, price: b.price, qty: 1 + rnd(2) }));
      const subtotal = items.reduce((t, i) => t + i.price * i.qty, 0);
      const shipping = subtotal >= SHIP_FREE_ABOVE ? 0 : SHIP_FLAT;
      const t0 = Date.now() - rnd(7) * 864e5 - rnd(4e7);
      const status = (["Delivered", "Delivered", "Shipped", "Packed", "Confirmed"] as OrderStatus[])[rnd(5)];
      const history = ORDER_FLOW.slice(0, ORDER_FLOW.indexOf(status) + 1).map((st, j) => ({ status: st, ts: new Date(t0 + j * 3_600_000).toISOString() }));
      return {
        id: `CHD-DEMO-${String(k + 1).padStart(5, "0")}`, userId: u.id, items, subtotal, discount: 0, shipping, total: subtotal + shipping,
        address: { name: u.name, mobile: u.mobile!, line1: "Demo address", city: ["Delhi", "Pune", "Chennai", "Kolkata"][rnd(4)], state: "Demo", pin: "110001" },
        payment: { method: ["UPI", "Card", "Net Banking"][rnd(3)], label: "demo", ref: `TXNDEMO${k}` }, status, history, createdAt: history[0].ts,
      };
    });
    const dCarts = Object.fromEntries(demoUsers.slice(0, 3).map((u) => [u.id, [{ bookId: pub[rnd(pub.length)].id, qty: 1 }]]));
    const dWishes = Object.fromEntries(demoUsers.map((u) => [u.id, [...new Set([pub[rnd(pub.length)].id, pub[rnd(pub.length)].id])]]));
    setS((p) => log({ ...p, users: [...p.users, ...demoUsers], orders: [...demoOrders, ...p.orders], carts: { ...p.carts, ...dCarts }, wishes: { ...p.wishes, ...dWishes } }, user, "Loaded demo data", "30 orders, 6 customers"));
    return { ok: true };
  };

    return {
    ready, toast, user, staff, shop, allBooks: s.books, quote, wishlist, orders, allOrders: s.orders, notices,
    unread: notices.filter((n) => !n.read).length, promos: s.promos, audit: s.audit, tickets: s.tickets, coupon: s.coupon,
    users: s.users, carts: s.carts, wishes: s.wishes,
    sendOtp, verifyOtp, logout, addToCart, setQty, removeFromCart, toggleWish, applyCoupon, removeCoupon,
    placeOrder, cancelOrder, orderById, markAllRead, submitTicket, saveBook, moveBook, savePromo, setOrderStatus,
    moves, setRole, broadcast, seedDemo,
  };
}

type Store = ReturnType<typeof useBuildStore>;
const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const store = useBuildStore();

  return (
    <Ctx.Provider value={store}>
      {children}
      {store.toast && (
        <div role="status" aria-live="polite" className="fixed bottom-5 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-brand-dark px-5 py-2.5 text-sm font-medium text-white shadow-lg print:hidden">
          {store.toast}
        </div>
      )}
    </Ctx.Provider>
  );
}
export function useStore() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useStore must be used inside <StoreProvider>");
  return c;
}
/** Wrap actions that need a logged-in user: guests are sent to the login page and brought back afterwards. */
export function useGuard() {
  const { user } = useStore();
  const router = useRouter();
  const path = usePathname();
  return (fn: () => void) => (user ? fn() : router.push(`/e-cart/login?next=${encodeURIComponent(path)}`));
}