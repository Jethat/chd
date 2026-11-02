import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  FileText,
  GraduationCap,
  Landmark,
  Mic2,
  PenLine,
  Plane,
  Users2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vistar | Central Hindi Directorate • केन्द्रीय हिन्दी निदेशालय",
  description:
    "The Extension Programme (Vistar) of the Central Hindi Directorate: writers' workshops, student study tours, research travel grants, professors' lecture series and national seminars for the promotion of Hindi in non-Hindi-speaking states.",
};

type Programme = {
  id: string;
  title: string;
  titleHi?: string;
  subtitle: string;
  icon: typeof PenLine;
  stats: { value: string; label: string }[];
  paragraphs: string[];
  color: {
    topLine: string;
    cardBg: string;
    badgeBg: string;
    iconBg: string;
    statBg: string;
    statText: string;
  };
};

const programmes: Programme[] = [
  {
    id: "navlekhak-shivir",
    title: "Hinditar Bhashi Hindi Navlekhak Shivir",
    subtitle: "Neo-Hindi Writers' Workshop of non-Hindi-speaking regions",
    icon: PenLine,
    stats: [
      { value: "8", label: "workshops every year" },
      { value: "25", label: "writers per workshop" },
      { value: "8 days", label: "per workshop" },
      { value: "3", label: "resource persons" },
    ],
    paragraphs: [
      "These workshops give neo-Hindi writers of non-Hindi-speaking states the latest detailed information about fiction, poetry, drama and other forms of Hindi literature, as well as translation, journalism and more.",
      "Each workshop runs for eight days with 25 participants. Three renowned resource persons are invited to guide the writers. Participants' writings are discussed and improvements are suggested, and they learn about the latest trends in literature. The aim is to give direction to the creative and analytical talent of neo-Hindi writers.",
      "Writers from different linguistic regions leave a positive mark on one another through the scheme. Several non-Hindi-speaking participants have already proved their worth in the contemporary literary arena.",
    ],
    color: {
      topLine: "from-amber-500 to-orange-600",
      cardBg: "from-amber-50/50 via-white to-orange-50/20",
      badgeBg: "bg-amber-100 text-amber-900 border-amber-200",
      iconBg: "bg-amber-500 text-white",
      statBg: "border-amber-200 bg-amber-50/70",
      statText: "text-amber-900",
    },
  },
  {
    id: "chhatra-adhyayan-yatra",
    title: "Chhatra Adhyayan Yatra",
    subtitle: "Study tours of Hindi students of non-Hindi-speaking states",
    icon: GraduationCap,
    stats: [
      { value: "2", label: "tours every year" },
      { value: "50", label: "students per tour" },
      { value: "3", label: "universities / organizations" },
      { value: "9–10 days", label: "per tour" },
    ],
    paragraphs: [
      "Two study tours are organized every year for students of non-Hindi-speaking states who are studying Hindi language and literature at graduate and post-graduate levels.",
      "On each tour, fifty students visit 3 universities or voluntary Hindi organizations across Hindi-speaking states and meet distinguished Hindi scholars and litterateurs. As far as possible they also visit places of historical, cultural and literary importance.",
      "The scheme helps students understand the practical form of Hindi and its variations in pronunciation, and gives them direct, current information on many aspects of Hindi language and literature. Students from different states stay together for nine to ten days and exchange ideas in Hindi, starting their journey toward national unity through the language.",
    ],
    color: {
      topLine: "from-blue-600 to-indigo-600",
      cardBg: "from-blue-50/50 via-white to-indigo-50/20",
      badgeBg: "bg-blue-100 text-blue-900 border-blue-200",
      iconBg: "bg-blue-600 text-white",
      statBg: "border-blue-200 bg-blue-50/70",
      statText: "text-blue-900",
    },
  },
  {
    id: "shodh-chhatra-yatra-anudan",
    title: "Shodh Chhatra Yatra Anudan",
    subtitle: "Travel grant to research students of Hindi of non-Hindi-speaking states",
    icon: Plane,
    stats: [
      { value: "20", label: "research students" },
      { value: "3", label: "universities per scholar (max)" },
    ],
    paragraphs: [
      "Twenty students doing research in Hindi language and literature at universities in non-Hindi-speaking states receive travel grants to visit Hindi-speaking states, collect research material and exchange ideas. A research scholar can travel to only three universities for the research work.",
      "The scheme helps scholars collect material and puts them in touch with scholars and litterateurs living in Hindi-speaking states. Its focus is the practical side of Hindi research.",
    ],
    color: {
      topLine: "from-emerald-500 to-teal-600",
      cardBg: "from-emerald-50/50 via-white to-teal-50/20",
      badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-200",
      iconBg: "bg-emerald-600 text-white",
      statBg: "border-emerald-200 bg-emerald-50/70",
      statText: "text-emerald-900",
    },
  },
  {
    id: "pradhyapak-vyakhyan-mala",
    title: "Pradhyapak Vyakhyan Mala",
    subtitle: "Professors' lecture series",
    icon: Landmark,
    stats: [
      { value: "4 + 4", label: "professors, from non-Hindi and Hindi-speaking states" },
      { value: "3", label: "lectures each" },
      { value: "3", label: "universities each" },
    ],
    paragraphs: [
      "The lecture series enables exchange of ideas and coordination between the Hindi departments of universities in Hindi-speaking and non-Hindi-speaking states.",
      "Four professors from universities in non-Hindi-speaking states and four from universities in Hindi-speaking states each deliver three lectures at three universities, in Hindi-speaking and non-Hindi-speaking states respectively, on current literary topics in Hindi.",
      "This mutual exchange links professors, students and lovers of Hindi at the intellectual and emotional level.",
    ],
    color: {
      topLine: "from-purple-600 to-violet-600",
      cardBg: "from-purple-50/50 via-white to-violet-50/20",
      badgeBg: "bg-purple-100 text-purple-900 border-purple-200",
      iconBg: "bg-purple-600 text-white",
      statBg: "border-purple-200 bg-purple-50/70",
      statText: "text-purple-900",
    },
  },
  {
    id: "rashtriya-sangoshthi",
    title: "Rashtriya Sangoshthi",
    subtitle: "National seminar",
    icon: Mic2,
    stats: [
      { value: "2", label: "seminars every year" },
      { value: "4 + 4", label: "scholars, from Hindi and non-Hindi states" },
    ],
    paragraphs: [
      "Two seminars are organized every year, in cooperation with universities and voluntary organizations of Hindi and non-Hindi states, to start healthy discussion on topics in Indian and comparative Indian literature.",
      "At each seminar, four Hindi professors, litterateurs and scholars from Hindi-speaking states and four from non-Hindi-speaking states discuss specific literary topics and present papers.",
      "The scheme encourages scholars to exchange ideas on the fundamental unity and common features of Indian literature. It also shows what Indian literature is available in Hindi and makes it easier to translate Hindi literature into other modern Indian languages.",
    ],
    color: {
      topLine: "from-rose-500 to-pink-600",
      cardBg: "from-rose-50/50 via-white to-pink-50/20",
      badgeBg: "bg-rose-100 text-rose-900 border-rose-200",
      iconBg: "bg-rose-600 text-white",
      statBg: "border-rose-200 bg-rose-50/70",
      statText: "text-rose-900",
    },
  },
];

const formGroups = [
  {
    title: "Extension programme application forms",
    items: [
      { label: "Application Form for Student Study Tour", size: "150.10 KB", href: "/downloads/vistar/student-study-tour-form.pdf" },
      { label: "Application Form for Research Student Travel Grant", size: "83.72 KB", href: "/downloads/vistar/research-travel-grant-form.pdf" },
      { label: "Application Form for Non-Hindi Speaking Neo Hindi Writer Camp", size: "131.85 KB", href: "/downloads/vistar/neo-hindi-writer-camp-form.pdf" },
    ],
  },
  {
    title: "Shiksha Puraskar Yojana",
    items: [
      { label: "Shiksha Puraskar Yojana advertisement, year 2020", size: "430.30 KB", href: "/downloads/vistar/shiksha-puraskar-advertisement-2020.pdf" },
      { label: "Shiksha Puraskar Yojana", size: "1.91 MB", href: "/downloads/vistar/shiksha-puraskar-yojana.pdf" },
      { label: "Shiksha Puraskar Yojana Application Form", size: "642.77 KB", href: "/downloads/vistar/shiksha-puraskar-form.pdf" },
    ],
  },
  {
    title: "Non-Hindi-speaking Hindi writers: awards",
    items: [
      { label: "Non-Hindi speaking Hindi writer Scheme advertisement, year 2020", size: "435.90 KB", href: "/downloads/vistar/non-hindi-writer-advertisement-2020.pdf" },
      { label: "Non-Hindi speaking Hindi writer Scheme", size: "2.24 MB", href: "/downloads/vistar/non-hindi-writer-scheme.pdf" },
      { label: "Non-Hindi speaking Hindi writer award Application Form", size: "983.71 KB", href: "/downloads/vistar/non-hindi-writer-award-form.pdf" },
      { label: "Scheme of awards to Hindi writers of Non-Hindi-Speaking States", size: "432.97 KB", href: "/downloads/vistar/awards-scheme.pdf" },
    ],
  },
];

export default function VistarPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO                                                    */}
      {/* ========================================================= */}
      <section
        aria-labelledby="vistar-title"
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
              <li><Link href="/" className="hover:text-brand-dark hover:underline">Home</Link></li>
              <li aria-hidden="true">&bull;</li>
              <li><Link href="/schemes" className="hover:text-brand-dark hover:underline">Schemes</Link></li>
              <li aria-hidden="true">&bull;</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">Vistar</li>
            </ol>
          </nav>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h1
                id="vistar-title"
                className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white"
              >
                Vistar: Extension Programme
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-muted hc:text-neutral-300 sm:text-[15px]">
                Five programmes that bring Hindi writers, students, researchers and professors from
                Hindi and non-Hindi-speaking states together.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-line bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-xs hc:border-white hc:bg-neutral-900 hc:text-white">
                5 Programmes
              </span>
              <span className="rounded-lg bg-brand px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hc:bg-white hc:text-black">
                Non-Hindi-speaking states
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. INTRODUCTION + PROGRAMME INDEX                          */}
      {/* ========================================================= */}
      <section aria-label="Introduction" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <p className="text-justify text-sm leading-relaxed text-ink sm:text-[15px] hc:text-white">
                The schemes of the <strong>Extension Programme</strong> promote and propagate Hindi in
                non-Hindi-speaking states. They give non-Hindi-speaking lovers of Hindi, scholars,
                authors, researchers, students, professors and translators a common forum, and help
                them understand each other through discussion and dialogue, appreciating one
                another&rsquo;s traditions.
              </p>
              <p className="mt-3 text-justify text-sm leading-relaxed text-ink sm:text-[15px] hc:text-white">
                By showing the common features of Indian culture, the schemes encourage linguistic
                unity. To give useful information about the all-India character of Hindi, the
                following programmes are being implemented.
              </p>
            </div>

            <nav
              aria-label="Programmes"
              className="relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-light/70 via-white to-amber-50/40 p-5 shadow-sm hc:border-white hc:bg-neutral-950"
            >
              <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-500 via-brand to-emerald-600" />
              <h2 className="text-sm font-bold text-brand-dark hc:text-white">Programmes</h2>
              <ol className="mt-3 space-y-1.5">
                {programmes.map((p, i) => (
                  <li key={p.id}>
                    <a
                      href={`#${p.id}`}
                      className="flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm font-semibold text-ink transition hover:bg-white hover:text-brand-dark hc:text-white hc:hover:bg-neutral-800"
                    >
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-white hc:bg-white hc:text-black">
                        {i + 1}
                      </span>
                      <span>{p.title}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#forms"
                    className="flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm font-semibold text-ink transition hover:bg-white hover:text-brand-dark hc:text-white hc:hover:bg-neutral-800"
                  >
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-light text-brand-dark hc:bg-neutral-800 hc:text-white">
                      <FileText size={13} />
                    </span>
                    <span>Application forms</span>
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. PROGRAMME CARDS                                         */}
      {/* ========================================================= */}
      <section
        aria-labelledby="programmes-title"
        className="border-t border-line bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-14 sm:py-20 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center sm:mb-12">
            <h2
              id="programmes-title"
              className="mt-2 text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-tight text-brand-dark hc:text-white"
            >
              The Five Programmes
            </h2>
            <p className="mt-1 text-sm text-muted hc:text-neutral-300">
              What each programme offers, who takes part, and how many places there are.
            </p>
          </div>

          <div className="space-y-6">
            {programmes.map((p, i) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.id}
                  id={p.id}
                  aria-labelledby={`${p.id}-title`}
                  className={`relative scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${p.color.cardBg} p-5 shadow-xs sm:p-7 hc:border-white hc:bg-neutral-950`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.color.topLine}`}
                  />

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`grid size-11 shrink-0 place-items-center rounded-xl ${p.color.iconBg} shadow-xs hc:bg-neutral-800 hc:text-white`}
                      >
                        <Icon size={20} strokeWidth={2} />
                      </span>
                      <div>
                        <h3
                          id={`${p.id}-title`}
                          className="text-lg font-bold leading-tight text-ink hc:text-white sm:text-xl"
                        >
                          {p.title}
                        </h3>
                        <p className="mt-0.5 text-xs font-medium text-muted hc:text-neutral-300 sm:text-sm">
                          {p.subtitle}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-bold ${p.color.badgeBg} hc:bg-neutral-800 hc:text-white`}
                    >
                      Programme {i + 1}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                    <dl className="grid grid-cols-2 gap-3 self-start">
                      {p.stats.map((s) => (
                        <div
                          key={s.label}
                          className={`rounded-xl border p-3 text-center ${p.color.statBg} hc:border-white hc:bg-neutral-900`}
                        >
                          <dt className="sr-only">{s.label}</dt>
                          <dd>
                            <span
                              className={`block text-lg font-bold ${p.color.statText} hc:text-white`}
                            >
                              {s.value}
                            </span>
                            <span className="text-[11px] font-medium leading-tight text-slate-700 hc:text-neutral-300">
                              {s.label}
                            </span>
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="space-y-3 border-t border-line/60 pt-4 text-sm leading-relaxed text-slate-700 hc:border-white/20 hc:text-neutral-200 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                      {p.paragraphs.map((t) => (
                        <p key={t} className="text-justify">
                          {t}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. APPLICATION FORMS                                       */}
      {/* ========================================================= */}
      <section
        id="forms"
        aria-labelledby="forms-title"
        className="scroll-mt-24 border-t border-line bg-gradient-to-b from-white via-amber-50/20 to-white py-14 sm:py-20 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2
                id="forms-title"
                className="mt-2 text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-tight text-brand-dark hc:text-white"
              >
                Extension application forms
              </h2>
              <p className="mt-1 text-sm text-muted hc:text-neutral-300">
                Application forms, schemes and advertisements, all in PDF.
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

          <div className="grid gap-6 lg:grid-cols-3">
            {formGroups.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-line bg-white p-5 shadow-xs hc:border-white hc:bg-neutral-950"
              >
                <h3 className="flex items-center gap-2 border-b border-line pb-3 text-sm font-bold text-brand-dark hc:border-white/30 hc:text-white">
                  <Users2 size={16} className="shrink-0 text-brand hc:text-yellow-300" />
                  {g.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {g.items.map((f) => (
                    <li key={f.label}>
                      <a
                        href={f.href}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-transparent p-2.5 transition hover:border-brand/30 hover:bg-brand-light/50 hc:hover:border-white hc:hover:bg-neutral-900"
                      >
                        <span className="flex items-start gap-2.5">
                          <FileText
                            size={16}
                            className="mt-0.5 shrink-0 text-brand hc:text-yellow-300"
                          />
                          <span>
                            <span className="block text-xs font-semibold leading-snug text-ink hc:text-white">
                              {f.label}
                            </span>
                            <span className="block text-[11px] text-muted hc:text-neutral-400">
                              PDF &bull; {f.size}
                            </span>
                          </span>
                        </span>
                        <Download
                          size={15}
                          className="shrink-0 text-brand transition group-hover:translate-y-0.5 hc:text-yellow-300"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}