import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="mx-auto my-10 w-full max-w-6xl px-4 sm:px-6">
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-16 text-center text-white shadow-[0_25px_60px_-12px_rgba(37,99,235,0.5)]">
        <h2 className="text-3xl font-bold">Ready to grow your business?</h2>
        <p className="mx-auto mt-3 max-w-xl text-blue-100">
          Let's talk about your goals and build a plan that delivers measurable results.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}