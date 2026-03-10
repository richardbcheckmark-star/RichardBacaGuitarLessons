"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CtaButton } from "@/components/ui/cta-button";
import { navItems, siteConfig } from "@/content/site-content";
import { cn } from "@/lib/cn";
import { trackEvent } from "@/lib/analytics";

export const SiteHeader = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-sand/70 bg-brand-bone/95 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="font-display text-2xl leading-none text-brand-ink">
              {siteConfig.siteName}
            </Link>
            <p className="hidden text-xs text-brand-ink/70 sm:block">5413 Lomas Blvd NE, Albuquerque, NM 87110</p>
          </div>

          <nav aria-label="Primary" className="flex flex-wrap items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-brand-ink/75 transition hover:bg-white hover:text-brand-ink",
                    isActive && "bg-white text-brand-ink shadow-soft"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <CtaButton
              href="/contact"
              className="hidden sm:inline-flex"
              onClick={() => trackEvent("cta_click_free_intro", { source: "header" })}
            >
              Free Consultation
            </CtaButton>
          </nav>
        </div>
      </div>
    </header>
  );
};
