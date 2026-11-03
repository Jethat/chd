import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Applications & Forms of Schemes | Central Hindi Directorate",
  description:
    "Application forms for the schemes of the Central Hindi Directorate: extension programmes, travel grants, financial assistance and correspondence courses.",
};

type Doc = { title: string; file: string };

/** Each form opens /docs/forms/<file>.pdf. Put the PDFs in /public/docs/forms/ (or change this helper). */
const pdf = (file: string) => `/docs/forms/${file}.pdf`;

const forms: Doc[] = [
  { title: "Extension Application Form", file: "extension-application-form" },
  { title: "Application Form For Non-Hindi Speaking Neo Hindi Writer Camp", file: "application-form-non-hindi-speaking-neo-hindi-writer-camp-0" },
  { title: "Application Form For Research Student Travel Grant", file: "application-form-research-student-travel-grant-0" },
  { title: "Application Form For Student Study Tour", file: "application-form-student-study-tour" },
  { title: "Application form for Scheme of financial assistance to Publications in Hindi", file: "application-form-scheme-financial-assistance-publications-hindi" },
  { title: "Application form for Scheme of financial assistance to Voluntary Hindi Organization", file: "application-form-scheme-financial-assistance-voluntary-hindi-organization" },
  { title: "Ride for the local members Bill of rent", file: "ride-local-members-bill-rent" },
  { title: "Under the Financial Assistance Scheme for publication in Hindi Application letter", file: "under-financial-assistance-scheme-publication-hindi-application-letter" },
  { title: "Leave of any kind other than casual leave Back office report", file: "leave-any-kind-other-casual-leave-back-office-report" },
  { title: "PFMS Form", file: "pfms-form" },
  { title: "Correspondence Courses - Forms", file: "correspondence-courses-forms" },
  { title: "Travel freight / daily allowance bill for non-official members Central Hindi Directorate", file: "travel-freight-daily-allowance-bill-non-official-members-central-hindi-directorate" },
];

/* ---------- colour themes (kept literal so Tailwind can see them) ---------- */
type Theme = { top: string; bg: string; icon: string; hover: string; arrow: string };

const themes: Theme[] = [
  { top: "from-amber-500 to-orange-600", bg: "from-amber-50/50 via-white to-orange-50/20", icon: "bg-amber-500 text-white", hover: "hover:border-amber-400 hover:shadow-amber-500/10", arrow: "text-amber-600" },
  { top: "from-blue-600 to-indigo-600", bg: "from-blue-50/50 via-white to-indigo-50/20", icon: "bg-blue-600 text-white", hover: "hover:border-blue-400 hover:shadow-blue-500/10", arrow: "text-blue-600" },
  { top: "from-emerald-500 to-teal-600", bg: "from-emerald-50/50 via-white to-teal-50/20", icon: "bg-emerald-600 text-white", hover: "hover:border-emerald-400 hover:shadow-emerald-500/10", arrow: "text-emerald-600" },
  { top: "from-purple-600 to-violet-600", bg: "from-purple-50/50 via-white to-violet-50/20", icon: "bg-purple-600 text-white", hover: "hover:border-purple-400 hover:shadow-purple-500/10", arrow: "text-purple-600" },
  { top: "from-rose-500 to-pink-600", bg: "from-rose-50/50 via-white to-pink-50/20", icon: "bg-rose-600 text-white", hover: "hover:border-rose-400 hover:shadow-rose-500/10", arrow: "text-rose-600" },
  { top: "from-teal-600 to-cyan-600", bg: "from-teal-50/50 via-white to-cyan-50/20", icon: "bg-teal-600 text-white", hover: "hover:border-teal-400 hover:shadow-teal-500/10", arrow: "text-teal-600" },
];

export default function ApplicationsFormsPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO HEADER                                            */}
      {/* ========================================================= */}
      <section
        aria-labelledby="forms-title"
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
                <Link href="/downloads" className="hover:text-brand-dark hover:underline">
                  Downloads
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">
                Applications &amp; Forms of Schemes
              </li>
            </ol>
          </nav>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h1 id="forms-title" className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white">
              Applications &amp; Forms of Schemes
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. FORMS                                                  */}
      {/* ========================================================= */}
      <section
        aria-label="Application forms"
        className="bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-12 sm:py-16 hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {forms.map((d, i) => {
              const t = themes[i % themes.length];
              return (
                <li key={d.file}>
                  <a
                    href={pdf(d.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex h-full items-start gap-3.5 overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${t.bg} p-5 pt-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${t.hover} hc:border-white hc:bg-neutral-950`}
                  >
                    <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r `} />
                    <span className={`grid size-11 shrink-0 place-items-center rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-105 ${t.icon} hc:bg-neutral-800 hc:text-white`}>
                      <FileText size={20} strokeWidth={2} />
                    </span>
                    <span className="flex-1 text-sm font-semibold leading-snug text-ink hc:text-white">
                      {d.title}
                      <span className="sr-only"> (PDF, opens in a new tab)</span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className={`mt-0.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${t.arrow} hc:text-white`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}