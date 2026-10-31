"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, Download, Heart, Minus, Plus, ShoppingCart, Zap } from "lucide-react";
import { useGuard, useStore } from "@/lib/ecart/store";
import { download, makeSamplePdf, money, wrap } from "@/lib/ecart/utils";
import BookCover from "@/components/ecart/BookCover";
import BookCard from "@/components/ecart/BookCard";
import { Empty, Rating, StockBadge, btn, btnGhost, card } from "@/components/ecart/ui";

export default function BookPage() {
  const { id } = useParams<{ id: string }>();
  const { allBooks, shop, staff, ready, addToCart, wishlist, toggleWish } = useStore();
  const guard = useGuard();
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const book = allBooks.find((b) => b.id === id);

  if (!ready) return <div className="h-96 animate-pulse rounded-2xl bg-brand-light" />;
  if (!book || (book.status !== "published" && !staff))
    return <Empty title="Book not found" text="This title isn’t available."><Link href="/e-cart" className={btn}>Back to catalogue</Link></Empty>;

  const off = Math.round((1 - book.price / book.mrp) * 100);
  const saved = wishlist.includes(book.id);
  const related = shop.filter((b) => b.category === book.category && b.id !== book.id).slice(0, 4);
  const sample = () => download(
    makeSamplePdf(`Sample chapter: ${book.title}`, [
      `Category: ${book.category}   Pages: ${book.pages}   ISBN: ${book.isbn}`, "",
      ...wrap(book.summary), "",
      ...wrap("This is a sample extract provided by the Central Hindi Directorate. Purchase the full book from the CHD E-Cart."),
    ]), `${book.id}-sample-chapter.pdf`);
  const specs: [string, string][] = [["Category", book.category], ["Language", book.language], ["Author", book.author], ["ISBN", book.isbn], ["Year", String(book.year)], ["Pages", String(book.pages)]];

  return (
    <div>
      <Link href="/e-cart" className="mb-4 inline-flex items-center gap-1 text-sm text-muted hover:text-brand"><ChevronLeft size={16} /> All books</Link>
      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <div className="rounded-2xl bg-brand-light p-8"><BookCover book={book} className="mx-auto max-w-[240px] shadow-xl" /></div>
        <div>
          {book.status !== "published" && <p className="mb-2 inline-block rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold uppercase text-amber-800">Preview · {book.status}</p>}
          <h1 className="text-2xl font-bold text-brand-dark md:text-3xl">{book.title}</h1>
          <p lang="hi" className="notranslate mt-1 text-lg text-muted">{book.titleHi}</p>
          <div className="mt-2 flex items-center gap-3"><Rating value={book.rating} count={book.ratingCount} /><StockBadge stock={book.stock} /></div>
          <p className="mt-4"><span className="text-3xl font-bold text-brand-dark">{money(book.price)}</span><span className="ml-2 text-muted line-through">{money(book.mrp)}</span>{off > 0 && <span className="ml-2 font-semibold text-emerald-700">{off}% off</span>}</p>
          <p className="text-xs text-muted">Inclusive of all taxes. Free shipping above ₹500.</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink">{book.summary}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-full border border-line">
              <button aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))} className="grid size-10 place-items-center text-brand"><Minus size={16} /></button>
              <span className="w-8 text-center text-sm font-semibold" aria-live="polite">{qty}</span>
              <button aria-label="Increase quantity" onClick={() => setQty(Math.min(book.stock || 1, qty + 1))} className="grid size-10 place-items-center text-brand"><Plus size={16} /></button>
            </div>
            <button disabled={book.stock === 0} onClick={() => guard(() => addToCart(book.id, qty))} className={btn}><ShoppingCart size={16} /> Add to cart</button>
            <button disabled={book.stock === 0} onClick={() => guard(() => { addToCart(book.id, qty); router.push("/e-cart/checkout"); })} className={btnGhost}><Zap size={16} /> Buy now</button>
            <button aria-pressed={saved} aria-label="Toggle wishlist" onClick={() => guard(() => toggleWish(book.id))} className="grid size-10 place-items-center rounded-full border border-line text-brand hover:bg-brand-light"><Heart size={18} className={saved ? "fill-brand" : ""} /></button>
          </div>
          <button onClick={sample} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline"><Download size={16} /> Download sample chapter (PDF)</button>

          <dl className={`${card} mt-8 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-3 p-5 text-sm`}>
            {specs.map(([k, v]) => <div key={k}><dt className="text-xs text-muted">{k}</dt><dd className="font-medium text-ink">{v}</dd></div>)}
          </dl>
        </div>
      </div>
      {related.length > 0 && (
        <section className="mt-12"><h2 className="mb-4 text-xl font-semibold text-brand-dark">More in {book.category}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{related.map((b) => <BookCard key={b.id} book={b} />)}</div></section>
      )}
    </div>
  );
}