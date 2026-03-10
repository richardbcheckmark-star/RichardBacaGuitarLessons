"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

import { cn } from "@/lib/cn";

export const ctaButtonStyles =
  "inline-flex items-center justify-center rounded-full border border-transparent bg-brand-clay px-6 py-3 text-sm font-semibold text-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-brand-dusk focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dusk focus-visible:ring-offset-2";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const CtaButton = ({ href, children, className, onClick }: CtaButtonProps) => {
  return (
    <Link href={href} onClick={onClick} className={cn(ctaButtonStyles, className)}>
      {children}
    </Link>
  );
};
