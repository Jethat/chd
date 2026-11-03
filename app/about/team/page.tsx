import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, UserRound, Users } from "lucide-react";
import { officers, staff, type Person } from "./data";

export const metadata: Metadata = {
  title: "Who's Who | Central Hindi Directorate",
  description: "Officers and employees of the Central Hindi Directorate with their designations.",
};

/* ---------- colour themes (kept literal so Tailwind can see them) ---------- */
type Theme = { top: string; bg: string; icon: string; badge: string; head: string; zebra: string; chip: string; pill: string };

const blue: Theme = {
  top: "from-blue-600 to-indigo-600",
  bg: "from-blue-50/50 via-white to-indigo-50/20",
  icon: "bg-blue-600 text-white",
  badge: "border-blue-200 bg-blue-100 text-blue-900",
  head: "border-blue-600 text-blue-900",
  zebra: "odd:bg-blue-50/40",
  chip: "border-blue-200 bg-white text-blue-900",
  pill: "border-blue-200 bg-blue-50/70 text-blue-900 hover:border-blue-400",
};

const amber: Theme = {
  top: "from-amber-500 to-orange-600",
  bg: "from-amber-50/50 via-white to-orange-50/20",
  icon: "bg-amber-500 text-white",
  badge: "border-amber-200 bg-amber-100 text-amber-900",
  head: "border-amber-600 text-amber-900",
  zebra: "odd:bg-amber-50/40",
  chip: "border-amber-200 bg-white text-amber-900",
  pill: "border-amber-200 bg-amber-50/70 text-amber-900 hover:border-amber-400",
};

/** Posts and head-counts, in the order they first appear. */
const tally = (list: Person[]) => {
  const m = new Map<string, number>();
  for (const p of list) m.set(p.role, (m.get(p.role) ?? 0) + 1);
  return [...m.entries()];
};

function Directory({
  id,
  title,
  subtitle,
  nameHead,
  list,
  theme,
  Icon,
}: {
  id: string;
  title: string;
  subtitle: string;
  nameHead: string;
  list: Person[];
  theme: Theme;
  Icon: typeof Users;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${theme.bg} p-5 shadow-xs sm:p-8 hc:border-white hc:bg-neutral-950`}
    >
      <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${theme.top}`} />

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`grid size-11 shrink-0 place-items-center rounded-xl shadow-xs ${theme.icon} hc:bg-neutral-800 hc:text-white`}>
            <Icon size={20} strokeWidth={2} />
          </span>
          <div>
            <h2 id={`${id}-title`} className="text-lg font-bold leading-snug text-ink sm:text-xl hc:text-white">{title}</h2>
            <p className="text-xs text-muted hc:text-neutral-300">{subtitle}</p>
          </div>
        </div>
        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${theme.badge} hc:bg-neutral-800 hc:text-white`}>
          {list.length} people
        </span>
      </div>

      {/* Head-count by post */}
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Number of people by designation">
        {tally(list).map(([role, n]) => (
          <li key={role} className={`rounded-full border px-3 py-1 text-xs font-medium ${theme.chip} hc:border-white hc:bg-black hc:text-white`}>
            {role} <span className="font-bold">{n}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 overflow-x-auto rounded-xl border border-line bg-white hc:border-white hc:bg-black">
        <table className="w-full min-w-[520px] text-sm">
          <caption className="sr-only">{title}</caption>
          <thead>
            <tr className={`border-b-2 ${theme.head} hc:border-white hc:text-white`}>
              <th scope="col" className="w-16 px-4 py-3 text-left font-semibold">S.No.</th>
              <th scope="col" className="px-4 py-3 text-left font-semibold">{nameHead}</th>
              <th scope="col" className="px-4 py-3 text-left font-semibold">Designation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line text-ink hc:divide-white hc:text-white">
            {list.map((p, i) => (
              <tr key={`${p.name}-${i}`} className={`${theme.zebra} hc:odd:bg-neutral-900`}>
                <td className="px-4 py-2.5 align-top text-muted hc:text-neutral-300">{i + 1}</td>
                <th scope="row" className="px-4 py-2.5 text-left align-top font-medium">{p.name}</th>
                <td className="px-4 py-2.5 align-top">
                  {p.role}
                  {p.office && (
                    <span className="mt-1 flex w-fit items-center gap-1 rounded-full border border-line bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-700 hc:border-white hc:bg-black hc:text-white sm:ml-2 sm:inline-flex">
                      <MapPin size={11} aria-hidden="true" />
                      Regional Office, {p.office}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function WhosWhoPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO HEADER                                            */}
      {/* ========================================================= */}
      <section
        aria-labelledby="who-title"
        className="relative overflow-hidden border-b border-line bg-gradient-to-b from-brand-light/60 via-white to-amber-50/20 py-12 sm:py-16 hc:border-white hc:bg-black"
      >
        <span aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-brand/5 blur-3xl hc:hidden" />
        <span aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 size-72 rounded-full bg-amber-500/5 blur-3xl hc:hidden" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted hc:text-white">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-dark hover:underline">Home</Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li>
                <Link href="/about" className="hover:text-brand-dark hover:underline">About Directorate</Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">Who&apos;s Who</li>
            </ol>
          </nav>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h1 id="who-title" className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white">
              Who&apos;s Who
            </h1>
            <ul className="flex flex-wrap gap-2">
              <li>
                <a href="#officers" className={`block rounded-lg border px-3.5 py-1.5 text-xs font-bold shadow-xs transition ${blue.pill} hc:border-white hc:bg-neutral-900 hc:text-white`}>
                  Officers &bull; {officers.length}
                </a>
              </li>
              <li>
                <a href="#employees" className={`block rounded-lg border px-3.5 py-1.5 text-xs font-bold shadow-xs transition ${amber.pill} hc:border-white hc:bg-neutral-900 hc:text-white`}>
                  Officers &amp; employees &bull; {staff.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. DIRECTORIES                                            */}
      {/* ========================================================= */}
      <div className="bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-12 sm:py-16 hc:bg-black">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6">
          <Directory
            id="officers"
            title="Officers"
            subtitle="Deputy Directors, Assistant Directors, Research Officers and Evaluator"
            nameHead="Officer's name"
            list={officers}
            theme={blue}
            Icon={UserRound}
          />
          <Directory
            id="employees"
            title="Officers and employees"
            subtitle="Administration, stenographers, clerks and support staff"
            nameHead="Officer's / employee's name"
            list={staff}
            theme={amber}
            Icon={Users}
          />
        </div>
      </div>
    </>
  );
}