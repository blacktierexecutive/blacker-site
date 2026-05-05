export const metadata = {
  title: "Corporate Transportation in Boston | Executive Car Service",
  description:
    "Reliable corporate transportation in Boston for executives, airport transfers, and business travel across New England.",
};

export default function CorporateTransportationBoston() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold">
          Corporate Transportation in Boston for Business Travelers
        </h1>

        <p className="mt-6 text-neutral-300">
          Business travelers often rely on professional transportation services
          to move efficiently between Logan Airport, hotels, meetings, and
          corporate offices.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Why companies use chauffeur services
        </h2>

        <ul className="mt-4 list-disc pl-6 space-y-2 text-neutral-300">
          <li>Punctual airport transfers</li>
          <li>Professional chauffeurs</li>
          <li>Comfortable vehicles for business travel</li>
          <li>Reliable scheduling for executives</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">
          Popular corporate travel routes
        </h2>

        <p className="mt-4 text-neutral-300">
          Boston business travel frequently includes trips between Logan
          Airport, downtown Boston, Cambridge tech hubs, and corporate offices
          throughout Massachusetts.
        </p>

        <p className="mt-10 text-neutral-400">
          Learn more about our <a href="/services" className="underline">chauffeur services</a>.
        </p>
      </section>
    </main>
  );
}