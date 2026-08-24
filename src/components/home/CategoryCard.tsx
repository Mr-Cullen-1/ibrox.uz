"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Category } from "@/types/product";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { useTranslation } from "@/hooks/useTranslation";

export function CategoryCard({
  category,
  className,
  reverse = false,
  wide = false,
}: {
  category: Category;
  className?: string;
  reverse?: boolean;
  wide?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <Link
      href={`/catalog/${category.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl bg-surface p-6 shadow-soft transition-shadow hover:shadow-lift",
        reverse && "flex-col-reverse",
        className
      )}
    >
      {/* Height comes from the image's own aspect ratio, not a fixed box —
          so the photo always renders at full size instead of shrinking to fit. */}
      <div className="mb-4 w-full" style={{ aspectRatio: category.imageAspect }}>
        <ProductVisual
          name={category.title}
          category={category.slug}
          image={category.image}
          fit="cover"
          className="h-full w-full rounded-2xl"
          iconClassName="h-1/4 w-1/4"
          sizes={
            wide
              ? "(min-width: 1024px) 50vw, 100vw"
              : "(min-width: 1024px) 25vw, 50vw"
          }
        />
      </div>
      <div className="flex items-end justify-between gap-3">
        <div>
          <h3 className="text-xl font-medium tracking-tight text-ink">
            {t(category.title)}
          </h3>
          <p className="mt-1 text-sm text-muted">{t(category.description)}</p>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink transition-colors group-hover:bg-ink group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </span>
      </div>
    </Link>
  );
}
