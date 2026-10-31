"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { MouseEvent } from "react";
import { navItems } from "@/data/nav";

/* ---------- shared class strings (kept literal so Tailwind can see them) ---------- */

// Top-level link: light weight, thin underline that draws in on hover / current page
const topLink =
  "relative flex flex-1 items-center gap-1 px-3 py-3 text-[13px] font-medium tracking-wide text-white/90 transition-colors hover:text-white " +
  "xl:flex-none xl:px-2.5 " +
  "after:absolute after:inset-x-2.5 after:bottom-1.5 after:hidden after:h-px after:origin-left after:scale-x-0 after:bg-white/80 after:transition-transform " +
  "xl:after:block xl:hover:after:scale-x-100 xl:group-hover/item:after:scale-x-100 xl:group-focus-within/item:after:scale-x-100 " +
  "aria-[current=page]:text-white xl:aria-[current=page]:after:scale-x-100";

// First-level dropdown panel (accordion on mobile, floating card on desktop)
const panel =
  "bg-black/15 " +
  "xl:invisible xl:absolute xl:top-full xl:z-50 xl:block xl:w-max xl:min-w-[230px] xl:max-w-[320px] xl:translate-y-1 " +
  "xl:border-t-2 xl:border-brand-dark xl:bg-white xl:py-1.5 xl:opacity-0 xl:shadow-lg xl:shadow-black/10 xl:transition xl:duration-150 " +
  "xl:group-hover/item:visible xl:group-hover/item:translate-y-0 xl:group-hover/item:opacity-100 " +
  "xl:group-focus-within/item:visible xl:group-focus-within/item:translate-y-0 xl:group-focus-within/item:opacity-100";

// Second-level flyout (opens beside its row on desktop, nested accordion on mobile)
const flyout =
  "bg-black/10 pl-4 " +
  "xl:invisible xl:absolute xl:-top-1.5 xl:z-50 xl:block xl:w-max xl:min-w-[210px] xl:max-w-[300px] xl:pl-0 " +
  "xl:border-t-2 xl:border-brand-dark xl:bg-white xl:py-1.5 xl:opacity-0 xl:shadow-lg xl:shadow-black/10 xl:transition xl:duration-150 " +
  "xl:group-hover/sub:visible xl:group-hover/sub:opacity-100 " +
  "xl:group-focus-within/sub:visible xl:group-focus-within/sub:opacity-100";

// Dropdown row text (add `block` or `flex` next to it)
const ddLink =
  "px-4 py-2 text-[13px] leading-snug text-white/85 transition-colors hover:bg-white/10 " +
  "xl:text-gray-600 xl:hover:bg-brand-light xl:hover:text-brand-dark";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [openTop, setOpenTop] = useState<number | null>(null);
  const [openSub, setOpenSub] = useState<string | null>(null);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenTop(null);
    setOpenSub(null);
  };
  const toggleTop = (i: number) => {
    setOpenTop(openTop === i ? null : i);
    setOpenSub(null);
  };
  const toggleSub = (key: string) => setOpenSub(openSub === key ? null : key);

  const isCurrent = (href: string) =>
    href !== "#" && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  // Parent rows with href="#" toggle their submenu instead of jumping to the top of the page
  const parentClick = (e: MouseEvent<HTMLAnchorElement>, href: string, toggle: () => void) => {
    if (href === "#") {
      e.preventDefault();
      toggle();
    } else {
      closeAll();
    }
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-brand text-white shadow-sm shadow-black/10"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Mobile bar */}
        <div className="flex items-center justify-between py-2 xl:hidden">
          <span className="text-sm font-medium tracking-wide text-white/90">Menu</span>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            className="rounded border border-white/40 p-1.5 text-white/90 hover:bg-white/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>

        <ul
          className={`${mobileOpen ? "block" : "hidden"} max-h-[calc(100vh-3.5rem)] overflow-y-auto pb-2 xl:flex xl:max-h-none xl:items-stretch xl:justify-between xl:overflow-visible xl:pb-0`}
        >
          {navItems.map((item, i) => {
            const kids = item.children ?? [];
            const hasKids = kids.length > 0;
            const rightAlign = item.align === "right";
            const topOpen = openTop === i;

            return (
              <li key={item.label} className="group/item relative border-b border-white/10 xl:border-b-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    onClick={(e) => (hasKids ? parentClick(e, item.href, () => toggleTop(i)) : closeAll())}
                    className={topLink}
                  >
                    {item.label}
                    {hasKids && (
                      <Chevron className="hidden opacity-60 transition-transform xl:block xl:group-hover/item:rotate-180 xl:group-focus-within/item:rotate-180" />
                    )}
                  </Link>

                  {hasKids && (
                    <button
                      type="button"
                      onClick={() => toggleTop(i)}
                      aria-expanded={topOpen}
                      aria-label={`Toggle ${item.label} submenu`}
                      className="px-4 py-3 text-white/80 xl:hidden"
                    >
                      <Chevron className={`transition-transform ${topOpen ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>

                {hasKids && (
                  <ul className={`${topOpen ? "block" : "hidden"} ${panel} ${rightAlign ? "xl:right-0" : "xl:left-0"}`}>
                    {kids.map((c, j) => {
                      const subKey = `${i}-${j}`;
                      const subKids = c.children ?? [];

                      // Plain link
                      if (subKids.length === 0) {
                        return (
                          <li key={c.label}>
                            <Link href={c.href} onClick={closeAll} className={`block ${ddLink}`}>
                              {c.label}
                            </Link>
                          </li>
                        );
                      }

                      // Row with a nested flyout
                      const subOpen = openSub === subKey;
                      return (
                        <li key={c.label} className="group/sub relative">
                          <div className="flex items-center justify-between">
                            <Link
                              href={c.href}
                              onClick={(e) => parentClick(e, c.href, () => toggleSub(subKey))}
                              className={`flex flex-1 items-center justify-between gap-4 ${ddLink}`}
                            >
                              {c.label}
                              <Chevron className={`hidden opacity-60 xl:block ${rightAlign ? "rotate-90" : "-rotate-90"}`} />
                            </Link>
                            <button
                              type="button"
                              onClick={() => toggleSub(subKey)}
                              aria-expanded={subOpen}
                              aria-label={`Toggle ${c.label} submenu`}
                              className="px-4 py-2 text-white/80 xl:hidden"
                            >
                              <Chevron className={`transition-transform ${subOpen ? "rotate-180" : ""}`} />
                            </button>
                          </div>

                          <ul className={`${subOpen ? "block" : "hidden"} ${flyout} ${rightAlign ? "xl:right-full" : "xl:left-full"}`}>
                            {subKids.map((s) => (
                              <li key={s.label}>
                                <Link href={s.href} onClick={closeAll} className={`block ${ddLink}`}>
                                  {s.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}