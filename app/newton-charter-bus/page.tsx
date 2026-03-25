export const metadata = {
  title: "Newton Charter Bus | Group Transportation & Private Bus Rental",
  description:
    "Charter bus transportation in Newton for schools, private events, weddings, airport transfers, and group travel across Greater Boston.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-semibold mb-6">
        Newton Charter Bus Transportation
      </h1>

      <p className="text-lg text-neutral-300 mb-6">
        BlackTier Executives provides premium charter bus transportation in
        Newton for airport groups, private schools, weddings, family events, and
        business travel. Our group transportation service helps simplify timing,
        improve comfort, and keep larger parties moving together efficiently.
      </p>

      <p className="text-neutral-400 mb-10">
        Newton is a strong market for high-quality private transportation due to
        its residential demand, private institutions, business travel patterns,
        and proximity to Boston.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Popular charter bus use cases in Newton
      </h2>

      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-10">
        <li>School and student transportation</li>
        <li>Wedding and guest shuttle movement</li>
        <li>Airport transfers for larger groups</li>
        <li>Private family events and celebrations</li>
        <li>Corporate and executive group transportation</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Vehicle options for Newton groups
      </h2>

      <p className="text-neutral-300 mb-10">
        Depending on group size and itinerary, transportation can be handled
        with Sprinter vans, minibuses, mini coaches, or motorcoaches.
      </p>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h3 className="text-xl font-semibold mb-3">
          Need a Newton charter quote?
        </h3>
        <p className="text-neutral-300 mb-6">
          Send your pickup, destination, headcount, and timing. We’ll recommend
          the best group vehicle for your route.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/contact"
            className="bg-[#d7aa60] text-black px-6 py-3 rounded-lg font-medium"
          >
            Request Newton Quote
          </a>

          <Link
            href="/service-area/newton"
            className="underline underline-offset-4 hover:text-white"
          >
            Newton Service Area
          </Link>

          <Link
            href="/boston-charter-bus"
            className="underline underline-offset-4 hover:text-white"
          >
            Boston Charter Bus
          </Link>
        </div>
      </div>
    </main>
  );
}