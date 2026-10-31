"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { useStore } from "@/lib/ecart/store";
import type { Notice } from "@/lib/ecart/data";
import { fmtDate } from "@/lib/ecart/utils";
import { Field, btn, card, field } from "../ui";

const CHANNELS: Notice["channels"] = ["App", "Email", "SMS"];
const TEMPLATES = [
  ["New release", "New release: <book title>", "Now available in the CHD E-Cart. Order your copy today."],
  ["Discount", "Special offer: 10% off", "Use code HINDI10 on orders above ₹300."],
] as const;

export default function Notify() {
  const { user, notices, broadcast } = useStore();
  const can = !!user && ["approver", "publisher"].includes(user.role);
  const [t, setT] = useState("");
  const [b, setB] = useState("");
  const [ch, setCh] = useState<Notice["channels"]>(["App", "Email"]);
  const [msg, setMsg] = useState("");
  const sent = notices.filter((n) => !n.userId);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (t.trim().length < 5 || b.trim().length < 5) return setMsg("Enter a title and a message.");
    if (!ch.length) return setMsg("Choose at least one channel.");
    const r = broadcast(t.trim(), b.trim(), ch);
    setMsg(r.ok ? "Notification sent to all customers." : r.error ?? "");
    if (r.ok) { setT(""); setB(""); }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <form onSubmit={send} className={`${card} h-fit space-y-4 p-5`}>
        <h2 className="font-semibold text-ink">Compose notification</h2>
        {!can && <p className="rounded-lg bg-amber-50 p-3 text-xs text-amber-800">Only an approver or publisher can send notifications.</p>}
        <div className="flex flex-wrap gap-2">{TEMPLATES.map(([n, title, body]) => <button type="button" key={n} disabled={!can} onClick={() => { setT(title); setB(body); }} className="rounded-full border border-brand/40 px-3 py-1 text-xs text-brand hover:bg-brand-light disabled:opacity-50">{n} template</button>)}</div>
        <Field label="Title"><input disabled={!can} value={t} onChange={(e) => setT(e.target.value)} className={field} /></Field>
        <Field label="Message"><textarea disabled={!can} rows={3} value={b} onChange={(e) => setB(e.target.value)} className={field} /></Field>
        <fieldset className="flex gap-4 text-sm"><legend className="mb-1 font-medium">Channels</legend>
          {CHANNELS.map((c) => <label key={c} className="flex items-center gap-1.5"><input type="checkbox" disabled={!can} checked={ch.includes(c)} onChange={() => setCh(ch.includes(c) ? ch.filter((x) => x !== c) : [...ch, c])} className="size-4 accent-brand" />{c === "App" ? "In-app / push" : c}</label>)}
        </fieldset>
        {msg && <p role="status" className="text-sm text-muted">{msg}</p>}
        <button disabled={!can} className={`${btn} w-full`}><Send size={16} /> Send to all customers</button>
      </form>

      <section className={`${card} p-5`}>
        <h2 className="mb-3 font-semibold text-ink">Recent broadcasts</h2>
        <ul className="divide-y divide-line">
          {sent.slice(0, 10).map((n) => (
            <li key={n.id} className="py-3"><p className="text-sm font-medium text-ink">{n.title}</p><p className="text-xs text-muted">{n.body}</p>
              <p className="mt-1 flex flex-wrap gap-1.5 text-[10px] text-muted">{n.channels.map((c) => <span key={c} className="rounded bg-line px-1.5 py-0.5 font-semibold">{c}</span>)}{fmtDate(n.ts)}</p></li>
          ))}
        </ul>
      </section>
    </div>
  );
}