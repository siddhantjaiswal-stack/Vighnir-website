/**
 * Site-wide constants.
 *
 * `url` is the www host because that is the primary domain on the Vercel
 * project: the apex (vighnir.com) answers 308 to www, so a canonical, sitemap
 * or JSON-LD URL on the apex pointed at a redirect. The app keeps linking to
 * the apex; that keeps working through the redirect.
 */
export const SITE = {
  url: "https://www.vighnir.com",
  /** The product the whole site is about. */
  product: "The Club",
  /** The company that builds and runs it. */
  company: "Vighnir",
  title: "The Club by Vighnir: friends, Minis and one-to-one sessions",
  description:
    "The Club is a social app for people in India: keep a close circle of friends, post photos, Minis and Stories, message and call, join live chat rooms, and book paid one-to-one online sessions with approved hosts. Built by Vighnir (OPC) Private Limited. In closed testing.",
  /** The one public mailbox confirmed as the company inbox (ground-site §4). */
  email: "hello@vighnir.com",
  locality: "Bareilly",
  region: "Uttar Pradesh",
} as const;

/** Main navigation. Kept short so it fits one line from 1100 px. */
export const NAV = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/hosts", label: "For hosts" },
  { href: "/safety", label: "Safety" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
] as const;
