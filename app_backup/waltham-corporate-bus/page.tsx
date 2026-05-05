import Link from "next/link";

export const metadata = {
  title: "Waltham Corporate Bus Service | Office & Employee Transportation",
  description:
    "Corporate bus service in Waltham for office parks, employee transportation, airport transfers, executive groups, and company events.",
};

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold">
          Waltham Corporate Bus Service
        </h1>

        <p className="mt-6 text-neutral-300 leading-relaxed">
          BlackTier Executives provides premium corporate bus transportation in
          Waltham for office parks, consulting firms, technology companies, and
          growing teams that need structured group mobility. Our service supports
          employee movement, airport group transfers, executive events, and
          corporate transportation across Greater Boston.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Corporate transportation in the Waltham business corridor
        </h2>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Waltham is one of the strongest commercial transportation zones west of
          Boston. Businesses in the Route 128 corridor frequently need larger
          group vehicles for conferences, visitor transportation, internal
          events, airport pickups, and recurring team movement.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Common Waltham corporate bus bookings
        </h2>

        <ul className="mt-4 space-y-3 text-neutral-300">
          <li>• Office park shuttle transportation</li>
          <li>• Logan Airport transfers for teams</li>
          <li>• Corporate event and retreat transportation</li>
          <li>• Hotel-to-office group movement</li>
          <li>• Executive guest transportation</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">
          Bus and shuttle fleet options
        </h2>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Depending on group size and route complexity, transportation can be
          handled with minibuses, mini coaches, motorcoaches, or executive vans.
          Smaller routes may use vans or minibuses, while larger recurring
          corporate movement often benefits from coach-style transportation.
        </p>

        <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
          <h3 className="text-xl font-semibold">
            Need Waltham corporate transportation?
          </h3>

          <p className="mt-3 text-neutral-300">
            Send your route details, passenger count, and timing. We’ll recommend
            the right bus or shuttle format for your operation.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/waltham-employee-shuttle"
              className="underline underline-offset-4 hover:text-white"
            >
              Waltham Employee Shuttle
            </Link>
            <Link
              href="/waltham-charter-bus"
              className="underline underline-offset-4 hover:text-white"
            >
              Waltham Charter Bus
            </Link>
            <Link
              href="/contact"
              className="underline underline-offset-4 hover:text-white"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}