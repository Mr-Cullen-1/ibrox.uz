"use client";

import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/data/translations";

/**
 * String-keyed translation: the Russian source text IS the dictionary key.
 * Lets every existing component keep its literal Russian JSX untouched —
 * only the render call changes from `{text}` to `{t(text)}`. Unknown keys
 * (and the `ru` locale itself) fall back to the original string.
 */
export function useTranslation() {
  const { locale } = useLocale();

  const t = (text: string): string => {
    if (locale === "ru") return text;
    return translations[text] ?? text;
  };

  return { t, locale };
}
