"use client";

import Link from "next/link";
import Image from "next/image";
import { Camera, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteContact } from "@/data/site";
import { useTranslation } from "@/hooks/useTranslation";

const NAV = [
  { href: "/catalog", label: "Каталог" },
  { href: "/catalog/iphone", label: "iPhone" },
  { href: "/catalog/samsung", label: "Samsung" },
  { href: "/catalog/apple", label: "Apple" },
  { href: "/catalog/accessories", label: "Аксессуары" },
  { href: "/installment", label: "Рассрочка" },
];

const INFO = [
  { href: "/about", label: "О магазине" },
  { href: "/contacts", label: "Контакты" },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo.jpg"
              alt="Apple Namangan"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <p className="text-xl font-semibold tracking-tight text-ink">
                iBrox<span className="text-muted">.uz</span>
              </p>
              <p className="text-sm text-muted">Apple Namangan</p>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <a
              href={siteContact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface-2"
            >
              <Camera className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a
              href={siteContact.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface-2"
            >
              <Send className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {t("Навигация")}
          </p>
          <ul className="flex flex-col gap-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-soft hover:text-ink"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {t("Информация")}
          </p>
          <ul className="flex flex-col gap-2.5">
            {INFO.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-soft hover:text-ink"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {t("Контакты")}
          </p>
          <ul className="flex flex-col gap-2.5 text-sm text-ink-soft">
            <li>
              <a href={siteContact.phoneHref} className="hover:text-ink">
                {siteContact.phone}
              </a>
            </li>
            <li>
              <a
                href={siteContact.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink"
              >
                {t(siteContact.address)}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} iBrox.uz — Apple Namangan</p>
        <p>{t("Цены и наличие носят демонстрационный характер")}</p>
      </Container>
    </footer>
  );
}
