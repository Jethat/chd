import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const leaders = [
  {
    src: "/images/minister.png",
    alt: "Hon'ble Minister of Education",
    name: "Shri Pralhad Joshi", 
    role: "Hon'ble Minister of Education",
  },
  {
    src: "/images/director_chd.png",
    alt: "Director, Central Hindi Directorate",
    name: "Prof. Hitendra Kumar Mishra", 
    role: "Director, Central Hindi Directorate",
  },
];

export default function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="py-13 lg:py-18">
      <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
        {/* Text */}
        <Reveal from="left" className="min-w-0">
        <div className="min-w-0">
          <h2
            id="about-title"
            className="mb-6 text-[clamp(1.9rem,3.2vw,2.5rem)] font-semibold leading-tight text-brand-dark after:mt-4 after:block after:h-1 after:w-14 after:rounded after:bg-brand hc:text-white hc:after:bg-white"
          >
            About Us
          </h2>

          <p className="mb-4 text-justify text-base leading-[1.8] text-ink sm:text-[15px] hc:text-white">
            With the motto of &ldquo;Aham Rashtri Sangmani Vasunam&rdquo;, the Central Hindi Directorate was established on 1st March, 1960 as a subordinate office of the then Ministry of Education(At present Department of Higher Education, Ministry Of Education). This is the apex body of Central Government which is persistently engaged in the execution of a multiplicity of important schemes for imparting an all-India character to Hindi, connecting divergent people through this language and striving consistently to get a place of prestige for Hindi at the global level.

Article 351 of Part 17 of the Constitution of India gives clear instructions for the development of Hindi language:
          </p>
          <p className="mb-4 text-justify text-base leading-[1.8] text-muted sm:text-[15px] hc:text-white">
            &ldquo;It shall be the duty of the Union to promote the spread of the Hindi language, to develop it so that it may serve as a medium of expression for all the elements of the composite culture of India and to secure its enrichment by assimilating without interfering with its genius, the forms, style and expressions used in Hindustani and in the other languages of India specified in the Eighth Schedule, and by drawing, wherever necessary or desirable, for its vocabulary, primarily on Sanskrit and secondarily on other languages.&rdquo; The Central Hindi Directorate was born to follow the same sentiments and instructions of the Constitution.
          </p>

          <Link
            href="/about"
            className="group mt-3 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark hover:shadow-lg hover:shadow-brand-dark/40 hc:bg-black hc:ring-1 hc:ring-white"
          >
            View More
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-[3px]"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
        </Reveal>

        
{/* Minister + Director */}
<ul className="grid w-full grid-cols-2 items-stretch gap-4 sm:gap-6 lg:gap-7">
  {leaders.map((l, i) => (
    <li key={l.src} className="flex min-w-0">
      <Reveal from="right" delay={i * 140} className="flex w-full min-w-0">
      <figure className="group flex w-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hc:border-white hc:bg-black">

        {/* Equal-sized image containers */}
        <div className="relative aspect-[5/5] w-full overflow-hidden bg-slate-100 hc:bg-neutral-900">
          <Image
            src={l.src}
            alt={l.alt}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
            className="object-contain object-center p-1 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Equal-height caption areas */}
        <figcaption className="flex min-h-[100px] flex-1 flex-col items-center justify-center gap-1 border-t-2 border-brand px-2 py-4 text-center sm:min-h-[112px] sm:px-3 hc:border-white">
          <span className="text-sm font-semibold leading-snug text-brand-dark sm:text-base hc:text-white">
            {l.name}
          </span>

          <span className="text-xs leading-relaxed text-muted sm:text-sm hc:text-white">
            {l.role}
          </span>
        </figcaption>
      </figure>
      </Reveal>
    </li>
  ))}
</ul>

      </div>
    </section>
  );
}