export const metadata = {
  title: "Logan Airport Group Transportation | Buses, Minibuses & Sprinter Vans",
  description:
    "Group transportation to and from Logan Airport with charter buses, minibuses, mini coaches, and Sprinter vans for corporate teams, events, and private groups.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-semibold mb-6">
        Logan Airport Group Transportation
      </h1>

      <p className="text-lg text-neutral-300 mb-6">
        BlackTier Executives provides premium group transportation to and from
        Logan Airport for corporate teams, conference attendees, wedding guests,
        sports groups, families, and private events. Our fleet includes
        Sprinter vans, minibuses, mini coaches, and motorcoaches designed for
        smooth airport logistics and coordinated arrivals.
      </p>

      <p className="text-neutral-400 mb-10">
        Instead of splitting groups into multiple vehicles, a single structured
        airport transportation plan improves timing, reduces confusion, and
        creates a cleaner travel experience across Boston and Greater New
        England.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Ideal for airport group travel
      </h2>

      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-10">
        <li>Corporate teams arriving for meetings or conferences</li>
        <li>Wedding guests traveling together from the airport</li>
        <li>University and school group transportation</li>
        <li>Sports teams and event groups with luggage</li>
        <li>Private family or VIP airport transfers</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Vehicle options for Logan Airport transportation
      </h2>

      <p className="text-neutral-300 mb-10">
        Smaller executive groups may prefer a Sprinter van, while larger teams
        often benefit from minibuses, mini coaches, or motorcoaches depending on
        headcount, baggage volume, and route complexity.
      </p>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h3 className="text-xl font-semibold mb-3">
          Need a Logan Airport group transportation quote?
        </h3>
        <p className="text-neutral-300 mb-6">
          Share your group size, terminal, arrival time, and destination. We’ll
          recommend the right vehicle and next steps.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/contact"
            className="bg-[#d7aa60] text-black px-6 py-3 rounded-lg font-medium"
          >
            Request Group Quote
          </a>

          <Link
            href="/airport-shuttle-boston"
            className="underline underline-offset-4 hover:text-white"
          >
            Airport Shuttle Boston
          </Link>

          <Link
            href="/boston-airport-car-service"
            className="underline underline-offset-4 hover:text-white"
          >
            Boston Airport Car Service
          </Link>
        </div>
      </div>
    </main>
  );
}