import Image from "next/image";
import Link from "next/link";

const sideLogos = [
  { src: "/images/moe.png", alt: "Ministry of Education", href: "https://www.india.gov.in" },
  // { src: "/images/INDIA.png", alt: "Indian Flag", href: "#" },
];

export default function Header() {
  return (
    <header className="border-b border-line bg-linear-to-b from-brand-light to-white to-70%">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 pb-2.5 pt-3 xl:flex-nowrap xl:gap-x-8 xl:pt-5">
        {/* Main logo + name */}

        <div className="ml-auto flex flex-none items-center border-r border-line pr-3 sm:pr-5 xl:mr-0 xl:pr-7">
          <ul className="flex items-center gap-2 sm:gap-4 xl:gap-6">
            {sideLogos.map((p) => (
              <li key={p.src} className="flex">
                <a
                  href={p.href}
                  aria-label={p.alt}
                  className="flex rounded-xl p-1.5 transition hover:-translate-y-0.5"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={80}
                    height={80}
                    unoptimized
                    priority
                    className="h-14 w-32 object-contain "
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/"
          aria-label="Central Hindi Directorate, home"
          className="flex min-w-0 flex-none items-center gap-3.5 transition-transform hover:-translate-y-px"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={100}
            height={100}
            unoptimized
            priority
            className="size-12 shrink-0 object-contain sm:size-[clamp(3.5rem,8.4vw,5.25rem)]"
          />



          {/* Width is set by the small second line; the big first line is justified to match it */}
          <div className="flex w-max min-w-0 flex-col gap-1 text-[1.1rem] sm:text-[clamp(1.25rem,2.6vw,1.75rem)]">
            <span className="block w-0 min-w-full whitespace-nowrap text-justify text-[18px] font-bold leading-[1.1] text-brand [text-align-last:justify] hc:text-white">
              Central Hindi Directorate Ministry of Education
            </span>
            <span className="whitespace-nowrap font-serif text-[12px] font-semibold uppercase leading-tight  text-brand-darker hc:text-white">
              Department of Higher Education · Government of India
            </span>
          </div>
        </Link>

        {/* Search, between the logos (own row below xl) */}
        <form
          role="search"
          action="/search"
          className="order-3 min-w-0 basis-full xl:order-none xl:mx-auto xl:max-w-md xl:flex-1 xl:basis-72"
        >
          <label htmlFor="site-search" className="sr-only">
            Search the website
          </label>
          <div className="flex items-stretch overflow-hidden rounded-full border-2 border-brand bg-white transition-shadow focus-within:ring-[3px] focus-within:ring-brand/25 hc:border-white hc:bg-black">
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Search…"
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted hc:text-white"
            />
            <button
              type="submit"
              aria-label="Search"
              className="grid w-11 place-items-center bg-brand text-white transition-colors hover:bg-brand-dark focus-visible:-outline-offset-4 hc:bg-white hc:text-black"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </button>
          </div>
        </form>

        {/* Side logos */}
        
      </div>
    </header>
  );
}