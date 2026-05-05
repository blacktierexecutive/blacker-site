export const metadata = {
  title: "Boston Convention Shuttle | Charter Bus & Group Transportation",
  description:
    "Convention shuttle transportation in Boston with charter buses, minibuses, Sprinter vans and motorcoaches for corporate events, expos, trade shows and conferences.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-semibold mb-6">
        Boston Convention Shuttle Transportation
      </h1>

      <p className="text-lg text-neutral-300 mb-6">
        BlackTier Executives provides structured convention shuttle
        transportation across Boston for trade shows, conferences,
        corporate exhibitions and large-scale business gatherings.
      </p>

      <p className="text-neutral-400 mb-10">
        Coordinated group transportation improves attendee flow,
        reduces venue congestion and enhances executive experience.
        Shuttle programs can be structured between hotels, Logan Airport,
        convention centers and corporate offices.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Convention transportation solutions
      </h2>

      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-10">
        <li>Hotel-to-convention center shuttle loops</li>
        <li>Airport arrivals group coordination</li>
        <li>VIP executive transportation programs</li>
        <li>Large delegate movement scheduling</li>
        <li>Evening event and networking transport</li>
      </ul>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h3 className="text-xl font-semibold mb-3">
          Planning a Boston convention shuttle?
        </h3>

        <p className="text-neutral-300 mb-6">
          Share dates, venue, hotel list and expected passenger flow.
          We’ll recommend vehicle mix and routing structure.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-[#d7aa60] text-black px-6 py-3 rounded-lg font-medium"
          >
            Request Convention Quote
          </a>

          <Link href="/boston-charter-bus" className="underline">
            Boston Charter Bus
          </Link>

          <Link href="/corporate-bus-rental-boston" className="underline">
            Corporate Bus Rental
          </Link>
        </div>
      </div>
    </main>
  );
}