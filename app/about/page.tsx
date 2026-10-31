import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookMarked,
  BookOpen,
  Building2,
  CheckCircle2,
  Compass,
  FileCheck2,
  GraduationCap,
  Languages,
  Library,
  MapPin,
  Newspaper,
  ScrollText,
  Shield,
  Sparkles,
  Users2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Central Hindi Directorate • केन्द्रीय हिन्दी निदेशालय",
  description:
    "The Central Hindi Directorate, established on 1 March 1960 under the Department of Higher Education, Ministry of Education, is the apex body of the Government of India for the development and promotion of Hindi under Article 351.",
};

type Duty = {
  id: string;
  title: string;
  titleHi?: string;
  icon: typeof BookOpen;
  color: {
    topLine: string;
    cardBg: string;
    badgeBg: string;
    iconBg: string;
    hoverBorder: string;
  };
  items?: string[];
};

const duties: Duty[] = [
  {
    id: "A",
    title: "Development of Hindi",
    titleHi: "हिन्दी का विकास एवं मानक कोश निर्माण",
    icon: BookMarked,
    color: {
      topLine: "from-amber-500 to-orange-600",
      cardBg: "from-amber-50/50 via-white to-orange-50/20",
      badgeBg: "bg-amber-100 text-amber-900 border-amber-200",
      iconBg: "bg-amber-500 text-white",
      hoverBorder: "hover:border-amber-400 hover:shadow-amber-500/10",
    },
    items: [
      "Preparation of bilingual, trilingual dictionaries and encyclopedias.",
      "Preparation of comparative grammar of Hindi and other Indian languages.",
      "Publication of popular books in collaboration with leading publishers.",
      "Coordination of Hindi development work undertaken by universities & institutions.",
    ],
  },
  {
    id: "B",
    title: "Devnagari Script Standardization",
    titleHi: "देवनागरी लिपि का मानकीकरण",
    icon: Languages,
    color: {
      topLine: "from-blue-600 to-indigo-600",
      cardBg: "from-blue-50/50 via-white to-indigo-50/20",
      badgeBg: "bg-blue-100 text-blue-900 border-blue-200",
      iconBg: "bg-blue-600 text-white",
      hoverBorder: "hover:border-blue-400 hover:shadow-blue-500/10",
    },
    items: [
      "Standardization of Devnagari script spelling and typography.",
      "Parivardhit Devnagari: development, research, and propagation.",
      "Preparation of select writings in Indian languages in diglot form.",
    ],
  },
  {
    id: "C",
    title: "Promotion of Hindi Across States",
    titleHi: "हिन्दी का अखिल भारतीय प्रसार",
    icon: Compass,
    color: {
      topLine: "from-emerald-500 to-teal-600",
      cardBg: "from-emerald-50/50 via-white to-teal-50/20",
      badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-200",
      iconBg: "bg-emerald-600 text-white",
      hoverBorder: "hover:border-emerald-400 hover:shadow-emerald-500/10",
    },
    items: [
      "Preparation of bilingual primers in regional mother tongues.",
      "Preparation of Hindi primers and digital lessons for foreigners.",
      "Preparation of interactive audio/video lessons & multimedia modules.",
      "Free distribution of Hindi books to non-Hindi speaking educational centres.",
      "Operation of Hindi Information Centre for students and researchers.",
    ],
  },
  {
    id: "D",
    title: "Journals & Literary Publications",
    titleHi: "शोध पत्रिकाएं एवं साहित्यमाला",
    icon: Newspaper,
    color: {
      topLine: "from-purple-600 to-violet-600",
      cardBg: "from-purple-50/50 via-white to-violet-50/20",
      badgeBg: "bg-purple-100 text-purple-900 border-purple-200",
      iconBg: "bg-purple-600 text-white",
      hoverBorder: "hover:border-purple-400 hover:shadow-purple-500/10",
    },
    items: [
      "Bhasha (Quarterly/Bi-monthly research journal).",
      "Varshiki (Comprehensive annual survey of Hindi scholarship).",
      "Sahityamala (Monographs and anthologies of distinguished authors).",
    ],
  },
  {
    id: "E",
    title: "Extension & Integration Programmes",
    titleHi: "विस्तार कार्यक्रम एवं संगोष्ठियां",
    icon: Users2,
    color: {
      topLine: "from-rose-500 to-pink-600",
      cardBg: "from-rose-50/50 via-white to-pink-50/20",
      badgeBg: "bg-rose-100 text-rose-900 border-rose-200",
      iconBg: "bg-rose-600 text-white",
      hoverBorder: "hover:border-rose-400 hover:shadow-rose-500/10",
    },
    items: [
      "Lecture tours of distinguished Hindi scholars across states.",
      "Study tours of Hindi students from non-Hindi speaking regions.",
      "Workshops for new writers (Navlekhak Shivir).",
      "Organizing national seminars and inter-linguistic symposia.",
      "Travel study grants for Hindi research scholars.",
    ],
  },
  {
    id: "F",
    title: "National Literary Awards (Puraskar)",
    titleHi: "राष्ट्रीय पुरस्कार योजनाएं",
    icon: Award,
    color: {
      topLine: "from-amber-600 to-yellow-600",
      cardBg: "from-yellow-50/50 via-white to-amber-50/20",
      badgeBg: "bg-amber-100 text-amber-900 border-amber-200",
      iconBg: "bg-amber-600 text-white",
      hoverBorder: "hover:border-amber-400 hover:shadow-amber-500/10",
    },
    items: [
      "Hinditarbhashi Hindi Lekhak Puraskar (For non-Hindi writers).",
      "Shiksha Puraskar for pioneering educational treatises.",
      "Cash awards, citations, and recognition for scholarly excellence.",
    ],
  },
  {
    id: "G",
    title: "Recognition of Hindi Examinations",
    titleHi: "हिन्दी परीक्षाओं की मान्यता",
    icon: FileCheck2,
    color: {
      topLine: "from-teal-600 to-cyan-600",
      cardBg: "from-teal-50/50 via-white to-cyan-50/20",
      badgeBg: "bg-teal-100 text-teal-900 border-teal-200",
      iconBg: "bg-teal-600 text-white",
      hoverBorder: "hover:border-teal-400 hover:shadow-teal-500/10",
    },
    items: [
      "Evaluation and statutory equivalency of Hindi exams by voluntary bodies.",
      "Formal advisory to union and state service recruitment boards.",
    ],
  },
  {
    id: "H",
    title: "Correspondence Courses in Hindi",
    titleHi: "दूरस्थ शिक्षा एवं पत्राचार पाठ्यक्रम",
    icon: GraduationCap,
    color: {
      topLine: "from-blue-600 to-sky-600",
      cardBg: "from-sky-50/50 via-white to-blue-50/20",
      badgeBg: "bg-blue-100 text-blue-900 border-blue-200",
      iconBg: "bg-blue-600 text-white",
      hoverBorder: "hover:border-blue-400 hover:shadow-blue-500/10",
    },
    items: [
      "Prabodh, Praveen, Pragya certificate courses.",
      "Hindi Certificate & Diploma courses in 14 media languages.",
      "Advanced Hindi Diploma and Civil Services Hindi Course.",
    ],
  },
  {
    id: "I",
    title: "Financial Assistance to VHOs",
    titleHi: "स्वैच्छिक हिन्दी संस्थाओं को वित्तीय सहायता",
    icon: Building2,
    color: {
      topLine: "from-emerald-600 to-teal-700",
      cardBg: "from-emerald-50/50 via-white to-teal-50/20",
      badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-200",
      iconBg: "bg-emerald-600 text-white",
      hoverBorder: "hover:border-emerald-400 hover:shadow-emerald-500/10",
    },
    items: [
      "Financial grants for teaching classes and libraries in non-Hindi areas.",
      "Financial assistance for publishing dictionaries, journals, and translations.",
    ],
  },
  {
    id: "J",
    title: "Free Distribution of Hindi Books",
    titleHi: "पुस्तकों का निःशुल्क वितरण",
    icon: BookOpen,
    color: {
      topLine: "from-indigo-600 to-purple-600",
      cardBg: "from-indigo-50/50 via-white to-purple-50/20",
      badgeBg: "bg-indigo-100 text-indigo-900 border-indigo-200",
      iconBg: "bg-indigo-600 text-white",
      hoverBorder: "hover:border-indigo-400 hover:shadow-indigo-500/10",
    },
    items: [
      "Annual complimentary supply to school, college, and public libraries in non-Hindi speaking states.",
    ],
  },
  {
    id: "K",
    title: "Book Exhibitions & Pan-India Sales",
    titleHi: "पुस्तक प्रदर्शनी एवं बिक्री संवर्धन",
    icon: Library,
    color: {
      topLine: "from-orange-500 to-amber-600",
      cardBg: "from-orange-50/50 via-white to-amber-50/20",
      badgeBg: "bg-orange-100 text-orange-900 border-orange-200",
      iconBg: "bg-orange-600 text-white",
      hoverBorder: "hover:border-orange-400 hover:shadow-orange-500/10",
    },
    items: [
      "Participation in World Book Fair, regional literature festivals, and digital e-cart distribution.",
    ],
  },
];

const regionalOffices = [
  {
    city: "Kolkata",
    cityHi: "कोलकाता",
    zone: "Eastern Regional Centre",
    state: "West Bengal",
    color: "from-blue-600 to-indigo-600 border-blue-200 bg-blue-50/50 text-blue-900",
    badge: "bg-blue-100 text-blue-900",
  },
  {
    city: "Guwahati",
    cityHi: "गुवाहाटी",
    zone: "North-Eastern Regional Centre",
    state: "Assam",
    color: "from-emerald-600 to-teal-600 border-emerald-200 bg-emerald-50/50 text-emerald-900",
    badge: "bg-emerald-100 text-emerald-900",
  },
  {
    city: "Hyderabad",
    cityHi: "हैदराबाद",
    zone: "South-Central Regional Centre",
    state: "Telangana",
    color: "from-amber-600 to-orange-600 border-amber-200 bg-amber-50/50 text-amber-900",
    badge: "bg-amber-100 text-amber-900",
  },
  {
    city: "Chennai",
    cityHi: "चेन्नई",
    zone: "Southern Regional Centre",
    state: "Tamil Nadu",
    color: "from-purple-600 to-violet-600 border-purple-200 bg-purple-50/50 text-purple-900",
    badge: "bg-purple-100 text-purple-900",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO HEADER                                            */}
      {/* ========================================================= */}
      <section
        aria-labelledby="about-title"
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
                About Directorate
              </li>
            </ol>
          </nav>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 shadow-2xs hc:border-white hc:bg-neutral-900 hc:text-white">
                <Sparkles size={12} className="text-amber-600" />
                <span>Apex Body &bull; उच्चतर शिक्षा विभाग, शिक्षा मंत्रालय</span>
              </div>
              <h1
                id="about-title"
                className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white"
              >
                About Central Hindi Directorate
              </h1>
              <p
                lang="hi"
                className="notranslate mt-1 text-base font-semibold text-brand/90 hc:text-neutral-300"
              >
                केन्द्रीय हिन्दी निदेशालय — परिचय, संवैधानिक अधिदेश एवं वैधानिक दायित्व
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-lg border border-line bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-xs hc:border-white hc:bg-neutral-900 hc:text-white">
                Est. 1st March 1960
              </span>
              <span className="rounded-lg bg-brand px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hc:bg-white hc:text-black">
                Article 351 Body
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. STATUTORY INTRODUCTION & CONSTITUTIONAL MANDATE        */}
      {/* ========================================================= */}
      <section aria-label="Introduction" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              {/* Rigvedic Motto Callout */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50/50 p-3 text-xs font-semibold text-amber-900 shadow-2xs">
                <Shield size={16} className="shrink-0 text-amber-600" />
                <div>
                  <span lang="hi" className="text-sm font-bold text-amber-950">
                    &ldquo;अहं राष्ट्री संगमनी वसूनाम्&rdquo;
                  </span>{" "}
                  &bull;{" "}
                  <span className="font-normal italic">
                    (Rigveda 10.125.3) — &quot;I am the Queen, the gatherer-up of treasures.&quot;
                  </span>
                </div>
              </div>

              <p className="text-justify text-sm leading-relaxed text-ink sm:text-[15px] hc:text-white">
                With this profound Vedic motto, the <strong>Central Hindi Directorate</strong> was established on <strong>1st March, 1960</strong> as a subordinate office of the then Ministry of Education (currently Department of Higher Education, Ministry of Education).
              </p>
              <p className="mt-3 text-justify text-sm leading-relaxed text-ink sm:text-[15px] hc:text-white">
                As the apex body of the Central Government, the Directorate persistently executes multiplicity of statutory schemes for imparting an all-India character to Hindi, connecting divergent linguistic communities, harmonizing scheduled languages, and securing prestige for Hindi at the global level.
              </p>

              {/* 4 Foundation Stat Pills */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-center">
                  <span className="block text-lg font-bold text-amber-900">1960</span>
                  <span className="text-[11px] font-medium text-amber-800">1st March Estd.</span>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3 text-center">
                  <span className="block text-lg font-bold text-blue-900">Art. 351</span>
                  <span className="text-[11px] font-medium text-blue-800">Part XVII Mandate</span>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 text-center">
                  <span className="block text-lg font-bold text-emerald-900">22</span>
                  <span className="text-[11px] font-medium text-emerald-800">8th Schedule Langs</span>
                </div>
                <div className="rounded-xl border border-purple-200 bg-purple-50/70 p-3 text-center">
                  <span className="block text-lg font-bold text-purple-900">4</span>
                  <span className="text-[11px] font-medium text-purple-800">Regional Centres</span>
                </div>
              </div>
            </div>

            {/* Constitutional Directive Card */}
            <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-light/70 via-white to-amber-50/40 p-6 shadow-sm hc:border-white hc:bg-neutral-950">
              <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-500 via-brand to-emerald-600" />

              <div className="flex items-center gap-2">
                <span className="grid size-9 place-items-center rounded-xl bg-brand text-white shadow-xs">
                  <ScrollText size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-brand-dark hc:text-white">
                    Constitution of India &bull; Article 351
                  </h3>
                  <span className="text-[11px] font-medium text-muted hc:text-neutral-300">
                    Directive for development of the Hindi language
                  </span>
                </div>
              </div>

              <blockquote className="mt-4 border-l-2 border-brand/40 pl-4 text-justify text-xs leading-relaxed text-slate-700 italic hc:text-neutral-300 sm:text-[13px]">
                &ldquo;It shall be the duty of the Union to promote the spread of the Hindi language, to develop it so that it may serve as a medium of expression for all the elements of the composite culture of India and to secure its enrichment by assimilating without interfering with its genius, the forms, style and expressions used in Hindustani and in the other languages of India specified in the Eighth Schedule, and by drawing, wherever necessary or desirable, for its vocabulary, primarily on Sanskrit and secondarily on other languages.&rdquo;
              </blockquote>

              <p className="mt-4 text-xs font-semibold text-brand hc:text-yellow-300">
                The Central Hindi Directorate was founded specifically to carry out this sovereign constitutional directive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. STATUTORY DUTIES & FUNCTIONS (COLORFUL CARDS)          */}
      {/* ========================================================= */}
      <section
        aria-labelledby="duties-title"
        className="border-t border-line bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-14 sm:py-20 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center sm:mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand hc:bg-black hc:text-white hc:ring-1 hc:ring-white">
              <CheckCircle2 size={13} />
              STATUTORY CHARTER &bull; कार्य एवं दायित्व
            </span>
            <h2
              id="duties-title"
              className="mt-2 text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-tight text-brand-dark hc:text-white"
            >
              Functions &amp; Statutory Duties
            </h2>
            <p className="mt-1 text-sm text-muted hc:text-neutral-300">
              The multifaceted mandate carried out by the Directorate across 11 key programmatic pillars.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {duties.map((d) => {
              const Icon = d.icon;
              return (
                <article
                  key={d.id}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${d.color.cardBg} p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 ${d.color.hoverBorder} hover:shadow-lg hc:border-white hc:bg-neutral-950`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${d.color.topLine}`}
                  />

                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`grid size-11 place-items-center rounded-xl ${d.color.iconBg} shadow-xs transition-transform duration-300 group-hover:scale-105 hc:bg-neutral-800 hc:text-white`}
                      >
                        <Icon size={20} strokeWidth={2} />
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-bold border ${d.color.badgeBg} hc:bg-neutral-800 hc:text-white`}
                      >
                        Pillar {d.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-3.5 text-base font-bold text-ink hc:text-white">
                      {d.title}
                    </h3>
                    {d.titleHi && (
                      <p
                        lang="hi"
                        className="notranslate mt-0.5 text-xs font-semibold text-muted hc:text-neutral-300"
                      >
                        {d.titleHi}
                      </p>
                    )}

                    {/* Items */}
                    {d.items && (
                      <ul className="mt-3.5 space-y-2 border-t border-line/60 pt-3 text-xs leading-relaxed text-slate-700 hc:border-white/20 hc:text-neutral-300">
                        {d.items.map((it) => (
                          <li key={it} className="flex items-start gap-2">
                            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brand/70 hc:bg-white" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-4 pt-2 text-[10px] font-semibold uppercase tracking-wider text-muted/70 hc:text-neutral-400">
                    Statutory Function &bull; CHD
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. REGIONAL OFFICES NETWORK (COLORFUL TILES)              */}
      {/* ========================================================= */}
      <section
        aria-labelledby="offices-title"
        className="border-t border-line bg-gradient-to-b from-white via-amber-50/20 to-white py-14 sm:py-20 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand hc:bg-black hc:text-white hc:ring-1 hc:ring-white">
                <MapPin size={12} />
                PAN-INDIA NETWORK &bull; क्षेत्रीय कार्यालय
              </span>
              <h2
                id="offices-title"
                className="mt-2 text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-tight text-brand-dark hc:text-white"
              >
                Directorate Headquarters &amp; Regional Offices
              </h2>
              <p className="mt-1 text-sm text-muted hc:text-neutral-300">
                Headquarters at New Delhi with 4 Regional Offices providing outreach, examinations, and distribution.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-brand-dark hc:bg-white hc:text-black"
            >
              <span>Contact Regional Offices</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {regionalOffices.map((r) => (
              <div
                key={r.city}
                className={`group flex flex-col justify-between rounded-2xl border p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${r.color} hc:border-white hc:bg-neutral-900 hc:text-white`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-9 place-items-center rounded-xl bg-white text-brand shadow-xs hc:bg-neutral-800 hc:text-white">
                      <MapPin size={18} />
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${r.badge} hc:bg-neutral-800 hc:text-white`}
                    >
                      {r.state}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-tight">
                    {r.city}
                  </h3>
                  <p lang="hi" className="notranslate text-xs font-semibold opacity-80">
                    {r.cityHi}
                  </p>

                  <p className="mt-2 text-xs leading-relaxed opacity-90">
                    {r.zone}
                  </p>
                </div>

                <div className="mt-4 border-t border-black/10 pt-3 text-[11px] font-semibold text-brand hover:underline hc:border-white/20 hc:text-yellow-300">
                  <Link href="/contact" className="inline-flex items-center gap-1">
                    <span>View Address &amp; Contact</span>
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}