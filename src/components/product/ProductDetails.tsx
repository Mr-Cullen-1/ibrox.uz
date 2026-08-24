"use client";

import { ChevronDown } from "lucide-react";
import type { Product } from "@/types/product";
import { useTranslation } from "@/hooks/useTranslation";

function DetailSection({
  title,
  children,
  defaultOpen,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const { t } = useTranslation();
  return (
    <details
      className="group border-b border-line py-5 first:pt-0 last:border-b-0"
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-ink">
        {t(title)}
        <ChevronDown className="h-4 w-4 text-muted transition-transform group-open:rotate-180" />
      </summary>
      <div className="mt-3 text-sm leading-relaxed text-muted">{children}</div>
    </details>
  );
}

export function ProductDetails({ product }: { product: Product }) {
  const { t } = useTranslation();

  return (
    <div className="mt-16 rounded-3xl bg-surface p-6 shadow-soft sm:p-8">
      <DetailSection title="Описание" defaultOpen>
        <p>{t(product.description)}</p>
      </DetailSection>

      <DetailSection title="Характеристики">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
          {product.specifications.map((spec) => (
            <div
              key={spec.label}
              className="flex items-center justify-between border-b border-line/60 py-2 text-sm"
            >
              <dt className="text-muted">{t(spec.label)}</dt>
              <dd className="font-medium text-ink">{t(spec.value)}</dd>
            </div>
          ))}
        </dl>
      </DetailSection>

      <DetailSection title="Комплектация">
        <p>{t("Устройство, документы. Точный состав комплекта уточняйте у менеджера.")}</p>
      </DetailSection>

      <DetailSection title="Доставка">
        <p>{t("Доставка по Намангану и области. Условия и сроки уточняются при заявке.")}</p>
      </DetailSection>

      <DetailSection title="Гарантия">
        <p>{t("Условия гарантии уточняйте у менеджера при оформлении покупки.")}</p>
      </DetailSection>
    </div>
  );
}
