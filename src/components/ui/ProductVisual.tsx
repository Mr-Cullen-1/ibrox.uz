import Image from "next/image";
import {
  Smartphone,
  Watch,
  Headphones,
  Tablet,
  Cable,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/types/product";

const TONES: Record<CategorySlug, string> = {
  iphone: "linear-gradient(135deg, #eef0ea 0%, #c3cddd 60%, #97a8c4 100%)",
  samsung: "linear-gradient(135deg, #eceafb 0%, #c6cdf2 60%, #97a1dd 100%)",
  apple: "linear-gradient(135deg, #f1efe6 0%, #ddd6c3 60%, #c3b89e 100%)",
  accessories: "linear-gradient(135deg, #eef2df 0%, #d7e2b4 60%, #b7c98a 100%)",
};

function resolveIcon(name: string, category: CategorySlug): LucideIcon {
  const n = name.toLowerCase();
  if (n.includes("watch")) return Watch;
  if (n.includes("pods") || n.includes("headphone")) return Headphones;
  if (n.includes("ipad") || n.includes("tablet")) return Tablet;
  if (category === "accessories") return Cable;
  return Smartphone;
}

interface ProductVisualProps {
  name: string;
  category: CategorySlug;
  image?: string;
  className?: string;
  iconClassName?: string;
  priority?: boolean;
  /** Passed straight to next/image's `sizes` — match the rendered box per breakpoint. */
  sizes?: string;
  /**
   * "contain" (default) insets an isolated product cutout with breathing room.
   * "cover" fills the box edge-to-edge — for banner-style images already
   * composed to a specific card's aspect ratio (e.g. category tiles).
   */
  fit?: "contain" | "cover";
}

/**
 * Демо-визуал товара: пока нет реальных фото, рендерим премиальную
 * заглушку (градиент + иконка устройства). Если `image` — это путь
 * или URL (начинается с "/" или "http"), рендерится настоящее изображение.
 */
export function ProductVisual({
  name,
  category,
  image,
  className,
  iconClassName,
  priority,
  sizes = "(min-width: 1024px) 25vw, 50vw",
  fit = "contain",
}: ProductVisualProps) {
  const isRealImage = !!image && (image.startsWith("/") || image.startsWith("http"));

  if (isRealImage) {
    if (fit === "cover") {
      return (
        // bg-surface (white), not bg-surface-2: these banner images carry
        // their own white product cutouts on a transparent canvas, so a
        // white tile blends seamlessly instead of showing a tan seam.
        // object-contain (not cover): the card's aspect ratio doesn't
        // exactly match every image's, and cropping via cover was cutting
        // off part of the photo — contain always shows the full image.
        <div className={cn("relative overflow-hidden bg-surface", className)}>
          <Image
            src={image!}
            alt={name}
            fill
            priority={priority}
            sizes={sizes}
            className="object-contain"
          />
        </div>
      );
    }

    return (
      <div className={cn("relative overflow-hidden bg-surface-2", className)}>
        {/*
          Inset (not padding) on all sides: percentage padding always resolves
          against the container's WIDTH, even for top/bottom — on a wide/short
          box that eats nearly the whole height. `inset` resolves each axis
          against its own dimension, so this stays proportional at any aspect ratio.
        */}
        <div className="absolute inset-[8%]">
          <Image
            src={image!}
            alt={name}
            fill
            priority={priority}
            sizes={sizes}
            className="object-contain"
          />
        </div>
      </div>
    );
  }

  const Icon = resolveIcon(name, category);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        className
      )}
      style={{ background: TONES[category] }}
      role="img"
      aria-label={name}
    >
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle,_#000_1px,_transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/40 blur-3xl" />
      {/* Icon is picked from a fixed set of stable, module-level icon
          components, so it never remounts unexpectedly. */}
      {/* eslint-disable-next-line react-hooks/static-components */}
      <Icon
        strokeWidth={1}
        className={cn(
          "relative text-ink/70 drop-shadow-sm",
          iconClassName ?? "h-1/3 w-1/3"
        )}
      />
    </div>
  );
}
