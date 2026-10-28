import Link from "next/link";
import { Section } from "./Section";

export function Hero() {
  return (
    <Section>
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
        <div className="text-center md:text-left">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-blue-600">
            Digital Marketing Expert
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            I help brands grow with SEO and performance marketing
          </h1>
          <p className="mt-4 text-base text-neutral-600 sm:text-lg">
            Data-driven strategies that turn traffic into leads and leads into revenue.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 md:justify-start">
            <Link
              href="/works"
              className="rounded-lg bg-blue-600 px-6 py-3 text-center font-medium text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              View My Works
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-neutral-300 px-6 py-3 text-center font-medium transition hover:-translate-y-0.5 hover:bg-neutral-100 hover:shadow-md"
            >
              Hire Me
            </Link>
          </div>
        </div>
        {/* Replace with next/image of your photo */}
        <div className="order-first mx-auto aspect-square w-3/4 max-w-xs rounded-2xl bg-gradient-to-br from-blue-100 to-neutral-200 shadow-2xl md:order-none md:w-full md:max-w-none" />
      </div>
    </Section>
  );
}