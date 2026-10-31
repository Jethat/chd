"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Calendar,
  ExternalLink,
  FileDown,
  GraduationCap,
  Pause,
  Play,
  ScrollText,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { latestUpdates, type Update } from "@/data/updates";

// Category Color Mapping for Govt Badges
const CATEGORY_STYLES: Record<
  string,
  { badge: string; border: string; text: string; bg: string }
> = {
  Admissions: {
    badge: "bg-blue-100 text-blue-900 border-blue-200",
    border: "border-l-blue-600",
    text: "text-blue-700",
    bg: "from-blue-50/40 via-white to-sky-50/20",
  },
  Grants: {
    badge: "bg-emerald-100 text-emerald-900 border-emerald-200",
    border: "border-l-emerald-600",
    text: "text-emerald-700",
    bg: "from-emerald-50/40 via-white to-teal-50/20",
  },
  Journals: {
    badge: "bg-purple-100 text-purple-900 border-purple-200",
    border: "border-l-purple-600",
    text: "text-purple-700",
    bg: "from-purple-50/40 via-white to-violet-50/20",
  },
  Recruitment: {
    badge: "bg-rose-100 text-rose-900 border-rose-200",
    border: "border-l-rose-600",
    text: "text-rose-700",
    bg: "from-rose-50/40 via-white to-pink-50/20",
  },
  Publications: {
    badge: "bg-amber-100 text-amber-900 border-amber-200",
    border: "border-l-amber-600",
    text: "text-amber-700",
    bg: "from-amber-50/40 via-white to-orange-50/20",
  },
  Reports: {
    badge: "bg-teal-100 text-teal-900 border-teal-200",
    border: "border-l-teal-600",
    text: "text-teal-700",
    bg: "from-teal-50/40 via-white to-cyan-50/20",
  },
};

const formatDay = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.getUTCDate();
};

const formatMonth = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleString("en-IN", { month: "short", timeZone: "UTC" }).toUpperCase();
};

const formatYear = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.getUTCFullYear();
};

export default function LatestUpdates({ limit = 8 }: { limit?: number }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const sortedItems = useMemo(() => {
    return [...latestUpdates].sort((a, b) => b.date.localeCompare(a.date));
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return sortedItems.slice(0, limit);
    return sortedItems
      .filter((u) => u.category === selectedCategory)
      .slice(0, limit);
  }, [selectedCategory, sortedItems, limit]);

  const categories = ["All", "Admissions", "Grants", "Journals", "Recruitment"];

  return (
    <section
      aria-labelledby="updates-heading"
      className="relative overflow-hidden border-t border-line bg-gradient-to-b from-slate-50/70 via-amber-50/20 to-white py-14 sm:py-20 hc:border-white hc:bg-black"
    >
      {/* Background Soft Glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/3 size-80 rounded-full bg-brand/5 blur-3xl hc:hidden"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 size-80 rounded-full bg-amber-500/5 blur-3xl hc:hidden"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ========================================================= */}
        {/* 1. SECTION HEADER (GOVT STYLE)                            */}
        {/* ========================================================= */}
        <Reveal className="mb-8 sm:mb-10">
          <div className="flex flex-col items-start justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-end hc:border-white">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-light to-amber-100/60 px-3 py-1 text-xs font-semibold text-brand hc:bg-black hc:text-white hc:ring-1 hc:ring-white">
                  <Bell size={13} className="text-brand animate-bounce" aria-hidden="true" />
                  GOVERNMENT NOTICES &bull; आधिकारिक सूचनाएं एवं परिपत्र
                </span>
                <span className="inline-flex items-center gap-1 rounded bg-red-100 px-2 py-0.5 text-[11px] font-bold text-red-700 animate-pulse hc:bg-neutral-800 hc:text-red-400">
                  <span className="size-1.5 rounded-full bg-red-600" />
                  LIVE
                </span>
              </div>

              <h2
                id="updates-heading"
                className="mt-2.5 text-[clamp(1.7rem,2.8vw,2.3rem)] font-bold leading-tight text-brand-dark hc:text-white"
              >
                Latest Updates &amp; Public Circulars
              </h2>
              <p className="mt-1 text-sm text-muted hc:text-neutral-300">
                Official notifications, admissions, statutory grants, and recruitments issued by the Central Hindi Directorate.
              </p>
            </div>

            {/* Quick Action & Archive Link */}
            <div className="flex items-center gap-3">
              <Link
                href="/application-forms"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-ink shadow-xs transition hover:border-brand hover:text-brand hc:border-white hc:bg-neutral-900 hc:text-white"
              >
                <FileDown size={14} className="text-brand" />
                <span>Download Forms</span>
              </Link>

              <a
                href="https://www.chd.education.gov.in/en/circulars-orders"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg bg-brand px-4 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-brand-dark hc:bg-white hc:text-black"
              >
                <span>All Circulars</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* ========================================================= */}
        {/* 2. MASTER 2-PANEL LAYOUT                                  */}
        {/* ========================================================= */}
        <div className="grid gap-8 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-10">
          {/* ======================================================= */}
          {/* LEFT: SPOTLIGHT URGENT ANNOUNCEMENT CARD                */}
          {/* ======================================================= */}
          <Reveal from="left" className="flex flex-col">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border-2 border-amber-300/80 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/40 p-5 sm:p-6 shadow-md shadow-amber-500/5 hc:border-white hc:bg-neutral-950">
              {/* National Tricolor Top Accent Line */}
              <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-600" />

              <div>
                {/* Header Spotlight Ribbon */}
                <div className="flex items-center justify-between gap-2 border-b border-amber-200/80 pb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-2.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
                    <Sparkles size={12} />
                    SPOTLIGHT NOTICE
                  </span>
                  <span className="font-mono text-xs font-bold text-amber-900 hc:text-neutral-300">
                    Session 2026–27
                  </span>
                </div>

                {/* Main Announcement Heading */}
                <div className="mt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 hc:text-amber-300">
                    Directorate Correspondence Education
                  </span>
                  <h3 className="mt-1 text-lg font-bold leading-snug text-brand-dark hc:text-white">
                    Admissions Open for Hindi Correspondence Courses
                  </h3>
                  <p
                    lang="hi"
                    className="notranslate mt-0.5 text-xs font-semibold text-brand/90 hc:text-neutral-300"
                  >
                    पत्राचार पाठ्यक्रम — प्रमाण-पत्र, डिप्लोमा एवं सिविल सेवा पाठ्यक्रम
                  </p>
                </div>

                {/* Key Bullet Points */}
                <div className="mt-4 rounded-xl border border-amber-200 bg-white/90 p-3.5 shadow-2xs hc:border-white/20 hc:bg-neutral-900">
                  <div className="flex items-center gap-2 text-xs font-bold text-ink hc:text-white">
                    <GraduationCap size={16} className="text-brand" />
                    <span>Key Admissions Highlights</span>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-700 hc:text-neutral-300">
                    <li className="flex items-start gap-1.5">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brand" />
                      <span>Medium: 14 Indian languages &amp; English for non-Hindi speakers.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brand" />
                      <span>Certified by Ministry of Education, Govt. of India.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brand" />
                      <span>Study materials &amp; quarterly dispatch delivered pan-India.</span>
                    </li>
                  </ul>
                </div>

                {/* Secondary Fast Flash Item */}
                <div className="mt-3.5 rounded-xl border border-line bg-white/70 p-3 text-xs hc:border-white/20 hc:bg-neutral-900">
                  <div className="flex items-center gap-1.5 text-amber-900 font-bold hc:text-amber-300">
                    <AlertCircle size={13} className="text-amber-600" />
                    <span>Grants Alert &bull; स्वैच्छिक संस्था अनुदान</span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted hc:text-neutral-300">
                    VHO scheme grant applications for FY 2026-27 are now active on the central portal.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 border-t border-amber-200/80 pt-4">
                <a
                  href="https://www.chd.mhrd.gov.in/onlinecc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-dark px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-brand/20 transition-all hover:from-brand-dark hover:to-brand hc:bg-white hc:text-black"
                >
                  <span>Apply Online &bull; ऑनलाइन आवेदन करें</span>
                  <ExternalLink size={13} />
                </a>

                <div className="mt-2 text-center text-[11px] text-muted hc:text-neutral-400">
                  Ref No: CHD/CC/ADM/2026/112 &bull; Validated Notice
                </div>
              </div>
            </div>
          </Reveal>

          {/* ======================================================= */}
          {/* RIGHT: OFFICIAL NOTICE BOARD (CIRCULARS TICKER LIST)    */}
          {/* ======================================================= */}
          <Reveal from="right" delay={120} className="flex flex-col">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white shadow-sm hc:border-white hc:bg-neutral-950">
              {/* Notice Board Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-slate-50/80 px-4 py-3 sm:px-6 hc:border-white hc:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="grid size-7 place-items-center rounded-lg bg-brand text-white shadow-xs">
                    <ScrollText size={15} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-brand-dark hc:text-white">
                      Official Gazette &amp; Circulars Board
                    </h3>
                    <span className="text-[10px] font-medium text-muted hc:text-neutral-400">
                      Showing {filteredItems.length} active announcements
                    </span>
                  </div>
                </div>

                {/* Marquee Controls & Filter Pills */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPaused(!isPaused)}
                    className="inline-flex items-center gap-1 rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-2xs transition hover:border-brand hover:text-brand hc:border-white hc:bg-neutral-800 hc:text-white"
                    title={isPaused ? "Resume scrolling" : "Pause scrolling"}
                  >
                    {isPaused ? <Play size={11} /> : <Pause size={11} />}
                    <span>{isPaused ? "Resume" : "Pause"}</span>
                  </button>
                </div>
              </div>

              {/* Category Filter Pills Bar */}
              <div className="flex flex-wrap items-center gap-1.5 border-b border-line/60 bg-white px-4 py-2.5 sm:px-6 hc:border-white/20 hc:bg-neutral-950">
                <span className="text-[11px] font-semibold text-muted mr-1">Filter:</span>
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-full px-3 py-0.5 text-xs font-semibold transition-all ${
                        isActive
                          ? "bg-brand text-white shadow-xs hc:bg-white hc:text-black"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200 hc:bg-neutral-800 hc:text-neutral-300"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Scrollable Notice Rows Container */}
              <div className="relative flex-1 overflow-hidden p-2 sm:p-4">
                <div
                  className={`space-y-3 ${
                    isPaused ? "" : "transition-transform"
                  }`}
                >
                  {filteredItems.map((u: Update) => {
                    const style =
                      CATEGORY_STYLES[u.category || "Admissions"] ||
                      CATEGORY_STYLES.Admissions;

                    return (
                      <article
                        key={u.title}
                        className={`group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-xl border border-line/70 bg-gradient-to-r ${style.bg} p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm hc:border-white hc:bg-neutral-900`}
                      >
                        {/* Left: Date Box & NEW Indicator */}
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="flex size-12 shrink-0 flex-col items-center justify-center rounded-xl border border-line bg-white shadow-2xs hc:border-white/20 hc:bg-black">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-muted">
                              {formatMonth(u.date)}
                            </span>
                            <span className="text-sm font-extrabold leading-none text-brand-dark hc:text-white">
                              {formatDay(u.date)}
                            </span>
                            <span className="text-[8px] font-medium text-muted/80">
                              {formatYear(u.date)}
                            </span>
                          </div>

                          {/* Category Badge & Live Pulse */}
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1.5">
                              <span
                                className={`rounded-full px-2 py-0.5 text-[10px] font-bold border ${style.badge} hc:bg-neutral-800 hc:text-white`}
                              >
                                {u.category || "Notice"}
                              </span>

                              {u.isNew && (
                                <span className="inline-flex items-center gap-1 rounded bg-red-500 px-1.5 py-0.2 text-[9px] font-extrabold text-white animate-pulse">
                                  NEW &bull; नया
                                </span>
                              )}
                            </div>
                            <span className="font-mono text-[10px] text-muted truncate max-w-[120px] hc:text-neutral-400">
                              {u.refNo || "CHD/GEN/2026"}
                            </span>
                          </div>
                        </div>

                        {/* Middle: Title & Hindi Subtitle */}
                        <div className="flex-1 min-w-0 pr-2">
                          <h4 className="text-xs sm:text-[13px] font-bold leading-snug text-ink transition-colors group-hover:text-brand-dark hc:text-white line-clamp-2">
                            {u.title}
                          </h4>
                          {u.titleHi && (
                            <p
                              lang="hi"
                              className="notranslate mt-0.5 text-[11px] font-medium text-brand/80 hc:text-neutral-300 line-clamp-1"
                            >
                              {u.titleHi}
                            </p>
                          )}
                        </div>

                        {/* Right: Download / Link Action */}
                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          {u.fileSize && (
                            <span className="hidden xl:inline text-[10px] font-medium text-muted hc:text-neutral-400">
                              {u.fileSize}
                            </span>
                          )}

                          {u.external ? (
                            <a
                              href={u.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-lg border border-line bg-white px-2.5 py-1 text-xs font-semibold text-brand shadow-2xs transition group-hover:bg-brand group-hover:text-white hc:border-white hc:bg-neutral-800 hc:text-white"
                            >
                              <span>View Notice</span>
                              <ArrowUpRight size={13} />
                            </a>
                          ) : (
                            <Link
                              href={u.href}
                              className="inline-flex items-center gap-1 rounded-lg border border-line bg-white px-2.5 py-1 text-xs font-semibold text-brand shadow-2xs transition group-hover:bg-brand group-hover:text-white hc:border-white hc:bg-neutral-800 hc:text-white"
                            >
                              <span>Details</span>
                              <ArrowRight size={13} />
                            </Link>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Notice Board Footer Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-slate-50/80 px-4 py-3 sm:px-6 text-xs text-muted hc:border-white hc:bg-neutral-900 hc:text-neutral-300">
                <div className="flex items-center gap-1.5 text-[11px]">
                  <Calendar size={13} className="text-brand" />
                  <span>Public notices are updated daily in adherence with RTI &amp; MoE guidelines.</span>
                </div>

                <a
                  href="https://www.chd.education.gov.in/en/circulars-orders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand hover:underline hc:text-yellow-300"
                >
                  <span>Archives &bull; पूरा सूचना पुरालेख</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}