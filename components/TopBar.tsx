"use client";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function TopBar() {
  const [size, setSize] = useState<number>(16);

  const changeSize = (next: number) => {
    const v = Math.min(20, Math.max(14, next));
    setSize(v);
    document.documentElement.style.fontSize = `${v}px`;
  };

  return (
    <div className="bg-brand-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-semibold">Government of India</span>
          <span className="hidden text-white/80 sm:inline">Ministry of Education</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a href="#main" className="hover:underline">Skip to Main Content</a>
          <span className="text-white/40">|</span>
          <a href="#" className="hover:underline">Screen Reader Access</a>
          <span className="text-white/40">|</span>

          <div className="flex items-center gap-1" aria-label="Text size controls">
            <button onClick={() => changeSize(size - 1)} className="chip" aria-label="Decrease text size">A-</button>
            <button onClick={() => changeSize(16)} className="chip" aria-label="Reset text size">A</button>
            <button onClick={() => changeSize(size + 1)} className="chip" aria-label="Increase text size">A+</button>
          </div>

          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}