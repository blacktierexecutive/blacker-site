export const metadata = {
  title: "Wedding Shuttle Boston | Guest Transportation & Charter Buses",
  description:
    "Wedding shuttle transportation in Boston for guest movement between hotels, ceremony and reception using minibuses, charter buses and Sprinter vans.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-semibold mb-6">
        Wedding Shuttle Transportation in Boston
      </h1>

      <p className="text-lg text-neutral-300 mb-6">
        Wedding transportation is about timing, coordination and guest
        experience. BlackTier Executives provides structured wedding shuttle
        services across Boston for smooth movement between hotels, ceremony
        venues and receptions.
      </p>

      <p className="text-neutral-400 mb-10">
        Instead of relying on individual cars, wedding shuttles ensure guests
        arrive together, on time and without confusion.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Wedding transportation coverage
      </h2>

      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-10">
        <li>Hotel to ceremony shuttle routes</li>
        <li>Ceremony to reception transport</li>
        <li>Guest return transportation</li>
        <li>Airport pickups for out-of-town guests</li>
        <li>Large group coordination</li>
      </ul>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h3 className="text-xl font-semibold mb-3">
          Planning a wedding shuttle?
        </h3>

        <p className="text-neutral-300 mb-6">
          Share guest count, venue locations and schedule. We’ll recommend the
          best transportation setup.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a href="/contact" className="bg-[#d7aa60] text-black px-6 py-3 rounded-lg">
            Request Wedding Quote
          </a>

          <Link href="/event-bus-rental-boston" className="underline">
            Event Bus Rental
          </Link>
        </div>
      </div>
      <div className="mt-8 rounded-2xl border border-neutral-800/70 bg-neutral-950/40 p-8">
  <h3 className="text-2xl font-semibold">
    Related transportation services
  </h3>

  <p className="mt-3 text-neutral-300">
    Explore related airport and group transportation options across Boston.
  </p>

  <div className="mt-6 flex flex-wrap gap-3">
    <Link
      href="/boston-charter-bus"
      className="inline-flex items-center justify-center rounded-xl border border-neutral-700/80 bg-neutral-950/40 px-4 py-2 text-sm font-medium text-neutral-100 hover:border-neutral-500"
    >
      Boston Charter Bus
    </Link>

    <Link
      href="/boston-corporate-shuttle"
      className="inline-flex items-center justify-center rounded-xl border border-neutral-700/80 bg-neutral-950/40 px-4 py-2 text-sm font-medium text-neutral-100 hover:border-neutral-500"
    >
      Boston Corporate Shuttle
    </Link>

    <Link
      href="/boston-minibus-rental"
      className="inline-flex items-center justify-center rounded-xl border border-neutral-700/80 bg-neutral-950/40 px-4 py-2 text-sm font-medium text-neutral-100 hover:border-neutral-500"
    >
      Boston Minibus Rental
    </Link>

    <Link
      href="/motorcoach-rental-boston"
      className="inline-flex items-center justify-center rounded-xl border border-neutral-700/80 bg-neutral-950/40 px-4 py-2 text-sm font-medium text-neutral-100 hover:border-neutral-500"
    >
      Motorcoach Rental Boston
    </Link>

    <Link
      href="/airport-shuttle-boston"
      className="inline-flex items-center justify-center rounded-xl border border-neutral-700/80 bg-neutral-950/40 px-4 py-2 text-sm font-medium text-neutral-100 hover:border-neutral-500"
    >
      Airport Shuttle Boston
    </Link>
  </div>
</div>
    </main>
  );
}