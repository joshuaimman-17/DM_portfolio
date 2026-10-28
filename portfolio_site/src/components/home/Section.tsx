import { ReactNode } from "react";

// Floating card style for items inside sections
export const cardClass =
  "rounded-xl bg-white p-5 shadow-md ring-1 ring-black/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-6";

export function Section({
  title,
  subtitle,
  children,
  tone = "default",
  className = "",
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  tone?: "default" | "muted";
  className?: string;
}) {
  const bg = tone === "muted" ? "bg-neutral-50" : "bg-white";

  return (
    // Mobile: full width, small vertical gap. Desktop: centered, wider gap.
    <section className="mx-auto my-4 w-full max-w-7.5xl sm:my-10 sm:px-6">
      <div
        className={`${bg} px-4 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] ring-1 ring-black/5
          sm:rounded-3xl sm:px-10 sm:py-14 sm:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ${className}`}
      >
        {title && (
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
            {subtitle && <p className="mt-2 text-neutral-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function CardSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="h-48 animate-pulse rounded-xl bg-neutral-200 shadow-md" />
      ))}
    </div>
  );
}