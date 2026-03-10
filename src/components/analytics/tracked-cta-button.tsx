"use client";

import type { ReactNode } from "react";

import { CtaButton } from "@/components/ui/cta-button";
import { trackEvent } from "@/lib/analytics";

type TrackedCtaButtonProps = {
  href: string;
  source: string;
  children: ReactNode;
  className?: string;
};

export const TrackedCtaButton = ({ href, source, children, className }: TrackedCtaButtonProps) => {
  return (
    <CtaButton
      href={href}
      className={className}
      onClick={() => {
        trackEvent("cta_click_free_intro", { source });
      }}
    >
      {children}
    </CtaButton>
  );
};
