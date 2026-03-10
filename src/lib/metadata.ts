import type { Metadata } from "next";

import { siteConfig } from "@/content/site-content";
import { absoluteUrl } from "@/lib/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export const buildMetadata = ({ title, description, path }: BuildMetadataInput): Metadata => {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.siteName,
      images: [absoluteUrl(siteConfig.defaultOgImage)],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.defaultOgImage)]
    }
  };
};
