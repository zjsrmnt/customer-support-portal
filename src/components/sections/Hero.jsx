import { Link } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig.js";
import { Icon } from "../common/Icon.jsx";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="container-page py-16 sm:py-24">
        <div className="max-w-3xl">
          <span className="badge-brand inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
            Version {siteConfig.version} available
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            {siteConfig.productName}
          </h1>
          <p className="mt-4 text-lg text-ink-600 max-w-prose">{siteConfig.tagline}</p>
          <p className="mt-2 text-base text-ink-500 max-w-prose">{siteConfig.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/downloads" className="btn-primary">
              <Icon name="Download" className="h-4 w-4" />
              Download
            </Link>
            <Link to="/installation-guide" className="btn-secondary">
              Get started
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
