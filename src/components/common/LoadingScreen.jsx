import { useEffect, useState } from "react";

const BITE_DELAYS = [0.25, 0.55, 0.85, 1.15, 1.45];

export function LoadingScreen({ duration = 2400 }) {
  const [hidden, setHidden] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const total = prefersReducedMotion ? 800 : duration;
    const fadeAt = Math.max(total - 450, 0);

    const fade = setTimeout(() => setLeaving(true), fadeAt);
    const done = setTimeout(() => setHidden(true), total);

    return () => {
      clearTimeout(fade);
      clearTimeout(done);
    };
  }, [duration]);

  useEffect(() => {
    if (hidden) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      className={`cc-loader ${leaving ? "cc-loader--leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading CookieCrumbs"
    >
      <div className="cc-loader__stage" aria-hidden="true">
        <svg className="cc-cookie" viewBox="0 0 120 120" role="presentation">
          <defs>
            <radialGradient id="cc-cookie-fill" cx="38%" cy="32%" r="75%">
              <stop offset="0%" stopColor="#fcd34d" />
              <stop offset="55%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
            <mask id="cc-cookie-bites">
              <rect width="120" height="120" fill="white" />
              {BITE_DELAYS.map((delay, i) => (
                <circle
                  key={i}
                  className="cc-bite"
                  style={{ animationDelay: `${delay}s` }}
                  cx={[104, 117, 101, 63, 24][i]}
                  cy={[26, 63, 100, 117, 108][i]}
                  r={i === 4 ? 14 : 15}
                  fill="black"
                />
              ))}
            </mask>
          </defs>

          <g mask="url(#cc-cookie-bites)">
            <circle
              cx="60"
              cy="60"
              r="47"
              fill="url(#cc-cookie-fill)"
              stroke="#92400e"
              strokeWidth="2.5"
            />
            {/* chocolate chips */}
            <circle cx="43" cy="40" r="5" fill="#4a2a12" />
            <circle cx="70" cy="35" r="4.2" fill="#4a2a12" />
            <circle cx="79" cy="57" r="5" fill="#4a2a12" />
            <circle cx="52" cy="62" r="4.4" fill="#4a2a12" />
            <circle cx="64" cy="82" r="5" fill="#4a2a12" />
            <circle cx="35" cy="64" r="3.6" fill="#4a2a12" />
            <circle cx="70" cy="72" r="3.4" fill="#4a2a12" />
            <circle cx="48" cy="88" r="3.2" fill="#4a2a12" />
          </g>
        </svg>

        <span className="cc-crumb cc-crumb-1" />
        <span className="cc-crumb cc-crumb-2" />
        <span className="cc-crumb cc-crumb-3" />
        <span className="cc-crumb cc-crumb-4" />
        <span className="cc-crumb cc-crumb-5" />
      </div>

      <p className="cc-loader__title">CookieCrumbs</p>
      <p className="cc-loader__hint">Taking a bite out of tracking…</p>

      <div className="cc-loader__bar" aria-hidden="true">
        <span
          className="cc-loader__bar-fill"
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  );
}
