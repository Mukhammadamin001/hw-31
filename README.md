# Positivus — landing page

Pixel-perfect HTML/CSS build of the **Positivus** Figma landing page (desktop frame 1440px, 1240px content).

Open `index.html` in a browser — no build step.

```
index.html        markup
css/style.css     styles (design tokens at the top, responsive rules at the bottom)
js/main.js        burger menu, "Working process" accordion, testimonials slider
images/           SVG illustrations, team photos and partner logos
```

## Design specs used

| Token | Value |
| --- | --- |
| Font | Space Grotesk 400 / 500 |
| Colors | `#B9FF66` green, `#191A23` dark, `#F3F3F3` grey, `#EFEFEF` page |
| Typography (desktop) | H1 60, H2 40, H3 30, H4 20, P 18 |
| Typography (mobile) | H1 43, H2 36, H3 26, H4 18, P 16 |
| Radius | 45 cards, 14 buttons / inputs, 7 heading tags |
| Card shadow | `0 5px 0 #191A23` |
| Spacing | 140 between sections, 80 heading → content, 40 card gap, 30 process gap |

The illustrations in `images/` are hand-drawn SVG recreations sized to the Figma frames.
To swap in the originals, select the layer in Figma → **Export → SVG** and save it over the file
with the same name (e.g. `images/hero.svg`, `images/services/seo.svg`, `images/team/john-smith.svg`).

## Other pages in this repo

| Folder | Page |
| --- | --- |
| `/` (this folder) | Positivus — digital marketing agency landing |
| [`cupcakes/`](cupcakes/) | «Сладкий сундук» — cupcake shop landing (Figma «Макет Landing Page для Figma (шаблон)»), see [`cupcakes/README.md`](cupcakes/README.md) |
