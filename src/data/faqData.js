export const faqCategories = [
  {
    category: "General",
    items: [
      {
        q: "What is CookieCrumbs?",
        a: "CookieCrumbs is a cybersecurity browser extension that analyzes website cookies, provides real-time threat alerts, applies risk-based cookie protection, and scores a website's privacy from 0 to 100.",
      },
      {
        q: "Which browsers are supported?",
        a: "Desktop Chromium-based browsers only: Google Chrome, Microsoft Edge, and Brave. Mobile browsers are not supported.",
      },
      {
        q: "Is my data sent to any server?",
        a: "No. All analysis, classification, and scoring run locally in your browser. Reference data and the ML model are bundled with the extension.",
      },
    ],
  },
  {
    category: "Installation",
    items: [
      {
        q: "How do I install CookieCrumbs?",
        a: "Download the extension package, extract it, enable Developer mode on chrome://extensions, then click 'Load unpacked' and select the extracted folder.",
      },
      {
        q: "Why do I need Developer mode?",
        a: "CookieCrumbs is distributed as an unpacked extension for the capstone demo, which requires Developer mode to load.",
      },
    ],
  },
  {
    category: "Privacy & Scoring",
    items: [
      {
        q: "What does the privacy score mean?",
        a: "A 0-100 estimate of a site's privacy stance based on cookie categories, lifespans, and tracking risk. Higher is better. It is an estimate, not an absolute measurement.",
      },
      {
        q: "Does CookieCrumbs block all tracking?",
        a: "No. It selectively identifies, restricts, and removes high-risk cookies and tracker activity. Authentication and site-essential services are excluded from blocking.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    items: [
      {
        q: "The extension shows no data on a site.",
        a: "Refresh the page after installing. Some sites load cookies only after interaction. Reopen the side panel.",
      },
      {
        q: "A site stopped working after enabling protection.",
        a: "Switch to analysis-only mode. Essential services are excluded, but if a needed domain was blocked, report it to the team.",
      },
    ],
  },
];
