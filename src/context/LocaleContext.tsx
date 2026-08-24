"use client";

import { createContext, useCallback, useContext, useEffect, type ReactNode } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export type Locale = "ru" | "uz";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);
const STORAGE_KEY = "ibrox-locale";
const DEFAULT_LOCALE: Locale = "ru";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useLocalStorage<Locale>(STORAGE_KEY, DEFAULT_LOCALE);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "ru" ? "uz" : "ru"));
  }, [setLocale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
