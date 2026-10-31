import type { Metadata } from "next";
import Link from "next/link";

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

const isoDate = (d: string) => d.split("-").reverse().join("-");

const heading =
  "text-[clamp(1.9rem,3.2vw,2.5rem)] font-semibold leading-tight text-brand-dark after:mt-4 after:block after:h-1 after:w-14 after:rounded after:bg-brand hc:text-white hc:after:bg-white";

export default function RtiReportPage() {
  return (
    <>
      {/* Title */}
      <section
        aria-labelledby="rti-title"
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
                <Link
                  href="/right-to-information-act"
                  className="hover:text-brand-dark hover:underline"
                >
                  Right To Information Act
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">
                Right to Information Report
              </li>
            </ol>
          </nav>
          <h1 id="rti-title" className={heading}>
            Right to Information Report
          </h1>
        </div>
      </section>

      {/* Reports, grouped by year */}
      <div className="py-13 lg:py-18">
        <div className="mx-auto max-w-5xl space-y-10 px-4">
          {years.map((year) => (
            <section key={year} aria-labelledby={`rti-${year}`}>
              <h2
                id={`rti-${year}`}
                className="mb-4 text-xl font-semibold text-brand-dark sm:text-2xl hc:text-white"
              >
                {year}
              </h2>

              <ul className="overflow-hidden rounded-xl border border-line border-t-2 border-t-brand bg-white shadow-sm hc:border-white hc:bg-black">
                {reports
                  .filter((x) => x.year === year)
                  .map((x) => (
                    <li key={x.slug} className="border-b border-line last:border-b-0 hc:border-white">
                      <a
                        href={BASE + x.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col gap-1 px-5 py-3.5 text-sm text-ink transition hover:bg-brand-light hover:text-brand-dark sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-[15px] hc:text-white"
                      >
                        <span className="leading-snug">
                          RTI Monthly Return Information System, {x.month} {x.year}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </span>
                        <time
                          dateTime={isoDate(x.date)}
                          className="shrink-0 text-xs text-muted sm:text-sm hc:text-white"
                        >
                          <span className="sr-only">Dated </span>
                          {x.date}
                        </time>
                      </a>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}