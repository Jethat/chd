import Image from "next/image";
import Reveal from "@/components/Reveal";
import { logos, type Logo } from "@/data/logos";

/** Copies of the logo list in the track. The track slides by half its width, so this must be an even number. */
const GROUPS = 4;
/** Seconds each logo takes to pass. Raise for a slower scroll. */
const SECONDS_PER_LOGO = 6;

function Item({ l, dup }: { l: Logo; dup: boolean }) {
  const img = (
    <Image
      src={l.src}
      alt={dup ? "" : l.alt}
      width={180}
      height={84}
      unoptimized
      className="h-12 w-auto max-w-none object-contain opacity-60 grayscale transition duration-300 group-hover/item:opacity-100 group-hover/item:grayscale-0 sm:h-20 hc:rounded hc:bg-white hc:p-1.5 hc:opacity-100 hc:grayscale-0"
    />
  );
  return l.href ? (
    <a href={l.href} target="_blank" rel="noopener noreferrer" tabIndex={dup ? -1 : undefined} className="group/item block shrink-0">
      {img}
      {!dup && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  ) : (
    <div className="group/item shrink-0">{img}</div>
  );
}

export default function LogoMarquee() {
  return (
    <section aria-label="Partner organisations" className="border-y border-line bg-white py-8 sm:py-10 hc:border-white hc:bg-black">
    
        <div className="group/logos overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
          <div
            style={{ animationDuration: `${logos.length * SECONDS_PER_LOGO}s` }}
            className="flex w-max animate-marquee-left group-focus-within/logos:[animation-play-state:paused] group-hover/logos:[animation-play-state:paused] motion-reduce:animate-none"
          >
            {Array.from({ length: GROUPS }, (_, g) => (
              <ul
                key={g}
                aria-hidden={g > 0 || undefined}
                className={`flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16 ${g > 0 ? "motion-reduce:hidden" : ""}`}
              >
                {logos.map((l) => (
                  <li key={l.alt}>
                    <Item l={l} dup={g > 0} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      
    </section>
  );
}