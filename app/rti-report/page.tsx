import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Right to Information Report | Central Hindi Directorate",
  description:
    "RTI Monthly Return Information System reports of the Central Hindi Directorate, month by month.",
};

type Report = { month: string; year: number; slug: string; date: string };

const BASE = "https://www.chd.education.gov.in/en/";
const r = (month: string, year: number, slug: string, date: string): Report => ({
  month,
  year,
  slug,
  date,
});

/** Newest first. `date` is DD-MM-YYYY, exactly as listed on the current site. */
const reports: Report[] = [
  r("September", 2026, "rti-monthly-return-information-systemseptember-2026", "08-10-2026"),
  r("August", 2026, "rti-monthly-return-information-systemaugust-2026", "18-09-2026"),
  r("July", 2026, "rti-monthly-return-information-systemjuly-2026", "10-08-2026"),
  r("June", 2026, "rti-monthly-return-information-systemjune-2026", "13-07-2026"),
  r("May", 2026, "rti-monthly-return-information-systemmay-2026", "25-06-2026"),
  r("April", 2026, "rti-monthly-return-information-systemapril-2026", "13-05-2026"),
  r("March", 2026, "rti-monthly-return-information-systemmarch-2026", "10-04-2026"),
  r("February", 2026, "rti-monthly-return-information-systemfebruary-2026", "17-03-2026"),
  r("January", 2026, "rti-monthly-return-information-system-january-2026", "11-02-2026"),

  r("December", 2025, "rti-monthly-return-information-system-december-2025", "27-01-2026"),
  r("November", 2025, "rti-monthly-return-information-system-november-2025", "18-12-2025"),
  r("October", 2025, "rti-monthly-return-information-system-october-2025", "14-11-2025"),
  r("September", 2025, "rti-monthly-return-information-system-september-2025", "04-11-2025"),
  r("August", 2025, "rti-monthly-return-information-system-august-2025", "04-11-2025"),
  r("July", 2025, "rti-monthly-return-information-system-july-2025", "04-11-2025"),
  r("June", 2025, "rti-monthly-return-information-system-june-2025", "09-07-2025"),
  r("May", 2025, "rti-monthly-return-information-system-may-2025", "09-07-2025"),
  r("April", 2025, "rti-monthly-return-information-system-april-2025", "24-06-2025"),
  r("March", 2025, "rti-monthly-return-information-systemmarch-2025", "24-04-2025"),
  r("February", 2025, "rti-monthly-return-information-systemfebruary-2025", "18-03-2025"),
  r("January", 2025, "rti-monthly-return-information-systemjanuary-2025", "11-02-2025"),

  r("December", 2024, "rti-monthly-return-information-systemdecember-2024", "22-01-2025"),
  r("November", 2024, "rti-monthly-return-information-systemnovember-2024", "18-12-2024"),
  r("October", 2024, "rti-monthly-return-information-systemoctober-2024", "25-11-2024"),
  r("September", 2024, "rti-monthly-return-information-systemseptember-2024", "10-10-2024"),
];

const years = Array.from(new Set(reports.map((x) => x.year)));
const latest = reports[0];

const isoDate = (d: string) => d.split("-").reverse().join("-");

/** One colour set per year card (cycles through the About page palette). */
const TONES = [
  { top: "from-amber-500 to-orange-600", badge: "bg-amber-100 text-amber-900 border-amber-200", hover: "hover:bg-amber-50/60" },
  { top: "from-blue-600 to-indigo-600", badge: "bg-blue-100 text-blue-900 border-blue-200", hover: "hover:bg-blue-50/60" },
  { top: "from-emerald-500 to-teal-600", badge: "bg-emerald-100 text-emerald-900 border-emerald-200", hover: "hover:bg-emerald-50/60" },
  { top: "from-purple-600 to-violet-600", badge: "bg-purple-100 text-purple-900 border-purple-200", hover: "hover:bg-purple-50/60" },
];

export default function RtiReportPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO HEADER                                            */}
      {/* ========================================================= */}
      <section
        aria-labelledby="rti-title"
        className="relative overflow-hidden border-b border-line bg-gradient-to-b from-brand-light/60 via-white to-amber-50/20 py-12 sm:py-16 hc:border-white hc:bg-black"
      >
        <span aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-brand/5 blur-3xl hc:hidden" />
        <span aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 size-72 rounded-full bg-amber-500/5 blur-3xl hc:hidden" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted hc:text-white">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-dark hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li>
                <Link href="/right-to-information-act" className="hover:text-brand-dark hover:underline">
                  Right To Information Act
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">
                Right to Information Report
              </li>
            </ol>
          </nav>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1
                id="rti-title"
                className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white"
              >
                Right to Information Report
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-muted hc:text-neutral-300">
                RTI Monthly Return Information System reports of the Central Hindi Directorate, month by month.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-lg border border-line bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-xs hc:border-white hc:bg-neutral-900 hc:text-white">
                Monthly Returns
              </span>
              <span className="rounded-lg bg-brand px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hc:bg-white hc:text-black">
                {reports.length} Reports
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. STAT PILLS, YEAR JUMP LINKS & REPORTS                  */}
      {/* ========================================================= */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Stat pills */}
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-center hc:border-white hc:bg-neutral-900">
              <span className="block text-lg font-bold text-amber-900 hc:text-white">{reports.length}</span>
              <span className="text-[11px] font-medium text-amber-800 hc:text-neutral-300">Monthly reports</span>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3 text-center hc:border-white hc:bg-neutral-900">
              <span className="block text-lg font-bold text-blue-900 hc:text-white">
                {years[years.length - 1]}–{years[0]}
              </span>
              <span className="text-[11px] font-medium text-blue-800 hc:text-neutral-300">Years covered</span>
            </div>
            <div className="col-span-2 rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 text-center sm:col-span-1 hc:border-white hc:bg-neutral-900">
              <span className="block text-sm font-bold text-emerald-900 hc:text-white">
                {latest.month} {latest.year}
              </span>
              <span className="text-[11px] font-medium text-emerald-800 hc:text-neutral-300">
                Latest report, dated {latest.date}
              </span>
            </div>
          </div>

          {/* Year jump links */}
          <nav aria-label="Jump to year" className="mb-8 flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-[11px] font-semibold text-muted hc:text-neutral-300">Jump to:</span>
            {years.map((y) => (
              <a
                key={y}
                href={`#rti-${y}`}
                className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-semibold text-slate-700 transition-all hover:bg-brand hover:text-white hc:bg-neutral-800 hc:text-neutral-300 hc:hover:bg-white hc:hover:text-black"
              >
                {y}
              </a>
            ))}
          </nav>

          {/* Year cards */}
          <div className="space-y-8">
            {years.map((year, yi) => {
              const t = TONES[yi % TONES.length];
              const items = reports.filter((x) => x.year === year);

              return (
                <section key={year} aria-labelledby={`rti-${year}`} className="scroll-mt-20">
                  <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-xs hc:border-white hc:bg-neutral-950">
                    <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${t.top}`} />

                    <div className="flex items-center justify-between gap-3 border-b border-line bg-slate-50/80 px-5 pb-3.5 pt-4 hc:border-white hc:bg-neutral-900">
                      <h2 id={`rti-${year}`} className="text-xl font-bold text-brand-dark hc:text-white">
                        {year}
                      </h2>
                      <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold hc:bg-neutral-800 hc:text-white ${t.badge}`}>
                        {items.length} {items.length === 1 ? "report" : "reports"}
                      </span>
                    </div>

                    <ul className="divide-y divide-line/60 hc:divide-white/20">
                      {items.map((x) => (
                        <li key={x.slug}>
                          <a
                            href={BASE + x.slug}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex flex-col gap-3 px-5 py-3.5 transition-colors sm:flex-row sm:items-center sm:gap-4 ${t.hover} hc:hover:bg-neutral-900`}
                          >
                            {/* Month tile */}
                            <span
                              aria-hidden="true"
                              className="flex size-12 shrink-0 flex-col items-center justify-center rounded-xl border border-line bg-white shadow-2xs hc:border-white/20 hc:bg-black"
                            >
                              <span className="text-[10px] font-bold uppercase tracking-wider text-muted hc:text-neutral-300">
                                {x.month.slice(0, 3)}
                              </span>
                              <span className="text-sm font-extrabold leading-none text-brand-dark hc:text-white">
                                {String(x.year).slice(2)}
                              </span>
                            </span>

                            {/* Title + date */}
                            <span className="min-w-0 flex-1">
                              <span className="flex flex-wrap items-center gap-2">
                                <span className="text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-brand-dark sm:text-[15px] hc:text-white">
                                  RTI Monthly Return Information System, {x.month} {x.year}
                                </span>
                                {x === latest && (
                                  <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-white hc:bg-white hc:text-black">
                                    Latest
                                  </span>
                                )}
                              </span>
                              <time dateTime={isoDate(x.date)} className="mt-0.5 block text-xs text-muted hc:text-neutral-300">
                                Dated {x.date}
                              </time>
                            </span>

                            {/* Action */}
                            <span className="inline-flex shrink-0 items-center gap-1 self-start rounded-lg border border-line bg-white px-2.5 py-1 text-xs font-semibold text-brand shadow-2xs transition group-hover:bg-brand group-hover:text-white sm:self-center hc:border-white hc:bg-neutral-800 hc:text-white">
                              View report <ArrowUpRight size={13} aria-hidden="true" />
                              <span className="sr-only"> (opens in a new tab)</span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}