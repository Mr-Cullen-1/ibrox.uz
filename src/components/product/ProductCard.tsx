"use client";

import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import { cn, formatUZS } from "@/lib/utils";
import type { Product } from "@/types/product";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { Badge } from "@/components/ui/Badge";
import { useFavorites } from "@/context/FavoritesContext";
import { useTranslation } from "@/hooks/useTranslation";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { isFavorite, toggle } = useFavorites();
  const favorite = isFavorite(product.id);
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl bg-surface p-3 shadow-soft transition-shadow hover:shadow-lift",
        className
      )}
    >
      <Link href={`/product/${product.slug}`} className="relative block">
        <ProductVisual
          name={product.name}
          category={product.category}
          image={product.images[0]}
          className="aspect-square w-full rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
        />
        {product.badge && (
          <Badge className="absolute left-2 top-2" tone="dark">
            {product.badge}
          </Badge>
        )}
      </Link>

      <button
        type="button"
        aria-label={t(favorite ? "Убрать из избранного" : "Добавить в избранное")}
        onClick={() => toggle(product.id)}
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-surface/90 text-ink shadow-soft backdrop-blur transition-transform hover:scale-105"
      >
        <Heart
          className={cn("h-4 w-4", favorite && "fill-ink")}
          strokeWidth={1.75}
        />
      </button>

      <Link href={`/product/${product.slug}`} className="flex flex-1 flex-col px-1.5 pb-1.5 pt-3">
        <p className="text-xs text-muted">{product.brand}</p>
        <h3 className="mt-0.5 text-[15px] font-medium tracking-tight text-ink">
          {t(product.name)}
        </h3>
        <div className="mt-2 flex flex-1 items-end justify-between gap-2">
          <div>
            <p className="text-sm font-medium text-ink">
              {t("от")} {formatUZS(product.price, t("сум"))}
            </p>
            <p className="text-xs text-muted">
              {t("от")} {formatUZS(product.installmentPrice, t("сум"))} / {t("мес")}
            </p>
          </div>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink transition-colors group-hover:bg-ink group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </span>
        </div>
      </Link>
    </div>
  );
}
