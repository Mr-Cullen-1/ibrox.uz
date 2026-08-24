# iBrox.uz — Apple Namangan

Premium-сайт магазина техники iBrox.uz (бренд «Apple Namangan»): iPhone, Samsung, аксессуары, покупка за наличные или в рассрочку.

## Стек

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons

## Запуск локально

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Другие команды:

```bash
npm run build   # production-сборка
npm run start   # запуск production-сборки локально
npm run lint    # ESLint
```

## Структура проекта

```
src/
  app/                 # страницы (App Router)
  components/          # компоненты по разделам (home, product, catalog, cart, search, layout, ui, installment, i18n)
  context/              # React Context: корзина, избранное, поиск, язык
  data/                 # демо-данные: товары, категории, рассрочка, контакты, переводы
  hooks/                # useLocalStorage, useTranslation
  lib/                  # утилиты (cn, formatUZS)
  providers/            # корневой AppProviders
  types/                # типы TypeScript
public/
  brand/ categories/ hero/ products/   # изображения
```

## Данные

Каталог, категории, условия рассрочки и контакты магазина лежат в `src/data/*.ts` — это единственное место, которое нужно менять при обновлении цен, товаров или контактов. Компоненты UI менять не требуется.

Цены и часть характеристик — демонстрационные (см. комментарии в `src/data/products.ts`).

## Локализация

Сайт поддерживает русский и узбекский (латиница) языки, переключатель — в шапке сайта. Механизм перевода — словарь `src/data/translations.ts` (ключ — русская строка, значение — перевод) и хук `useTranslation()`. Подробности — в комментариях `src/hooks/useTranslation.ts`.

## Деплой

Проект готов к деплою на [Vercel](https://vercel.com/new) — импортируйте репозиторий, Vercel определит Next.js автоматически. Переменные окружения не требуются.
