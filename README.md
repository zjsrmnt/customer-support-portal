# CookieCrumbs Landing Page

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#license)

Customer support and software download portal for **CookieCrumbs** — a cybersecurity
browser extension for cookie risk analysis, real-time threat alerts, risk-based
cookie protection, and website privacy scoring.

> Capstone project — Pampanga State University, College of Computing Studies (May 2026).

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Downloadable Package](#downloadable-package)
- [Deployment](#deployment)
- [Placeholders](#placeholders)
- [Team](#team)
- [License](#license)

---

## About

CookieCrumbs analyzes and classifies website cookies in real time, estimates
privacy risk, and gives users a 0–100 privacy score plus real-time threat alerts —
so they can make informed decisions about a site's data handling before consenting
to cookies.

This repository contains the **landing / support portal** that accompanies the
extension: homepage, downloads, installation guide, user guide, FAQ, and support
pages. The extension itself (Manifest V3, Chromium-based) is distributed as
`cookiecrumbs.zip`.

## Features

- **Homepage** — hero, feature grid, 3-step "get started", support strip
- **Downloads** — version info, system requirements, release notes, real
  download button (no fake links)
- **Installation Guide** — numbered steps + troubleshooting for unpacked
  Chromium extensions
- **User Guide** — sections + tutorials covering classification, privacy score,
  protection modes, pre-consent estimation
- **FAQ** — categorized, searchable accordion
- **Support** — email contact card, expectations, resource links
- **Responsive** — mobile-first, hamburger drawer with Escape-to-close
- **Accessible** — semantic HTML, focus-visible outlines, ARIA on accordions
- **Resilient** — route-level code splitting + error boundary

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 19 |
| Build | Vite 8 |
| Styling | Tailwind CSS 3.4 |
| Routing | React Router 7 |
| Icons | Lucide React |
| Linting | Oxlint |

No backend, no auth, no state library — the site is fully static.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18+ (LTS recommended)
- npm (bundled with Node)

### Install & run

```bash
git clone https://github.com/zjsrmnt/customer-support-portal.git
cd customer-support-portal
npm install
npm run dev
```

Open **http://localhost:5173** in your browser. The page hot-reloads on edit.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project Structure

```
customer-support-portal/
├── public/
│   └── downloads/
│       └── cookiecrumbs.zip      # downloadable extension package
├── src/
│   ├── assets/                   # logo and images
│   ├── components/
│   │   ├── common/               # Button-less primitives: Card, Container, ...
│   │   ├── layout/               # Header, Footer, PageShell
│   │   └── sections/             # Hero, FeaturesGrid, HowItWorks, SupportStrip
│   ├── data/                     # ALL content lives here
│   ├── hooks/                    # useDocumentTitle
│   ├── pages/                    # one file per route
│   ├── App.jsx                   # routes + layout shell
│   └── main.jsx                  # router provider
├── DEPLOYMENT.md
├── PLACEHOLDERS.md
└── tailwind.config.js
```

## Content Management

All text, versions, URLs, FAQs, steps, and tutorials live in `src/data/*.js`.
Editing content never requires touching components:

| File | Controls |
|---|---|
| `siteConfig.js` | Product name, tagline, version, download URL, support email, copyright |
| `navigation.js` | Header/footer links |
| `features.js` | Homepage feature cards |
| `installationSteps.js` | Install steps + troubleshooting |
| `userGuide.js` | Guide sections + tutorials |
| `faqData.js` | FAQ categories and Q&A |
| `releaseNotes.js` | Version history |

## Downloadable Package

The extension is shipped as `public/downloads/cookiecrumbs.zip` (~7.5 MB) and is
served statically. To update it, replace the file and keep `downloadUrl` in
`src/data/siteConfig.js` pointing at `/downloads/cookiecrumbs.zip`.

## Deployment

The site is a fully static SPA. Recommended hosts: **Vercel**, **Netlify**,
**GitHub Pages**, or **Cloudflare Pages**.

```bash
npm run build   # output in dist/
```

- Build command: `npm run build`
- Output directory: `dist`
- No environment variables required

For SPA routing on Netlify, add a `_redirects` file with `/* /index.html 200`.
See `DEPLOYMENT.md` for the full checklist and domain setup.

## Placeholders

Items still needing real values before final submission are tracked in
[`PLACEHOLDERS.md`](./PLACEHOLDERS.md) (support email, final requirements
confirmation, etc.).

## Team

Capstone project by:

- Batac, Ruffa Lee C.
- Bondoc, Trixel B.
- Dayao, Kian Roby P.
- Javate, Joseph Dion G.
- Linogon, Christian Justine O.
- Manalo, Adrian R.
- Sarmiento, Zhean Jessther F.

Pampanga State University — College of Computing Studies.

## License

This project is released under the [MIT License](https://opensource.org/licenses/MIT).
