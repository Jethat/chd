import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  BookText,
  Disc,
  Download,
  FileText,
  GraduationCap,
  IndianRupee,
  MessagesSquare,
  MonitorPlay,
  Phone,
  ShoppingBag,
  Target,
  UserCheck,
} from "lucide-react";
import {
  avIntro,
  avProgrammes,
  cdPrice,
  coursesOffered,
  downloads,
  eligibility,
  fees,
  guideCds,
  guideLists,
  guidesIntro,
  guidesNote,
  hindiBooks,
  hindiGuides,
  languageBooks,
  languageGuides,
  medium,
  objective,
  payment,
  purchase,
  salesAddress,
  salesPhones,
  selfTaughtIntro,
  sessions,
  teaching,
  type Book,
  type Guide,
} from "./data";

export const metadata: Metadata = {
  title: "Correspondence Courses | Central Hindi Directorate",
  description:
    "Hindi correspondence courses of the Central Hindi Directorate: eligibility, fees, study material, audio-visual programmes, conversational guides and self-taught books.",
};

/* ---------- colour themes (kept literal so Tailwind can see them) ---------- */
type Theme = { top: string; bg: string; icon: string; badge: string; dot: string; hover: string; pill: string };

const amber: Theme = { top: "from-amber-500 to-orange-600", bg: "from-amber-50/50 via-white to-orange-50/20", icon: "bg-amber-500 text-white", badge: "border-amber-200 bg-amber-100 text-amber-900", dot: "bg-amber-500", hover: "hover:border-amber-300", pill: "border-amber-200 bg-amber-50/70 text-amber-900 hover:border-amber-400" };
const blue: Theme = { top: "from-blue-600 to-indigo-600", bg: "from-blue-50/50 via-white to-indigo-50/20", icon: "bg-blue-600 text-white", badge: "border-blue-200 bg-blue-100 text-blue-900", dot: "bg-blue-600", hover: "hover:border-blue-300", pill: "border-blue-200 bg-blue-50/70 text-blue-900 hover:border-blue-400" };
const emerald: Theme = { top: "from-emerald-500 to-teal-600", bg: "from-emerald-50/50 via-white to-teal-50/20", icon: "bg-emerald-600 text-white", badge: "border-emerald-200 bg-emerald-100 text-emerald-900", dot: "bg-emerald-600", hover: "hover:border-emerald-300", pill: "border-emerald-200 bg-emerald-50/70 text-emerald-900 hover:border-emerald-400" };
const purple: Theme = { top: "from-purple-600 to-violet-600", bg: "from-purple-50/50 via-white to-violet-50/20", icon: "bg-purple-600 text-white", badge: "border-purple-200 bg-purple-100 text-purple-900", dot: "bg-purple-600", hover: "hover:border-purple-300", pill: "border-purple-200 bg-purple-50/70 text-purple-900 hover:border-purple-400" };
const rose: Theme = { top: "from-rose-500 to-pink-600", bg: "from-rose-50/50 via-white to-pink-50/20", icon: "bg-rose-600 text-white", badge: "border-rose-200 bg-rose-100 text-rose-900", dot: "bg-rose-600", hover: "hover:border-rose-300", pill: "border-rose-200 bg-rose-50/70 text-rose-900 hover:border-rose-400" };
const teal: Theme = { top: "from-teal-600 to-cyan-600", bg: "from-teal-50/50 via-white to-cyan-50/20", icon: "bg-teal-600 text-white", badge: "border-teal-200 bg-teal-100 text-teal-900", dot: "bg-teal-600", hover: "hover:border-teal-300", pill: "border-teal-200 bg-teal-50/70 text-teal-900 hover:border-teal-400" };
const indigo: Theme = { top: "from-indigo-600 to-purple-600", bg: "from-indigo-50/50 via-white to-purple-50/20", icon: "bg-indigo-600 text-white", badge: "border-indigo-200 bg-indigo-100 text-indigo-900", dot: "bg-indigo-600", hover: "hover:border-indigo-300", pill: "border-indigo-200 bg-indigo-50/70 text-indigo-900 hover:border-indigo-400" };
const orange: Theme = { top: "from-orange-500 to-amber-600", bg: "from-orange-50/50 via-white to-amber-50/20", icon: "bg-orange-600 text-white", badge: "border-orange-200 bg-orange-100 text-orange-900", dot: "bg-orange-600", hover: "hover:border-orange-300", pill: "border-orange-200 bg-orange-50/70 text-orange-900 hover:border-orange-400" };

/* ---------- small building blocks ---------- */
const body = "text-sm leading-relaxed text-slate-700 sm:text-[15px] hc:text-neutral-300";
const sub = "mb-3 text-sm font-bold text-ink sm:text-base hc:text-white";
const inner = "rounded-xl border border-line bg-white p-4 shadow-2xs hc:border-white hc:bg-black";

function Panel({ id, title, subtitle, badge, theme, Icon, children }: { id: string; title: string; subtitle: string; badge?: string; theme: Theme; Icon: typeof Target; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${theme.bg} p-5 shadow-xs sm:p-8 hc:border-white hc:bg-neutral-950`}>
      <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${theme.top}`} />
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`grid size-11 shrink-0 place-items-center rounded-xl shadow-xs ${theme.icon} hc:bg-neutral-800 hc:text-white`}>
            <Icon size={20} strokeWidth={2} />
          </span>
          <div>
            <h2 id={`${id}-title`} className="text-lg font-bold leading-snug text-ink sm:text-xl hc:text-white">{title}</h2>
            <p className="text-xs text-muted hc:text-neutral-300">{subtitle}</p>
          </div>
        </div>
        {badge && <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${theme.badge} hc:bg-neutral-800 hc:text-white`}>{badge}</span>}
      </div>
      {children}
    </section>
  );
}

function Paras({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((t) => (
        <p key={t} className={`text-justify ${body}`}>{t}</p>
      ))}
    </div>
  );
}

function Bullets({ items, dot }: { items: string[]; dot: string }) {
  return (
    <ul className={`space-y-2 ${body}`}>
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2.5">
          <span aria-hidden="true" className={`mt-2 size-1.5 shrink-0 rounded-full ${dot} hc:bg-white`} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function GuideCard({ g, theme }: { g: Guide; theme: Theme }) {
  return (
    <article className={`${inner} flex flex-col transition ${theme.hover}`}>
      <h4 className="text-sm font-bold text-ink hc:text-white">{g.name}</h4>
      <p className={`mt-1 text-xs ${body}`}>
        {g.cols.length} columns: two sections, sentences on different topics and a list of words in daily use.
      </p>
      <ol className={`mt-2 list-decimal space-y-1 pl-5 text-xs leading-relaxed text-slate-700 hc:text-neutral-300`}>
        {g.cols.map((c) => <li key={c}>{c}</li>)}
      </ol>
      {(g.meta || g.status) && (
        <p className={`mt-auto pt-3 text-[11px] font-semibold ${g.status ? "text-amber-800 hc:text-yellow-300" : "text-muted hc:text-neutral-300"}`}>{g.meta ?? g.status}</p>
      )}
    </article>
  );
}

function BookCard({ b, theme }: { b: Book; theme: Theme }) {
  return (
    <article className={`${inner} flex flex-col transition ${theme.hover}`}>
      <h4 className="text-sm font-bold text-ink hc:text-white">{b.name}</h4>
      {b.paras && <div className="mt-2 space-y-2">{b.paras.map((p) => <p key={p} className="text-xs leading-relaxed text-slate-700 hc:text-neutral-300">{p}</p>)}</div>}
      {(b.meta || b.status) && (
        <p className={`mt-auto pt-3 text-[11px] font-semibold ${b.status ? "text-amber-800 hc:text-yellow-300" : "text-muted hc:text-neutral-300"}`}>{b.meta ?? b.status}</p>
      )}
    </article>
  );
}

const th = "px-4 py-3 text-left font-semibold";
const td = "px-4 py-3 align-top";

const nav = [
  ["overview", "Overview", amber],
  ["admission", "Admission", blue],
  ["fees", "Fees", emerald],
  ["study", "Study & exams", purple],
  ["programmes", "Video programmes", rose],
  ["guides", "Conversational guides", teal],
  ["books", "Self-taught books", indigo],
  ["purchase", "Purchase", amber],
] as const;

export default function CorrespondenceCoursesPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO HEADER                                            */}
      {/* ========================================================= */}
      <section aria-labelledby="cc-title" className="relative overflow-hidden border-b border-line bg-gradient-to-b from-brand-light/60 via-white to-amber-50/20 py-12 sm:py-16 hc:border-white hc:bg-black">
        <span aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-brand/5 blur-3xl hc:hidden" />
        <span aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 size-72 rounded-full bg-amber-500/5 blur-3xl hc:hidden" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted hc:text-white">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-brand-dark hover:underline">Home</Link></li>
              <li aria-hidden="true">&bull;</li>
              <li><Link href="/schemes" className="hover:text-brand-dark hover:underline">Schemes</Link></li>
              <li aria-hidden="true">&bull;</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">Correspondence Courses</li>
            </ol>
          </nav>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h1 id="cc-title" className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white">Correspondence Courses</h1>
            <div className="flex items-center gap-2">
              <span className="rounded-lg border border-line bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-xs hc:border-white hc:bg-neutral-900 hc:text-white">Since 1968</span>
              <span className="rounded-lg bg-brand px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hc:bg-white hc:text-black">5.10 lacs+ students</span>
            </div>
          </div>

          <ul className="mt-8 flex gap-2 overflow-x-auto pb-1">
            {nav.map(([id, label, t]) => (
              <li key={id} className="shrink-0">
                <a href={`#${id}`} className={`block rounded-lg border px-3.5 py-1.5 text-xs font-bold shadow-xs transition ${t.pill} hc:border-white hc:bg-neutral-900 hc:text-white`}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-12 sm:py-16 hc:bg-black">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6">
          {/* Overview */}
          <Panel id="overview" title="Objective and courses offered" subtitle="About the Department of Correspondence Courses" theme={amber} Icon={Target}>
            <h3 className={sub}>Objective</h3>
            <Paras items={[objective]} />
            <h3 className={`${sub} mt-6`}>Courses offered</h3>
            <Paras items={coursesOffered} />
            <h3 className={`${sub} mt-6`}>Medium</h3>
            <Paras items={[medium]} />
          </Panel>

          {/* Admission */}
          <Panel id="admission" title="Session and eligibility for admission" subtitle="When the courses begin and who can join" theme={blue} Icon={UserCheck}>
            <h3 className={sub}>Session</h3>
            <ul className="grid gap-3 md:grid-cols-3">
              {sessions.map((s) => (
                <li key={s.courses} className={`${inner} ${blue.hover} transition`}>
                  <p className="text-sm font-bold text-ink hc:text-white">{s.courses}</p>
                  <p className={`mt-1 ${body}`}>{s.text}</p>
                </li>
              ))}
            </ul>
            <h3 className={`${sub} mt-8`}>Eligibility for admission</h3>
            <ol className="grid gap-3 md:grid-cols-2">
              {eligibility.map((e, i) => (
                <li key={e.course} className={`${inner} ${blue.hover} transition`}>
                  <p className="flex items-center gap-2 text-sm font-bold text-ink hc:text-white">
                    <span aria-hidden="true" className="grid size-6 place-items-center rounded-md bg-blue-600 text-xs text-white hc:bg-white hc:text-black">{String.fromCharCode(97 + i)}</span>
                    {e.course}
                  </p>
                  <div className="mt-2">
                    {e.text && <p className={body}>{e.text}</p>}
                    {e.points && <Bullets items={e.points} dot={blue.dot} />}
                  </div>
                </li>
              ))}
            </ol>
          </Panel>

          {/* Fees */}
          <Panel id="fees" title="Fee and mode of payment" subtitle="Per student, per session" theme={emerald} Icon={IndianRupee}>
            <div className="overflow-x-auto rounded-xl border border-line bg-white hc:border-white hc:bg-black">
              <table className="w-full min-w-[640px] text-sm">
                <caption className="sr-only">Course fees for Indian and foreign students</caption>
                <thead>
                  <tr className="border-b-2 border-emerald-600 text-emerald-900 hc:border-white hc:text-white">
                    <th scope="col" className={th}>Sl. No.</th>
                    <th scope="col" className={th}>Course</th>
                    <th scope="col" className={th}>For Indian students</th>
                    <th scope="col" className={th}>For foreign students</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line text-ink hc:divide-white hc:text-white">
                  {fees.map((f, i) => (
                    <tr key={f.course}>
                      <td className={td}>{String.fromCharCode(97 + i)}</td>
                      <th scope="row" className={`${td} text-left font-medium`}>{f.course}</th>
                      <td className={td}>{f.indian.map((t) => <p key={t} className="mb-1 last:mb-0">{t}</p>)}</td>
                      <td className={td}>{f.foreign.map((t) => <p key={t}>{t}</p>)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className={`${sub} mt-8`}>Mode of payment</h3>
            <Paras items={payment} />
          </Panel>

          {/* Study */}
          <Panel id="study" title="Coaching, contact programme and examination" subtitle="How the courses are taught and assessed" theme={purple} Icon={GraduationCap}>
            <ul className="grid gap-4 md:grid-cols-2">
              {teaching.map((t) => (
                <li key={t.title} className={`${inner} ${purple.hover} transition`}>
                  <h3 className="mb-2 text-sm font-bold text-ink sm:text-base hc:text-white">{t.title}</h3>
                  <div className="space-y-2">{t.text.map((p) => <p key={p} className={body}>{p}</p>)}</div>
                </li>
              ))}
            </ul>
          </Panel>

          {/* Audio-visual programmes */}
          <Panel id="programmes" title="Supplementary educational material: audio-visual programmes" subtitle="CDs / DVDs in video format" badge="CD/DVD 1 to 91" theme={rose} Icon={MonitorPlay}>
            <Paras items={avIntro} className="mb-6" />
            <h3 className={sub}>Description of the CDs / DVDs</h3>
            <ul className="grid gap-3 md:grid-cols-2">
              {avProgrammes.map((a) => (
                <li key={a.no} className={`${inner} ${rose.hover} flex flex-col transition`}>
                  <p className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full border px-2 py-0.5 text-[11px] font-bold ${rose.badge} hc:bg-neutral-800 hc:text-white`}>CD / DVD {a.no}</span>
                    {a.title && <span className="text-sm font-bold text-ink hc:text-white">{a.title}</span>}
                  </p>
                  {a.parts && (
                    <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-xs leading-relaxed text-slate-700 hc:text-neutral-300">
                      {a.parts.map((p) => <li key={p}>{p}</li>)}
                    </ol>
                  )}
                  {a.desc && <div className="mt-2 space-y-2">{a.desc.map((p) => <p key={p} className="text-xs leading-relaxed text-slate-700 hc:text-neutral-300">{p}</p>)}</div>}
                </li>
              ))}
            </ul>
          </Panel>

          {/* Conversational guides */}
          <Panel id="guides" title="Conversational guides" subtitle="Bilingual guides in regional languages and Hindi" badge={`${languageGuides.length + hindiGuides.length} guides`} theme={teal} Icon={MessagesSquare}>
            <Paras items={guidesIntro} className="mb-6" />
            <h3 className={sub}>Language based conversational guides</h3>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {languageGuides.map((g) => <GuideCard key={g.name} g={g} theme={teal} />)}
            </div>
            <h3 className={`${sub} mt-8`}>Hindi based conversational guides</h3>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {hindiGuides.map((g) => <GuideCard key={g.name} g={g} theme={teal} />)}
            </div>
            <p className={`mt-4 ${body}`}>{guidesNote}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className={sub}>Hindi based conversational guides</h3>
                <ul className="flex flex-wrap gap-2">
                  {guideLists.hindiBased.map((t) => <li key={t} className={`rounded-full border px-3 py-1 text-xs font-medium ${teal.badge} hc:border-white hc:bg-black hc:text-white`}>{t}</li>)}
                </ul>
              </div>
              <div>
                <h3 className={sub}>Language based conversational guides</h3>
                <ul className="flex flex-wrap gap-2">
                  {guideLists.languageBased.map((t) => <li key={t} className={`rounded-full border px-3 py-1 text-xs font-medium ${teal.badge} hc:border-white hc:bg-black hc:text-white`}>{t}</li>)}
                </ul>
              </div>
            </div>
          </Panel>

          {/* Self taught books */}
          <Panel id="books" title="Self-taught books (Swayam Shikshak)" subtitle="Supplementary teaching material for self study" theme={indigo} Icon={BookText}>
            <Paras items={selfTaughtIntro} className="mb-6" />
            <h3 className={sub}>Language based Swayam Shikshak</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {languageBooks.map((b) => <BookCard key={b.name} b={b} theme={indigo} />)}
            </div>
            <h3 className={`${sub} mt-8`}>Hindi-based Swayam Shikshak</h3>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {hindiBooks.map((b) => <BookCard key={b.name} b={b} theme={indigo} />)}
            </div>
          </Panel>

          {/* Audio visual material table */}
          <Panel id="cds" title="Audio visual material" subtitle="CDs based on conversational guides" badge={`${guideCds.length} CDs`} theme={orange} Icon={Disc}>
            <div className="overflow-x-auto rounded-xl border border-line bg-white hc:border-white hc:bg-black">
              <table className="w-full min-w-[460px] text-sm">
                <caption className="sr-only">CDs based on conversational guides</caption>
                <thead>
                  <tr className="border-b-2 border-orange-600 text-orange-900 hc:border-white hc:text-white">
                    <th scope="col" className={th}>Sr. No.</th>
                    <th scope="col" className={th}>CDs based on conversational guides</th>
                    <th scope="col" className={th}>Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line text-ink hc:divide-white hc:text-white">
                  {guideCds.map(([name, year], i) => (
                    <tr key={name + i}>
                      <td className={td}>{i + 1}</td>
                      <th scope="row" className={`${td} text-left font-medium`}>{name}</th>
                      <td className={`${td} whitespace-nowrap`}>{year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm font-semibold text-orange-900 hc:text-yellow-300">Price: {cdPrice}</p>
          </Panel>

          {/* Purchase */}
          <Panel id="purchase" title="How to purchase our e-products" subtitle="Sales counter and demand draft" theme={amber} Icon={ShoppingBag}>
            <Paras items={[purchase]} />
            <address className={`${inner} mt-4 max-w-md not-italic`}>
              {salesAddress.map((l, i) => (
                <span key={l} className={`block text-sm ${i === 0 ? "font-bold text-ink hc:text-white" : "text-slate-700 hc:text-neutral-300"}`}>{l}</span>
              ))}
              <span className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink hc:text-white">
                <Phone size={15} aria-hidden="true" className="text-amber-600 hc:text-white" />
                {salesPhones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/-/g, "")}`} className="font-medium hover:text-brand-dark hover:underline">{p}</a>
                ))}
              </span>
            </address>
          </Panel>

          {/* Downloads */}
          <Panel id="downloads" title="Downloads" subtitle="Forms, booklet and admission notice" theme={blue} Icon={Download}>
            <ul className="grid gap-3 md:grid-cols-3">
              {downloads.map((d) => (
                <li key={d.href}>
                  <a href={d.href} target="_blank" rel="noopener noreferrer" className={`group flex h-full items-start gap-3 ${inner} ${blue.hover} transition hover:bg-blue-50/60`}>
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-blue-100 text-blue-700 hc:bg-neutral-800 hc:text-white"><FileText size={18} /></span>
                    <span className="text-sm">
                      <span className="block font-semibold leading-snug text-ink group-hover:text-brand-dark hc:text-white">
                        {d.title}
                        <span className="sr-only"> (PDF, opens in a new tab)</span>
                      </span>
                      <span className="mt-0.5 block text-xs text-muted hc:text-neutral-300">PDF &bull; {d.size}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </>
  );
}