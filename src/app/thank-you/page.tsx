import Link from "next/link";

import { TrackedScheduleLink } from "@/components/analytics/tracked-schedule-link";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site-content";

export const metadata = buildMetadata({
  title: "Thanks for Your Request",
  description: "Your free consultation request was submitted. Choose a time to complete your scheduling.",
  path: "/thank-you"
});

const ThankYouPage = () => {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="reveal mx-auto max-w-2xl rounded-3xl border border-brand-sand bg-white px-8 py-12 text-center shadow-card sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pine">You are all set</p>
          <h1 className="mt-3 font-display text-4xl text-brand-ink sm:text-5xl">Thanks for reaching out</h1>
          <p className="mt-4 text-sm leading-relaxed text-brand-ink/75 sm:text-base">
            Your request is in. Next step: choose a time on the scheduling page so your free consultation can be confirmed.
          </p>

          <TrackedScheduleLink href={siteConfig.contact.scheduleUrl} className="mt-8">
            Choose My Consultation Time
          </TrackedScheduleLink>

          <p className="mt-5 text-xs text-brand-ink/65">If you prefer, call {siteConfig.contact.phone} for direct scheduling support.</p>
          <Link href="/" className="mt-6 inline-block text-sm font-semibold text-brand-pine">
            Return to homepage
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ThankYouPage;
