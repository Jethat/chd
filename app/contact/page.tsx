import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  Building2,
  FileDown,
  Library,
  Mail,
  MapPin,
  Phone,
  Users2,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Central Hindi Directorate",
  description:
    "Address, telephone and email details of the Central Hindi Directorate, its units and its regional offices.",
};

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */

const mainEmails = [
  "patodirectorchd@gmail.com",
  "dirchd-mhrd@gov.in",
  "aro-chd.edu@nic.in",
];

const units = [
  { unit: "Bhasha Unit", email: "bhashaunit@gmail.com", icon: BookOpen, tone: "purple" },
  { unit: "Dictionary Unit", email: "kosh.chd@gmail.com", icon: BookMarked, tone: "teal" },
  { unit: "Grants Unit", email: "grantschd@gmail.com", icon: Building2, tone: "emerald" },
  { unit: "Administration", email: "admnofficerchd@gmail.com", icon: Users2, tone: "blue" },
] as const;

type Office = { city: string; state: string; address: string[]; area: string; tile: string; badge: string; hq?: boolean };

const offices: Office[] = [
  {
    city: "Guwahati",
    state: "Assam",
    address: [
      "Deputy Director (L), Central Hindi Directorate",
      "Regional Office Guwahati, Prop. No. 10344990",
      "Ward No. 28, Guwahati Municipal Corporation",
      "Village Maidamgaon, Mouza Beltola, P.S. Beltola",
      "Guwahati - 781028, Dist. Kamrup (Metro), Assam",
    ],
    area: "Assam, Arunachal Pradesh, Nagaland, Manipur, Meghalaya, Mizoram, Tripura, Sikkim.",
    tile: "border-emerald-200 bg-emerald-50/50 text-emerald-900",
    badge: "bg-emerald-100 text-emerald-900",
  },
  {
    city: "Kolkata",
    state: "West Bengal",
    address: [
      "Deputy Director (L), Central Hindi Directorate",
      "Regional Office",
      "1, Council House Street, First Floor, North Wing",
      "Kolkata - 700 001, West Bengal",
    ],
    area: "Bihar, West Bengal, Odisha, Andaman and Nicobar Islands, Jharkhand, Lakshadweep.",
    tile: "border-blue-200 bg-blue-50/50 text-blue-900",
    badge: "bg-blue-100 text-blue-900",
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    address: [
      "Deputy Director (L), Central Hindi Directorate",
      "Regional Office",
      "Kendriya Sadan, Room No. 3, Ground Floor, Block No. VI",
      "Sultan Bazar",
      "Hyderabad - 500 095 (A.P.)",
    ],
    area: "Gujarat, Andhra Pradesh, Telangana, Maharashtra, Goa, Karnataka.",
    tile: "border-amber-200 bg-amber-50/50 text-amber-900",
    badge: "bg-amber-100 text-amber-900",
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    address: [
      "Deputy Director (L), Central Hindi Directorate",
      "Regional Office",
      "Shastri Bhawan, First Floor, Block No. 5",
      "26, Haddows Road",
      "Chennai - 600 006, Tamil Nadu",
    ],
    area: "Tamil Nadu, Kerala, Puducherry.",
    tile: "border-purple-200 bg-purple-50/50 text-purple-900",
    badge: "bg-purple-100 text-purple-900",
  },
  {
    city: "New Delhi",
    state: "Delhi",
    hq: true,
    address: [
      "Deputy Director (L), Central Hindi Directorate",
      "West Block No. 7, R.K. Puram",
      "New Delhi - 110 066",
    ],
    area: "Uttar Pradesh, Delhi, Punjab, Haryana, Himachal Pradesh, Jammu & Kashmir, Madhya Pradesh, Rajasthan, Uttaranchal, Chhattisgarh.",
    tile: "border-rose-200 bg-rose-50/50 text-rose-900",
    badge: "bg-rose-100 text-rose-900",
  },
];

/** Colour sets shared by the cards (same palette as the About page pillars). */
const TONES = {
  amber: { topLine: "from-amber-500 to-orange-600", cardBg: "from-amber-50/50 via-white to-orange-50/20", badgeBg: "bg-amber-100 text-amber-900 border-amber-200", iconBg: "bg-amber-500 text-white", hoverBorder: "hover:border-amber-400 hover:shadow-amber-500/10" },
  blue: { topLine: "from-blue-600 to-indigo-600", cardBg: "from-blue-50/50 via-white to-indigo-50/20", badgeBg: "bg-blue-100 text-blue-900 border-blue-200", iconBg: "bg-blue-600 text-white", hoverBorder: "hover:border-blue-400 hover:shadow-blue-500/10" },
  emerald: { topLine: "from-emerald-500 to-teal-600", cardBg: "from-emerald-50/50 via-white to-teal-50/20", badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-200", iconBg: "bg-emerald-600 text-white", hoverBorder: "hover:border-emerald-400 hover:shadow-emerald-500/10" },
  purple: { topLine: "from-purple-600 to-violet-600", cardBg: "from-purple-50/50 via-white to-violet-50/20", badgeBg: "bg-purple-100 text-purple-900 border-purple-200", iconBg: "bg-purple-600 text-white", hoverBorder: "hover:border-purple-400 hover:shadow-purple-500/10" },
  teal: { topLine: "from-teal-600 to-cyan-600", cardBg: "from-teal-50/50 via-white to-cyan-50/20", badgeBg: "bg-teal-100 text-teal-900 border-teal-200", iconBg: "bg-teal-600 text-white", hoverBorder: "hover:border-teal-400 hover:shadow-teal-500/10" },
} as const;

type Tone = keyof typeof TONES;

const mailLink = "break-all font-semibold text-ink hover:text-brand-dark hover:underline hc:text-white";

/* ------------------------------------------------------------------ */
/* Shared card                                                        */
/* ------------------------------------------------------------------ */

function ToneCard({
  tone,
  icon: Icon,
  badge,
  title,
  children,
}: {
  tone: Tone;
  icon: LucideIcon;
  badge: string;
  title: string;
  children: React.ReactNode;
}) {
  const t = TONES[tone];
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${t.cardBg} p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 ${t.hoverBorder} hover:shadow-lg hc:border-white hc:bg-neutral-950`}
    >
      <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${t.topLine}`} />

      <div className="flex items-start justify-between gap-3">
        <span
          className={`grid size-11 place-items-center rounded-xl ${t.iconBg} shadow-xs transition-transform duration-300 group-hover:scale-105 hc:bg-neutral-800 hc:text-white`}
        >
          <Icon size={20} strokeWidth={2} />
        </span>
        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${t.badgeBg} hc:bg-neutral-800 hc:text-white`}>
          {badge}
        </span>
      </div>

      <h3 className="mt-3.5 text-base font-bold text-ink hc:text-white">{title}</h3>

      <div className="mt-3.5 flex-1 border-t border-line/60 pt-3 text-sm leading-relaxed text-slate-700 hc:border-white/20 hc:text-neutral-300">
        {children}
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO HEADER                                            */}
      {/* ========================================================= */}
      <section
        aria-labelledby="contact-title"
        className="relative overflow-hidden border-b border-line bg-gradient-to-b from-brand-light/60 via-white to-amber-50/20 py-12 sm:py-16 hc:border-white hc:bg-black"
      >
        <span aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-brand/5 blur-3xl hc:hidden" />
        <span aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 size-72 rounded-full bg-amber-500/5 blur-3xl hc:hidden" />

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
                Contact Us
              </li>
            </ol>
          </nav>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1
                id="contact-title"
                className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white"
              >
                Contact Us
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-muted hc:text-neutral-300">
                Address, telephone and email details of the Directorate, its units and its regional offices.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-lg border border-line bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-xs hc:border-white hc:bg-neutral-900 hc:text-white">
                Headquarters: New Delhi
              </span>
              <span className="rounded-lg bg-brand px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hc:bg-white hc:text-black">
                4 Regional Offices
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. DIRECTORATE CONTACT DETAILS                            */}
      {/* ========================================================= */}
      <section aria-labelledby="directorate-title" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="directorate-title" className="sr-only">
            Central Hindi Directorate contact details
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            <ToneCard tone="amber" icon={MapPin} badge="Visit" title="Address">
              <address className="not-italic">
                Central Hindi Directorate
                <br />
                (Department of Higher Education)
                <br />
                Ministry of Education
                <br />
                West Block - VII, R. K. Puram
                <br />
                New Delhi - 110066
              </address>
            </ToneCard>

            <ToneCard tone="emerald" icon={Phone} badge="Call" title="Telephone">
              <a
                href="tel:+911120862356"
                className="font-semibold text-ink hover:text-brand-dark hover:underline hc:text-white"
              >
                +91-11-20862356
              </a>
            </ToneCard>

            <ToneCard tone="blue" icon={Mail} badge="Write" title="Email">
              <ul className="space-y-1.5">
                {mainEmails.map((e) => (
                  <li key={e}>
                    <a href={`mailto:${e}`} className={mailLink}>
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </ToneCard>
          </div>

          {/* Intercom directory */}
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-purple-200 bg-gradient-to-r from-purple-50/60 via-white to-violet-50/20 p-4 shadow-2xs sm:flex-row sm:items-center sm:p-5 hc:border-white hc:bg-neutral-950">
            <p className="text-sm text-slate-700 hc:text-neutral-300">
              <span className="font-bold text-ink hc:text-white">Looking for an officer or employee?</span> Download the
              internal directory.
            </p>
            <a
              href="https://www.chd.education.gov.in/sites/default/files/stafflistenglish2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-brand-dark hc:bg-white hc:text-black"
            >
              <FileDown size={14} aria-hidden="true" />
              <span>Intercom numbers (PDF, 150.58 KB)</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. UNITS / SECTIONS                                       */}
      {/* ========================================================= */}
      <section
        aria-labelledby="units-title"
        className="border-t border-line bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-14 sm:py-20 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center sm:mb-12">
            <h2
              id="units-title"
              className="mt-2 text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-tight text-brand-dark hc:text-white"
            >
              Email Addresses of Units / Sections
            </h2>
            <p className="mt-1 text-sm text-muted hc:text-neutral-300">
              Write directly to the unit that handles your query.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {units.map((u) => (
              <ToneCard key={u.unit} tone={u.tone as Tone} icon={u.icon} badge="Unit" title={u.unit}>
                <a href={`mailto:${u.email}`} className={mailLink}>
                  {u.email}
                </a>
              </ToneCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. REGIONAL OFFICES                                       */}
      {/* ========================================================= */}
      <section
        aria-labelledby="regional-title"
        className="border-t border-line bg-gradient-to-b from-white via-amber-50/20 to-white py-14 sm:py-20 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2
                id="regional-title"
                className="mt-2 text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-tight text-brand-dark hc:text-white"
              >
                Regional Offices
              </h2>
              <p className="mt-1 max-w-3xl text-sm text-muted hc:text-neutral-300">
                Name and address of the Regional Offices of the Deputy Director (L), Central Hindi Directorate, and the
                area covered by each.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-brand-dark hc:bg-white hc:text-black"
            >
              <span>About the Directorate</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <ul className="grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((o) => (
              <li
                key={o.city}
                className={`group flex flex-col rounded-2xl border p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${o.tile} hc:border-white hc:bg-neutral-900 hc:text-white`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="grid size-9 place-items-center rounded-xl bg-white text-brand shadow-xs hc:bg-neutral-800 hc:text-white">
                    <MapPin size={18} aria-hidden="true" />
                  </span>
                  <span className="flex items-center gap-1.5">
                    {o.hq && (
                      <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-white hc:bg-white hc:text-black">
                        Headquarters
                      </span>
                    )}
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${o.badge} hc:bg-neutral-800 hc:text-white`}>
                      {o.state}
                    </span>
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold leading-tight">{o.city}</h3>

                <address className="mt-2 text-xs not-italic leading-relaxed opacity-90">
                  {o.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>

                <div className="mt-auto border-t border-black/10 pt-3 text-xs hc:border-white/20">
                  <p className="mt-3 font-bold">Area covered</p>
                  <p className="mt-1 leading-relaxed opacity-90">{o.area}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}