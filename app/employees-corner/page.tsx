import type { Metadata } from "next";
import Link from "next/link";

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

const heading =
  "text-[clamp(1.9rem,3.2vw,2.5rem)] font-semibold leading-tight text-brand-dark after:mt-4 after:block after:h-1 after:w-14 after:rounded after:bg-brand hc:text-white hc:after:bg-white";

function DocList({ items }: { items: Doc[] }) {
  return (
    <ul className="overflow-hidden rounded-xl border border-line border-t-2 border-t-brand bg-white shadow-sm hc:border-white hc:bg-black">
      {items.map((d, i) => (
        <li key={d.href + i} className="border-b border-line last:border-b-0 hc:border-white">
          <a
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 px-5 py-3.5 text-sm leading-snug text-ink transition hover:bg-brand-light hover:text-brand-dark sm:text-[15px] hc:text-white"
          >
            <span>
              {d.title}
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-brand transition-transform group-hover:translate-x-[3px] hc:text-white"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function EmployeesCornerPage() {
  return (
    <>
      {/* Title */}
      <section
        aria-labelledby="employees-title"
        className="border-b border-line bg-brand-light py-10 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted hc:text-white">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-dark hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">
                Employees Corner
              </li>
            </ol>
          </nav>
          <h1 id="employees-title" className={heading}>
            Employees Corner
          </h1>
        </div>
      </section>

      {/* Seniority lists */}
      <section aria-labelledby="seniority-title" className="py-13 lg:py-18">
        <div className="mx-auto max-w-5xl px-4">
          <h2 id="seniority-title" className="mb-5 text-xl font-semibold text-brand-dark sm:text-2xl hc:text-white">
            Seniority lists and circulars
          </h2>
          <DocList items={seniorityLists} />
        </div>
      </section>

      {/* Forms */}
      <section
        aria-labelledby="forms-title"
        className="border-t border-line bg-brand-light py-13 lg:py-18 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-5xl px-4">
          <h2 id="forms-title" className="mb-5 text-xl font-semibold text-brand-dark sm:text-2xl hc:text-white">
            Applications and forms
          </h2>
          <DocList items={forms} />
        </div>
      </section>
    </>
  );
}