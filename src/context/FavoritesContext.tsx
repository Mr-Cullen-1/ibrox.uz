"use client";

import { createContext, useCallback, useContext, type ReactNode } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface FavoritesContextValue {
  ids: string[];
  toggle: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);
const STORAGE_KEY = "ibrox-favorites";
const EMPTY_IDS: string[] = [];

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useLocalStorage<string[]>(STORAGE_KEY, EMPTY_IDS);

  const toggle = useCallback(
    (productId: string) => {
      setIds((prev) =>
        prev.includes(productId)
          ? prev.filter((id) => id !== productId)
          : [...prev, productId]
      );
    },
    [setIds]
  );

  const isFavorite = useCallback((productId: string) => ids.includes(productId), [ids]);

  return (
    <FavoritesContext.Provider value={{ ids, toggle, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
