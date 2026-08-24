import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/providers/AppProviders";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SearchOverlay } from "@/components/search/SearchOverlay";
import { CartDrawer } from "@/components/cart/CartDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ibrox.uz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "iBrox.uz — Apple Namangan | iPhone, Samsung и техника",
    template: "%s | iBrox.uz",
  },
  description:
    "iPhone, Samsung и техника в iBrox.uz. Выбирайте устройства и удобный способ покупки.",
  openGraph: {
    title: "iBrox.uz — Apple Namangan",
    description:
      "iPhone, Samsung и техника в iBrox.uz. Выбирайте устройства и удобный способ покупки.",
    url: siteUrl,
    siteName: "iBrox.uz",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <AppProviders>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <SearchOverlay />
          <CartDrawer />
        </AppProviders>
      </body>
    </html>
  );
}
