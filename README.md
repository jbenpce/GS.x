# GreenSparx — greensparx.io

A plain static **HTML/CSS** website for **GreenSparx**, a Rome-based European
developer of battery energy storage (BESS) and solar PV. No build step, no
frameworks — just open the files or serve the folder.

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `portfolio.html` | Portfolio / Pipeline |
| `team.html` | Team |
| `news.html` | News |
| `contact.html` | Contact |

## Structure

```
.
├── index.html, portfolio.html, team.html, news.html, contact.html
├── css/styles.css     # full design system (CSS custom properties)
├── js/main.js         # mobile nav, scroll reveal, form stubs, footer year
└── assets/favicon.svg
```

## Running locally

It's static, so just open `index.html` in a browser. For clean relative paths,
serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Key facts featured

- ~960 MW wholly-owned BESS pipeline + 400 MW BESS in joint venture (~1.4 GW total)
- Proprietary solar PV pipeline
- First two BESS (130 MW) in southern Italy with land + grid secured
- 50–99 MW project strategy on 36 kV / 150 kV connections
- 15 live grid connection applications
- Ready-to-build (RTB) target Q3 2027

## Customising the brand

Everything is driven from CSS custom properties at the top of
`css/styles.css` (`:root`). Update these to match the real brand:

- **Colors** — `--green-*`, `--accent`, neutrals
- **Fonts** — `--font-sans` / `--font-display` (currently Inter via Google Fonts)
- **Logo** — replace the `.brand-mark` lettermark and `assets/favicon.svg`

## Placeholders to confirm

These were stubbed pending real assets — search and replace as needed:

- **Team** (`team.html`): names, roles, bios and photos are placeholders
- **News** (`news.html`): articles are illustrative placeholders
- **Portfolio** (`portfolio.html`): individual project names/capacities are indicative
- **Contact** (`contact.html`): email, LinkedIn, address, map — and wire the form
  to a service (Formspree, Netlify Forms, etc.) to receive submissions
- **Logo & brand colors**: confirm and swap into `:root` and `.brand-mark`
