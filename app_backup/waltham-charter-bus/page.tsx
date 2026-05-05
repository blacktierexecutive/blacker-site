export const metadata = {
  title: "Waltham Charter Bus Rental | Group Transportation & Corporate Travel",
  description:
    "Premium charter bus rental in Waltham for corporate groups, airport transfers, events, and private transportation. Minibuses, coaches, and group travel service.",
};

import Link from "next/link";

export default function WalthamCharterBusPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="border-b border-neutral-900/80">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <p className="inline-flex items-center rounded-full border border-neutral-700/80 bg-black/30 px-4 py-1 text-xs text-neutral-200">
            BlackTier Executives · Group Transportation
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Waltham Charter Bus Rental
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
            BlackTier Executives offers premium charter bus rental in Waltham for
            corporate travel, airport transportation, private events, and large
            group movement. We serve office parks, hotels, event venues, and
            multi-stop itineraries throughout Waltham and Greater Boston.
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
              Request Waltham Bus Quote
            </Link>

            <a
              href="mailto:blacktierexecutive@gmail.com?subject=Waltham%20Charter%20Bus%20Quote"
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-8 py-4 font-semibold hover:border-neutral-500"
            >
              Email for Pricing
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-20 space-y-14">
          <ContentBlock
            title="Group transportation in Waltham"
            text="Waltham is one of the strongest corridors for corporate group transportation in Greater Boston. Charter bus service is often used for employee movement, office events, client transportation, and regional trips involving larger teams."
          />

          <ContentBlock
            title="Corporate shuttle and office park transportation"
            text="Waltham office parks, consulting firms, and technology companies frequently need reliable transportation for staff, executives, and visiting groups. Charter buses and minibuses create a cleaner and more predictable travel system than relying on multiple vehicles."
          />

          <ContentBlock
            title="Airport transportation for Waltham groups"
            text="Waltham-to-Logan group transportation is a major use case for private bus service. Corporate teams, conference attendees, wedding guests, and private groups often prefer direct airport transfers in a single coordinated vehicle."
          />

          <ContentBlock
            title="Best bus options for Waltham travel"
            text="Smaller executive groups may choose a Sprinter van or minibus, while larger corporate or event groups often benefit from mini coaches or full motorcoaches. The right vehicle depends on group size, schedule, luggage needs, and distance."
          />

          <ContentBlock
            title="Event and private group transportation"
            text="In addition to corporate travel, Waltham charter buses are often booked for weddings, private events, school trips, sports teams, and family gatherings. Group transportation reduces parking stress and makes large itineraries easier to manage."
          />

          <ContentBlock
            title="Why Waltham businesses use charter buses"
            text="Private charter transportation improves timing, professionalism, and overall execution. Businesses and planners use it to keep groups together, reduce coordination issues, and create a smoother travel experience for clients and staff."
          />

          <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
            <h2 className="text-2xl font-semibold">Related transportation pages</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
              <Link href="/boston-charter-bus" className="underline underline-offset-4 hover:text-white">
                Boston Charter Bus
              </Link>
              <Link href="/boston-corporate-shuttle" className="underline underline-offset-4 hover:text-white">
                Boston Corporate Shuttle
              </Link>
              <Link href="/motorcoach-rental-boston" className="underline underline-offset-4 hover:text-white">
                Motorcoach Rental Boston
              </Link>
              <Link href="/service-area/waltham" className="underline underline-offset-4 hover:text-white">
                Waltham Service Area
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
            <h2 className="text-2xl font-semibold">Need a charter bus in Waltham?</h2>
            <p className="mt-4 max-w-3xl text-neutral-300">
              Request a quote for airport transfers, corporate group movement,
              office shuttles, private events, and long-distance travel from Waltham.
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
                Get Waltham Quote
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