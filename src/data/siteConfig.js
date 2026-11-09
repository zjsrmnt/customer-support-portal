// Product configuration for CookieCrumbs.
// Values derived from the capstone document "IT 57 - CookieCrumbs - FINAL".
// Items still marked PLACEHOLDER need real values before final submission.

export const siteConfig = {
  productName: "CookieCrumbs",
  tagline:
    "A cybersecurity browser extension for cookie risk analysis, real-time threat alerts, risk-based cookie protection, and website privacy scoring.",
  description:
    "CookieCrumbs analyzes and classifies website cookies in real time, estimates privacy risk, and gives you a 0-100 privacy score plus real-time threat alerts — so you can make informed decisions about a site's data handling before you consent.",
  version: "1.0.0",
  releaseDate: "2026-05-01",
  // Downloadable extension package (served from /public/downloads/).
  downloadUrl: `${import.meta.env.BASE_URL}downloads/cookiecrumbs.zip`,
  installerFileName: "cookiecrumbs.zip",
  installerSize: "~7.5 MB",
  platforms: [
    "Google Chrome (desktop)",
    "Microsoft Edge (desktop)",
    "Brave (desktop)",
  ],
  supportEmail: "support@example.com", // PLACEHOLDER
  copyright: "© 2026 CookieCrumbs Capstone Team. All rights reserved.",
};
