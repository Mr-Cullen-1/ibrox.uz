"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/types/product";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export interface CartItem {
  product: Product;
  quantity: number;
  color: string;
  storage: string;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, color: string, storage: string) => void;
  removeItem: (productId: string, color: string, storage: string) => void;
  setQuantity: (
    productId: string,
    color: string,
    storage: string,
    quantity: number
  ) => void;
  subtotal: number;
  count: number;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "ibrox-cart";
const EMPTY_ITEMS: CartItem[] = [];

function keyOf(productId: string, color: string, storage: string) {
  return `${productId}__${color}__${storage}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useLocalStorage<CartItem[]>(STORAGE_KEY, EMPTY_ITEMS);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback(
    (product: Product, color: string, storage: string) => {
      setItems((prev) => {
        const k = keyOf(product.id, color, storage);
        const existing = prev.find(
          (i) => keyOf(i.product.id, i.color, i.storage) === k
        );
        if (existing) {
          return prev.map((i) =>
            keyOf(i.product.id, i.color, i.storage) === k
              ? { ...i, quantity: i.quantity + 1 }
              : i
          );
        }
        return [...prev, { product, quantity: 1, color, storage }];
      });
      setIsOpen(true);
    },
    [setItems]
  );

  const removeItem = useCallback(
    (productId: string, color: string, storage: string) => {
      const k = keyOf(productId, color, storage);
      setItems((prev) =>
        prev.filter((i) => keyOf(i.product.id, i.color, i.storage) !== k)
      );
    },
    [setItems]
  );

  const setQuantity = useCallback(
    (productId: string, color: string, storage: string, quantity: number) => {
      const k = keyOf(productId, color, storage);
      setItems((prev) =>
        prev.map((i) =>
          keyOf(i.product.id, i.color, i.storage) === k
            ? { ...i, quantity: Math.max(1, quantity) }
            : i
        )
      );
    },
    [setItems]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [items]
  );
  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const value: CartContextValue = {
    items,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    removeItem,
    setQuantity,
    subtotal,
    count,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
