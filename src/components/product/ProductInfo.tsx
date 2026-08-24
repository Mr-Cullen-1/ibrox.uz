"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, Truck } from "lucide-react";
import { cn, formatUZS } from "@/lib/utils";
import type { Product } from "@/types/product";
import { Badge } from "@/components/ui/Badge";
import { Button, LinkButton } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { useTranslation } from "@/hooks/useTranslation";

export function ProductInfo({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [storage, setStorage] = useState(product.storage[0] ?? "");
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const { t } = useTranslation();

  const handleAdd = () => {
    addItem(product, color, storage);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-3 flex items-center gap-2">
        <p className="text-sm text-muted">{product.brand}</p>
        {product.badge && <Badge tone="dark">{product.badge}</Badge>}
      </div>

      <h1 className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        {t(product.name)}
      </h1>

      <div className="mt-3 flex items-center gap-2">
        <div className="flex items-center gap-1 text-accent-ink">
          <Star className="h-4 w-4 fill-current" strokeWidth={0} />
          <span className="text-sm font-medium text-ink">{product.rating}</span>
        </div>
        <span className="text-sm text-muted">· {product.reviews} {t("отзывов")}</span>
        <span
          className={cn(
            "ml-2 text-sm font-medium",
            product.inStock ? "text-ink" : "text-danger"
          )}
        >
          {t(product.inStock ? "В наличии" : "Нет в наличии")}
        </span>
      </div>

      <div className="mt-6">
        <p className="text-3xl font-medium tracking-tight text-ink">
          {formatUZS(product.price, t("сум"))}
        </p>
        <p className="mt-1 text-sm text-muted">
          {t("или от")} {formatUZS(product.installmentPrice, t("сум"))} / {t("мес")} {t("в рассрочку на")}{" "}
          {product.installmentMonths} {t("мес")}
        </p>
      </div>

      {product.colors.length > 0 && product.colors[0].name !== "—" && (
        <div className="mt-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted">
            {t("Цвет")} · {color}
          </p>
          <div className="flex gap-3">
            {product.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                title={c.name}
                aria-label={c.name}
                onClick={() => setColor(c.name)}
                className={cn(
                  "h-9 w-9 rounded-full border-2 transition-transform hover:scale-110",
                  color === c.name ? "border-ink" : "border-transparent"
                )}
              >
                <span
                  className="block h-full w-full rounded-full border border-line/60"
                  style={{ backgroundColor: c.hex }}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {product.storage.length > 0 && product.storage[0] !== "—" && (
        <div className="mt-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted">
            {t("Память")}
          </p>
          <div className="flex flex-wrap gap-2">
            {product.storage.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStorage(s)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  storage === s
                    ? "border-ink bg-ink text-white"
                    : "border-line text-ink-soft hover:bg-surface-2"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" className="flex-1" onClick={handleAdd}>
          {t(added ? "Добавлено ✓" : "Оставить заявку")}
        </Button>
        <LinkButton href="/installment" variant="secondary" size="lg" className="flex-1">
          {t("Купить в рассрочку")}
        </LinkButton>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-muted">
        <Truck className="h-4 w-4" strokeWidth={1.75} />
        <span>
          {t("Доставка по Намангану и области")} ·{" "}
          <Link href="/contacts" className="underline underline-offset-2">
            {t("уточнить условия")}
          </Link>
        </span>
      </div>
    </div>
  );
}
