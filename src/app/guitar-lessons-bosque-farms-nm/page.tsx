import { CtaBand } from "@/components/sections/cta-band";
import { LocalAreaPage } from "@/components/sections/local-area-page";
import { JsonLd } from "@/components/seo/json-ld";
import { localPages } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";
import { buildFaqJsonLd, buildLocalBusinessJsonLd } from "@/lib/structured-data";

const pageContent = localPages.bosqueFarms;

export const metadata = buildMetadata({
  title: pageContent.pageTitle,
  description: pageContent.pageDescription,
  path: `/${pageContent.slug}`,
  keywords: [
    "guitar lessons Bosque Farms NM",
    "learn guitar Bosque Farms New Mexico",
    "guitar teacher near Bosque Farms",
    "beginner guitar lessons Bosque Farms",
    "private guitar instruction Bosque Farms"
  ]
});

const BosqueFarmsPage = () => {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <JsonLd data={buildFaqJsonLd(pageContent.faq)} />
      <LocalAreaPage content={pageContent} />
      <CtaBand
        title="Bosque Farms learners can begin with zero pressure"
        copy="Use the free consultation to discuss your goals and leave with a personalized 90-day beginner plan."
      />
    </>
  );
};

export default BosqueFarmsPage;
