import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cacheLife, cacheTag } from "next/cache";
import { getWork, getWorks } from "@/lib/data/works";

export async function generateStaticParams() {
  const works = await getWorks();
  return works.map((w) => ({ slug: w.slug }));
}

// 1. Shell: renders instantly
export default function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<WorkSkeleton />}>
      <WorkLoader params={params} />
    </Suspense>
  );
}

// 2. Loader: reads params (uncached, tiny)
async function WorkLoader({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <WorkContent slug={slug} />;
}

// 3. Cached content: this is your ISR part
async function WorkContent({ slug }: { slug: string }) {
  "use cache";
  cacheLife("minutes");
  cacheTag("works", `work-${slug}`);

  const work = await getWork(slug);
  if (!work) notFound();

  return (
    <article>
      <Link href="/works" className="btn btn-link px-0 mb-3">
        ← Back to works
      </Link>

      <span className="badge text-bg-primary mb-2">{work.category}</span>
      <h1>{work.title}</h1>

      <div
        className="bg-secondary-subtle d-flex align-items-center justify-content-center rounded my-4"
        style={{ height: 320 }}
      >
        <span className="text-muted">Cover image placeholder</span>
      </div>

      <p className="lead">{work.summary}</p>
      <p>{work.description}</p>

      <p className="text-muted small mt-4">
        Rendered at: {new Date().toISOString()}
      </p>
    </article>
  );
}

function WorkSkeleton() {
  return (
    <div className="placeholder-glow" aria-busy="true">
      <span className="placeholder col-3 mb-3 d-block" />
      <span className="placeholder col-6 mb-4 d-block" style={{ height: 36 }} />
      <span className="placeholder col-12 d-block" style={{ height: 320 }} />
    </div>
  );
}