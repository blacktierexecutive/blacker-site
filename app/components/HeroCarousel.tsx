"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    image: "/images/hero/hero-1.jpg",
    eyebrow: "Premium Chauffeur Service · Boston & New England",
    title: "Luxury that commands presence.",
    subtitle:
      "Executive transportation for Logan (BOS), corporate travel, weddings, and private events are delivered with precision and discretion.",
  },
  {
    image: "/images/hero/hero-2.jpg",
    eyebrow: "Airport Transfers · Logan (BOS)",
    title: "Arrive composed. Always on time.",
    subtitle:
      "Flight tracking, buffer planning, and smooth pickups, built for real schedules.",
  },
  {
    image: "/images/hero/hero-3.jpg",
    eyebrow: "Corporate Travel · Discreet & Reliable",
    title: "Corporate travel without friction.",
    subtitle:
      "Professional chauffeurs, quiet comfort, and consistent execution for executives and teams.",
  },
  {
    image: "/images/hero/hero-4.jpg",
    eyebrow: "Weddings & Private Events",
    title: "Events executed flawlessly.",
    subtitle:
      "Polished arrivals, tight timelines, and premium coordination without chaos.",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      />

      {/* Luxury overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(215,170,96,0.22),transparent_45%)]" />

      {/* Content */}
      <div className="relative flex min-h-[92vh] items-center px-6">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-neutral-700/80 bg-black/40 px-4 py-1 text-xs text-neutral-200">
              {slide.eyebrow}
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              {slide.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-200 md:text-lg">
              {slide.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold text-neutral-950 md:text-lg hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(215 170 96), rgba(255,255,255,0.95))",
                }}
              >
                Reserve Now
              </Link>

              {/* <a
                href="tel:+10000000000"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-600/80 bg-black/30 px-8 py-4 text-base font-semibold text-neutral-100 hover:border-neutral-400 md:text-lg"
              >
                Call Now
              </a> */}
            </div>

            {/* Slide dots */}
            <div className="mt-10 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full border transition ${
                    i === index
                      ? "border-neutral-200 bg-neutral-200"
                      : "border-neutral-600 bg-neutral-600/40 hover:border-neutral-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent" />
    </section>
  );
}
