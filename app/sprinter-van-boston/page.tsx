export const metadata = {
  title: "Sprinter Van Rental Boston | Group Transportation & Airport Transfers",
  description:
    "Luxury Sprinter van rental in Boston for airport transfers, corporate travel, weddings, and group transportation. Premium chauffeur service across New England.",
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-neutral-950 px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">
        Sprinter Van Rental in Boston
      </h1>

      <p className="text-neutral-300 mb-6">
        BlackTier Executives provides premium Sprinter van transportation in Boston
        designed for airport groups, corporate teams, weddings, and private events.
        Our executive vans are ideal for travelers who need spacious seating,
        luggage capacity, and professional chauffeur service.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Ideal for Group Airport Transfers
      </h2>

      <p className="text-neutral-300">
        Traveling to Logan Airport with family or colleagues? Our Sprinter vans
        eliminate the stress of coordinating multiple vehicles. Enjoy direct pickup,
        flight tracking, and comfortable seating for up to 12 passengers.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Corporate & Event Transportation
      </h2>

      <p className="text-neutral-300">
        Businesses across Boston trust our Sprinter van service for conferences,
        executive travel, and VIP guest movement. Our chauffeurs maintain punctuality,
        discretion, and a luxury presentation at every stop.
      </p>

      <div className="mt-12 flex gap-4">
        <Link
          href="/book"
          className="px-6 py-3 rounded-xl font-semibold text-black"
          style={{
            background:
              "linear-gradient(135deg, rgb(var(--bt-gold)), white)",
          }}
        >
          Reserve Sprinter
        </Link>

        <a
          href="mailto:blacktierexecutive@gmail.com"
          className="border border-neutral-600 px-6 py-3 rounded-xl"
        >
          Request Quote
        </a>
      </div>
    </main>
  );
}