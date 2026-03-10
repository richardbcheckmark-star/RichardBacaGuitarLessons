import { siteConfig } from "@/content/site-content";

export const getSiteUrl = (): string => {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "");
  }

  return siteConfig.siteUrl.replace(/\/$/, "");
};

export const absoluteUrl = (path: string): string => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
};
