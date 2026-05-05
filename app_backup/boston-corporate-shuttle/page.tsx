export const metadata = {
  title: "Boston Corporate Shuttle Service | Employee & Executive Transportation",
  description:
    "Corporate shuttle service in Boston for employee transportation, conferences, airport transfers, and executive group travel. Premium vans, minibuses, and coaches.",
};

import Link from "next/link";

export default function BostonCorporateShuttlePage() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="border-b border-neutral-900/80">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <p className="inline-flex items-center rounded-full border border-neutral-700/80 bg-black/30 px-4 py-1 text-xs text-neutral-200">
            BlackTier Executives · Corporate Transportation
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Boston Corporate Shuttle Service
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
            BlackTier Executives provides premium corporate shuttle service in
            Boston for employee transportation, executive travel, conferences,
            airport transfers, and multi-stop business itineraries. Our group
            transportation options are built for reliability, professionalism, and
            clean execution across Boston and New England.
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
              Request Corporate Shuttle Quote
            </Link>

            <a
              href="mailto:blacktierexecutive@gmail.com?subject=Boston%20Corporate%20Shuttle%20Quote"
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
            title="Corporate shuttle transportation in Boston"
            text="Corporate shuttle service is one of the most efficient transportation solutions for businesses operating across Boston. It allows companies to move employees, conference attendees, visiting executives, and corporate groups in a coordinated and professional way."
          />

          <ContentBlock
            title="Employee transportation and office mobility"
            text="Boston businesses often use private shuttle transportation for office commutes, event transfers, inter-office movement, and scheduled group transportation. This is especially valuable when timing, presentation, and consistency matter more than ad hoc rideshare solutions."
          />

          <ContentBlock
            title="Airport shuttle service for executives and teams"
            text="Corporate airport transportation is one of the most common reasons businesses book shuttle vehicles. Logan Airport transfers for groups, client pickups, and executive arrivals become significantly easier when transportation is pre-coordinated with a dedicated vehicle and professional chauffeur."
          />

          <ContentBlock
            title="Vehicle types for corporate shuttle programs"
            text="Shuttle programs may use executive Sprinter vans, minibuses, mini coaches, or full motorcoaches depending on passenger count and route design. Smaller teams may prefer vans, while recurring employee or event transportation often benefits from larger group vehicles."
          />

          <ContentBlock
            title="Conference, convention, and event shuttle support"
            text="Boston corporate shuttles are frequently used for conventions, conferences, hotel-to-venue transportation, trade shows, and executive off-sites. A dedicated shuttle service helps organizers reduce transportation friction and improve overall event experience."
          />

          <ContentBlock
            title="Why companies choose private shuttle service"
            text="Private corporate shuttle transportation creates more control, stronger timing discipline, and a more polished experience than trying to manage large teams with separate rideshare bookings. For growing businesses, it also supports better planning and improved client presentation."
          />

          <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
            <h2 className="text-2xl font-semibold">Related transportation pages</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
              <Link href="/boston-charter-bus" className="underline underline-offset-4 hover:text-white">
                Boston Charter Bus
              </Link>
              <Link href="/sprinter-van-boston" className="underline underline-offset-4 hover:text-white">
                Sprinter Van Boston
              </Link>
              <Link href="/minibus-rental-boston" className="underline underline-offset-4 hover:text-white">
                Minibus Rental Boston
              </Link>
              <Link href="/motorcoach-rental-boston" className="underline underline-offset-4 hover:text-white">
                Motorcoach Rental Boston
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
            <h2 className="text-2xl font-semibold">Need a corporate shuttle in Boston?</h2>
            <p className="mt-4 max-w-3xl text-neutral-300">
              Request a quote for employee transportation, executive group travel,
              airport shuttles, conference transportation, and recurring business routes.
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
                Get Corporate Shuttle Quote
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-8 py-4 font-semibold hover:border-neutral-500"
              >
                Explore Services
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