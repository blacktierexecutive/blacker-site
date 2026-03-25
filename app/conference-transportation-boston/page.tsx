export const metadata = {
  title: "Conference Transportation Boston | Corporate Group Shuttle Services",
  description:
    "Conference transportation in Boston with charter buses, minibuses and executive shuttles for corporate events, conventions and business travel programs.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-semibold mb-6">
        Conference Transportation in Boston
      </h1>

      <p className="text-lg text-neutral-300 mb-6">
        Corporate conference transportation requires structured routing,
        timing precision and professional presentation. BlackTier Executives
        supports conference organizers with scalable transportation programs.
      </p>

      <p className="text-neutral-400 mb-10">
        From executive airport pickups to full-scale shuttle deployment,
        group transportation improves attendee experience and event flow.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Conference transportation planning includes
      </h2>

      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-10">
        <li>Airport arrival group coordination</li>
        <li>Hotel-to-venue shuttle loops</li>
        <li>Executive and VIP movement</li>
        <li>Evening networking event transportation</li>
        <li>Multi-day corporate mobility planning</li>
      </ul>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h3 className="text-xl font-semibold mb-3">
          Organizing a Boston conference?
        </h3>

        <p className="text-neutral-300 mb-6">
          Provide venue details, attendee estimates and schedule.
          We’ll design a conference transportation strategy.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-[#d7aa60] text-black px-6 py-3 rounded-lg font-medium"
          >
            Request Conference Quote
          </a>

          <Link href="/boston-convention-shuttle" className="underline">
            Convention Shuttle
          </Link>
        </div>
      </div>
    </main>
  );
}