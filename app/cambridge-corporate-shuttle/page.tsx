import Link from "next/link";

export const metadata = {
  title: "Cambridge Corporate Shuttle Service | Employee & Executive Transport",
  description:
    "Reliable corporate shuttle service in Cambridge MA. Executive vans, minibuses, and motorcoaches for employee transportation, tech offices, and business travel.",
};

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold">
          Cambridge Corporate Shuttle Transportation
        </h1>

        <p className="mt-6 text-neutral-300 leading-relaxed">
          Our Cambridge corporate shuttle solutions are designed for technology
          firms, financial institutions, research teams, and growing startups
          requiring structured daily transportation. We provide scalable group
          mobility with premium comfort and professional chauffeurs.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Ideal shuttle use cases
        </h2>

        <ul className="mt-4 space-y-3 text-neutral-300">
          <li>• Employee commute shuttle programs</li>
          <li>• Office relocation transportation</li>
          <li>• Conference and event logistics</li>
          <li>• Airport group transfers to Logan (BOS)</li>
          <li>• Multi-stop executive roadshows</li>
        </ul>

        <div className="mt-12 rounded-2xl border border-neutral-800 p-8 bg-neutral-900/40">
          <h3 className="text-xl font-semibold">
            Plan your corporate shuttle route
          </h3>

          <p className="mt-3 text-neutral-300">
            Contact our team to design a custom shuttle schedule tailored to your
            company’s workforce mobility requirements.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              href="/fleet"
              className="underline underline-offset-4 hover:text-white"
            >
              Corporate vehicle options
            </Link>

            <Link
              href="/services"
              className="underline underline-offset-4 hover:text-white"
            >
              Transportation services overview
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}