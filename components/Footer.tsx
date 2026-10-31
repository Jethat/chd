import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, Info, Mail, MapPin, Phone, Users, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import BackToTop from "@/components/BackToTop";
import { badges, footerInfo as f, infoLinks, policyLinks, type FooterLink } from "@/data/footer";

const num = new Intl.NumberFormat("en-IN");
const year = new Date().getFullYear();

const heading =
  "mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/90 after:mt-2.5 after:block after:h-px after:w-8 after:bg-white/40";

function Contact({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-white/80">
      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-white/10 text-white">
        <Icon size={15} aria-hidden="true" />
      </span>
      <span className="min-w-0">{children}</span>
    </li>
  );
}

function LinkList({ title, items }: { title: string; items: FooterLink[] }) {
  return (
    <nav aria-label={title}>
      <h3 className={heading}>{title}</h3>
      <ul className="space-y-1">
        {items.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="group inline-flex items-center gap-1.5 py-1 text-sm text-white/75 transition-colors hover:text-white">
              <ChevronRight size={14} aria-hidden="true" className="text-white/40 transition group-hover:translate-x-0.5 group-hover:text-white" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-darker text-white">
      {/* soft dotted texture + top accent */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:22px_22px]" />
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_1.25fr_1fr_1fr] lg:gap-12">
        {/* 1. About */}
        <Reveal>
          <h3 className={heading}>About</h3>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white p-1.5">
              <Image src="/images/logo.png" alt="" width={56} height={56} unoptimized className="size-full object-contain" />
            </span>
            <p className="text-lg font-semibold leading-tight">{f.name}</p>
          </div>
          <p className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-[0.8rem] leading-relaxed text-white/75">
            <Info size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-white/60" />
            <span>
              {f.note}
              <span className="mt-1 block">{f.query}</span>
            </span>
          </p>
        </Reveal>

        {/* 2. Contact */}
        <Reveal delay={100}>
          <h3 className={heading}>Contact Us</h3>
          <ul className="space-y-4">
            <Contact icon={Phone}>
              <a href={`tel:+91${f.phone.replace(/\D/g, "").replace(/^0/, "")}`} className="hover:text-white hover:underline">
                {f.phone}
              </a>
            </Contact>
            <Contact icon={MapPin}>{f.address}</Contact>
            <Contact icon={Mail}>
              {f.emails.map((e) => (
                <span key={e} className="block break-all">{e}</span>
              ))}
            </Contact>
          </ul>
        </Reveal>

        {/* 3. Policies */}
        <Reveal delay={200}>
          <LinkList title="Policies" items={policyLinks} />
        </Reveal>

        {/* 4. Information */}
        <Reveal delay={300}>
          <LinkList title="Information" items={infoLinks} />
        </Reveal>
      </div>

      {/* Visitors + last updated */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 text-xs text-white/70">
          <p className="inline-flex items-center gap-2">
            <Users size={14} aria-hidden="true" /> Site visitors:
            <b className="font-semibold tabular-nums text-white">{num.format(f.visitors)}</b>
          </p>
          <p className="inline-flex items-center gap-2">
            <Clock size={14} aria-hidden="true" /> Page last updated:
            <span className="font-semibold text-white">{f.lastUpdated}</span>
          </p>
        </div>
      </div>

      {/* Copyright + accessibility badges */}
      <div className="relative bg-black/30">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <p className="max-w-2xl text-xs leading-relaxed text-white/70">
            Copyright © {f.since === year ? year : `${f.since}–${year}`} All Rights Reserved. Official website of Central Hindi Directorate,
            Ministry of Education (Department of Higher Education), Government of India.
          </p>
          <ul className="flex flex-wrap items-center gap-2">
            {badges.map((b) => (
              <li key={b.src} className="rounded bg-white p-0.5">
                <Image src={b.src} alt={b.alt} width={120} height={32} unoptimized className="h-8 w-auto" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}