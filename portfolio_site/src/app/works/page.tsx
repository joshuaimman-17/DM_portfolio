import Link from "next/link";
import { cacheLife, cacheTag } from "next/cache";
import { getWorks } from "@/lib/data/works";

export default async function Works() {
  "use cache";
  cacheLife("minutes");
  cacheTag("works");

  const works = await getWorks();

  return (
    <>
      <h1 className="mb-4">Works</h1>

      <div className="row g-4">
        {works.map((w) => (
          <div className="col-12 col-md-6 col-lg-4" key={w.slug}>
            <div className="card h-100 shadow-sm">
              <div
                className="bg-secondary-subtle d-flex align-items-center justify-content-center"
                style={{ height: 180 }}
              >
                <span className="text-muted">Image placeholder</span>
              </div>
              <div className="card-body">
                <span className="badge text-bg-primary mb-2">{w.category}</span>
                <h2 className="h5 card-title">{w.title}</h2>
                <p className="card-text text-muted">{w.summary}</p>
              </div>
              <div className="card-footer bg-transparent border-0 pb-3">
                <Link href={`/works/${w.slug}`} className="btn btn-outline-primary btn-sm">
                  View project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-muted small mt-4">
        Rendered at: {new Date().toISOString()}
      </p>
    </>
  );
}