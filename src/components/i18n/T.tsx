"use client";

import { useTranslation } from "@/hooks/useTranslation";

/**
 * Inline translator for literal text inside Server Components — lets a page
 * stay a server component (keeping metadata/generateStaticParams) while its
 * copy still switches language. `children` must be the exact Russian string
 * used as the dictionary key in `data/translations.ts`.
 */
export function T({ children }: { children: string }) {
  const { t } = useTranslation();
  return <>{t(children)}</>;
}
