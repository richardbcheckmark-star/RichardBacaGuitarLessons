"use client";

import type { ReactNode } from "react";

import { ctaButtonStyles } from "@/components/ui/cta-button";
import { cn } from "@/lib/cn";
import { trackEvent } from "@/lib/analytics";

type TrackedScheduleLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export const TrackedScheduleLink = ({ href, children, className }: TrackedScheduleLinkProps) => {
  return (
    <a
      href={href}
      className={cn(ctaButtonStyles, className)}
      target="_blank"
      rel="noreferrer"
      onClick={() => {
        trackEvent("schedule_click_after_submit", { source: "thank_you" });
      }}
    >
      {children}
    </a>
  );
};
