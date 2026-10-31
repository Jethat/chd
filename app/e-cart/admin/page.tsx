"use client";
import { useState } from "react";
import Link from "next/link";
import { BarChart3, BellRing, BookOpen, ClipboardList, History, Tag, Users } from "lucide-react";
import { useStore } from "@/lib/ecart/store";
import { Empty, btn } from "@/components/ecart/ui";
import Dashboard from "@/components/ecart/admin/Dashboard";
import BooksManager from "@/components/ecart/admin/BooksManager";
import Promotions from "@/components/ecart/admin/Promotions";
import OrdersAdmin from "@/components/ecart/admin/OrdersAdmin";
import Roles from "@/components/ecart/admin/Roles";
import Notify from "@/components/ecart/admin/Notify";
import AuditLog from "@/components/ecart/admin/AuditLog";

const TABS = [
  ["Dashboard", BarChart3, Dashboard], ["Books (CMS)", BookOpen, BooksManager], ["Promotions", Tag, Promotions],
  ["Orders", ClipboardList, OrdersAdmin], ["Roles", Users, Roles], ["Notifications", BellRing, Notify], ["Audit trail", History, AuditLog],
] as const;

const CAPS = {
  creator: "Create and edit draft books, then submit them for review.",
  reviewer: "Review submitted books, then approve them or send them back.",
  approver: "Approve or send back books, manage promotions, send notifications.",
  publisher: "Publish and unpublish, edit price and stock, update orders, manage promotions, roles and notifications.",
  customer: "",
} as const;

export default function Admin() {
  const { user, staff, ready } = useStore();
  const [tab, setTab] = useState(0);
  if (!ready) return null;
  if (!staff || !user)
    return (
      <Empty title="Staff access only" text="Log in with a staff account. In this demo: creator@, reviewer@, approver@ or publisher@chd.gov.in.">
        <Link href="/e-cart/login?next=/e-cart/admin" className={btn}>Staff login</Link>
      </Empty>
    );
  const View = TABS[tab][2];
  return (
    <div>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3 print:hidden">
        <div>
          <h1 className="text-2xl font-bold text-brand-dark">E-Cart admin</h1>
          <p className="text-sm text-muted"><span className="mr-2 rounded bg-brand-light px-2 py-0.5 text-xs font-bold uppercase text-brand-dark">{user.role}</span>{CAPS[user.role]}</p>
        </div>
      </div>
      <nav aria-label="Admin sections" className="mb-6 flex gap-1 overflow-x-auto border-b border-line print:hidden">
        {TABS.map(([label, Icon], i) => (
          <button key={label} onClick={() => setTab(i)} aria-current={tab === i}
            className="flex shrink-0 items-center gap-2 border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-muted transition hover:text-brand aria-[current=true]:border-brand aria-[current=true]:text-brand-dark">
            <Icon size={16} /> {label}
          </button>
        ))}
      </nav>
      <View />
    </div>
  );
}