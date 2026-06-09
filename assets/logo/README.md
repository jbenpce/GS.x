# GS.x logo assets

Logo = Apple-style charging battery (green-gradient fill + bolt) inside a sage
3-arrow recycling ring. Brand green `#6ee79a → #2bb673 → #127a4d`; sage `#a8c3a1`.

## Pick by background
File names say which background they're for: **`on-light`** = dark wordmark for
white/light backgrounds; **`on-dark`** = light wordmark for dark backgrounds.

| File | Use on… |
|------|---------|
| `gsx-lockup-on-light.svg` / `.png` | **Light/white** backgrounds (light docs, white email) |
| `gsx-lockup-on-dark.svg` / `.png` | **Dark** backgrounds (dark slides, the website) |
| `gsx-signature-on-light.png` | **Email signature** on white/light email |
| `gsx-signature-on-dark.png` | Email signature on dark email |

## Square / profile (work on any background — dark tile)
| File | Use | Size |
|------|-----|------|
| `gsx-profile-400.png` | **X** & **LinkedIn** profile picture / avatar | 400×400 |
| `gsx-mark-square-1024.png` / `-300.png` | **LinkedIn** company-page logo | 1024 / 300 |
| `gsx-mark-square.svg` | Square mark, any size | vector |
| `gsx-icon.svg` | The mark alone (transparent) | vector |

## LinkedIn banners (hero image + logo, right side)
| File | Use | Size |
|------|-----|------|
| `gsx-linkedin-banner.png` | LinkedIn profile/cover background | 1584×396 |
| `gsx-linkedin-banner-company.png` | LinkedIn company-page cover | 1128×191 |

## Favicon (in `assets/`, not here)
`favicon.svg` is a **simplified** mark for small sizes — just the charging
battery (no ring) so it stays legible at 16–32px. `apple-touch-icon.png`
(180×180) and `favicon-32.png` are raster fallbacks; both are wired into the
pages.

## Font note
SVG wordmarks reference the brand serif **Fraunces** and are exact wherever it's
installed. The **PNG** wordmark exports (signatures, banners) use a fallback
serif because Fraunces can't be installed in the build environment. Square /
profile / favicon PNGs are icon-only, so they're pixel-perfect. For exact PNG
wordmarks, re-export the SVGs where Fraunces is available, or send the font and
the wordmark can be outlined.
