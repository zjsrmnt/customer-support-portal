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
  // The extension is distributed as an unpacked Chromium extension for the capstone demo.
  // Set to a real download URL (e.g. a zipped extension build) when available.
  downloadUrl: null,
  installerFileName: "CookieCrumbs-extension.zip",
  installerSize: "—",
  platforms: [
    "Google Chrome (desktop)",
    "Microsoft Edge (desktop)",
    "Brave (desktop)",
  ],
  supportEmail: "support@example.com", // PLACEHOLDER
  copyright: "© 2026 CookieCrumbs Capstone Team. All rights reserved.",
};
