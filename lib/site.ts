/**
 * Single source of truth for site-wide constants.
 * ── CHANGE `url` to your real production domain before deploying. ──
 */
export const SITE = {
  url: "https://vighnir.com",
  name: "Vighnir",
  title: "Vighnir — One house. Three brands.",
  description:
    "Vighnir is the founder-led house behind eko, The Club, and Aquarius — three revenue-generating businesses built in Noida, India to remove friction from sales, expertise, and hyperlocal advertising.",
  email: "hello@vighnir.com",
  locality: "Noida",
  region: "NCR, India",
} as const;

export const BRANDS = [
  {
    id: "eko",
    num: "I",
    name: "eko",
    category: "AI · Sales automation",
    lead: "The AI CRM that qualifies before you dial.",
    desc: "eko calls and scores every inbound lead — hot, warm, cold — schedules meetings, and hands only qualified conversations to your team. Live with paying automotive clients.",
    href: "#", // ← replace with eko's live URL
  },
  {
    id: "club",
    num: "II",
    name: "The Club",
    category: "Marketplace · Creators",
    lead: "Book time with the people worth talking to.",
    desc: "Experts and creators open their calendars; anyone can book a paid, verified one-on-one session. Discovery, scheduling, payment, and safety in one place.",
    href: "#", // ← replace with THE CLUB's live URL
  },
  {
    id: "aquarius",
    num: "III",
    name: "Aquarius",
    category: "Media · Hyperlocal branding",
    lead: "Your brand, on every table in the neighbourhood.",
    desc: "Water bottles as ad space — cafés get free branded bottles, local businesses get placement directly in customers' hands. Active across Delhi NCR.",
    href: "#", // ← replace with Aquarius' live URL
  },
] as const;

/** Rendered visibly in the FAQ section AND emitted as FAQPage JSON-LD (they must match). */
export const FAQS = [
  {
    q: "What is Vighnir?",
    a: "Vighnir is a founder-led house in Noida, NCR that builds and operates three revenue-generating businesses — eko, The Club, and Aquarius. Every brand starts from the same brief: find friction, remove it profitably.",
  },
  {
    q: "What does each Vighnir brand do?",
    a: "eko is an AI CRM that calls, scores, and qualifies inbound leads before your team dials. The Club is a marketplace for paid, verified one-on-one sessions with experts and creators. Aquarius turns water bottles into hyperlocal ad space across Delhi NCR cafés.",
  },
  {
    q: "How do I work with a Vighnir brand?",
    a: "Write to hello@vighnir.com and name the brand you are interested in. Client work is routed to the brand teams; partnerships and press go to the house.",
  },
] as const;
