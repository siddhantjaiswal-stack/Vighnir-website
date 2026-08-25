/**
 * Where `/get` sends a visitor, and how it decides.
 *
 * `/get` is the single durable URL The Club's public share pages print on their
 * "Get The Club" button. Those pages are served by a Cloudflare Worker under
 * three written constraints — exactly ONE call to action, byte-identical
 * responses for browsers and crawlers (so no User-Agent branch), and no
 * JavaScript — which is precisely why the platform decision was moved HERE, to
 * a URL that is allowed to make it.
 *
 * ── 🔴 NEITHER LISTING EXISTS YET. MEASURED 2026-08-25. ──────────────────────
 *
 *   https://play.google.com/store/apps/details?id=com.theclub1.social  →  404
 *   https://itunes.apple.com/lookup?bundleId=com.theclub1.social       →  resultCount: 0
 *
 * So both entries below are `null`, and `/get` renders an honest "not yet"
 * instead of forwarding anybody to a store's own 404. Redirecting to a listing
 * that does not exist would not fix the broken button — it would move the dead
 * end one hop further from the person who tapped it.
 *
 * ── TO GO LIVE ───────────────────────────────────────────────────────────────
 *
 * Set the URL for a platform the moment ITS listing is published, one platform
 * at a time; the other keeps the honest page until it follows. Nothing else in
 * this repo needs to change, and nothing in The Club needs to be redeployed —
 * the app already points at this URL.
 *
 *   android: "https://play.google.com/store/apps/details?id=com.theclub1.social"
 *   ios:     "https://apps.apple.com/app/id<NUMERIC_APP_ID>"   ← the id only
 *                                                                exists once
 *                                                                the listing does
 *
 * Verify each with `curl -sI -L <url>` before setting it. A 404 here is worse
 * than a null: null tells the truth, a dead URL does not.
 */
export const STORE_LINKS: {
  readonly ios: string | null;
  readonly android: string | null;
} = {
  ios: null,
  android: null,
};

export type Platform = "ios" | "android" | "other";

/**
 * The platform a `User-Agent` names, for the sole purpose of choosing a store.
 *
 * Deliberately narrow. This is a redirect hint, not analytics and not a
 * security control: it is never stored, never logged, and a wrong answer costs
 * a visitor one extra tap on a page that lists both stores anyway.
 *
 * Known limits, stated rather than hidden:
 *   • iPadOS 13+ reports a desktop Macintosh User-Agent by default, so an iPad
 *     usually reads as `other`. Detecting it needs client-side touch probing,
 *     which this page does not ship — an iPad user sees the page and picks.
 *   • Order matters: Android's User-Agent contains "Linux", and several Android
 *     browsers also carry "Mobile Safari", so Android is tested FIRST. Reverse
 *     these two branches and every Android phone is sent to the App Store.
 */
export function platformFromUserAgent(userAgent: string | null): Platform {
  if (!userAgent) return "other";
  const ua = userAgent.toLowerCase();
  if (ua.includes("android")) return "android";
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  return "other";
}

/** The store URL for a platform, or null when that listing is not live yet. */
export function storeUrlFor(platform: Platform): string | null {
  if (platform === "ios") return STORE_LINKS.ios;
  if (platform === "android") return STORE_LINKS.android;
  return null;
}
