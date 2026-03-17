export const metadata = {
  title: "Charter Bus Boston | Private Bus Rental for Events & Groups",
  description:
    "Charter bus rental in Boston for weddings, corporate travel, airport transfers, and private group transportation across Massachusetts and New England.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-neutral-950 px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">
        Charter Bus Rental in Boston
      </h1>

      <p className="text-neutral-300 mb-6">
        Our Boston charter bus service is designed for organizations, event planners,
        and large families needing safe and coordinated group transportation.
        BlackTier Executives focuses on reliability, comfort, and professional execution.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Wedding Guest Transportation
      </h2>

      <p className="text-neutral-300">
        Charter buses simplify wedding logistics by ensuring guests arrive together
        and on time. We coordinate routes, timing, and staging with planners and venues.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Airport & Long Distance Group Travel
      </h2>

      <p className="text-neutral-300">
        Ideal for airport transfers and regional travel across New England.
        Our charter buses offer comfort for extended journeys and group itineraries.
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
          Book Charter Bus
        </Link>

        <a
          href="mailto:blacktierexecutive@gmail.com"
          className="border border-neutral-600 px-6 py-3 rounded-xl"
        >
          Get Quote
        </a>
      </div>
    </main>
  );
}