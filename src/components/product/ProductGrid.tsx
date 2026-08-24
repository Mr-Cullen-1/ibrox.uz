"use client";

import type { Product } from "@/types/product";
import { ProductCard } from "@/components/product/ProductCard";
import { useTranslation } from "@/hooks/useTranslation";

export function ProductGrid({ products }: { products: Product[] }) {
  const { t } = useTranslation();

  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-line bg-surface py-20 text-center">
        <p className="text-sm text-muted">{t("По вашему запросу ничего не найдено")}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
