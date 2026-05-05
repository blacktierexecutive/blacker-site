import Link from "next/link";
import { CONTACT } from "../lib/contact";

const STATS = [
  { k: "10+", v: "Years combined experience" },
  { k: "24/7", v: "Availability by appointment" },
  { k: "BOS", v: "Logan-focused operations" },
  { k: "New England + NYC", v: "Regional + city-to-city coverage" },
];

const REVIEWS = [
  {
    name: "Corporate Client",
    title: "Consistent and professional",
    text: "Clean vehicle, on-time pickup, and a smooth ride. Communication was clear and the experience felt premium end-to-end.",
  },
  {
    name: "Airport Transfer",
    title: "Logan pickup was flawless",
    text: "Pickup timing was perfect. We didn’t wait around, and the chauffeur handled everything professionally.",
  },
  {
    name: "Wedding Party",
    title: "Made the day stress-free",
    text: "They coordinated the timeline and arrivals perfectly. Everyone got where they needed to be without chaos.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-neutral-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-900/80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/services/weddings.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(215,170,96,0.22),transparent_45%)]" />

        <div className="relative px-6 py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1600px]">
            <p className="inline-flex items-center rounded-full border border-neutral-700/80 bg-black/40 px-4 py-1 text-xs text-neutral-200">
              BackTier Executives · About
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Luxury transportation delivered with discipline.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-200 md:text-lg">
              BackTier Executives serves Boston, New England, and NYC routes with a premium standard:
              professional chauffeurs, clean vehicles, proactive coordination, and discreet execution.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold text-neutral-950 md:text-lg hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                }}
              >
                Call {CONTACT.phoneDisplay}
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-600/80 bg-black/30 px-8 py-4 text-base font-semibold text-neutral-100 hover:border-neutral-400 md:text-lg"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-20">
          <div className="grid gap-6 rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.v} className="text-center">
                <div className="text-3xl font-semibold">{s.k}</div>
                <div className="mt-2 text-xs text-neutral-400">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Values */}
      <section className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
              <h2 className="text-4xl font-semibold">What we stand for</h2>
              <p className="mt-4 text-neutral-300">
                Luxury isn’t only the vehicle—it’s the execution. Our focus is consistent service with the
                kind of detail that clients notice: punctuality, presentation, discretion, and clean coordination.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-neutral-300">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-300/70" />
                  <span>Proactive communication and timing discipline</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-300/70" />
                  <span>Clean vehicles and premium presentation</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-300/70" />
                  <span>Discreet, professional chauffeurs</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-300/70" />
                  <span>VIP service: white-glove coordination</span>
                </li>
              </ul>

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

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/30 px-8 py-4 font-semibold hover:border-neutral-500"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right visual panel */}
            <div className="relative overflow-hidden rounded-3xl border border-neutral-800/70">
              <div
                className="h-[420px] w-full bg-cover bg-center"
                style={{ backgroundImage: "url(/images/services/corporate-travel.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              {/* Operating focus with IMAGE background */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="relative overflow-hidden rounded-2xl border border-neutral-700/70">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url(/images/about/operating-focus.jpg)" }}
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="relative p-6">
                    <div className="text-sm font-semibold">Operating focus</div>
                    <div className="mt-2 text-sm text-neutral-200">
                      Airport transfers · Corporate travel · Events · City-to-city · Group transportation
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold">Reviews</h2>
            <p className="mt-4 text-neutral-300">
              Replace these placeholders with your real reviews (Google, Yelp, direct client feedback).
              We’ll format them cleanly and keep it premium.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <div
                key={r.title}
                className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10 hover:border-neutral-600/80"
              >
                <div className="text-lg font-semibold">{r.title}</div>
                <p className="mt-4 text-neutral-300">“{r.text}”</p>
                <div className="mt-8 text-sm text-neutral-400">{r.name}</div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-2xl font-semibold">Want to see more?</div>
                <div className="mt-2 text-neutral-300">
                  We can add a Google Reviews widget later, or showcase curated testimonials.
                </div>
              </div>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold text-neutral-950 hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                }}
              >
                Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
