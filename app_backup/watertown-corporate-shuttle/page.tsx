import Link from "next/link";

export const metadata = {
  title: "Watertown Corporate Shuttle | Employee & Business Transportation",
  description:
    "Professional corporate shuttle service in Watertown for employee transportation, office travel, airport transfers, and business group movement.",
};

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold">
          Watertown Corporate Shuttle Service
        </h1>

        <p className="mt-6 text-neutral-300 leading-relaxed">
          BlackTier Executives provides premium corporate shuttle transportation
          in Watertown for businesses needing employee movement, executive
          transportation, airport transfers, and event logistics. Our shuttle
          solutions are designed for growing office clusters and structured group
          mobility across Greater Boston.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Why Watertown is a smart shuttle market
        </h2>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Watertown continues to grow as a strong office and mixed-use business
          zone, creating demand for scheduled employee transportation, executive
          shuttles, and business event movement. Corporate groups benefit from a
          cleaner transportation solution than coordinating multiple cars.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Shuttle use cases in Watertown
        </h2>

        <ul className="mt-4 space-y-3 text-neutral-300">
          <li>• Employee commute shuttle support</li>
          <li>• Airport transfers for teams and guests</li>
          <li>• Office-to-office transportation</li>
          <li>• Corporate event and meeting transportation</li>
          <li>• Executive group movement</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">
          Fleet flexibility for business transportation
        </h2>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Depending on group size and route needs, service can be provided with
          executive vans, Sprinter vans, minibuses, or coach options. This makes
          it easy to scale transportation from small office groups to larger
          recurring shuttle requirements.
        </p>

        <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
          <h3 className="text-xl font-semibold">
            Need a Watertown shuttle quote?
          </h3>

          <p className="mt-3 text-neutral-300">
            Share your office locations, rider volume, and travel schedule. We’ll
            recommend the right shuttle configuration.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/boston-corporate-shuttle"
              className="underline underline-offset-4 hover:text-white"
            >
              Boston Corporate Shuttle
            </Link>
            <Link
              href="/fleet"
              className="underline underline-offset-4 hover:text-white"
            >
              Fleet Options
            </Link>
            <Link
              href="/contact"
              className="underline underline-offset-4 hover:text-white"
            >
              Request Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}