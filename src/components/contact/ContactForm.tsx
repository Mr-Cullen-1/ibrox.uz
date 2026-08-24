"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/hooks/useTranslation";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-surface p-10 text-center shadow-soft">
        <CheckCircle2 className="h-10 w-10 text-ink" strokeWidth={1.5} />
        <p className="text-lg font-medium tracking-tight text-ink">
          {t("Заявка отправлена")}
        </p>
        <p className="max-w-xs text-sm text-muted">
          {t("Мы свяжемся с вами в ближайшее время.")}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-3xl bg-surface p-6 shadow-soft sm:p-8"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
          {t("Имя")}
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-2xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none"
          placeholder={t("Ваше имя")}
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink">
          {t("Телефон")}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-2xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none"
          placeholder="+998 XX XXX XX XX"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          {t("Сообщение")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full resize-none rounded-2xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none"
          placeholder={t("Какое устройство вас интересует?")}
        />
      </div>
      <Button type="submit" size="lg" className="mt-2 w-full">
        {t("Отправить заявку")}
      </Button>
    </form>
  );
}
