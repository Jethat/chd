"use client";
import { useState } from "react";
import { useStore } from "@/lib/ecart/store";
import type { Role } from "@/lib/ecart/data";
import { card } from "../ui";

const ROLES: Role[] = ["customer", "creator", "reviewer", "approver", "publisher"];

export default function Roles() {
  const { user, users, setRole } = useStore();
  const [err, setErr] = useState("");
  const can = user?.role === "publisher";
  return (
    <div>
      <p className="mb-4 text-sm text-muted">Assign content roles to registered users. Role changes are recorded in the audit trail. {!can && "Only the publisher can change roles."}</p>
      {err && <p role="alert" className="mb-3 text-sm text-red-600">{err}</p>}
      <div className={`${card} overflow-x-auto`}>
        <table className="w-full min-w-[520px] text-sm">
          <thead><tr className="border-b border-line bg-brand-light text-left text-xs uppercase text-brand-dark"><th className="p-3">Name</th><th className="p-3">Contact</th><th className="p-3">Role</th></tr></thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-line last:border-0">
                <td className="p-3 font-medium text-ink">{u.name}{u.id === user?.id && <span className="ml-2 text-xs text-muted">(you)</span>}</td>
                <td className="p-3 text-muted">{u.email ?? u.mobile}</td>
                <td className="p-3">
                  <select aria-label={`Role of ${u.name}`} disabled={!can || u.id === user?.id} value={u.role}
                    onChange={(e) => { const r = setRole(u.id, e.target.value as Role); setErr(r.ok ? "" : r.error ?? ""); }}
                    className="rounded-lg border border-line bg-white px-2 py-1 text-xs capitalize disabled:bg-gray-50">
                    {ROLES.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}