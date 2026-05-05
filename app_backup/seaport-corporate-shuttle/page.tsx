import Link from "next/link";

export const metadata = {
  title: "Seaport Corporate Shuttle | Boston Event & Executive Transportation",
  description:
    "Premium corporate shuttle service in Boston Seaport for hotels, conventions, office transportation, airport transfers, and executive group travel.",
};

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold">
          Seaport Corporate Shuttle Service
        </h1>

        <p className="mt-6 text-neutral-300 leading-relaxed">
          BlackTier Executives provides premium corporate shuttle transportation
          in Boston Seaport for executive teams, hotel groups, conference
          attendees, airport travelers, and office transportation. Our service is
          built for high-volume business zones where timing, presentation, and
          coordinated movement matter.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Seaport is a high-demand corporate transportation zone
        </h2>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          The Seaport district combines hotels, offices, events, conference
          venues, and executive travel demand in one dense corridor. Corporate
          shuttle service helps businesses and planners move attendees, clients,
          and staff efficiently between airports, hotels, offices, and event
          spaces.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Best use cases for Seaport shuttle service
        </h2>

        <ul className="mt-4 space-y-3 text-neutral-300">
          <li>• Hotel-to-convention transportation</li>
          <li>• Airport transfers for conference groups</li>
          <li>• Executive and client movement</li>
          <li>• Office shuttle support</li>
          <li>• Event and private business transportation</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">
          Vehicle options for Seaport groups
        </h2>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Transportation can be structured with executive vans, Sprinter vans,
          minibuses, mini coaches, or larger coaches depending on guest count,
          luggage needs, and event schedule. This makes Seaport shuttle service
          flexible for both small executive teams and larger conference groups.
        </p>

        <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
          <h3 className="text-xl font-semibold">
            Need Seaport corporate transportation?
          </h3>

          <p className="mt-3 text-neutral-300">
            Tell us your hotel, venue, office, or airport routing and we’ll help
            structure the right shuttle plan.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/boston-corporate-shuttle"
              className="underline underline-offset-4 hover:text-white"
            >
              Boston Corporate Shuttle
            </Link>
            <Link
              href="/boston-charter-bus"
              className="underline underline-offset-4 hover:text-white"
            >
              Boston Charter Bus
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