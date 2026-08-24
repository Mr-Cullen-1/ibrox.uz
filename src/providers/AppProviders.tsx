"use client";

import type { ReactNode } from "react";
import { LocaleProvider } from "@/context/LocaleContext";
import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { SearchProvider } from "@/context/SearchContext";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <SearchProvider>
        <FavoritesProvider>
          <CartProvider>{children}</CartProvider>
        </FavoritesProvider>
      </SearchProvider>
    </LocaleProvider>
  );
}
