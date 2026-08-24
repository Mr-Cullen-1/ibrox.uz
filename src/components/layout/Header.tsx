"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import { useSearch } from "@/context/SearchContext";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

const NAV_LINKS = [
  { href: "/catalog", label: "Каталог" },
  { href: "/catalog/iphone", label: "iPhone" },
  { href: "/catalog/samsung", label: "Samsung" },
  { href: "/catalog/apple", label: "Apple" },
  { href: "/catalog/accessories", label: "Аксессуары" },
  { href: "/installment", label: "Рассрочка" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const { count, openCart } = useCart();
  const { ids } = useFavorites();
  const { open: openSearch } = useSearch();
  const { t } = useTranslation();

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4">
        <div
          className={cn(
            "mx-auto flex h-14 w-full max-w-[1400px] items-center justify-between rounded-full border border-transparent px-3 transition-all duration-300 sm:px-4",
            scrolled
              ? "border-line bg-surface/80 shadow-soft backdrop-blur-md"
              : "bg-transparent"
          )}
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 pl-1 text-lg font-semibold tracking-tight text-ink"
          >
            <Image
              src="/brand/logo.jpg"
              alt="Apple Namangan"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
              priority
            />
            iBrox<span className="text-muted">.uz</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/catalog"
                  ? pathname === "/catalog"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-surface-2 hover:text-ink",
                    active && "bg-surface-2 text-ink"
                  )}
                >
                  {t(link.label)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <LanguageSwitcher className="mr-1 hidden sm:flex" />
            <button
              type="button"
              aria-label={t("Поиск")}
              onClick={openSearch}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-2"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </button>
            <Link
              href="/favorites"
              aria-label={t("Избранное")}
              className="relative hidden h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-2 sm:flex"
            >
              <Heart className="h-[18px] w-[18px]" strokeWidth={1.75} />
              {ids.length > 0 && (
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              )}
            </Link>
            <button
              type="button"
              aria-label={t("Корзина")}
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-2"
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.75} />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-ink px-1 text-[10px] font-semibold text-white">
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label={t("Меню")}
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-2 lg:hidden"
            >
              <Menu className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold tracking-tight text-ink"
              >
                <Image
                  src="/brand/logo.jpg"
                  alt="Apple Namangan"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
                iBrox<span className="text-muted">.uz</span>
              </Link>
              <button
                type="button"
                aria-label={t("Закрыть меню")}
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-surface-2"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05 } } }}
              className="flex flex-col gap-1 px-4 pt-4"
            >
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    className="block rounded-2xl px-4 py-4 text-2xl font-medium tracking-tight text-ink hover:bg-surface-2"
                  >
                    {t(link.label)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="mt-2 flex gap-3 px-4"
              >
                <Link
                  href="/favorites"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line py-3 text-sm font-medium"
                >
                  <Heart className="h-4 w-4" /> {t("Избранное")}
                </Link>
                <Link
                  href="/contacts"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line py-3 text-sm font-medium"
                >
                  {t("Контакты")}
                </Link>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="mt-3 flex justify-center px-4"
              >
                <LanguageSwitcher />
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
