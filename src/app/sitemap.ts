import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site";

const routes = [
  "",
  "/lessons",
  "/about",
  "/testimonials",
  "/pricing",
  "/contact",
  "/guitar-lessons-albuquerque-nm",
  "/guitar-lessons-los-lunas-nm",
  "/guitar-lessons-bosque-farms-nm",
  "/thank-you"
];

const sitemap = (): MetadataRoute.Sitemap => {
  const base = getSiteUrl();
  const now = new Date();

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
};

export default sitemap;
