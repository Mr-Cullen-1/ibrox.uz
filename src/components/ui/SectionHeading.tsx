"use client";

import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
}: SectionHeadingProps) {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "sm:justify-center sm:text-center",
        className
      )}
    >
      <div className={cn(align === "center" && "mx-auto max-w-xl")}>
        {eyebrow && (
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {t(eyebrow)}
          </p>
        )}
        <h2 className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {t(title)}
        </h2>
        {description && (
          <p className="mt-2 text-base text-muted">{t(description)}</p>
        )}
      </div>
      {action}
    </div>
  );
}
