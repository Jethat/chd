"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Download,
  ExternalLink,
  FileDown,
  FileText,
  Globe2,
  ScrollText,
  Shield,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  downloads,
  importantLinks,
  schemes,
  type DownloadItem,
  type LinkItem,
  type Scheme,
} from "@/data/schemes";

interface SchemePalette {
  topLine: string;
  iconBg: string;
  cardBg: string;
  borderHover: string;
  tagBg: string;
  numBg: string;
  titleHover: string;
  linkText: string;
  iconColor: string;
}

const SCHEME_PALETTES: SchemePalette[] = [
  // 1. Saffron / Warm Amber (Correspondence Courses)
  {
    topLine: "from-amber-500 via-orange-500 to-amber-600",
    iconBg: "from-amber-500 to-orange-600 shadow-amber-500/25",
    cardBg: "from-amber-50/60 via-white to-orange-50/30",
    borderHover: "hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10",
    tagBg: "bg-amber-100 text-amber-900 border border-amber-200",
    numBg: "bg-amber-500/15 text-amber-800",
    titleHover: "group-hover:text-amber-900",
    linkText: "text-amber-700 hover:text-amber-900",
    iconColor: "text-amber-600",
  },
  // 2. Emerald / Jade Green (Financial Grants to VHOs)
  {
    topLine: "from-emerald-500 via-teal-500 to-emerald-600",
    iconBg: "from-emerald-500 to-teal-600 shadow-emerald-500/25",
    cardBg: "from-emerald-50/60 via-white to-teal-50/30",
    borderHover: "hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10",
    tagBg: "bg-emerald-100 text-emerald-900 border border-emerald-200",
    numBg: "bg-emerald-500/15 text-emerald-800",
    titleHover: "group-hover:text-emerald-900",
    linkText: "text-emerald-700 hover:text-emerald-900",
    iconColor: "text-emerald-600",
  },
  // 3. Royal Blue / Indigo (Hindi Extension Schemes)
  {
    topLine: "from-blue-600 via-indigo-500 to-blue-700",
    iconBg: "from-blue-600 to-indigo-600 shadow-blue-500/25",
    cardBg: "from-blue-50/60 via-white to-indigo-50/30",
    borderHover: "hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10",
    tagBg: "bg-blue-100 text-blue-900 border border-blue-200",
    numBg: "bg-blue-500/15 text-blue-800",
    titleHover: "group-hover:text-blue-900",
    linkText: "text-blue-700 hover:text-blue-900",
    iconColor: "text-blue-600",
  },
  // 4. Crimson / Rose (Lexicography & Kosh)
  {
    topLine: "from-rose-500 via-pink-500 to-rose-600",
    iconBg: "from-rose-500 to-pink-600 shadow-rose-500/25",
    cardBg: "from-rose-50/60 via-white to-pink-50/30",
    borderHover: "hover:border-rose-400 hover:shadow-xl hover:shadow-rose-500/10",
    tagBg: "bg-rose-100 text-rose-900 border border-rose-200",
    numBg: "bg-rose-500/15 text-rose-800",
    titleHover: "group-hover:text-rose-900",
    linkText: "text-rose-700 hover:text-rose-900",
    iconColor: "text-rose-600",
  },
  // 5. Purple / Violet (Bhasha Magazine & Publications)
  {
    topLine: "from-purple-600 via-violet-500 to-purple-700",
    iconBg: "from-purple-600 to-violet-600 shadow-purple-500/25",
    cardBg: "from-purple-50/60 via-white to-violet-50/30",
    borderHover: "hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10",
    tagBg: "bg-purple-100 text-purple-900 border border-purple-200",
    numBg: "bg-purple-500/15 text-purple-800",
    titleHover: "group-hover:text-purple-900",
    linkText: "text-purple-700 hover:text-purple-900",
    iconColor: "text-purple-600",
  },
  // 6. Teal / Cyan (National Awards & Puraskar)
  {
    topLine: "from-teal-500 via-cyan-500 to-teal-600",
    iconBg: "from-teal-600 to-cyan-600 shadow-teal-500/25",
    cardBg: "from-teal-50/60 via-white to-cyan-50/30",
    borderHover: "hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/10",
    tagBg: "bg-teal-100 text-teal-900 border border-teal-200",
    numBg: "bg-teal-500/15 text-teal-800",
    titleHover: "group-hover:text-teal-900",
    linkText: "text-teal-700 hover:text-teal-900",
    iconColor: "text-teal-600",
  },
];

export default function SchemesSection() {
  const [activeTab, setActiveTab] = useState<"links" | "downloads">("downloads");

  return (
    <section
      aria-labelledby="schemes-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-light/30 to-white py-16 sm:py-20 hc:border-white hc:bg-black"
    >
      {/* Subtle National Theme Background Ornaments */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-brand/5 blur-3xl hc:hidden"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-amber-500/5 blur-3xl hc:hidden"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <Reveal className="mb-10 sm:mb-12">
          <div className="flex flex-col items-start justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-end hc:border-white">
            <div>
              <div className="flex items-center gap-2">
                {/* <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold tracking-wider text-brand hc:bg-black hc:text-white hc:ring-1 hc:ring-white">
                  <Shield size={12} className="fill-brand/20" aria-hidden="true" />
                  GOVERNMENT SCHEMES &bull; सरकारी योजनाएं
                </span> */}
                <span className="rounded bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-900 hc:bg-neutral-800 hc:text-white">
                  Article 351 Mandate
                </span>
              </div>
              <h2
                id="schemes-heading"
                className="mt-2.5 text-[clamp(1.6rem,2.8vw,2.3rem)] font-bold leading-tight text-brand-dark hc:text-white"
              >
                Flagship Schemes &amp; Public Services
              </h2>
              <p className="mt-1 text-sm text-muted hc:text-neutral-300">
                Major statutory programmes executed by the Central Hindi Directorate for education, grants, awards, and lexicography.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink shadow-xs hc:border-white hc:bg-neutral-900 hc:text-white">
                <CheckCircle2 size={13} className="text-emerald-600" />
                6 Flagship Programmes Active
              </span>
            </div>
          </div>
        </Reveal>

        {/* 2-Column Master Layout (Schemes Grid + Official Sidebar) */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-10">
          {/* ========================================================= */}
          {/* LEFT: 6 Flagship Scheme Cards                             */}
          {/* ========================================================= */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              {schemes.map((s: Scheme, i: number) => {
                const Icon = s.icon;
                const palette = SCHEME_PALETTES[i % SCHEME_PALETTES.length];

                return (
                  <Reveal
                    key={s.id}
                    delay={(i % 2) * 100 + Math.floor(i / 2) * 90}
                    className="h-full"
                  >
                    <article
                      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${palette.cardBg} p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 ${palette.borderHover} hover:shadow-xl hc:border-white hc:bg-neutral-950`}
                    >
                      {/* Top Distinct Colored Indicator Line */}
                      <span
                        className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${palette.topLine} opacity-90 transition-opacity duration-300 group-hover:opacity-100`}
                      />

                      {/* Header Area */}
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <span
                            className={`grid size-12 place-items-center rounded-xl bg-gradient-to-br ${palette.iconBg} text-white ring-4 ring-white shadow-md transition-all duration-300 group-hover:scale-110 hc:bg-neutral-800 hc:text-white`}
                          >
                            <Icon size={22} strokeWidth={2} aria-hidden="true" />
                          </span>

                          <div className="flex items-center gap-2">
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${palette.tagBg} hc:bg-neutral-800 hc:text-neutral-300`}
                            >
                              {s.tag}
                            </span>
                            <span
                              className={`rounded-md px-2 py-0.5 font-mono text-xs font-bold ${palette.numBg} hc:bg-neutral-800 hc:text-white`}
                            >
                              {s.number}
                            </span>
                          </div>
                        </div>

                        {/* Title & Hindi Subtitle */}
                        <h3
                          className={`mt-4 text-base font-bold text-ink transition-colors ${palette.titleHover} hc:text-white`}
                        >
                          {s.title}
                        </h3>
                        <p
                          lang="hi"
                          className="notranslate mt-0.5 text-xs font-medium text-muted hc:text-neutral-300"
                        >
                          {s.titleHi}
                        </p>

                        {/* Mandate Description */}
                        <p className="mt-2.5 text-xs leading-relaxed text-muted line-clamp-2 hc:text-neutral-300">
                          {s.description}
                        </p>
                      </div>

                      {/* Beneficiaries & Action Footer */}
                      <div className="mt-5 border-t border-line/70 pt-3 hc:border-white">
                        <div className="flex items-center gap-1.5 text-[11px] text-muted hc:text-neutral-400">
                          <Users size={12} className={`shrink-0 ${palette.iconColor}`} />
                          <span className="truncate">{s.beneficiaries}</span>
                        </div>

                        <div className="mt-2.5 flex items-center justify-between">
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 text-xs font-semibold ${palette.linkText} transition-colors group-hover:underline hc:text-yellow-300`}
                          >
                            <span>Scheme Guidelines &bull; दिशा-निर्देश</span>
                            <ArrowUpRight size={13} aria-hidden="true" />
                          </a>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted/70 hc:text-neutral-400">
                            Govt of India
                          </span>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            {/* Bottom Official Schemes Navigation Button */}
            <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-white/80 p-4 shadow-xs hc:border-white hc:bg-black">
              <div className="flex items-center gap-2 text-xs text-muted hc:text-neutral-300">
                <ScrollText size={16} className="text-brand" />
                <span>Need complete eligibility criteria and statutory norms?</span>
              </div>
              <a
                href="https://www.chd.education.gov.in/en/schemes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-brand-dark hover:shadow-md hc:bg-white hc:text-black"
              >
                <span>View All Schemes &bull; सभी योजनाएं</span>
                <ExternalLink size={13} />
              </a>
            </Reveal>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: Official Downloads & National Portals Sidebar       */}
          {/* ========================================================= */}
          <div className="flex flex-col gap-6">
            <Reveal delay={150}>
              <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm hc:border-white hc:bg-black">
                {/* Government Card Tabs */}
                <div className="flex border-b border-line bg-slate-50/80 p-1.5 hc:border-white hc:bg-neutral-900">
                  <button
                    type="button"
                    onClick={() => setActiveTab("downloads")}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-all ${activeTab === "downloads"
                      ? "bg-white text-brand shadow-xs hc:bg-black hc:text-white"
                      : "text-muted hover:text-ink hc:text-neutral-400"
                      }`}
                  >
                    <FileDown size={14} />
                    <span>Application Forms</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("links")}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-all ${activeTab === "links"
                      ? "bg-white text-brand shadow-xs hc:bg-black hc:text-white"
                      : "text-muted hover:text-ink hc:text-neutral-400"
                      }`}
                  >
                    <Globe2 size={14} />
                    <span>Important Links</span>
                  </button>
                </div>

                {/* TAB 1: Scheme Application Forms */}
                {activeTab === "downloads" && (
                  <div className="flex flex-col">
                    <div className="border-b border-line px-5 py-3 text-xs text-muted hc:border-white hc:text-neutral-400">
                      Official PDF forms for grants, camps &amp; scholarships:
                    </div>

                    <ul className="divide-y divide-line hc:divide-white">
                      {downloads.map((item: DownloadItem) => (
                        <li key={item.title}>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/item flex items-start justify-between gap-3 p-4 transition-colors hover:bg-brand-light/50 hc:hover:bg-neutral-900"
                          >
                            <div className="flex items-start gap-3">
                              <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-red-50 text-red-700 group-hover/item:bg-red-600 group-hover/item:text-white hc:bg-neutral-800 hc:text-white">
                                <FileText size={14} />
                              </span>
                              <div>
                                <h4 className="line-clamp-2 text-xs font-semibold text-ink group-hover/item:text-brand-dark hc:text-white">
                                  {item.title}
                                </h4>
                                {item.titleHi && (
                                  <p
                                    lang="hi"
                                    className="notranslate mt-0.5 text-[11px] text-muted hc:text-neutral-400"
                                  >
                                    {item.titleHi}
                                  </p>
                                )}
                                <div className="mt-1.5 flex items-center gap-2">
                                  <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-slate-700 hc:bg-neutral-800 hc:text-neutral-300">
                                    {item.fileType} &bull; {item.fileSize}
                                  </span>
                                  {item.formNo && (
                                    <span className="text-[10px] text-muted hc:text-neutral-400">
                                      {item.formNo}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <Download
                              size={15}
                              className="mt-1 shrink-0 text-muted transition-transform group-hover/item:translate-y-0.5 group-hover/item:text-brand hc:text-white"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>

                    {/* View All Application Forms Link */}
                    <div className="border-t border-line bg-slate-50/50 p-3 text-center hc:border-white hc:bg-neutral-900">
                      <Link
                        href="/application-forms"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand transition hover:underline hc:text-yellow-300"
                      >
                        <span>View All 12+ Official Application Forms</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                )}

                {/* TAB 2: Important National Portals */}
                {activeTab === "links" && (
                  <div className="flex flex-col">
                    <div className="border-b border-line px-5 py-3 text-xs text-muted hc:border-white hc:text-neutral-400">
                      Apex ministries, commissions &amp; portals:
                    </div>

                    <ul className="divide-y divide-line hc:divide-white">
                      {importantLinks.map((link: LinkItem) => {
                        const isExt = link.external;
                        const Tag = isExt ? "a" : Link;
                        const props = isExt
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {};

                        return (
                          <li key={link.title}>
                            <Tag
                              href={link.href}
                              {...props}
                              className="group/link flex items-center justify-between gap-3 p-4 transition-colors hover:bg-brand-light/50 hc:hover:bg-neutral-900"
                            >
                              <div className="flex items-center gap-3">
                                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-amber-50 text-amber-800 group-hover/link:bg-amber-600 group-hover/link:text-white hc:bg-neutral-800 hc:text-white">
                                  <Building2 size={14} />
                                </span>
                                <div>
                                  <h4 className="line-clamp-1 text-xs font-semibold text-ink group-hover/link:text-brand-dark hc:text-white">
                                    {link.title}
                                  </h4>
                                  {link.titleHi && (
                                    <p
                                      lang="hi"
                                      className="notranslate mt-0.5 text-[11px] text-muted hc:text-neutral-400"
                                    >
                                      {link.titleHi}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                {link.tag && (
                                  <span className="hidden rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 sm:inline-block hc:bg-neutral-800 hc:text-neutral-300">
                                    {link.tag}
                                  </span>
                                )}
                                <ArrowUpRight
                                  size={15}
                                  className="shrink-0 text-muted transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-brand hc:text-white"
                                />
                              </div>
                            </Tag>
                          </li>
                        );
                      })}
                    </ul>

                    {/* Footer link to Grievance & RTI */}
                    <div className="border-t border-line bg-slate-50/50 p-3 text-center hc:border-white hc:bg-neutral-900">
                      <Link
                        href="/rti-report"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand transition hover:underline hc:text-yellow-300"
                      >
                        <span>Right to Information (RTI) &amp; Public Grievances</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Official Helpline / Quick Support Card */}
            <Reveal delay={250}>
              <div className="rounded-2xl border border-line bg-gradient-to-br from-brand-dark to-brand-darker p-5 text-white shadow-sm hc:border-white hc:bg-black">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Schemes Assistance Desk
                  </span>
                  <span className="rounded bg-white/20 px-2 py-0.5 text-[10px] font-medium">
                    Working Days
                  </span>
                </div>
                <h4 className="mt-2 text-sm font-bold text-white">
                  Have questions about CHD Schemes or Applications?
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-neutral-200">
                  Contact the Scheme Officers at West Block-VII, R.K. Puram, New Delhi &bull; 011-20862356
                </p>
                <div className="mt-3.5 flex items-center gap-2 border-t border-white/20 pt-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:underline"
                  >
                    <span>Official Directory &amp; Support</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}