import Image from "next/image";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Your Guitar Instructor",
  description:
    "Meet your guitar instructor and learn the teaching approach built for adult beginners in Albuquerque, Los Lunas, and Bosque Farms.",
  path: "/about"
});

const coachingValues = [
  {
    title: "Clarity over complexity",
    description: "You get direct explanations and practical steps so each week feels manageable."
  },
  {
    title: "Encouragement with accountability",
    description: "Lessons stay positive while still keeping you focused on consistent progress."
  },
  {
    title: "Music first",
    description: "Technique matters, but real songs and confidence come first in every phase."
  }
];

const studioPhotos = [
  { src: "https://static.wixstatic.com/media/d40363_d4769241c85744b59df0a45ce9272226~mv2.jpg", alt: "Studio view 1" },
  { src: "https://static.wixstatic.com/media/d40363_fefd63608079409ead77ad0fa52f7ff7~mv2.jpg", alt: "Studio view 2" },
  { src: "https://static.wixstatic.com/media/d40363_e766a3eb3adf4034b67fdd5fcc5aeba0~mv2.jpg", alt: "Studio view 3" },
  { src: "https://static.wixstatic.com/media/d40363_b069edc492fa4638a6056030850ef2b7~mv2.jpg", alt: "Studio view 4" }
];

const AboutPage = () => {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Coaching for beginners and intermediates alike"
        description="The teaching style is built around real-world adult schedules: simple plans, practical milestones, and supportive one-on-one instruction."
        source="about_hero"
      />

      <section className="pb-8">
        <Container>
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <article className="reveal w-full rounded-2xl border border-brand-sand bg-white p-6 shadow-card sm:p-8">
              <div className="w-full">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-brand-sand bg-brand-bone shadow-soft">
                  <Image
                    src="https://static.wixstatic.com/media/d40363_1caac4cf56b34b8db5ad90f1e7582008~mv2.jpg"
                    alt="Richard Baca"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 320px"
                    priority
                  />
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pine">Instructor Story</p>
                  <h2 className="mt-2 font-display text-3xl leading-tight text-brand-ink sm:text-4xl">
                    A studio experience that feels welcoming and focused
                  </h2>
                </div>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-brand-ink/80 sm:text-base">
                  <p>Hi, I'm Richard Baca.</p>
                  <p>
                    I've been playing guitar for over 7 years and have spent the last 3 years working as a session musician in a
                    professional recording studio. I've seen what separates casual players from confident, capable musicians -- and
                    I help my students bridge that gap.
                  </p>
                  <p>Whether you're just starting out or looking to level up your skills, my goal is simple:</p>
                  <p className="font-medium text-brand-ink">
                    Help you reach a level where you can play effectively, efficiently, and confidently.
                  </p>
                </div>
              </div>
            </article>

            <aside className="reveal w-full rounded-2xl border border-brand-sand bg-white p-6 shadow-card sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pine">Studio</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {studioPhotos.map((photo) => (
                  <div
                    key={photo.src}
                    className="relative aspect-square w-full overflow-hidden rounded-xl border border-brand-sand bg-brand-bone"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>

              <div className="mx-auto mt-5 w-full max-w-xl rounded-2xl border border-brand-sand bg-white p-6 shadow-soft sm:p-8">
                <SectionHeading
                  eyebrow="Teaching Philosophy"
                  title="What students can expect each week"
                  description="The lesson experience is designed to reduce overwhelm and keep your momentum steady."
                />
              </div>
            </aside>
          </div>

          <div className="mt-12 flex justify-center lg:mt-10">
            <div className="w-full">
              <div className="grid gap-4 md:grid-cols-3">
                {coachingValues.map((value) => (
                  <article key={value.title} className="reveal rounded-2xl border border-brand-sand bg-white p-5 shadow-soft">
                    <h3 className="font-semibold text-brand-ink">{value.title}</h3>
                    <p className="mt-2 text-sm text-brand-ink/75">{value.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Meet your future guitar routine"
        copy="Book a free consultation and get an honest, personalized plan based on your goals and schedule."
      />
    </>
  );
};

export default AboutPage;
