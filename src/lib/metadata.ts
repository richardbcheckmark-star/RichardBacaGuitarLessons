import type { Metadata } from "next";

import { siteConfig } from "@/content/site-content";
import { absoluteUrl } from "@/lib/site";

const DEFAULT_KEYWORDS = [
  "guitar lessons Albuquerque",
  "learn guitar Albuquerque NM",
  "adult guitar lessons",
  "beginner guitar Albuquerque",
  "guitar teacher Albuquerque",
  "guitar classes near me"
];

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const buildMetadata = ({ title, description, path, keywords }: BuildMetadataInput): Metadata => {
  const canonical = absoluteUrl(path);
  const ogImage = {
    url: absoluteUrl(siteConfig.defaultOgImage),
    width: 1200,
    height: 630,
    alt: "Richard Baca Guitar Lessons - Adult Beginner Guitar Lessons in Albuquerque, NM"
  };

  return {
    title,
    description,
    keywords: keywords ? [...keywords, ...DEFAULT_KEYWORDS] : DEFAULT_KEYWORDS,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.siteName,
      images: [ogImage],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    }
  };
};
