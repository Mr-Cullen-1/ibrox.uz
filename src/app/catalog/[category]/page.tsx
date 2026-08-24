import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CatalogView } from "@/components/catalog/CatalogView";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory, products } from "@/data/products";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.title,
    description: `${category.title} в iBrox.uz — ${category.description.toLowerCase()}.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(category.slug);

  return (
    <Container className="py-10 sm:py-14">
      <SectionHeading
        eyebrow="Каталог"
        title={category.title}
        description={category.description}
        className="mb-8"
      />
      <CatalogView
        products={categoryProducts}
        allProducts={products}
        showCategoryFilter={false}
      />
    </Container>
  );
}
