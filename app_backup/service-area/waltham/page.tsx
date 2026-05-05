import Link from "next/link";

export const metadata = {
  title: "Waltham, MA Chauffeur & Airport Transfers | Sprinter, Minibus, Motorcoach",
  description:
    "BlackTier Executives provides luxury black car and chauffeur service in Waltham, MA with Logan Airport (BOS) transfers plus group transportation: Sprinter vans, minibuses, motorcoaches, and wedding/event service. Light NYC availability.",
};

export default function WalthamServicePage() {
  return (
    <main className="bg-neutral-950">
      <section className="border-b border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-neutral-100">
              Chauffeur, Airport Transfers & Group Transportation in Waltham, MA
            </h1>
            <p className="mt-4 text-neutral-300">
              BlackTier Executives supports Waltham with premium chauffeur-driven
              black car service, Logan Airport (BOS) transfers, and scalable group
              transportation for corporate travel, conferences, weddings, and events.
              Options include executive sedans and SUVs, Sprinter vans, minibuses,
              and motorcoaches.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <InfoCard
              title="BOS Airport Pickups & Drop-offs"
              body="Reliable Logan transfers with schedule awareness and a polished pickup experience, built for early flights and time-sensitive arrivals."
            />
            <InfoCard
              title="Corporate & Executive Travel"
              body="Discreet transportation for meetings, client travel, and daily schedules. Hourly chauffeur blocks available for multi-stop plans."
            />
            <InfoCard
              title="Group Transportation"
              body="Sprinters, minibuses, and motorcoaches for teams and larger groups are ideal for events, conferences, and coordinated logistics."
            />
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <section className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
              <h2 className="text-2xl font-semibold text-neutral-100">
                Weddings & Events
              </h2>
              <p className="mt-3 text-neutral-300">
                We coordinate transportation plans that match your timeline — from
                VIP black car service to guest shuttles. For larger groups, we
                recommend minibuses or motorcoaches depending on passenger count.
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-neutral-300">
                <li>Guest shuttles (Sprinter / minibus / motorcoach)</li>
                <li>Staging and multi-vehicle coordination</li>
                <li>Event transportation for concerts, sports, and private functions</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
              <h2 className="text-2xl font-semibold text-neutral-100">
                Group Logistics that Scale
              </h2>
              <p className="mt-3 text-neutral-300">
                Waltham is a frequent hub for corporate travel and group movement.
                We support everything from small team transfers to larger shuttles
                for conferences and offsites.
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-neutral-300">
                <li>Sprinter vans for executives and small teams</li>
                <li>Minibuses / mini coaches for medium groups</li>
                <li>Motorcoaches (24–54 passengers) for large groups</li>
              </ul>
            </section>
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