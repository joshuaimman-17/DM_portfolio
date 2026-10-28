import Link from "next/link";
import { Section } from "./Section";
import { services } from "@/lib/data/content";

export function ServicesOverview() {
  return (
    <Section title="What I Do" subtitle="Full-funnel digital marketing services">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="rounded-xl border p-6 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-3xl">{s.icon}</div>
            <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-neutral-600">{s.summary}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}