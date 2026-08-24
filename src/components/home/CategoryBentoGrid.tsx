import { categories } from "@/data/categories";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryCard } from "@/components/home/CategoryCard";

export function CategoryBentoGrid() {
  const [iphone, samsung, apple, accessories] = categories;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Каталог" title="Что вы ищете?" className="mb-8" />
        {/*
          Card heights come from each photo's own aspect ratio (see CategoryCard),
          not a forced grid row height — so no card has to shrink its image to
          fit a box sized for a different photo.
        */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-[1.3fr_1fr]">
          <CategoryCard category={iphone} className="col-span-2 lg:col-span-1" wide />
          <div className="col-span-2 grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-1">
            <CategoryCard category={samsung} className="col-span-2" wide />
            <CategoryCard category={apple} />
            <CategoryCard category={accessories} />
          </div>
        </div>
      </Container>
    </section>
  );
}
