import Link from "next/link";
import { cacheLife } from "next/cache";
import { Section } from "./Section";
import { getLatestPosts } from "@/lib/data/content";

export async function LatestPosts() {
  "use cache";
  cacheLife("minutes");

  const posts = await getLatestPosts();

  return (
    <Section title="Latest from the Blog" subtitle="Practical marketing insights">
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-xl border p-6 transition hover:shadow-md">
            <p className="text-sm text-neutral-500">{p.date} · {p.readTime}</p>
            <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-neutral-600">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}