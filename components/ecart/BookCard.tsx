"use client";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import type { Book } from "@/lib/ecart/data";
import { useGuard, useStore } from "@/lib/ecart/store";
import { money } from "@/lib/ecart/utils";
import BookCover from "./BookCover";
import { Rating, StockBadge, btn, card } from "./ui";

export default function BookCard({ book }: { book: Book }) {
  const { addToCart, wishlist, toggleWish } = useStore();
  const guard = useGuard();
  const saved = wishlist.includes(book.id);
  const off = Math.round((1 - book.price / book.mrp) * 100);
  const href = `/e-cart/book/${book.id}`;
  return (
    <article className={`${card} group flex flex-col overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-lg`}>
      <Link href={href} className="block bg-brand-light p-4">
        <BookCover book={book} className="mx-auto max-w-[170px] transition group-hover:scale-[1.03]" />
      </Link>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <Link href={href} className="line-clamp-2 text-sm font-semibold text-ink hover:text-brand">{book.title}</Link>
        <p lang="hi" className="notranslate line-clamp-1 text-xs text-muted">{book.titleHi}</p>
        <Rating value={book.rating} count={book.ratingCount} />
        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <p>
            <span className="text-lg font-bold text-brand-dark">{money(book.price)}</span>
            <span className="ml-1.5 text-xs text-muted line-through">{money(book.mrp)}</span>
            {off > 0 && <span className="ml-1.5 text-xs font-semibold text-emerald-700">{off}% off</span>}
          </p>
          <StockBadge stock={book.stock} />
        </div>
        <div className="mt-3 flex gap-2">
          <button disabled={book.stock === 0} onClick={() => guard(() => addToCart(book.id))} className={`${btn} flex-1`}>
            <ShoppingCart size={16} /> Add to cart
          </button>
          <button
            aria-pressed={saved}
            aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
            onClick={() => guard(() => toggleWish(book.id))}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-brand transition hover:bg-brand-light"
          >
            <Heart size={18} className={saved ? "fill-brand" : ""} />
          </button>
        </div>
      </div>
    </article>
  );
}