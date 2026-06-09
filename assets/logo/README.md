# GS.x logo assets

## Logo (battery + recycling, variant C)
| File | Use |
|------|-----|
| `gsx-icon.svg` | The mark alone (transparent), any size |
| `gsx-mark-square.svg` / `-1024.png` / `-300.png` | Square mark on dark tile |
| `gsx-lockup-dark.svg` / `gsx-lockup-light.svg` | Horizontal lockup (icon + GS.x) for dark / light backgrounds |

## Ready-to-use, per platform
| File | Where | Size |
|------|-------|------|
| `gsx-profile-400.png` | **X** and **LinkedIn** profile picture / avatar | 400×400 |
| `gsx-mark-square-1024.png` | **LinkedIn** company page logo (hi-res) | 1024×1024 |
| `gsx-signature-light.png` | **Email signature** on white/light backgrounds | h=240, transparent |
| `gsx-signature-dark.png` | Email signature on dark backgrounds | h=240, transparent |
| `gsx-linkedin-banner.png` | **LinkedIn** profile/cover background | 1584×396 |
| `gsx-linkedin-banner-company.png` | **LinkedIn** company page cover | 1128×191 |

The banners use the homepage hero image (BESS + solar at sunset) with the logo
on a darkened right-hand panel.

## Font note
SVG wordmarks reference the brand serif **Fraunces** (`Fraunces, Georgia, serif`)
and are font-accurate wherever Fraunces is available. The **PNG** wordmark exports
(signatures, banners) were rendered in a fallback serif because Fraunces isn't
installed in the build environment. For pixel-perfect PNGs, re-export the SVGs on
a machine with Fraunces, or send the font and the wordmark can be converted to
outlines. The square / profile PNGs are icon-only, so they're exact.

Brand green gradient: `#6ee79a → #2bb673 → #127a4d`; sage `#a8c3a1`.
