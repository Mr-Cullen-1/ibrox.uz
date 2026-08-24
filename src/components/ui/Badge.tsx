"use client";

import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";

interface BadgeProps {
  children: React.ReactNode;
  tone?: "accent" | "dark" | "light";
  className?: string;
}

const tones = {
  accent: "bg-accent text-accent-ink",
  dark: "bg-primary text-primary-foreground",
  light: "bg-surface text-ink border border-line",
};

export function Badge({ children, tone = "accent", className }: BadgeProps) {
  const { t } = useTranslation();

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        tones[tone],
        className
      )}
    >
      {typeof children === "string" ? t(children) : children}
    </span>
  );
}
