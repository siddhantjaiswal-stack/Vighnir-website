import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { LEGAL } from "@/lib/legal";

/**
 * Every public, indexable page. /host-terms (a noindex draft) and /get (a
 * per-device redirect surface, noindex) are left out on purpose.
 */
const REVAMP = new Date("2026-11-28");

const PAGES: Array<[path: string, lastModified: Date, priority: number, changeFrequency: "monthly" | "yearly"]> = [
  ["", REVAMP, 1, "monthly"],
  ["/features", REVAMP, 0.9, "monthly"],
  ["/how-it-works", REVAMP, 0.9, "monthly"],
  ["/hosts", REVAMP, 0.8, "monthly"],
  ["/safety", REVAMP, 0.8, "monthly"],
  ["/technology", REVAMP, 0.8, "monthly"],
  ["/business-model", REVAMP, 0.7, "monthly"],
  ["/about", REVAMP, 0.7, "monthly"],
  ["/faq", REVAMP, 0.7, "monthly"],
  ["/contact", REVAMP, 0.6, "yearly"],
  ["/support", REVAMP, 0.6, "yearly"],
  ["/grievance", REVAMP, 0.5, "yearly"],
  ["/privacy", new Date(LEGAL.privacyEffectiveIso), 0.5, "yearly"],
  ["/terms", REVAMP, 0.5, "yearly"],
  ["/community-rules", new Date(LEGAL.effectiveIso), 0.5, "yearly"],
  ["/refund-policy", REVAMP, 0.5, "yearly"],
  ["/how-ranking-works", new Date("2026-11-06"), 0.5, "yearly"],
  ["/account-deletion", new Date(LEGAL.deletionEffectiveIso), 0.5, "yearly"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(([path, lastModified, priority, changeFrequency]) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
