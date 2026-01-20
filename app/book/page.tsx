import Hero from "../components/Hero";
import Link from "next/link";

const BOOKING_URL = "https://YOUR-LIMOANYWHERE-BOOKING-LINK"; // replace this

export default function BookPage() {
  return (
    <main>
      <Hero
        title="Reserve in minutes."
        subtitle="Our online reservations are powered by LimoAnywhere for secure booking and accurate confirmations."
        image="/images/hero/hero.jpg"
        primaryCtaHref={BOOKING_URL}
        primaryCtaText="Open Reservation System"
        secondaryCtaHref="tel:+10000000000"
        secondaryCtaText="Call to Reserve"
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-6">
            <h2 className="text-2xl font-semibold">Online Reservations</h2>
            <p className="mt-2 text-neutral-300">
              Click below to reserve via our LimoAnywhere system. You’ll receive confirmation once your request is accepted.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold text-neutral-950 hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                }}
              >
                Reserve Now
              </a>

              <Link
                href="/fleet"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-5 py-3 font-semibold text-neutral-100 hover:border-neutral-500"
              >
                View Fleet
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-semibold">What we’ll need</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              <li>• Pickup & drop-off addresses</li>
              <li>• Date & time</li>
              <li>• Passenger count + luggage</li>
              <li>• Flight number (for airport transfers)</li>
              <li>• Vehicle preference</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-neutral-800/70 bg-neutral-950 p-4 text-sm text-neutral-300">
              If you need a custom itinerary (multi-stop, hourly standby, event coordination), call us directly.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
