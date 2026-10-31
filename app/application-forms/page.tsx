import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Applications & Forms of Schemes | Central Hindi Directorate",
  description:
    "Application forms for the schemes of the Central Hindi Directorate: extension programmes, travel grants, financial assistance and correspondence courses.",
};

type Doc = { title: string; href: string };

const BASE = "https://www.chd.education.gov.in/en/";
const doc = (title: string, slug: string): Doc => ({ title, href: BASE + slug });

const forms: Doc[] = [
  doc("Extension Application Form", "extension-application-form"),
  doc(
    "Application Form For Non-Hindi Speaking Neo Hindi Writer Camp",
    "application-form-non-hindi-speaking-neo-hindi-writer-camp-0",
  ),
  doc(
    "Application Form For Research Student Travel Grant",
    "application-form-research-student-travel-grant-0",
  ),
  doc("Application Form For Student Study Tour", "application-form-student-study-tour"),
  doc(
    "Application form for Scheme of financial assistance to Publications in Hindi",
    "application-form-scheme-financial-assistance-publications-hindi",
  ),
  doc(
    "Application form for Scheme of financial assistance to Voluntary Hindi Organization",
    "application-form-scheme-financial-assistance-voluntary-hindi-organization",
  ),
  doc("Ride for the local members Bill of rent", "ride-local-members-bill-rent"),
  doc(
    "Under the Financial Assistance Scheme for publication in Hindi Application letter",
    "under-financial-assistance-scheme-publication-hindi-application-letter",
  ),
  doc(
    "Leave of any kind other than casual leave Back office report",
    "leave-any-kind-other-casual-leave-back-office-report",
  ),
  doc("PFMS Form", "pfms-form"),
  doc("Correspondence Courses - Forms", "correspondence-courses-forms"),
  doc(
    "Travel freight / daily allowance bill for non-official members Central Hindi Directorate",
    "travel-freight-daily-allowance-bill-non-official-members-central-hindi-directorate",
  ),
];

const heading =
  "text-[clamp(1.9rem,3.2vw,2.5rem)] font-semibold leading-tight text-brand-dark after:mt-4 after:block after:h-1 after:w-14 after:rounded after:bg-brand hc:text-white hc:after:bg-white";

export default function ApplicationsFormsPage() {
  return (
    <>
      {/* Title */}
      <section
        aria-labelledby="forms-title"
        className="border-b border-line bg-brand-light py-10 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted hc:text-white">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-dark hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/downloads" className="hover:text-brand-dark hover:underline">
                  Downloads
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">
                Applications &amp; Forms of Schemes
              </li>
            </ol>
          </nav>
          <h1 id="forms-title" className={heading}>
            Applications &amp; Forms of Schemes
          </h1>
        </div>
      </section>

      {/* Forms */}
      <section aria-label="Application forms" className="py-13 lg:py-18">
        <div className="mx-auto max-w-5xl px-4">
          <ul className="overflow-hidden rounded-xl border border-line border-t-2 border-t-brand bg-white shadow-sm hc:border-white hc:bg-black">
            {forms.map((d) => (
              <li key={d.href} className="border-b border-line last:border-b-0 hc:border-white">
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
        </div>
      </section>
    </>
  );
}