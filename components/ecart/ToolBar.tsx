"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Bell, Heart, LogIn, LogOut, Search, ShoppingCart, User } from "lucide-react";
import { useStore } from "@/lib/ecart/store";
import { fmtDate } from "@/lib/ecart/utils";

const tabs = [["Catalogue", "/e-cart"], ["My Orders", "/e-cart/orders"], ["Support", "/e-cart/support"]] as const;
const icon = "relative grid size-10 place-items-center rounded-full text-brand-dark transition hover:bg-brand-light";
const badge = "absolute -right-0.5 -top-0.5 grid min-w-4 place-items-center rounded-full bg-brand px-1 text-[10px] font-bold text-white";

export default function Toolbar() {
  const { user, logout, quote, wishlist, notices, unread, markAllRead } = useStore();
  const router = useRouter();
  const path = usePathname();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<"bell" | "user" | null>(null);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => { if (box.current && !box.current.contains(e.target as Node)) setOpen(null); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div className="border-b border-line bg-white print:hidden">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-2.5">
        <Link href="/e-cart" className="text-lg font-bold text-brand-dark">
          E-Cart
        </Link>

        <nav aria-label="E-Cart" className="order-last flex gap-1 md:order-none">
          {tabs.map(([label, href]) => (
            <Link key={href} href={href} aria-current={path === href ? "page" : undefined}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted transition hover:text-brand aria-[current=page]:bg-brand-light aria-[current=page]:text-brand-dark">
              {label}
            </Link>
          ))}
        </nav>

        <form role="search" onSubmit={(e) => { e.preventDefault(); router.push(`/e-cart?q=${encodeURIComponent(q)}`); }}
          className="relative ml-auto min-w-[200px] flex-1 md:max-w-sm">
          <label htmlFor="ec-search" className="sr-only">Search books</label>
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input id="ec-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search title, author, ISBN…"
            className="w-full rounded-full border border-line bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </form>

        <div ref={box} className="relative flex items-center gap-1">
          <Link href="/e-cart/wishlist" aria-label="Wishlist" className={icon}>
            <Heart size={20} />{wishlist.length > 0 && <span className={badge}>{wishlist.length}</span>}
          </Link>
          <Link href="/e-cart/cart" aria-label="Cart" className={icon}>
            <ShoppingCart size={20} />{quote.count > 0 && <span className={badge}>{quote.count}</span>}
          </Link>
          <button aria-label="Notifications" aria-expanded={open === "bell"} onClick={() => setOpen(open === "bell" ? null : "bell")} className={icon}>
            <Bell size={20} />{unread > 0 && <span className={badge}>{unread}</span>}
          </button>
          {user ? (
            <button aria-label="Account" aria-expanded={open === "user"} onClick={() => setOpen(open === "user" ? null : "user")} className={icon}><User size={20} /></button>
          ) : (
            <Link href="/e-cart/login" className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark">
              <LogIn size={16} /> Log in
            </Link>
          )}

          {open === "bell" && (
            <div className="absolute right-0 top-12 z-50 w-80 overflow-hidden rounded-xl border border-line bg-white shadow-xl">
              <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                <p className="text-sm font-semibold text-ink">Notifications</p>
                <button onClick={markAllRead} className="text-xs font-medium text-brand hover:underline">Mark all read</button>
              </div>
              <ul className="max-h-80 divide-y divide-line overflow-y-auto">
                {notices.slice(0, 8).map((n) => (
                  <li key={n.id} className={`px-4 py-3 ${n.read ? "" : "bg-brand-light/60"}`}>
                    <p className="text-sm font-medium text-ink">{n.title}</p>
                    <p className="text-xs text-muted">{n.body}</p>
                    <p className="mt-1 flex flex-wrap items-center gap-1.5 text-[10px] text-muted">
                      {n.channels.map((c) => <span key={c} className="rounded bg-line px-1.5 py-0.5 font-semibold">{c}</span>)}
                      {fmtDate(n.ts)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {open === "user" && user && (
            <div className="absolute right-0 top-12 z-50 w-60 rounded-xl border border-line bg-white p-2 shadow-xl">
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-ink">{user.name}</p>
                <p className="text-xs text-muted">{user.email ?? user.mobile}</p>
                {user.role !== "customer" && <p className="mt-1 inline-block rounded bg-brand-light px-1.5 py-0.5 text-[10px] font-bold uppercase text-brand-dark">{user.role}</p>}
              </div>
              {user.role !== "customer" && (
                <Link href="/e-cart/admin" onClick={() => setOpen(null)} className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-dark hover:bg-brand-light">Admin dashboard</Link>
              )}
              <Link href="/e-cart/orders" onClick={() => setOpen(null)} className="block rounded-lg px-3 py-2 text-sm hover:bg-brand-light">My orders</Link>
              <Link href="/e-cart/wishlist" onClick={() => setOpen(null)} className="block rounded-lg px-3 py-2 text-sm hover:bg-brand-light">Wishlist</Link>
              <button onClick={() => { logout(); setOpen(null); router.push("/e-cart"); }} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-red-700 hover:bg-red-50">
                <LogOut size={15} /> Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}