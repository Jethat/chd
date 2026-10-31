"use client";
import { useState } from "react";
import { ImagePlus, Pencil, Plus, X } from "lucide-react";
import { useStore } from "@/lib/ecart/store";
import { CATEGORIES, type Book, type BookStatus } from "@/lib/ecart/data";
import { money, resizeImage } from "@/lib/ecart/utils";
import BookCover from "../BookCover";
import { Field, btn, btnGhost, card, field } from "../ui";

const TONE: Record<BookStatus, string> = { draft: "bg-gray-100 text-gray-700", review: "bg-amber-50 text-amber-700", approved: "bg-blue-50 text-blue-700", published: "bg-emerald-50 text-emerald-700" };
const label = (from: BookStatus, to: BookStatus) =>
  to === "draft" ? "Send back" : from === "published" ? "Unpublish" : ({ review: "Submit for review", approved: "Approve", published: "Publish" } as const)[to as "review" | "approved" | "published"];
const blank = (id: string): Book => ({
  id, title: "", titleHi: "", author: "Central Hindi Directorate", category: "Lexicons", language: "Hindi–English",
  price: 0, mrp: 0, stock: 0, isbn: "", year: new Date().getFullYear(), pages: 100, rating: 0, ratingCount: 0,
  summary: "", tags: [], hue: 350, status: "draft", createdAt: new Date().toISOString().slice(0, 10),
});

function BookForm({ book, onClose }: { book: Book; onClose: () => void }) {
  const { user, saveBook } = useStore();
  const [b, setB] = useState<Book>(book);
  const [tags, setTags] = useState(book.tags.join(", "));
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [err, setErr] = useState("");
  const lock = user?.role === "publisher"; // publishers may change price and stock only
  const set = <K extends keyof Book>(k: K, v: Book[K]) => setB((x) => ({ ...x, [k]: v }));
  const f = `${field} disabled:bg-gray-50 disabled:text-muted`;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (b.title.trim().length < 3) er.title = "Enter the title.";
    if (b.summary.trim().length < 20) er.summary = "Write a summary of at least 20 characters.";
    if (!(b.price > 0)) er.price = "Enter a price above 0.";
    if (b.mrp < b.price) er.mrp = "MRP can’t be lower than the price.";
    if (!Number.isInteger(b.stock) || b.stock < 0) er.stock = "Stock must be a whole number, 0 or more.";
    setErrs(er);
    if (Object.keys(er).length) return;
    const r = saveBook({ ...b, tags: tags.split(",").map((t) => t.trim()).filter(Boolean) });
    if (r.ok) onClose(); else setErr(r.error ?? "");
  };

  return (
    <div role="dialog" aria-modal="true" aria-label="Book details" className="fixed inset-0 z-[80] overflow-y-auto bg-black/50 p-4">
      <form onSubmit={submit} noValidate className={`${card} mx-auto my-6 max-w-3xl p-6`}>
        <div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-semibold text-brand-dark">{book.title ? "Edit book" : "New book"}</h2><button type="button" onClick={onClose} aria-label="Close"><X /></button></div>
        {lock && <p className="mb-4 rounded-lg bg-amber-50 p-3 text-xs text-amber-800">As publisher you can change price, MRP and stock. Other fields belong to the creator.</p>}
        <div className="grid gap-4 sm:grid-cols-[130px_1fr]">
          <div className="space-y-3">
            <BookCover book={b} />
            <label className={`${btnGhost} w-full cursor-pointer !px-3 text-xs`}>
              <ImagePlus size={15} /> {b.cover ? "Replace cover" : "Upload cover"}
              <input type="file" accept="image/*" hidden disabled={lock} onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                try { set("cover", await resizeImage(file)); } catch { setErr("That file isn’t a valid image."); }
              }} />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2"><Field label="Title (English)" err={errs.title}><input disabled={lock} value={b.title} onChange={(e) => set("title", e.target.value)} className={f} /></Field></div>
            <div className="sm:col-span-2"><Field label="Title (Hindi)"><input disabled={lock} value={b.titleHi} onChange={(e) => set("titleHi", e.target.value)} className={f} lang="hi" /></Field></div>
            <Field label="Author"><input disabled={lock} value={b.author} onChange={(e) => set("author", e.target.value)} className={f} /></Field>
            <Field label="Category"><select disabled={lock} value={b.category} onChange={(e) => set("category", e.target.value as Book["category"])} className={f}>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}</select></Field>
            <Field label="Price (₹)" err={errs.price}><input type="number" min={0} value={b.price} onChange={(e) => set("price", +e.target.value)} className={field} /></Field>
            <Field label="MRP (₹)" err={errs.mrp}><input type="number" min={0} value={b.mrp} onChange={(e) => set("mrp", +e.target.value)} className={field} /></Field>
            <Field label="Stock" err={errs.stock}><input type="number" min={0} value={b.stock} onChange={(e) => set("stock", +e.target.value)} className={field} /></Field>
            <Field label="Language"><input disabled={lock} value={b.language} onChange={(e) => set("language", e.target.value)} className={f} /></Field>
            <Field label="ISBN"><input disabled={lock} value={b.isbn} onChange={(e) => set("isbn", e.target.value)} className={f} /></Field>
            <Field label="Year / Pages"><span className="flex gap-2"><input disabled={lock} type="number" value={b.year} onChange={(e) => set("year", +e.target.value)} className={f} /><input disabled={lock} type="number" value={b.pages} onChange={(e) => set("pages", +e.target.value)} className={f} /></span></Field>
            <div className="sm:col-span-2"><Field label="Summary" err={errs.summary}><textarea disabled={lock} rows={3} value={b.summary} onChange={(e) => set("summary", e.target.value)} className={f} /></Field></div>
            <div className="sm:col-span-2"><Field label="Tags (comma separated)"><input disabled={lock} value={tags} onChange={(e) => setTags(e.target.value)} className={f} /></Field></div>
          </div>
        </div>
        {err && <p role="alert" className="mt-4 text-sm text-red-600">{err}</p>}
        <div className="mt-6 flex justify-end gap-3"><button type="button" onClick={onClose} className={btnGhost}>Cancel</button><button className={btn}>Save</button></div>
      </form>
    </div>
  );
}

export default function BooksManager() {
  const { user, allBooks, moves, moveBook } = useStore();
  const [edit, setEdit] = useState<Book | null>(null);
  const [filter, setFilter] = useState<BookStatus | "">("");
  const [q, setQ] = useState("");
  const [msg, setMsg] = useState("");
  const role = user?.role;
  const canEdit = (b: Book) => role === "publisher" || (role === "creator" && b.status === "draft");
  const rows = allBooks.filter((b) => (!filter || b.status === filter) && b.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        {(["", "draft", "review", "approved", "published"] as const).map((s) => (
          <button key={s} onClick={() => setFilter(s)} className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${filter === s ? "border-brand bg-brand text-white" : "border-line"}`}>
            {s || "All"} ({s ? allBooks.filter((b) => b.status === s).length : allBooks.length})
          </button>
        ))}
        <label className="sr-only" htmlFor="bk-q">Search books</label>
        <input id="bk-q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" className={`${field} !w-48`} />
        {role === "creator" && <button onClick={() => setEdit(blank(String(Math.max(0, ...allBooks.map((b) => +b.id || 0)) + 1)))} className={`${btn} ml-auto`}><Plus size={16} /> Add book</button>}
      </div>
      {msg && <p role="alert" className="mb-3 text-sm text-red-600">{msg}</p>}

      <div className={`${card} overflow-x-auto`}>
        <table className="w-full min-w-[720px] text-sm">
          <thead><tr className="border-b border-line bg-brand-light text-left text-xs uppercase text-brand-dark"><th className="p-3">Book</th><th className="p-3">Category</th><th className="p-3 text-right">Price</th><th className="p-3 text-right">Stock</th><th className="p-3">Status</th><th className="p-3">Actions</th></tr></thead>
          <tbody>
            {rows.map((b) => (
              <tr key={b.id} className="border-b border-line last:border-0">
                <td className="p-3"><div className="flex items-center gap-3"><BookCover book={b} className="w-9 !p-1" /><div><p className="font-medium text-ink">{b.title}</p><p lang="hi" className="notranslate text-xs text-muted">{b.titleHi}</p></div></div></td>
                <td className="p-3 text-muted">{b.category}</td>
                <td className="p-3 text-right">{money(b.price)}</td>
                <td className={`p-3 text-right font-semibold ${b.stock === 0 ? "text-red-600" : b.stock <= 10 ? "text-amber-600" : ""}`}>{b.stock}</td>
                <td className="p-3"><span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${TONE[b.status]}`}>{b.status}</span></td>
                <td className="p-3">
                  <div className="flex flex-wrap gap-2">
                    {canEdit(b) && <button onClick={() => setEdit(b)} className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"><Pencil size={13} /> Edit</button>}
                    {moves(b).map((to) => (
                      <button key={to} onClick={() => { const r = moveBook(b.id, to); setMsg(r.ok ? "" : r.error ?? ""); }}
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${to === "draft" ? "border border-line text-muted hover:bg-gray-50" : "bg-brand text-white hover:bg-brand-dark"}`}>{label(b.status, to)}</button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
            {!rows.length && <tr><td colSpan={6} className="p-8 text-center text-muted">No books match.</td></tr>}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted">Workflow: Creator submits → Reviewer or Approver approves → Publisher publishes. Every step is recorded in the audit trail.</p>
      {edit && <BookForm book={edit} onClose={() => setEdit(null)} />}
    </div>
  );
}