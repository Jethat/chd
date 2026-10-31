export type Category = "Lexicons" | "Self-taught" | "Magazines" | "Conversation Guides";
export const CATEGORIES: Category[] = ["Lexicons", "Self-taught", "Magazines", "Conversation Guides"];
export type BookStatus = "draft" | "review" | "approved" | "published";
export type Role = "customer" | "creator" | "reviewer" | "approver" | "publisher";
export type OrderStatus = "Placed" | "Confirmed" | "Packed" | "Shipped" | "Out for delivery" | "Delivered" | "Cancelled";
export const ORDER_FLOW: OrderStatus[] = ["Placed", "Confirmed", "Packed", "Shipped", "Out for delivery", "Delivered"];

export interface Book {
  id: string; title: string; titleHi: string; author: string; category: Category; language: string;
  price: number; mrp: number; stock: number; isbn: string; year: number; pages: number;
  rating: number; ratingCount: number; summary: string; tags: string[]; hue: number;
  status: BookStatus; createdAt: string; cover?: string;
}
export interface User { id: string; name: string; email?: string; mobile?: string; role: Role }
export interface CartLine { bookId: string; qty: number }
export interface Address { name: string; mobile: string; line1: string; city: string; state: string; pin: string }
export interface OrderItem { bookId: string; title: string; price: number; qty: number }
export interface Order {
  id: string; userId: string; items: OrderItem[]; subtotal: number; discount: number; shipping: number; total: number;
  coupon?: string; address: Address; payment: { method: string; label: string; ref: string };
  status: OrderStatus; history: { status: OrderStatus; ts: string }[]; createdAt: string;
}
export interface Notice { id: string; title: string; body: string; channels: ("App" | "SMS" | "Email")[]; ts: string; read: boolean; userId?: string }
export interface Promo { code: string; percent: number; minOrder: number; active: boolean }
export interface AuditEntry { id: string; ts: string; actor: string; role: Role; action: string; target: string }
export interface Ticket { id: string; name: string; email: string; subject: string; message: string; ts: string; userId?: string }

/* ---------- SAMPLE DATA: replace with your real catalogue / API ---------- */
const hues: Record<Category, number> = { Lexicons: 350, "Self-taught": 25, Magazines: 205, "Conversation Guides": 160 };
const mk = (id: string, title: string, titleHi: string, category: Category, price: number, stock: number, o: Partial<Book> = {}): Book => ({
  id, title, titleHi, category, price, stock,
  author: "Central Hindi Directorate", language: "Hindi–English", mrp: Math.round((price * 1.2) / 5) * 5,
  isbn: `978-81-9000-0${id.padStart(2, "0")}-0`, year: 2024, pages: 240, rating: 4.4, ratingCount: 120,
  summary: "A Central Hindi Directorate publication for learners, teachers and researchers of Hindi.",
  tags: [], hue: hues[category], status: "published", createdAt: "2026-09-01", ...o,
});

export const SEED_BOOKS: Book[] = [
  mk("1", "Hindi–English Lexicon (Pocket Edition)", "हिंदी–अंग्रेज़ी शब्दकोश (जेबी)", "Lexicons", 180, 40, { tags: ["dictionary", "pocket"], pages: 520, rating: 4.7, ratingCount: 342 }),
  mk("2", "Bilingual Technical Glossary", "तकनीकी शब्दावली", "Lexicons", 320, 18, { tags: ["glossary", "science"], pages: 680, year: 2023 }),
  mk("3", "Hindi Synonyms & Antonyms Dictionary", "पर्यायवाची–विलोम शब्दकोश", "Lexicons", 150, 0, { tags: ["synonyms"], language: "Hindi" }),
  mk("4", "Learn Hindi in 30 Days", "तीस दिन में हिंदी", "Self-taught", 220, 55, { tags: ["beginner", "course"], rating: 4.6, ratingCount: 289, createdAt: "2026-10-01" }),
  mk("5", "Devanagari Handwriting Workbook", "देवनागरी लेखन अभ्यास", "Self-taught", 120, 70, { tags: ["script", "workbook"], pages: 96 }),
  mk("6", "Hindi for Beginners: Audio Companion", "नवांकुर हिंदी", "Self-taught", 260, 25, { tags: ["audio", "beginner"], year: 2025 }),
  mk("7", "Bhasha (Quarterly Magazine)", "भाषा (त्रैमासिक पत्रिका)", "Magazines", 60, 120, { tags: ["magazine", "language"], language: "Hindi", pages: 96, createdAt: "2026-10-10" }),
  mk("8", "Hindi Sahitya Annual Issue", "हिंदी साहित्य वार्षिकांक", "Magazines", 90, 8, { tags: ["literature", "annual"], language: "Hindi", pages: 160 }),
  mk("9", "Travel Hindi Conversation Guide", "यात्रा में हिंदी बातचीत", "Conversation Guides", 140, 64, { tags: ["travel", "phrasebook"], pages: 128, createdAt: "2026-10-20" }),
  mk("10", "Office Hindi Conversation Guide", "कार्यालय हिंदी बातचीत", "Conversation Guides", 160, 33, { tags: ["office", "rajbhasha"], pages: 144 }),
  mk("11", "Everyday Hindi–Tamil Phrasebook", "दैनिक हिंदी–तमिल वार्तालाप", "Conversation Guides", 130, 41, { tags: ["tamil", "phrasebook"], language: "Hindi–Tamil", pages: 120 }),
  mk("12", "Rajbhasha Handbook", "राजभाषा पुस्तिका", "Self-taught", 175, 30, { tags: ["official language"], status: "review", createdAt: "2026-10-25" }),
];

export const SEED_PROMOS: Promo[] = [
  { code: "HINDI10", percent: 10, minOrder: 300, active: true },
  { code: "WELCOME5", percent: 5, minOrder: 0, active: true },
];

/** Demo staff accounts: log in with these emails (OTP shown on screen) to get a role. */
export const STAFF: Record<string, { name: string; role: Role }> = {
  "creator@chd.gov.in": { name: "Content Creator", role: "creator" },
  "reviewer@chd.gov.in": { name: "Content Reviewer", role: "reviewer" },
  "approver@chd.gov.in": { name: "Content Approver", role: "approver" },
  "publisher@chd.gov.in": { name: "Content Publisher", role: "publisher" },
};

export const FAQS = [
  { q: "How do I place an order?", a: "Log in with a one-time password, add books to your cart, then check out with UPI, Net Banking or a card. You can browse as a guest without logging in." },
  { q: "Which payment methods are accepted?", a: "UPI, Net Banking and Credit/Debit cards. Card details are never stored by the E-Cart." },
  { q: "What are the shipping charges?", a: "Shipping is free on orders of ₹500 and above. Otherwise a flat ₹40 applies." },
  { q: "How do I track my order?", a: "Open My Orders for a live status timeline. You also get App, SMS and email alerts as the order moves." },
  { q: "Can I cancel an order?", a: "Yes, until the order is packed. Open My Orders and choose Cancel. Refunds go to the original payment method." },
  { q: "Where do I find my invoice?", a: "Every order has a View invoice button in My Orders. Print it or save it as a PDF." },
  { q: "Can I read a sample before buying?", a: "Yes. Every book page has a Download sample chapter button." },
];