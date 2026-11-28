# vighnir.com: The Club by Vighnir

The public website for **The Club**, the social app built and run by Vighnir (OPC) Private Limited.
Next.js 15 (App Router), React 19, TypeScript. Every page is static HTML (except `/get`, which picks a
store per device), so the full text is visible to crawlers and with JavaScript off.

## Run locally

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build && npm run start
```

## Deploy

Vercel project `vighnir-website`. **A push to `main` deploys production**; every other branch gets a preview
deployment (behind Vercel login). Work on a branch; merge only after the preview is approved.

## Where things live

| What | Where |
|---|---|
| Every product claim (features, booking steps, refund bands, FAQ) | `lib/club.ts` (each traced to the app repo; see its header for the rules) |
| Site constants, main nav, canonical host (`https://www.vighnir.com`) | `lib/site.ts` |
| Legal entity, CIN, mailboxes, Grievance Officer line, dates | `lib/legal.ts` |
| Header, footer, screen illustrations, icons | `components/` |
| Marketing pages | `app/page.tsx`, `app/{features,how-it-works,hosts,safety,technology,business-model,about,contact,faq}` |
| Legal pages (URLs used by the app and the store listings; never move them) | `app/(legal)/{privacy,terms,account-deletion,support,community-rules,how-ranking-works,host-terms,grievance,refund-policy}` |
| Alias redirects (`/delete-account`, `/refunds`, ...) | `next.config.ts` |
| OG image source | `scripts/og.html`, rendered by `scripts/render-og.mjs` |

Screens on the site are **illustrations drawn in code** (`components/Screens.tsx`): grey bars stand in for
text so nothing looks like a real person or real data. Replace them with real screenshots only from test
accounts with tidy test content.

## Analytics (PostHog, cookieless): D-241

`instrumentation-client.ts` loads `posthog-js` in the browser: page views only, `persistence: "memory"`
(no cookie, no localStorage), the visitor's IP discarded by the PostHog project setting `anonymize_ips`.
It is inert unless these two Vercel environment variables are set:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_POSTHOG_KEY` | the project key, starts `phc_` (public by design; it can only write events) |
| `NEXT_PUBLIC_POSTHOG_HOST` | `https://us.i.posthog.com` |

Vercel Web Analytics and Speed Insights are also on (cookieless). Any new analytics or third-party script must
be added to Privacy Policy §16 in the same change.

## SEO

Metadata API titles and descriptions per page, canonical on `https://www.vighnir.com`, Open Graph and Twitter
cards (`public/og.png`), JSON-LD (Organization, WebSite, MobileApplication; FAQPage on `/faq`), generated
`robots.txt`, `sitemap.xml` and `manifest.webmanifest`, and `public/llms.txt`.
