import type { Category } from "@/types/product";

export const categories: Category[] = [
  {
    slug: "iphone",
    title: "iPhone",
    description: "Актуальные модели и удобная рассрочка",
    image: "/categories/iphone.png",
    imageAspect: "1400 / 1000",
  },
  {
    slug: "samsung",
    title: "Samsung",
    description: "Флагманы линейки Galaxy",
    image: "/categories/samsung.png",
    imageAspect: "1400 / 400",
  },
  {
    slug: "apple",
    title: "Apple",
    description: "Watch, AirPods и iPad",
    image: "/categories/apple.png",
    imageAspect: "600 / 400",
  },
  {
    slug: "accessories",
    title: "Аксессуары",
    description: "Зарядки, чехлы и кабели",
    image: "/categories/accessories.png",
    imageAspect: "600 / 400",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
