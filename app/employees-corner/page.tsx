import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileText, ListOrdered } from "lucide-react";

export const metadata: Metadata = {
  title: "Employees Corner | Central Hindi Directorate",
  description:
    "Seniority lists, circulars and application forms for the employees of the Central Hindi Directorate.",
};

type Doc = { title: string; href: string };

const BASE = "https://www.chd.education.gov.in/en/";
const doc = (title: string, slug: string): Doc => ({ title, href: BASE + slug });

const seniorityLists: Doc[] = [
  doc(
    "(Revised Circular) Seniority List in respect of Office Superintendent Cadre in CHD (01-08-2026)",
    "revised-circular-seniority-list-respect-office-superintendent-cadre-chd-01-08-2026",
  ),
  doc(
    "Seniority List in respect of Office Superintendent Cadre in CHD/CSTT (01-08-2026)",
    "seniority-list-respect-office-superintendent-cadre-chdcstt-01-08-2026",
  ),
  doc(
    "Seniority List in respect of Stenographer (Jr.) in CHD/CSTT (01-01-2026)",
    "seniority-list-respect-stenographerjr-chdcstt-01-01-2026",
  ),
  doc("Seniority List in respect of Evaluator Cadre in CHD", "seniority-list-respect-evaluator-cadre-chd-0"),
  doc(
    "Seniority List in respect of Assistant Research Officer Cadre in CHD",
    "seniority-list-respect-assistant-research-officer-cadre-chd-0",
  ),
  doc(
    "Seniority List in respect of Deputy Director (L) Cadre in CHD",
    "seniority-list-respect-deputy-directorl-cadre-chd-0",
  ),
  doc(
    "Seniority List in respect of Assistant Director (L) Cadre in CHD",
    "seniority-list-respect-assistant-directorl-cadre-chd",
  ),
  doc("Seniority List in respect of UDC in CHD/CSTT", "seniority-list-respect-udc-chdcstt"),
  doc("Seniority List in respect of JAO in CHD/CSTT", "seniority-list-respect-jao-chdcstt"),
  doc("Seniority List in respect of Steno (Sr.) in CHD/CSTT", "seniority-list-respect-stenosr-chdcstt-1"),
  doc("Seniority List in respect of MTS Cadre in CHD/CSTT", "seniority-list-respect-mts-cadre-chdcstt"),
  doc(
    "Seniority List in respect of Lower Division Clerk in CHD/CSTT",
    "seniority-list-respect-lower-division-clerk-chdcstt",
  ),
  doc("Seniority List in respect of Evaluator Cadre in CHD", "seniority-list-respect-evaluator-cadre-chd"),
  doc(
    "Seniority List in respect of Deputy Director (L) Cadre in CHD",
    "seniority-list-respect-deputy-directorl-cadre-chd",
  ),
  doc(
    "Seniority List in respect of Assistant Research Officer Cadre in CHD",
    "seniority-list-respect-assistant-research-officer-cadre-chd",
  ),
  doc("Assistant Research Officer cadre seniority lists", "assistant-research-officer-cadre-seniority-lists"),
  doc("Evaluator cadre seniority lists", "evaluator-cadre-seniority-lists"),
  doc("Evaluator seniority list", "evaluator-seniority-list"),
  doc("ARO seniority list", "aro-seniority-list"),
];

const forms: Doc[] = [
  doc("Final payment of balances in PF", "final-payment-balances-pf"),
  doc("Application for withdrawal of GPF", "application-withdrawal-gpf"),
  doc("Reimbursement of child education allowance", "reimbursement-child-edu-allowance"),
  doc("Advance for car / bike / scooter / computer", "advance-carbikescootercomputer"),
  doc("Leave application for child care", "leave-application-child-care"),
  doc("Application form for advance for official tour", "application-form-advance-official-tour"),
];

/* ---------- colour themes (kept literal so Tailwind can see them) ---------- */
type Theme = {
  topLine: string;
  cardBg: string;
  iconBg: string;
  badge: string;
  pill: string;
  row: string;
  arrow: string;
};

const blue: Theme = {
  topLine: "from-blue-600 to-indigo-600",
  cardBg: "from-blue-50/50 via-white to-indigo-50/20",
  iconBg: "bg-blue-600 text-white",
  badge: "border-blue-200 bg-blue-100 text-blue-900",
  pill: "border-blue-200 bg-blue-50/70 text-blue-900 hover:border-blue-400",
  row: "hover:border-blue-300 hover:bg-blue-50/60",
  arrow: "text-blue-600",
};

const emerald: Theme = {
  topLine: "from-emerald-500 to-teal-600",
  cardBg: "from-emerald-50/50 via-white to-teal-50/20",
  iconBg: "bg-emerald-600 text-white",
  badge: "border-emerald-200 bg-emerald-100 text-emerald-900",
  pill: "border-emerald-200 bg-emerald-50/70 text-emerald-900 hover:border-emerald-400",
  row: "hover:border-emerald-300 hover:bg-emerald-50/60",
  arrow: "text-emerald-600",
};

function DocCard({
  id,
  title,
  subtitle,
  items,
  theme,
  Icon,
}: {
  id: string;
  title: string;
  subtitle: string;
  items: Doc[];
  theme: Theme;
  Icon: typeof FileText;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${theme.cardBg} p-5 shadow-xs sm:p-8 hc:border-white hc:bg-neutral-950`}
    >
      <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${theme.topLine}`} />

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`grid size-11 place-items-center rounded-xl shadow-xs ${theme.iconBg} hc:bg-neutral-800 hc:text-white`}
          >
            <Icon size={20} strokeWidth={2} />
          </span>
          <div>
            <h2
              id={`${id}-title`}
              className="text-lg font-bold leading-snug text-ink sm:text-xl hc:text-white"
            >
              {title}
            </h2>
            <p className="text-xs text-muted hc:text-neutral-300">{subtitle}</p>
          </div>
        </div>
        <span
          className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${theme.badge} hc:bg-neutral-800 hc:text-white`}
        >
          {items.length} documents
        </span>
      </div>

      <ul className="mt-6 grid gap-2.5 md:grid-cols-2">
        {items.map((d, i) => (
          <li key={d.href + i}>
            <a
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex h-full items-start justify-between gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm leading-snug text-ink shadow-2xs transition ${theme.row} hc:border-white hc:bg-black hc:text-white`}
            >
              <span>
                {d.title}
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className={`mt-0.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${theme.arrow} hc:text-white`}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function EmployeesCornerPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO HEADER                                            */}
      {/* ========================================================= */}
      <section
        aria-labelledby="employees-title"
        className="relative overflow-hidden border-b border-line bg-gradient-to-b from-brand-light/60 via-white to-amber-50/20 py-12 sm:py-16 hc:border-white hc:bg-black"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-brand/5 blur-3xl hc:hidden"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-0 size-72 rounded-full bg-amber-500/5 blur-3xl hc:hidden"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted hc:text-white">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-dark hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">
                Employees Corner
              </li>
            </ol>
          </nav>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h1
              id="employees-title"
              className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white"
            >
              Employees Corner
            </h1>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#seniority"
                className={`rounded-lg border px-3.5 py-1.5 text-xs font-bold shadow-xs transition ${blue.pill} hc:border-white hc:bg-neutral-900 hc:text-white`}
              >
                Seniority lists
              </a>
              <a
                href="#forms"
                className={`rounded-lg border px-3.5 py-1.5 text-xs font-bold shadow-xs transition ${emerald.pill} hc:border-white hc:bg-neutral-900 hc:text-white`}
              >
                Applications &amp; forms
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. DOCUMENTS                                              */}
      {/* ========================================================= */}
      <div className="bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-12 sm:py-16 hc:bg-black">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6">
          <DocCard
            id="seniority"
            title="Seniority lists and circulars"
            subtitle="Cadre-wise seniority lists of the Directorate"
            items={seniorityLists}
            theme={blue}
            Icon={ListOrdered}
          />
          <DocCard
            id="forms"
            title="Applications and forms"
            subtitle="PF, GPF, allowances, advances and leave"
            items={forms}
            theme={emerald}
            Icon={FileText}
          />
        </div>
      </div>
    </>
  );
}