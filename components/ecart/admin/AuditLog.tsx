"use client";
import { useState } from "react";
import { Download } from "lucide-react";
import { useStore } from "@/lib/ecart/store";
import { downloadCsv, fmtDate } from "@/lib/ecart/utils";
import { btnGhost, card, field } from "../ui";

export default function AuditLog() {
  const { audit } = useStore();
  const [q, setQ] = useState("");
  const rows = audit.filter((a) => `${a.actor} ${a.role} ${a.action} ${a.target}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <label className="sr-only" htmlFor="a-q">Search audit trail</label>
        <input id="a-q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter by person, role, action…" className={`${field} !w-72`} />
        <button onClick={() => downloadCsv("ecart-audit-trail.csv", [["Time", "User", "Role", "Action", "Target"], ...audit.map((a) => [fmtDate(a.ts), a.actor, a.role, a.action, a.target])])} className={btnGhost}><Download size={16} /> Export CSV</button>
      </div>
      <div className={`${card} overflow-x-auto`}>
        <table className="w-full min-w-[640px] text-sm">
          <thead><tr className="border-b border-line bg-brand-light text-left text-xs uppercase text-brand-dark"><th className="p-3">Time</th><th className="p-3">User</th><th className="p-3">Role</th><th className="p-3">Action</th><th className="p-3">Target</th></tr></thead>
          <tbody>
            {rows.map((a) => <tr key={a.id} className="border-b border-line last:border-0"><td className="p-3 text-muted">{fmtDate(a.ts)}</td><td className="p-3 font-medium">{a.actor}</td><td className="p-3 capitalize text-muted">{a.role}</td><td className="p-3">{a.action}</td><td className="p-3 text-muted">{a.target}</td></tr>)}
            {!rows.length && <tr><td colSpan={5} className="p-8 text-center text-muted">No activity recorded yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}