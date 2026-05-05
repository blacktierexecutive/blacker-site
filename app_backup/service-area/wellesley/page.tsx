import Link from "next/link";

export const metadata = {
  title: "Wellesley, MA Chauffeur & Black Car Service | Airport + Group Transportation",
  description:
    "BlackTier Executives provides premium chauffeur and black car service in Wellesley, MA including Logan Airport (BOS) transfers, Sprinter vans, minibuses, motorcoaches, and wedding/event transportation.",
};

export default function WellesleyServicePage() {
  return (
    <main className="bg-neutral-950">
      <section className="border-b border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-neutral-100">
              Chauffeur, Black Car & Group Transportation in Wellesley, MA
            </h1>
            <p className="mt-4 text-neutral-300">
              BlackTier Executives serves Wellesley with premium chauffeur-driven
              black car service, Logan Airport (BOS) pickups and drop-offs, and
              group transportation for corporate schedules, weddings, and events.
              Choose from executive sedans and SUVs, Sprinter vans, minibuses,
              and motorcoaches.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <InfoCard
              title="Airport Transfers (Logan BOS)"
              body="Planned pickups and drop-offs with clean vehicles, consistent arrival standards, and coordination that respects flight and schedule changes."
            />
            <InfoCard
              title="Chauffeur & Black Car Service"
              body="Executive sedans and premium SUVs for airport runs, dinners, meetings, and private travel — polished, discreet, and punctual."
            />
            <InfoCard
              title="Group Transportation"
              body="Sprinter vans, minibuses, and motorcoaches for teams and groups — ideal for corporate travel, events, and coordinated multi-vehicle plans."
            />
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <section className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
              <h2 className="text-2xl font-semibold text-neutral-100">
                Weddings & Events in Wellesley
              </h2>
              <p className="mt-3 text-neutral-300">
                For weddings and special events, we focus on timing, staging, and
                clean arrivals. From guest shuttles to VIP transportation, we’ll
                coordinate a plan that fits your venue timeline and group size.
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-neutral-300">
                <li>Guest transportation (Sprinter, minibus, motorcoach)</li>
                <li>VIP black car service for families and principals</li>
                <li>Multi-stop itineraries and coordinated staging</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
              <h2 className="text-2xl font-semibold text-neutral-100">
                Corporate & Campus-Adjacent Schedules
              </h2>
              <p className="mt-3 text-neutral-300">
                Wellesley area travel often demands precision  early flights,
                meetings, and tight transitions. We support executive travel as
                well as group moves for teams, visitors, and events.
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-neutral-300">
                <li>Executive airport runs and point-to-point rides</li>
                <li>Hourly chauffeur blocks for meetings and multi-stops</li>
                <li>Group transportation for conferences and offsites</li>
              </ul>
            </section>
          </div>

          <div className="mt-12 rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
            <h2 className="text-2xl font-semibold text-neutral-100">
              NYC Transfers
            </h2>
            <p className="mt-3 text-neutral-300">
              NYC availability is offered selectively based on schedule and
              logistics. For city-to-city travel or multi-day plans, request a
              quote and we’ll confirm options.
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
            staging, and venue/airport fees — request a quote for accuracy.
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