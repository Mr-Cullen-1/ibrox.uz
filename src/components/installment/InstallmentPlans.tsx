"use client";

import { Check } from "lucide-react";
import { installmentPlans } from "@/data/installment";
import { Badge } from "@/components/ui/Badge";
import { useTranslation } from "@/hooks/useTranslation";

export function InstallmentPlans() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {installmentPlans.map((plan) => (
        <div
          key={plan.downPaymentPercent}
          className="flex flex-col gap-6 rounded-3xl bg-surface p-6 shadow-soft sm:p-8"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">{t("Первоначальный взнос")}</p>
              <p className="text-4xl font-medium tracking-tight text-ink">
                {plan.downPaymentPercent}%
              </p>
            </div>
            <Badge tone="light">{plan.downPaymentLabel}</Badge>
          </div>

          <ul className="flex flex-col gap-2">
            {plan.terms.map((term) => (
              <li
                key={term.months}
                className="flex items-center gap-2 text-sm text-ink-soft"
              >
                <Check className="h-4 w-4 shrink-0 text-ink" strokeWidth={1.75} />
                {t("Рассрочка на")} {term.months} {t("мес.")}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
