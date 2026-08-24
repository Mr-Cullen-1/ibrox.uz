"use client";

import { BadgeCheck, CreditCard, MessageCircle, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslation } from "@/hooks/useTranslation";

const ITEMS = [
  {
    icon: BadgeCheck,
    title: "Оригинальная техника",
    description: "Проверенные устройства и аксессуары.",
  },
  {
    icon: CreditCard,
    title: "Рассрочка",
    description: "Удобный способ покупки.",
  },
  {
    icon: MessageCircle,
    title: "Поддержка",
    description: "Помощь с выбором устройства.",
  },
  {
    icon: Users,
    title: "100K+",
    description: "Большая аудитория в Instagram.",
  },
];

export function TrustSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Почему мы" title="Почему iBrox?" className="mb-8" />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-3xl bg-surface p-6 shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 text-ink">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-base font-medium tracking-tight text-ink">
                  {t(title)}
                </h3>
                <p className="mt-1 text-sm text-muted">{t(description)}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
