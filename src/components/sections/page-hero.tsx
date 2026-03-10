import { TrackedCtaButton } from "@/components/analytics/tracked-cta-button";
import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  source: string;
  ctaLabel?: string;
};

export const PageHero = ({
  eyebrow,
  title,
  description,
  source,
  ctaLabel = "Book a Free Consultation"
}: PageHeroProps) => {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="reveal rounded-3xl border border-brand-sand bg-white/95 px-6 py-10 shadow-card sm:px-10 sm:py-14">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pine">{eyebrow}</p> : null}
          <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight text-brand-ink sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base text-brand-ink/75 sm:text-lg">{description}</p>
          <TrackedCtaButton href="/contact" source={source} className="mt-8">
            {ctaLabel}
          </TrackedCtaButton>
        </div>
      </Container>
    </section>
  );
};
