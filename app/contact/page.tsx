import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Central Hindi Directorate",
  description:
    "Address, telephone and email details of the Central Hindi Directorate, its units and its regional offices.",
};

/** Email addresses are kept in the [at] / [dot] form to discourage spam harvesting. */
const mainEmails = [
  "patodirectorchd[at]gmail[dot]com",
  "dirchd-mhrd[at]gov[dot]in",
  "aro-chd[dot]edu@nic.in",
];

const units = [
  { unit: "Bhasha Unit", email: "bhashaunit[at]gmail[dot]com" },
  { unit: "Dictionary Unit", email: "kosh[dot]chd[at]gmail[dot]com" },
  { unit: "Grants Unit", email: "grantschd[at]gmail[dot]com" },
  { unit: "Administration", email: "admnofficerchd[at]gmail[dot]com" },
];

type Office = { city: string; address: string[]; area: string };

const offices: Office[] = [
  {
    city: "Guwahati",
    address: [
      "Deputy Director (L), Central Hindi Directorate",
      "Regional Office Guwahati, Prop. No. 10344990",
      "Ward No. 28, Guwahati Municipal Corporation",
      "Village Maidamgaon, Mouza Beltola, P.S. Beltola",
      "Guwahati - 781028, Dist. Kamrup (Metro), Assam",
    ],
    area: "Assam, Arunachal Pradesh, Nagaland, Manipur, Meghalaya, Mizoram, Tripura, Sikkim.",
  },
  {
    city: "Kolkata",
    address: [
      "Deputy Director (L), Central Hindi Directorate",
      "Regional Office",
      "1, Council House Street, First Floor, North Wing",
      "Kolkata - 700 001, West Bengal",
    ],
    area: "Bihar, West Bengal, Odisha, Andaman and Nicobar Islands, Jharkhand, Lakshadweep.",
  },
  {
    city: "Hyderabad",
    address: [
      "Deputy Director (L), Central Hindi Directorate",
      "Regional Office",
      "Kendriya Sadan, Room No. 3, Ground Floor, Block No. VI",
      "Sultan Bazar",
      "Hyderabad - 500 095 (A.P.)",
    ],
    area: "Gujarat, Andhra Pradesh, Telangana, Maharashtra, Goa, Karnataka.",
  },
  {
    city: "Chennai",
    address: [
      "Deputy Director (L), Central Hindi Directorate",
      "Regional Office",
      "Shastri Bhawan, First Floor, Block No. 5",
      "26, Haddows Road",
      "Chennai - 600 006, Tamil Nadu",
    ],
    area: "Tamil Nadu, Kerala, Puducherry.",
  },
  {
    city: "New Delhi",
    address: [
      "Deputy Director (L), Central Hindi Directorate",
      "West Block No. 7, R.K. Puram",
      "New Delhi - 110 066",
    ],
    area: "Uttar Pradesh, Delhi, Punjab, Haryana, Himachal Pradesh, Jammu & Kashmir, Madhya Pradesh, Rajasthan, Uttaranchal, Chhattisgarh.",
  },
];

const heading =
  "text-[clamp(1.9rem,3.2vw,2.5rem)] font-semibold leading-tight text-brand-dark after:mt-4 after:block after:h-1 after:w-14 after:rounded after:bg-brand hc:text-white hc:after:bg-white";

const card =
  "rounded-xl border border-line border-t-2 border-t-brand bg-white p-5 shadow-sm hc:border-white hc:bg-black";

export default function ContactPage() {
  return (
    <>
      {/* Title */}
      <section
        aria-labelledby="contact-title"
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
                Contact Us
              </li>
            </ol>
          </nav>
          <h1 id="contact-title" className={heading}>
            Contact Us
          </h1>
        </div>
      </section>

      {/* Directorate */}
      <section aria-labelledby="directorate-title" className="py-13 lg:py-18">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="directorate-title" className="sr-only">
            Central Hindi Directorate contact details
          </h2>

          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            <div className={card}>
              <h3 className="mb-3 text-base font-semibold text-brand-dark sm:text-lg hc:text-white">
                Address
              </h3>
              <address className="text-sm not-italic leading-relaxed text-ink hc:text-white">
                Central Hindi Directorate
                <br />
                (Department of Higher Education)
                <br />
                Ministry of Education
                <br />
                West Block - VII, R. K. Puram
                <br />
                New Delhi - 110066
              </address>
            </div>

            <div className={card}>
              <h3 className="mb-3 text-base font-semibold text-brand-dark sm:text-lg hc:text-white">
                Telephone
              </h3>
              <p className="text-sm leading-relaxed text-ink hc:text-white">
                <a href="tel:+911120862356" className="hover:text-brand-dark hover:underline hc:text-white">
                  +91-11-20862356
                </a>
              </p>
            </div>

            <div className={card}>
              <h3 className="mb-3 text-base font-semibold text-brand-dark sm:text-lg hc:text-white">
                Email
              </h3>
              <ul className="space-y-1.5 break-words text-sm leading-relaxed text-ink hc:text-white">
                {mainEmails.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 text-sm text-muted hc:text-white">
            Looking for an officer or employee?{" "}
            <a
              href="/docs/intercom-numbers.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand underline-offset-4 hover:text-brand-dark hover:underline hc:text-[#ffeb3b]"
            >
              Intercom numbers of officers and employees (PDF, 150.58 KB)
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </section>

      {/* Units */}
      <section
        aria-labelledby="units-title"
        className="border-t border-line bg-brand-light py-13 lg:py-18 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="units-title" className={`mb-8 ${heading}`}>
            Email addresses of Units / Sections
          </h2>

          <div className="overflow-x-auto rounded-xl border border-line bg-white hc:border-white hc:bg-black">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead>
                <tr className="border-b-2 border-brand text-brand-dark hc:border-white hc:text-white">
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Unit
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Email address
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-ink hc:divide-white hc:text-white">
                {units.map((u) => (
                  <tr key={u.unit}>
                    <th scope="row" className="px-5 py-3 font-medium">
                      {u.unit}
                    </th>
                    <td className="break-all px-5 py-3">{u.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Regional offices */}
      <section aria-labelledby="regional-title" className="py-13 lg:py-18">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="regional-title" className={`mb-3 ${heading}`}>
            Regional Offices
          </h2>
          <p className="mb-8 max-w-3xl text-base leading-[1.8] text-muted sm:text-[15px] hc:text-white">
            Name and address of the Regional Offices of the Deputy Director (L), Central Hindi
            Directorate, and the area covered by each.
          </p>

          <ul className="grid items-stretch gap-5 md:grid-cols-2 lg:gap-6">
            {offices.map((o) => (
              <li key={o.city} className={`${card} flex flex-col`}>
                <h3 className="mb-3 text-base font-semibold text-brand-dark sm:text-lg hc:text-white">
                  {o.city}
                </h3>
                <address className="text-sm not-italic leading-relaxed text-ink hc:text-white">
                  {o.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <div className="mt-4 border-t border-line pt-3 text-sm hc:border-white">
                  <p className="font-semibold text-brand-dark hc:text-white">Area covered</p>
                  <p className="mt-1 leading-relaxed text-muted hc:text-white">{o.area}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}