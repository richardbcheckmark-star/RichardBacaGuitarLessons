import type { Testimonial } from "@/types/content";

export const TestimonialCard = ({ name, location, quote, outcome }: Testimonial) => {
  return (
    <article className="reveal rounded-2xl border border-brand-sand/70 bg-white p-6 shadow-card">
      <p className="text-base leading-relaxed text-brand-ink/80">"{quote}"</p>
      <div className="mt-6 border-t border-brand-sand/80 pt-4">
        <p className="font-semibold text-brand-ink">{name}</p>
        <p className="text-sm text-brand-ink/65">{location}</p>
        <p className="mt-2 inline-flex rounded-full bg-brand-bone px-3 py-1 text-xs font-medium text-brand-pine">{outcome}</p>
      </div>
    </article>
  );
};
