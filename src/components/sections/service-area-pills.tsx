import { siteConfig } from "@/content/site-content";

export const ServiceAreaPills = () => {
  return (
    <ul className="flex flex-wrap gap-2">
      {siteConfig.serviceAreas.map((area) => (
        <li key={area} className="rounded-full border border-brand-pine/30 bg-brand-pine/10 px-3 py-1 text-xs font-semibold text-brand-pine">
          {area}
        </li>
      ))}
    </ul>
  );
};
