import Link from "next/link";

import { TrackedCtaButton } from "@/components/analytics/tracked-cta-button";
import { FaqList } from "@/components/sections/faq-list";
import { NapCard } from "@/components/sections/nap-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { LocalPageContent } from "@/types/content";

type LocalAreaPageProps = {
  content: LocalPageContent;
};

export const LocalAreaPage = ({ content }: LocalAreaPageProps) => {
  return (
    <>
      <section className="py-14 sm:py-20">
        <Container>
          <div className="reveal rounded-3xl border border-brand-sand bg-white p-8 shadow-card sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pine">Local Service Area</p>
            <h1 className="mt-3 font-display text-4xl text-brand-ink sm:text-5xl">{content.h1}</h1>
            <p className="mt-5 max-w-3xl text-brand-ink/75">{content.intro}</p>
            <TrackedCtaButton href="/contact" source={content.slug} className="mt-8">
              Book Your Free Consultation
            </TrackedCtaButton>
          </div>
        </Container>
      </section>

      <section className="pb-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <article className="rounded-2xl border border-brand-sand bg-white p-6 shadow-soft sm:p-8">
              <SectionHeading
                eyebrow="Why This Works"
                title="A focused beginner plan for local students"
                description={content.localFit}
              />

              <ul className="space-y-3">
                {content.highlights.map((highlight) => (
                  <li key={highlight} className="reveal rounded-xl bg-brand-bone px-4 py-3 text-sm text-brand-ink/80">
                    {highlight}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-brand-ink/70">
                Want details first? Visit the{" "}
                <Link href="/pricing" className="font-semibold text-brand-pine">
                  pricing page
                </Link>{" "}
                or review outcomes on the{" "}
                <Link href="/testimonials" className="font-semibold text-brand-pine">
                  testimonials page
                </Link>
                .
              </p>
            </article>

            <NapCard />
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <SectionHeading
            eyebrow="Local FAQ"
            title={`Questions from ${content.areaName} students`}
            description="Answers to common questions before your first lesson."
          />
          <FaqList items={content.faq} />
        </Container>
      </section>
    </>
  );
};
