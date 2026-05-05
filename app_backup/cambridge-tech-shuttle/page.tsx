import Link from "next/link";

export const metadata = {
  title: "Cambridge Tech Shuttle | Corporate Group Transportation",
  description:
    "Premium tech shuttle service in Cambridge for office transportation, employee commuting, airport transfers, and conference group travel.",
};

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold">
          Cambridge Tech Shuttle Service
        </h1>

        <p className="mt-6 text-neutral-300 leading-relaxed">
          BlackTier Executives provides premium shuttle transportation in
          Cambridge for technology companies, research teams, conference groups,
          and business travelers. Our service is built for structured employee
          mobility, airport transfers, and group transportation with executive
          comfort and professional coordination.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Built for Cambridge tech and research teams
        </h2>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Cambridge is one of the strongest business corridors in Massachusetts,
          with a high concentration of technology firms, research organizations,
          academic institutions, and growing startups. Shuttle service supports
          employee transportation, client visits, multi-stop executive travel,
          and event logistics without depending on scattered rideshare bookings.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Common shuttle use cases
        </h2>

        <ul className="mt-4 space-y-3 text-neutral-300">
          <li>• Office-to-office employee transportation</li>
          <li>• Logan Airport group pickups for teams and guests</li>
          <li>• Conference and event shuttle coordination</li>
          <li>• Executive roadshow transportation</li>
          <li>• University and research campus movement</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">
          Vehicle options for business groups
        </h2>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Depending on passenger count and route structure, transportation can be
          handled with executive Sprinter vans, minibuses, mini coaches, or
          larger group vehicles. Smaller teams often prefer vans, while recurring
          shuttle service or event movement may require minibuses or coaches.
        </p>

        <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
          <h3 className="text-xl font-semibold">
            Planning a Cambridge shuttle route?
          </h3>

          <p className="mt-3 text-neutral-300">
            Share your headcount, pickup hubs, and timing. We’ll recommend the
            right vehicle and help structure a smooth transportation plan.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/cambridge-corporate-shuttle"
              className="underline underline-offset-4 hover:text-white"
            >
              Cambridge Corporate Shuttle
            </Link>
            <Link
              href="/fleet"
              className="underline underline-offset-4 hover:text-white"
            >
              View Fleet
            </Link>
            <Link
              href="/contact"
              className="underline underline-offset-4 hover:text-white"
            >
              Request Shuttle Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}