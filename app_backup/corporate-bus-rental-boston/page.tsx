export const metadata = {
  title: "Corporate Bus Rental Boston | Business Group Transportation",
  description:
    "Corporate bus rental in Boston for employee movement, conferences, executive events, airport transfers, and company transportation across Greater Boston.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-semibold mb-6">
        Corporate Bus Rental in Boston
      </h1>

      <p className="text-lg text-neutral-300 mb-6">
        BlackTier Executives provides corporate bus rental in Boston for
        businesses that need structured group transportation for employees,
        conferences, executive events, airport transfers, and recurring company
        travel.
      </p>

      <p className="text-neutral-400 mb-10">
        Corporate transportation is more than getting from one point to another.
        It is about timing, presentation, passenger comfort, and operational
        control. Group buses and shuttles help companies move teams efficiently
        without relying on scattered individual rides.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Corporate transportation use cases
      </h2>

      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-10">
        <li>Employee movement between offices and campuses</li>
        <li>Conference and convention group transportation</li>
        <li>Airport pickups for visiting teams and executives</li>
        <li>Hotel-to-office shuttle coordination</li>
        <li>Company outings, training days, and internal events</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Bus options for business groups
      </h2>

      <p className="text-neutral-300 mb-10">
        Smaller business groups may use executive vans or minibuses, while
        larger corporate programs often require mini coaches or motorcoaches for
        better capacity and route efficiency.
      </p>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h3 className="text-xl font-semibold mb-3">
          Need a corporate bus quote?
        </h3>
        <p className="text-neutral-300 mb-6">
          Share your route, schedule, and passenger count. We’ll recommend the
          right business transportation setup.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/contact"
            className="bg-[#d7aa60] text-black px-6 py-3 rounded-lg font-medium"
          >
            Request Corporate Bus Quote
          </a>

          <Link
            href="/boston-corporate-shuttle"
            className="underline underline-offset-4 hover:text-white"
          >
            Boston Corporate Shuttle
          </Link>

          <Link
            href="/motorcoach-rental-boston"
            className="underline underline-offset-4 hover:text-white"
          >
            Motorcoach Rental Boston
          </Link>
        </div>
      </div>
    </main>
  );
}