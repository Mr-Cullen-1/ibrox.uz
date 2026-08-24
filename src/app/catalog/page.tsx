import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CatalogView } from "@/components/catalog/CatalogView";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Весь каталог техники iBrox.uz: iPhone, Samsung, Apple и аксессуары.",
};

export default function CatalogPage() {
  return (
    <Container className="py-10 sm:py-14">
      <SectionHeading eyebrow="iBrox.uz" title="Каталог" className="mb-8" />
      <CatalogView products={products} allProducts={products} />
    </Container>
  );
}
