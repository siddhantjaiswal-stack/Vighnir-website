# Vighnir — One house. Three brands.

Award-style animated site for the Vighnir house (eko · The Club · Aquarius).
Next.js 15 (App Router) + GSAP ScrollTrigger/SplitText + Lenis smooth scroll.
Fully static-prerendered, SEO/AEO-complete, Vercel-ready.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel (pick one)

1. **GitHub (recommended):** push this folder to a repo → vercel.com/new → import → Deploy. Zero config; Vercel auto-detects Next.js.
2. **CLI:** `npm i -g vercel && vercel` from this folder, then `vercel --prod`.
3. **Drag & drop is NOT available for Next.js** — use 1 or 2.

## Before going live — edit `lib/site.ts`

- `SITE.url` → your real domain (drives canonical URL, sitemap, robots, OG, JSON-LD).
- `BRANDS[*].href` → each brand's live URL (currently `#`).
- `SITE.email` if different.

After deploy, add the domain in Vercel → Settings → Domains.

## SEO / AEO — what's included

- Static prerender: full HTML + content for crawlers, no JS needed.
- Metadata API: title/description/canonical/robots, OpenGraph + Twitter cards with generated `public/og.png` (1200×630).
- JSON-LD `@graph`: Organization (+ 3 sub-organization brands), WebSite, WebPage, FAQPage — the FAQ schema mirrors the visible Questions section.
- `robots.txt` + `sitemap.xml` + `manifest.webmanifest` (generated routes).
- `public/llms.txt` for AI crawlers/answer engines.
- Self-hosted fonts via `next/font` (preloaded woff2 → fast LCP, no CLS).

## Favicon (the V)

Generated from Libre Caslon Display (the site serif): `favicon.svg`,
48/96/192/512 PNGs, `apple-touch-icon.png`, `app/favicon.ico`.
Google's requirements for showing it in search results are met (48px-multiple
PNGs + ico + svg, stable URLs). Two things Google still needs from you:

1. The site must be **indexed** — verify the domain in Google Search Console
   and request indexing of the homepage.
2. Patience — Google refreshes SERP favicons on its own crawl schedule
   (days to a few weeks after launch).

Regenerate assets anytime: `python3 scripts/gen-assets.py`
(needs `pip install pillow fonttools` and the three Google-font TTFs in `/tmp/fonts` — see script header).

## Motion system (for future edits)

All choreography lives in `components/Experience.tsx`:
preloader (skipped on repeat visits via sessionStorage + fully skipped for
`prefers-reduced-motion`), Lenis inertia scroll, split-text hero with the
friction strike-through beat, glass header + scroll progress + scrollspy,
per-row index reveals, cursor-following glass brand previews, velocity-reactive
marquee, scrubbed word-fill in The House, scramble-in facts, FAQ accordion,
magnetic glass mail CTA, aurora canvas + film grain.

Content is server-rendered in `app/page.tsx`; the site is fully readable with
JavaScript disabled (animations simply don't run).
