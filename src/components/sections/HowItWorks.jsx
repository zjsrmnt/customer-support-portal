import { Icon } from "../common/Icon.jsx";

const steps = [
  { title: "Download", body: "Get the installer from the Downloads page.", icon: "Download" },
  { title: "Install", body: "Run the installer and follow the wizard.", icon: "CheckCircle2" },
  { title: "Start using", body: "Open the app and follow the user guide.", icon: "BookOpen" },
];

export function HowItWorks() {
  return (
    <section className="bg-ink-100">
      <div className="container-page section">
        <h2 className="heading-2">Get up and running in minutes</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3 lg:gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="card">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <Icon name={s.icon} className="h-5 w-5 text-brand-600" />
              </div>
              <h3 className="mt-4 font-semibold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
