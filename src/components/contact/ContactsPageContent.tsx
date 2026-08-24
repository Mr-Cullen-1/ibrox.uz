"use client";

import { Camera, MapPin, Phone, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteContact } from "@/data/site";
import { useTranslation } from "@/hooks/useTranslation";

const CONTACTS = [
  { icon: Phone, label: siteContact.phone, href: siteContact.phoneHref },
  { icon: MapPin, label: siteContact.address, href: siteContact.mapUrl },
  { icon: Send, label: "Telegram", href: siteContact.telegram },
  { icon: Camera, label: "Instagram", href: siteContact.instagram },
];

export function ContactsPageContent() {
  const { t } = useTranslation();

  return (
    <Container className="py-10 sm:py-14">
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-muted">
        {t("Контакты")}
      </p>
      <h1 className="max-w-xl text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
        {t("Свяжитесь с нами")}
      </h1>
      <p className="mt-4 max-w-md text-base text-muted">
        {t("Оставьте заявку, и наш менеджер поможет с выбором устройства и способа оплаты.")}
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          {CONTACTS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-4 rounded-2xl bg-surface p-4 shadow-soft transition-shadow hover:shadow-lift"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium text-ink">{t(label)}</span>
            </a>
          ))}
        </div>

        <ContactForm />
      </div>
    </Container>
  );
}
