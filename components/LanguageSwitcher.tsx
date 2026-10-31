"use client";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { Languages, ChevronDown } from "lucide-react";

// Free whole-page translation using the Google Translate website widget (no API key).
const LANGS = [
  { code: "en", native: "English", name: "English" },
  { code: "hi", native: "हिन्दी", name: "Hindi" },
];

const readLang = () => {
  const m = document.cookie.match(/(?:^|; )googtrans=\/[^/]*\/([^;]+)/);
  return m ? decodeURIComponent(m[1]) : "en";
};

const chooseLang = (code: string) => {
  const host = location.hostname;
  const gone = "expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  if (code === "en") {
    document.cookie = `googtrans=; ${gone}`;
    document.cookie = `googtrans=; ${gone}; domain=${host}`;
  } else {
    document.cookie = `googtrans=/en/${code}; path=/`;
    document.cookie = `googtrans=/en/${code}; path=/; domain=${host}`;
  }
  location.reload();
};

// Google rewrites text nodes, which can make React throw when it later updates them.
// These guards make React ignore nodes that were moved by the translator.
function guardDom() {
  const w = window as any;
  if (w.__gtGuard) return;
  w.__gtGuard = true;
  const rm = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child;
    return rm.call(this, child) as T;
  };
  const ib = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(this: Node, node: T, ref: Node | null): T {
    if (ref && ref.parentNode !== this) return node;
    return ib.call(this, node, ref) as T;
  };
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [ready, setReady] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    guardDom();
    setLang(readLang());
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: LANGS.filter((l) => l.code !== "en").map((l) => l.code).join(","),
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
    setReady(true);

    const onDown = (e: MouseEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  return (
    <div className="lang notranslate" translate="no" ref={box}>
      <button className="chip" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <Languages size={15} aria-hidden /> {current.native} <ChevronDown size={14} aria-hidden />
      </button>

      {open && (
        <div className="lang-menu" role="menu" aria-label="Select language">
          {LANGS.map((l) => (
            <button
              key={l.code}
              role="menuitemradio"
              aria-checked={l.code === lang}
              onClick={() => (l.code === lang ? setOpen(false) : chooseLang(l.code))}
            >
              <span>{l.native}</span>
              <small>{l.name}</small>
            </button>
          ))}
        </div>
      )}

      {/* Hidden host required by the Google widget */}
      <div id="google_translate_element" className="gt-host" aria-hidden="true" />
      {ready && (
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      )}
    </div>
  );
}