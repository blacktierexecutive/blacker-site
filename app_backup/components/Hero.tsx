import Link from "next/link";

export default function Hero({
  title,
  subtitle,
  image,
  primaryCtaHref = "/book",
  primaryCtaText = "Reserve Now",
  secondaryCtaHref = "tel:+10000000000",
  secondaryCtaText = "Call Now",
}: {
  title: string;
  subtitle: string;
  image: string;
  primaryCtaHref?: string;
  primaryCtaText?: string;
  secondaryCtaHref?: string;
  secondaryCtaText?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-neutral-900/80">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/65 to-neutral-950/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(215,170,96,0.18),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-neutral-800/80 bg-neutral-950/50 px-3 py-1 text-xs text-neutral-200">
            Boston & New England
            <span className="h-1 w-1 rounded-full bg-neutral-500" />
            Executive Chauffeur
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            {title}
          </h1>

          <p className="mt-4 text-neutral-200/90 md:text-lg">{subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold text-neutral-950 hover:opacity-95"
              style={{
                background:
                  "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
              }}
            >
              {primaryCtaText}
            </Link>

            <a
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/40 px-5 py-3 font-semibold text-neutral-100 hover:border-neutral-500"
            >
              {secondaryCtaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
