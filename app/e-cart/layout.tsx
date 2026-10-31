import type { ReactNode } from "react";
import { StoreProvider } from "@/lib/ecart/store";
import Toolbar from "@/components/ecart/ToolBar";
import SupportChat from "@/components/ecart/SupportChat";

export const metadata = { title: "E-Cart | Central Hindi Directorate" };

export default function EcartLayout({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <Toolbar />
      <div className="mx-auto max-w-7xl px-4 py-6">{children}</div>
      <SupportChat />
    </StoreProvider>
  );
}