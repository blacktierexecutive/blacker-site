export const metadata = {
  title:
    "Chauffeur, Airport Transfers & Group Transportation | BlackTier Executives",
  description:
    "Chauffeur service, Logan Airport transfers, Sprinter vans, minibuses, and motorcoaches for corporate travel, weddings, events, and group transportation across New England.",
};

import Link from "next/link";

type Service = {
  title: string;
  desc: string;
  image: string;
  bullets: string[];
  note?: string;
};

const SERVICES: Service[] = [
  {
    title: "Airport Transfers (Logan BOS)",
    desc: "Premium airport transportation engineered around real flight schedules—pickup timing, luggage, and smooth curbside execution.",
    image: "/images/services/airport-transfers.jpg",
    bullets: [
      "Flight tracking + dynamic pickup timing",
      "Meet & Greet available inside the terminal",
      "Professional luggage assistance",
      "Clear communication and clean arrival flow",
    ],
    note: "Meet & Greet is available upon request.",
  },
  {
    title: "Corporate & Executive Travel",
    desc: "Discreet, consistent service designed for executives, teams, and client-facing transportation where timing and presentation matter.",
    image: "/images/services/corporate-travel.jpg",
    bullets: [
      "Professional chauffeurs, executive-ready vehicles",
      "Punctual pickup windows + proactive coordination",
      "Quiet comfort for calls and work",
      "Reliable repeatability for frequent travel",
    ],
  },
  {
    title: "Hourly Chauffeur",
    desc: "A dedicated chauffeur on standby for meetings, dinners, multi-stops, and flexible schedules—without the stress of arranging multiple trips.",
    image: "/images/services/hourly-chauffeur.jpg",
    bullets: [
      "Ideal for multi-stop itineraries",
      "Wait time handled professionally",
      "Adjustable plans when your schedule changes",
      "Comfort-first experience throughout the day",
    ],
  },
  {
    title: "City-to-City (New England + NYC)",
    desc: "Long-distance transportation with executive comfort. Boston to NYC and city-to-city routes across New England with a premium standard.",
    image: "/images/services/city-to-city.jpg",
    bullets: [
      "Boston ⇄ NYC and major New England routes",
      "Comfortable, quiet travel experience",
      "Ideal for business, events, and family travel",
      "Direct pickup/dropoff—no parking, no hassle",
    ],
    note: "NYC trips available. Final pricing depends on routing and timing.",
  },
  {
    title: "Weddings",
    desc: "Polished arrivals and coordinated timing—supporting your timeline and reducing day-of chaos for couples, families, and bridal parties.",
    image: "/images/services/weddings.jpg",
    bullets: [
      "Timeline coordination and staging support",
      "Ceremony to reception transportation",
      "Professional presentation + clean vehicles",
      "Optional hourly blocks for flexibility",
    ],
  },
  {
    title: "Events, Concerts & Sports",
    desc: "Arrive relaxed and leave without stress. A premium experience for high-traffic venues, concerts, and special nights out.",
    image: "/images/services/events.jpg",
    bullets: [
      "Venue dropoff/pickup strategy to avoid congestion",
      "Ideal for groups, couples, and VIP guests",
      "Safe, professional transportation",
      "Optional hourly standby",
    ],
  },
  {
    title: "Prom & School Events",
    desc: "A safe, professional, and memorable ride experience with a premium feel—ideal for group photos, entrances, and peace of mind.",
    image: "/images/services/prom.jpg",
    bullets: [
      "Safety-first transportation with professional chauffeurs",
      "Group-friendly options available",
      "Clean vehicles and polished presentation",
      "Clear pickup windows and communication",
    ],
    note: "Parent coordination and timing confirmation available.",
  },
  {
    title: "Group Transportation (Sprinter)",
    desc: "Move groups comfortably with an executive-grade approach—great for airport runs, corporate groups, and events across New England.",
    image: "/images/services/group-transportation.jpg",
    bullets: [
      "Ideal for 6–12 passengers (Sprinter)",
      "Luggage-friendly configurations",
      "Corporate groups and event transport",
      "Direct routing with premium comfort",
    ],
  },
  {
    title: "Point-to-Point",
    desc: "Simple, clean, premium transportation from A to B—perfect for dinners, hotels, airports, offices, and client pickups.",
    image: "/images/services/point-to-point.jpg",
    bullets: [
      "Straightforward booking and routing",
      "Professional chauffeur experience",
      "Premium cleanliness and comfort standard",
      "Great for everyday executive movement",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-neutral-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-900/80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/services/home.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(215,170,96,0.22),transparent_45%)]" />

        <div className="relative px-6 py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1600px]">
            <p className="inline-flex items-center rounded-full border border-neutral-700/80 bg-black/40 px-4 py-1 text-xs text-neutral-200">
              BackTier Executives · Services
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Premium chauffeur service built for real schedules.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-200 md:text-lg">
              Boston, New England, and NYC routes with a luxury standard—airport
              transfers, corporate travel, events, and group transportation
              delivered with precision and discretion.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold text-neutral-950 md:text-lg hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                }}
              >
                Reserve Now
              </Link>

              <a
                href="tel:+10000000000"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-600/80 bg-black/30 px-8 py-4 text-base font-semibold text-neutral-100 hover:border-neutral-400 md:text-lg"
              >
                Call Now
              </a>
            </div>

            {/* Trust chips */}
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <TrustChip
                title="Flight tracking"
                desc="Airport pickups aligned to real arrival time."
              />
              <TrustChip title="Meet & Greet" desc="Inside terminal pickup available." />
              <TrustChip title="Child seats" desc="Available upon request for families." />
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold">Services</h2>
            <p className="mt-4 text-neutral-300">
              Choose the experience that matches your schedule. Every service is
              delivered with the same premium standard—clean vehicles,
              professional chauffeurs, and proactive communication.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Area + CTA */}
      <section className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-24">
          <div className="grid gap-10 rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold">Boston · New England · NYC</h3>
              <p className="mt-4 text-neutral-300">
                We operate across Boston and New England with city-to-city
                service that includes NYC routes. For complex itineraries, group
                movement, or special requests, call or email and we’ll coordinate
                it end-to-end.
              </p>

              {/* ✅ SEO: internal links to town pages */}
              <div className="mt-8 rounded-3xl border border-neutral-800/70 bg-neutral-950/30 p-6">
                <div className="text-sm font-semibold text-neutral-100">
                  Local Service Areas
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  We provide chauffeur, airport transfer, and group transportation
                  services in{" "}
                  <Link
                    href="/service-area/newton"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Newton
                  </Link>
                  ,{" "}
                  <Link
                    href="/service-area/waltham"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Waltham
                  </Link>
                  , and{" "}
                  <Link
                    href="/service-area/wellesley"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Wellesley
                  </Link>
                  , with full coverage across Boston and New England.
                </p>

                <div className="mt-4">
                  <Link
                    href="/service-area"
                    className="text-sm font-semibold underline underline-offset-4 text-neutral-200 hover:text-white"
                  >
                    View all service areas
                  </Link>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
                  href="mailto:info@blacktierexecutive.com"
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-8 py-4 font-semibold hover:border-neutral-500"
                >
                  Email Us
                </a>
              </div>

              <p className="mt-6 text-sm text-neutral-400">
                * VIP/security-trained chauffeurs: can be added if applicable.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-neutral-800/70">
              <div
                className="h-72 w-full bg-cover bg-center"
                style={{ backgroundImage: "url(/images/services/city-to-city.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl border border-neutral-700/70 bg-black/45 p-5">
                  <div className="text-sm font-semibold">Popular use cases</div>
                  <div className="mt-2 text-sm text-neutral-300">
                    BOS transfers · Corporate travel · Weddings · Events · Group
                    trips · NYC runs
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA strip */}
          <div className="mt-14 grid gap-6 rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8 md:grid-cols-3">
            <MiniCTA title="Reserve" desc="Book through our system in minutes." href="/book" />
            <MiniCTA
              title="Call"
              desc="Talk to a coordinator for custom needs."
              href="tel:+10000000000"
            />
            <MiniCTA
              title="Email"
              desc="Share itinerary details and we’ll confirm."
              href="mailto:info@blacktierexecutive.com"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function TrustChip({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-6">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-neutral-300">{desc}</div>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const { title, desc, image, bullets, note } = service;

  return (
    <div className="group overflow-hidden rounded-3xl border border-neutral-800/70 bg-neutral-950/40 hover:border-neutral-600/80">
      {/* Image header */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-5 left-6 right-6">
          <div className="text-xl font-semibold">{title}</div>
        </div>
      </div>

      {/* Body */}
      <div className="p-8">
        <p className="text-neutral-300">{desc}</p>

        <ul className="mt-6 space-y-2 text-sm text-neutral-300">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-300/70" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {note ? <p className="mt-6 text-xs text-neutral-400">{note}</p> : null}

        <div className="mt-8 flex gap-3">
          <Link
            href="/book"
            className="inline-flex flex-1 items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-neutral-950 hover:opacity-95"
            style={{
              background:
                "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
            }}
          >
            Reserve
          </Link>
          <a
            href="tel:+10000000000"
            className="inline-flex flex-1 items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/30 px-5 py-3 text-sm font-semibold text-neutral-100 hover:border-neutral-500"
          >
            Call
          </a>
        </div>
      </div>
    </div>
  );
}

function MiniCTA({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");

  // Render separately to avoid mismatched props between <a> and <Link>
  if (isExternal) {
    return (
      <a
        href={href}
        className="rounded-3xl border border-neutral-800/70 bg-neutral-950/30 p-6 hover:border-neutral-600/80"
      >
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-2 text-sm text-neutral-300">{desc}</div>
        <div className="mt-5 text-sm underline text-neutral-200 hover:text-white">
          Continue
        </div>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="rounded-3xl border border-neutral-800/70 bg-neutral-950/30 p-6 hover:border-neutral-600/80"
    >
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-neutral-300">{desc}</div>
      <div className="mt-5 text-sm underline text-neutral-200 hover:text-white">
        Continue
      </div>
    </Link>
  );
}