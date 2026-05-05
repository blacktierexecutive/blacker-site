import Link from "next/link";

export const metadata = {
  title: "Boston Minibus Rental | Group Transportation & Shuttle Service",
  description:
    "Premium Boston minibus rental for corporate events, airport transfers, weddings, and group travel. Comfortable, professional group transportation across Greater Boston.",
};

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold">
          Boston Minibus Rental & Group Transportation
        </h1>

        <p className="mt-6 text-neutral-300 leading-relaxed">
          BlackTier Executives provides premium minibus rental services in Boston
          for corporate teams, airport transfers, private events, and large group
          transportation. Our minibuses are ideal for moving groups efficiently
          across the city while maintaining executive-level comfort.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          When to book a Boston minibus
        </h2>

        <ul className="mt-4 space-y-3 text-neutral-300">
          <li>• Logan Airport group pickups and drop-offs</li>
          <li>• Corporate off-sites and conferences</li>
          <li>• Wedding guest transportation</li>
          <li>• City-to-city shuttle service</li>
          <li>• School and university transportation</li>
        </ul>

        <div className="mt-12 rounded-2xl border border-neutral-800 p-8 bg-neutral-900/40">
          <h3 className="text-xl font-semibold">
            Need a quote for group transportation?
          </h3>

          <p className="mt-3 text-neutral-300">
            Email us your passenger count, route, and timing. We’ll recommend the
            right vehicle and confirm pricing quickly.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              href="/fleet"
              className="underline underline-offset-4 hover:text-white"
            >
              View fleet options
            </Link>

            <Link
              href="/service-area"
              className="underline underline-offset-4 hover:text-white"
            >
              Service coverage areas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}