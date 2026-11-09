import { userGuideSections, tutorials } from "../data/userGuide.js";
import { PageShell } from "../components/layout/PageShell.jsx";
import { Card } from "../components/common/Card.jsx";

export default function UserGuidePage() {
  return (
    <PageShell title="User Guide">
      <div className="max-w-3xl">
        <h1 className="heading-1">User Guide</h1>
        <p className="mt-2 text-ink-600">
          Learn how to get the most out of the software.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {userGuideSections.map((s) => (
            <Card key={s.id} id={s.id}>
              <h2 className="heading-3">{s.title}</h2>
              <p className="mt-2 text-sm text-ink-600">{s.body}</p>
              <p className="mt-3 text-xs text-ink-400 italic">
                PLACEHOLDER — replace with real content.
              </p>
            </Card>
          ))}
        </div>
        <aside>
          <Card>
            <h3 className="font-semibold text-ink-900">Tutorials</h3>
            <ul className="mt-3 space-y-3">
              {tutorials.map((t) => (
                <li key={t.title}>
                  <p className="text-sm font-medium text-ink-900">{t.title}</p>
                  <p className="text-xs text-ink-500">{t.description}</p>
                </li>
              ))}
            </ul>
          </Card>
        </aside>
      </div>
    </PageShell>
  );
}
