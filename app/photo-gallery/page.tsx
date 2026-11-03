import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photo Gallery | Central Hindi Directorate",
  description: "Photographs from the events and activities of the Central Hindi Directorate.",
};

type Photo = { src: string; alt: string; caption: string };

/**
 * Add or edit photos here. Keep each caption to one line.
 * Each card picks its colour from the list below in turn.
 */
const photos: Photo[] = [
  {
    src: "/images/1.png",
    alt: "National seminar on Hindi",
    caption: "National seminar on the development and propagation of Hindi.",
  },
  {
    src: "/images/2.png",
    alt: "Puraskar award ceremony",
    caption: "Hinditarbhashi Hindi Lekhak Puraskar award ceremony.",
  },
  {
    src: "/images/3.png",
    alt: "Workshop for new writers",
    caption: "Shivir: national workshop for emerging Hindi writers.",
  },
  {
    src: "/images/5.png",
    alt: "Book exhibition and sale",
    caption: "Book exhibition and distribution of CHD publications.",
  },
  {
    src: "/images/6.png",
    alt: "Study tour of Hindi students",
    caption: "Study tour of Hindi students from non-Hindi speaking regions.",
  },
  {
    src: "/images/7.png",
    alt: "Release of journal Bhasha",
    caption: "Release of the new volume of the prestigious research journal Bhasha.",
  },
];

/* ---------- colour themes (kept literal so Tailwind can see them) ---------- */
type Theme = { top: string; bg: string; hover: string; badge: string };

const themes: Theme[] = [
  { top: "from-amber-500 to-orange-600", bg: "from-amber-50/50 via-white to-orange-50/20", hover: "hover:border-amber-400 hover:shadow-amber-500/10", badge: "bg-amber-500 text-white" },
  { top: "from-blue-600 to-indigo-600", bg: "from-blue-50/50 via-white to-indigo-50/20", hover: "hover:border-blue-400 hover:shadow-blue-500/10", badge: "bg-blue-600 text-white" },
  { top: "from-emerald-500 to-teal-600", bg: "from-emerald-50/50 via-white to-teal-50/20", hover: "hover:border-emerald-400 hover:shadow-emerald-500/10", badge: "bg-emerald-600 text-white" },
  { top: "from-purple-600 to-violet-600", bg: "from-purple-50/50 via-white to-violet-50/20", hover: "hover:border-purple-400 hover:shadow-purple-500/10", badge: "bg-purple-600 text-white" },
  { top: "from-rose-500 to-pink-600", bg: "from-rose-50/50 via-white to-pink-50/20", hover: "hover:border-rose-400 hover:shadow-rose-500/10", badge: "bg-rose-600 text-white" },
  { top: "from-teal-600 to-cyan-600", bg: "from-teal-50/50 via-white to-cyan-50/20", hover: "hover:border-teal-400 hover:shadow-teal-500/10", badge: "bg-teal-600 text-white" },
];

export default function GalleryPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO HEADER                                            */}
      {/* ========================================================= */}
      <section
        aria-labelledby="gallery-title"
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
                Photo Gallery
              </li>
            </ol>
          </nav>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h1 id="gallery-title" className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white">
              Photo Gallery
            </h1>
            <span className="rounded-lg bg-brand px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hc:bg-white hc:text-black">
              {photos.length} photographs
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. PHOTOS                                                 */}
      {/* ========================================================= */}
      <section
        aria-label="Photographs"
        className="bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-12 sm:py-16 hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {photos.map((p, i) => {
              const t = themes[i % themes.length];
              return (
                <li key={p.src} className="flex">
                  <figure
                    className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${t.bg} shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${t.hover} hc:border-white hc:bg-neutral-950`}
                  >
                    <span className={`absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r ${t.top}`} />

                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 hc:bg-neutral-900">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>

                    <figcaption className="flex-1 px-4 py-3.5 text-sm font-medium leading-snug text-ink hc:text-white">
                      {p.caption}
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}