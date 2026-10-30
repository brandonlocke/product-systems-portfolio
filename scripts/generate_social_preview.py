"""Render the portfolio's social card using its self-hosted Manrope font.

Requires Pillow and fonttools[woff]. Run after npm install.
"""
from io import BytesIO
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONT = ROOT / 'node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2'
SCALE = 2
PAPER = '#f8f7f2'
INK = '#222d2a'
GREEN = '#294f46'
MUTED = '#515d55'


def font(size, weight=550):
    variable = TTFont(FONT)
    static = instantiateVariableFont(variable, {'wght': weight}, inplace=True)
    static.flavor = None
    data = BytesIO()
    static.save(data)
    data.seek(0)
    return ImageFont.truetype(data, round(size * SCALE))


image = Image.new('RGB', (1200 * SCALE, 630 * SCALE), PAPER)
draw = ImageDraw.Draw(image)


def text(x, y, value, size, color=INK, weight=550):
    draw.text((x * SCALE, y * SCALE), value, font=font(size, weight), fill=color, anchor='lt')


def line(y):
    draw.line((72 * SCALE, y * SCALE, 1128 * SCALE, y * SCALE), fill='#d8dbd2', width=SCALE)


text(72, 47, 'Brandon Locke.', 26, weight=650)
text(813, 55, 'PRODUCT MANAGEMENT', 16, MUTED, 600)
line(105)
text(72, 157, "Hi, I'm Brandon.", 72)
text(72, 247, 'I make the', 78, GREEN)
text(72, 340, 'complex clear.', 78, GREEN)
text(75, 462, 'Growth, lifecycle, and customer experiences.', 25, MUTED, 450)
line(542)
text(75, 574, 'brandonlocke.co', 21, GREEN, 600)

image = image.resize((1200, 630), Image.Resampling.LANCZOS)
for filename in ['social-preview-20261030.png', 'social-preview.png']:
    image.save(ROOT / 'public' / filename, optimize=True)
