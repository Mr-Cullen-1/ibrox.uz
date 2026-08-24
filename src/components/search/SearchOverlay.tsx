"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useSearch } from "@/context/SearchContext";
import { products } from "@/data/products";
import { formatUZS } from "@/lib/utils";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { useTranslation } from "@/hooks/useTranslation";

const SUGGESTIONS = ["iPhone 17 Pro", "Samsung S26", "AirPods", "Apple Watch"];

export function SearchOverlay() {
  const { isOpen, close } = useSearch();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [wasOpen, setWasOpen] = useState(isOpen);

  if (isOpen !== wasOpen) {
    setWasOpen(isOpen);
    if (!isOpen) setQuery("");
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto mt-20 w-[92%] max-w-xl rounded-3xl bg-surface p-2 shadow-lift sm:mt-28"
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-4">
              <Search className="h-5 w-5 shrink-0 text-muted" strokeWidth={1.75} />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("Что ищете?")}
                className="w-full bg-transparent text-lg text-ink placeholder:text-muted focus:outline-none"
              />
              <button
                type="button"
                onClick={close}
                aria-label={t("Закрыть поиск")}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full hover:bg-surface-2"
              >
                <X className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4">
              {!query.trim() && (
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    {t("Популярные запросы")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setQuery(s)}
                        className="rounded-full border border-line px-3.5 py-2 text-sm text-ink-soft hover:bg-surface-2"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {query.trim() && results.length === 0 && (
                <p className="py-8 text-center text-sm text-muted">
                  {t("Ничего не найдено по запросу")} «{query}»
                </p>
              )}

              {results.length > 0 && (
                <ul className="flex flex-col gap-1">
                  {results.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/product/${p.slug}`}
                        onClick={close}
                        className="flex items-center gap-3 rounded-2xl p-2 hover:bg-surface-2"
                      >
                        <ProductVisual
                          name={p.name}
                          category={p.category}
                          image={p.images[0]}
                          className="h-14 w-14 shrink-0 rounded-xl"
                          iconClassName="h-1/2 w-1/2"
                          sizes="56px"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-ink">
                            {t(p.name)}
                          </p>
                          <p className="text-xs text-muted">{p.brand}</p>
                        </div>
                        <p className="shrink-0 text-sm font-medium text-ink">
                          {formatUZS(p.price, t("сум"))}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
