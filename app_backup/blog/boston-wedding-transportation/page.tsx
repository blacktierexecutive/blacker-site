export const metadata = {
  title: "Boston Wedding Transportation Guide | Limo & Guest Shuttles",
  description:
    "Planning wedding transportation in Boston? Learn how to coordinate guest shuttles, limo service, and Sprinter vans for weddings across Greater Boston.",
};

export default function BostonWeddingTransportation() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold">
          Wedding Transportation in Boston: Complete Planning Guide
        </h1>

        <p className="mt-6 text-neutral-300">
          Coordinating transportation for weddings in Boston can be challenging.
          Many couples choose professional transportation services to ensure
          guests arrive safely and on time.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Transportation options for Boston weddings
        </h2>

        <ul className="mt-4 list-disc pl-6 space-y-2 text-neutral-300">
          <li>Luxury limousines for the bridal party</li>
          <li>Sprinter vans for small groups</li>
          <li>Minibuses for guest shuttles</li>
          <li>Executive SUVs for family transportation</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">
          Popular Boston wedding locations
        </h2>

        <p className="mt-4 text-neutral-300">
          Many weddings take place across Greater Boston including Newton,
          Wellesley, Cambridge, Brookline, and coastal areas like Newport.
        </p>

        <p className="mt-10 text-neutral-400">
          Explore our <a href="/services" className="underline">transportation services</a> or view our{" "}
          <a href="/fleet" className="underline">vehicle fleet</a>.
        </p>
      </section>
    </main>
  );
}