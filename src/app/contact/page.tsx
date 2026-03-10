import { LeadForm } from "@/components/forms/lead-form";
import { CtaBand } from "@/components/sections/cta-band";
import { NapCard } from "@/components/sections/nap-card";
import { ServiceAreaPills } from "@/components/sections/service-area-pills";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";
import { buildLocalBusinessJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Book a Free Guitar Consultation",
  description:
    "Request your free guitar consultation and get a personalized beginner plan for Albuquerque, Los Lunas, or Bosque Farms.",
  path: "/contact"
});

const ContactPage = () => {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd()} />

      <PageHero
        eyebrow="Contact"
        title="Book your free consultation"
        description="Tell us your goals and schedule. You will get a quick response and a personalized beginner roadmap."
        source="contact_hero"
      />

      <section className="pb-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <SectionHeading
                title="Tell us about your goals"
                description="This quick form helps us prepare a useful consultation based on your starting point and preferred schedule."
              />
              <LeadForm sourcePage="/contact" />
            </div>

            <div className="space-y-5">
              <NapCard />
              <article className="reveal rounded-2xl border border-brand-sand bg-white p-6 shadow-soft">
                <h3 className="font-display text-2xl text-brand-ink">Service Areas</h3>
                <p className="mt-2 text-sm text-brand-ink/75">
                  Lessons are offered at the studio (5413 Lomas Blvd NE, Albuquerque) or in your home. Service area is mainly Albuquerque, plus Los Lunas and Bosque Farms.
                </p>
                <div className="mt-4">
                  <ServiceAreaPills />
                </div>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Prefer a quick call first?"
        copy={`Call ${siteConfig.contact.phone} and mention you are requesting the free consultation.`}
      />
    </>
  );
};

export default ContactPage;
