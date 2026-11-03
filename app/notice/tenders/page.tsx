import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tenders | Central Hindi Directorate",
  description: "Tender notices and enquiries of the Central Hindi Directorate.",
};

type Tender = { title: string; date: string; file: string };

/**
 * Newest first. `date` is DD-MM-YYYY. Each title links to /docs/tenders/<file>.pdf,
 * so put the PDFs in /public/docs/tenders/ (or change `pdf()` below).
 */
const pdf = (file: string) => `/docs/tenders/${file}.pdf`;

const tenders: Tender[] = [
  { title: "Tender Enquiry for Purchase of Library Books, Newspapers & Magazines.", date: "07-08-2026", file: "tender-enquiry-purchase-library-books-newspapers-magazines-1" },
  { title: "Tender Enquiry for Purchase of Library Books, Newspapers & Magazines", date: "10-07-2026", file: "tender-enquiry-purchase-library-books-newspapers-magazines-0" },
  { title: "Tender Enquiry for Purchase of Library Books, Newspapers & Magazines.", date: "10-06-2026", file: "tender-enquiry-purchase-library-books-newspapers-magazines" },
];

/* ---------- colour themes (kept literal so Tailwind can see them) ---------- */
type Theme = { top: string; bg: string; icon: string; badge: string; row: string; date: string; arrow: string };

const themes: Theme[] = [
  { top: "from-amber-500 to-orange-600", bg: "from-amber-50/50 via-white to-orange-50/20", icon: "bg-amber-500 text-white", badge: "border-amber-200 bg-amber-100 text-amber-900", row: "hover:border-amber-300 hover:bg-amber-50/60", date: "bg-amber-100 text-amber-900", arrow: "text-amber-600" },
  { top: "from-blue-600 to-indigo-600", bg: "from-blue-50/50 via-white to-indigo-50/20", icon: "bg-blue-600 text-white", badge: "border-blue-200 bg-blue-100 text-blue-900", row: "hover:border-blue-300 hover:bg-blue-50/60", date: "bg-blue-100 text-blue-900", arrow: "text-blue-600" },
  { top: "from-emerald-500 to-teal-600", bg: "from-emerald-50/50 via-white to-teal-50/20", icon: "bg-emerald-600 text-white", badge: "border-emerald-200 bg-emerald-100 text-emerald-900", row: "hover:border-emerald-300 hover:bg-emerald-50/60", date: "bg-emerald-100 text-emerald-900", arrow: "text-emerald-600" },
  { top: "from-purple-600 to-violet-600", bg: "from-purple-50/50 via-white to-violet-50/20", icon: "bg-purple-600 text-white", badge: "border-purple-200 bg-purple-100 text-purple-900", row: "hover:border-purple-300 hover:bg-purple-50/60", date: "bg-purple-100 text-purple-900", arrow: "text-purple-600" },
];

const iso = (d: string) => d.split("-").reverse().join("-");
const yearOf = (d: string) => d.split("-")[2];
const years = Array.from(new Set(tenders.map((n) => yearOf(n.date))));

export default function TendersPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO HEADER                                            */}
      {/* ========================================================= */}
      <section
        aria-labelledby="tenders-title"
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
                <Link href="/notice-board" className="hover:text-brand-dark hover:underline">
                  Notice Board
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">
                Tenders
              </li>
            </ol>
          </nav>

          <h1 id="tenders-title" className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white">
            Tenders
          </h1>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. TENDERS, GROUPED BY YEAR                                  */}
      {/* ========================================================= */}
      <div className="bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-12 sm:py-16 hc:bg-black">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6">
          {years.map((year, yi) => {
            const t = themes[yi % themes.length];
            const items = tenders.filter((n) => yearOf(n.date) === year);
            return (
              <section
                key={year}
                aria-labelledby={`tenders-${year}`}
                className={`relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${t.bg} p-5 shadow-xs sm:p-8 hc:border-white hc:bg-neutral-950`}
              >
                <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${t.top}`} />

                <div className="mb-5 flex items-center justify-between gap-3">
                  <h2 id={`tenders-${year}`} className="text-xl font-bold text-ink hc:text-white">
                    {year}
                  </h2>
                  <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${t.badge} hc:bg-neutral-800 hc:text-white`}>
                    {items.length} {items.length === 1 ? "item" : "items"}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {items.map((n) => (
                    <li key={n.file}>
                      <a
                        href={pdf(n.file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex flex-col gap-2 rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium leading-snug text-ink shadow-2xs transition sm:flex-row sm:items-center sm:gap-4 ${t.row} hover:text-brand-dark hc:border-white hc:bg-black hc:text-white`}
                      >
                        <time
                          dateTime={iso(n.date)}
                          className={`w-fit shrink-0 rounded-md px-2.5 py-1 text-xs font-bold ${t.date} hc:bg-neutral-800 hc:text-white`}
                        >
                          <span className="sr-only">Dated </span>
                          {n.date}
                        </time>
                        <span className="flex flex-1 items-start justify-between gap-3">
                          <span>
                            {n.title}
                            <span className="sr-only"> (PDF, opens in a new tab)</span>
                          </span>
                          <ArrowUpRight
                            size={16}
                            aria-hidden="true"
                            className={`mt-0.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${t.arrow} hc:text-white`}
                          />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}