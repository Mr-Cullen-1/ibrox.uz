"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatUZS } from "@/lib/utils";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/hooks/useTranslation";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, subtotal } = useCart();
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/40 backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 z-[71] flex h-full w-full max-w-md flex-col bg-surface shadow-lift"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <h2 className="text-lg font-medium tracking-tight text-ink">{t("Корзина")}</h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label={t("Закрыть корзину")}
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-surface-2"
              >
                <X className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <ShoppingBag className="h-10 w-10 text-muted" strokeWidth={1.25} />
                <p className="text-sm text-muted">{t("Корзина пока пуста")}</p>
                <Button variant="secondary" size="sm" onClick={closeCart}>
                  {t("Продолжить выбор")}
                </Button>
              </div>
            ) : (
              <>
                <ul className="flex flex-1 flex-col gap-4 overflow-y-auto px-6 py-5">
                  {items.map((item) => {
                    const key = `${item.product.id}-${item.color}-${item.storage}`;
                    return (
                      <li key={key} className="flex gap-3">
                        <ProductVisual
                          name={item.product.name}
                          category={item.product.category}
                          image={item.product.images[0]}
                          className="h-20 w-20 shrink-0 rounded-2xl"
                          iconClassName="h-1/2 w-1/2"
                          sizes="80px"
                        />
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <p className="text-sm font-medium text-ink">
                              {t(item.product.name)}
                            </p>
                            <p className="text-xs text-muted">
                              {item.color} · {item.storage}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 rounded-full border border-line px-1.5 py-1">
                              <button
                                type="button"
                                aria-label={t("Уменьшить количество")}
                                onClick={() =>
                                  setQuantity(
                                    item.product.id,
                                    item.color,
                                    item.storage,
                                    item.quantity - 1
                                  )
                                }
                                className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-surface-2"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-4 text-center text-xs font-medium">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                aria-label={t("Увеличить количество")}
                                onClick={() =>
                                  setQuantity(
                                    item.product.id,
                                    item.color,
                                    item.storage,
                                    item.quantity + 1
                                  )
                                }
                                className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-surface-2"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <p className="text-sm font-medium text-ink">
                              {formatUZS(item.product.price * item.quantity, t("сум"))}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          aria-label={t("Удалить товар")}
                          onClick={() =>
                            removeItem(item.product.id, item.color, item.storage)
                          }
                          className="flex h-7 w-7 shrink-0 items-center justify-center self-start rounded-full text-muted hover:bg-surface-2 hover:text-ink"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <div className="border-t border-line px-6 py-5">
                  <div className="mb-4 flex items-center justify-between text-sm">
                    <span className="text-muted">{t("Промежуточный итог")}</span>
                    <span className="font-medium text-ink">{formatUZS(subtotal, t("сум"))}</span>
                  </div>
                  <Link href="/contacts" onClick={closeCart}>
                    <Button className="w-full" size="lg">
                      {t("Оформить заявку")}
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
