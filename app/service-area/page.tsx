"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CONTACT } from "../lib/contact";

type StateKey = "MA" | "NH" | "RI" | "CT" | "ME" | "VT";

type StateData = {
  key: StateKey;
  name: string;
  primary: { name: string; subtitle: string }[];
  more: string[];
  note?: string;
};

const STATES: StateData[] = [
  {
    key: "MA",
    name: "Massachusetts",
    primary: [
      { name: "Boston", subtitle: "Downtown, Seaport, Back Bay" },
      { name: "Cambridge", subtitle: "Harvard, Kendall Square" },
      { name: "Brookline", subtitle: "Longwood, Chestnut Hill" },
      { name: "Newton", subtitle: "Newton Centre, Chestnut Hill" },
      { name: "Waltham", subtitle: "128 corridor, business parks" },
      { name: "Worcester", subtitle: "Central MA hub" },
    ],
    more: [
      "Somerville",
      "Quincy",
      "Medford",
      "Everett",
      "Revere",
      "Chelsea",
      "Watertown",
      "Lexington",
      "Burlington",
      "Woburn",
      "Winchester",
      "Needham",
      "Dedham",
      "Wellesley",
      "Framingham",
      "Natick",
      "Lowell",
      "Lawrence",
      "Haverhill",
      "Beverly",
      "Salem",
      "Gloucester",
      "Plymouth",
      "Hingham",
      "Milton",
      "Norwood",
      "Braintree",
      "Marblehead",
      "Andover",
      "Bedford",
      "Concord",
      "Acton",
    ],
    note: "Includes Logan Airport (BOS), Back Bay, Seaport, and major metro routes.",
  },
  {
    key: "NH",
    name: "New Hampshire",
    primary: [
      { name: "Manchester", subtitle: "Business travel & city access" },
      { name: "Nashua", subtitle: "Southern NH corridor" },
      { name: "Portsmouth", subtitle: "Seacoast & events" },
      { name: "Concord", subtitle: "Capital region" },
      { name: "Salem", subtitle: "Southern NH access" },
      { name: "Derry", subtitle: "Regional coverage" },
    ],
    more: [
      "Bedford",
      "Merrimack",
      "Hudson",
      "Exeter",
      "Hampton",
      "Keene",
      "Hanover",
      "Londonderry",
      "Rye",
      "Dover",
      "Durham",
      "Laconia",
    ],
    note: "Ideal for city-to-city transfers and airport service into Massachusetts.",
  },
  {
    key: "RI",
    name: "Rhode Island",
    primary: [
      { name: "Providence", subtitle: "Downtown & universities" },
      { name: "Newport", subtitle: "Weddings & waterfront events" },
      { name: "Warwick", subtitle: "Airport area & corporate" },
      { name: "Cranston", subtitle: "Metro coverage" },
      { name: "Pawtucket", subtitle: "Regional" },
      { name: "East Greenwich", subtitle: "Upscale events & dining" },
    ],
    more: [
      "Narragansett",
      "Westerly",
      "Barrington",
      "Bristol",
      "Middletown",
      "North Kingstown",
      "Smithfield",
      "Johnston",
    ],
    note: "Popular for events, weddings, and coastal trips.",
  },
  {
    key: "CT",
    name: "Connecticut",
    primary: [
      { name: "Hartford", subtitle: "Capital region" },
      { name: "New Haven", subtitle: "Yale area, downtown" },
      { name: "Stamford", subtitle: "Corporate corridor" },
      { name: "Greenwich", subtitle: "Luxury travel" },
      { name: "Bridgeport", subtitle: "Regional access" },
      { name: "Norwalk", subtitle: "Events & corporate" },
    ],
    more: [
      "Westport",
      "Fairfield",
      "Milford",
      "Stratford",
      "Danbury",
      "Waterbury",
      "East Hartford",
      "Glastonbury",
      "Mystic",
    ],
    note: "Connecticut routes often pair with NYC availability (schedule dependent).",
  },
  {
    key: "ME",
    name: "Maine",
    primary: [
      { name: "Portland", subtitle: "Downtown & waterfront" },
      { name: "Kennebunk", subtitle: "Coastal & events" },
      { name: "York", subtitle: "Seaside travel" },
      { name: "Ogunquit", subtitle: "Weddings & weekends" },
      { name: "Biddeford", subtitle: "Regional coverage" },
      { name: "Lewiston", subtitle: "Central Maine access" },
    ],
    more: [
      "Freeport",
      "Brunswick",
      "Augusta",
      "Bangor",
      "Old Orchard Beach",
      "Scarborough",
      "Falmouth",
    ],
    note: "Seasonal trips and event transportation available based on routing.",
  },
  {
    key: "VT",
    name: "Vermont",
    primary: [
      { name: "Burlington", subtitle: "Downtown & lake region" },
      { name: "Stowe", subtitle: "Resorts & winter travel" },
      { name: "Montpelier", subtitle: "Capital region" },
      { name: "Killington", subtitle: "Ski & events" },
      { name: "Manchester", subtitle: "Southern VT access" },
      { name: "Woodstock", subtitle: "Luxury retreats" },
    ],
    more: [
      "Middlebury",
      "Rutland",
      "Bennington",
      "Waterbury",
      "Waitsfield",
      "Jay",
    ],
    note: "Long-distance city-to-city and resort transportation based on schedule.",
  },
];

const NYC = {
  title: "New York City",
  subtitle: "City-to-city transfers (availability by schedule)",
  primary: [
    { name: "Manhattan", subtitle: "Midtown, Downtown, UES/UWS" },
    { name: "JFK", subtitle: "Airport transfers (schedule dependent)" },
    { name: "LGA", subtitle: "Airport transfers (schedule dependent)" },
    { name: "EWR", subtitle: "Airport transfers (schedule dependent)" },
  ],
};

export default function ServiceAreaPage() {
  const [active, setActive] = useState<StateKey>("MA");
  const [showMore, setShowMore] = useState(false);

  const activeState = useMemo(
    () => STATES.find((s) => s.key === active) ?? STATES[0],
    [active]
  );

  const moreList = useMemo(() => {
    const list = activeState.more ?? [];
    if (!showMore) return list.slice(0, 18);
    return list;
  }, [activeState.more, showMore]);

  return (
    <main className="bg-neutral-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-900/80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/service-area/hero.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(215,170,96,0.22),transparent_45%)]" />

        <div className="relative px-6 py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1600px]">
            <p className="inline-flex items-center rounded-full border border-neutral-700/80 bg-black/40 px-4 py-1 text-xs text-neutral-200">
              BackTier Executives · Service Area
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
              Boston and NYC travel.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-200 md:text-lg">
              We operate across major cities throughout New England and provide
              city-to-city transfers including New York City. Airport transfers,
              corporate travel, events, and group transportation are delivered with a
              luxury standard.
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
                Reserve / Request Quote
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-black/30 px-8 py-4 text-base font-semibold text-neutral-100 md:text-lg hover:border-neutral-500"
              >
                View Services
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <Chip
                title="Airport transfers"
                desc="Logan (BOS) pickups and drop-offs across the region."
              />
              <Chip
                title="Group transportation"
                desc="Sprinters, minibuses, and motorcoaches for 8–54 passengers."
              />
              <Chip
                title="Weddings & events"
                desc="Guest shuttles, VIP arrivals, and coordinated staging."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Towns */}
      <section className="border-b border-neutral-900/80">
        <div className="mx-auto w-full max-w-[1600px] px-6 py-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-neutral-100 md:text-4xl">
                Featured service areas
              </h2>
              <p className="mt-3 text-neutral-300">
                Start here for high-demand towns where we regularly support airport
                transfers, corporate travel, weddings, events, and group transportation.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 self-start rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-6 py-3 text-sm font-semibold text-neutral-100 hover:border-neutral-500 md:self-auto"
            >
              Request availability <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <TownCard
              title="Wellesley"
              href="/service-area/wellesley"
              subtitle="Executive travel, BOS airport transfers, weddings & events"
            />
            <TownCard
              title="Waltham"
              href="/service-area/waltham"
              subtitle="Corporate schedules, group moves, Logan (BOS) pickups"
            />
            <TownCard
              title="Newton"
              href="/service-area/newton"
              subtitle="Black car service, airport transfers, and group transportation"
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Chip
              title="Airport Transfers (BOS)"
              desc="Logan pickups and drop-offs across the region."
            />
            <Chip
              title="Group vehicles"
              desc="Sprinters, minibuses, and motorcoaches (24–54 passengers)."
            />
            <Chip
              title="Weddings & events"
              desc="Guest shuttles, VIP arrivals, and coordinated staging."
            />
          </div>
        </div>
      </section>

      {/* New England Coverage (Tabs) */}
      <section className="border-b border-neutral-900/80">
        <div className="mx-auto w-full max-w-[1600px] px-6 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Major cities across New England
              </h2>
              <p className="mt-3 text-neutral-300">
                Select a state to view our primary coverage areas. If you don’t see
                your exact pickup/dropoff, reach out and we’ll confirm availability.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {STATES.map((s) => (
                <button
                  key={s.key}
                  onClick={() => {
                    setActive(s.key);
                    setShowMore(false);
                  }}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                    active === s.key
                      ? "border-neutral-500 bg-neutral-900/60 text-white"
                      : "border-neutral-800/70 bg-neutral-950/40 text-neutral-300 hover:border-neutral-600/80",
                  ].join(" ")}
                >
                  {s.key}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
              <div className="text-xl font-semibold">{activeState.name}</div>
              {activeState.note ? (
                <div className="mt-3 text-sm text-neutral-300">
                  {activeState.note}
                </div>
              ) : null}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {activeState.primary.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-2xl border border-neutral-800/70 bg-black/20 p-5"
                  >
                    <div className="font-semibold text-neutral-100">{c.name}</div>
                    <div className="mt-2 text-sm text-neutral-300">{c.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
              <div className="text-xl font-semibold">More towns</div>
              <div className="mt-3 text-sm text-neutral-300">
                We operate across surrounding towns as routing allows.
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {moreList.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-800/70 bg-black/20 px-3 py-1 text-xs text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {activeState.more.length > 18 ? (
                <button
                  onClick={() => setShowMore((v) => !v)}
                  className="mt-8 inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-6 py-3 text-sm font-semibold text-neutral-100 hover:border-neutral-500"
                >
                  {showMore ? "Show fewer towns" : "Show more towns"}
                </button>
              ) : null}
            </div>
          </div>

          {/* NYC strip */}
          <div className="mt-12 rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-2xl font-semibold">{NYC.title}</div>
                <div className="mt-2 text-neutral-300">{NYC.subtitle}</div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-8 py-4 font-semibold text-neutral-100 hover:border-neutral-500"
              >
                Request NYC availability
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {NYC.primary.map((c) => (
                <div
                  key={c.name}
                  className="rounded-2xl border border-neutral-800/70 bg-black/20 p-5"
                >
                  <div className="font-semibold text-neutral-100">{c.name}</div>
                  <div className="mt-2 text-sm text-neutral-300">{c.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operating notes + CTA */}
      <section className="border-b border-neutral-900/80">
        <div className="mx-auto w-full max-w-[1600px] px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8 lg:col-span-2">
              <h2 className="text-2xl font-semibold">How we operate</h2>
              <p className="mt-4 text-neutral-300">
                We support scheduled transportation across Boston and New England,
                including airport transfers, corporate travel, and event logistics.
                For larger vehicles and complex itineraries, request a quote so we
                can confirm routing, timing, staging, and fees.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <Chip
                  title="Meet & greet"
                  desc="Available inside terminal where permitted."
                />
                <Chip
                  title="Child seats"
                  desc="Available by request — confirm when booking."
                />
                <Chip
                  title="Group travel"
                  desc="Sprinter, minibus, and motorcoach options."
                />
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
              <h2 className="text-2xl font-semibold">Reserve / request a quote</h2>
              <p className="mt-4 text-neutral-300">
                Reservations for sedans and SUVs can be booked quickly. For 8+
                passenger vehicles and custom itineraries, request a quote.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold text-neutral-950 hover:opacity-95"
                  style={{
                    background:
                      "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                  }}
                >
                  Reserve / Request Quote
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-8 py-4 font-semibold text-neutral-100 hover:border-neutral-500"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-2xl font-semibold">Not seeing your route?</div>
                <div className="mt-2 text-neutral-300">
                  Share pickup, dropoff, date/time, and passenger count. We’ll
                  confirm availability and routing.
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

function TownCard({
  title,
  subtitle,
  href,
}: {
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-8 transition hover:border-neutral-600/80"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xl font-semibold text-neutral-100">{title}</div>
          <div className="mt-2 text-sm text-neutral-300">{subtitle}</div>
        </div>
        <span className="text-neutral-400 transition group-hover:text-neutral-200">
          →
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full border border-neutral-800/70 bg-black/30 px-3 py-1 text-xs text-neutral-300">
          Chauffeur / Black car
        </span>
        <span className="rounded-full border border-neutral-800/70 bg-black/30 px-3 py-1 text-xs text-neutral-300">
          Logan (BOS)
        </span>
        <span className="rounded-full border border-neutral-800/70 bg-black/30 px-3 py-1 text-xs text-neutral-300">
          Sprinter / Minibus / Coach
        </span>
      </div>
    </Link>
  );
}

function Chip({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-6">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-neutral-300">{desc}</div>
    </div>
  );
}