export const metadata = {
  title: "Boston Airport Car Service | Logan Airport Transportation",
  description:
    "Professional airport car service in Boston with luxury sedans, SUVs, Sprinter vans and group transportation to and from Logan Airport.",
};

export default function BostonServiceArea() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold">
          Boston Airport Car Service
        </h1>

        <p className="mt-6 text-neutral-300">
          Reliable airport transportation to and from Boston Logan Airport.
          Professional chauffeurs, luxury vehicles, and comfortable travel
          across Greater Boston.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Logan Airport Transportation
        </h2>

        <p className="mt-4 text-neutral-300">
          Travelers frequently choose private car services for airport pickups
          and drop-offs at Logan Airport due to convenience, reliability, and
          professional service.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Areas served from Boston
        </h2>

        <ul className="mt-4 list-disc pl-6 space-y-2 text-neutral-300">
          <li>Cambridge</li>
          <li>Brookline</li>
          <li>Newton</li>
          <li>Waltham</li>
          <li>Wellesley</li>
        </ul>
      </section>
    </main>
  );
}