"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import type { Product } from "@/types/product";
import { FiltersPanel } from "@/components/catalog/FiltersPanel";
import { Button } from "@/components/ui/Button";
import type { FilterState } from "@/components/catalog/types";
import { useTranslation } from "@/hooks/useTranslation";

interface MobileFiltersSheetProps {
  allProducts: Product[];
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  showCategoryFilter?: boolean;
  resultCount: number;
}

export function MobileFiltersSheet({
  allProducts,
  filters,
  onChange,
  showCategoryFilter,
  resultCount,
}: MobileFiltersSheetProps) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-medium text-ink lg:hidden"
      >
        <SlidersHorizontal className="h-4 w-4" strokeWidth={1.75} />
        {t("Фильтры")}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-ink/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 bottom-0 z-[71] max-h-[85vh] overflow-y-auto rounded-t-[2rem] bg-surface p-6 pb-8 lg:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-medium tracking-tight text-ink">{t("Фильтры")}</h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t("Закрыть фильтры")}
                  className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-surface-2"
                >
                  <X className="h-4 w-4" strokeWidth={1.75} />
                </button>
              </div>
              <FiltersPanel
                allProducts={allProducts}
                filters={filters}
                onChange={onChange}
                showCategoryFilter={showCategoryFilter}
              />
              <Button className="mt-8 w-full" size="lg" onClick={() => setOpen(false)}>
                {t("Показать")} {resultCount}
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
