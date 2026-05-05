import Link from "next/link";

export const metadata = {
  title: "Boston Bus Rentals, Corporate Shuttles & Group Transportation",
  description:
    "Charter buses, corporate shuttles, airport transfers, minibuses, and motorcoaches across Boston, Cambridge, and New England.",
};

export default function ServicesPage() {
  return (
    <main className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-24">

        <h1 className="text-4xl font-semibold">
          Boston Group Transportation Services
        </h1>

        <p className="mt-4 max-w-3xl text-neutral-300">
          Premium charter buses, corporate shuttles, airport transportation, and
          group travel services across Boston and New England.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card href="/boston-charter-bus" title="Boston Charter Bus" />
          <Card href="/boston-corporate-shuttle" title="Corporate Shuttle Boston" />
          <Card href="/airport-shuttle-boston" title="Airport Shuttle Boston" />
          <Card href="/boston-minibus-rental" title="Minibus Rental Boston" />
          <Card href="/motorcoach-rental-boston" title="Motorcoach Rental Boston" />
          <Card href="/sprinter-van-boston" title="Sprinter Van Boston" />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Corporate Transportation</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Inline href="/corporate-bus-rental-boston" label="Corporate Bus Rental" />
            <Inline href="/employee-commuter-shuttle-boston" label="Employee Shuttle" />
            <Inline href="/cambridge-corporate-shuttle" label="Cambridge Corporate Shuttle" />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Event Transportation</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Inline href="/event-bus-rental-boston" label="Event Bus Rental" />
            <Inline href="/wedding-shuttle-boston" label="Wedding Shuttle" />
            <Inline href="/hotel-shuttle-boston" label="Hotel Shuttle" />
          </div>
        </div>

      </div>
    </main>
  );
}

function Card({ href, title }) {
  return (
    <Link href={href} className="border border-neutral-800 p-6 rounded-xl hover:border-neutral-600">
      {title}
    </Link>
  );
}

function Inline({ href, label }) {
  return (
    <Link href={href} className="border border-neutral-800 px-4 py-2 rounded-full text-sm">
      {label}
    </Link>
  );
}
