"use client";
import { useState } from "react";
import Link from "next/link";
import { Heart, Minus, Plus, Tag, Trash2, Truck } from "lucide-react";
import { useStore } from "@/lib/ecart/store";
import { SHIP_FREE_ABOVE, money } from "@/lib/ecart/utils";
import BookCover from "@/components/ecart/BookCover";
import { Empty, btn, btnGhost, card, field } from "@/components/ecart/ui";

export default function CartPage() {
  const { user, quote, setQty, removeFromCart, toggleWish, wishlist, applyCoupon, removeCoupon, coupon } = useStore();
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");

  if (!user)
    return <Empty title="Please log in" text="Log in with a one-time password to use your cart. You can keep browsing as a guest."><Link href="/e-cart/login?next=/e-cart/cart" className={btn}>Log in</Link><Link href="/e-cart" className={btnGhost}>Browse books</Link></Empty>;
  if (!quote.lines.length)
    return <Empty title="Your cart is empty" text="Explore the catalogue and add the books you like."><Link href="/e-cart" className={btn}>Browse books</Link></Empty>;

  const net = quote.subtotal - quote.discount;
  const toFree = Math.max(0, SHIP_FREE_ABOVE - net);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div>
        <h1 className="mb-4 text-2xl font-bold text-brand-dark">Shopping cart ({quote.count})</h1>
        <div className={`${card} mb-4 p-4`}>
          <p className="flex items-center gap-2 text-sm text-ink"><Truck size={16} className="text-brand" />{toFree > 0 ? <>Add <b>{money(toFree)}</b> more for free shipping</> : "You’ve unlocked free shipping"}</p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-line"><div className="h-full rounded-full bg-brand transition-all" style={{ width: `${Math.min(100, (net / SHIP_FREE_ABOVE) * 100)}%` }} /></div>
        </div>
        <ul className="space-y-3">
          {quote.lines.map(({ book, qty }) => (
            <li key={book.id} className={`${card} flex gap-4 p-4`}>
              <Link href={`/e-cart/book/${book.id}`} className="w-20 shrink-0"><BookCover book={book} /></Link>
              <div className="flex min-w-0 flex-1 flex-col">
                <Link href={`/e-cart/book/${book.id}`} className="font-semibold text-ink hover:text-brand">{book.title}</Link>
                <p lang="hi" className="notranslate text-xs text-muted">{book.titleHi}</p>
                <p className="mt-1 text-sm text-muted">{money(book.price)} each</p>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-3">
                  <div className="flex items-center rounded-full border border-line">
                    <button aria-label="Decrease quantity" onClick={() => setQty(book.id, qty - 1)} className="grid size-8 place-items-center text-brand"><Minus size={14} /></button>
                    <span className="w-7 text-center text-sm font-semibold">{qty}</span>
                    <button aria-label="Increase quantity" disabled={qty >= book.stock} onClick={() => setQty(book.id, qty + 1)} className="grid size-8 place-items-center text-brand disabled:opacity-40"><Plus size={14} /></button>
                  </div>
                  <button onClick={() => { if (!wishlist.includes(book.id)) toggleWish(book.id); removeFromCart(book.id); }} className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"><Heart size={14} /> Save for later</button>
                  <button onClick={() => removeFromCart(book.id)} className="inline-flex items-center gap-1 text-xs font-medium text-red-700 hover:underline"><Trash2 size={14} /> Remove</button>
                </div>
              </div>
              <p className="font-bold text-brand-dark">{money(book.price * qty)}</p>
            </li>
          ))}
        </ul>
      </div>

      <aside className={`${card} h-fit space-y-4 p-5 lg:sticky lg:top-16`}>
        <h2 className="font-semibold text-ink">Order summary</h2>
        {coupon && quote.promo ? (
          <p className="flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-800"><span className="flex items-center gap-2"><Tag size={14} /> {quote.promo.code} applied</span><button onClick={removeCoupon} className="text-xs underline">Remove</button></p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); const r = applyCoupon(code); setMsg(r.ok ? "" : r.error ?? ""); if (r.ok) setCode(""); }} className="flex gap-2">
            <label htmlFor="coupon" className="sr-only">Coupon code</label>
            <input id="coupon" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Coupon code" className={`${field} uppercase`} />
            <button className={btnGhost}>Apply</button>
          </form>
        )}
        {msg && <p role="alert" className="text-xs text-red-600">{msg}</p>}
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between"><dt className="text-muted">Subtotal</dt><dd>{money(quote.subtotal)}</dd></div>
          {quote.discount > 0 && <div className="flex justify-between text-emerald-700"><dt>Discount</dt><dd>−{money(quote.discount)}</dd></div>}
          <div className="flex justify-between"><dt className="text-muted">Shipping</dt><dd>{quote.shipping ? money(quote.shipping) : "Free"}</dd></div>
          <div className="flex justify-between border-t border-line pt-3 text-base font-bold text-brand-dark"><dt>Total</dt><dd>{money(quote.total)}</dd></div>
        </dl>
        <Link href="/e-cart/checkout" className={`${btn} w-full`}>Proceed to checkout</Link>
      </aside>
    </div>
  );
}