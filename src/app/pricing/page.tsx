import Link from "next/link";

import { TrackedCtaButton } from "@/components/analytics/tracked-cta-button";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricing } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Guitar Lesson Pricing",
  description:
    "Transparent beginner guitar lesson pricing with a free consultation and flexible package options.",
  path: "/pricing"
});

const PricingPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Straightforward pricing with a free consultation"
        description="Start with a no-cost consultation to map your goals, then choose a lesson path that fits your schedule and budget."
        source="pricing_hero"
      />

      <section className="pb-16">
        <Container>
          <div className="reveal rounded-3xl border border-brand-sand bg-white p-8 shadow-card sm:p-10">
            <SectionHeading
              title={`Lessons start at ${pricing.startingPrice}`}
              description={`Standard lesson length: ${pricing.lessonDuration}.`}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {pricing.packages.map((plan) => (
                <article key={plan.title} className="rounded-2xl border border-brand-sand bg-brand-bone p-5">
                  <h3 className="font-display text-2xl text-brand-ink">{plan.title}</h3>
                  <p className="mt-2 text-sm text-brand-ink/75">{plan.description}</p>
                  <p className="mt-4 text-sm font-semibold text-brand-pine">{plan.price}</p>
                </article>
              ))}
            </div>

            <p className="mt-6 text-sm text-brand-ink/70">
              Need a custom frequency plan? Use the <Link href="/contact" className="font-semibold text-brand-pine">contact form</Link> and
              share your schedule.
            </p>

            <TrackedCtaButton href="/contact" source="pricing_main" className="mt-8">
              Schedule a Free Consultation
            </TrackedCtaButton>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <SectionHeading
            eyebrow="What Is Included"
            title="Every student plan includes"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "One-on-one instruction with personalized pacing",
              "Weekly practice checklist and progress tracking",
              "Song-focused curriculum tailored to your interests"
            ].map((item) => (
              <article key={item} className="reveal rounded-2xl border border-brand-sand bg-white p-5 text-sm text-brand-ink/80 shadow-soft">
                {item}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Have a budget question?"
        copy="Use the free consultation to discuss options and choose a plan that keeps you consistent long-term."
      />
    </>
  );
};

export default PricingPage;
