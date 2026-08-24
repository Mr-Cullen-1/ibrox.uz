"use client";

import {
  ClipboardList,
  Clock,
  IdCard,
  MessageSquareText,
  PackageCheck,
  Percent,
  Smartphone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InstallmentPlans } from "@/components/installment/InstallmentPlans";
import { InstallmentExample } from "@/components/installment/InstallmentExample";
import { useTranslation } from "@/hooks/useTranslation";

const HERO_HIGHLIGHTS = [
  { icon: Percent, title: "40% или 30%", subtitle: "первоначальный взнос" },
  { icon: Clock, title: "До 12 месяцев", subtitle: "гибкий срок оплаты" },
  { icon: IdCard, title: "Только паспорт", subtitle: "без банка и справок" },
];

const STEPS = [
  {
    number: "01",
    icon: Smartphone,
    title: "Выберите устройство",
    description: "Определитесь с моделью, цветом и памятью в каталоге.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Выберите взнос и срок",
    description: "40% или 30% первоначальный взнос и подходящий срок рассрочки.",
  },
  {
    number: "03",
    icon: MessageSquareText,
    title: "Оформите по паспорту",
    description: "Понадобится только паспорт — без банка и справок о доходах.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Заберите покупку",
    description: "Оформите покупку и заберите устройство в магазине.",
  },
];

export function InstallmentPageContent() {
  const { t } = useTranslation();

  return (
    <Container className="py-10 sm:py-14">
      <div className="grid overflow-hidden rounded-[2.25rem] bg-surface shadow-soft lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-14 sm:px-12 sm:py-20">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-muted">
            {t("Рассрочка")}
          </p>
          <h1 className="max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {t("Техника сегодня. Оплата — удобно.")}
          </h1>
          <p className="mt-5 max-w-md text-muted">
            {t("40% или 30% первоначальный взнос, срок до 12 месяцев. Оформление по паспорту, без банка.")}
          </p>
          <LinkButton href="/catalog" variant="accent" size="lg" className="mt-8 w-fit">
            {t("Смотреть каталог")}
          </LinkButton>
        </div>

        <div className="flex items-center justify-center overflow-hidden bg-surface-2 px-8 py-12 sm:py-16">
          <div className="flex w-full max-w-xs flex-col gap-3">
            {HERO_HIGHLIGHTS.map(({ icon: Icon, title, subtitle }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-4 shadow-soft"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{t(title)}</p>
                  <p className="text-xs text-muted">{t(subtitle)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Условия"
          title="Варианты рассрочки"
          description="Выбираете размер первоначального взноса — от него зависят доступные сроки."
          className="mb-8"
        />
        <InstallmentPlans />
      </div>

      <div className="pb-16 sm:pb-20">
        <SectionHeading eyebrow="Расчёт" title="Как это выглядит на практике" className="mb-8" />
        <InstallmentExample />
      </div>

      <div className="pb-16 sm:pb-20">
        <SectionHeading eyebrow="Как это работает" title="Процесс покупки" className="mb-8" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ number, icon: Icon, title, description }) => (
            <div key={number} className="flex flex-col gap-6 rounded-3xl bg-surface p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-muted">{number}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 text-ink">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-ink">
                  {t(title)}
                </h3>
                <p className="mt-1 text-sm text-muted">{t(description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-surface p-8 text-center shadow-soft sm:p-12">
        <h2 className="text-2xl font-medium tracking-tight text-ink">
          {t("Остались вопросы по условиям?")}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          {t("Точная сумма взноса и платежа зависит от устройства — наши менеджеры подберут подходящий вариант.")}
        </p>
        <LinkButton href="/contacts" size="lg" className="mt-6">
          {t("Связаться с нами")}
        </LinkButton>
      </div>
    </Container>
  );
}
