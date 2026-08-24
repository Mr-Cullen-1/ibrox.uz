"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { categories } from "@/data/categories";
import type { Product } from "@/types/product";
import { DEFAULT_FILTERS, PRICE_STEPS, type FilterState } from "@/components/catalog/types";
import { useTranslation } from "@/hooks/useTranslation";

interface FiltersPanelProps {
  allProducts: Product[];
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  showCategoryFilter?: boolean;
}

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export function FiltersPanel({
  allProducts,
  filters,
  onChange,
  showCategoryFilter = true,
}: FiltersPanelProps) {
  const { t } = useTranslation();
  const brands = useMemo(
    () => Array.from(new Set(allProducts.map((p) => p.brand))),
    [allProducts]
  );
  const storages = useMemo(
    () =>
      Array.from(new Set(allProducts.flatMap((p) => p.storage))).filter(
        (s) => s !== "—"
      ),
    [allProducts]
  );
  const colors = useMemo(() => {
    const map = new Map<string, string>();
    allProducts.forEach((p) => p.colors.forEach((c) => map.set(c.name, c.hex)));
    return Array.from(map.entries());
  }, [allProducts]);

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.brands.length > 0 ||
    filters.storages.length > 0 ||
    filters.colors.length > 0 ||
    filters.maxPrice !== null;

  return (
    <div className="flex flex-col gap-8">
      {showCategoryFilter && (
        <FilterGroup label="Категория">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Chip
                key={c.slug}
                active={filters.categories.includes(c.slug)}
                onClick={() =>
                  onChange({
                    ...filters,
                    categories: toggle(filters.categories, c.slug),
                  })
                }
              >
                {c.title}
              </Chip>
            ))}
          </div>
        </FilterGroup>
      )}

      <FilterGroup label="Бренд">
        <div className="flex flex-wrap gap-2">
          {brands.map((brand) => (
            <Chip
              key={brand}
              active={filters.brands.includes(brand)}
              onClick={() => onChange({ ...filters, brands: toggle(filters.brands, brand) })}
            >
              {brand}
            </Chip>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup label="Цена">
        <div className="flex flex-wrap gap-2">
          {PRICE_STEPS.map((step) => (
            <Chip
              key={step.value}
              active={filters.maxPrice === step.value}
              onClick={() =>
                onChange({
                  ...filters,
                  maxPrice: filters.maxPrice === step.value ? null : step.value,
                })
              }
            >
              {step.label}
            </Chip>
          ))}
        </div>
      </FilterGroup>

      {storages.length > 0 && (
        <FilterGroup label="Память">
          <div className="flex flex-wrap gap-2">
            {storages.map((storage) => (
              <Chip
                key={storage}
                active={filters.storages.includes(storage)}
                onClick={() =>
                  onChange({ ...filters, storages: toggle(filters.storages, storage) })
                }
              >
                {storage}
              </Chip>
            ))}
          </div>
        </FilterGroup>
      )}

      <FilterGroup label="Цвет">
        <div className="flex flex-wrap gap-3">
          {colors.map(([name, hex]) => (
            <button
              key={name}
              type="button"
              title={name}
              aria-label={name}
              onClick={() => onChange({ ...filters, colors: toggle(filters.colors, name) })}
              className={cn(
                "h-8 w-8 rounded-full border-2 transition-transform hover:scale-110",
                filters.colors.includes(name) ? "border-ink" : "border-transparent"
              )}
            >
              <span
                className="block h-full w-full rounded-full border border-line/60"
                style={{ backgroundColor: hex }}
              />
            </button>
          ))}
        </div>
      </FilterGroup>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={() => onChange({ ...DEFAULT_FILTERS, sort: filters.sort })}
          className="w-fit text-sm font-medium text-ink underline underline-offset-4"
        >
          {t("Сбросить фильтры")}
        </button>
      )}
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  const { t } = useTranslation();
  return (
    <div>
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted">
        {t(label)}
      </p>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-2 text-sm transition-colors",
        active
          ? "border-ink bg-ink text-white"
          : "border-line text-ink-soft hover:bg-surface-2"
      )}
    >
      {typeof children === "string" ? t(children) : children}
    </button>
  );
}
