import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductDetails } from "@/components/product/ProductDetails";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getProduct, getRelatedProducts, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <Container className="py-10 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery
          name={product.name}
          category={product.category}
          images={product.images}
        />
        <ProductInfo product={product} />
      </div>

      <ProductDetails product={product} />

      {related.length > 0 && (
        <div className="mt-20">
          <SectionHeading title="Похожие товары" className="mb-8" />
          <ProductGrid products={related} />
        </div>
      )}
    </Container>
  );
}
