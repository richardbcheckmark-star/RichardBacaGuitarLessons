import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

const robots = (): MetadataRoute.Robots => {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`
  };
};

export default robots;
