import { siteConfig } from "@/content/site-content";

export const NapCard = () => {
  return (
    <aside className="reveal rounded-2xl border border-brand-sand bg-brand-bone p-6 text-sm shadow-soft">
      <h3 className="font-display text-2xl text-brand-ink">Contact & Service Area</h3>
      <p className="mt-3 text-brand-ink/75">{siteConfig.siteName}</p>
      <p className="text-brand-ink/75">{siteConfig.contact.address}</p>
      <p className="mt-3 text-brand-ink/75">Phone: {siteConfig.contact.phone}</p>
      <p className="text-brand-ink/75">Email: {siteConfig.contact.email}</p>
      <p className="mt-4 text-brand-ink/75">Service areas: {siteConfig.serviceAreas.join(", ")}</p>
    </aside>
  );
};
