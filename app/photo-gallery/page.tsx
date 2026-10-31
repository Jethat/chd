import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photo Gallery | Central Hindi Directorate",
  description: "Photographs from the events and activities of the Central Hindi Directorate.",
};

type Photo = { src: string; alt: string; caption: string };

/**
 * Add or edit photos here. Put image files in /public/images/gallery/
 * and keep each caption to one line.
 * The first two entries reuse images already on the site; the rest are placeholders.
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

const heading =
  "text-[clamp(1.9rem,3.2vw,2.5rem)] font-semibold leading-tight text-brand-dark after:mt-4 after:block after:h-1 after:w-14 after:rounded after:bg-brand hc:text-white hc:after:bg-white";

export default function GalleryPage() {
  return (
    <>
      {/* Title */}
      <section
        aria-labelledby="gallery-title"
        className="border-b border-line bg-brand-light py-10 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted hc:text-white">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-dark hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">
                Photo Gallery
              </li>
            </ol>
          </nav>
          <h1 id="gallery-title" className={heading}>
            Photo Gallery
          </h1>
        </div>
      </section>

      {/* Photos */}
      <section aria-label="Photographs" className="py-13 lg:py-18">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {photos.map((p) => (
              <li key={p.src} className="flex">
                <figure className="group flex w-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hc:border-white hc:bg-black">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 hc:bg-neutral-900">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="flex-1 border-t-2 border-brand px-4 py-3 text-sm leading-snug text-ink hc:border-white hc:text-white">
                    {p.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}