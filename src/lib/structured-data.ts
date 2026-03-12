import { siteConfig } from "@/content/site-content";
import { absoluteUrl } from "@/lib/site";
import type { FaqItem } from "@/types/content";

export const buildLocalBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "MusicSchool",
  name: siteConfig.siteName,
  url: absoluteUrl("/"),
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  image: [
    "https://static.wixstatic.com/media/d40363_1caac4cf56b34b8db5ad90f1e7582008~mv2.jpg",
    "https://static.wixstatic.com/media/d40363_d4769241c85744b59df0a45ce9272226~mv2.jpg",
    "https://static.wixstatic.com/media/d40363_fefd63608079409ead77ad0fa52f7ff7~mv2.jpg",
    "https://static.wixstatic.com/media/d40363_e766a3eb3adf4034b67fdd5fcc5aeba0~mv2.jpg",
    "https://static.wixstatic.com/media/d40363_b069edc492fa4638a6056030850ef2b7~mv2.jpg",
    "https://static.wixstatic.com/media/d40363_6cf9369887d74e0dbba8ceb0338c2c9b~mv2.png"
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
    addressLocality: "Albuquerque",
    addressRegion: "NM",
    postalCode: "87102",
    addressCountry: "US"
  },
  areaServed: siteConfig.serviceAreas.map((area) => ({
    "@type": "City",
    name: area
  })),
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram]
});

export const buildFaqJsonLd = (faqItems: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
});
