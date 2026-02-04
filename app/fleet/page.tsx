export const metadata = {
  title: "Luxury Fleet: Sedans, SUVs, Sprinters & Motorcoaches | BlackTier",
  description: "Executive sedans, premium SUVs, Sprinter vans, stretch limousines, minibuses, and 24–54 passenger motorcoaches for airport, corporate, and group transportation.",
};

import Link from "next/link";
import { CONTACT } from "../lib/contact";
import FleetHero from "../components/FleetHero";

type CtaType = "reserve" | "quote";

type FleetItem = {
  title: string;
  subtitle: string;
  image: string;
  capacity: string;
  luggage: string;
  bestFor: string[];
  cta: CtaType;
  badge?: string;
};

const FLEET: FleetItem[] = [
  // Reserve Now group (<= 7 pax)
  {
    title: "Sedan (Standard)",
    subtitle: "Clean, discreet, and efficient",
    image: "/images/fleet/sedan-regular.jpg",
    capacity: "1–3 passengers",
    luggage: "2–3 standard bags",
    bestFor: ["Airport transfers (Logan BOS)", "Corporate travel", "Point-to-point"],
    cta: "reserve",
    badge: "Reserve now",
  },
  {
    title: "Sedan (Premium)",
    subtitle: "Enhanced comfort and presence",
    image: "/images/fleet/sedan-premium.jpg",
    capacity: "1–3 passengers",
    luggage: "2–3 standard bags",
    bestFor: ["VIP travel", "Client pickups", "City-to-city (New England + NYC)"],
    cta: "reserve",
    badge: "Reserve now",
  },
  {
    title: "SUV (Standard)",
    subtitle: "More space for comfort + luggage",
    image: "/images/fleet/suv-regular.jpg",
    capacity: "1–6 passengers",
    luggage: "4–6 standard bags",
    bestFor: ["Airport transfers", "Families", "Events"],
    cta: "reserve",
    badge: "Reserve now",
  },
  {
    title: "SUV (Premium)",
    subtitle: "Luxury SUV service for VIP schedules",
    image: "/images/fleet/suv-premium.jpg",
    capacity: "1–6 passengers",
    luggage: "4–6 standard bags",
    bestFor: ["VIP service", "City-to-city transfers", "Executive travel"],
    cta: "reserve",
    badge: "Reserve now",
  },

  // Quote group (8+ pax or variable fees)
  {
    title: "Mercedes Sprinter",
    subtitle: "Luxury group travel with a clean standard",
    image: "/images/fleet/sprinter-mercedes.jpg",
    capacity: "6–12 passengers",
    luggage: "Varies by configuration",
    bestFor: ["Group airport transfers", "Events", "Weddings"],
    cta: "quote",
    badge: "Request quote",
  },
  {
    title: "Stretch Limousine",
    subtitle: "Classic statement for special occasions",
    image: "/images/fleet/limo-stretch.jpg",
    capacity: "8–10 passengers",
    luggage: "Limited (best for local events)",
    bestFor: ["Weddings", "Prom / school events", "Celebrations"],
    cta: "quote",
    badge: "Request quote",
  },
  {
    title: "24 Passenger Mini Bus",
    subtitle: "Efficient group transportation",
    image: "/images/fleet/minibus-24.jpg",
    capacity: "Up to 24 passengers",
    luggage: "Moderate (varies)",
    bestFor: ["Corporate groups", "Shuttles", "Venue transfers"],
    cta: "quote",
    badge: "Request quote",
  },
  {
    title: "32 Passenger Mini Coach",
    subtitle: "Coach-style comfort for larger groups",
    image: "/images/fleet/minicoach-32.jpg",
    capacity: "Up to 32 passengers",
    luggage: "Moderate to high (varies)",
    bestFor: ["Corporate events", "Weddings", "City-to-city groups"],
    cta: "quote",
    badge: "Request quote",
  },
  {
    title: "40 Passenger Coach",
    subtitle: "Event-ready capacity with professional staging",
    image: "/images/fleet/coach-40.jpg",
    capacity: "Up to 40 passengers",
    luggage: "High (varies)",
    bestFor: ["Conferences", "Large events", "Group logistics"],
    cta: "quote",
    badge: "Request quote",
  },
  {
    title: "54 Passenger Motor Coach",
    subtitle: "Full-scale group transportation",
    image: "/images/fleet/motorcoach-54.jpg",
    capacity: "Up to 54 passengers",
    luggage: "High (varies)",
    bestFor: ["Conventions", "Large weddings", "Transportation programs"],
    cta: "quote",
    badge: "Request quote",
  },
];

// Use the SAME fleet images for the hero rotation
const HERO_IMAGES = [
  "/images/fleet/sedan-premium.jpg",
  "/images/fleet/suv-premium.jpg",
  "/images/fleet/sprinter-mercedes.jpg",
  "/images/fleet/limo-stretch.jpg",
  "/images/fleet/minibus-24.jpg",
  "/images/fleet/minicoach-32.jpg",
  "/images/fleet/coach-40.jpg",
  "/images/fleet/motorcoach-54.jpg",
];

export default function FleetPage() {
  return (
    <main className="bg-neutral-950">
      <FleetHero images={HERO_IMAGES} />

      {/* Fleet grid */}
      <section className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold">Fleet options</h2>
              <p className="mt-4 text-neutral-300">
                Reserve sedans and SUVs instantly. For 8+ passenger vehicles, request a quote—fees and timing can vary.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800/70 bg-neutral-950/40 px-5 py-3 text-sm text-neutral-300">
              Sedans/SUVs: <span className="font-semibold text-neutral-100">Reserve now</span> · 8+ passengers:{" "}
              <span className="font-semibold text-neutral-100">Request quote</span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {FLEET.map((v) => (
              <FleetCard key={v.title} item={v} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-2xl font-semibold">Not sure what to book?</div>
                <div className="mt-2 text-neutral-300">
                  Share passenger count, luggage, route, and timing. We’ll recommend the right vehicle and confirm next
                  steps.
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold text-neutral-950 hover:opacity-95"
                  style={{
                    background:
                      "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                  }}
                >
                  Call {CONTACT.phoneDisplay}
                </a> */}

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/30 px-8 py-4 font-semibold hover:border-neutral-500"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FleetCard({ item }: { item: FleetItem }) {
  const isReserve = item.cta === "reserve";

  return (
    <div className="overflow-hidden rounded-3xl border border-neutral-800/70 bg-neutral-950/40 hover:border-neutral-600/80">
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="h-44 w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {item.badge ? (
          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-neutral-700/80 bg-black/45 px-3 py-1 text-xs font-semibold text-neutral-100">
              {item.badge}
            </span>
          </div>
        ) : null}

        <div className="absolute bottom-4 left-5 right-5">
          <div className="text-xl font-semibold">{item.title}</div>
          <div className="mt-1 text-sm text-neutral-200">{item.subtitle}</div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid gap-3 sm:grid-cols-2">
          <Spec label="Capacity" value={item.capacity} />
          <Spec label="Luggage" value={item.luggage} />
        </div>

        <div className="mt-5">
          <div className="text-xs text-neutral-400">Best for</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.bestFor.map((b) => (
              <span
                key={b}
                className="rounded-full border border-neutral-800/70 bg-black/20 px-3 py-1 text-xs text-neutral-200"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          {isReserve ? (
            <Link
              href="/book"
              className="inline-flex flex-1 items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-neutral-950 hover:opacity-95"
              style={{
                background:
                  "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
              }}
            >
              Reserve Now
            </Link>
          ) : (
            <Link
              href="/contact"
              className="inline-flex flex-1 items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-neutral-950 hover:opacity-95"
              style={{
                background:
                  "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
              }}
            >
              Request Quote
            </Link>
          )}

          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/30 px-5 py-3 text-sm font-semibold hover:border-neutral-500"
          >
            Call
          </a>
        </div>
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800/70 bg-black/20 p-4">
      <div className="text-xs text-neutral-400">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}
