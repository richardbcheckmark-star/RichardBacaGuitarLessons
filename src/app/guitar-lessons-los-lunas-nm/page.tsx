import { CtaBand } from "@/components/sections/cta-band";
import { LocalAreaPage } from "@/components/sections/local-area-page";
import { JsonLd } from "@/components/seo/json-ld";
import { localPages } from "@/content/site-content";
import { buildMetadata } from "@/lib/metadata";
import { buildFaqJsonLd, buildLocalBusinessJsonLd } from "@/lib/structured-data";

const pageContent = localPages.losLunas;

export const metadata = buildMetadata({
  title: pageContent.pageTitle,
  description: pageContent.pageDescription,
  path: `/${pageContent.slug}`
});

const LosLunasPage = () => {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <JsonLd data={buildFaqJsonLd(pageContent.faq)} />
      <LocalAreaPage content={pageContent} />
      <CtaBand
        title="Los Lunas guitar students: start with clarity"
        copy="Book your free consultation and get a structured beginner roadmap you can follow every week."
      />
    </>
  );
};

export default LosLunasPage;
