export type CategorySlug = "iphone" | "samsung" | "apple" | "accessories";

export interface Category {
  slug: CategorySlug;
  title: string;
  description: string;
  image: string;
  /** Natural aspect ratio of `image`, as a CSS `aspect-ratio` value (e.g. "7 / 5"). */
  imageAspect: string;
}

export type Badge = "Новинка" | "Популярное" | "Хит продаж";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  brand: string;
  name: string;
  category: CategorySlug;
  price: number;
  installmentPrice: number;
  installmentMonths: number;
  images: string[];
  colors: { name: string; hex: string }[];
  storage: string[];
  badge?: Badge;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  specifications: ProductSpec[];
}
