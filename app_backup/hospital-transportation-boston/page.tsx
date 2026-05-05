export const metadata = {
  title: "Hospital Transportation Boston | Medical & Staff Shuttle Services",
  description:
    "Hospital transportation in Boston for staff shuttles, patient transport coordination and healthcare group mobility using buses and shuttle vehicles.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-semibold mb-6">
        Hospital Transportation in Boston
      </h1>

      <p className="text-lg text-neutral-300 mb-6">
        Healthcare facilities require reliable, structured transportation for
        staff, patients and operational movement. BlackTier Executives provides
        scalable transportation solutions across Boston hospitals and medical
        centers.
      </p>

      <p className="text-neutral-400 mb-10">
        Transportation programs can be designed for recurring schedules,
        shift-based employee movement and large-scale medical operations.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Healthcare transportation use cases
      </h2>

      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-10">
        <li>Hospital staff shuttle programs</li>
        <li>Inter-campus transportation</li>
        <li>Patient coordination transport</li>
        <li>Medical conference mobility</li>
        <li>Emergency overflow support logistics</li>
      </ul>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h3 className="text-xl font-semibold mb-3">
          Need hospital transportation?
        </h3>

        <p className="text-neutral-300 mb-6">
          Share schedule, passenger volume and routes. We’ll design a
          transportation solution.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a href="/contact" className="bg-[#d7aa60] text-black px-6 py-3 rounded-lg">
            Request Hospital Quote
          </a>

          <Link href="/employee-commuter-shuttle-boston" className="underline">
            Employee Shuttle
          </Link>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-neutral-800/70 bg-neutral-950/40 p-8">
  <h3 className="text-2xl font-semibold">
    Related transportation services
  </h3>

  <p className="mt-3 text-neutral-300">
    Explore related airport and group transportation options across Boston.
  </p>

  <div className="mt-6 flex flex-wrap gap-3">
    <Link
      href="/boston-charter-bus"
      className="inline-flex items-center justify-center rounded-xl border border-neutral-700/80 bg-neutral-950/40 px-4 py-2 text-sm font-medium text-neutral-100 hover:border-neutral-500"
    >
      Boston Charter Bus
    </Link>

    <Link
      href="/boston-corporate-shuttle"
      className="inline-flex items-center justify-center rounded-xl border border-neutral-700/80 bg-neutral-950/40 px-4 py-2 text-sm font-medium text-neutral-100 hover:border-neutral-500"
    >
      Boston Corporate Shuttle
    </Link>

    <Link
      href="/boston-minibus-rental"
      className="inline-flex items-center justify-center rounded-xl border border-neutral-700/80 bg-neutral-950/40 px-4 py-2 text-sm font-medium text-neutral-100 hover:border-neutral-500"
    >
      Boston Minibus Rental
    </Link>

    <Link
      href="/motorcoach-rental-boston"
      className="inline-flex items-center justify-center rounded-xl border border-neutral-700/80 bg-neutral-950/40 px-4 py-2 text-sm font-medium text-neutral-100 hover:border-neutral-500"
    >
      Motorcoach Rental Boston
    </Link>

    <Link
      href="/airport-shuttle-boston"
      className="inline-flex items-center justify-center rounded-xl border border-neutral-700/80 bg-neutral-950/40 px-4 py-2 text-sm font-medium text-neutral-100 hover:border-neutral-500"
    >
      Airport Shuttle Boston
    </Link>
  </div>
</div>
    </main>
  );
}