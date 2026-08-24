"use client";

import { products } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { ProductGrid } from "@/components/product/ProductGrid";
import { useTranslation } from "@/hooks/useTranslation";

export function PopularProducts() {
  const popular = products.slice(0, 8);
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Витрина"
          title="Популярное сейчас"
          description="Выбор наших покупателей"
          className="mb-8"
          action={
            <LinkButton href="/catalog" variant="secondary" size="sm" className="hidden sm:inline-flex">
              {t("Весь каталог")}
            </LinkButton>
          }
        />
        <ProductGrid products={popular} />
        <div className="mt-8 flex justify-center sm:hidden">
          <LinkButton href="/catalog" variant="secondary">
            {t("Весь каталог")}
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
