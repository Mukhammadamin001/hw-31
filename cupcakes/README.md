# Сладкая сказка — cupcake landing page

HTML/CSS build of the «Макет Landing Page для Figma (шаблон)» cupcake design
(desktop frame **1920 × 9193 px**, content container **1170 px**).

Open `index.html` in a browser. There's no build step and it works offline: the font is embedded in `css/fonts.css`.

```
index.html        markup (8 blocks: hero, catalog, custom order, about, reviews, gallery, order form, footer)
css/fonts.css     Montserrat variable font embedded as base64 (works from file://)
css/style.css     styles — design tokens at the top, responsive rules at the bottom
js/main.js        reviews slider (buttons + swipe), phone mask, order form validation, file-upload label
images/           artwork (see "Replacing the images" below)
```

## Design specs used

| Token | Value |
| --- | --- |
| Font | Montserrat 400 / 500 / 600 / 700 |
| Colors | `#0A112E` dark sections, `#020611 → #101944` hero gradient, `#F8D966` yellow, `#4D5BEA` accent blue, `#F3F6FA` light fields, `#30363D` name badge |
| Headings | H1 46/58 SemiBold, section titles 46/58 Regular, order title 36/44 Bold, card title 22/30 SemiBold |
| Body | hero lead 22/36, text 14–16 / 26–30 |
| Buttons | 270–375 × 86 (cards 160 × 66, form 375 × 84), radius 4 |
| Catalog | 3 × 375 px cards, 25 px gap, image 375 × 250, padding 47 / 45 |
| Gallery | full width 3 × 3, 6 px gap, rows 446 px |
| Section tops | hero 0 · catalog 1150 · custom order 3246 · about 4380 · reviews 5370 · gallery 6680 · footer 8367 |

Positions were checked against the reference by rendering the page at 1920 px, scaling it to the
reference screenshot and comparing text rows and button edges. Headings, buttons and blocks land within
about ±5 px of the design.

## Replacing the images

The Figma photos couldn't be downloaded, so every photo slot holds an original drawn placeholder
with the **same size and file name** the layout expects. To get the photos, select the layer
in Figma, use **Export** and save it over the matching file. Export at 2× for retina screens; the CSS fixes the
display size.

| File | Figma layer | Display size | Format |
| --- | --- | --- | --- |
| `images/hero/cupcakes.png` | hero cupcakes on the glass stand (+ basket) | 940 × 860 | PNG, transparent |
| `images/catalog/cupcake-1.jpg` … `cupcake-9.jpg` | catalog card photos, left → right, top → bottom | 375 × 250 | JPG |
| `images/custom/phone-hand.png` | hand holding the phone | 960 × 880 | PNG, transparent |
| `images/about/confectioner.png` | confectioner photo (cut-out, bottom is masked by the yellow circle in CSS) | 560 × 800 | PNG, transparent |
| `images/reviews/client-1.jpg` … `client-3.jpg` | reviewer photos (shown as circles) | 375 × 375 | JPG |
| `images/gallery/order-1.jpg` … `order-9.jpg` | "3 000 orders" gallery | 640 × 446 | JPG |
| `images/decor/raspberry.png`, `leaf.png`, `mint.png` | floating raspberries / leaves (blurred by CSS) | 140 × 140, 180 × 120, 160 × 200 | PNG, transparent |
| `images/clouds/cloud-hero.png`, `cloud-top.png`, `cloud-bottom.png` | smoke/cloud section dividers | 1920 × 520 / 170 / 300 | PNG, transparent |

## Responsive

* **≥ 1230 px**: the desktop layout from the design.
* **992–1229 px**: fluid container; the hero image gets smaller.
* **768–991 px**: two-column catalog; the hero image moves under the buttons; review cards stack.
* **< 768 px**: one column, full-width buttons, 2-column gallery.
