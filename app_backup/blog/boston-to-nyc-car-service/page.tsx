export const metadata = {
  title: "Boston to NYC Car Service | City-to-City Transportation",
  description:
    "Luxury city-to-city transportation from Boston to New York City. Comfortable long-distance travel for business, events, and private transportation.",
};

export default function BostonToNYCTransportation() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold">
          Boston to New York City Car Service
        </h1>

        <p className="mt-6 text-neutral-300">
          Traveling between Boston and New York City is common for business,
          events, and leisure travel. Many travelers prefer professional car
          services for comfort and reliability.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Why choose a car service instead of flying?
        </h2>

        <ul className="mt-4 list-disc pl-6 space-y-2 text-neutral-300">
          <li>Door-to-door transportation</li>
          <li>No airport security delays</li>
          <li>Comfortable travel environment</li>
          <li>Flexible departure times</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">
          Travel distance and time
        </h2>

        <p className="mt-4 text-neutral-300">
          The distance between Boston and New York City is approximately 215
          miles. Depending on traffic, travel time typically ranges between four
          and five hours.
        </p>

        <p className="mt-10 text-neutral-400">
          Explore our <a href="/services" className="underline">city-to-city transportation services</a>.
        </p>
      </section>
    </main>
  );
}