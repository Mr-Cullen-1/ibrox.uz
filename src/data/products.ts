import type { Product } from "@/types/product";

/**
 * Demo-каталог. Реальные цены, наличие и характеристики магазина
 * подставляются сюда позже — компоненты UI менять не нужно.
 */
export const products: Product[] = [
  {
    id: "p1",
    slug: "iphone-17-pro",
    brand: "Apple",
    name: "iPhone 17 Pro",
    category: "iphone",
    price: 18990000,
    installmentPrice: 1582500,
    installmentMonths: 12,
    images: ["/products/iphone-17-pro.png"],
    colors: [
      { name: "Titanium Black", hex: "#2b2b2d" },
      { name: "Titanium White", hex: "#e5e3da" },
      { name: "Deep Blue", hex: "#2c3a52" },
    ],
    storage: ["256 GB", "512 GB", "1 TB"],
    badge: "Новинка",
    rating: 4.9,
    reviews: 128,
    inStock: true,
    description:
      "Флагманский iPhone с титановым корпусом, продвинутой камерой и чипом нового поколения. Демо-описание для витрины товара.",
    specifications: [
      { label: "Дисплей", value: "6.3\" Super Retina XDR" },
      { label: "Чип", value: "A19 Pro" },
      { label: "Камера", value: "48 МП, тройная" },
      { label: "Материал корпуса", value: "Титан" },
      { label: "Аккумулятор", value: "До 29 часов видео" },
    ],
  },
  {
    id: "p2",
    slug: "iphone-17",
    brand: "Apple",
    name: "iPhone 17",
    category: "iphone",
    price: 14990000,
    installmentPrice: 1249200,
    installmentMonths: 12,
    images: ["/products/iphone-17.png"],
    colors: [
      { name: "Midnight", hex: "#1b1c1f" },
      { name: "Lavender", hex: "#c9c2e0" },
      { name: "Green", hex: "#8fa88a" },
    ],
    storage: ["128 GB", "256 GB", "512 GB"],
    badge: "Популярное",
    rating: 4.8,
    reviews: 214,
    inStock: true,
    description:
      "Сбалансированный флагман: производительный чип, современная камера и яркий дисплей. Демо-описание для витрины товара.",
    specifications: [
      { label: "Дисплей", value: "6.1\" Super Retina XDR" },
      { label: "Чип", value: "A19" },
      { label: "Камера", value: "48 МП, двойная" },
      { label: "Материал корпуса", value: "Алюминий" },
      { label: "Аккумулятор", value: "До 26 часов видео" },
    ],
  },
  {
    id: "p3",
    slug: "iphone-16-pro",
    brand: "Apple",
    name: "iPhone 16 Pro",
    category: "iphone",
    price: 15990000,
    installmentPrice: 1332500,
    installmentMonths: 12,
    images: ["/products/iphone-16-pro.png"],
    colors: [
      { name: "Natural Titanium", hex: "#a99f8f" },
      { name: "Black Titanium", hex: "#2b2b2d" },
    ],
    storage: ["128 GB", "256 GB"],
    rating: 4.8,
    reviews: 302,
    inStock: true,
    description:
      "Прошлый флагман по более доступной цене, без компромиссов в качестве. Демо-описание для витрины товара.",
    specifications: [
      { label: "Дисплей", value: "6.3\" Super Retina XDR" },
      { label: "Чип", value: "A18 Pro" },
      { label: "Камера", value: "48 МП, тройная" },
      { label: "Материал корпуса", value: "Титан" },
    ],
  },
  {
    id: "p4",
    slug: "galaxy-s26-ultra",
    brand: "Samsung",
    name: "Galaxy S26 Ultra",
    category: "samsung",
    price: 17490000,
    installmentPrice: 1457500,
    installmentMonths: 12,
    images: ["/products/galaxy-s26-ultra.png"],
    colors: [
      { name: "Titanium Gray", hex: "#565a5e" },
      { name: "Titanium Silver", hex: "#c9cbcd" },
    ],
    storage: ["256 GB", "512 GB", "1 TB"],
    badge: "Новинка",
    rating: 4.7,
    reviews: 96,
    inStock: true,
    description:
      "Топовый Galaxy с S Pen, продвинутой камерой и большим ярким экраном. Демо-описание для витрины товара.",
    specifications: [
      { label: "Дисплей", value: "6.9\" Dynamic AMOLED 2X" },
      { label: "Процессор", value: "Snapdragon для Galaxy" },
      { label: "Камера", value: "200 МП, квадро" },
      { label: "Комплект", value: "S Pen в комплекте" },
    ],
  },
  {
    id: "p5",
    slug: "galaxy-s26",
    brand: "Samsung",
    name: "Galaxy S26",
    category: "samsung",
    price: 12490000,
    installmentPrice: 1040900,
    installmentMonths: 12,
    images: ["/products/galaxy-s26.png"],
    colors: [
      { name: "Onyx Black", hex: "#17181a" },
      { name: "Iceberg Blue", hex: "#a9c2d0" },
    ],
    storage: ["128 GB", "256 GB"],
    rating: 4.6,
    reviews: 74,
    inStock: true,
    description:
      "Компактный флагман Galaxy с производительной начинкой на каждый день. Демо-описание для витрины товара.",
    specifications: [
      { label: "Дисплей", value: "6.2\" Dynamic AMOLED 2X" },
      { label: "Камера", value: "50 МП, тройная" },
      { label: "Защита", value: "IP68" },
    ],
  },
  {
    id: "p6",
    slug: "airpods-pro",
    brand: "Apple",
    name: "AirPods Pro",
    category: "apple",
    price: 3190000,
    installmentPrice: 265900,
    installmentMonths: 12,
    images: ["/products/airpods-pro.png"],
    colors: [{ name: "White", hex: "#f2f2ef" }],
    storage: ["—"],
    badge: "Хит продаж",
    rating: 4.9,
    reviews: 512,
    inStock: true,
    description:
      "Активное шумоподавление и адаптивный звук в компактном кейсе. Демо-описание для витрины товара.",
    specifications: [
      { label: "Шумоподавление", value: "Активное" },
      { label: "Автономность", value: "До 6 часов" },
      { label: "Кейс", value: "MagSafe, USB-C" },
    ],
  },
  {
    id: "p7",
    slug: "apple-watch",
    brand: "Apple",
    name: "Apple Watch",
    category: "apple",
    price: 4990000,
    installmentPrice: 415900,
    installmentMonths: 12,
    images: ["/products/apple-watch.png"],
    colors: [
      { name: "Midnight", hex: "#1b1c1f" },
      { name: "Starlight", hex: "#e6e1d6" },
    ],
    storage: ["41 мм", "45 мм"],
    rating: 4.8,
    reviews: 187,
    inStock: true,
    description:
      "Умные часы для тренировок, здоровья и уведомлений на запястье. Демо-описание для витрины товара.",
    specifications: [
      { label: "Экран", value: "Always-On Retina" },
      { label: "Датчики", value: "Пульс, кислород, ЭКГ" },
      { label: "Автономность", value: "До 18 часов" },
    ],
  },
  {
    id: "p8",
    slug: "ipad",
    brand: "Apple",
    name: "iPad",
    category: "apple",
    price: 6990000,
    installmentPrice: 582500,
    installmentMonths: 12,
    images: ["/products/ipad.png"],
    colors: [
      { name: "Blue", hex: "#7ea0c9" },
      { name: "Silver", hex: "#e7e7e2" },
    ],
    storage: ["128 GB", "256 GB"],
    rating: 4.7,
    reviews: 143,
    inStock: true,
    description:
      "Лёгкий и производительный планшет для учёбы, работы и творчества. Демо-описание для витрины товара.",
    specifications: [
      { label: "Дисплей", value: "10.9\" Liquid Retina" },
      { label: "Чип", value: "A16" },
      { label: "Стилус", value: "Apple Pencil (USB-C)" },
    ],
  },
  {
    id: "p9",
    slug: "magsafe-charger",
    brand: "Apple",
    name: "MagSafe Charger",
    category: "accessories",
    price: 590000,
    installmentPrice: 49200,
    installmentMonths: 12,
    images: ["/products/magsafe-charger.png"],
    colors: [{ name: "White", hex: "#f2f2ef" }],
    storage: ["—"],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    description: "Беспроводная зарядка с магнитным выравниванием. Демо-описание для витрины товара.",
    specifications: [
      { label: "Мощность", value: "До 15 Вт" },
      { label: "Разъём", value: "USB-C" },
    ],
  },
  {
    id: "p10",
    slug: "silicone-case-iphone",
    brand: "Apple",
    name: "Силиконовый чехол",
    category: "accessories",
    price: 390000,
    installmentPrice: 32500,
    installmentMonths: 12,
    images: ["/products/silicone-case-iphone.png"],
    colors: [
      { name: "Black", hex: "#1b1c1f" },
      { name: "Sage", hex: "#93a68f" },
      { name: "Clay", hex: "#b98f6f" },
    ],
    storage: ["—"],
    rating: 4.5,
    reviews: 61,
    inStock: true,
    description: "Мягкий чехол с микрофиброй внутри, точная посадка под камеру. Демо-описание для витрины товара.",
    specifications: [
      { label: "Материал", value: "Силикон" },
      { label: "Подкладка", value: "Микрофибра" },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
