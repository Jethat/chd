"use client";
import { useState } from "react";
import Link from "next/link";
import { useStore } from "@/lib/ecart/store";
import { ORDER_FLOW, type OrderStatus } from "@/lib/ecart/data";
import { fmtDate, money } from "@/lib/ecart/utils";
import { card, field } from "../ui";

export default function OrdersAdmin() {
  const { allOrders, users, user, setOrderStatus } = useStore();
  const [status, setStatus] = useState("");
  const [q, setQ] = useState("");
  const [err, setErr] = useState("");
  const can = user?.role === "publisher";
  const nameOf = (id: string) => users.find((u) => u.id === id)?.name ?? "—";
  const rows = allOrders.filter((o) => (!status || o.status === status) && (o.id + nameOf(o.userId)).toLowerCase().includes(q.toLowerCase()));

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <label className="sr-only" htmlFor="o-q">Search orders</label>
        <input id="o-q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search order ID or customer…" className={`${field} !w-64`} />
        <label className="sr-only" htmlFor="o-s">Filter by status</label>
        <select id="o-s" value={status} onChange={(e) => setStatus(e.target.value)} className={`${field} !w-auto`}><option value="">All statuses</option>{[...ORDER_FLOW, "Cancelled"].map((s) => <option key={s}>{s}</option>)}</select>
        <span className="text-sm text-muted">{rows.length} order(s)</span>
      </div>
      {!can && <p className="mb-3 rounded-lg bg-amber-50 p-3 text-xs text-amber-800">View only. The publisher role updates order status. Customers get App, SMS and email alerts on every change.</p>}
      {err && <p role="alert" className="mb-3 text-sm text-red-600">{err}</p>}
      <div className={`${card} overflow-x-auto`}>
        <table className="w-full min-w-[720px] text-sm">
          <thead><tr className="border-b border-line bg-brand-light text-left text-xs uppercase text-brand-dark"><th className="p-3">Order</th><th className="p-3">Customer</th><th className="p-3">Date</th><th className="p-3">Payment</th><th className="p-3 text-right">Total</th><th className="p-3">Status</th></tr></thead>
          <tbody>
            {rows.map((o) => (
              <tr key={o.id} className="border-b border-line last:border-0">
                <td className="p-3"><Link href={`/e-cart/invoice/${o.id}`} className="font-medium text-brand hover:underline">{o.id}</Link></td>
                <td className="p-3">{nameOf(o.userId)}</td>
                <td className="p-3 text-muted">{fmtDate(o.createdAt)}</td>
                <td className="p-3 text-muted">{o.payment.method}</td>
                <td className="p-3 text-right font-semibold">{money(o.total)}</td>
                <td className="p-3">
                  <select aria-label={`Status of ${o.id}`} disabled={!can || o.status === "Cancelled"} value={o.status}
                    onChange={(e) => { const r = setOrderStatus(o.id, e.target.value as OrderStatus); setErr(r.ok ? "" : r.error ?? ""); }}
                    className="rounded-lg border border-line bg-white px-2 py-1 text-xs disabled:bg-gray-50">
                    {[...ORDER_FLOW, "Cancelled"].map((s) => <option key={s}>{s}</option>)}
                  </select>
                </td>
              </tr>
            ))}
            {!rows.length && <tr><td colSpan={6} className="p-8 text-center text-muted">No orders yet. Place one from the storefront or load demo data on the dashboard.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}