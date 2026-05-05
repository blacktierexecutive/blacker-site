export const metadata = {
  title: "Logan Airport Pickup Guide (BOS) – Car, SUV, Sprinter & Shuttle Options",
  description:
    "Complete Logan Airport pickup guide. Learn where to meet your chauffeur, best pickup timing, black car vs Sprinter van options, and stress-free airport transportation tips in Boston.",
};

import Link from "next/link";

export default function LoganAirportGuide() {
  return (
    <main className="bg-neutral-950">
      {/* HERO */}
      <section className="border-b border-neutral-900/80">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Logan Airport Pickup Guide (Boston BOS)
          </h1>

          <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
            Planning an airport pickup at Boston Logan can feel confusing —
            terminal traffic, timing uncertainty, and rideshare delays often
            create unnecessary stress. This guide explains exactly how premium
            airport transportation works so you can arrive or depart smoothly
            with the right vehicle choice.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold text-neutral-950 hover:opacity-95"
              style={{
                background:
                  "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
              }}
            >
              Schedule Airport Pickup
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

      {/* CONTENT */}
      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-20 space-y-14">

          <ArticleBlock
            title="Understanding Logan Airport Pickup Zones"
            text="Each Logan terminal has designated pickup areas that can become congested during peak travel hours. Professional chauffeur services monitor terminal flow and coordinate curbside timing to reduce waiting time and confusion. For international arrivals, meet-and-greet inside the terminal can significantly improve the arrival experience."
          />

          <ArticleBlock
            title="Best Pickup Timing Strategy"
            text="Flight tracking technology allows premium transportation providers to adjust pickup schedules dynamically. Instead of relying on fixed booking times like standard rideshare apps, chauffeur services align pickup with real arrival times, baggage claim duration, and terminal congestion conditions."
          />

          <ArticleBlock
            title="Choosing the Right Airport Vehicle"
            text="Vehicle selection depends on passenger count, luggage volume, and comfort expectations. Executive sedans work best for solo travelers or couples. SUVs provide additional luggage space and ride height. Sprinter vans, minibuses, and motor coaches are ideal for corporate groups, family travel, or event transportation."
          />

          <ArticleBlock
            title="Airport Transportation for Groups"
            text="Group airport transportation requires coordination beyond simple point-to-point rides. Dedicated chauffeurs manage staging, terminal sequencing, and communication logistics. Sprinter vans and mini coaches are commonly used for airport shuttles, wedding guest arrivals, sports teams, and corporate delegations."
          />

          <ArticleBlock
            title="Avoiding Common Logan Airport Pickup Mistakes"
            text="Many travelers underestimate terminal traffic delays, luggage handling time, and last-minute schedule changes. Booking premium airport transportation reduces uncertainty by providing structured arrival planning, professional communication, and vehicle readiness aligned with travel conditions."
          />

          <ArticleBlock
            title="Why Chauffeur Airport Service Feels Different"
            text="Unlike on-demand rideshare services, professional chauffeur transportation focuses on consistency, presentation, and timing reliability. Clean executive vehicles, trained drivers, and proactive coordination contribute to a calmer airport travel experience, especially for business travelers and time-sensitive itineraries."
          />

          {/* CTA */}
          <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
            <h3 className="text-2xl font-semibold">
              Need a smooth Logan Airport pickup?
            </h3>

            <p className="mt-4 text-neutral-300">
              Whether you require a luxury sedan, premium SUV, or group
              transportation like a Sprinter van or mini coach, coordinated
              airport service ensures reliable arrivals and departures across
              Boston and New England.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
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

function ArticleBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-4 text-neutral-300 leading-relaxed">{text}</p>
    </div>
  );
}