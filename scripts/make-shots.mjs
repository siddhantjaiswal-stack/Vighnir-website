// Builds the optimised app screenshots in public/shots/ from the 1206x2622
// originals. Usage: node scripts/make-shots.mjs <folder with the PNGs>
// Each shot becomes AVIF + WebP at three widths. host-profile is cropped to
// start below the header (no account handle in view); nothing else is edited.
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const src = process.argv[2];
if (!src) throw new Error("pass the folder that holds the PNG screenshots");
const out = new URL("../public/shots/", import.meta.url).pathname;
mkdirSync(out, { recursive: true });

const SHOTS = {
  "sign-in": null,
  consent: null,
  chat: null,
  settings: null,
  privacy: null,
  "host-profile": { left: 0, top: 1085, width: 1206, height: 2622 - 1085 },
};
const WIDTHS = [240, 360, 480];

for (const [name, crop] of Object.entries(SHOTS)) {
  for (const w of WIDTHS) {
    let img = sharp(join(src, `${name}.png`));
    if (crop) img = img.extract(crop);
    img = img.resize({ width: w });
    await img.clone().webp({ quality: 80, effort: 6 }).toFile(join(out, `${name}-${w}.webp`));
    await img.clone().avif({ quality: 55, effort: 6 }).toFile(join(out, `${name}-${w}.avif`));
  }
}
console.log("done");
