# GS.x logo assets

| File | Use |
|------|-----|
| `gsx-icon.svg` | The mark alone (transparent). Any size. |
| `gsx-mark-square.svg` / `-1024.png` / `-300.png` | **LinkedIn** company logo / social avatars (square, dark tile). Upload the 1024 PNG; 300 is the platform minimum. |
| `gsx-lockup-light.svg` / `.png` | **Email signatures** on white/light backgrounds (dark wordmark, transparent). |
| `gsx-lockup-dark.svg` / `.png` | Lockup for dark backgrounds (light wordmark, transparent). |

**Email signature:** use `gsx-lockup-light.png` (transparent PNG, ~200px tall) — most email clients don't render SVG.

**LinkedIn:** upload `gsx-mark-square-1024.png` as the company/page logo.

**Font note:** the SVG wordmarks reference the brand serif **Fraunces** (`Fraunces, Georgia, serif`). The exported **PNG** wordmarks were rendered in a fallback serif because Fraunces isn't installed in the build environment. For pixel-perfect PNGs, re-export the SVGs on a machine with Fraunces installed, or send me the Fraunces font file and I'll convert the wordmark to outlines.

The mark is the battery + 3-arrow recycling symbol in the brand green gradient (`#6ee79a → #2bb673 → #127a4d`).
