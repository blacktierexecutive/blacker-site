export const metadata = {
  title: "Seaport Charter Bus | Group Transportation Boston Seaport District",
  description:
    "Charter bus transportation in Boston Seaport District for corporate events, conventions, airport transfers and group travel with minibuses and motorcoaches.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-semibold mb-6">
        Seaport Charter Bus Transportation
      </h1>

      <p className="text-lg text-neutral-300 mb-6">
        The Boston Seaport District is one of the busiest corporate and
        convention hubs in New England. BlackTier Executives provides
        charter bus transportation for corporate teams, conferences,
        private events and airport group travel.
      </p>

      <p className="text-neutral-400 mb-10">
        Group transportation in Seaport helps reduce congestion,
        simplify logistics and improve timing for high-profile events.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Seaport transportation demand includes
      </h2>

      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-10">
        <li>Convention center group transportation</li>
        <li>Corporate office employee shuttles</li>
        <li>Hotel guest transportation programs</li>
        <li>Airport transfers for large groups</li>
        <li>Private event and gala transportation</li>
      </ul>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h3 className="text-xl font-semibold mb-3">
          Need Seaport group transportation?
        </h3>

        <p className="text-neutral-300 mb-6">
          Share event venue, schedule and passenger count.
          We’ll recommend the best charter solution.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-[#d7aa60] text-black px-6 py-3 rounded-lg font-medium"
          >
            Request Seaport Quote
          </a>

          <Link href="/boston-charter-bus" className="underline">
            Boston Charter Bus
          </Link>
        </div>
      </div>
    </main>
  );
}