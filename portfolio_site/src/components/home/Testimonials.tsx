import { cacheLife } from "next/cache";
import { Section, cardClass } from "./Section";
import { getTestimonials } from "@/lib/data/content";

export async function Testimonials() {
  "use cache";
  cacheLife("minutes");

  const items = await getTestimonials();

  return (
    <Section title="What Clients Say" tone="muted">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <figure key={i} className={cardClass}>
            <blockquote className="text-neutral-700">“{t.quote}”</blockquote>
            <figcaption className="mt-4">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-neutral-500">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}