"use client";

import { useLocale, type Locale } from "@/context/LocaleContext";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";

const LOCALES: Locale[] = ["ru", "uz"];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-full bg-surface-2 p-0.5",
        className
      )}
      role="group"
      aria-label={t("Выбор языка")}
    >
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={cn(
            "rounded-full px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors",
            locale === l
              ? "bg-ink text-white"
              : "text-ink-soft hover:text-ink"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
