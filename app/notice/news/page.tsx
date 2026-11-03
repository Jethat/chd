import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "News | Central Hindi Directorate",
  description: "News, notices, circulars and results of the Central Hindi Directorate.",
};

type News = { title: string; date: string; file: string };

/**
 * Newest first. `date` is DD-MM-YYYY. Each title links to /docs/news/<file>.pdf,
 * so put the PDFs in /public/docs/news/ (or change `pdf()` below).
 */
const pdf = (file: string) => `/docs/news/${file}.pdf`;

const news: News[] = [
  { title: "BHASHA - July - August-2026", date: "29-10-2026", file: "bhasha-july-august-2026" },
  { title: "Order", date: "14-10-2026", file: "order-5" },
  { title: "Vigilance & Liaison Officer - CHD", date: "14-10-2026", file: "vigilance-liaison-officer-chd" },
  { title: "Correspondence Course Examination Result - 2026", date: "26-08-2026", file: "correspondence-course-examination-result-2026" },
  { title: "Correspondence Courses Admission Notice-2026-27 (Date Extended)", date: "05-08-2026", file: "correspondence-courses-admission-notice-2026-27-date-extended" },
  { title: "Applications are invited from External Evaluators.", date: "10-07-2026", file: "applications-are-invited-external-evaluators" },
  { title: "Bhasha Bi-Monthly Magazine Rate Revision (w.e.f. 01/07/2026)", date: "19-06-2026", file: "bhasha-bio-monthly-magazine-rate-revision-wef-01072026" },
  { title: "Membership Form for 'Bhasha'", date: "09-06-2026", file: "membership-form-bhasha" },
  { title: "Correspondence Courses Admission Notice-2026-27", date: "13-05-2026", file: "correspondence-courses-admission-notice-2026-27" },
  { title: "Financial Assistance to Voluntary Hindi Organizations & Non Governmental Organizations for the promotion of Hindi - Application for Year 2026-2027. (Corrigendum)", date: "06-03-2026", file: "financial-assistance-voluntary-hindi-organizations-non-governmental-organizations-promotion-hindi" },
  { title: "Grants Schemes (VHO & For Publication) Application for Year 2026-2027. (Date Extension)", date: "24-02-2026", file: "grants-schemes-vho-publication-application-year-2026-2027-date-extension" },
  { title: "Advertisement", date: "12-02-2026", file: "advertisement-1" },
  { title: "Guidelines and regulations for author/writer", date: "23-01-2026", file: "guidelines-and-regulations-authorwriter" },
  { title: "Grants Schemes (VHO & for Publication) Application for Year 2026-27", date: "16-01-2026", file: "grants-schemes-vho-publication-application-year-2026-27" },
  { title: "Examination Date- 2026", date: "15-01-2026", file: "examination-date-2026" },
  { title: "Application for Admission to the Civil Services Hindi Course 2026", date: "11-12-2025", file: "application-admission-civil-services-hindi-course-2026" },
  { title: "Correspondence Course Examination Result - 2025", date: "03-09-2025", file: "correspondence-course-examination-result-2025" },
  { title: "Response Sheet (Admission Session-2025-2026)", date: "13-08-2025", file: "response-sheetadmission-session-2025-2026" },
  { title: "Foundation Day Hindi Essay Writing Competition Result - 2025", date: "07-07-2025", file: "foundation-day-hindi-essay-writing-competition-result-2025" },
  { title: "No Extension for last Date Hindi Essay Writing Comp. 2025.", date: "23-05-2025", file: "no-extension-last-date-hindi-essay-writing-comp-2025" },
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
const years = Array.from(new Set(news.map((n) => yearOf(n.date))));

export default function NewsPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO HEADER                                            */}
      {/* ========================================================= */}
      <section
        aria-labelledby="news-title"
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
                News
              </li>
            </ol>
          </nav>

          <h1 id="news-title" className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white">
            News
          </h1>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. NEWS, GROUPED BY YEAR                                  */}
      {/* ========================================================= */}
      <div className="bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-12 sm:py-16 hc:bg-black">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6">
          {years.map((year, yi) => {
            const t = themes[yi % themes.length];
            const items = news.filter((n) => yearOf(n.date) === year);
            return (
              <section
                key={year}
                aria-labelledby={`news-${year}`}
                className={`relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${t.bg} p-5 shadow-xs sm:p-8 hc:border-white hc:bg-neutral-950`}
              >
                <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${t.top}`} />

                <div className="mb-5 flex items-center justify-between gap-3">
                  <h2 id={`news-${year}`} className="text-xl font-bold text-ink hc:text-white">
                    {year}
                  </h2>
                  <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${t.badge} hc:bg-neutral-800 hc:text-white`}>
                    {items.length} items
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