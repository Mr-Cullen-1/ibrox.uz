import { Hero } from "@/components/home/Hero";
import { CategoryBentoGrid } from "@/components/home/CategoryBentoGrid";
import { PopularProducts } from "@/components/home/PopularProducts";
import { InstallmentTeaser } from "@/components/home/InstallmentTeaser";
import { TrustSection } from "@/components/home/TrustSection";
import { InstagramSection } from "@/components/home/InstagramSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryBentoGrid />
      <PopularProducts />
      <InstallmentTeaser />
      <TrustSection />
      <InstagramSection />
    </>
  );
}
