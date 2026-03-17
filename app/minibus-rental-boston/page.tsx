export const metadata = {
  title: "Minibus Rental Boston | Shuttle & Group Transportation Service",
  description:
    "Minibus rental service in Boston for corporate shuttles, airport transfers, weddings, and private group transportation across New England.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-neutral-950 px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">
        Minibus Rental in Boston
      </h1>

      <p className="text-neutral-300 mb-6">
        Our Boston minibus transportation service is built for medium-size groups
        needing reliable, comfortable, and coordinated travel. Ideal for corporate
        outings, school transportation, airport shuttles, and event logistics.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Corporate Shuttle & Team Travel
      </h2>

      <p className="text-neutral-300">
        Move your team efficiently between hotels, offices, conference venues,
        and airports. Our minibuses provide professional chauffeur service with
        punctual scheduling and clean, modern interiors.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Wedding & Event Guest Transportation
      </h2>

      <p className="text-neutral-300">
        Simplify event logistics by transporting guests together. Our minibus
        service helps maintain timelines and reduces parking stress at venues.
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
          Reserve Minibus
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