"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Printer } from "lucide-react";
import { useStore } from "@/lib/ecart/store";
import { fmtDate, money } from "@/lib/ecart/utils";
import { Empty, btn, btnGhost } from "@/components/ecart/ui";

export default function Invoice() {
  const { id } = useParams<{ id: string }>();
  const { ready, orderById } = useStore();
  const o = orderById(id);

  if (!ready) return null;
  if (!o) return <Empty title="Invoice not found" text="Log in with the account that placed this order."><Link href="/e-cart/orders" className={btn}>My orders</Link></Empty>;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex justify-end gap-3 print:hidden">
        <Link href="/e-cart/orders" className={btnGhost}>Back</Link>
        <button onClick={() => window.print()} className={btn}><Printer size={16} /> Print / Save as PDF</button>
      </div>
      <article className="rounded-2xl border border-line bg-white p-8 print:border-0 print:p-0">
        <header className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-brand pb-5">
          <div>
            <h1 className="text-xl font-bold text-brand-dark">Central Hindi Directorate</h1>
            <p className="text-sm text-muted">Ministry of Education, Government of India</p>
            <p className="text-sm text-muted">West Block-VII, R.K. Puram, New Delhi – 110066</p>
          </div>
          <div className="text-right text-sm">
            <p className="text-lg font-bold text-ink">TAX INVOICE</p>
            <p>Invoice no: <b>INV-{o.id}</b></p>
            <p>Order no: {o.id}</p>
            <p>Date: {fmtDate(o.createdAt)}</p>
          </div>
        </header>

        <section className="grid gap-6 py-5 text-sm sm:grid-cols-2">
          <div><p className="text-xs uppercase text-muted">Billed &amp; shipped to</p><p className="font-semibold">{o.address.name}</p><p>{o.address.line1}</p><p>{o.address.city}, {o.address.state} – {o.address.pin}</p><p>Mobile: {o.address.mobile}</p></div>
          <div><p className="text-xs uppercase text-muted">Payment</p><p>{o.payment.method} · {o.payment.label}</p><p>Transaction ref: {o.payment.ref}</p><p>Status: Paid</p></div>
        </section>

        <table className="w-full text-sm">
          <thead><tr className="border-y border-line bg-brand-light text-left text-xs uppercase text-brand-dark"><th className="px-3 py-2">#</th><th className="px-3 py-2">Item</th><th className="px-3 py-2 text-right">Rate</th><th className="px-3 py-2 text-right">Qty</th><th className="px-3 py-2 text-right">Amount</th></tr></thead>
          <tbody>{o.items.map((i, n) => <tr key={i.bookId} className="border-b border-line"><td className="px-3 py-2">{n + 1}</td><td className="px-3 py-2">{i.title}</td><td className="px-3 py-2 text-right">{money(i.price)}</td><td className="px-3 py-2 text-right">{i.qty}</td><td className="px-3 py-2 text-right">{money(i.price * i.qty)}</td></tr>)}</tbody>
        </table>

        <dl className="ml-auto mt-4 w-full max-w-xs space-y-1.5 text-sm">
          <div className="flex justify-between"><dt>Subtotal</dt><dd>{money(o.subtotal)}</dd></div>
          {o.discount > 0 && <div className="flex justify-between"><dt>Discount ({o.coupon})</dt><dd>−{money(o.discount)}</dd></div>}
          <div className="flex justify-between"><dt>Shipping</dt><dd>{o.shipping ? money(o.shipping) : "Free"}</dd></div>
          <div className="flex justify-between border-t border-ink pt-2 text-base font-bold"><dt>Total paid</dt><dd>{money(o.total)}</dd></div>
        </dl>
        <p className="mt-8 border-t border-line pt-4 text-xs text-muted">Prices are inclusive of applicable taxes. This is a computer-generated invoice and needs no signature.</p>
      </article>
    </div>
  );
}