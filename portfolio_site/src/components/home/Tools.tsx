import { Section } from "./Section";

const tools = [
  "Google Analytics 4", "Google Ads", "Meta Ads", "Search Console",
  "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Canva", "Looker Studio",
];

export function Tools() {
  return (
    <Section title="Tools I Use">
      <div className="flex flex-wrap justify-center gap-3">
        {tools.map((t) => (
          <span key={t} className="rounded-full border px-4 py-2 text-sm text-neutral-700">{t}</span>
        ))}
      </div>
      {/* Later: swap for real logos with next/image */}
    </Section>
  );
}