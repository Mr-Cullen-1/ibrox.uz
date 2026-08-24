"use client";

import { ChevronDown } from "lucide-react";
import { SORT_LABELS, type SortOption } from "@/components/catalog/types";
import { useTranslation } from "@/hooks/useTranslation";

export function SortMenu({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (value: SortOption) => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <select
        aria-label={t("Сортировка")}
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none rounded-full border border-line bg-surface py-2.5 pl-4 pr-9 text-sm font-medium text-ink focus:outline-none"
      >
        {Object.entries(SORT_LABELS).map(([key, label]) => (
          <option key={key} value={key}>
            {t(label)}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
        strokeWidth={1.75}
      />
    </div>
  );
}
