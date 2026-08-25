import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

import SiteFooter from "@/components/SiteFooter";
import { STORE_LINKS, platformFromUserAgent, storeUrlFor } from "@/lib/appStores";
import "./get.css";

/**
 * `/get` — the single durable destination of "Get The Club".
 *
 * Every public share page The Club serves prints THIS url on its one button.
 * That page ships no JavaScript and must answer browsers and crawlers with
 * byte-identical bytes, so it cannot choose a store itself; this page can, and
 * does it server-side so it works with JavaScript disabled.
 *
 * 🔴 Not indexed, and that is deliberate: it is a redirect surface, not a
 * landing page, and it answers differently per device.
 */
export const metadata: Metadata = {
  title: "Get The Club",
  description: "Download The Club for iPhone and Android.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/get" },
};

/** Per-request: the answer depends on the caller's User-Agent. */
export const dynamic = "force-dynamic";

export default async function GetTheClub() {
  const platform = platformFromUserAgent((await headers()).get("user-agent"));
  const store = storeUrlFor(platform);

  // One tap, one destination — as soon as that platform's listing is live.
  if (store !== null) redirect(store);

  // 🔴 NOTHING TO REDIRECT TO YET, SO SAY SO. Measured 2026-08-25: the Play
  // listing 404s and the App Store lookup returns resultCount 0. Forwarding
  // anyone to a store's own 404 would move the dead end further from the person
  // who tapped the button, not remove it. See lib/appStores.ts.
  const anyStoreLive = STORE_LINKS.ios !== null || STORE_LINKS.android !== null;

  return (
    <>
      <header className="site is-solid get-header">
        <div className="wrap nav">
          <Link href="/" className="wordmark" aria-label="Vighnir — home">
            VIGHN<i>I</i>R
          </Link>
        </div>
      </header>

      <main className="get">
        <div className="wrap get-wrap">
          <p className="mono get-eyebrow">The Club</p>
          <h1>Not on the stores yet.</h1>
          <p className="get-lede">
            Someone sent you a link to something on The Club. The app is still
            being built, so there is nothing to install today — and we would
            rather tell you that than send you to a store page that does not
            exist.
          </p>

          {anyStoreLive ? (
            <ul className="get-stores mono" aria-label="Download">
              {STORE_LINKS.ios !== null && (
                <li>
                  <a href={STORE_LINKS.ios}>iPhone — App Store</a>
                </li>
              )}
              {STORE_LINKS.android !== null && (
                <li>
                  <a href={STORE_LINKS.android}>Android — Google Play</a>
                </li>
              )}
            </ul>
          ) : null}

          <p className="get-meta mono">
            <span>iPhone and Android</span>
            <span>India first</span>
          </p>

          <p className="get-back">
            In the meantime, <Link href="/">read about the house</Link> that is
            building it.
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
