"use client";

import { Camera } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { siteContact } from "@/data/site";
import { instagramReels } from "@/data/instagram";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * Instagram's public reel embed always renders a fixed 54px header before the
 * video, and the video itself is a fixed 4:5 box (confirmed by measuring the
 * embed at several widths — both hold regardless of iframe width). Shifting
 * the iframe up by that exact offset inside a 4:5, overflow-hidden frame
 * crops out Instagram's own header/caption/action-row chrome entirely,
 * leaving just the video — which we then re-frame with the site's own UI.
 */
const EMBED_HEADER_HEIGHT = 54;

export function InstagramSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Instagram"
          title="Более 100 000 человек уже с нами"
          description="Следите за новинками, акциями и новыми поступлениями в Instagram."
          className="mb-8"
          action={
            <LinkButton
              href={siteContact.instagram}
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              {t("Перейти в Instagram")}
            </LinkButton>
          }
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {instagramReels.map((code) => (
            <div
              key={code}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-2 shadow-soft transition-shadow hover:shadow-lift"
            >
              <iframe
                src={`https://www.instagram.com/reel/${code}/embed`}
                title={`Instagram Reel — apple_namangan`}
                className="absolute left-0 w-full border-0"
                style={{ top: -EMBED_HEADER_HEIGHT, height: 900 }}
                loading="lazy"
                allow="autoplay; encrypted-media"
                tabIndex={-1}
              />

              {/* Decorative frame drawn on top of the cropped video — non-interactive
                  so it never blocks the embed's own inline play/mute controls. */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-ink/5" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-ink/35 to-transparent" />

              <a
                href={`https://www.instagram.com/reel/${code}/`}
                target="_blank"
                rel="noreferrer"
                aria-label={t("Открыть в Instagram")}
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-surface/90 text-ink shadow-soft backdrop-blur transition-transform hover:scale-110"
              >
                <Camera className="h-3.5 w-3.5" strokeWidth={1.75} />
              </a>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center sm:hidden">
          <LinkButton href={siteContact.instagram} variant="secondary">
            Перейти в Instagram
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
