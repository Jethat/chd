"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Building2, CreditCard, Loader2, Lock, Smartphone } from "lucide-react";
import { useStore } from "@/lib/ecart/store";
import { isMobile, isPin, isUpi, luhn, money } from "@/lib/ecart/utils";
import { Empty, Field, btn, btnGhost, card, field } from "@/components/ecart/ui";

const BANKS = ["State Bank of India", "Punjab National Bank", "Bank of Baroda", "Canara Bank", "HDFC Bank", "ICICI Bank", "Axis Bank"];
type Method = "UPI" | "Card" | "Net Banking";
const METHODS: [Method, typeof Smartphone][] = [["UPI", Smartphone], ["Card", CreditCard], ["Net Banking", Building2]];

export default function Checkout() {
  const { user, ready, quote, orders, placeOrder } = useStore();
  const router = useRouter();
  const [a, setA] = useState({ name: "", mobile: "", line1: "", city: "", state: "", pin: "" });
  const [method, setMethod] = useState<Method>("UPI");
  const [upi, setUpi] = useState("");
  const [card_, setCard] = useState({ num: "", exp: "", cvv: "", holder: "" });
  const [bank, setBank] = useState("");
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [fail, setFail] = useState("");

  useEffect(() => { if (ready && !user) router.replace("/e-cart/login?next=/e-cart/checkout"); }, [ready, user, router]);
  useEffect(() => {
    if (!user) return;
    setA(orders[0]?.address ?? { name: user.name, mobile: user.mobile ?? "", line1: "", city: "", state: "", pin: "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  if (!user) return null;
  if (!quote.lines.length) return <Empty title="Nothing to check out" text="Your cart is empty."><Link href="/e-cart" className={btn}>Browse books</Link></Empty>;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!a.name.trim()) e.name = "Enter the recipient’s name.";
    if (!isMobile(a.mobile)) e.mobile = "Enter a valid 10-digit mobile number.";
    if (a.line1.trim().length < 5) e.line1 = "Enter the full address.";
    if (!a.city.trim()) e.city = "Enter the city.";
    if (!a.state.trim()) e.state = "Enter the state.";
    if (!isPin(a.pin)) e.pin = "Enter a 6-digit PIN code.";
    if (method === "UPI" && !isUpi(upi)) e.upi = "Enter a valid UPI ID, e.g. name@bank.";
    if (method === "Card") {
      if (!luhn(card_.num)) e.num = "Enter a valid card number.";
      const m = card_.exp.match(/^(0[1-9]|1[0-2])\/(\d{2})$/);
      if (!m || new Date(2000 + +m[2], +m[1], 0) < new Date()) e.exp = "Enter a valid expiry (MM/YY).";
      if (!/^\d{3,4}$/.test(card_.cvv)) e.cvv = "Enter the 3 or 4-digit CVV.";
      if (!card_.holder.trim()) e.holder = "Enter the name on the card.";
    }
    if (method === "Net Banking" && !bank) e.bank = "Choose your bank.";
    setErrs(e);
    return !Object.keys(e).length;
  };

  const pay = async () => {
    setFail("");
    if (!validate()) return;
    setBusy(true);
    const raw = method === "UPI" ? upi : method === "Card" ? card_.num : bank;
    const label = method === "UPI" ? upi.replace(/^(.{2}).*(@.*)$/, "$1•••$2") : method === "Card" ? `•••• ${card_.num.replace(/\D/g, "").slice(-4)}` : bank;
    const r = await placeOrder(a, { method, raw, label });
    setBusy(false);
    if (r.ok && r.order) router.replace(`/e-cart/orders?placed=${r.order.id}`);
    else setFail(r.error ?? "Something went wrong.");
  };

  const A = (k: keyof typeof a) => ({ value: a[k], onChange: (e: React.ChangeEvent<HTMLInputElement>) => setA({ ...a, [k]: e.target.value }), className: field });

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div className="space-y-6">
        <section className={`${card} p-6`}>
          <h2 className="mb-4 text-lg font-semibold text-brand-dark">1. Delivery address</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" err={errs.name}><input {...A("name")} autoComplete="name" /></Field>
            <Field label="Mobile number" err={errs.mobile}><input {...A("mobile")} inputMode="numeric" maxLength={10} autoComplete="tel" /></Field>
            <div className="sm:col-span-2"><Field label="Address" err={errs.line1}><input {...A("line1")} autoComplete="street-address" /></Field></div>
            <Field label="City" err={errs.city}><input {...A("city")} /></Field>
            <Field label="State" err={errs.state}><input {...A("state")} /></Field>
            <Field label="PIN code" err={errs.pin}><input {...A("pin")} inputMode="numeric" maxLength={6} /></Field>
          </div>
        </section>

        <section className={`${card} p-6`}>
          <h2 className="mb-4 text-lg font-semibold text-brand-dark">2. Payment</h2>
          <div role="tablist" className="mb-5 grid grid-cols-3 gap-2">
            {METHODS.map(([m, Icon]) => (
              <button key={m} role="tab" aria-selected={method === m} onClick={() => setMethod(m)}
                className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition ${method === m ? "border-brand bg-brand-light text-brand-dark" : "border-line hover:border-brand"}`}>
                <Icon size={18} /> {m}
              </button>
            ))}
          </div>
          {method === "UPI" && <Field label="UPI ID" err={errs.upi}><input value={upi} onChange={(e) => setUpi(e.target.value)} placeholder="name@bank" className={field} /></Field>}
          {method === "Card" && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2"><Field label="Card number" err={errs.num}><input value={card_.num} inputMode="numeric" autoComplete="cc-number" placeholder="1234 5678 9012 3456" className={field}
                onChange={(e) => setCard({ ...card_, num: e.target.value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim() })} /></Field></div>
              <Field label="Expiry (MM/YY)" err={errs.exp}><input value={card_.exp} placeholder="MM/YY" maxLength={5} autoComplete="cc-exp" className={field}
                onChange={(e) => setCard({ ...card_, exp: e.target.value.replace(/[^\d/]/g, "").replace(/^(\d{2})(\d)/, "$1/$2").slice(0, 5) })} /></Field>
              <Field label="CVV" err={errs.cvv}><input type="password" value={card_.cvv} inputMode="numeric" maxLength={4} autoComplete="cc-csc" className={field} onChange={(e) => setCard({ ...card_, cvv: e.target.value.replace(/\D/g, "") })} /></Field>
              <div className="sm:col-span-2"><Field label="Name on card" err={errs.holder}><input value={card_.holder} autoComplete="cc-name" className={field} onChange={(e) => setCard({ ...card_, holder: e.target.value })} /></Field></div>
            </div>
          )}
          {method === "Net Banking" && <Field label="Select your bank" err={errs.bank}><select value={bank} onChange={(e) => setBank(e.target.value)} className={field}><option value="">Choose a bank</option>{BANKS.map((b) => <option key={b}>{b}</option>)}</select></Field>}
          <p className="mt-4 flex items-center gap-2 text-xs text-muted"><Lock size={14} /> Payments are encrypted in transit. Card details are never stored by the E-Cart.</p>
          <p className="mt-2 text-xs text-muted">Demo gateway: use 4242 4242 4242 4242 to pass. Card numbers ending 0000, or UPI IDs starting with “fail”, simulate a declined payment.</p>
        </section>
      </div>

      <aside className={`${card} h-fit space-y-4 p-5 lg:sticky lg:top-16`}>
        <h2 className="font-semibold text-ink">Your order</h2>
        <ul className="space-y-2 text-sm">{quote.lines.map(({ book, qty }) => <li key={book.id} className="flex justify-between gap-3"><span className="line-clamp-1">{book.title} × {qty}</span><span>{money(book.price * qty)}</span></li>)}</ul>
        <dl className="space-y-2 border-t border-line pt-3 text-sm">
          <div className="flex justify-between"><dt className="text-muted">Subtotal</dt><dd>{money(quote.subtotal)}</dd></div>
          {quote.discount > 0 && <div className="flex justify-between text-emerald-700"><dt>Discount ({quote.promo?.code})</dt><dd>−{money(quote.discount)}</dd></div>}
          <div className="flex justify-between"><dt className="text-muted">Shipping</dt><dd>{quote.shipping ? money(quote.shipping) : "Free"}</dd></div>
          <div className="flex justify-between border-t border-line pt-3 text-base font-bold text-brand-dark"><dt>Total</dt><dd>{money(quote.total)}</dd></div>
        </dl>
        {fail && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{fail}</p>}
        <button onClick={pay} disabled={busy} className={`${btn} w-full`}>{busy ? <><Loader2 size={16} className="animate-spin" /> Processing payment…</> : <>Pay {money(quote.total)}</>}</button>
        <Link href="/e-cart/cart" className={`${btnGhost} w-full`}>Back to cart</Link>
      </aside>
    </div>
  );
}