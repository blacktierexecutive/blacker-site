import Link from "next/link";

export const metadata = {
  title: "Newton, MA Black Car & Chauffeur Service | Logan Airport + Group Transportation",
  description:
    "BlackTier Executives provides premium black car and chauffeur service in Newton, MA including Logan Airport (BOS) transfers, Sprinter vans, minibuses, motorcoaches, and wedding/event transportation.",
};

export default function NewtonServicePage() {
  return (
    <main className="bg-neutral-950">
      <section className="border-b border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-neutral-100">
              Black Car, Chauffeur & Group Transportation in Newton, MA
            </h1>
            <p className="mt-4 text-neutral-300">
              BlackTier Executives provides luxury chauffeur-driven black car service
              in Newton with reliable Logan Airport (BOS) transfers and group transportation
              options for corporate travel, weddings, and events. From executive sedans and
              premium SUVs to Sprinter vans, minibuses, and motorcoaches, we match the right
              vehicle to the schedule. 
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <InfoCard
              title="Airport Transfers (BOS)"
              body="Scheduled pickups and drop-offs to Logan Airport with clean vehicles and consistent standards are ideal for early departures and business travel."
            />
            <InfoCard
              title="Executive Chauffeur Service"
              body="Discreet transportation for meetings, dinners, and point-to-point travel across Newton, Boston, and New England."
            />
            <InfoCard
              title="Group Transportation"
              body="Sprinter vans, minibuses, and motorcoaches for teams and larger groups are perfect for conferences, group airport runs, and events."
            />
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <section className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
              <h2 className="text-2xl font-semibold text-neutral-100">
                Weddings & Events in Newton
              </h2>
              <p className="mt-3 text-neutral-300">
                Weddings and events require coordination, timing, and the right staging plan.
                We support everything from VIP black car arrivals to guest shuttles and larger
                group movements.
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-neutral-300">
                <li>VIP black car service for principals and families</li>
                <li>Guest shuttles (Sprinter / minibus / motorcoach)</li>
                <li>Event transportation for concerts, sports, and private functions</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
              <h2 className="text-2xl font-semibold text-neutral-100">
                Corporate & Group Schedules
              </h2>
              <p className="mt-3 text-neutral-300">
                For corporate travel, we support hourly chauffeur blocks, multi-stop itineraries,
                and coordinated group transportation. For 8+ passengers, request a quote to
                account for timing and fees.
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-neutral-300">
                <li>Hourly chauffeur service for meetings and multi-stops</li>
                <li>Conference transportation and corporate shuttles</li>
                <li>Group airport transfers for teams</li>
              </ul>
            </section>
          </div>

          <div className="mt-12 rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
            <h2 className="text-2xl font-semibold text-neutral-100">
              New York 
            </h2>
            <p className="mt-3 text-neutral-300">
              NYC transfers are offered selectively depending on scheduling and logistics.
              Request a quote for city-to-city travel and we’ll confirm availability.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-8 py-4 font-semibold text-neutral-100 hover:border-neutral-500"
            >
              Explore Services
            </Link>
            <Link
              href="/fleet"
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-8 py-4 font-semibold text-neutral-100 hover:border-neutral-500"
            >
              View Fleet
            </Link>
            <Link
              href="/service-area"
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-8 py-4 font-semibold text-neutral-100 hover:border-neutral-500"
            >
              All Service Areas
            </Link>
          </div>

          <p className="mt-10 text-xs text-neutral-500">
            Note: For larger vehicles (8+ passengers), rates can vary by schedule,
            staging, and event/airport fees — request a quote for accuracy.
          </p>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
      <h2 className="text-xl font-semibold text-neutral-100">{title}</h2>
      <p className="mt-3 text-neutral-300">{body}</p>
    </div>
  );
}