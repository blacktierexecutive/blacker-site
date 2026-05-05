export const metadata = {
  title: "Boston Airport Car Service | Logan Airport Transportation",
  description:
    "Premium Boston airport car service with professional chauffeurs, executive sedans, SUVs, Sprinter vans, minibuses, and motorcoaches for Logan Airport transfers.",
};

import Link from "next/link";

export default function BostonAirportCarServicePage() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="border-b border-neutral-900/80">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Boston Airport Car Service
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
            BlackTier Executives provides premium airport transportation in Boston
            with reliable service to and from Logan Airport (BOS). Whether you
            need an executive sedan, luxury SUV, Sprinter van, minibus, or motorcoach,
            our chauffeur-driven transportation is designed for smooth pickups,
            clean vehicles, and dependable timing.
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
              Reserve Airport Transportation
            </Link>

            <Link
              href="/fleet"
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-8 py-4 font-semibold hover:border-neutral-500"
            >
              View Vehicle Options
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-20 space-y-14">
          <ContentBlock
            title="Reliable Logan Airport transportation"
            text="Boston Logan Airport traffic can be unpredictable, especially during peak morning and evening hours. Professional airport car service reduces uncertainty by coordinating pickup timing, monitoring travel conditions, and providing a more structured arrival experience than on-demand rideshare services."
          />

          <ContentBlock
            title="Luxury vehicles for airport travel"
            text="Travelers can choose the right vehicle based on passenger count and luggage needs. Executive sedans work well for solo business travelers and couples. Luxury SUVs provide extra luggage space and comfort. For larger groups, Sprinter vans, minibuses, and motorcoaches make airport transportation more efficient and coordinated."
          />

          <ContentBlock
            title="Airport transportation for groups"
            text="Group airport transportation is one of the most common use cases for Boston airport service. Corporate teams, wedding guests, sports groups, and family travelers often prefer a single coordinated vehicle rather than multiple rides. Sprinter vans and minibuses simplify timing, luggage handling, and arrival logistics."
          />

          <ContentBlock
            title="Popular Boston airport travel routes"
            text="Logan Airport transportation is frequently booked from Boston, Cambridge, Brookline, Newton, Waltham, and Wellesley. These routes are common for business travelers, families, and event transportation requiring dependable service and professional chauffeurs."
          />

          <ContentBlock
            title="Why private airport transportation is different"
            text="Private airport car service focuses on punctuality, presentation, and comfort. Clean executive vehicles, professional chauffeurs, and proactive communication create a smoother experience for airport pickups and drop-offs, especially for travelers with tight schedules or larger groups."
          />

          <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
            <h2 className="text-2xl font-semibold">
              Need Boston airport transportation?
            </h2>

            <p className="mt-4 text-neutral-300">
              We provide airport car service, chauffeur transportation, and group
              airport transfers with executive sedans, SUVs, Sprinter vans, minibuses,
              and motorcoaches across Boston and New England.
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
                Book a Ride
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-8 py-4 font-semibold hover:border-neutral-500"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-6 text-sm text-neutral-400">
              Related pages:{" "}
              <Link href="/service-area" className="underline hover:text-white">
                Service Areas
              </Link>{" "}
              ·{" "}
              <Link href="/blog/logan-airport-pickup-guide" className="underline hover:text-white">
                Logan Airport Pickup Guide
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
}: 
{
  title: string;
  text: string;
}) 
{
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-4 leading-relaxed text-neutral-300">{text}</p>
    </div>
  );
}