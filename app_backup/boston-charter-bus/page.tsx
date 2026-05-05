export const metadata = {
  title: "Boston Charter Bus Rental | Group Transportation & Coach Service",
  description:
    "Premium charter bus rental in Boston for corporate events, airport transfers, weddings, school trips, and private group transportation. Chauffeur-driven minibuses, mini coaches, and motorcoaches across Boston and New England.",
};

import Link from "next/link";

export default function BostonCharterBusPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="border-b border-neutral-900/80">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <p className="inline-flex items-center rounded-full border border-neutral-700/80 bg-black/30 px-4 py-1 text-xs text-neutral-200">
            BlackTier Executives · Group Transportation
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Boston Charter Bus Rental
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
            BlackTier Executives provides premium charter bus rental in Boston for
            corporate groups, airport transfers, weddings, school trips, sports
            teams, and private events. Our group transportation solutions include
            minibuses, mini coaches, and motorcoaches designed for comfortable,
            coordinated travel across Boston and New England.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold text-neutral-950 hover:opacity-95"
              style={{
                background:
                  "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
              }}
            >
              Request Charter Bus Quote
            </Link>

            <a
              href="mailto:blacktierexecutive@gmail.com?subject=Boston%20Charter%20Bus%20Quote"
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-8 py-4 font-semibold hover:border-neutral-500"
            >
              Email for Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-20 space-y-14">
          <ContentBlock
            title="Group transportation in Boston"
            text="Charter bus transportation is one of the most efficient ways to move groups across Boston. Instead of coordinating multiple vehicles, a single professionally managed charter bus keeps your schedule organized, reduces delays, and gives passengers a more comfortable travel experience."
          />

          <ContentBlock
            title="Boston charter buses for events and corporate travel"
            text="Businesses, event planners, universities, and private groups often rely on charter bus transportation for conferences, employee shuttles, executive events, and multi-stop itineraries. A dedicated group vehicle creates a smoother logistics flow for large parties traveling together."
          />

          <ContentBlock
            title="Airport transfers for large groups"
            text="Charter buses and larger group vehicles are ideal for Logan Airport pickups and drop-offs when multiple passengers and luggage are involved. This is especially useful for business delegations, wedding guests, sports teams, and school groups arriving at or departing from Boston Logan Airport."
          />

          <ContentBlock
            title="Vehicle options for charter bus service"
            text="Depending on group size and itinerary, transportation can be provided with minibuses, mini coaches, motorcoaches, or larger executive shuttle vehicles. Smaller groups may prefer a Sprinter van or minibus, while larger parties often benefit from a full motorcoach for comfort and efficiency."
          />

          <ContentBlock
            title="Popular charter bus use cases in Boston"
            text="Boston charter bus rentals are commonly booked for corporate shuttles, airport transfers, university transportation, sports events, weddings, city-to-city travel, family events, and private group transportation. Routes frequently include Boston, Cambridge, Waltham, Newton, Brookline, and surrounding areas."
          />

          <ContentBlock
            title="Why private charter transportation is worth it"
            text="Private charter transportation delivers more control, better timing, and a stronger overall experience than trying to manage large groups with rideshare or scattered car service bookings. For organizations and event planners, reliable group transportation reduces chaos and improves execution."
          />

          {/* Internal links / SEO support */}
          <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
            <h2 className="text-2xl font-semibold">Related transportation pages</h2>
            <p className="mt-4 text-neutral-300">
              Explore related services for Boston group travel and airport
              transportation.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
              <Link
                href="/sprinter-van-boston"
                className="underline underline-offset-4 hover:text-white"
              >
                Sprinter Van Boston
              </Link>
              <Link
                href="/minibus-rental-boston"
                className="underline underline-offset-4 hover:text-white"
              >
                Minibus Rental Boston
              </Link>
              <Link
                href="/motorcoach-rental-boston"
                className="underline underline-offset-4 hover:text-white"
              >
                Motorcoach Rental Boston
              </Link>
              <Link
                href="/boston-airport-car-service"
                className="underline underline-offset-4 hover:text-white"
              >
                Boston Airport Car Service
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
            <h2 className="text-2xl font-semibold">
              Need a charter bus in Boston?
            </h2>

            <p className="mt-4 max-w-3xl text-neutral-300">
              Request a quote for charter bus transportation, corporate group
              travel, airport shuttles, weddings, and large event transportation
              across Boston and New England.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold text-neutral-950 hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                }}
              >
                Get Charter Bus Quote
              </Link>

              <Link
                href="/service-area"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-8 py-4 font-semibold hover:border-neutral-500"
              >
                View Service Areas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContentBlock({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-4 leading-relaxed text-neutral-300">{text}</p>
    </div>
  );
}