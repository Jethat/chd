import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Coins,
  Download,
  FileText,
  Landmark,
  ListChecks,
  ScrollText,
  ShieldCheck,
  Users2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Grants | Central Hindi Directorate • केन्द्रीय हिन्दी निदेशालय",
  description:
    "Schemes of financial assistance from the Central Hindi Directorate: grants to Voluntary Hindi Organisations for promotion of Hindi, and assistance for publication in Hindi.",
};

/* ------------------------------------------------------------------ */
/* CONTENT                                                             */
/* ------------------------------------------------------------------ */

const vhoScope = [
  "Running Hindi teaching classes for non-Hindi-speaking people.",
  "Training and appointment of Hindi teachers and pracharaks in non-Hindi-speaking areas.",
  "Setting up and running libraries and reading rooms with Hindi books and periodicals in non-Hindi-speaking areas.",
  "Purchase of print and non-print material for propagation of Hindi in non-Hindi-speaking areas, such as books, recorded cassettes and audio-visual aids.",
  "Organizing lectures of prominent Hindi scholars, Hindi elocution contests, dramas, essay competitions, etc. in non-Hindi-speaking areas.",
  "Preparation and publication of Hindi books and other material for teaching Hindi in non-Hindi-speaking areas.",
  "Helping maintain institutions of all-India character.",
  "Preparation and publication of Hindi journals and magazines.",
  "Instituting prizes/awards for students whose mother tongue is not Hindi, for brilliance in Hindi.",
  "Organizing recognized, purposeful conferences, seminars, Kavi-Sammelans, Shivirs and book exhibitions in non-Hindi-speaking areas.",
  "Assistance to Hindi-medium schools in non-Hindi-speaking areas.",
  "Publication of recognized research papers or works in Hindi, and solutions to problems in implementing the Rajbhasha Act and Rules, in pursuit of Article 351 of the Constitution.",
  "Any other activity considered helpful for the enrichment, development, promotion and propagation of Hindi.",
];

const vhoConditions = [
  "The organization is open to inspection by an officer of the Central/State Government or of the Indian Audit and Accounts Department. Where the Central Government grant exceeds Rs. 25,000, physical inspection must be made.",
  "Before the grant is drawn, the organization gives an undertaking that the work will be completed within a reasonable time fixed by Government and that the grant will be used only for the purpose sanctioned. Otherwise it is liable to refund the full grant with interest, as the Central Government decides.",
  "Properties of the organization must not be transferred to any person, institution or organization without the concurrence of the Government of India. If the organization ceases to exist, property built or equipment bought out of the grant reverts to the Government of India.",
  "The organization maintains the prescribed proforma for an audited record of assets acquired or created wholly or substantially with the grant, and furnishes a copy to the Central Hindi Directorate by a specified date. Such assets may not be disposed of, encumbered or used for other purposes without prior approval.",
  "Accounts are maintained properly, submitted when required, and remain open to check by the Comptroller and Auditor General of India.",
  "Payment of the grant may be stopped if the Government believes the organization is badly managed or the money is not used for approved purposes.",
  "The organization must be open to all citizens of India without distinction of caste, creed or race. No capitation or other fee may be charged to people from a State other than the one where the organization is situated.",
  "The organization must follow the Government of India's directions and suggestions on the work for which the grant is sanctioned, and supply any information or clarification the Directorate requires within the time specified.",
];

const buildingConditions = [
  "Each proposal is first inspected by a three-member central team of CHD officials and GIAC members, which includes a representative of the Ministry.",
  "Only VHOs located in non-Hindi-speaking areas, with the building also in a non-Hindi-speaking area, are considered. Before the proposal goes to GIAC, CHD ascertains the organization's legal status, composition and past work, and whether it holds clear title to the land.",
  "The organization submits its execution plan, implementing agency, etc. in advance, before CHD/GIAC considers the proposal.",
  "No grant can be considered for the purchase of land.",
  "Only proposals duly forwarded by the concerned State Government are considered. Cost estimates are always vetted by the competent authority of CPWD/PWD.",
  "If the VHO folds up its activities before or after the building is completed, it repays the entire grant with interest. On default of any nature, property created with the grant is taken over by CHD/Government of India.",
  "The grantee executes a surety bond with two sureties on stamp paper of appropriate value, attested by a Notary Public.",
  "All building-grant proposals are considered solely on merit, never as routine. Only genuinely deserving cases are considered.",
  "CHD, Ministry of HRD reserves the right to inspect construction at any stage and stop further instalments if progress is unsatisfactory or funds are used for any other purpose. The organization is also open to inspection by Central or State Government representatives.",
  "The Grants-in-Aid Committee for building construction is chaired by the Additional Secretary (Education). The routine GIAC is chaired by the Joint Secretary (Languages).",
];

const instalments = [
  {
    label: "First instalment",
    text: "40% of the grant amount or Rs. 20 lakh, whichever is less.",
  },
  {
    label: "Second instalment",
    text: "40% of the grant or Rs. 20 lakh, whichever is less. Released only after construction progress is verified and audited accounts for at least 75% of the first instalment are submitted.",
  },
  {
    label: "Final instalment",
    text: "Released after the completion certificate of the building from the Executive Engineer or Superintending Engineer of CPWD/PWD is submitted, along with audited accounts for the earlier instalments.",
  },
];

const tiers = [
  {
    range: "Up to Rs. 5 lakh",
    cap: "or 75% of approved expenditure, whichever is less",
    who: "VHOs with outstanding service for Hindi in non-Hindi-speaking areas and at least 10 years of active operation.",
    approval: "Secretary (H.E.) on GIAC recommendation, with IFD concurrence.",
    color: "from-amber-500 to-orange-600",
  },
  {
    range: "Rs. 5 lakh to Rs. 20 lakh",
    cap: "or 75% of approved expenditure, whichever is less",
    who: "VHOs with outstanding service for Hindi in non-Hindi-speaking areas and not less than 20 years of active operation.",
    approval: "Minister of HRD on GIAC recommendation, with IFD concurrence.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    range: "Rs. 20 lakh to Rs. 50 lakh",
    cap: "or 75% of approved expenditure, whichever is less",
    who: "Considered in special circumstances, for VHOs rendering meritorious service of an all-India character, in very active operation for more than 30 years.",
    approval: "Minister of HRD on GIAC recommendation, with IFD concurrence.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    range: "Rs. 50 lakh to Rs. 100 lakh",
    cap: "or 75% of approved expenditure, whichever is less",
    who: "Considered only in extremely exceptional circumstances, recorded in writing, for VHOs with an outstanding reputation for extraordinary work and over 50 years of very active operation.",
    approval: "Minister of HRD on GIAC recommendation, with IFD concurrence.",
    color: "from-purple-600 to-violet-600",
  },
];

const routeSteps = [
  "Applicant sends the request on the prescribed proforma to the Deputy Director (Language) of the concerned Regional Office.",
  "The Regional Office scrutinizes it and places it before the State-Level Committee.",
  "Recommendations of the State-Level Committee are forwarded to the Central Hindi Directorate.",
  "The Directorate places the proposal before GIAC (Hindi) for the final decision.",
];

const recommendationPoints = [
  "The organization is of established competence and ability.",
  "The scheme recommended will enrich, propagate or promote Hindi (with details).",
  "The estimates have been checked and found reasonable.",
  "The specific amount recommended to the Central Government.",
  "Any other useful information on the application.",
];

const vhoDocuments = [
  "A brief description of the objects and activities of the organization.",
  "Whether the organization is registered.",
  "The constitution of the Board of Management.",
  "The latest available annual report.",
  "Audited accounts for the last 3 financial years and the last balance sheet, plus estimates of income and expenditure for the year the grant is sought.",
  "A statement of grants received so far from the State Government or other bodies: purpose, how and when used, progress made, and whether all conditions were observed.",
  "Details of any requests made to other bodies for grants for the same scheme, with their decisions communicated to the Deputy Director (Language) / CHD.",
  "An undertaking that once estimates are approved and the grant assessed, they will not be modified without prior approval of the Central/State Government.",
];

const pubScope = [
  "Books of reference such as encyclopedias, books of knowledge, anthologies, compilations, bibliographies and dictionaries. For dictionaries in one or more languages, the base language must be Hindi.",
  "Descriptive catalogues of rare manuscripts in the prescribed format, with a print order not exceeding 500 copies.",
  "Self-instructors for various languages, with Hindi as the base language.",
  "Original writings in Hindi on linguistic, literary (excluding fiction, drama, poetry and theses), ideological, social, anthropological and cultural themes.",
  "Critical editions and/or publications of old Hindi manuscripts.",
  "Translation and publication in Hindi of books from other languages on the themes listed above.",
  "Transliteration and publication of classics from other Indian languages into Devanagari (Hindi), with Hindi translations.",
  "Reprints or revised editions of rare books published more than 30 years ago and out of print.",
  "Any other publication individually accepted as conducive to the promotion of Hindi.",
];

const pubExtent = [
  "Assistance does not exceed 80% of the total approved expenditure for the publication, and is 100% for descriptive catalogues of rare manuscripts. A print order of 500 copies is assumed for descriptive catalogues and 1,100 copies for other publications.",
  "Where no permanent establishment exists, approved expenditure may include honorarium for the author/editor/translator, preparation of manuscripts (including calligraphy/typing), cost of paper, proof-reading and vetting, printing and binding. Building rent and travel expenses are not admissible.",
  "Assistance is not given for previous liabilities or debts, or to cover a prospective budget deficit or shortfall in a Government grant-in-aid.",
  "Decisions on approved expenditure rest entirely with the Directorate.",
  "The total approved estimate is first reduced by assistance approved or paid from other public funds (another Central department, a State Government, a local authority, a quasi-Government or autonomous body) before the amount under this scheme is decided.",
  "Qualifying requests are considered on merit, on the recommendations of the Grants Committee for Hindi. In appropriate or urgent cases the Chairman may approve a fresh grant in consultation with the Controller of Accounts attached to the Ministry, subject to reporting at the next Grants-in-Aid Committee meeting.",
];

const pubEligibility = [
  "Voluntary organisations, societies and charitable trusts registered under the relevant Central or State Act, as well as individuals who are authors, editors, translators or intending publishers holding the copyright (excluding commercial publishers).",
  "Academies and organisations set up, registered and funded by the Government for the promotion of languages, for their Hindi publications.",
  "Universities, through the State Government for State universities and through the University Grants Commission for Central universities, for projects not fully funded by the State Government or UGC.",
  "The Government may, after obtaining necessary advice, commission individual scholars, universities and registered voluntary organisations to produce literature under the scheme.",
];

const pubSubmission = [
  "Apply to the Director, Central Hindi Directorate (Ministry of HRD, Department of Higher Education), West Block No. VII, R.K. Puram, New Delhi - 110066, on the prescribed proforma, individually for each book.",
  "Submit the application in duplicate with the documents indicated in the relevant proforma.",
  "For a publication, reprint or revised edition, send two copies of the manuscript or old edition and keep the master copy. Include a descriptive note and a project report covering the title, theme and content, the value of the proposed publication in its field, professional competence, and the financial and establishment support available.",
  "Applications may be submitted at any time, subject to availability of funds and administrative convenience.",
];

const pubConditions = [
  "The grantee executes a bond on Rs. 10 stamp paper (in the attached proforma) before drawing the grant, undertaking to complete the work within a reasonable time, not beyond a year from release of the first instalment unless the Government extends the deadline on prior request, and to use the grant only for the sanctioned purpose. Failure makes the grantee liable to refund the full grant with 6% interest or as Government decides. No bond is needed for purchase of copies of books.",
  "For purchase of copies of books, payment is sanctioned in a single instalment on receipt of the bill after the relevant process is completed.",
  "For publication, the approved grant is released in suitable instalments depending on the nature and progress of the work, and never in a single instalment.",
  "The Government may issue suggestions or directions on the format and contents of the publication, which bind the grantee. For critical editions these may cover notes, indices, a biographical note on the author, etc.",
  "The final instalment (not less than one-third of the approved grant) is considered only after receipt of: accounts of total expenditure certified by a Chartered Accountant (for universities, jointly by the Finance/Audit Officer and the Registrar); a utilization certificate for the whole approved expenditure certified by the same Chartered Accountant and countersigned by the grantee; a signed report of satisfactory completion; and thirty complimentary copies of the book as published.",
  "The listed price of the publication is determined with prior approval of the Government of India.",
  "Approved estimates cannot be modified without prior approval of the Government of India.",
  "No assets created out of the grant may be transferred without the Government's concurrence. If the grantee ceases to exist, equipment bought out of the grant reverts to the Government.",
  "Accounts are properly maintained and open to check by a representative of the Government of India or the State/U.T. Government.",
  "If the Central or State/U.T. Government believes the affairs are not properly managed or the money is not used for the sanctioned purpose, further instalments may be withheld and the Government may recover such money as it decides.",
  "The applicant exercises utmost economy, especially in expenditure out of the Government grant.",
  "Progress reports are furnished every 3 months.",
  "If the grant released exceeds 80% of actual expenditure on approved items (after deducting any State Government grant), the difference is refunded to the Government of India.",
];

const titlePageNote =
  "Published with financial assistance from the Government of India, Central Hindi Directorate, Ministry of Human Resources Development, Department of Higher Education vide sanction letter No. ______ Dated ______. Copyright vests with the grantee.";

const forms = [
  { label: "Application Form Part I", size: "PDF • 236.48 KB", href: "/downloads/grants/application-form-part-1.pdf" },
  { label: "Application Form Part II", size: "PDF", href: "/downloads/grants/application-form-part-2.pdf" },
  { label: "Application Form Part III", size: "PDF", href: "/downloads/grants/application-form-part-3.pdf" },
  { label: "Financial Year", size: "PDF", href: "/downloads/grants/financial-year-1.pdf" },
  { label: "Financial Year II", size: "PDF", href: "/downloads/grants/financial-year-2.pdf" },
];

const jumpLinks = [
  { href: "#vho-scope", label: "Voluntary organisations: scope" },
  { href: "#vho-conditions", label: "Conditions" },
  { href: "#vho-building", label: "Building construction" },
  { href: "#vho-extent", label: "Extent of help" },
  { href: "#vho-apply", label: "How to apply" },
  { href: "#publication", label: "Publication scheme" },
  { href: "#forms", label: "Application forms" },
];

/* ------------------------------------------------------------------ */
/* SMALL PRESENTATION HELPERS                                          */
/* ------------------------------------------------------------------ */

function Block({
  id,
  title,
  icon,
  tone = "amber",
  children,
}: {
  id: string;
  title: string;
  icon: ReactNode;
  tone?: "amber" | "blue" | "emerald" | "purple" | "rose";
  children: ReactNode;
}) {
  const tones: Record<string, { bar: string; icon: string }> = {
    amber: { bar: "from-amber-500 to-orange-600", icon: "bg-amber-500 text-white" },
    blue: { bar: "from-blue-600 to-indigo-600", icon: "bg-blue-600 text-white" },
    emerald: { bar: "from-emerald-500 to-teal-600", icon: "bg-emerald-600 text-white" },
    purple: { bar: "from-purple-600 to-violet-600", icon: "bg-purple-600 text-white" },
    rose: { bar: "from-rose-500 to-pink-600", icon: "bg-rose-600 text-white" },
  };
  const t = tones[tone];
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="relative scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-xs sm:p-7 hc:border-white hc:bg-neutral-950"
    >
      <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${t.bar}`} />
      <div className="flex items-center gap-3">
        <span
          className={`grid size-10 shrink-0 place-items-center rounded-xl shadow-xs ${t.icon} hc:bg-neutral-800 hc:text-white`}
        >
          {icon}
        </span>
        <h3
          id={`${id}-title`}
          className="text-lg font-bold leading-tight text-brand-dark hc:text-white sm:text-xl"
        >
          {title}
        </h3>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-sm leading-relaxed text-ink hc:text-neutral-200">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2.5">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand/70 hc:bg-white" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function Numbered({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3 text-sm leading-relaxed text-ink hc:text-neutral-200">
      {items.map((it, i) => (
        <li key={it} className="flex items-start gap-3">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-brand/30 bg-brand-light text-xs font-bold text-brand-dark hc:border-white hc:bg-neutral-800 hc:text-white">
            {i + 1}
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ol>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="mb-3 mt-7 border-b border-line pb-2 text-sm font-bold text-brand-dark first:mt-0 hc:border-white/30 hc:text-white">
      {children}
    </h4>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function GrantsPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO                                                    */}
      {/* ========================================================= */}
      <section
        aria-labelledby="grants-title"
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
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-brand-dark hover:underline">Home</Link></li>
              <li aria-hidden="true">&bull;</li>
              <li><Link href="/schemes" className="hover:text-brand-dark hover:underline">Schemes</Link></li>
              <li aria-hidden="true">&bull;</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">Grants</li>
            </ol>
          </nav>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h1
                id="grants-title"
                className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white"
              >
                Grants
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-muted hc:text-neutral-300 sm:text-[15px]">
                Financial assistance from the Central Hindi Directorate to voluntary organisations,
                institutions and authors for the propagation, development and publication of Hindi.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-line bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-xs hc:border-white hc:bg-neutral-900 hc:text-white">
                2 Schemes
              </span>
              <span className="rounded-lg bg-brand px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hc:bg-white hc:text-black">
                Apply by 31 January
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. OVERVIEW + JUMP LINKS                                   */}
      {/* ========================================================= */}
      <section aria-label="Overview" className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-5 md:grid-cols-2">
            <a
              href="#vho-intro"
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/30 p-5 shadow-xs transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg hc:border-white hc:bg-neutral-950"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-amber-500 text-white shadow-xs hc:bg-neutral-800">
                <Building2 size={20} />
              </span>
              <div>
                <h2 className="text-base font-bold text-ink hc:text-white">
                  Financial Assistance to Voluntary Organisations
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-700 hc:text-neutral-300">
                  Grants for Hindi classes, libraries, events and publications in non-Hindi-speaking
                  areas, and for building construction.
                </p>
              </div>
            </a>

            <a
              href="#publication"
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/30 p-5 shadow-xs transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg hc:border-white hc:bg-neutral-950"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-xs hc:bg-neutral-800">
                <BookOpen size={20} />
              </span>
              <div>
                <h2 className="text-base font-bold text-ink hc:text-white">
                  Financial Assistance for Publication in Hindi
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-700 hc:text-neutral-300">
                  Up to 80% of approved expenditure for books of reference, manuscripts catalogues,
                  translations and more.
                </p>
              </div>
            </a>
          </div>

          <nav aria-label="On this page" className="mt-6 flex flex-wrap gap-2">
            {jumpLinks.map((j) => (
              <a
                key={j.href}
                href={j.href}
                className="rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-dark transition hover:border-brand hover:bg-brand-light hc:border-white hc:bg-neutral-900 hc:text-white"
              >
                {j.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SCHEME 1: VOLUNTARY ORGANISATIONS                       */}
      {/* ========================================================= */}
      <section
        aria-labelledby="vho-title"
        className="border-t border-line bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-14 sm:py-20 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div id="vho-intro" className="mb-8 scroll-mt-24 max-w-4xl">
            <h2
              id="vho-title"
              className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-tight text-brand-dark hc:text-white"
            >
              Scheme of Financial Assistance to Voluntary Organisations for the Promotion of Hindi
            </h2>
            <p className="mt-3 text-justify text-sm leading-relaxed text-ink hc:text-neutral-200 sm:text-[15px]">
              In the First Five Year Plan, the Government of India introduced a scheme of financial
              assistance to Voluntary Hindi Organisations for the propagation and development of
              Hindi. It was carried into the Second Five Year Plan and continues today. The scheme
              has proved very useful: it enlists co-operation and helps those engaged in the
              propagation of Hindi.
            </p>
          </div>

          <div className="space-y-6">
            <Block id="vho-scope" title="Scope" icon={<ListChecks size={20} />} tone="amber">
              <p className="mb-4 text-sm leading-relaxed text-ink hc:text-neutral-200">
                Financial assistance may be given to organizations and educational institutions to
                continue or expand their activities, or to break fresh ground in the propagation and
                development of Hindi. The activities may relate to one or more of these purposes:
              </p>
              <SubHeading>Promotional and developmental activities for Hindi</SubHeading>
              <Numbered items={vhoScope} />
            </Block>

            <Block
              id="vho-conditions"
              title="Conditions for grants"
              icon={<ShieldCheck size={20} />}
              tone="blue"
            >
              <p className="mb-4 text-sm leading-relaxed text-ink hc:text-neutral-200">
                Grants for promotional and developmental activities are subject to the following
                conditions:
              </p>
              <Numbered items={vhoConditions} />
            </Block>

            <Block
              id="vho-building"
              title="Building construction activities"
              icon={<Landmark size={20} />}
              tone="emerald"
            >
              <p className="mb-4 text-sm leading-relaxed text-ink hc:text-neutral-200">
                Grants may also be considered for construction, expansion or repair/renovation of
                buildings, and in rare or exceptional circumstances for buying a building. These
                grants are subject to the following conditions:
              </p>
              <Numbered items={buildingConditions} />

              <SubHeading>How the building grant is released</SubHeading>
              <div className="grid gap-3 md:grid-cols-3">
                {instalments.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 hc:border-white hc:bg-neutral-900"
                  >
                    <p className="text-sm font-bold text-emerald-900 hc:text-white">{s.label}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-700 hc:text-neutral-300">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </Block>

            <Block id="vho-extent" title="Extent of help" icon={<Coins size={20} />} tone="purple">
              <p className="text-sm leading-relaxed text-ink hc:text-neutral-200">
                All requests are considered on merit and grants are sanctioned for approved items of
                expenditure only. Grants do not exceed{" "}
                <strong className="text-brand-dark hc:text-white">
                  75% of the total approved expenditure
                </strong>{" "}
                for both promotional and developmental activities and building construction. Building
                grants are released in the following bands:
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {tiers.map((t) => (
                  <article
                    key={t.range}
                    className="relative overflow-hidden rounded-xl border border-line bg-white p-4 pt-5 hc:border-white hc:bg-neutral-900"
                  >
                    <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${t.color}`} />
                    <p className="text-base font-bold text-brand-dark hc:text-white">{t.range}</p>
                    <p className="text-[11px] font-medium text-muted hc:text-neutral-400">{t.cap}</p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-700 hc:text-neutral-300">
                      {t.who}
                    </p>
                    <p className="mt-2 border-t border-line/60 pt-2 text-xs font-semibold text-brand hc:border-white/20 hc:text-yellow-300">
                      Approval: {t.approval}
                    </p>
                  </article>
                ))}
              </div>
            </Block>

            <Block
              id="vho-apply"
              title="Procedure for submitting applications"
              icon={<ClipboardList size={20} />}
              tone="rose"
            >
              <p className="text-sm leading-relaxed text-ink hc:text-neutral-200">
                Submit separate applications for promotional and developmental activities and for
                building construction.
              </p>

              <SubHeading>Where applications go</SubHeading>
              <ol className="grid gap-3 md:grid-cols-4">
                {routeSteps.map((s, i) => (
                  <li
                    key={s}
                    className="rounded-xl border border-rose-200 bg-rose-50/50 p-4 text-xs leading-relaxed text-slate-700 hc:border-white hc:bg-neutral-900 hc:text-neutral-300"
                  >
                    <span className="mb-2 grid size-6 place-items-center rounded-full bg-rose-600 text-xs font-bold text-white hc:bg-white hc:text-black">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
              <div className="mt-4 space-y-2.5">
                <Bullets
                  items={[
                    "Regional Offices of the Central Hindi Directorate are at Guwahati, Kolkata, Chennai and Hyderabad.",
                    "Organizations of all-India character may apply directly to the Central Government if necessary.",
                    "Applications from areas outside any Regional Office's jurisdiction go directly to the Director, Central Hindi Directorate, New Delhi. The Directorate scrutinizes them and puts them before GIAC with the State-Level Committees' recommendations.",
                    "Building-construction applications are also submitted to the concerned Regional Office on the prescribed proforma, and must be routed through the State Government only.",
                  ]}
                />
              </div>

              <SubHeading>What the Deputy Director (Language) / State Government must indicate</SubHeading>
              <Bullets items={recommendationPoints} />
              <p className="mt-3 text-sm leading-relaxed text-ink hc:text-neutral-200">
                Before recommending an application, they must satisfy themselves about the
                bona fides of the organization and the usefulness and necessity of the work for which
                the grant is asked.
              </p>

              <SubHeading>Documents to accompany each application</SubHeading>
              <Numbered items={vhoDocuments} />

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 hc:border-yellow-300 hc:bg-neutral-900">
                <CalendarClock size={20} className="mt-0.5 shrink-0 text-amber-700 hc:text-yellow-300" />
                <p className="text-sm font-semibold leading-relaxed text-amber-950 hc:text-white">
                  Submit all applications in duplicate, with full details, to the Deputy Director
                  (Language) of the concerned Regional Office by 31st January, for consideration for
                  the next financial year.
                </p>
              </div>
            </Block>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SCHEME 2: PUBLICATION IN HINDI                          */}
      {/* ========================================================= */}
      <section
        id="publication"
        aria-labelledby="pub-title"
        className="scroll-mt-24 border-t border-line bg-gradient-to-b from-white via-amber-50/20 to-white py-14 sm:py-20 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 max-w-4xl">
            <h2
              id="pub-title"
              className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-tight text-brand-dark hc:text-white"
            >
              Financial Assistance Scheme for Publication in Hindi
            </h2>
            <p className="mt-3 text-justify text-sm leading-relaxed text-ink hc:text-neutral-200 sm:text-[15px]">
              The Ministry of Human Resource Development, Department of Higher Education, has
              administered this scheme since the Seventh Five Year Plan (1985–1990) to give limited
              financial assistance to individuals and voluntary organisations for publishing books, as
              one way of promoting languages. The scheme was decentralised in 1994–95 and its Hindi part
              was transferred to the Central Hindi Directorate by Ministry letter No. F. 17-1/94-D.I (L)
              dated 15.6.1994. The Directorate has implemented it ever since.
            </p>
          </div>

          <div className="space-y-6">
            <Block id="pub-criteria" title="Operation criteria" icon={<ScrollText size={20} />} tone="blue">
              <p className="text-sm leading-relaxed text-ink hc:text-neutral-200">
                The scheme operates under the exclusive heads of account for Hindi, and for Hindi
                including Avadhi, Bhojpuri, Dogri, Garhwali, Kumaoni, Magadhi, Maithili, Rajasthani,
                Braj, etc.
              </p>
            </Block>

            <Block id="pub-extent" title="Extent of assistance" icon={<Coins size={20} />} tone="amber">
              <div className="mb-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-center hc:border-white hc:bg-neutral-900">
                  <span className="block text-2xl font-bold text-amber-900 hc:text-white">80%</span>
                  <span className="text-xs font-medium text-amber-800 hc:text-neutral-300">
                    of approved expenditure on a publication
                  </span>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-center hc:border-white hc:bg-neutral-900">
                  <span className="block text-2xl font-bold text-emerald-900 hc:text-white">100%</span>
                  <span className="text-xs font-medium text-emerald-800 hc:text-neutral-300">
                    for descriptive catalogues of rare manuscripts
                  </span>
                </div>
              </div>
              <Numbered items={pubExtent} />
            </Block>

            <Block id="pub-scope" title="Scope of assistance" icon={<BookOpen size={20} />} tone="emerald">
              <p className="mb-4 text-sm leading-relaxed text-ink hc:text-neutral-200">
                These kinds of publication qualify for consideration:
              </p>
              <Numbered items={pubScope} />
            </Block>

            <Block id="pub-eligibility" title="Eligibility" icon={<Users2 size={20} />} tone="purple">
              <Bullets items={pubEligibility} />
              <p className="mt-4 text-xs leading-relaxed text-muted hc:text-neutral-400">
                Provided that the applicant organization is registered/incorporated or functions in a
                manner that profits of any kind arising from its activities are distributed among its
                members or shareholders in the form of bonus or dividend.
              </p>
            </Block>

            <Block id="pub-apply" title="Submission of application" icon={<FileText size={20} />} tone="rose">
              <Numbered items={pubSubmission} />
            </Block>

            <Block id="pub-conditions" title="Conditions of grant" icon={<ShieldCheck size={20} />} tone="blue">
              <Numbered items={pubConditions} />

              <SubHeading>Entry required on the title page of each publication</SubHeading>
              <blockquote className="border-l-2 border-brand/40 pl-4 text-xs leading-relaxed text-slate-700 italic hc:text-neutral-300 sm:text-[13px]">
                {titlePageNote}
              </blockquote>
            </Block>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. APPLICATION FORMS                                       */}
      {/* ========================================================= */}
      <section
        id="forms"
        aria-labelledby="forms-title"
        className="scroll-mt-24 border-t border-line bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-14 sm:py-20 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8">
            <h2
              id="forms-title"
              className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-tight text-brand-dark hc:text-white"
            >
              Grants: application forms
            </h2>
            <p className="mt-1 text-sm text-muted hc:text-neutral-300">
              Download the prescribed proforma and send it with the documents listed above.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {forms.map((f) => (
              <li key={f.label}>
                <a
                  href={f.href}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-white p-4 shadow-xs transition hover:-translate-y-1 hover:border-brand hover:shadow-md hc:border-white hc:bg-neutral-950"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-brand-light text-brand-dark hc:bg-neutral-800 hc:text-white">
                      <FileText size={18} />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-ink hc:text-white">{f.label}</span>
                      <span className="block text-[11px] font-medium text-muted hc:text-neutral-400">
                        {f.size}
                      </span>
                    </span>
                  </span>
                  <Download
                    size={16}
                    className="shrink-0 text-brand transition group-hover:translate-y-0.5 hc:text-yellow-300"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-light/70 via-white to-amber-50/40 p-5 hc:border-white hc:bg-neutral-950 sm:flex-row sm:items-center">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand hc:text-yellow-300" />
              <p className="text-sm leading-relaxed text-ink hc:text-neutral-200">
                Need to find your Regional Office or the Directorate in New Delhi?
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-brand-dark hc:bg-white hc:text-black"
            >
              <span>Contact Regional Offices</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}