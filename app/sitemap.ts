import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { LEGAL } from "@/lib/legal";

/** Legal pages carry their own lastModified — they change on their own clock. */
const legalUpdated = new Date(LEGAL.effectiveIso);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/privacy`,
      lastModified: legalUpdated,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE.url}/terms`,
      lastModified: legalUpdated,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE.url}/account-deletion`,
      lastModified: legalUpdated,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
