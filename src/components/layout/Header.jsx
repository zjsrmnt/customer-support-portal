import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../../data/navigation.js";
import { siteConfig } from "../../data/siteConfig.js";
import { Container } from "../common/Container.jsx";
import { Icon } from "../common/Icon.jsx";
import logoUrl from "../../assets/cookiecrumbs-logo.svg";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-brand-700" : "text-ink-700 hover:text-brand-600"
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-ink-200 bg-white md:bg-white/90 md:backdrop-blur">
        <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link to="/" className="flex items-center gap-2 font-bold text-ink-900">
            <img src={logoUrl} alt="CookieCrumbs logo" className="h-8 w-8 lg:h-9 lg:w-9" />
            <span className="hidden sm:inline">{siteConfig.productName}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Primary">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/downloads" className="btn-primary hidden sm:inline-flex">
              <Icon name="Download" className="h-4 w-4" />
              Download
            </Link>
            <button
              type="button"
              className="md:hidden btn-secondary"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Icon name="Menu" className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer — rendered outside <header> so the header's
          backdrop-blur cannot become its containing block. */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Menu">
          <div
            className="absolute inset-0 bg-ink-900"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 h-full w-72 max-w-[85vw] overflow-y-auto bg-white p-6 shadow-lift">
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold text-ink-900">{siteConfig.productName}</span>
              <button
                type="button"
                className="btn-ghost"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <Icon name="X" className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-medium ${
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink-700 hover:bg-ink-100"
                    }`
                  }
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/downloads"
                className="btn-primary mt-4"
                onClick={() => setOpen(false)}
              >
                <Icon name="Download" className="h-4 w-4" />
                Download
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
