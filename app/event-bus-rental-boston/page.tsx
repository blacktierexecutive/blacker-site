export const metadata = {
  title: "Event Bus Rental Boston | Group Transportation for Private Events",
  description:
    "Event bus rental in Boston for weddings, concerts, sports, private parties, school functions, and large group transportation across Greater Boston.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-semibold mb-6">
        Event Bus Rental in Boston
      </h1>

      <p className="text-lg text-neutral-300 mb-6">
        BlackTier Executives provides premium event bus rental in Boston for
        weddings, concerts, sporting events, private celebrations, school
        functions, and large group travel. Our transportation solutions are
        built to move guests safely, comfortably, and on schedule.
      </p>

      <p className="text-neutral-400 mb-10">
        Event transportation works best when groups stay together. Instead of
        managing multiple cars, dedicated buses and group vehicles simplify
        timing, parking, and coordination for hosts and planners.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Common event transportation bookings
      </h2>

      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-10">
        <li>Wedding guest shuttle transportation</li>
        <li>Concert and sports event group travel</li>
        <li>Private parties and milestone celebrations</li>
        <li>School dances, functions, and student transportation</li>
        <li>Corporate dinners, galas, and off-site events</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Vehicle options for event transportation
      </h2>

      <p className="text-neutral-300 mb-10">
        We support event transportation with Sprinter vans, minibuses, mini
        coaches, and motorcoaches depending on guest count, route structure, and
        venue logistics.
      </p>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h3 className="text-xl font-semibold mb-3">
          Need event transportation in Boston?
        </h3>
        <p className="text-neutral-300 mb-6">
          Send your event date, guest count, venue details, and timing. We’ll
          recommend the best transportation setup.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/contact"
            className="bg-[#d7aa60] text-black px-6 py-3 rounded-lg font-medium"
          >
            Request Event Quote
          </a>

          <Link
            href="/boston-charter-bus"
            className="underline underline-offset-4 hover:text-white"
          >
            Boston Charter Bus
          </Link>

          <Link
            href="/boston-minibus-rental"
            className="underline underline-offset-4 hover:text-white"
          >
            Boston Minibus Rental
          </Link>
        </div>
      </div>
    </main>
  );
}