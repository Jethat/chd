"use client";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, Tag } from "lucide-react";
import { useStore } from "@/lib/ecart/store";
import { CATEGORIES, type Category } from "@/lib/ecart/data";
import BookCard from "@/components/ecart/BookCard";
import { Empty, btnGhost, field } from "@/components/ecart/ui";

const PAGE = 8;
const SORTS = { relevance: "Relevance", "price-asc": "Price: low to high", "price-desc": "Price: high to low", newest: "Newest first", title: "Title A–Z" };

function Catalogue() {
  const { shop, promos } = useStore();
  const sp = useSearchParams();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Category | "">("");
  const [lang, setLang] = useState("");
  const [max, setMax] = useState(500);
  const [inStock, setInStock] = useState(false);
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [from, setFrom] = useState(2000);
  const [sort, setSort] = useState<keyof typeof SORTS>("relevance");
  const [page, setPage] = useState(1);
  const [panel, setPanel] = useState(false);

  useEffect(() => { setQ(sp.get("q") ?? ""); setCat((sp.get("cat") as Category) ?? ""); }, [sp]);
  useEffect(() => setPage(1), [q, cat, lang, max, inStock, author, isbn, from, sort]);

  const langs = [...new Set(shop.map((b) => b.language))];
  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    const r = shop.filter((b) =>
      (!cat || b.category === cat) && (!lang || b.language === lang) && b.price <= max && (!inStock || b.stock > 0) &&
      (!author || b.author.toLowerCase().includes(author.toLowerCase())) &&
      (!isbn || b.isbn.replace(/-/g, "").includes(isbn.replace(/-/g, ""))) && b.year >= from &&
      (!t || [b.title, b.titleHi, b.author, b.isbn, b.summary, ...b.tags].join(" ").toLowerCase().includes(t)));
    return [...r].sort((a, b) =>
      sort === "price-asc" ? a.price - b.price : sort === "price-desc" ? b.price - a.price :
      sort === "newest" ? b.createdAt.localeCompare(a.createdAt) : sort === "title" ? a.title.localeCompare(b.title) : b.ratingCount - a.ratingCount);
  }, [shop, q, cat, lang, max, inStock, author, isbn, from, sort]);

  const pages = Math.max(1, Math.ceil(list.length / PAGE));
  const view = list.slice((page - 1) * PAGE, page * PAGE);
  const dirty = !!(q || cat || lang || inStock || author || isbn) || max < 500 || from > 2000;
  const clear = () => { setQ(""); setCat(""); setLang(""); setMax(500); setInStock(false); setAuthor(""); setIsbn(""); setFrom(2000); };
  const promo = promos.find((p) => p.active);
  const pill = "rounded-full border px-4 py-1.5 text-sm font-medium transition";

  return (
    <div>
      <div className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-darker via-brand-dark to-brand p-6 text-white md:p-8">
        <h1 className="text-2xl font-bold md:text-3xl">CHD Publications</h1>
        <p className="mt-1 max-w-xl text-sm text-white/85">Lexicons, self-taught courses, magazines and conversation guides from the Central Hindi Directorate, delivered to your door.</p>
        {promo && <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm"><Tag size={15} /> Use <b>{promo.code}</b> for {promo.percent}% off{promo.minOrder > 0 && ` above ₹${promo.minOrder}`}</p>}
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        <button onClick={() => setCat("")} className={`${pill} ${!cat ? "border-brand bg-brand text-white" : "border-line bg-white text-ink hover:border-brand"}`}>All</button>
        {CATEGORIES.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`${pill} ${cat === c ? "border-brand bg-brand text-white" : "border-line bg-white text-ink hover:border-brand"}`}>
            {c} <span className="opacity-60">({shop.filter((b) => b.category === c).length})</span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[250px_1fr]">
        <aside className={`${panel ? "block" : "hidden"} space-y-5 self-start rounded-2xl border border-line bg-white p-5 lg:sticky lg:top-16 lg:block`}>
          <div className="flex items-center justify-between"><h2 className="font-semibold text-ink">Filters</h2>{dirty && <button onClick={clear} className="text-xs font-medium text-brand hover:underline">Clear all</button>}</div>
          <label className="block text-sm"><span className="mb-1 block font-medium">Search</span><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Title, author, keyword" className={field} /></label>
          <label className="block text-sm"><span className="mb-1 block font-medium">Language</span>
            <select value={lang} onChange={(e) => setLang(e.target.value)} className={field}><option value="">Any</option>{langs.map((l) => <option key={l}>{l}</option>)}</select></label>
          <label className="block text-sm"><span className="mb-1 flex justify-between font-medium">Max price <b className="text-brand-dark">₹{max}</b></span>
            <input type="range" min={50} max={500} step={10} value={max} onChange={(e) => setMax(+e.target.value)} className="w-full accent-brand" /></label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} className="size-4 accent-brand" /> In stock only</label>
          <details className="rounded-lg border border-line p-3 text-sm">
            <summary className="cursor-pointer font-medium text-brand-dark">Advanced search</summary>
            <div className="mt-3 space-y-3">
              <label className="block"><span className="mb-1 block">Author</span><input value={author} onChange={(e) => setAuthor(e.target.value)} className={field} /></label>
              <label className="block"><span className="mb-1 block">ISBN</span><input value={isbn} onChange={(e) => setIsbn(e.target.value)} className={field} /></label>
              <label className="block"><span className="mb-1 block">Published from year</span><input type="number" min={1990} max={2030} value={from} onChange={(e) => setFrom(+e.target.value || 2000)} className={field} /></label>
            </div>
          </details>
        </aside>

        <section>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted"><b className="text-ink">{list.length}</b> {list.length === 1 ? "book" : "books"} found</p>
            <div className="flex items-center gap-2">
              <button onClick={() => setPanel(!panel)} className={`${btnGhost} lg:hidden`}><SlidersHorizontal size={15} /> Filters</button>
              <label className="sr-only" htmlFor="sort">Sort by</label>
              <select id="sort" value={sort} onChange={(e) => setSort(e.target.value as keyof typeof SORTS)} className={`${field} !w-auto`}>
                {Object.entries(SORTS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
              </select>
            </div>
          </div>

          {view.length === 0 ? (
            <Empty title="No books match your search" text="Try removing a filter or searching a different word."><button onClick={clear} className={btnGhost}>Clear filters</button></Empty>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{view.map((b) => <BookCard key={b.id} book={b} />)}</div>
          )}

          {pages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button disabled={page === 1} onClick={() => setPage(page - 1)} className={btnGhost}>Previous</button>
              <span className="text-sm text-muted">Page {page} of {pages}</span>
              <button disabled={page === pages} onClick={() => setPage(page + 1)} className={btnGhost}>Next</button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default function Page() {
  return <Suspense fallback={null}><Catalogue /></Suspense>;
}