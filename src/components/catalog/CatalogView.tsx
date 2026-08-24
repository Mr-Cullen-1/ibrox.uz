"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Product } from "@/types/product";
import { ProductGrid } from "@/components/product/ProductGrid";
import { FiltersPanel } from "@/components/catalog/FiltersPanel";
import { MobileFiltersSheet } from "@/components/catalog/MobileFiltersSheet";
import { SortMenu } from "@/components/catalog/SortMenu";
import { DEFAULT_FILTERS, type FilterState } from "@/components/catalog/types";
import { useTranslation } from "@/hooks/useTranslation";

interface CatalogViewProps {
  products: Product[];
  allProducts: Product[];
  showCategoryFilter?: boolean;
}

export function CatalogView({
  products,
  allProducts,
  showCategoryFilter = true,
}: CatalogViewProps) {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [query, setQuery] = useState("");
  const { t } = useTranslation();

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (query.trim() && !p.name.toLowerCase().includes(query.trim().toLowerCase()))
        return false;
      if (filters.categories.length && !filters.categories.includes(p.category))
        return false;
      if (filters.brands.length && !filters.brands.includes(p.brand)) return false;
      if (
        filters.storages.length &&
        !p.storage.some((s) => filters.storages.includes(s))
      )
        return false;
      if (
        filters.colors.length &&
        !p.colors.some((c) => filters.colors.includes(c.name))
      )
        return false;
      if (filters.maxPrice !== null && p.price > filters.maxPrice) return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      switch (filters.sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return list;
  }, [products, filters, query]);

  return (
    <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <FiltersPanel
            allProducts={allProducts}
            filters={filters}
            onChange={setFilters}
            showCategoryFilter={showCategoryFilter}
          />
        </div>
      </aside>

      <div>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              strokeWidth={1.75}
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("Поиск по каталогу")}
              className="w-full rounded-full border border-line bg-surface py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-muted focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <MobileFiltersSheet
              allProducts={allProducts}
              filters={filters}
              onChange={setFilters}
              showCategoryFilter={showCategoryFilter}
              resultCount={filtered.length}
            />
            <SortMenu
              value={filters.sort}
              onChange={(sort) => setFilters({ ...filters, sort })}
            />
          </div>
        </div>

        <p className="mb-4 text-sm text-muted">{t("Найдено")}: {filtered.length}</p>
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
