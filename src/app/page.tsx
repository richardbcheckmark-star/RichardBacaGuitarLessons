import Image from "next/image";

import { TrackedCtaButton } from "@/components/analytics/tracked-cta-button";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { heroBullets, lessonBenefits, lessonFaq, siteConfig, testimonials } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";
import { buildFaqJsonLd, buildLocalBusinessJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Adult Beginner Guitar Lessons in Albuquerque, NM",
  description:
    "Friendly in-person guitar lessons for adult beginners in Albuquerque, Los Lunas, and Bosque Farms. Start with a free consultation.",
  path: "/"
});

const HomePage = () => {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <JsonLd data={buildFaqJsonLd(lessonFaq)} />

      <section className="pt-14 sm:pt-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-brand-sand shadow-card">
            <Image
              src="https://static.wixstatic.com/media/d40363_6cf9369887d74e0dbba8ceb0338c2c9b~mv2.png"
              alt="Guitar lesson banner"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/80 via-brand-ink/50 to-brand-ink/35" />

            <div className="relative z-10 flex min-h-[520px] flex-col items-center justify-center gap-8 p-8 text-center sm:p-12">
              <div className="reveal flex max-w-4xl flex-col items-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bone/85">
                  Beginner And Intermediate Guitar Coaching
                </p>
                <h1 className="mt-3 font-display text-4xl leading-tight text-white sm:text-6xl">
                  Discover Your Guitar Skills and Play with Confidence.
                </h1>
                <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">{siteConfig.tagLine}</p>
                <TrackedCtaButton href="/contact" source="home_hero" className="mt-8">
                  Book a Free Consultation
                </TrackedCtaButton>
              </div>

              <ul className="grid w-full max-w-5xl gap-4 md:grid-cols-3">
                {heroBullets.map((bullet) => (
                  <li key={bullet} className="reveal rounded-2xl bg-white/90 px-4 py-4 text-sm text-brand-ink/85 shadow-soft">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            title="A structured path that helps beginners stay consistent"
            description="Every lesson ends with a concrete next-step plan so you always know exactly what to practice."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {lessonBenefits.map((item) => (
              <article key={item} className="reveal rounded-2xl border border-brand-sand/80 bg-white p-5 text-sm text-brand-ink/80 shadow-soft">
                {item}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <SectionHeading
            eyebrow="Student Outcomes"
            title="What beginners are saying"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready to play your first songs with confidence?"
        copy="Start with a free consultation and a personalized beginner roadmap designed around your schedule."
      />
    </>
  );
};

export default HomePage;
