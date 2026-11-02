
import Image from "next/image";
import Link from "next/link";

const sideLogos = [
  {
    src: "/images/moe.png",
    alt: "Ministry of Education",
    href: "https://www.india.gov.in",
  },
];

export default function Header() {
  return (
    <header className="border-b border-line bg-gradient-to-b from-brand-light to-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-3 py-3 sm:px-4 sm:py-4 lg:flex-nowrap lg:gap-x-5">

        {/* Branding section */}
        <div className="flex min-w-0 flex-1 items-center justify-center gap-2 sm:gap-4 lg:flex-none">

          {/* Ministry logo */}
          <div className="flex shrink-0 items-center border-r border-line pr-2 sm:pr-4 xl:pr-6">
            {sideLogos.map((p) => (
              <a
                key={p.src}
                href={p.href}
                aria-label={p.alt}
                className="flex items-center justify-center"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={100}
                  height={70}
                  priority
                  unoptimized
                  className="h-10 w-[68px] object-contain sm:h-12 sm:w-24 xl:h-14 xl:w-32"
                />
              </a>
            ))}
          </div>

          {/* Directorate logo and title */}
          <Link
            href="/"
            aria-label="Central Hindi Directorate, home"
            className="flex min-w-0 flex-1 items-center gap-2 transition-transform hover:-translate-y-px sm:gap-3 xl:flex-none"
          >
            <Image
              src="/images/logo.png"
              alt="Central Hindi Directorate logo"
              width={100}
              height={100}
              priority
              unoptimized
              className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12 xl:h-[76px] xl:w-[76px]"
            />

            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-[13px] font-bold leading-tight text-brand sm:text-[16px] md:text-[18px] xl:text-[20px]">
                Central Hindi Directorate Ministry of Education
              </span>

              <span className="font-serif text-[9px] font-semibold uppercase leading-snug text-brand-darker sm:text-[10px] md:text-[11px] xl:text-[12px]">
                Department of Higher Education · Government of India
              </span>
            </div>
          </Link>
        </div>

        {/* Search */}
        <form
          role="search"
          action="/search"
          className="order-3 w-full min-w-0 lg:order-none lg:ml-auto lg:w-auto lg:max-w-[320px] lg:flex-1"
        >
          <label htmlFor="site-search" className="sr-only">
            Search the website
          </label>

          <div className="flex overflow-hidden rounded-full border-2 border-brand bg-white transition-shadow focus-within:ring-[3px] focus-within:ring-brand/25">
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Search..."
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-ink outline-none placeholder:text-muted sm:px-4 sm:py-2.5"
            />

            <button
              type="submit"
              aria-label="Search"
              className="grid w-10 shrink-0 place-items-center bg-brand text-white transition-colors hover:bg-brand-dark sm:w-11"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>
        </form>

      </div>
    </header>
  );
}
