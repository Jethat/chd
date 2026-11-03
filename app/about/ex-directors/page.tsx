import type { Metadata } from "next";
import Link from "next/link";
import DirectorsTable from "@/components/DirectorsTable";
import { directors } from "./data";

export const metadata: Metadata = {
  title: "Ex-Directors | Central Hindi Directorate",
  description: "Directors who have headed the Central Hindi Directorate since 1961, with their tenures.",
};

export default function ExDirectorsPage() {
  const current = directors.find((d) => d.to === undefined);

  return (
    <>
      {/* HERO HEADER */}
      <section
        aria-labelledby="directors-title"
        className="relative overflow-hidden border-b border-line bg-gradient-to-b from-brand-light/60 via-white to-amber-50/20 py-12 sm:py-16 hc:border-white hc:bg-black"
      >
        <span aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-brand/5 blur-3xl hc:hidden" />
        <span aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 size-72 rounded-full bg-amber-500/5 blur-3xl hc:hidden" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted hc:text-white">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-dark hover:underline">Home</Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li>
                <Link href="/about" className="hover:text-brand-dark hover:underline">About Us</Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">Ex-Directors</li>
            </ol>
          </nav>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 id="directors-title" className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white">
                Ex-Directors
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-muted hc:text-neutral-300">
                Directors who have headed the Central Hindi Directorate since 1961.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-lg border border-line bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-xs hc:border-white hc:bg-neutral-900 hc:text-white">
                Since 1961
              </span>
              <span className="rounded-lg bg-brand px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hc:bg-white hc:text-black">
                {directors.length} Directors
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STAT PILLS + TABLE */}
      <section aria-label="List of directors" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-center hc:border-white hc:bg-neutral-900">
              <span className="block text-lg font-bold text-amber-900 hc:text-white">{directors.length}</span>
              <span className="text-[11px] font-medium text-amber-800 hc:text-neutral-300">Directors so far</span>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3 text-center hc:border-white hc:bg-neutral-900">
              <span className="block text-lg font-bold text-blue-900 hc:text-white">{directors[0].from}</span>
              <span className="text-[11px] font-medium text-blue-800 hc:text-neutral-300">First tenure began</span>
            </div>
            {current && (
              <div className="col-span-2 rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 text-center sm:col-span-1 hc:border-white hc:bg-neutral-900">
                <span className="block text-sm font-bold text-emerald-900 hc:text-white">{current.name}</span>
                <span className="text-[11px] font-medium text-emerald-800 hc:text-neutral-300">Current Director since {current.from}</span>
              </div>
            )}
          </div>

          <DirectorsTable />
        </div>
      </section>
    </>
  );
}