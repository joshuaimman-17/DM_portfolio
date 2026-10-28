import { Section, cardClass } from "./Section";

const steps = [
  { title: "Discovery", text: "Understand your business, audience and goals." },
  { title: "Strategy", text: "Build a channel plan backed by research and data." },
  { title: "Execution", text: "Launch campaigns, content and tracking." },
  { title: "Optimization", text: "Test, learn and improve continuously." },
  { title: "Reporting", text: "Clear dashboards showing real business impact." },
];

export function Process() {
  return (
    <Section title="How I Work" subtitle="A simple process built around results" tone="muted">
      <ol className="grid gap-6 md:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.title} className={`${cardClass} !p-5`}>
            <span className="text-sm font-bold text-blue-600">0{i + 1}</span>
            <h3 className="mt-1 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}