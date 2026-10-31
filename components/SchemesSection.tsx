import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, FileText, Link2, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { downloads, importantLinks, schemes, type LinkItem } from "@/data/schemes";

const panel = "overflow-hidden rounded-2xl border border-line bg-white shadow-sm hc:border-white hc:bg-black";
const row =
  "group/row relative flex items-start gap-3 px-5 py-3.5 text-sm leading-snug text-ink transition-colors hover:bg-brand-light/60 hc:text-white " +
  "before:absolute before:inset-y-2.5 before:left-0 before:w-[3px] before:scale-y-0 before:rounded-r before:bg-brand before:transition-transform " +
  "hover:before:scale-y-100 focus-visible:before:scale-y-100";

function PanelHead({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-line px-5 py-3.5 hc:border-white">
      <span className="grid size-7 place-items-center rounded-full bg-brand-light text-brand hc:bg-black hc:text-white"><Icon size={14} aria-hidden="true" /></span>
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark hc:text-white">{title}</h3>
    </div>
  );
}

function LinkRow({ item, icon: Icon, trailing }: { item: LinkItem; icon?: LucideIcon; trailing: LucideIcon }) {
  const Trail = trailing;
  const inner = (
    <>
      {Icon && <Icon size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand/60 transition-colors group-hover/row:text-brand" />}
      <span className="line-clamp-2 flex-1" title={item.title}>{item.title}</span>
      <Trail size={14} aria-hidden="true" className="mt-1 shrink-0 text-brand opacity-0 transition group-hover/row:opacity-100 group-focus-visible/row:opacity-100" />
    </>
  );
  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={row}>{inner}<span className="sr-only"> (opens in a new tab)</span></a>
  ) : (
    <Link href={item.href} className={row}>{inner}</Link>
  );
}

export default function SchemesSection() {
  return (
    <section aria-labelledby="schemes-title" className="relative overflow-hidden bg-linear-to-b from-white to-brand-light/60 py-14 lg:py-20">
      <span aria-hidden="true" className="pointer-events-none absolute -right-28 -top-28 size-96 rounded-full bg-brand/5 blur-3xl" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-brand/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-4 lg:grid-cols-[minmax(0,1fr)_340px]">
        {/* Schemes */}
        <div>
          <Reveal>
            <h2 id="schemes-title" className="mb-7 text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-tight text-brand-dark after:mt-3 after:block after:h-1 after:w-12 after:rounded after:bg-brand hc:text-white hc:after:bg-white">
              Schemes
            </h2>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
            {schemes.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={(i % 3) * 90 + Math.floor(i / 3) * 90} className="h-full">
                  <Link
                    href={s.href}
                    className="group/card relative flex h-full flex-col items-center gap-4 rounded-2xl border border-line bg-white px-5 pb-6 pt-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand-dark/10 hc:border-white hc:bg-black"
                  >
                    <span aria-hidden="true" className="absolute right-4 top-3 text-xs font-semibold tabular-nums text-line transition-colors group-hover/card:text-brand/40 hc:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid size-16 place-items-center rounded-full bg-brand-light text-brand ring-8 ring-brand-light/50 transition duration-300 group-hover/card:bg-brand group-hover/card:text-white group-hover/card:ring-brand/10 hc:bg-black hc:text-white">
                      <s.icon size={26} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="text-[0.95rem] font-semibold leading-snug text-ink hc:text-white">{s.title}</span>
                    <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-brand transition duration-300 sm:translate-y-1 sm:opacity-0 sm:group-hover/card:translate-y-0 sm:group-hover/card:opacity-100 sm:group-focus-visible/card:translate-y-0 sm:group-focus-visible/card:opacity-100">
                      Explore <ArrowRight size={13} aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-7 flex justify-end">
            <Link href="/schemes" className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white px-5 py-2 text-sm font-medium text-brand transition hover:border-brand hover:bg-brand hover:text-white hc:border-white hc:bg-black hc:text-white">
              View More <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        {/* Important Links + Downloads */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          <Reveal delay={120}>
            <div className={panel}>
              <PanelHead icon={Link2} title="Important Links" />
              <ul className="divide-y divide-line hc:divide-white">
                {importantLinks.map((l) => <li key={l.title}><LinkRow item={l} trailing={ArrowUpRight} /></li>)}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className={panel}>
              <PanelHead icon={Download} title="Downloads" />
              <ul className="divide-y divide-line hc:divide-white">
                {downloads.map((d) => <li key={d.title}><LinkRow item={d} icon={FileText} trailing={Download} /></li>)}
              </ul>
              <div className="border-t border-line px-5 py-3 text-right hc:border-white">
                <Link href="/downloads" className="inline-flex items-center gap-1 text-xs font-medium text-brand transition-colors hover:text-brand-dark hover:underline hover:underline-offset-4">
                  View More <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}