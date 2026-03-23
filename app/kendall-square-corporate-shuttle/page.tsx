import Link from "next/link";

export const metadata = {
  title: "Kendall Square Corporate Shuttle | Executive & Employee Transportation",
  description:
    "Corporate shuttle service in Kendall Square for biotech, technology, executive travel, employee transportation, and airport group transfers.",
};

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold">
          Kendall Square Corporate Shuttle Service
        </h1>

        <p className="mt-6 text-neutral-300 leading-relaxed">
          BlackTier Executives provides premium corporate shuttle service in
          Kendall Square for biotech teams, technology firms, executive travel,
          and conference transportation. We help businesses move employees,
          clients, and visiting groups with cleaner logistics and better timing.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Why Kendall Square needs dedicated shuttle service
        </h2>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Kendall Square combines dense office activity, biotech campuses,
          executive meetings, and frequent airport travel. Coordinated group
          transportation reduces delays, limits scheduling friction, and keeps
          teams moving together between offices, hotels, event venues, and Logan
          Airport.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Ideal for biotech, startup, and executive movement
        </h2>

        <ul className="mt-4 space-y-3 text-neutral-300">
          <li>• Employee shuttle routes</li>
          <li>• Executive group transportation</li>
          <li>• Investor and client visits</li>
          <li>• Hotel-to-office conference movement</li>
          <li>• Airport transfers for business teams</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">
          Premium group vehicle options
        </h2>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Shuttle transportation in Kendall Square can be handled with Sprinter
          vans, minibuses, mini coaches, or larger coaches depending on the route,
          passenger volume, and frequency. This flexibility makes it easy to scale
          from one-time events to recurring corporate shuttle programs.
        </p>

        <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
          <h3 className="text-xl font-semibold">
            Need a Kendall Square shuttle program?
          </h3>

          <p className="mt-3 text-neutral-300">
            Tell us your pickup points, office schedule, and passenger count. We’ll
            recommend the best route structure and vehicle setup.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/cambridge-tech-shuttle"
              className="underline underline-offset-4 hover:text-white"
            >
              Cambridge Tech Shuttle
            </Link>
            <Link
              href="/boston-corporate-shuttle"
              className="underline underline-offset-4 hover:text-white"
            >
              Boston Corporate Shuttle
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