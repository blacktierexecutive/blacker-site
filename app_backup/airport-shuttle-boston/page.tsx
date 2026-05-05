export const metadata = {
  title: "Airport Shuttle Boston | Group Airport Transportation",
  description:
    "Premium airport shuttle service in Boston for groups, corporate teams, and events. Charter buses, minibuses, and sprinter vans available for Logan Airport transfers.",
};

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-semibold mb-6">
        Airport Shuttle Service in Boston
      </h1>

      <p className="text-lg text-neutral-300 mb-6">
        Our Boston airport shuttle service provides reliable group
        transportation to and from Logan Airport. Ideal for corporate teams,
        conferences, tour groups, and private travel, our fleet includes luxury
        charter buses, minibuses, and executive sprinter vans.
      </p>

      <p className="text-neutral-400 mb-10">
        We coordinate airport pickups, flight tracking, luggage handling time,
        and efficient routing to ensure smooth transportation across Boston,
        Cambridge, Waltham, Newton, and surrounding areas.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Boston Airport Transportation Options
      </h2>

      <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-10">
        <li>Charter buses for large group airport transfers</li>
        <li>Minibus rentals for corporate team arrivals</li>
        <li>Sprinter vans for executive airport travel</li>
        <li>Hotel and convention center shuttle coordination</li>
      </ul>

      <div className="mt-12">
        <a
          href="/contact"
          className="bg-[#d7aa60] text-black px-6 py-3 rounded-lg font-medium"
        >
          Request Airport Shuttle Quote
        </a>
      </div>
    </main>
  );
}