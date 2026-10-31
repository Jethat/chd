"use client";
import { useState } from "react";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { useStore } from "@/lib/ecart/store";
import { FAQS } from "@/lib/ecart/data";
import { Field, btn, card, field } from "@/components/ecart/ui";

export default function Support() {
  const { user, submitTicket } = useStore();
  const [q, setQ] = useState("");
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [done, setDone] = useState("");

  const faqs = FAQS.filter((x) => (x.q + x.a).toLowerCase().includes(q.toLowerCase()));
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (!f.name.trim()) er.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) er.email = "Enter a valid email.";
    if (!f.subject.trim()) er.subject = "Enter a subject.";
    if (f.message.trim().length < 10) er.message = "Please describe your query (min. 10 characters).";
    setErrs(er);
    if (Object.keys(er).length) return;
    setDone(submitTicket(f).id);
    setF({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mb-1 text-2xl font-bold text-brand-dark">Help &amp; support</h1>
      <p className="mb-6 text-sm text-muted">Find quick answers, chat with the assistant at the bottom right, or write to the helpdesk.</p>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <section>
          <h2 className="mb-3 font-semibold text-ink">Frequently asked questions</h2>
          <label htmlFor="faq-q" className="sr-only">Search FAQs</label>
          <input id="faq-q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search FAQs…" className={`${field} mb-3`} />
          <div className="space-y-2">
            {faqs.map((x) => (
              <details key={x.q} className={`${card} group p-4`}>
                <summary className="cursor-pointer list-none font-medium text-ink marker:hidden after:float-right after:text-brand after:content-['+'] group-open:after:content-['–']">{x.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-muted">{x.a}</p>
              </details>
            ))}
            {!faqs.length && <p className="text-sm text-muted">No matching questions. Send us a message instead.</p>}
          </div>
          <div className={`${card} mt-6 space-y-2 p-5 text-sm`}>
            <h3 className="font-semibold text-ink">Helpdesk</h3>
            <p className="flex items-center gap-2 text-muted"><Phone size={15} className="text-brand" /> 011-0000 0000 (Mon–Fri, 10:00–17:30)</p>
            <p className="flex items-center gap-2 text-muted"><Mail size={15} className="text-brand" /> info[at]example[dot]gov[dot]in</p>
          </div>
        </section>

        <section className={`${card} h-fit p-6`}>
          <h2 className="mb-4 font-semibold text-ink">Contact us</h2>
          {done ? (
            <div className="py-6 text-center"><CheckCircle2 className="mx-auto mb-2 text-emerald-600" size={40} /><p className="font-semibold text-ink">Message received</p><p className="text-sm text-muted">Your ticket number is <b>{done}</b>. We’ll reply by email.</p><button onClick={() => setDone("")} className="mt-4 text-sm font-medium text-brand hover:underline">Send another message</button></div>
          ) : (
            <form onSubmit={submit} className="space-y-4" noValidate>
              <Field label="Name" err={errs.name}><input value={f.name || user?.name || ""} onChange={(e) => setF({ ...f, name: e.target.value })} className={field} /></Field>
              <Field label="Email" err={errs.email}><input type="email" value={f.email || user?.email || ""} onChange={(e) => setF({ ...f, email: e.target.value })} className={field} /></Field>
              <Field label="Subject" err={errs.subject}><input value={f.subject} onChange={(e) => setF({ ...f, subject: e.target.value })} className={field} /></Field>
              <Field label="Message" err={errs.message}><textarea rows={4} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} className={field} /></Field>
              <button className={`${btn} w-full`}>Send message</button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}