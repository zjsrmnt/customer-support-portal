# Deployment Guide — CookieCrumbs Landing Page

## 1. Production Build

```bash
npm install
npm run build
```

Output is written to `dist/`. Preview locally before deploying:

```bash
npm run preview
```

## 2. Environment Configuration

No environment variables are required — the site is fully static. All content is
configured in `src/data/siteConfig.js` and other files under `src/data/`.

To point the download button at a real installer, set:

```js
// src/data/siteConfig.js
downloadUrl: "/downloads/CookieCrumbs-extension.zip", // or a full URL
```

and place the file under `public/downloads/`.

## 3. Hosting Recommendations

The site is a static single-page app (SPA) with client-side routing. Any static
host works. Recommended options:

- **Vercel** (recommended) — connect the GitHub repo, auto-deploys on push,
  handles SPA fallback automatically.
- **Netlify** — drag-and-drop `dist/` or connect repo; add a `_redirects` file
  with `/* /index.html 200` for SPA routing.
- **GitHub Pages** — enable in repo settings; add a `404.html` copy of
  `index.html` for SPA fallback, or use HashRouter.
- **Cloudflare Pages** — connect repo, build command `npm run build`,
  output dir `dist`.

## 4. Domain Configuration (optional)

1. Buy a domain (e.g., cookiecrumbs.example).
2. In your host's dashboard, add the domain and follow the DNS instructions
   (usually a CNAME or A record).
3. Enable HTTPS (most hosts provision a free TLS certificate automatically).
4. Update `index.html` `<title>` and any absolute URLs if needed.

## 5. Deployment Checklist

- [ ] All placeholders in `PLACEHOLDERS.md` replaced with real values
- [ ] Real installer/package uploaded and `downloadUrl` set
- [ ] Support email updated
- [ ] `npm run build` succeeds with no errors
- [ ] `npm run lint` passes
- [ ] Manual test of all routes on desktop and mobile
- [ ] FAQ search and download button verified
- [ ] Lighthouse / accessibility check run
- [ ] Custom domain configured (if applicable)
- [ ] Analytics added (optional)

## 6. Post-Deploy Verification

After deploying, verify:
- Homepage loads and hero renders
- All nav links work (no 404s)
- Downloads page shows correct version and download state
- Installation guide steps display
- FAQ search works
- Mobile layout is intact

## 7. Updating Content Later

Because all content lives in `src/data/*.js`, updates are simple:
1. Edit the relevant data file.
2. Commit and push to `main`.
3. Host auto-redeploys (Vercel/Netlify/Cloudflare).

No component changes required for text, version, or FAQ updates.
