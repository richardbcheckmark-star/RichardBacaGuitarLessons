"use client";

import { CtaButton } from "@/components/ui/cta-button";
import { trackEvent } from "@/lib/analytics";

export const StickyMobileCta = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-sand bg-brand-bone/95 p-3 backdrop-blur sm:hidden">
      <CtaButton
        href="/contact"
        className="w-full"
        onClick={() => trackEvent("cta_click_free_intro", { source: "sticky_mobile" })}
      >
        Free Consultation
      </CtaButton>
    </div>
  );
};
