import type { Book } from "@/lib/ecart/data";

/** Uses the uploaded cover when there is one, otherwise a generated cover. */
export default function BookCover({ book, className = "" }: { book: Book; className?: string }) {
  if (book.cover)
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={book.cover} alt={`Cover of ${book.title}`} className={`aspect-[3/4] rounded-md object-cover shadow-md ${className}`} />;
  return (
    <div
      role="img"
      aria-label={`Cover of ${book.title}`}
      style={{ background: `linear-gradient(160deg, hsl(${book.hue} 55% 38%), hsl(${(book.hue + 20) % 360} 60% 20%))` }}
      className={`relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-md p-3 text-white shadow-md ${className}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-widest text-white/70">{book.category}</span>
      <div>
        <p lang="hi" className="notranslate text-lg font-bold leading-snug">{book.titleHi}</p>
        <p className="mt-1 text-[11px] leading-tight text-white/80">{book.title}</p>
      </div>
      <span className="text-[9px] uppercase tracking-wider text-white/60">Central Hindi Directorate</span>
      <span aria-hidden className="absolute -right-6 -top-6 size-24 rounded-full border-[10px] border-white/10" />
    </div>
  );
}