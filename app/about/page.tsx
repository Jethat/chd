import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Central Hindi Directorate",
  description:
    "The Central Hindi Directorate, established on 1 March 1960, is the apex body of the Government of India for the development and promotion of Hindi.",
};

type Duty = { id: string; title: string; items?: string[] };

const duties: Duty[] = [
  {
    id: "A",
    title: "Development of Hindi",
    items: [
      "Preparation of dictionaries and encyclopedias.",
      "Preparation of comparative grammar of Hindi and other Indian languages.",
      "Publication of popular books in collaboration with publishers.",
      "Coordination of work in the development of Hindi language and literature undertaken by universities and institutions of higher learning.",
    ],
  },
  {
    id: "B",
    title: "Devnagari script",
    items: [
      "Standardization of Devnagari script.",
      "Parivardhit Devnagari: development and propagation.",
      "Preparation of select writings in Indian languages in diglot form.",
    ],
  },
  {
    id: "C",
    title: "Promotion of Hindi",
    items: [
      "Preparation of bilingual primers.",
      "Preparation of Hindi primers for foreigners.",
      "Preparation of CDs/DVDs of various lessons.",
      "Free distribution of Hindi books to non-Hindi speaking areas.",
      "Hindi information centre.",
    ],
  },
  { id: "D", title: "Journals", items: ["Bhasha (bi-monthly)", "Varshiki", "Sahityamala"] },
  {
    id: "E",
    title: "Extension programmes",
    items: [
      "Lecture tours of Hindi scholars.",
      "Study tours of Hindi students from non-Hindi speaking areas.",
      "Workshops for new writers (Shivir).",
      "Organizing national seminars.",
      "Research scholars tour grants.",
    ],
  },
  {
    id: "F",
    title: "Puraskar",
    items: ["Hinditarbhashi Hindi Lekhak Puraskar", "Shiksha Puraskar"],
  },
  {
    id: "G",
    title: "Recognition of Hindi examinations",
    items: ["Work connected with recognition of Hindi examinations."],
  },
  {
    id: "H",
    title: "Correspondence courses in Hindi",
    items: [
      "Prabodh, Praveen, Pragya",
      "Hindi Certificate",
      "Hindi Diploma",
      "Advanced Hindi Diploma",
      "Civil Services Hindi Course",
    ],
  },
  {
    id: "I",
    title: "Financial assistance to voluntary Hindi organisations",
    items: [
      "Financial assistance for the promotion and propagation of Hindi.",
      "Financial assistance for publication in Hindi.",
    ],
  },
  { id: "J", title: "Free distribution of Hindi books" },
  { id: "K", title: "Book exhibition and sale" },
];

const regionalOffices = ["Kolkata", "Guwahati", "Hyderabad", "Chennai"];

const heading =
  "text-[clamp(1.9rem,3.2vw,2.5rem)] font-semibold leading-tight text-brand-dark after:mt-4 after:block after:h-1 after:w-14 after:rounded after:bg-brand hc:text-white hc:after:bg-white";

export default function AboutPage() {
  return (
    <>
      {/* Title */}
      <section aria-labelledby="about-title" className="border-b border-line bg-brand-light py-10 hc:border-white hc:bg-black">
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
                About Us
              </li>
            </ol>
          </nav>
          <h1 id="about-title" className={heading}>
            About Us
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section aria-label="Introduction" className="py-13 lg:py-18">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-4 max-w-4xl text-justify text-base leading-[1.8] text-ink sm:text-[15px] hc:text-white">
            With the motto of &ldquo;Aham Rashtri Sangmani Vasunam&rdquo;, the Central Hindi
            Directorate was established on 1st March, 1960 as a subordinate office of the then
            Ministry of Education (at present Department of Higher Education, Ministry of
            Education). This is the apex body of Central Government which is persistently engaged
            in the execution of a multiplicity of important schemes for imparting an all-India
            character to Hindi, connecting divergent people through this language and striving
            consistently to get a place of prestige for Hindi at the global level.
          </p>
          <p className="mb-6 max-w-4xl text-justify text-base leading-[1.8] text-ink sm:text-[15px] hc:text-white">
            Article 351 of Part 17 of the Constitution of India gives clear instructions for the
            development of Hindi language:
          </p>

          <blockquote className="max-w-4xl rounded-r-xl border-l-4 border-brand bg-brand-light px-6 py-5 hc:border-white hc:bg-black hc:ring-1 hc:ring-white">
            <p className="text-justify text-base leading-[1.8] text-muted sm:text-[15px] hc:text-white">
              &ldquo;It shall be the duty of the Union to promote the spread of the Hindi language,
              to develop it so that it may serve as a medium of expression for all the elements of
              the composite culture of India and to secure its enrichment by assimilating without
              interfering with its genius, the forms, style and expressions used in Hindustani and
              in the other languages of India specified in the Eighth Schedule, and by drawing,
              wherever necessary or desirable, for its vocabulary, primarily on Sanskrit and
              secondarily on other languages.&rdquo;
            </p>
          </blockquote>

          <p className="mt-6 max-w-4xl text-justify text-base leading-[1.8] text-ink sm:text-[15px] hc:text-white">
            The Central Hindi Directorate was born to follow the same sentiments and instructions
            of the Constitution.
          </p>
        </div>
      </section>

      {/* Functions & duties */}
      <section aria-labelledby="duties-title" className="border-t border-line pb-13 pt-13 lg:pb-18 lg:pt-18 hc:border-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="duties-title" className={`mb-8 ${heading}`}>
            Functions &amp; Duties
          </h2>

          <ol className="grid items-start gap-5 md:grid-cols-2 lg:gap-6">
            {duties.map((d) => (
              <li
                key={d.id}
                className="rounded-xl border border-line border-t-2 border-t-brand bg-white p-5 shadow-sm hc:border-white hc:bg-black"
              >
                <h3 className="flex gap-2 text-base font-semibold leading-snug text-brand-dark sm:text-lg hc:text-white">
                  <span aria-hidden="true">{d.id}.</span>
                  <span>
                    <span className="sr-only">{d.id}. </span>
                    {d.title}
                  </span>
                </h3>
                {d.items && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink marker:text-brand hc:text-white hc:marker:text-white">
                    {d.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Offices */}
      <section aria-labelledby="offices-title" className="border-t border-line bg-brand-light py-13 lg:py-18 hc:border-white hc:bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="offices-title" className={`mb-6 ${heading}`}>
            Our Offices
          </h2>
          <p className="max-w-4xl text-base leading-[1.8] text-ink sm:text-[15px] hc:text-white">
            Headquarters of the Directorate is situated at New Delhi. It has four Regional Offices
            located in:
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {regionalOffices.map((city) => (
              <li
                key={city}
                className="rounded-full border border-brand/40 bg-white px-5 py-2 text-sm font-semibold text-brand-dark hc:border-white hc:bg-black hc:text-white"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}