import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, Info, PenTool, ShieldCheck, Users2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Duties & Responsibilities | Central Hindi Directorate",
  description:
    "Duties and responsibilities of the officers and employees of the Central Hindi Directorate.",
};

type Theme = {
  topLine: string;
  cardBg: string;
  iconBg: string;
  hoverBorder: string;
  dot: string;
};

type Role = {
  title: string;
  icon: typeof ShieldCheck;
  theme: Theme;
  /** Plain description */
  text?: string;
  /** Lead-in sentence shown above the list */
  intro?: string;
  items?: string[];
  wide?: boolean;
};

const roles: Role[] = [
  {
    title: "Director",
    icon: ShieldCheck,
    theme: {
      topLine: "from-amber-500 to-orange-600",
      cardBg: "from-amber-50/50 via-white to-orange-50/20",
      iconBg: "bg-amber-500 text-white",
      hoverBorder: "hover:border-amber-400 hover:shadow-amber-500/10",
      dot: "bg-amber-500",
    },
    text: "Overall supervision of the Directorate in order to carry out the mandate of the CHD.",
  },
  {
    title: "General Editor",
    icon: PenTool,
    theme: {
      topLine: "from-blue-600 to-indigo-600",
      cardBg: "from-blue-50/50 via-white to-indigo-50/20",
      iconBg: "bg-blue-600 text-white",
      hoverBorder: "hover:border-blue-400 hover:shadow-blue-500/10",
      dot: "bg-blue-600",
    },
    text: "Responsible for editing of publications of the Directorate and other assignments as assigned by the Director.",
  },
  {
    title: "Deputy Directors",
    icon: Users2,
    theme: {
      topLine: "from-emerald-500 to-teal-600",
      cardBg: "from-emerald-50/50 via-white to-teal-50/20",
      iconBg: "bg-emerald-600 text-white",
      hoverBorder: "hover:border-emerald-400 hover:shadow-emerald-500/10",
      dot: "bg-emerald-600",
    },
    text: "To assist the Director in performing the functions mandated by the Government to the Central Hindi Directorate and also to look after the Regional Offices as per his/her postings.",
  },
  {
    title: "Assistant Director, Assistant Research Officer / Evaluators",
    icon: ClipboardList,
    wide: true,
    theme: {
      topLine: "from-purple-600 to-violet-600",
      cardBg: "from-purple-50/50 via-white to-violet-50/20",
      iconBg: "bg-purple-600 text-white",
      hoverBorder: "hover:border-purple-400 hover:shadow-purple-500/10",
      dot: "bg-purple-600",
    },
    intro:
      "To perform all duties which are aimed at achieving the mandate of the Directorate, i.e.",
    items: [
      "Publication of Dictionaries (Hindi-Hindi, Hindi-Regional Languages, Hindi-Foreign Language), organizing meetings of experts for finalizing dictionaries.",
      "Publication of Journals.",
      "Extension Programmes of various kinds including seminars, students study tours etc.",
      "Evaluating of response sheets received from students of various courses of Correspondence Courses.",
      "To participate in Personal Contact Programmes organized at various centres for the benefit of students.",
      "Preparation of study material in printed and electronic form, CD etc.",
      "To participate in all promotional activities for the development of Hindi.",
    ],
  },
];

export default function DutiesPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO HEADER                                            */}
      {/* ========================================================= */}
      <section
        aria-labelledby="duties-page-title"
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
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-dark hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li>
                <Link href="/about" className="hover:text-brand-dark hover:underline">
                  About Directorate
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">
                Duties &amp; Responsibilities
              </li>
            </ol>
          </nav>

          <h1
            id="duties-page-title"
            className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white"
          >
            Duties &amp; Responsibilities
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted hc:text-neutral-300">
            Duties and responsibilities of its officers and employees
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ROLES                                                  */}
      {/* ========================================================= */}
      <section
        aria-label="Duties and responsibilities"
        className="bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-12 sm:py-16 hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ul className="grid gap-5 lg:grid-cols-3">
            {roles.map((r) => {
              const Icon = r.icon;
              return (
                <li key={r.title} className={r.wide ? "lg:col-span-3" : ""}>
                  <article
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${r.theme.cardBg} p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 ${r.theme.hoverBorder} hc:border-white hc:bg-neutral-950`}
                  >
                    <span
                      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${r.theme.topLine}`}
                    />

                    <div className="flex items-center gap-3">
                      <span
                        className={`grid size-11 shrink-0 place-items-center rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-105 ${r.theme.iconBg} hc:bg-neutral-800 hc:text-white`}
                      >
                        <Icon size={20} strokeWidth={2} />
                      </span>
                      <h2 className="text-base font-bold leading-snug text-ink sm:text-lg hc:text-white">
                        {r.title}
                      </h2>
                    </div>

                    <div className="mt-4 border-t border-line/60 pt-4 hc:border-white/20">
                      {r.text && (
                        <p className="text-sm leading-relaxed text-slate-700 hc:text-neutral-300">
                          {r.text}
                        </p>
                      )}

                      {r.intro && (
                        <p className="text-sm font-medium leading-relaxed text-slate-700 hc:text-neutral-300">
                          {r.intro}
                        </p>
                      )}

                      {r.items && (
                        <ul className="mt-3 grid gap-x-8 gap-y-2.5 text-sm leading-relaxed text-slate-700 md:grid-cols-2 hc:text-neutral-300">
                          {r.items.map((it) => (
                            <li key={it} className="flex items-start gap-2.5">
                              <span
                                aria-hidden="true"
                                className={`mt-2 size-1.5 shrink-0 rounded-full ${r.theme.dot} hc:bg-white`}
                              />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>

          {/* Closing note */}
          <aside
            aria-label="Note"
            className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50/50 p-5 shadow-2xs hc:border-white hc:bg-neutral-900"
          >
            <Info size={18} className="mt-0.5 shrink-0 text-amber-600 hc:text-white" />
            <p className="text-sm leading-relaxed text-amber-950 hc:text-white">
              Besides the above, all the officers of the Directorate can perform any duties,
              academic and administrative, or both, that are assigned in the interest of the
              Directorate and the public.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}