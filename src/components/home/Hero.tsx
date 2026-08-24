"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { useTranslation } from "@/hooks/useTranslation";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="pt-6 sm:pt-8">
      <Container>
        <div className="grid overflow-hidden rounded-[2.25rem] bg-surface shadow-soft lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:order-1 lg:py-16">
            <p className="mb-5 inline-flex w-fit items-center rounded-full bg-surface-2 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
              Apple Namangan
            </p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              {t("Техника, которую хочется держать в руках.")}
            </h1>
            <p className="mt-5 max-w-md text-base text-muted sm:text-lg">
              {t("iPhone, Samsung и аксессуары. Наличными или в удобную рассрочку.")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LinkButton href="/catalog" size="lg">
                {t("Смотреть каталог")} <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton href="/installment" variant="secondary" size="lg">
                {t("Рассрочка")}
              </LinkButton>
            </div>

            <div className="mt-12 flex items-center gap-4 text-muted">
              <span className="font-mono text-sm">01</span>
              <span className="h-px w-10 bg-line" />
              <span className="text-sm">Premium technology</span>
            </div>
          </div>

          <div className="relative order-1 min-h-[320px] overflow-hidden bg-surface-2 sm:min-h-[420px] lg:order-2 lg:min-h-full">
            <div className="absolute left-8 top-10 z-10 h-3 w-3 rounded-full bg-ink/15" />
            <div className="absolute bottom-16 right-10 z-10 h-4 w-4 rounded-full bg-white/60" />
            <div className="absolute right-16 top-1/4 z-10 h-2 w-2 rounded-full bg-accent" />
            <Image
              src="/hero/main-page-photo.png"
              alt="iPhone — Apple Namangan"
              fill
              priority
              className="object-cover object-bottom"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 px-2 text-xs text-muted sm:hidden">
          <Link href="/catalog" className="underline underline-offset-2">
            {t("Смотреть весь каталог")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
