import { CtaBand } from "@/components/sections/cta-band";
import { LocalAreaPage } from "@/components/sections/local-area-page";
import { JsonLd } from "@/components/seo/json-ld";
import { localPages } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";
import { buildFaqJsonLd, buildLocalBusinessJsonLd } from "@/lib/structured-data";

const pageContent = localPages.albuquerque;

export const metadata = buildMetadata({
  title: pageContent.pageTitle,
  description: pageContent.pageDescription,
  path: `/${pageContent.slug}`
});

const AlbuquerquePage = () => {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <JsonLd data={buildFaqJsonLd(pageContent.faq)} />
      <LocalAreaPage content={pageContent} />
      <CtaBand
        title="Albuquerque beginners can start this week"
        copy="Request your free consultation and get a practical path tailored to your goals and schedule."
      />
    </>
  );
};

export default AlbuquerquePage;
