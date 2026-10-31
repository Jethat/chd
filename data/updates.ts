export interface Update {
  title: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  href: string;
  /** Opens in a new tab (use for PDFs and other websites) */
  external?: boolean;
}

export const latestUpdates: Update[] = [
  { title: "Applications invited for correspondence courses: new session", date: "2026-10-28", href: "#" },
  { title: "Notice regarding grants under the voluntary organisations scheme", date: "2026-10-22", href: "#" },
  { title: "Hindi Bhasha Varsiki: call for contributions", date: "2026-10-15", href: "#" },
  { title: "Recruitment notice: contractual positions at the Directorate", date: "2026-10-09", href: "#", external: true },
  { title: "New publication released: Travel Hindi Conversation Guide", date: "2026-09-30", href: "/e-cart/book/9" },
  { title: "Annual report 2025–26 now available", date: "2026-09-18", href: "#", external: true },
];