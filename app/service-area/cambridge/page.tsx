export const metadata = {
  title: "Cambridge Chauffeur Service | Luxury Transportation",
  description:
    "Professional chauffeur service in Cambridge MA with airport transfers, corporate transportation, and luxury vehicles.",
};

export default function CambridgeServiceArea() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold">
          Cambridge Chauffeur Service
        </h1>

        <p className="mt-6 text-neutral-300">
          Private transportation services throughout Cambridge including
          Harvard Square, Kendall Square, and MIT areas.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Corporate travel
        </h2>

        <p className="mt-4 text-neutral-300">
          Many business travelers rely on professional transportation services
          for meetings, airport travel, and executive transportation in
          Cambridge.
        </p>
      </section>
    </main>
  );
}