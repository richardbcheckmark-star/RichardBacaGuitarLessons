import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { FaqList } from "@/components/sections/faq-list";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceAreaPills } from "@/components/sections/service-area-pills";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { lessonBenefits, lessonFaq, lessonRoadmap } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";
import { buildFaqJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Beginner Guitar Lesson Program",
  description:
    "See exactly how the beginner guitar lesson path works, from your first month through your first 90 days.",
  path: "/lessons",
  keywords: [
    "beginner guitar program Albuquerque",
    "guitar lesson plan for adults",
    "structured guitar lessons NM",
    "one-on-one guitar lessons Albuquerque",
    "acoustic guitar lessons Albuquerque"
  ]
});

const LessonsPage = () => {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(lessonFaq)} />

      <PageHero
        eyebrow="Lessons"
        title="A clear system designed for beginners and intermediate learners"
        description="Each lesson combines hands-on playing, practical technique, and a simple plan for what to practice before your next session."
        source="lessons_hero"
      />

      <section className="pb-16">
        <Container>
          <SectionHeading
            eyebrow="How Lessons Work"
            title="Simple structure, measurable progress"
            description="You get one-on-one instruction, weekly accountability, and a roadmap you can follow even with a busy schedule."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {lessonBenefits.map((item) => (
              <article key={item} className="reveal rounded-2xl border border-brand-sand bg-white p-5 text-sm text-brand-ink/80 shadow-soft">
                {item}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="rounded-2xl border border-brand-sand bg-white p-6 shadow-soft sm:p-8">
            <SectionHeading
              eyebrow="Milestones"
              title="What you can expect in your first 90 days"
              description="Milestones keep lessons focused and help you hear progress quickly."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {lessonRoadmap.map((item) => (
                <article key={item.label} className="reveal rounded-xl bg-brand-bone px-4 py-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-brand-pine">{item.label}</h3>
                  <p className="mt-2 text-sm text-brand-ink/80">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <SectionHeading
                eyebrow="FAQ"
                title="Common questions before your first lesson"
                description="If you are unsure where to start, these are the questions most new students ask."
              />
              <FaqList items={lessonFaq} />
            </div>
            <aside className="reveal rounded-2xl border border-brand-sand bg-white p-6 shadow-soft">
              <h3 className="font-display text-2xl text-brand-ink">Service Areas</h3>
              <p className="mt-3 text-sm text-brand-ink/75">
                Lessons are available at the studio (5413 Lomas Blvd NE, Albuquerque) or in your home. Service area is mainly Albuquerque, plus Los Lunas and Bosque Farms.
              </p>
              <div className="mt-4">
                <ServiceAreaPills />
              </div>
              <div className="mt-6 space-y-2 text-sm font-semibold text-brand-pine">
                <Link href="/guitar-lessons-albuquerque-nm">Albuquerque lessons page</Link>
                <Link href="/guitar-lessons-los-lunas-nm" className="block">Los Lunas lessons page</Link>
                <Link href="/guitar-lessons-bosque-farms-nm" className="block">Bosque Farms lessons page</Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Start with a free consultation"
        copy="You will leave your consultation with a custom beginner roadmap and clear next steps."
      />
    </>
  );
};

export default LessonsPage;
