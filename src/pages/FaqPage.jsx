import { useState, useMemo } from "react";
import { faqCategories } from "../data/faqData.js";
import { PageShell } from "../components/layout/PageShell.jsx";
import { Accordion } from "../components/common/Accordion.jsx";
import { Icon } from "../components/common/Icon.jsx";

export default function FaqPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqCategories;
    return faqCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (it) =>
            it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query]);

  return (
    <PageShell title="FAQ">
      <div className="max-w-3xl">
        <h1 className="heading-1">Frequently Asked Questions</h1>
        <p className="mt-2 text-ink-600">Find quick answers to common questions.</p>
      </div>

      <div className="mt-6 max-w-3xl">
        <div className="relative">
          <Icon name="HelpCircle" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            aria-label="Search FAQ"
            className="w-full rounded-lg border border-ink-200 bg-white py-2.5 pl-10 pr-4 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {filtered.length === 0 ? (
          <p className="text-ink-500">No questions match your search.</p>
        ) : (
          filtered.map((cat) => (
            <div key={cat.category}>
              <h2 className="heading-3">{cat.category}</h2>
              <div className="mt-3">
                <Accordion items={cat.items} />
              </div>
            </div>
          ))
        )}
      </div>
    </PageShell>
  );
}
