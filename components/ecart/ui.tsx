import type { ReactNode } from "react";
import { Star } from "lucide-react";

export const btn = "inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50";
export const btnGhost = "inline-flex items-center justify-center gap-2 rounded-full border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-50";
export const field = "w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/20";
export const card = "rounded-2xl border border-line bg-white shadow-sm";

export function StockBadge({ stock }: { stock: number }) {
  const [t, c] = stock === 0 ? ["Out of stock", "bg-red-50 text-red-700"] : stock <= 10 ? [`Only ${stock} left`, "bg-amber-50 text-amber-700"] : ["In stock", "bg-emerald-50 text-emerald-700"];
  return <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${c}`}>{t}</span>;
}
export function Rating({ value, count }: { value: number; count?: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-muted">
      <Star size={13} className="fill-amber-400 text-amber-400" />
      {value.toFixed(1)}{count ? ` (${count})` : ""}
    </span>
  );
}
export function Field({ label, err, children }: { label: string; err?: string; children: ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-ink">{label}</span>
      {children}
      {err && <span role="alert" className="mt-1 block text-xs text-red-600">{err}</span>}
    </label>
  );
}
export function Empty({ title, text, children }: { title: string; text?: string; children?: ReactNode }) {
  return (
    <div className={`${card} mx-auto max-w-lg p-10 text-center`}>
      <h2 className="text-xl font-semibold text-brand-dark">{title}</h2>
      {text && <p className="mt-2 text-sm text-muted">{text}</p>}
      <div className="mt-5 flex flex-wrap justify-center gap-3">{children}</div>
    </div>
  );
}