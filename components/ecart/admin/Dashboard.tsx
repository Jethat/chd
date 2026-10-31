"use client";
import { useMemo, type ReactNode } from "react";
import { Database, Download, Printer } from "lucide-react";
import { useStore } from "@/lib/ecart/store";
import { ORDER_FLOW } from "@/lib/ecart/data";
import { downloadCsv, fmtDate, money } from "@/lib/ecart/utils";
import { btn, btnGhost, card } from "../ui";

type Row = [string, number, string?];

function Bars({ rows, fmt = String }: { rows: Row[]; fmt?: (n: number) => string }) {
  const max = Math.max(1, ...rows.map((r) => r[1]));
  return (
    <ul className="space-y-2">
      {rows.length === 0 && <li className="text-xs text-muted">No data yet.</li>}
      {rows.map(([k, v, tone]) => (
        <li key={k} className="grid grid-cols-[minmax(0,9rem)_1fr_auto] items-center gap-3 text-xs">
          <span className="truncate text-muted" title={k}>{k}</span>
          <span className="h-2.5 overflow-hidden rounded-full bg-line"><span className={`block h-full rounded-full ${tone ?? "bg-brand"}`} style={{ width: `${(v / max) * 100}%` }} /></span>
          <span className="font-semibold text-ink">{fmt(v)}</span>
        </li>
      ))}
    </ul>
  );
}
const Panel = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className={`${card} break-inside-avoid p-5`}><h3 className="mb-4 text-sm font-semibold text-ink">{title}</h3>{children}</section>
);
const Stat = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
  <div className={`${card} p-4`}><p className="text-xs text-muted">{label}</p><p className="mt-1 text-2xl font-bold text-brand-dark">{value}</p>{sub && <p className="text-xs text-muted">{sub}</p>}</div>
);

export default function Dashboard() {
  const { allOrders, allBooks, users, carts, wishes, seedDemo } = useStore();

  const d = useMemo(() => {
    const live = allOrders.filter((o) => o.status !== "Cancelled");
    const revenue = live.reduce((t, o) => t + o.total, 0);
    const catOf = new Map(allBooks.map((b) => [b.id, b.category]));
    const priceOf = new Map(allBooks.map((b) => [b.id, b.price]));
    const byCat: Record<string, number> = {};
    const units: Record<string, number> = {};
    live.forEach((o) => o.items.forEach((i) => {
      const c = catOf.get(i.bookId) ?? "Other";
      byCat[c] = (byCat[c] ?? 0) + i.price * i.qty;
      units[i.title] = (units[i.title] ?? 0) + i.qty;
    }));
    const days = Array.from({ length: 7 }, (_, k) => {
      const dt = new Date(Date.now() - (6 - k) * 864e5);
      return { label: dt.toLocaleDateString("en-IN", { weekday: "short" }), v: live.filter((o) => new Date(o.createdAt).toDateString() === dt.toDateString()).reduce((t, o) => t + o.total, 0) };
    });
    const pay: Record<string, number> = {};
    live.forEach((o) => { pay[o.payment.method] = (pay[o.payment.method] ?? 0) + 1; });
    const status = [...ORDER_FLOW, "Cancelled"].map((s) => [s, allOrders.filter((o) => o.status === s).length] as Row);
    const customers = users.filter((u) => u.role === "customer");
    const buyers = new Set(live.map((o) => o.userId));
    const repeat = [...buyers].filter((id) => live.filter((o) => o.userId === id).length > 1).length;
    let cartUsers = 0, cartValue = 0;
    Object.values(carts).forEach((c) => { if (c.length) { cartUsers++; cartValue += c.reduce((t, l) => t + (priceOf.get(l.bookId) ?? 0) * l.qty, 0); } });
    const wish: Record<string, number> = {};
    Object.values(wishes).forEach((w) => w.forEach((id) => { const t = allBooks.find((b) => b.id === id)?.title; if (t) wish[t] = (wish[t] ?? 0) + 1; }));
    const top = (o: Record<string, number>, n = 5): Row[] => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, n);
    return { live, revenue, days, byCat: top(byCat), units: top(units), pay: top(pay), status, customers, buyers: buyers.size, repeat, cartUsers, cartValue, wish: top(wish) };
  }, [allOrders, allBooks, users, carts, wishes]);

  const nameOf = (id: string) => users.find((u) => u.id === id)?.name ?? "—";
  const stock: Row[] = allBooks.filter((b) => b.status === "published").sort((a, b) => a.stock - b.stock).slice(0, 8)
    .map((b) => [b.title, b.stock, b.stock === 0 ? "bg-red-500" : b.stock <= 10 ? "bg-amber-500" : "bg-emerald-500"]);
  const maxDay = Math.max(1, ...d.days.map((x) => x.v));

  const exportSales = () => downloadCsv("ecart-sales.csv", [
    ["Order ID", "Date", "Customer", "Item", "Qty", "Rate", "Amount", "Payment", "Status"],
    ...allOrders.flatMap((o) => o.items.map((i) => [o.id, fmtDate(o.createdAt), nameOf(o.userId), i.title, i.qty, i.price, i.price * i.qty, o.payment.method, o.status])),
  ]);
  const exportStock = () => downloadCsv("ecart-inventory.csv", [
    ["ID", "Title", "Category", "Status", "Price", "MRP", "Stock"],
    ...allBooks.map((b) => [b.id, b.title, b.category, b.status, b.price, b.mrp, b.stock]),
  ]);

  return (
    <div className="space-y-6">
      <div className="hidden print:block"><h1 className="text-xl font-bold">CHD E-Cart: sales &amp; inventory report</h1><p className="text-sm">Generated {fmtDate(new Date().toISOString())}</p></div>
      <div className="flex flex-wrap gap-3 print:hidden">
        <button onClick={exportSales} className={btn}><Download size={16} /> Sales (Excel/CSV)</button>
        <button onClick={exportStock} className={btnGhost}><Download size={16} /> Inventory (Excel/CSV)</button>
        <button onClick={() => window.print()} className={btnGhost}><Printer size={16} /> Report (PDF)</button>
        <button onClick={() => seedDemo()} className={btnGhost}><Database size={16} /> Load demo data</button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Revenue" value={money(d.revenue)} sub="Excluding cancelled orders" />
        <Stat label="Orders" value={String(allOrders.length)} sub={`${allOrders.length - d.live.length} cancelled`} />
        <Stat label="Average order value" value={money(d.live.length ? Math.round(d.revenue / d.live.length) : 0)} />
        <Stat label="Customers" value={String(d.customers.length)} sub={`${d.buyers} have purchased`} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Revenue, last 7 days">
          <div className="flex h-44 items-end gap-3">
            {d.days.map((x) => (
              <div key={x.label} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                <span className="text-[10px] font-semibold text-ink">{x.v ? money(x.v) : ""}</span>
                <div className="w-full rounded-t-md bg-brand transition-all" style={{ height: `${(x.v / maxDay) * 70}%`, minHeight: 3 }} />
                <span className="text-[11px] text-muted">{x.label}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Sales by category"><Bars rows={d.byCat} fmt={money} /></Panel>
        <Panel title="Top selling books (units)"><Bars rows={d.units} /></Panel>
        <Panel title="Orders by status"><Bars rows={d.status} /></Panel>
        <Panel title="Payment methods"><Bars rows={d.pay} /></Panel>
        <Panel title="Inventory: lowest stock first"><Bars rows={stock} /><p className="mt-3 text-[11px] text-muted">Red: out of stock · Amber: 10 or fewer · Green: healthy</p></Panel>
      </div>

      <Panel title="User behaviour">
        <div className="grid gap-4 sm:grid-cols-4">
          <Stat label="Repeat buyers" value={String(d.repeat)} sub={d.buyers ? `${Math.round((d.repeat / d.buyers) * 100)}% of buyers` : undefined} />
          <Stat label="Purchase conversion" value={d.customers.length ? `${Math.round((d.buyers / d.customers.length) * 100)}%` : "0%"} sub="Customers who bought" />
          <Stat label="Open carts" value={String(d.cartUsers)} sub="Not yet checked out" />
          <Stat label="Cart value at risk" value={money(d.cartValue)} />
        </div>
        <h4 className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wide text-muted">Most wishlisted</h4>
        <Bars rows={d.wish} />
      </Panel>
    </div>
  );
}