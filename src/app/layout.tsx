import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { siteConfig } from "@/content/site-content";
import { absoluteUrl, getSiteUrl } from "@/lib/site";

import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Adult Beginner Guitar Lessons | Albuquerque, NM",
    template: "%s | Guitar Lessons"
  },
  description: siteConfig.tagLine,
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.siteName,
    url: absoluteUrl("/"),
    images: [absoluteUrl(siteConfig.defaultOgImage)]
  }
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-body text-brand-ink antialiased">
        <a
          href="#page-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main id="page-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <StickyMobileCta />
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
};

export default RootLayout;
