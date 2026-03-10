import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Student Testimonials",
  description:
    "See beginner guitar student outcomes from Albuquerque, Los Lunas, and Bosque Farms.",
  path: "/testimonials"
});

const TestimonialsPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Real beginner wins from local students"
        description="These stories show what happens when adult beginners follow a clear, consistent lesson plan."
        source="testimonials_hero"
      />

      <section className="pb-16">
        <Container>
          <SectionHeading
            title="Student feedback"
            description="Replace placeholder testimonials with your own student quotes, names (with permission), and outcomes."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="You can be the next success story"
        copy="Start with a free consultation and get a custom plan that turns intention into consistent progress."
      />
    </>
  );
};

export default TestimonialsPage;
