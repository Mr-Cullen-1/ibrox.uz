import type { Metadata } from "next";
import { TrustSection } from "@/components/home/TrustSection";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "О магазине",
  description: "iBrox.uz — Apple Namangan. Магазин техники с большой аудиторией в Instagram.",
};

export default function AboutPage() {
  return (
    <>
      <AboutPageContent />
      <TrustSection />
    </>
  );
}
