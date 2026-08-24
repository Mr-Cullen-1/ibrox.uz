"use client";

import { Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/product/ProductGrid";
import { LinkButton } from "@/components/ui/Button";
import { useFavorites } from "@/context/FavoritesContext";
import { products } from "@/data/products";
import { useTranslation } from "@/hooks/useTranslation";

export default function FavoritesPage() {
  const { ids } = useFavorites();
  const { t } = useTranslation();
  const favoriteProducts = products.filter((p) => ids.includes(p.id));

  return (
    <Container className="py-10 sm:py-14">
      <SectionHeading eyebrow="iBrox.uz" title="Избранное" className="mb-8" />
      {favoriteProducts.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-line bg-surface py-20 text-center">
          <Heart className="h-8 w-8 text-muted" strokeWidth={1.25} />
          <p className="text-sm text-muted">{t("В избранном пока ничего нет")}</p>
          <LinkButton href="/catalog" variant="secondary" size="sm" className="mt-2">
            {t("Перейти в каталог")}
          </LinkButton>
        </div>
      ) : (
        <ProductGrid products={favoriteProducts} />
      )}
    </Container>
  );
}
