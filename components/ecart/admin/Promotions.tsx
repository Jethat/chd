"use client";
import { useState } from "react";
import { useStore } from "@/lib/ecart/store";
import { money } from "@/lib/ecart/utils";
import { Field, btn, card, field } from "../ui";

export default function Promotions() {
  const { user, promos, savePromo } = useStore();
  const can = !!user && ["approver", "publisher"].includes(user.role);
  const [f, setF] = useState({ code: "", percent: 10, minOrder: 0 });
  const [err, setErr] = useState("");

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[A-Z0-9]{4,12}$/.test(f.code)) return setErr("Code must be 4–12 letters or digits.");
    if (f.percent < 1 || f.percent > 90) return setErr("Discount must be between 1% and 90%.");
    const r = savePromo({ ...f, active: true });
    setErr(r.error ?? "");
    if (r.ok) setF({ code: "", percent: 10, minOrder: 0 });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <div className={`${card} overflow-x-auto`}>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-line bg-brand-light text-left text-xs uppercase text-brand-dark"><th className="p-3">Code</th><th className="p-3">Discount</th><th className="p-3">Minimum order</th><th className="p-3">Active</th></tr></thead>
          <tbody>
            {promos.map((p) => (
              <tr key={p.code} className="border-b border-line last:border-0">
                <td className="p-3 font-mono font-semibold text-brand-dark">{p.code}</td>
                <td className="p-3">{p.percent}%</td>
                <td className="p-3">{money(p.minOrder)}</td>
                <td className="p-3">
                  <button role="switch" aria-checked={p.active} disabled={!can} aria-label={`Toggle ${p.code}`} onClick={() => savePromo({ ...p, active: !p.active })}
                    className={`relative h-6 w-11 rounded-full transition disabled:opacity-50 ${p.active ? "bg-brand" : "bg-line"}`}>
                    <span className={`absolute top-0.5 size-5 rounded-full bg-white shadow transition-all ${p.active ? "left-[22px]" : "left-0.5"}`} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form onSubmit={add} className={`${card} h-fit space-y-4 p-5`}>
        <h2 className="font-semibold text-ink">New promotion</h2>
        {!can && <p className="rounded-lg bg-amber-50 p-3 text-xs text-amber-800">Only an approver or publisher can manage promotions.</p>}
        <Field label="Coupon code"><input disabled={!can} value={f.code} onChange={(e) => setF({ ...f, code: e.target.value.toUpperCase() })} className={`${field} font-mono`} placeholder="DIWALI15" /></Field>
        <Field label="Discount (%)"><input disabled={!can} type="number" value={f.percent} onChange={(e) => setF({ ...f, percent: +e.target.value })} className={field} /></Field>
        <Field label="Minimum order (₹)"><input disabled={!can} type="number" min={0} value={f.minOrder} onChange={(e) => setF({ ...f, minOrder: +e.target.value })} className={field} /></Field>
        {err && <p role="alert" className="text-sm text-red-600">{err}</p>}
        <button disabled={!can} className={`${btn} w-full`}>Create and announce</button>
        <p className="text-xs text-muted">Active promotions are announced to customers through the notification centre.</p>
      </form>
    </div>
  );
}