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
