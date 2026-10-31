"use client";
import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Check, FileText, PartyPopper, RotateCcw, XCircle } from "lucide-react";
import { useStore } from "@/lib/ecart/store";
import { ORDER_FLOW, type Order, type OrderStatus } from "@/lib/ecart/data";
import { fmtDate, money } from "@/lib/ecart/utils";
import { Empty, btn, btnGhost, card } from "@/components/ecart/ui";

function Timeline({ o }: { o: Order }) {
  if (o.status === "Cancelled")
    return <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">This order was cancelled on {fmtDate(o.history[o.history.length - 1].ts)}.</p>;
  const at = (s: OrderStatus) => o.history.find((h) => h.status === s)?.ts;
  return (
    <ol className="grid gap-4 sm:grid-cols-6">
      {ORDER_FLOW.map((s) => {
        const done = !!at(s);
        const live = o.status === s && s !== "Delivered";
        return (
          <li key={s} className="flex gap-3 sm:block">
            <span className={`grid size-8 shrink-0 place-items-center rounded-full ${done ? "bg-brand text-white" : "bg-line text-muted"} ${live ? "animate-pulse ring-4 ring-brand/25" : ""}`}>{done && <Check size={16} />}</span>
            <div className="sm:mt-2"><p className={`text-sm font-medium ${done ? "text-ink" : "text-muted"}`}>{s}</p>{at(s) && <p className="text-[11px] text-muted">{fmtDate(at(s)!)}</p>}</div>
          </li>
        );
      })}
    </ol>
  );
}

function Orders() {
  const { user, orders, cancelOrder, addToCart } = useStore();
  const router = useRouter();
  const placed = useSearchParams().get("placed");
  const [open, setOpen] = useState<string | null>(placed);

  if (!user) return <Empty title="Please log in" text="Log in to see your orders and invoices."><Link href="/e-cart/login?next=/e-cart/orders" className={btn}>Log in</Link></Empty>;

  return (
    <div className="mx-auto max-w-4xl">
      {placed && (
        <div className="mb-5 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4 text-emerald-900">
          <PartyPopper className="mt-0.5 shrink-0" />
          <div><p className="font-semibold">Order {placed} placed successfully</p><p className="text-sm">A confirmation has been sent by SMS and email. Track it below.</p></div>
        </div>
      )}
      <h1 className="mb-1 text-2xl font-bold text-brand-dark">My orders</h1>
      <p className="mb-5 flex items-center gap-2 text-sm text-muted"><span className="size-2 animate-pulse rounded-full bg-emerald-500" /> Live tracking: statuses update automatically</p>

      {orders.length === 0 ? (
        <Empty title="No orders yet" text="Your orders will appear here."><Link href="/e-cart" className={btn}>Start shopping</Link></Empty>
      ) : (
        <ul className="space-y-4">
          {orders.map((o) => {
            const isOpen = open === o.id;
            const cancellable = o.status === "Placed" || o.status === "Confirmed";
            return (
              <li key={o.id} className={`${card} overflow-hidden`}>
                <button onClick={() => setOpen(isOpen ? null : o.id)} aria-expanded={isOpen} className="flex w-full flex-wrap items-center justify-between gap-3 p-5 text-left">
                  <div><p className="font-semibold text-brand-dark">{o.id}</p><p className="text-xs text-muted">{fmtDate(o.createdAt)} · {o.items.reduce((t, i) => t + i.qty, 0)} item(s)</p></div>
                  <p className="font-bold text-ink">{money(o.total)}</p>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${o.status === "Delivered" ? "bg-emerald-50 text-emerald-700" : o.status === "Cancelled" ? "bg-red-50 text-red-700" : "bg-brand-light text-brand-dark"}`}>{o.status}</span>
                </button>
                {isOpen && (
                  <div className="space-y-5 border-t border-line p-5">
                    <Timeline o={o} />
                    <ul className="divide-y divide-line text-sm">{o.items.map((i) => <li key={i.bookId} className="flex justify-between py-2"><span>{i.title} × {i.qty}</span><span>{money(i.price * i.qty)}</span></li>)}</ul>
                    <div className="grid gap-4 text-sm sm:grid-cols-2">
                      <div><p className="text-xs text-muted">Delivering to</p><p>{o.address.name}, {o.address.line1}, {o.address.city}, {o.address.state} {o.address.pin}</p></div>
                      <div><p className="text-xs text-muted">Payment</p><p>{o.payment.method} · {o.payment.label}</p><p className="text-xs text-muted">Ref {o.payment.ref}</p></div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link href={`/e-cart/invoice/${o.id}`} className={btn}><FileText size={16} /> View invoice</Link>
                      <button onClick={() => { o.items.forEach((i) => addToCart(i.bookId, i.qty)); router.push("/e-cart/cart"); }} className={btnGhost}><RotateCcw size={16} /> Reorder</button>
                      {cancellable && <button onClick={() => cancelOrder(o.id)} className="inline-flex items-center gap-2 rounded-full border border-red-300 px-5 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-50"><XCircle size={16} /> Cancel order</button>}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function Page() {
  return <Suspense fallback={null}><Orders /></Suspense>;
}