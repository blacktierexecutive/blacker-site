"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CONTACT } from "../lib/contact";

type FleetHeroProps = {
  images: string[];
};

export default function FleetHero({ images }: FleetHeroProps) {
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden border-b border-neutral-900/80">
      {/* Rotating images (cross-fade) */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <div
            key={src}
            className={[
              "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
              i === index ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(215,170,96,0.22),transparent_45%)]" />

      <div className="relative px-6 py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1600px]">
          <p className="inline-flex items-center rounded-full border border-neutral-700/80 bg-black/40 px-4 py-1 text-xs text-neutral-200">
            BackTier Executives · Fleet
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
            Executive rides. Event logistics. Group transportation.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-200 md:text-lg">
           Sedans and SUVs are available for immediate booking. For 8+ passenger vehicles, pricing is customized based on schedule, staging, and service requirements, please request a quote for rapid confirmation.
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
              Reserve (Sedan/SUV)
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-600/80 bg-black/30 px-8 py-4 text-base font-semibold text-neutral-100 hover:border-neutral-400 md:text-lg"
            >
              Request a Quote 
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <Chip title="New England + NYC" desc="City-to-city ready" />
            <Chip title="24/7 agent support" desc="Call anytime" />
            <Chip title="VIP service" desc="White-glove coordination" />
            <Chip title="Groups" desc="Sprinter to motor coach" />
          </div>

          {/* Optional small hint on slide rotation */}
          {slides.length > 1 ? (
            <div className="mt-8 text-xs text-neutral-400">
              Viewing: <span className="text-neutral-200">Fleet highlights</span>
            </div>
          ) : null}
        </div>
      </div>
    </section>
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
