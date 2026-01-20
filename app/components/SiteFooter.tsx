import Link from "next/link";

const EMAIL = "blacktierexecutive@gmail.com";

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-900/80 bg-neutral-950">
      <div className="mx-auto max-w-[1600px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-black">
                <img
                  src="/images/brand/logo-mark.png"
                  alt="BackTier Executives logo"
                  className="h-full w-full object-cover"
                />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-neutral-100">
                  BackTier Executives
                </div>
                <div className="text-xs text-neutral-400">Boston &amp; New England</div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm text-neutral-400">
              Premium chauffeur and executive transportation across Boston and New
              England, including city-to-city service to New York.
            </p>

            <div className="mt-6 text-sm text-neutral-300">
              <div className="flex items-center justify-between gap-3">
                <span className="text-neutral-400">Email</span>
                <a
                  className="underline text-neutral-200 hover:text-white"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </div>
              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="text-neutral-400">Phone</span>
                <span className="text-neutral-300">Coming soon</span>
              </div>
              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="text-neutral-400">Support</span>
                <span className="text-neutral-300">24/7 (email-based)</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-100">Explore</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <Link className="text-neutral-300 hover:text-white" href="/services">
                Services
              </Link>
              <Link className="text-neutral-300 hover:text-white" href="/fleet">
                Fleet
              </Link>
              <Link className="text-neutral-300 hover:text-white" href="/service-area">
                Service Area
              </Link>
              <Link className="text-neutral-300 hover:text-white" href="/contact">
                Contact
              </Link>
              <Link className="text-neutral-300 hover:text-white" href="/book">
                Reserve
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-100">
              Get a quote 
            </h3>
            <p className="mt-4 text-sm text-neutral-400">
              For now, all quotes and confirmations are handled via email. Phone
              support is coming soon.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  "Quote Request - BackTier Executives"
                )}&body=${encodeURIComponent(
                  "Hi BackTier Executives,\n\nPlease send me a quote. Here are my trip details:\nDate:\nTime::\n\nPickup:\nDropoff\nPassengers:\nVehicle preference:\nNotes:\n\nThank you!,"
                )}`}
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-neutral-950 hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                }}
              >
                Get a Quote (Email)
              </a>

              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-6 py-3 text-sm font-semibold hover:border-neutral-500"
              >
                Reserve (Sedan/SUV)
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-neutral-900/80 pt-8 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} BackTier Executives. All rights reserved.</div>
          <div>Boston • New England • New York City-to-City</div>
        </div>
      </div>
    </footer>
  );
}