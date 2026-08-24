"use client";

import { ArrowRight, CreditCard } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { useTranslation } from "@/hooks/useTranslation";

const HIGHLIGHTS = ["40% взнос · до 12 мес", "30% взнос · до 12 мес", "Только паспорт"];

export function InstallmentTeaser() {
  const { t } = useTranslation();

  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div className="grid overflow-hidden rounded-[2.25rem] bg-surface shadow-soft lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {t("Рассрочка")}
            </p>
            <h2 className="text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl">
              {t("Ваш новый iPhone — не обязательно сразу.")}
            </h2>
            <p className="mt-4 max-w-sm text-muted">
              {t("40% или 30% первоначальный взнос — без банка, по паспорту.")}
            </p>
            <LinkButton
              href="/installment"
              variant="accent"
              size="lg"
              className="mt-8 w-fit"
            >
              {t("Узнать условия")} <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>

          <div className="flex items-center justify-center overflow-hidden bg-surface-2 px-8 py-12 sm:py-16">
            <div className="flex w-full max-w-xs flex-col gap-3">
              {HIGHLIGHTS.map((label, i) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-line bg-surface px-5 py-4 shadow-soft"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                      <CreditCard className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm text-ink">{t(label)}</span>
                  </div>
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
