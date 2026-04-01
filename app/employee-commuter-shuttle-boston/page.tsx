export const metadata = {
  title: "Employee Shuttle Boston | Corporate Commuter Transportation",
  description:
    "Employee commuter shuttle services in Boston for corporate offices, tech companies and business parks using buses and shuttle vehicles.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-semibold mb-6">
        Employee Commuter Shuttle in Boston
      </h1>

      <p className="text-lg text-neutral-300 mb-6">
        Employee shuttle programs help companies move teams efficiently between
        offices, transit hubs and parking locations. BlackTier Executives
        provides structured commuter transportation across Boston.
      </p>

      <p className="text-neutral-400 mb-10">
        Shuttle systems improve punctuality, reduce congestion and create a
        better employee experience.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Corporate shuttle solutions
      </h2>

      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-10">
        <li>Daily commuter shuttle routes</li>
        <li>Office-to-transit connections</li>
        <li>Corporate campus transportation</li>
        <li>Tech company employee movement</li>
        <li>Flexible routing programs</li>
      </ul>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h3 className="text-xl font-semibold mb-3">
          Build a commuter shuttle program
        </h3>

        <p className="text-neutral-300 mb-6">
          Share employee volume, pickup zones and timing. We’ll design your
          shuttle structure.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a href="/contact" className="bg-[#d7aa60] text-black px-6 py-3 rounded-lg">
            Request Shuttle Quote
          </a>

          <Link href="/boston-corporate-shuttle" className="underline">
            Corporate Shuttle
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