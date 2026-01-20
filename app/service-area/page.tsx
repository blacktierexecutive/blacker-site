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
      "Lynn",
      "Marblehead",
      "Plymouth",
      "Brockton",
      "Fall River",
      "New Bedford",
      "Cape Cod (Hyannis, Falmouth, Provincetown)",
    ],
    note: "Logan (BOS) and surrounding metro coverage available by appointment.",
  },
  {
    key: "NH",
    name: "New Hampshire",
    primary: [
      { name: "Manchester", subtitle: "Metro hub" },
      { name: "Nashua", subtitle: "Route-friendly from MA" },
      { name: "Portsmouth", subtitle: "Seacoast" },
      { name: "Concord", subtitle: "Capital region" },
      { name: "Derry", subtitle: "Southern NH" },
      { name: "Dover", subtitle: "Seacoast access" },
    ],
    more: ["Salem (NH)", "Bedford", "Merrimack", "Keene"],
  },
  {
    key: "RI",
    name: "Rhode Island",
    primary: [
      { name: "Providence", subtitle: "Downtown + universities" },
      { name: "Newport", subtitle: "Weddings + events" },
      { name: "Warwick", subtitle: "Regional access" },
      { name: "Cranston", subtitle: "Metro area" },
      { name: "Pawtucket", subtitle: "Metro area" },
    ],
    more: [],
  },
  {
    key: "CT",
    name: "Connecticut",
    primary: [
      { name: "Stamford", subtitle: "Corporate corridor" },
      { name: "Greenwich", subtitle: "VIP + executive travel" },
      { name: "New Haven", subtitle: "Yale + metro" },
      { name: "Hartford", subtitle: "Capital region" },
      { name: "Norwalk", subtitle: "Route-friendly" },
      { name: "Westport", subtitle: "Coastal access" },
    ],
    more: ["Bridgeport", "Danbury"],
  },
  {
    key: "ME",
    name: "Maine",
    primary: [
      { name: "Portland", subtitle: "Downtown + waterfront" },
      { name: "South Portland", subtitle: "Regional access" },
      { name: "Kennebunk", subtitle: "Coastal destination" },
      { name: "Ogunquit", subtitle: "Coastal destination" },
      { name: "Bangor", subtitle: "Northern hub" },
    ],
    more: [],
  },
  {
    key: "VT",
    name: "Vermont",
    primary: [
      { name: "Burlington", subtitle: "Lake Champlain region" },
      { name: "Stowe", subtitle: "Resort destination" },
      { name: "Montpelier", subtitle: "Capital region" },
      { name: "Rutland", subtitle: "Regional access" },
    ],
    more: [],
  },
];

const NYC = {
  title: "New York City",
  items: [
    "Boston ⇄ NYC (city-to-city transfers)",
    "NYC business districts and hotels",
    "Events, shows, and special occasions",
    "Airport connections (JFK / LGA / EWR) available upon request",
  ],
};

const CORRIDORS = [
  "Boston ⇄ Providence",
  "Boston ⇄ Worcester",
  "Boston ⇄ Portsmouth",
  "Boston ⇄ Manchester / Nashua",
  "Boston ⇄ Hartford",
  "Boston ⇄ Stamford / Greenwich",
  "Boston ⇄ Portland (ME)",
  "Boston ⇄ Cape Cod",
  "Boston ⇄ NYC",
];

export default function ServiceAreaPage() {
  const [active, setActive] = useState<StateKey>("MA");

  const activeState = useMemo(
    () => STATES.find((s) => s.key === active)!,
    [active]
  );

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
              Boston, New England, and NYC — premium city-to-city travel.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-200 md:text-lg">
              We operate across major cities throughout New England and provide city-to-city transfers including New
              York City. Airport transfers, corporate travel, events, and group transportation—delivered with a luxury
              standard.
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
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-600/80 bg-black/30 px-8 py-4 text-base font-semibold text-neutral-100 hover:border-neutral-400 md:text-lg"
              >
                Call {CONTACT.phoneDisplay}
              </a>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-4">
              <Chip title="Logan (BOS)" desc="Airport-first operations" />
              <Chip title="New England" desc="Major metros + key destinations" />
              <Chip title="NYC" desc="City-to-city transfers" />
              <Chip title="24/7 support" desc="Coordination by appointment" />
            </div>
          </div>
        </div>
      </section>

      {/* New England Coverage (Tabs) */}
      <section className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-24">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold">New England coverage</h2>
              <p className="mt-4 text-neutral-300">
                Select a state to view primary service areas. We cover additional towns as well—if your route isn’t
                listed, call and we’ll confirm.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 rounded-2xl border border-neutral-800/70 bg-neutral-950/40 p-2">
              {STATES.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setActive(s.key)}
                  className={[
                    "rounded-xl px-4 py-2 text-sm font-semibold transition",
                    active === s.key
                      ? "text-neutral-950"
                      : "text-neutral-200 hover:text-white",
                  ].join(" ")}
                  style={
                    active === s.key
                      ? {
                          background:
                            "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                        }
                      : { background: "transparent" }
                  }
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {/* Primary cities */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <div className="text-sm text-neutral-400">Selected state</div>
                    <div className="mt-1 text-2xl font-semibold">
                      {activeState.name}
                    </div>
                  </div>

                  <a
                    href={CONTACT.phoneHref}
                    className="hidden rounded-2xl border border-neutral-700/80 bg-neutral-950/30 px-6 py-3 text-sm font-semibold hover:border-neutral-500 md:inline-flex"
                  >
                    Call for availability
                  </a>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {activeState.primary.map((c) => (
                    <div
                      key={c.name}
                      className="rounded-3xl border border-neutral-800/70 bg-black/20 p-8 hover:border-neutral-600/80"
                    >
                      <div className="text-lg font-semibold">{c.name}</div>
                      <div className="mt-2 text-sm text-neutral-300">
                        {c.subtitle}
                      </div>
                    </div>
                  ))}
                </div>

                {activeState.note ? (
                  <div className="mt-8 rounded-2xl border border-neutral-800/70 bg-black/20 p-6 text-sm text-neutral-300">
                    {activeState.note}
                  </div>
                ) : null}

                {/* More areas (collapsible) */}
                {activeState.more.length ? (
                  <details className="mt-10 rounded-2xl border border-neutral-800/70 bg-black/20 p-6">
                    <summary className="cursor-pointer text-sm font-semibold text-neutral-200">
                      More areas in {activeState.name}
                    </summary>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeState.more.map((m) => (
                        <span
                          key={m}
                          className="rounded-full border border-neutral-800/70 bg-black/25 px-3 py-1 text-xs text-neutral-200"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </details>
                ) : null}
              </div>
            </div>

            {/* Side: City-to-city corridors */}
            <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
              <div className="text-sm text-neutral-400">City-to-city</div>
              <div className="mt-2 text-2xl font-semibold">Popular corridors</div>
              <p className="mt-4 text-sm text-neutral-300">
                These are frequent routes. For custom itineraries, call and we’ll coordinate timing and pickup strategy.
              </p>

              <ul className="mt-7 space-y-2 text-sm text-neutral-300">
                {CORRIDORS.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-300/70" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold text-neutral-950 hover:opacity-95"
                  style={{
                    background:
                      "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                  }}
                >
                  Reserve
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/30 px-6 py-3 font-semibold hover:border-neutral-500"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NYC block */}
      <section className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-semibold">{NYC.title}</h2>
              <p className="mt-4 text-neutral-300">
                We provide city-to-city service between Boston and New York City, including executive travel, events,
                and airport connections upon request.
              </p>

              <ul className="mt-8 space-y-2 text-sm text-neutral-300">
                {NYC.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-300/70" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold text-neutral-950 hover:opacity-95"
                  style={{
                    background:
                      "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                  }}
                >
                  Call for NYC availability
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/30 px-8 py-4 font-semibold hover:border-neutral-500"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-neutral-800/70">
              <div
                className="h-[420px] w-full bg-cover bg-center"
                style={{ backgroundImage: "url(/images/service-area/nyc.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl border border-neutral-700/70 bg-black/45 p-6">
                  <div className="text-sm font-semibold">NYC service</div>
                  <div className="mt-2 text-sm text-neutral-200">
                    City-to-city transfers · VIP coordination · Airport connections upon request
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-2xl font-semibold">Not seeing your route?</div>
                <div className="mt-2 text-neutral-300">
                  Share pickup, dropoff, date/time, and passenger count. We’ll confirm availability and routing.
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

function Chip({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-6">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-neutral-300">{desc}</div>
    </div>
  );
}
