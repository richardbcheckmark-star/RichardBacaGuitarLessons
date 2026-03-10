import Link from "next/link";

import { Container } from "@/components/ui/container";
import { navItems, siteConfig } from "@/content/site-content";

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-sand bg-brand-ink py-12 text-brand-bone">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl">{siteConfig.siteName}</h2>
            <p className="mt-3 text-sm text-brand-bone/80">{siteConfig.tagLine}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-bone/70">Pages</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-brand-bone/85 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-bone/70">Contact</h3>
            <div className="mt-4 space-y-3">
              <p className="text-sm text-brand-bone/85">{siteConfig.contact.phone}</p>
              <p className="text-sm text-brand-bone/85">{siteConfig.contact.email}</p>
              <p className="text-sm text-brand-bone/75">{siteConfig.contact.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-bone/15 pt-6 text-xs text-brand-bone/65">
          <p>&copy; {currentYear} {siteConfig.siteName}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
