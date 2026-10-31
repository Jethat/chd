import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Globe2,
  Landmark,
  Quote,
  ScrollText,
  Sparkles,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const leaders = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Pralhad_Joshi_in_2024.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Hon'ble Minister of Education",
    name: "Shri Pralhad Joshi",
    role: "Hon'ble Minister of Education",
    subRole: "Ministry of Education, Govt. of India",
    hindiRole: "माननीय शिक्षा मंत्री, भारत सरकार",
    badge: "Ministry of Education",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300/80",
    topLine: "from-amber-500 via-orange-500 to-amber-600",
    cardBg: "from-amber-50/70 via-white to-orange-50/30",
    hoverBorder: "hover:border-amber-400 hover:shadow-amber-500/15",
    accentText: "text-amber-800",
  },
  {
    src: "/images/director_chd.png",
    alt: "Director, Central Hindi Directorate",
    name: "Prof. Hitendra Kumar Mishra",
    role: "Director, Central Hindi Directorate",
    subRole: "Department of Higher Education",
    hindiRole: "निदेशक, केन्द्रीय हिन्दी निदेशालय",
    badge: "Directorate Head",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300/80",
    topLine: "from-blue-600 via-indigo-500 to-teal-500",
    cardBg: "from-blue-50/70 via-white to-indigo-50/30",
    hoverBorder: "hover:border-blue-400 hover:shadow-blue-500/15",
    accentText: "text-blue-800",
  },
];

const highlights = [
  {
    icon: Calendar,
    title: "1st March 1960",
    label: "Foundation Day",
    color: "from-amber-500 to-orange-600 text-amber-800 bg-amber-50 border-amber-200",
  },
  {
    icon: Landmark,
    title: "Article 351",
    label: "Constitutional Mandate",
    color: "from-blue-600 to-indigo-600 text-blue-800 bg-blue-50 border-blue-200",
  },
  {
    icon: Globe2,
    title: "22 Languages",
    label: "8th Schedule Synthesis",
    color: "from-emerald-500 to-teal-600 text-emerald-800 bg-emerald-50 border-emerald-200",
  },
  {
    icon: Users,
    title: "All-India Reach",
    label: "4 Regional Centres",
    color: "from-purple-600 to-violet-600 text-purple-800 bg-purple-50 border-purple-200",
  },
];

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-gradient-to-b from-white via-amber-50/20 to-white py-14 sm:py-20 hc:bg-black"
    >
      {/* Decorative Background Glows */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/4 size-80 rounded-full bg-amber-500/5 blur-3xl hc:hidden"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 size-80 rounded-full bg-blue-500/5 blur-3xl hc:hidden"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          {/* ========================================================= */}
          {/* LEFT: About Story, Constitutional Mandate & Highlights   */}
          {/* ========================================================= */}
          <Reveal from="left" className="min-w-0">
            <div className="min-w-0">
              {/* Motto Ribbon */}
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-200/80 bg-gradient-to-r from-amber-50 via-white to-amber-100/50 px-3.5 py-1 text-xs font-semibold text-amber-900 shadow-2xs hc:border-white hc:bg-black hc:text-white">
                <Sparkles size={13} className="text-amber-600" aria-hidden="true" />
                <span lang="hi" className="font-serif font-bold text-amber-800 hc:text-white">
                  &ldquo;अहं राष्ट्री संगमनी वसूनाम्&rdquo;
                </span>
                <span className="text-amber-500/60">&bull;</span>
                <span className="text-[11px] font-medium text-amber-800/90 hc:text-neutral-300">
                  Rigveda 10.125.3
                </span>
              </div>

              {/* Title & Subtitle */}
              <h2
                id="about-title"
                className="mt-3 text-[clamp(1.85rem,3.2vw,2.4rem)] font-bold leading-tight text-brand-dark hc:text-white"
              >
                About Central Hindi Directorate
              </h2>
              <p
                lang="hi"
                className="notranslate mt-1 text-sm font-semibold text-brand/90 hc:text-neutral-300"
              >
                केन्द्रीय हिन्दी निदेशालय &bull; उच्चतर शिक्षा विभाग, शिक्षा मंत्रालय, भारत सरकार
              </p>

              {/* Decorative Gradient Bar */}
              <div
                aria-hidden="true"
                className="my-4 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 via-brand to-brand-dark hc:bg-white"
              />

              {/* Narrative Description */}
              <p className="text-justify text-sm leading-relaxed text-ink sm:text-[15px] hc:text-white">
                Established on <strong>1st March, 1960</strong> as a subordinate office under the Ministry of Education (now Department of Higher Education), the Central Hindi Directorate is the <strong>apex statutory body</strong> of the Government of India dedicated to imparting an all-India character to Hindi, connecting linguistic traditions, and elevating Hindi to a position of global prestige.
              </p>

              {/* Constitutional Mandate Callout Box (Article 351) */}
              <div className="relative mt-5 overflow-hidden rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50/70 via-white to-amber-100/30 p-4 shadow-sm sm:p-5 hc:border-white hc:bg-neutral-950">
                {/* Tricolor-inspired accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-brand to-emerald-600" />

                <div className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-500 text-white shadow-xs hc:bg-neutral-800">
                    <ScrollText size={18} />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-900 hc:text-amber-300">
                        Constitutional Directive &bull; Article 351
                      </span>
                      <span className="rounded bg-amber-200/70 px-1.5 py-0.2 text-[10px] font-bold text-amber-900 hc:bg-neutral-800 hc:text-white">
                        Part XVII
                      </span>
                    </div>
                    <blockquote className="mt-1.5 text-justify text-xs leading-relaxed text-slate-700 italic hc:text-neutral-300 sm:text-[13px]">
                      &ldquo;It shall be the duty of the Union to promote the spread of the Hindi language, to develop it so that it may serve as a medium of expression for all the elements of the composite culture of India and to secure its enrichment by assimilating without interfering with its genius...&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* 4 Colorful Foundation Highlights */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {highlights.map((h) => {
                  const Icon = h.icon;
                  return (
                    <div
                      key={h.title}
                      className={`flex flex-col rounded-xl border p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs ${h.color} hc:border-white hc:bg-neutral-900 hc:text-white`}
                    >
                      <div className="flex items-center gap-1.5">
                        <Icon size={14} className="shrink-0" />
                        <span className="text-xs font-bold leading-tight truncate">{h.title}</span>
                      </div>
                      <span className="mt-1 text-[11px] font-medium leading-tight text-muted hc:text-neutral-300">
                        {h.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* View More Button */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark px-6 py-3 text-xs font-bold text-white shadow-md shadow-brand/20 transition-all hover:from-brand-dark hover:to-brand hover:shadow-lg hover:shadow-brand-dark/30 hc:bg-white hc:text-black"
                >
                  <span>Explore Directorate Profile &amp; History</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/organization-chart"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand-dark hover:underline hc:text-yellow-300"
                >
                  <CheckCircle2 size={13} />
                  <span>Administrative Structure &bull; संगठनात्मक ढांचा</span>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* ========================================================= */}
          {/* RIGHT: Leadership Cards (Minister & Director)             */}
          {/* ========================================================= */}
          <div className="w-full">
            <ul className="grid w-full grid-cols-2 items-stretch gap-4 sm:gap-5">
              {leaders.map((l, i) => (
                <li key={l.src} className="flex min-w-0">
                  <Reveal from="right" delay={i * 120} className="flex w-full min-w-0">
                    <figure
                      className={`group relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-gradient-to-b ${l.cardBg} p-2 shadow-sm transition-all duration-300 hover:-translate-y-1.5 ${l.hoverBorder} hover:shadow-xl hc:border-white hc:bg-neutral-950`}
                    >
                      {/* Top Distinct Gradient Strip */}
                      <span
                        className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${l.topLine}`}
                      />

                      {/* Header Badge */}
                      <div className="pt-2 px-2 pb-1 flex items-center justify-between">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide border ${l.badgeColor} hc:bg-neutral-800 hc:text-white`}
                        >
                          {l.badge}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-muted/70 hc:text-neutral-400">
                          Govt. of India
                        </span>
                      </div>

                      {/* Image container */}
                      <div className="relative mt-1 aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-b from-white via-slate-50 to-slate-100 p-2 ring-1 ring-black/5 hc:bg-neutral-900 hc:ring-white/20">
                        <Image
                          src={l.src}
                          alt={l.alt}
                          fill
                          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                          className="object-contain object-center p-1.5 transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Caption Area with Rich Hierarchy */}
                      <figcaption className="flex flex-1 flex-col justify-center px-2 py-3 text-center">
                        <span className="text-sm font-bold leading-tight text-ink sm:text-[15px] hc:text-white">
                          {l.name}
                        </span>

                        <span
                          className={`mt-1 text-xs font-semibold leading-tight ${l.accentText} hc:text-neutral-200`}
                        >
                          {l.role}
                        </span>

                        <span
                          lang="hi"
                          className="notranslate mt-0.5 text-[10px] text-muted leading-tight hc:text-neutral-400"
                        >
                          {l.hindiRole}
                        </span>
                      </figcaption>
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>

            {/* Bottom Quick Help / Motto Quote strip */}
            <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-line bg-white/80 px-3 py-2 text-center text-[11px] text-muted shadow-2xs hc:border-white hc:bg-neutral-900 hc:text-neutral-300">
              <Quote size={12} className="rotate-180 text-brand" />
              <span>Dedicated to the pan-Indian enrichment &amp; prestige of Hindi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}