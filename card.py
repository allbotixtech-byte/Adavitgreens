import os

from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, Color
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
import math

HERE = os.path.dirname(os.path.abspath(__file__))
FONT_DIR = os.environ.get("CARD_FONT_DIR", os.path.join(HERE, "fonts"))
ASSET_DIR = os.environ.get("CARD_ASSET_DIR", os.path.join(HERE, "assets"))
OUT_DIR = os.environ.get("CARD_OUT_DIR", os.path.join(HERE, "out"))

MM = 2.834645669

# Poppins if it is on disk, otherwise fall back to the built-in Helvetica family
# so the script still renders (metrics shift slightly - not print-final).
_FACES = {
    "Poppins": "Poppins-Regular.ttf",
    "Poppins-Md": "Poppins-Medium.ttf",
    "Poppins-Bd": "Poppins-Bold.ttf",
    "Poppins-Lt": "Poppins-Light.ttf",
}
_FALLBACK = {
    "Poppins": "Helvetica",
    "Poppins-Md": "Helvetica",
    "Poppins-Bd": "Helvetica-Bold",
    "Poppins-Lt": "Helvetica",
}
FONT = {}
for name, filename in _FACES.items():
    path = os.path.join(FONT_DIR, filename)
    if os.path.exists(path):
        pdfmetrics.registerFont(TTFont(name, path))
        FONT[name] = name
    else:
        FONT[name] = _FALLBACK[name]
if set(FONT.values()) != set(_FACES):
    print("warning: Poppins not found in %s - falling back to Helvetica" % FONT_DIR)

TRIM_W, TRIM_H = 90, 54          # mm
BLEED = 3                        # mm
PAGE_W, PAGE_H = TRIM_W + 2 * BLEED, TRIM_H + 2 * BLEED

TEAL      = HexColor("#0E3E4F")
TEAL_MID  = HexColor("#12657A")
GREEN     = HexColor("#3FAE2A")
GREEN_LT  = HexColor("#6DC82A")
GREY      = HexColor("#6E7B80")
PAPER_BK  = HexColor("#FAFAF7")
MOSAIC_T  = HexColor("#E9F0F3")
MOSAIC_G  = HexColor("#E9F4E6")

EMBLEM = ImageReader(os.path.join(ASSET_DIR, "emblem.png"))
FULL   = ImageReader(os.path.join(ASSET_DIR, "logo_full.png"))


def mm(v):
    return v * MM


def card_origin():
    """bottom-left of the trim area inside the bleed page"""
    return mm(BLEED), mm(BLEED)


def grad_rect(c, x, y, w, h, c0, c1, horizontal=True):
    c.saveState()
    p = c.beginPath()
    p.rect(x, y, w, h)
    c.clipPath(p, stroke=0, fill=0)
    if horizontal:
        c.linearGradient(x, y, x + w, y, [c0, c1], extend=True)
    else:
        c.linearGradient(x, y, x, y + h, [c0, c1], extend=True)
    c.restoreState()


def mosaic(c, ox, oy):
    """pixel-trail motif echoing the logo, very light, top-left + bottom-right"""
    squares_tl = [  # x, y (mm from trim corner), size, colour
        (4.0, 47.5, 3.0, MOSAIC_G), (8.2, 49.0, 1.8, MOSAIC_T),
        (3.4, 42.6, 1.9, MOSAIC_T), (7.0, 44.4, 2.6, MOSAIC_G),
        (11.4, 46.0, 1.3, MOSAIC_G), (5.6, 38.8, 1.2, MOSAIC_T),
        (1.6, 45.2, 1.4, MOSAIC_T),
    ]
    squares_br = [
        (84.0, 5.4, 3.2, MOSAIC_G), (79.6, 4.0, 1.9, MOSAIC_T),
        (85.2, 10.2, 1.8, MOSAIC_T), (80.4, 8.4, 2.5, MOSAIC_G),
        (75.6, 6.6, 1.3, MOSAIC_G), (83.0, 14.4, 1.2, MOSAIC_T),
        (87.4, 2.0, 1.5, MOSAIC_T),
    ]
    for x, y, s, col in squares_tl + squares_br:
        c.setFillColor(col)
        c.rect(ox + mm(x), oy + mm(y), mm(s), mm(s), stroke=0, fill=1)


def front(c):
    ox, oy = card_origin()
    # full-bleed paper
    c.setFillColor(HexColor("#FFFFFF"))
    c.rect(0, 0, mm(PAGE_W), mm(PAGE_H), stroke=0, fill=1)

    mosaic(c, ox, oy)

    # gradient edge on the right, full bleed height
    grad_rect(c, ox + mm(TRIM_W - 2.2), 0, mm(2.2 + BLEED), mm(PAGE_H),
              TEAL, GREEN, horizontal=False)

    # logo lockup, optically centred slightly above middle
    lw = mm(45)
    iw, ih = FULL.getSize()
    lh = lw * ih / iw
    c.drawImage(FULL, ox + (mm(TRIM_W) - lw) / 2 - mm(1.0), oy + mm(16.2),
                lw, lh, mask="auto")

    # hairline + tagline
    c.setStrokeColor(HexColor("#D8E4E2"))
    c.setLineWidth(0.5)
    cx = ox + mm(TRIM_W) / 2 - mm(1.0)
    c.line(cx - mm(12), oy + mm(12.2), cx + mm(12), oy + mm(12.2))

    c.setFillColor(TEAL_MID)
    c.setFont(FONT["Poppins-Lt"], 5.8)
    c.drawCentredString(cx, oy + mm(8.2), "Recycle Today  \u00b7  Rebuild Tomorrow")
    return c


def icon(c, kind, x, y, s):
    """small line icons, drawn from a 0..s box with bottom-left at x,y"""
    c.saveState()
    c.setStrokeColor(GREEN)
    c.setFillColor(GREEN)
    c.setLineWidth(0.62)
    c.setLineJoin(1)
    c.setLineCap(1)
    if kind == "phone":
        c.roundRect(x + s * 0.24, y, s * 0.52, s, s * 0.14, stroke=1, fill=0)
        c.setLineWidth(0.9)
        c.line(x + s * 0.42, y + s * 0.13, x + s * 0.58, y + s * 0.13)
    elif kind == "mail":
        c.rect(x, y + s * 0.16, s, s * 0.7, stroke=1, fill=0)
        p = c.beginPath()
        p.moveTo(x, y + s * 0.86)
        p.lineTo(x + s * 0.5, y + s * 0.45)
        p.lineTo(x + s, y + s * 0.86)
        c.drawPath(p, stroke=1, fill=0)
    elif kind == "web":
        r = s * 0.5
        c.circle(x + r, y + r, r, stroke=1, fill=0)
        c.line(x, y + r, x + s, y + r)
        p = c.beginPath()
        p.moveTo(x + r, y)
        p.curveTo(x + s * 0.86, y + s * 0.32, x + s * 0.86, y + s * 0.68, x + r, y + s)
        p.curveTo(x + s * 0.14, y + s * 0.68, x + s * 0.14, y + s * 0.32, x + r, y)
        c.drawPath(p, stroke=1, fill=0)
    elif kind == "pin":
        r = s * 0.34
        cxx, cyy = x + s * 0.5, y + s * 0.66
        c.circle(cxx, cyy, r, stroke=1, fill=0)
        p = c.beginPath()
        p.moveTo(cxx - r * 0.72, cyy - r * 0.7)
        p.lineTo(cxx, y)
        p.lineTo(cxx + r * 0.72, cyy - r * 0.7)
        c.drawPath(p, stroke=1, fill=0)
        c.circle(cxx, cyy, r * 0.3, stroke=0, fill=1)
    c.restoreState()


def back(c):
    ox, oy = card_origin()
    c.setFillColor(PAPER_BK)
    c.rect(0, 0, mm(PAGE_W), mm(PAGE_H), stroke=0, fill=1)

    # gradient spine on the left, full bleed height
    grad_rect(c, 0, 0, mm(BLEED + 2.6), mm(PAGE_H), GREEN, TEAL, horizontal=False)

    # very light mosaic wash, bottom-right only
    for x, y, s in [(83.5, 3.2, 2.8), (79.4, 2.0, 1.6), (85.0, 7.8, 1.5), (80.2, 6.0, 2.2)]:
        c.setFillColor(MOSAIC_G)
        c.rect(ox + mm(x), oy + mm(y), mm(s), mm(s), stroke=0, fill=1)

    # emblem, top-left
    ew = mm(15.5)
    iw, ih = EMBLEM.getSize()
    eh = ew * ih / iw
    c.drawImage(EMBLEM, ox + mm(7.0), oy + mm(TRIM_H - 6.0) - eh, ew, eh, mask="auto")

    # name block, right of the emblem
    tx = ox + mm(26.5)
    c.setFillColor(TEAL)
    c.setFont(FONT["Poppins-Bd"], 10.6)
    c.drawString(tx, oy + mm(43.0), "Nidhish Patel")
    c.setFillColor(GREY)
    c.setFont(FONT["Poppins-Md"], 5.9)
    to = c.beginText(tx + 0.3, oy + mm(38.6))
    to.setFont(FONT["Poppins-Md"], 5.9)
    to.setCharSpace(0.9)
    to.setFillColor(GREY)
    to.textOut("President & CEO")
    c.drawText(to)

    # divider
    c.setStrokeColor(HexColor("#E2E8E4"))
    c.setLineWidth(0.5)
    c.line(ox + mm(7.0), oy + mm(34.0), ox + mm(83.0), oy + mm(34.0))

    rows = [
        ("phone", ["+91 98765 43210"]),
        ("mail",  ["info@advaitgreenrecycling.com"]),
        ("web",   ["www.advaitgreenrecycling.com"]),
        ("pin",   ["Ahmedabad, Gujarat, India"]),
    ]
    y = 28.4
    for kind, lines in rows:
        icon(c, kind, ox + mm(7.4), oy + mm(y - 0.35), mm(3.1))
        c.setFillColor(HexColor("#2B3B41"))
        c.setFont(FONT["Poppins"], 6.6)
        yy = y
        for ln in lines:
            c.drawString(ox + mm(13.2), oy + mm(yy), ln)
            yy -= 3.3
        y -= 3.3 * len(lines) + 2.6

    return c


def build(path, marks=False):
    c = canvas.Canvas(path, pagesize=(mm(PAGE_W), mm(PAGE_H)))
    c.setTitle("Advait Green Recycling - Visiting Card")
    front(c)
    c.showPage()
    back(c)
    c.showPage()
    c.save()


def build_trim(path):
    """trim-size pages for on-screen preview / PNG export"""
    global BLEED, PAGE_W, PAGE_H
    BLEED, PAGE_W, PAGE_H = 0, TRIM_W, TRIM_H
    c = canvas.Canvas(path, pagesize=(mm(PAGE_W), mm(PAGE_H)))
    front(c)
    c.showPage()
    back(c)
    c.showPage()
    c.save()


if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    print_pdf = os.path.join(OUT_DIR, "Advait_Visiting_Card_PRINT.pdf")
    preview_pdf = os.path.join(OUT_DIR, "preview.pdf")
    build(print_pdf)
    build_trim(preview_pdf)
    print("wrote %s" % print_pdf)
    print("wrote %s" % preview_pdf)