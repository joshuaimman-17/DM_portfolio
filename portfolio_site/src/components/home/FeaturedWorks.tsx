import Link from "next/link";
import { cacheLife } from "next/cache";
import { Section } from "./Section";
import { getFeaturedWorks } from "@/lib/data/content";

export async function FeaturedWorks() {
  "use cache";
  cacheLife("minutes");

  const works = await getFeaturedWorks();

  return (
    <Section title="Featured Works" subtitle="Real projects, measurable results">
      <div className="grid gap-6 md:grid-cols-3">
        {works.map((w) => (
          <Link key={w.slug} href={`/works/${w.slug}`} className="group overflow-hidden rounded-xl border">
            <div className="aspect-video bg-neutral-200" /> {/* thumbnail */}
            <div className="p-5">
              <p className="text-sm text-neutral-500">{w.client}</p>
              <h3 className="mt-1 font-semibold group-hover:text-blue-600">{w.title}</h3>
              <p className="mt-2 font-medium text-green-600">{w.result}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/works" className="font-medium text-blue-600 hover:underline">View all works →</Link>
      </div>
    </Section>
  );
}