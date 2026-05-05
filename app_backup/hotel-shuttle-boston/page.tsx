export const metadata = {
  title: "Hotel Shuttle Boston | Guest & Group Transportation Services",
  description:
    "Hotel shuttle transportation in Boston for guest movement, weddings, conferences and airport transfers using charter buses, minibuses and Sprinter vans.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-semibold mb-6">
        Hotel Shuttle Transportation in Boston
      </h1>

      <p className="text-lg text-neutral-300 mb-6">
        Organized hotel shuttle transportation helps guests travel smoothly
        between airports, venues, corporate offices and event locations.
      </p>

      <p className="text-neutral-400 mb-10">
        BlackTier Executives supports hotels, planners and corporate hosts
        with reliable group shuttle programs designed for guest comfort
        and efficient scheduling.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Typical hotel shuttle use cases
      </h2>

      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-10">
        <li>Airport pickup and drop coordination</li>
        <li>Wedding guest transportation programs</li>
        <li>Corporate conference guest movement</li>
        <li>Tour group and private travel routing</li>
        <li>Multi-hotel event transportation loops</li>
      </ul>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h3 className="text-xl font-semibold mb-3">
          Need a hotel shuttle plan?
        </h3>

        <p className="text-neutral-300 mb-6">
          Share guest count, hotel locations and event schedule.
          We’ll recommend the right vehicle program.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-[#d7aa60] text-black px-6 py-3 rounded-lg font-medium"
          >
            Request Hotel Shuttle Quote
          </a>

          <Link href="/event-bus-rental-boston" className="underline">
            Event Bus Rental
          </Link>
        </div>
      </div>
    </main>
  );
}