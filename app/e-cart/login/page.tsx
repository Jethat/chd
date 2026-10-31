"use client";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, ShieldCheck, Smartphone } from "lucide-react";
import { useStore } from "@/lib/ecart/store";
import { Field, btn, card, field } from "@/components/ecart/ui";

function Login() {
  const { sendOtp, verifyOtp, user } = useStore();
  const router = useRouter();
  const next = useSearchParams().get("next") || "/e-cart";
  const [mode, setMode] = useState<"email" | "mobile">("email");
  const [ident, setIdent] = useState("");
  const [name, setName] = useState("");
  const [needName, setNeedName] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const [demo, setDemo] = useState("");
  const [wait, setWait] = useState(0);

  useEffect(() => { if (user) router.replace(next); }, [user, next, router]);
  useEffect(() => { if (wait <= 0) return; const t = setTimeout(() => setWait(wait - 1), 1000); return () => clearTimeout(t); }, [wait]);

  const send = () => {
    const r = sendOtp(ident, name);
    if (r.needName) { setNeedName(true); setErr("You look new here. Enter your name to register."); return; }
    if (!r.ok) return setErr(r.error ?? "");
    setErr(""); setDemo(r.demoOtp ?? ""); setStep(2); setWait(30); setCode("");
  };
  const verify = () => { const r = verifyOtp(code); if (!r.ok) setErr(r.error ?? ""); };

  return (
    <div className={`${card} mx-auto max-w-md p-8`}>
      <div className="mb-6 text-center">
        <span className="mx-auto mb-3 grid size-12 place-items-center rounded-full bg-brand-light text-brand"><ShieldCheck /></span>
        <h1 className="text-xl font-bold text-brand-dark">Log in or register</h1>
        <p className="text-sm text-muted">We’ll send a one-time password to verify you.</p>
      </div>

      {step === 1 ? (
        <form onSubmit={(e) => { e.preventDefault(); send(); }} className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {([["email", Mail, "Email"], ["mobile", Smartphone, "Mobile"]] as const).map(([m, Icon, label]) => (
              <button type="button" key={m} onClick={() => { setMode(m); setIdent(""); setErr(""); setNeedName(false); }}
                className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 text-sm font-medium ${mode === m ? "border-brand bg-brand-light text-brand-dark" : "border-line"}`}><Icon size={16} /> {label}</button>
            ))}
          </div>
          <Field label={mode === "email" ? "Email address" : "Mobile number"}>
            <input value={ident} onChange={(e) => setIdent(e.target.value)} type={mode === "email" ? "email" : "tel"} inputMode={mode === "email" ? "email" : "numeric"} maxLength={mode === "mobile" ? 10 : 80} autoFocus className={field} placeholder={mode === "email" ? "you@example.com" : "10-digit number"} />
          </Field>
          {needName && <Field label="Your name"><input value={name} onChange={(e) => setName(e.target.value)} className={field} autoFocus /></Field>}
          {err && <p role="alert" className="text-sm text-red-600">{err}</p>}
          <button className={`${btn} w-full`}>Send OTP</button>
        </form>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); verify(); }} className="space-y-4">
          <p className="text-center text-sm text-muted">Enter the 6-digit code sent to <b className="text-ink">{ident}</b></p>
          <label className="sr-only" htmlFor="otp">One-time password</label>
          <input id="otp" value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))} inputMode="numeric" autoComplete="one-time-code" autoFocus
            className="w-full rounded-xl border border-line py-3 text-center text-2xl font-bold tracking-[0.5em] outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
          <p className="rounded-lg bg-amber-50 p-3 text-xs text-amber-800">Demo mode: no SMS or email is sent. Your OTP is <b className="text-sm">{demo}</b>.</p>
          {err && <p role="alert" className="text-sm text-red-600">{err}</p>}
          <button disabled={code.length !== 6} className={`${btn} w-full`}>Verify &amp; continue</button>
          <div className="flex justify-between text-sm">
            <button type="button" onClick={() => { setStep(1); setErr(""); }} className="text-muted hover:text-brand">Change {mode}</button>
            <button type="button" disabled={wait > 0} onClick={send} className="text-brand disabled:text-muted">{wait > 0 ? `Resend in ${wait}s` : "Resend OTP"}</button>
          </div>
        </form>
      )}
      <p className="mt-6 text-center text-sm text-muted">Just looking? <Link href="/e-cart" className="font-medium text-brand hover:underline">Continue as guest</Link></p>
    </div>
  );
}

export default function Page() {
  return <Suspense fallback={null}><Login /></Suspense>;
}