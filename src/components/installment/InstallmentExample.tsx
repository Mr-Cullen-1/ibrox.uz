"use client";

import { installmentExample, installmentPlans } from "@/data/installment";
import { useTranslation } from "@/hooks/useTranslation";

export function InstallmentExample() {
  const { t } = useTranslation();

  return (
    <div className="rounded-3xl bg-surface p-6 shadow-soft sm:p-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            {t("Пример расчёта")}
          </p>
          <h3 className="mt-1 text-xl font-medium tracking-tight text-ink">
            {installmentExample.deviceName} · ${installmentExample.priceUsd}
          </h3>
        </div>
        <p className="max-w-xs text-sm text-muted">
          {t("Наличными")} — ${installmentExample.priceUsd}. {t("Ниже — во сколько обойдётся покупка в рассрочку.")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {installmentPlans.map((plan) => (
          <div
            key={plan.downPaymentPercent}
            className="rounded-2xl bg-surface-2 p-5"
          >
            <div className="flex items-center justify-between border-b border-line/60 pb-3">
              <span className="text-sm text-muted">
                {t("Взнос")} {plan.downPaymentPercent}%
              </span>
              <span className="text-lg font-medium text-ink">
                ${installmentExample.downPayments[plan.downPaymentPercent]}
              </span>
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              {plan.terms.map((term) => (
                <li
                  key={term.months}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-muted">{term.months} {t("мес.")}</span>
                  <span className="font-medium text-ink">
                    ${term.monthlyPayment} / {t("мес")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted">
        {t("Суммы приведены для примера на конкретное устройство и его цену. Взнос и платёж по вашему устройству рассчитает менеджер.")}
      </p>
    </div>
  );
}
