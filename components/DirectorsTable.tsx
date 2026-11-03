"use client";
import { useMemo, useState } from "react";
import { Search, UserRound } from "lucide-react";
import { directors, type Director } from "../app/about/ex-directors/data";

const DECADE_TONE: Record<number, string> = {
  1960: "bg-amber-100 text-amber-900 border-amber-200",
  1970: "bg-blue-100 text-blue-900 border-blue-200",
  1980: "bg-emerald-100 text-emerald-900 border-emerald-200",
  1990: "bg-purple-100 text-purple-900 border-purple-200",
  2000: "bg-rose-100 text-rose-900 border-rose-200",
  2010: "bg-teal-100 text-teal-900 border-teal-200",
  2020: "bg-indigo-100 text-indigo-900 border-indigo-200",
};

const tone = (from: number) => DECADE_TONE[Math.floor(from / 10) * 10] ?? DECADE_TONE[2020];
const tenure = (d: Director) => `${d.from}–${d.to ?? "Present"}`;

export default function DirectorsTable() {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    return directors.filter((d) => !t || `${d.name} ${tenure(d)}`.toLowerCase().includes(t));
  }, [q]);

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-muted hc:text-neutral-300">
          Showing <b className="text-ink hc:text-white">{list.length}</b> of {directors.length} directors. Badge colour shows the decade the
          tenure began.
        </p>
        <label className="relative block w-full sm:w-72">
          <span className="sr-only">Search directors</span>
          <Search size={15} aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name or year…"
            className="w-full rounded-full border border-line bg-white py-2 pl-9 pr-3 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/20 hc:border-white hc:bg-black hc:text-white"
          />
        </label>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-white shadow-sm hc:border-white hc:bg-neutral-950">
        <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-500 via-brand to-emerald-600" />

        <div className="overflow-x-auto">
          <table className="w-full min-w-[460px] text-left text-sm">
            <caption className="sr-only">Directors of the Central Hindi Directorate with their tenures</caption>
            <thead>
              <tr className="border-b border-line bg-slate-50/80 text-xs uppercase tracking-wider text-brand-dark hc:border-white hc:bg-neutral-900 hc:text-white">
                <th scope="col" className="w-20 px-5 py-3.5 pt-5 font-bold">Sr. No.</th>
                <th scope="col" className="px-5 py-3.5 pt-5 font-bold">Director</th>
                <th scope="col" className="w-44 px-5 py-3.5 pt-5 font-bold">Tenure</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 hc:divide-white/20">
              {list.map((d) => {
                const current = d.to === undefined;
                return (
                  <tr
                    key={d.no}
                    className={`transition-colors hover:bg-brand-light/40 hc:hover:bg-neutral-900 ${current ? "bg-amber-50/60 hc:bg-neutral-900" : ""}`}
                  >
                    <td className="px-5 py-3.5 font-mono text-xs font-bold text-muted hc:text-neutral-300">{String(d.no).padStart(2, "0")}</td>
                    <th scope="row" className="px-5 py-3.5 font-semibold text-ink hc:text-white">
                      <span className="flex items-center gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-light text-brand hc:bg-neutral-800 hc:text-white">
                          <UserRound size={16} aria-hidden="true" />
                        </span>
                        <span className="flex flex-wrap items-center gap-2">
                          {d.name}
                          {current && (
                            <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-white hc:bg-white hc:text-black">
                              Current Director
                            </span>
                          )}
                        </span>
                      </span>
                    </th>
                    <td className="px-5 py-3.5">
                      <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-bold tabular-nums hc:bg-neutral-800 hc:text-white ${tone(d.from)}`}>
                        {tenure(d)}
                      </span>
                    </td>
                  </tr>
                );
              })}
              {list.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-5 py-12 text-center text-sm text-muted hc:text-neutral-300">
                    No directors match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}