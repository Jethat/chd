import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookMarked,
  BookOpen,
  Building2,
  Compass,
  Gift,
  GraduationCap,
  HandCoins,
  Landmark,
  Laptop,
  Library,
  Medal,
  Newspaper,
} from "lucide-react";
import { navItems } from "@/data/nav";

export const metadata: Metadata = {
  title: "Schemes | Central Hindi Directorate",
  description:
    "Schemes and programmes of the Central Hindi Directorate: correspondence courses, grants, Vistar, Kosh, free distribution, publications, awards and more.",
};

/* ---------- colour themes (kept literal so Tailwind can see them) ---------- */
type Theme = { top: string; bg: string; icon: string; hover: string; link: string };

const themes: Theme[] = [
  { top: "from-amber-500 to-orange-600", bg: "from-amber-50/50 via-white to-orange-50/20", icon: "bg-amber-500 text-white", hover: "hover:border-amber-400 hover:shadow-amber-500/10", link: "text-amber-800" },
  { top: "from-blue-600 to-indigo-600", bg: "from-blue-50/50 via-white to-indigo-50/20", icon: "bg-blue-600 text-white", hover: "hover:border-blue-400 hover:shadow-blue-500/10", link: "text-blue-800" },
  { top: "from-emerald-500 to-teal-600", bg: "from-emerald-50/50 via-white to-teal-50/20", icon: "bg-emerald-600 text-white", hover: "hover:border-emerald-400 hover:shadow-emerald-500/10", link: "text-emerald-800" },
  { top: "from-purple-600 to-violet-600", bg: "from-purple-50/50 via-white to-violet-50/20", icon: "bg-purple-600 text-white", hover: "hover:border-purple-400 hover:shadow-purple-500/10", link: "text-purple-800" },
  { top: "from-rose-500 to-pink-600", bg: "from-rose-50/50 via-white to-pink-50/20", icon: "bg-rose-600 text-white", hover: "hover:border-rose-400 hover:shadow-rose-500/10", link: "text-rose-800" },
  { top: "from-teal-600 to-cyan-600", bg: "from-teal-50/50 via-white to-cyan-50/20", icon: "bg-teal-600 text-white", hover: "hover:border-teal-400 hover:shadow-teal-500/10", link: "text-teal-800" },
  { top: "from-indigo-600 to-purple-600", bg: "from-indigo-50/50 via-white to-purple-50/20", icon: "bg-indigo-600 text-white", hover: "hover:border-indigo-400 hover:shadow-indigo-500/10", link: "text-indigo-800" },
  { top: "from-orange-500 to-amber-600", bg: "from-orange-50/50 via-white to-amber-50/20", icon: "bg-orange-600 text-white", hover: "hover:border-orange-400 hover:shadow-orange-500/10", link: "text-orange-800" },
];

/** Icons by scheme name. Unknown names fall back to BookOpen. */
const icons: Record<string, typeof BookOpen> = {
  "Correspondence Courses": GraduationCap,
  Grants: HandCoins,
  Vistar: Compass,
  Kosh: BookMarked,
  "Free Distribution, Exhibition and Sales": BookOpen,
  "Bhasha Varsiki & Sahityamala": Newspaper,
  "Coordination, RTI & Rajbhasha": Landmark,
  Administration: Building2,
  "Puraskar Yojna": Award,
  Library: Library,
  "E-Governance": Laptop,
  "Free Distribution of Hindi Books / Magazines": Gift,
  "Shiksha Puraskar Yojana": Medal,
};

/** The schemes come from the "Schemes" menu in data/nav, so the menu and this page stay in sync. */
const schemes = (navItems.find((n) => n.label === "Schemes")?.children ?? []).map((c) => ({
  title: c.label,
  href: c.href,
  icon: icons[c.label] ?? BookOpen,
}));

export default function SchemesPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO HEADER                                            */}
      {/* ========================================================= */}
      <section
        aria-labelledby="schemes-title"
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
                Schemes
              </li>
            </ol>
          </nav>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h1 id="schemes-title" className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white">
              Schemes
            </h1>
            <span className="rounded-lg bg-brand px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hc:bg-white hc:text-black">
              {schemes.length} schemes
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SCHEMES                                                */}
      {/* ========================================================= */}
      <section
        aria-label="List of schemes"
        className="bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-12 sm:py-16 hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {schemes.map((s, i) => {
              const t = themes[i % themes.length];
              const Icon = s.icon;
              const card = `group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${t.bg} p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${t.hover} hc:border-white hc:bg-neutral-950`;

              const content = (
                <>
                  <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${t.top}`} />
                  <span className={`grid size-11 place-items-center rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-105 ${t.icon} hc:bg-neutral-800 hc:text-white`}>
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <span className="mb-4 mt-4 block text-base font-bold leading-snug text-ink hc:text-white">
                    {s.title}
                                      </span>
                  <span className={`mt-auto inline-flex items-center gap-1 border-t border-line/60 pt-3 text-xs font-semibold ${t.link} hc:border-white/20 hc:text-yellow-300`}>
                    View scheme
                    <ArrowRight size={13} aria-hidden="true" className="transition-transform group-hover:translate-x-[3px]" />
                  </span>
                </>
              );

              return (
                <li key={s.title}>
                  <Link href={s.href} className={card}>
                    {content}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}