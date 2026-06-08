# GS.x — Greenspar.x

A plain static **single-page** website (HTML/CSS/vanilla JS, no build step) for
**Greenspar.x (GS.x)**, a European development platform focused on battery
energy storage and the infrastructure enabling the clean energy transition.

Dark editorial aesthetic: near-black canvas, high-end serif display
(Fraunces) with sage-green italics, uppercase letterspaced sans labels
(Inter), and generous negative space.

## Structure

```
.
├── index.html        # single-page site (anchor-nav sections)
├── css/styles.css    # design system (CSS custom properties)
├── js/main.js        # header scroll state, mobile nav, scroll reveal, year
└── assets/favicon.svg
```

Sections (anchor-linked from the nav): Hero · What we do (Our Approach) ·
Portfolio · Team · Partners · Investors · Get in touch.

## Running locally

It's static — open `index.html`, or serve the folder for clean paths:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deployment

GitHub Pages via Actions (`.github/workflows/deploy-pages.yml`) — every push
to the deploy branch auto-publishes to:
**https://jbenpce.github.io/GS.x/**

## Content

Stats, team and copy are sourced from the GS.x prototype:

- **960 MW** proprietary Italian BESS portfolio (9 projects, STMG secured)
- Team: John Bottomley (CFA), Ewan Gibb, Carlos Martínez

## Customising

Theme is driven by CSS custom properties at the top of `css/styles.css`
(`:root`): colors (`--ink`, `--sage`, `--forest`…), fonts (`--serif`,
`--sans`), and rhythm.

### Placeholders to confirm
- **Hero visual** — currently a CSS-generated green "energy field." Drop in the
  real hero image/video by replacing `.energy-field` background in the CSS.
- **LinkedIn URLs** — team and contact LinkedIn links point to `#`.
- **Team photos** — circular initial avatars; swap for real headshots if desired.
- **Contact form** — the Investor Relations "Get in Touch" form is a front-end
  stub. Wire it to a service (Formspree, Netlify Forms, etc.) to receive
  submissions. Contact: Greenspar.x S.r.l., Via Eleonora Duse 53, 00197 Roma —
  info@greensparx.io.
