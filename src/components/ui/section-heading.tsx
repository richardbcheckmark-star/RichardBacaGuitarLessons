import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  action
}: SectionHeadingProps) => {
  const centered = align === "center";

  return (
    <div className={cn("mb-10", centered && "text-center")}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-pine">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-brand-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base text-brand-ink/75">{description}</p> : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
};
