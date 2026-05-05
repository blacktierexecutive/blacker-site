export const metadata = {
  title: "Motorcoach Rental Boston | Charter Coach Bus Transportation",
  description:
    "Luxury motorcoach rental in Boston for large group transportation, corporate travel, tours, and long-distance trips across New England.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-neutral-950 px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">
        Motorcoach Rental in Boston
      </h1>

      <p className="text-neutral-300 mb-6">
        BlackTier Executives provides premium motorcoach transportation for
        large groups traveling within Boston and throughout New England.
        Our charter buses are designed for comfort, safety, and professional coordination.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Large Group & Tour Transportation
      </h2>

      <p className="text-neutral-300">
        Ideal for corporate retreats, school trips, sports teams, and long-distance
        travel. Our motorcoach fleet ensures smooth highway travel with experienced drivers.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Conference & Convention Transport
      </h2>

      <p className="text-neutral-300">
        Move attendees efficiently between hotels, airports, and convention centers.
        We help event planners execute transportation logistics without stress.
      </p>

      <div className="mt-12 flex gap-4">
        <Link
          href="/book"
          className="px-6 py-3 rounded-xl font-semibold text-black"
          style={{
            background:
              "linear-gradient(135deg, rgb(var(--bt-gold)), white)",
          }}
        >
          Reserve Coach
        </Link>

        <a
          href="mailto:blacktierexecutive@gmail.com"
          className="border border-neutral-600 px-6 py-3 rounded-xl"
        >
          Request Pricing
        </a>
      </div>
    </main>
  );
}