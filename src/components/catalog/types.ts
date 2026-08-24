import type { CategorySlug } from "@/types/product";

export type SortOption = "popular" | "price-asc" | "price-desc" | "rating";

export interface FilterState {
  categories: CategorySlug[];
  brands: string[];
  storages: string[];
  colors: string[];
  maxPrice: number | null;
  sort: SortOption;
}

export const DEFAULT_FILTERS: FilterState = {
  categories: [],
  brands: [],
  storages: [],
  colors: [],
  maxPrice: null,
  sort: "popular",
};

export const SORT_LABELS: Record<SortOption, string> = {
  popular: "Популярные",
  "price-asc": "Сначала дешевле",
  "price-desc": "Сначала дороже",
  rating: "По рейтингу",
};

export const PRICE_STEPS = [
  { label: "До 5 000 000 сум", value: 5_000_000 },
  { label: "До 10 000 000 сум", value: 10_000_000 },
  { label: "До 20 000 000 сум", value: 20_000_000 },
];
