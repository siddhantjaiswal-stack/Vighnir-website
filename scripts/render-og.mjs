/**
 * Renders public/og.png (1200 x 630) from scripts/og.html.
 * Playwright is not a dependency of this site; run it from any folder that has it:
 *   node scripts/render-og.mjs "$PWD/scripts/og.html" "$PWD/public/og.png"
 * The favicons and icon-512.png are The Club's store icon (app repo
 * assets/play-store-icon-512.png), resized; favicon.svg is the mark drawn by hand.
 */
import { chromium } from "playwright";
const [,, html, out] = process.argv;
const browser = await chromium.launch({ executablePath: process.env.PW_EXE || undefined });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.goto("file://" + html);
await page.screenshot({ path: out });
await browser.close();
