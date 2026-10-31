import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Organization Chart | Central Hindi Directorate",
  description:
    "Channels of supervision and accountability, academic and administrative, in the Central Hindi Directorate.",
};

type OrgNode = { label: string; children?: OrgNode[] };

const academic: OrgNode = {
  label: "Director",
  children: [
    {
      label: "General Editor",
      children: [
        {
          label: "Deputy Director",
          children: [
            {
              label: "Assistant Director",
              children: [
                { label: "Assistant Research Officer" },
                { label: "Evaluator" },
                { label: "Technical Assistant" },
                { label: "Proof Reader" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const administrative: OrgNode = {
  label: "Administrative Officer",
  children: [
    {
      label: "Junior Administrative Officer",
      children: [
        {
          label: "Office Superintendent",
          children: [
            {
              label: "Assistant",
              children: [
                {
                  label: "Upper Division Clerk",
                  children: [
                    {
                      label: "Lower Division Clerk",
                      children: [{ label: "Multi-Tasking Staff" }],
                    },
                  ],
                },
              ],
            },
            {
              label: "Senior Stenographer",
              children: [{ label: "Junior Stenographer" }],
            },
            { label: "Library and Information Assistant" },
          ],
        },
      ],
    },
  ],
};

type Pos = "root" | "only" | "first" | "middle" | "last";

const line = "bg-brand/40 hc:bg-white";

function TreeNode({ node, pos = "root" }: { node: OrgNode; pos?: Pos }) {
  const kids = node.children ?? [];
  const branched = pos === "first" || pos === "middle" || pos === "last";

  return (
    <li className={`relative flex flex-col items-center ${branched ? "px-3 pt-6" : ""}`}>
      {branched && (
        <>
          {/* horizontal bar joining siblings */}
          <span
            aria-hidden="true"
            className={`absolute top-0 h-px ${line} ${
              pos === "first" ? "left-1/2 right-0" : pos === "last" ? "left-0 right-1/2" : "inset-x-0"
            }`}
          />
          {/* drop from the bar to this box */}
          <span aria-hidden="true" className={`absolute left-1/2 top-0 h-6 w-px ${line}`} />
        </>
      )}

      <span
        className={`whitespace-nowrap rounded-md border bg-white px-3 py-1.5 text-sm text-ink hc:bg-black hc:text-white ${
          pos === "root"
            ? "border-brand font-semibold text-brand-dark hc:border-white"
            : "border-brand/40 hc:border-white"
        }`}
      >
        {node.label}
      </span>

      {kids.length > 0 && (
        <>
          <span aria-hidden="true" className={`h-6 w-px ${line}`} />
          <ul className="flex items-start justify-center">
            {kids.map((k, i) => (
              <TreeNode
                key={k.label}
                node={k}
                pos={
                  kids.length === 1
                    ? "only"
                    : i === 0
                      ? "first"
                      : i === kids.length - 1
                        ? "last"
                        : "middle"
                }
              />
            ))}
          </ul>
        </>
      )}
    </li>
  );
}

function Chart({ id, title, root }: { id: string; title: string; root: OrgNode }) {
  return (
    <section aria-labelledby={id} className="py-10 first:pt-0">
      <h2 id={id} className="mb-8 text-lg font-semibold text-brand-dark sm:text-xl hc:text-white">
        {title}
      </h2>
      {/* Wide charts scroll sideways on small screens */}
      <div className="overflow-x-auto pb-4">
        <ul className="mx-auto w-max">
          <TreeNode node={root} />
        </ul>
      </div>
    </section>
  );
}

const heading =
  "text-[clamp(1.9rem,3.2vw,2.5rem)] font-semibold leading-tight text-brand-dark after:mt-4 after:block after:h-1 after:w-14 after:rounded after:bg-brand hc:text-white hc:after:bg-white";

export default function OrganizationChartPage() {
  return (
    <>
      {/* Title */}
      <section
        aria-labelledby="org-title"
        className="border-b border-line bg-brand-light py-10 hc:border-white hc:bg-black"
      >
        <div className="mx-auto max-w-7xl px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted hc:text-white">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-dark hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/about" className="hover:text-brand-dark hover:underline">
                  About Us
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">
                Organization Chart
              </li>
            </ol>
          </nav>
          <h1 id="org-title" className={heading}>
            Organization Chart
          </h1>
        </div>
      </section>

      {/* Charts */}
      <div className="mx-auto max-w-7xl px-4 py-13 lg:py-18">
        <Chart
          id="academic-title"
          title="Channels of supervision and accountability (Academic)"
          root={academic}
        />
        <div className="border-t border-line hc:border-white" />
        <Chart
          id="administrative-title"
          title="Channels of supervision and accountability (Administrative)"
          root={administrative}
        />
      </div>
    </>
  );
}