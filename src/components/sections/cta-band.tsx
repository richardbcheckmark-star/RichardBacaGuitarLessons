"use client";

import { CtaButton } from "@/components/ui/cta-button";
import { trackEvent } from "@/lib/analytics";

type CtaBandProps = {
  title: string;
  copy: string;
  ctaLabel?: string;
};

export const CtaBand = ({ title, copy, ctaLabel = "Book Your Free Consultation" }: CtaBandProps) => {
  return (
    <section className="py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal rounded-3xl bg-brand-dusk px-6 py-10 text-white shadow-card sm:px-10">
          <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base">{copy}</p>
          <CtaButton
            href="/contact"
            className="mt-7 bg-brand-clay hover:bg-brand-pine"
            onClick={() => trackEvent("cta_click_free_intro", { source: "cta_band" })}
          >
            {ctaLabel}
          </CtaButton>
        </div>
      </div>
    </section>
  );
};
