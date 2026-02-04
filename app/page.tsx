export const metadata = {
  title: "Airport Car, Black Car & Group Transportation Boston | BlackTier Executives",
  description: "Premium airport car service, black car, Sprinter vans, minibuses, and motorcoaches across Boston and New England. Logan Airport (BOS), events, and group travel.",
};

import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";

const EMAIL = "blacktierexecutive@gmail.com";

export default function HomePage() {
  return (
    <main className="bg-neutral-950">
      {/* Hero (pulled up behind sticky header to remove top blank area) */}
      <section className="-mt-16 pt-16 md:-mt-20 md:pt-20">
        <HeroCarousel />
      </section>

      {/* Trust strip */}
      <section className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-12">
          <div className="grid gap-6 rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8 md:grid-cols-3">
            <TrustItem k="24/7" v="Email support (phone coming soon)" />
            <TrustItem k="BOS" v="Logan-focused operations" />
            <TrustItem k="New England" v="City-to-city coverage" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold">
              Services built for real schedules
            </h2>
            <p className="mt-4 text-neutral-300">
              Less noise. More precision. A premium standard designed for airport,
              corporate, and event transportation.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            <Card
              title="Airport Transfers (BOS)"
              desc="Smooth pickups with proactive coordination and premium comfort."
            />
            <Card
              title="Corporate Travel"
              desc="Discreet, punctual, consistent are built for executives and teams."
            />
            <Card
              title="Weddings & Events"
              desc="Timeline coordination and polished arrivals without chaos."
            />
            <Card
              title="Hourly Chauffeur"
              desc="Flexible standby for meetings, dinners, and multi-stop plans."
            />
            <Card
              title="City-to-City"
              desc="Boston to anywhere in New England. Comfort first travel."
            />
            <Card
              title="Prom & Celebrations"
              desc="Safety, professionalism, and an elevated experience."
            />
          </div>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-8 py-4 font-semibold hover:border-neutral-500"
            >
              Explore Services
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold text-neutral-950 hover:opacity-95"
              style={{
                background:
                  "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
              }}
            >
              Reserve Now
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold">
                Fleet designed for comfort and presence
              </h2>
              <p className="mt-4 text-neutral-300">
                Executive sedans, premium SUVs, Sprinters, and limousines are kept
                clean and consistent.
              </p>
            </div>

            <Link
              href="/fleet"
              className="underline text-neutral-200 hover:text-white"
            >
              View full fleet
            </Link>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <FleetTile
              title="Executive Sedan"
              meta="1–3 passengers"
              image="/images/fleet/executive-sedan.jpg"
            />
            <FleetTile
              title="Premium SUV"
              meta="1–6 passengers"
              image="/images/fleet/premium-suv.jpg"
            />
            <FleetTile
              title="Sprinter Van"
              meta="6–12 passengers"
              image="/images/fleet/sprinter-van.jpg"
            />
            <FleetTile
              title="Stretch Limo"
              meta="8–10 passengers"
              image="/images/fleet/stretch-limo.jpg"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-24">
          <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
            <h3 className="text-3xl font-semibold">Reserve in minutes.</h3>
            <p className="mt-3 max-w-2xl text-neutral-300">
              Reservations are handled through our booking system. For quotes on
              larger vehicles and custom itineraries, email us for a quote code.
              Phone support is coming soon.
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
                Reserve Now
              </Link>

              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  "Quote Code Request - BackTier Executives"
                )}`}
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-8 py-4 font-semibold hover:border-neutral-500"
              >
                Get a Quote Code (Email)
              </a>
            </div>

            <div className="mt-6 text-sm text-neutral-400">
              Phone: <span className="text-neutral-300">Coming soon</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TrustItem({ k, v }: { k: string; v: string }) {
  return (
    <div className="text-center">
      <div className="text-xl font-semibold">{k}</div>
      <div className="mt-1 text-xs text-neutral-400">{v}</div>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8 hover:border-neutral-600/80">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-neutral-300">{desc}</p>
    </div>
  );
}

function FleetTile({
  title,
  meta,
  image,
}: {
  title: string;
  meta: string;
  image: string;
}) {
  return (
    <div className="group rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8 hover:border-neutral-600/80">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{meta}</p>

      {/* Image */}
      <div className="relative mt-6 overflow-hidden rounded-2xl border border-neutral-800/70">
        <div
          className="h-40 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>
    </div>
  );
}