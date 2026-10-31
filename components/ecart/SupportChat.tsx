"use client";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { useStore } from "@/lib/ecart/store";
import { SHIP_FLAT, SHIP_FREE_ABOVE, money } from "@/lib/ecart/utils";

type Msg = { from: "bot" | "me"; text: string };
const QUICK = ["Track my order", "Payment options", "Shipping charges", "Cancel an order"];

export default function SupportChat() {
  const { orders } = useStore();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: "Namaste! I’m the CHD E-Cart assistant. Ask me about orders, payments or shipping." }]);
  const end = useRef<HTMLDivElement>(null);
  useEffect(() => { end.current?.scrollIntoView({ block: "end" }); }, [msgs, open]);

  const reply = (t: string) => {
    const id = t.match(/CHD-\d{4}-\d{5}/i)?.[0].toUpperCase();
    if (id) {
      const o = orders.find((x) => x.id === id);
      return o ? `Order ${o.id} is currently “${o.status}”. Open My Orders for the full tracking timeline.` : `I couldn’t find ${id} in your account. Please log in with the account used for the order.`;
    }
    if (/track|status|where/i.test(t)) return "Share your order number (for example CHD-2026-01001) or open My Orders for live tracking.";
    if (/pay|upi|card|bank/i.test(t)) return "We accept UPI, Net Banking and Credit/Debit cards. Card details are never stored.";
    if (/ship|deliver|charge/i.test(t)) return `Shipping is free on orders of ${money(SHIP_FREE_ABOVE)} and above, otherwise ${money(SHIP_FLAT)}. You’ll get SMS and email alerts at each stage.`;
    if (/cancel|refund|return/i.test(t)) return "Orders can be cancelled until they are packed, from My Orders. Refunds go back to the original payment method.";
    if (/otp|login|sign/i.test(t)) return "Login uses a one-time password sent to your email or mobile, valid for 5 minutes.";
    return "I’m not sure about that. Please check the FAQs or send a message from the Support page and the helpdesk will reply.";
  };
  const send = (t: string) => {
    if (!t.trim()) return;
    setMsgs((m) => [...m, { from: "me", text: t }]);
    setText("");
    setTimeout(() => setMsgs((m) => [...m, { from: "bot", text: reply(t) }]), 450);
  };

  return (
    <div className="print:hidden">
      <button onClick={() => setOpen(!open)} aria-label={open ? "Close chat" : "Open support chat"} aria-expanded={open}
        className="fixed bottom-5 right-5 z-[60] grid size-14 place-items-center rounded-full bg-brand text-white shadow-xl transition hover:scale-105 hover:bg-brand-dark">
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </button>
      {open && (
        <div role="dialog" aria-label="Support chat" className="fixed bottom-24 right-5 z-[60] flex h-[28rem] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
          <div className="bg-brand px-4 py-3 text-white">
            <p className="text-sm font-semibold">E-Cart Assistant</p>
            <p className="text-xs text-white/80">Instant answers, 24×7</p>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto bg-brand-light/40 p-3">
            {msgs.map((m, i) => (
              <p key={i} className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${m.from === "me" ? "ml-auto bg-brand text-white" : "bg-white text-ink shadow-sm"}`}>{m.text}</p>
            ))}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {QUICK.map((c) => <button key={c} onClick={() => send(c)} className="rounded-full border border-brand/40 bg-white px-2.5 py-1 text-xs text-brand hover:bg-brand-light">{c}</button>)}
            </div>
            <div ref={end} />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(text); }} className="flex gap-2 border-t border-line p-2">
            <label htmlFor="chat-in" className="sr-only">Message</label>
            <input id="chat-in" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your question…"
              className="min-w-0 flex-1 rounded-full border border-line px-3 py-2 text-sm outline-none focus:border-brand" />
            <button aria-label="Send" className="grid size-10 place-items-center rounded-full bg-brand text-white hover:bg-brand-dark"><Send size={16} /></button>
          </form>
        </div>
      )}
    </div>
  );
}