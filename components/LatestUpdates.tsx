"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import { latestUpdates, type Update } from "@/data/updates";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });

const row =
  "group/row flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-brand-light/60 sm:flex-row sm:items-center sm:gap-6";

function Row({ u, hidden }: { u: Update; hidden?: boolean }) {
  const tab = hidden ? -1 : undefined; // the looped duplicate is skipped by keyboard users
  const inner = (
    <>
      <time dateTime={u.date} className="w-28 shrink-0 text-xs font-medium tracking-wide text-muted hc:text-white">
        {fmt(u.date)}
      </time>
      <span className="flex-1 text-[0.95rem] leading-snug text-ink transition-colors group-hover/row:text-brand-dark hc:text-white">
        {u.title}
      </span>
      <ArrowUpRight
        size={16}
        aria-hidden="true"
        className="hidden shrink-0 text-muted transition group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 group-hover/row:text-brand sm:block"
      />
    </>
  );
  return u.external ? (
    <a href={u.href} target="_blank" rel="noopener noreferrer" tabIndex={tab} className={row}>
      {inner}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <Link href={u.href} tabIndex={tab} className={row}>
      {inner}
    </Link>
  );
}

export default function LatestUpdates({ limit = 8 }: { limit?: number }) {
  const items = [...latestUpdates].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
  const [paused, setPaused] = useState(false);
  const scroll = items.length >= 4; // too few items: show a plain static list

  const list = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="divide-y divide-line border-b border-line hc:divide-white hc:border-white"
    >
      {items.map((u) => (
        <li key={u.title}>
          <Row u={u} hidden={hidden} />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-labelledby="updates-title" className="border-t border-line bg-brand-light/40 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2
                id="updates-title"
                className="text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-tight text-brand-dark after:mt-3 after:block after:h-1 after:w-12 after:rounded after:bg-brand hc:text-white hc:after:bg-white"
              >
                Latest Updates
              </h2>
              {scroll && <p className="mt-2 text-xs text-muted hc:text-white">Scrolls automatically. Hover or focus to pause.</p>}
            </div>

            <div className="mb-1 flex items-center gap-4">
              {scroll && (
                <button
                  type="button"
                  onClick={() => setPaused(!paused)}
                  aria-pressed={paused}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-brand-dark transition-colors hover:border-brand hover:text-brand motion-reduce:hidden hc:border-white hc:bg-black hc:text-white"
                >
                  {paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
                  {paused ? "Play" : "Pause"}
                  <span className="sr-only"> updates scrolling</span>
                </button>
              )}
              <Link
                href="/updates"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark hover:underline hover:underline-offset-4"
              >
                View all <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="group/marquee overflow-hidden rounded-xl border border-line bg-white hc:border-white hc:bg-black">
            <div
              className={
                scroll
                  ? "h-72 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] motion-reduce:overflow-y-auto motion-reduce:[mask-image:none]"
                  : ""
              }
            >
              <div
                style={{ animationDuration: `${items.length * 5}s` }}
                className={
                  scroll
                    ? `animate-marquee-up group-focus-within/marquee:[animation-play-state:paused] group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none ${
                        paused ? "[animation-play-state:paused]" : ""
                      }`
                    : ""
                }
              >
                {list(false)}
                {scroll && <div className="motion-reduce:hidden">{list(true)}</div>}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}