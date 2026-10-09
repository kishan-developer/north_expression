"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";

const STORAGE_KEY = "site-language";

const LANGUAGES = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिंदी" },
  // { code: "ar", label: "Arabic", native: "العربية" },
  // { code: "ur", label: "Urdu", native: "اردو" },
  // { code: "bn", label: "Bengali", native: "বাংলা" },
  { code: "de", label: "German", native: "Deutsch" },
  { code: "es", label: "Spanish", native: "Español" },
  { code: "nl", label: "Dutch", native: "Nederlands" },
  { code: "sv", label: "Swedish", native: "Svenska" },
  { code: "fr", label: "French", native: "Français" },

  { code: "it", label: "Italian", native: "Italiano" },
  { code: "pt", label: "Portuguese", native: "Português" },
  { code: "ru", label: "Russian", native: "Русский" },

  { code: "tr", label: "Turkish", native: "Türkçe" },
  // { code: "zh-CN", label: "Chinese (Simplified)", native: "简体中文" },
  // { code: "ja", label: "Japanese", native: "日本語" },
  // { code: "ko", label: "Korean", native: "한국어" },
];

const INCLUDED_LANGUAGES = LANGUAGES.map((l) => l.code).join(",");

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
  }
}

function setCookie(name: string, value: string, maxAge: number) {
  const hostname = window.location.hostname;
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
  if (hostname !== "localhost" && !/^\d{1,3}(\.\d{1,3}){3}$/.test(hostname)) {
    document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; domain=.${hostname}`;
  }
}

function clearGoogTransCookie() {
  const expired = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
  const hostname = window.location.hostname;
  document.cookie = `googtrans=; ${expired}; path=/;`;
  document.cookie = `googtrans=; ${expired}; path=/; domain=${hostname};`;
  document.cookie = `googtrans=; ${expired}; path=/; domain=.${hostname};`;
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || "en";
    setCurrent(saved);
    document.documentElement.lang = saved;

    if (saved !== "en") {
      // Restore the cookie so Google auto-translates the page on load
      setCookie("googtrans", `/en/${saved}`, 31536000);
    } else {
      clearGoogTransCookie();
    }

    window.googleTranslateElementInit = () => {
      if (!window.google) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: INCLUDED_LANGUAGES,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const changeLanguage = (code: string) => {
    setOpen(false);
    setCurrent(code);
    localStorage.setItem(STORAGE_KEY, code);
    document.documentElement.setAttribute("lang", code);

    if (code === "en") {
      // Reverting to the original language is most reliable with a reload
      clearGoogTransCookie();
      window.location.reload();
      return;
    }

    setCookie("googtrans", `/en/${code}`, 31536000);

    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      window.location.reload();
    }
  };

  const active = LANGUAGES.find((l) => l.code === current) || LANGUAGES[0];

  return (
    <div ref={containerRef} className="relative notranslate" translate="no">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-[#1e1e1e] hover:text-[#827469] transition notranslate"
        translate="no"
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="w-5 h-5" />
        <span className="hidden lg:inline text-sm font-medium notranslate" translate="no">
          {active.native}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          translate="no"
          className="absolute right-0 top-full mt-3 min-w-[220px] max-h-[340px] overflow-y-auto bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-2xl py-2 z-50 notranslate"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={lang.code === current}
              onClick={() => changeLanguage(lang.code)}
              className="w-full flex items-center justify-between px-5 py-2.5 text-[14px] text-gray-700 hover:bg-[#827469] hover:text-white transition-colors duration-200 notranslate"
              translate="no"
            >
              <span className="notranslate" translate="no">
                {lang.native}
                <span className="ml-2 text-xs opacity-60 notranslate" translate="no">{lang.label}</span>
              </span>
              {lang.code === current && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      )}

      {/* Hidden mount point for the Google Translate element */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />
    </div>
  );
}
