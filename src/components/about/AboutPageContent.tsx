"use client";

import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { useTranslation } from "@/hooks/useTranslation";

export function AboutPageContent() {
  const { t } = useTranslation();

  return (
    <Container className="py-10 sm:py-14">
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-muted">
        {t("О магазине")}
      </p>
      <h1 className="max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
        iBrox.uz — Apple Namangan
      </h1>
      <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
        {t(
          "Мы занимаемся продажей iPhone, Samsung и аксессуаров — как за наличный расчёт, так и в удобную рассрочку. За время работы в Instagram нас выбрали более 100 000 подписчиков."
        )}
      </p>
      <LinkButton href="/catalog" size="lg" className="mt-8">
        {t("Смотреть каталог")}
      </LinkButton>
    </Container>
  );
}
