import type { Metadata } from "next";
import Link from "next/link";
import { Building2, GraduationCap } from "lucide-react";

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

const count = (n: OrgNode): number => 1 + (n.children ?? []).reduce((t, c) => t + count(c), 0);

/* ---------- colour themes (kept literal so Tailwind can see them) ---------- */
type Theme = {
  topLine: string;
  cardBg: string;
  iconBg: string;
  badge: string;
  pill: string;
  line: string;
  root: string;
  node: string;
  leaf: string;
};

const amber: Theme = {
  topLine: "from-amber-500 to-orange-600",
  cardBg: "from-amber-50/50 via-white to-orange-50/20",
  iconBg: "bg-amber-500 text-white",
  badge: "border-amber-200 bg-amber-100 text-amber-900",
  pill: "border-amber-200 bg-amber-50/70 text-amber-900 hover:border-amber-400",
  line: "bg-amber-400/70",
  root: "from-amber-500 to-orange-600",
  node: "border-amber-300",
  leaf: "border-amber-300 bg-amber-50",
};

const blue: Theme = {
  topLine: "from-blue-600 to-indigo-600",
  cardBg: "from-blue-50/50 via-white to-indigo-50/20",
  iconBg: "bg-blue-600 text-white",
  badge: "border-blue-200 bg-blue-100 text-blue-900",
  pill: "border-blue-200 bg-blue-50/70 text-blue-900 hover:border-blue-400",
  line: "bg-blue-400/70",
  root: "from-blue-600 to-indigo-600",
  node: "border-blue-300",
  leaf: "border-blue-300 bg-blue-50",
};

type Pos = "root" | "only" | "first" | "middle" | "last";

function TreeNode({ node, pos = "root", theme }: { node: OrgNode; pos?: Pos; theme: Theme }) {
  const kids = node.children ?? [];
  const branched = pos === "first" || pos === "middle" || pos === "last";
  const line = `${theme.line} hc:bg-white`;

  const box =
    pos === "root"
      ? `border-transparent bg-gradient-to-r ${theme.root} font-semibold text-white shadow-xs hc:border-white hc:bg-white hc:text-black`
      : kids.length === 0
        ? `${theme.leaf} text-ink hc:border-white hc:bg-black hc:text-white`
        : `${theme.node} bg-white text-ink hc:border-white hc:bg-black hc:text-white`;

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
        className={`whitespace-nowrap rounded-lg border px-3.5 py-2 text-xs font-medium shadow-xs sm:text-[13px] ${box}`}
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
                theme={theme}
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

function Chart({
  id,
  title,
  subtitle,
  root,
  theme,
  Icon,
}: {
  id: string;
  title: string;
  subtitle: string;
  root: OrgNode;
  theme: Theme;
  Icon: typeof GraduationCap;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${theme.cardBg} p-5 shadow-xs sm:p-8 hc:border-white hc:bg-neutral-950`}
    >
      <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${theme.topLine}`} />

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`grid size-11 place-items-center rounded-xl shadow-xs ${theme.iconBg} hc:bg-neutral-800 hc:text-white`}
          >
            <Icon size={20} strokeWidth={2} />
          </span>
          <div>
            <h2
              id={`${id}-title`}
              className="text-base font-bold leading-snug text-ink sm:text-lg hc:text-white"
            >
              {title}
            </h2>
            <p className="text-xs text-muted hc:text-neutral-300">{subtitle}</p>
          </div>
        </div>
        <span
          className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${theme.badge} hc:bg-neutral-800 hc:text-white`}
        >
          {count(root)} posts
        </span>
      </div>

      <p className="mt-4 text-[11px] text-muted sm:hidden hc:text-neutral-300">
        Scroll sideways to see the full chart.
      </p>

      {/* Wide charts scroll sideways on small screens */}
      <div className="mt-2 overflow-x-auto pb-4 pt-4 sm:mt-6">
        <ul className="mx-auto w-max">
          <TreeNode node={root} theme={theme} />
        </ul>
      </div>
    </section>
  );
}

export default function OrganizationChartPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO HEADER                                            */}
      {/* ========================================================= */}
      <section
        aria-labelledby="org-title"
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
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-dark hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li>
                <Link href="/about" className="hover:text-brand-dark hover:underline">
                  About Directorate
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li aria-current="page" className="font-semibold text-brand-dark hc:text-white">
                Organization Chart
              </li>
            </ol>
          </nav>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1
                id="org-title"
                className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white"
              >
                Organization Chart
              </h1>
              <p className="mt-2 max-w-xl text-sm text-muted hc:text-neutral-300">
                Channels of supervision and accountability in the Central Hindi Directorate.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#academic"
                className={`rounded-lg border px-3.5 py-1.5 text-xs font-bold shadow-xs transition ${amber.pill} hc:border-white hc:bg-neutral-900 hc:text-white`}
              >
                Academic
              </a>
              <a
                href="#administrative"
                className={`rounded-lg border px-3.5 py-1.5 text-xs font-bold shadow-xs transition ${blue.pill} hc:border-white hc:bg-neutral-900 hc:text-white`}
              >
                Administrative
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CHARTS                                                 */}
      {/* ========================================================= */}
      <div className="py-12 sm:py-16 hc:bg-black">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6">
          <Chart
            id="academic"
            title="Channels of supervision and accountability (Academic)"
            subtitle="From the Director down to the academic staff"
            root={academic}
            theme={amber}
            Icon={GraduationCap}
          />
          <Chart
            id="administrative"
            title="Channels of supervision and accountability (Administrative)"
            subtitle="From the Administrative Officer down to support staff"
            root={administrative}
            theme={blue}
            Icon={Building2}
          />
        </div>
      </div>
    </>
  );
}