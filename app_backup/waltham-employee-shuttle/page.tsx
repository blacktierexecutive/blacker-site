import Link from "next/link";

export const metadata = {
  title: "Waltham Employee Shuttle Service | Workforce Transportation",
  description:
    "Professional employee shuttle transportation in Waltham MA. Minibuses, Sprinter vans, and motorcoaches for daily staff commuting and corporate mobility.",
};

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold">
          Waltham Employee Shuttle & Workforce Transport
        </h1>

        <p className="mt-6 text-neutral-300 leading-relaxed">
          BlackTier Executives delivers structured employee shuttle services in
          Waltham for corporate campuses, industrial parks, and growing business
          hubs. Our group transportation solutions improve punctuality,
          efficiency, and employee travel comfort.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Workforce transportation benefits
        </h2>

        <ul className="mt-4 space-y-3 text-neutral-300">
          <li>• Reduce employee commute stress</li>
          <li>• Improve schedule reliability</li>
          <li>• Scalable fleet from vans to motorcoaches</li>
          <li>• Safe and professionally managed routes</li>
          <li>• Flexible pickup hubs across Greater Boston</li>
        </ul>

        <div className="mt-12 rounded-2xl border border-neutral-800 p-8 bg-neutral-900/40">
          <h3 className="text-xl font-semibold">
            Build your shuttle program today
          </h3>

          <p className="mt-3 text-neutral-300">
            Share your employee count and route details. We’ll recommend the
            optimal vehicle mix and transportation schedule.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              href="/fleet"
              className="underline underline-offset-4 hover:text-white"
            >
              View bus & van fleet
            </Link>

            <Link
              href="/contact"
              className="underline underline-offset-4 hover:text-white"
            >
              Request shuttle consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}