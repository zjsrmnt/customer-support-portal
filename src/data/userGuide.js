export const userGuideSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    body: "Install CookieCrumbs as an unpacked extension, pin its icon, then open any website and click the icon to launch the side panel. The panel shows cookies, categories, and a privacy score for the current site.",
  },
  {
    id: "overview",
    title: "System Overview",
    body: "CookieCrumbs has three main views: the side panel (cookie list, categories, privacy score, risk composition), an on-page widget (real-time threat alerts), and a pre-consent overlay (estimated tracking before you accept a cookie banner).",
  },
  {
    id: "classification",
    title: "Cookie Classification",
    body: "Each cookie is categorized as Strict, Functionality, Performance, Advertising, or Unknown using a four-layer cascade: exact database match, wildcard prefix match, blocklist detection, and a local Random Forest model.",
  },
  {
    id: "privacy-score",
    title: "Privacy Score",
    body: "A 0-100 score based on cookie categories, lifespans, first/third-party origin, and tracking risk. Higher is better. Treat it as an analytical estimate, not an absolute measurement.",
  },
  {
    id: "protection",
    title: "Protection Modes",
    body: "Toggle between analysis-only mode and automatic protection mode. Protection includes tracker request blocking, high-risk cookie deletion, reappearance suppression, and Session Guard for insecure session cookies.",
  },
  {
    id: "pre-consent",
    title: "Pre-Consent Estimation",
    body: "Before you interact with a cookie banner, CookieCrumbs estimates possible tracking activity by detecting consent elements and matching script sources against local tracker/vendor data.",
  },
];

export const tutorials = [
  { title: "Tutorial 1: Your first scan", description: "Open the side panel on a news site and read the cookie list and privacy score." },
  { title: "Tutorial 2: Reading threat alerts", description: "Watch the on-page widget update as cookies and trackers are detected." },
  { title: "Tutorial 3: Enabling protection", description: "Switch to automatic protection mode and see blocked tracker requests." },
  { title: "Tutorial 4: Pre-consent check", description: "Load a site with a cookie banner and review the pre-consent estimate." },
];
