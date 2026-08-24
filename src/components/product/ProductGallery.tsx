"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/types/product";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { useTranslation } from "@/hooks/useTranslation";

export function ProductGallery({
  name,
  category,
  images,
}: {
  name: string;
  category: CategorySlug;
  images: string[];
}) {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3">
      <ProductVisual
        name={name}
        category={category}
        image={images[active]}
        className="aspect-square w-full rounded-3xl"
        iconClassName="h-1/3 w-1/3"
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((image, index) => (
            <button
              key={image + index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`${t("Изображение")} ${index + 1}`}
              className={cn(
                "h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-colors",
                active === index ? "border-ink" : "border-transparent"
              )}
            >
              <ProductVisual
                name={name}
                category={category}
                image={image}
                className="h-full w-full"
                iconClassName="h-1/2 w-1/2"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
