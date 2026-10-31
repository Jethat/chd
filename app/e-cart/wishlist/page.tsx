"use client";
import Link from "next/link";
import { useStore } from "@/lib/ecart/store";
import BookCard from "@/components/ecart/BookCard";
import { Empty, btn, btnGhost } from "@/components/ecart/ui";

export default function Wishlist() {
  const { user, wishlist, allBooks, addToCart, toggleWish } = useStore();
  if (!user) return <Empty title="Please log in" text="Log in to save books to your wishlist."><Link href="/e-cart/login?next=/e-cart/wishlist" className={btn}>Log in</Link></Empty>;
  const books = allBooks.filter((b) => wishlist.includes(b.id) && b.status === "published");
  if (!books.length) return <Empty title="Your wishlist is empty" text="Tap the heart on any book to save it for later."><Link href="/e-cart" className={btn}>Browse books</Link></Empty>;
  const moveAll = () => books.filter((b) => b.stock > 0).forEach((b) => { addToCart(b.id); toggleWish(b.id); });
  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-brand-dark">Wishlist ({books.length})</h1>
        <button onClick={moveAll} className={btnGhost}>Move all in-stock to cart</button>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{books.map((b) => <BookCard key={b.id} book={b} />)}</div>
    </div>
  );
}