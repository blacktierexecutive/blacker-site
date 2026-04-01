export const metadata = {
  title: "Boston Airport Group Shuttle | Logan Group Transportation",
  description:
    "Group shuttle transportation to Logan Airport with buses, minibuses and Sprinter vans for corporate teams, events and private group travel.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-semibold mb-6">
        Boston Airport Group Shuttle
      </h1>

      <p className="text-lg text-neutral-300 mb-6">
        Group shuttle transportation to Logan Airport ensures smooth,
        coordinated travel for corporate teams, events and private groups.
      </p>

      <p className="text-neutral-400 mb-10">
        Instead of multiple vehicles, a structured group shuttle simplifies
        timing, reduces cost per passenger and improves logistics.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Airport group shuttle use cases
      </h2>

      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-10">
        <li>Corporate team airport transfers</li>
        <li>Conference attendee arrivals</li>
        <li>Wedding guest airport pickups</li>
        <li>Family and private group travel</li>
        <li>Hotel to airport shuttle programs</li>
      </ul>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h3 className="text-xl font-semibold mb-3">
          Need airport group transportation?
        </h3>

        <p className="text-neutral-300 mb-6">
          Share group size, flight timing and destination. We’ll recommend the
          right vehicle.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a href="/contact" className="bg-[#d7aa60] text-black px-6 py-3 rounded-lg">
            Request Airport Quote
          </a>

          <Link href="/airport-shuttle-boston" className="underline">
            Airport Shuttle Boston
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