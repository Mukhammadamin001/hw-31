# Сладкий сундук — cupcake landing page

HTML/CSS build of the «Макет Landing Page для Figma (шаблон)» cupcake design
(desktop frame **1920 × 9193 px**, content container **1170 px**).

Open `index.html` in a browser. There's no build step and it works offline: the font is embedded in `css/fonts.css`.

```
index.html        markup (8 blocks: hero, catalog, custom order, about, reviews, gallery, order form, footer)
css/fonts.css     Montserrat variable font embedded as base64 (works from file://)
css/style.css     styles — design tokens at the top, responsive rules at the bottom
js/main.js        reviews slider (buttons + swipe), phone mask, order form validation, file-upload label
images/           photos and artwork (see "Images" below)
```

## Design specs used

| Token | Value |
| --- | --- |
| Font | Montserrat 400 / 500 / 600 / 700 |
| Colors | `#0A112E` dark sections, `#020611 → #101944` hero gradient, `#FFD84D` buttons, `#F8D966` photo circle, `#2B2F35` text, `#F2F7FA` tag pills, `#30363D` name badge |
| Headings | H1 47/60 SemiBold, section titles 46/58 Regular, order title 36/44 Bold, card title 22/30 SemiBold, review quote 28/42 Medium |
| Body | hero lead 24/36, gallery subtitle 24/32, card text 14/24, review text 15/25 |
| Buttons | 274–375 × 86 (cards 160 × 66, form 375 × 84), radius 4 |
| Tags | 37 px pills, 10 px uppercase, 0.1em letter-spacing |
| Catalog | 3 × 377 px cards, 20 px gap, image 377 × 245, radius 5, padding 48 / 45 / 51 |
| Gallery | full width 3 × 3, 6 px gap, rows 446 px |
| Section tops | hero 0 · catalog 1150 · custom order 3246 · about 4380 · reviews 5370 · gallery 6680 · footer 8367 |

Positions were checked by rendering the page at 1920 px and scaling it onto the design screenshots
(the full design and the close-ups of the hero, catalog, confectioner and reviews). Text rows,
buttons and blocks land within about ±3 px of the design.

## Images

The photos were cut out of the design screenshots (Figma itself couldn't be reached from the build
environment), so they're a little soft: they were upscaled about 1.3× (2× for the reviewer). To get
sharper versions, export the layer from Figma at 2× and save it over the same file.

| File | What it is | Display size |
| --- | --- | --- |
| `images/hero/hero-art.webp` | desktop hero layer: cupcakes on the glass stand, basket, clouds, raspberry (transparent background, text removed) | 1920 × 1150 |
| `images/hero/cupcakes.webp` | the cupcakes alone, used on tablet / mobile | 828 × 797 |
| `images/catalog/cupcake-1.jpg` … `cupcake-9.jpg` | catalog card photos, left → right, top → bottom | 377 × 245 |
| `images/about/confectioner.png` | confectioner block on white: photo, yellow circle, blurred raspberry and leaves (the top of the head was rebuilt because the screenshot cut it off) | 586 × 826 |
| `images/reviews/client-1.jpg` | reviewer photo (shown as a circle) | 375 × 375 |
| `images/gallery/order-1.jpg` … `order-9.jpg` | "3 000 orders" gallery | 640 × 446 |
| `images/decor/raspberry.png`, `leaf.png` | floating raspberries / leaves, already blurred | 189 × 191, 241 × 163 (scaled per spot in CSS) |
| `images/clouds/cloud-top.png`, `cloud-bottom.png` | cloud dividers from the design | 1920 × 170 / 300 |

Still drawn placeholders (not visible in any screenshot): `images/custom/phone-hand.png` (Figma layer
"phone 1", 960 × 880, transparent PNG), `images/reviews/client-2.jpg` and `client-3.jpg` (the faded
side reviews), and `images/clouds/cloud-hero.png`, which is only used below 1230 px.

## Responsive

* **≥ 1230 px**: the desktop layout from the design.
* **992–1229 px**: fluid container; the cupcakes cut-out sits to the right of the text.
* **768–991 px**: two-column catalog; the hero image moves under the buttons; review cards stack.
* **< 768 px**: one column, full-width buttons, 2-column gallery.
