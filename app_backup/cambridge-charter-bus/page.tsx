export const metadata = {
  title: "Cambridge Charter Bus Rental | Group Transportation & Coach Service",
  description:
    "Premium charter bus rental in Cambridge for universities, biotech companies, corporate events, airport transfers, and private group transportation.",
};

import Link from "next/link";

export default function CambridgeCharterBusPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="border-b border-neutral-900/80">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <p className="inline-flex items-center rounded-full border border-neutral-700/80 bg-black/30 px-4 py-1 text-xs text-neutral-200">
            BlackTier Executives · Group Transportation
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Cambridge Charter Bus Rental
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
            BlackTier Executives provides premium charter bus transportation in
            Cambridge for universities, biotech companies, conferences, airport
            transfers, and large private groups. Our fleet supports everything from
            executive team movement to full-size group transportation across
            Cambridge, Boston, and New England.
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
              Request Cambridge Bus Quote
            </Link>

            <a
              href="mailto:blacktierexecutive@gmail.com?subject=Cambridge%20Charter%20Bus%20Quote"
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
            title="Charter bus transportation in Cambridge"
            text="Cambridge is a high-demand area for professional group transportation due to universities, biotech campuses, conferences, and executive travel. Charter bus service simplifies logistics for larger parties moving between campuses, hotels, venues, and airports."
          />

          <ContentBlock
            title="University and academic group transportation"
            text="Cambridge charter buses are frequently used for university events, campus tours, student transportation, academic conferences, and faculty group travel. Coordinated bus transportation helps reduce delays and keeps groups moving together efficiently."
          />

          <ContentBlock
            title="Corporate and biotech shuttle support"
            text="Biotech firms, consulting teams, and conference organizers in Cambridge often require structured group transportation for employees, visiting executives, and event attendees. Charter buses and group vehicles create smoother movement between offices, labs, hotels, and meeting venues."
          />

          <ContentBlock
            title="Airport transfers from Cambridge"
            text="Cambridge-to-Logan transportation is one of the most common group travel needs in the area. Charter bus rentals are ideal for airport group pickups, business delegations, university arrivals, and event transportation requiring coordinated schedules."
          />

          <ContentBlock
            title="Fleet options for Cambridge groups"
            text="Depending on passenger count and itinerary, transportation can be handled with Sprinter vans, minibuses, mini coaches, or full motorcoaches. Smaller executive groups may prefer vans or minibuses, while larger conference groups benefit from a dedicated charter bus."
          />

          <ContentBlock
            title="Why Cambridge groups book private transportation"
            text="Private charter transportation offers better scheduling control, cleaner logistics, and a more professional experience than trying to split groups across multiple rideshare vehicles. For event planners and institutions, this reduces friction and improves overall execution."
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
              <Link href="/service-area/cambridge" className="underline underline-offset-4 hover:text-white">
                Cambridge Service Area
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
            <h2 className="text-2xl font-semibold">Need a charter bus in Cambridge?</h2>
            <p className="mt-4 max-w-3xl text-neutral-300">
              Request a quote for university transportation, corporate group
              travel, conference shuttles, and airport transfers in Cambridge.
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
                Get Cambridge Quote
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