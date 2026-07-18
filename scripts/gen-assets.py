#!/usr/bin/env python3
"""Generate Vighnir brand assets: favicon set (SVG/PNG/ICO) + OG image.
V glyph is pulled from Libre Caslon Display (the site's serif) so the mark
matches the wordmark's typography exactly.
"""
import os
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.varLib.instancer import instantiateVariableFont
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, "public")
APP = os.path.join(ROOT, "app")
FONTS = "/tmp/fonts"

BLACK = (11, 10, 15, 255)
TEXT = (237, 234, 243, 255)
DIM = (142, 136, 163, 255)
FAINT = (86, 80, 104, 255)
VIOLET = (157, 123, 255, 255)
VIOLET_DEEP = (59, 43, 107, 255)

CASLON = os.path.join(FONTS, "caslon.ttf")
SPLINE_VAR = os.path.join(FONTS, "spline.ttf")
SPLINE = os.path.join(FONTS, "spline400.ttf")

# static-instance the variable mono at wght 400
if not os.path.exists(SPLINE):
    vf = TTFont(SPLINE_VAR)
    instantiateVariableFont(vf, {"wght": 400})
    vf.save(SPLINE)

# ───────────────────────── favicon.svg (vector, exact glyph path)
f = TTFont(CASLON)
glyph_set = f.getGlyphSet()
gname = f.getBestCmap()[ord("V")]
spen = SVGPathPen(glyph_set)
glyph_set[gname].draw(spen)
d = spen.getCommands()
bpen = BoundsPen(glyph_set)
glyph_set[gname].draw(bpen)
xmin, ymin, xmax, ymax = bpen.bounds
gw, gh = xmax - xmin, ymax - ymin

BOX = 512
R = 96  # corner radius ≈ 18.75%
target_h = BOX * 0.52
s = target_h / gh
tx = (BOX - gw * s) / 2 - xmin * s
ty = (BOX + gh * s) / 2 + ymin * s  # y-flip placement

svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {BOX} {BOX}">
  <rect width="{BOX}" height="{BOX}" rx="{R}" fill="#0B0A0F"/>
  <rect x="1" y="1" width="{BOX - 2}" height="{BOX - 2}" rx="{R - 1}" fill="none" stroke="rgba(237,234,243,0.14)" stroke-width="2"/>
  <path d="M96 2 H{BOX - 96}" stroke="rgba(255,255,255,0.10)" stroke-width="2" stroke-linecap="round"/>
  <g transform="translate({tx:.2f},{ty:.2f}) scale({s:.5f},-{s:.5f})">
    <path d="{d}" fill="#9D7BFF"/>
  </g>
</svg>
"""
with open(os.path.join(PUB, "favicon.svg"), "w") as fh:
    fh.write(svg)

# ───────────────────────── PNG set (supersampled raster of same design)
SS = 4  # supersample
def render_tile(box: int) -> Image.Image:
    W = box * SS
    img = Image.new("RGBA", (W, W), (0, 0, 0, 0))
    dr = ImageDraw.Draw(img)
    r = int(W * (R / BOX))
    dr.rounded_rectangle([0, 0, W - 1, W - 1], radius=r, fill=BLACK,
                         outline=(237, 234, 243, 36), width=max(1, SS))
    fnt = ImageFont.truetype(CASLON, int(W * 0.60))
    bb = dr.textbbox((0, 0), "V", font=fnt)
    w, h = bb[2] - bb[0], bb[3] - bb[1]
    dr.text(((W - w) / 2 - bb[0], (W - h) / 2 - bb[1]), "V", font=fnt, fill=VIOLET)
    # top light line (glass nod)
    dr.line([(int(W * 0.19), SS), (int(W * 0.81), SS)], fill=(255, 255, 255, 26), width=SS)
    return img.resize((box, box), Image.LANCZOS)

for size, name in [(48, "favicon-48.png"), (96, "favicon-96.png"),
                   (192, "favicon-192.png"), (512, "icon-512.png"),
                   (180, "apple-touch-icon.png")]:
    render_tile(size).save(os.path.join(PUB, name))

# ico (16/32/48)
base = render_tile(256)
base.save(os.path.join(APP, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)])

# ───────────────────────── og.png 1200×630
W, H = 1200, 630
og = Image.new("RGBA", (W, H), BLACK)

# aurora glows
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse([W * 0.52, -H * 0.55, W * 1.25, H * 0.45], fill=(157, 123, 255, 44))
gd.ellipse([-W * 0.25, H * 0.55, W * 0.30, H * 1.5], fill=(59, 43, 107, 70))
gd.ellipse([W * 0.70, H * 0.70, W * 1.15, H * 1.35], fill=(157, 123, 255, 30))
glow = glow.filter(ImageFilter.GaussianBlur(110))
og = Image.alpha_composite(og, glow)
dr = ImageDraw.Draw(og)

def tracked(dr, pos, text, font, tracking, fill):
    x, y = pos
    for ch in text:
        dr.text((x, y), ch, font=font, fill=fill)
        x += dr.textlength(ch, font=font) + tracking

mono_s = ImageFont.truetype(SPLINE, 22)
mono_xs = ImageFont.truetype(SPLINE, 19)
serif_l = ImageFont.truetype(CASLON, 88)

M = 84
# hairline frame
dr.rectangle([28, 28, W - 29, H - 29], outline=(237, 234, 243, 26), width=1)
# top row
tracked(dr, (M, 72), "VIGHNIR", mono_s, 9, TEXT)
tracked(dr, (M + 236, 72), "— THE HOUSE", mono_s, 9, FAINT)
# V mark top-right
mark = render_tile(88)
og.paste(mark, (W - M - 88, 58), mark)
dr = ImageDraw.Draw(og)

# headline
y0 = 208
dr.text((M, y0), "One house. Three ways", font=serif_l, fill=TEXT)
line2_prefix = "to remove "
dr.text((M, y0 + 108), line2_prefix, font=serif_l, fill=TEXT)
px = M + dr.textlength(line2_prefix, font=serif_l)
dr.text((px, y0 + 108), "friction.", font=serif_l, fill=VIOLET)

# violet gradient hairline under headline
import math
ly = y0 + 250
for i in range(520):
    a = int(150 * math.sin(math.pi * i / 520))
    dr.point((M + i, ly), fill=(157, 123, 255, a))
    dr.point((M + i, ly + 1), fill=(157, 123, 255, a // 2))

# bottom rows
tracked(dr, (M, H - 92), "EKO · THE CLUB · AQUARIUS", mono_xs, 7, DIM)
tail = "NOIDA · INDIA"
tail_w = sum(dr.textlength(c, font=mono_xs) + 7 for c in tail)
tracked(dr, (W - M - tail_w, H - 92), tail, mono_xs, 7, FAINT)

og.convert("RGB").save(os.path.join(PUB, "og.png"), quality=94)
print("assets ok:", sorted(os.listdir(PUB)))
