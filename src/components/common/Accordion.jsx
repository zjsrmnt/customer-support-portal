import { useState } from "react";
import { Icon } from "./Icon.jsx";

export function AccordionItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-ink-200 last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-4 text-left font-medium text-ink-900 hover:text-brand-700"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{question}</span>
        <Icon
          name="ChevronDown"
          className={`h-5 w-5 shrink-0 text-ink-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-4 text-ink-600 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export function Accordion({ items }) {
  return (
    <div className="divide-y divide-ink-200 rounded-xl border border-ink-200 bg-white">
      {items.map((item, i) => (
        <div key={i} className="px-5">
          <AccordionItem question={item.q} answer={item.a} />
        </div>
      ))}
    </div>
  );
}
