"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CONTACT } from "../lib/contact";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  pickup: string;
  dropoff: string;
  notes: string;
};

const SERVICES = [
  "Airport Transfers (Logan BOS)",
  "Corporate / Executive Travel",
  "Hourly Chauffeur",
  "City-to-City (New England + NYC)",
  "Weddings",
  "Events / Concerts / Sports",
  "Prom / School Events",
  "Group Transportation (Sprinter)",
  "Point-to-Point",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: SERVICES[0],
    date: "",
    pickup: "",
    dropoff: "",
    notes: "",
  });

  const message = useMemo(() => {
    const lines = [
      `BackTier Executives Request`,
      ``,
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Email: ${form.email || "-"}`,
      `Service: ${form.service || "-"}`,
      `Date/Time: ${form.date || "-"}`,
      `Pickup: ${form.pickup || "-"}`,
      `Dropoff: ${form.dropoff || "-"}`,
      `Notes: ${form.notes || "-"}`,
    ];
    return lines.join("\n");
  }, [form]);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(message);
      alert("Copied request details to clipboard.");
    } catch {
      alert("Could not copy. Please select and copy manually.");
    }
  }

  function validate(): string | null {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.phone.trim()) return "Please enter your phone number.";
    if (!form.pickup.trim()) return "Please enter pickup location.";
    return null;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) return alert(err);

    setBusy(true);
    await new Promise((r) => setTimeout(r, 400));
    setBusy(false);
    setSubmitted(true);
  }

  return (
    <main className="bg-neutral-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-900/80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/contact/contact-hero.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(215,170,96,0.22),transparent_45%)]" />

        <div className="relative px-6 py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1600px]">
            <p className="inline-flex items-center rounded-full border border-neutral-700/80 bg-black/40 px-4 py-1 text-xs text-neutral-200">
              BackTier Executives · Contact
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Let’s coordinate your ride.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-200 md:text-lg">
              Premium transportation across Boston, New England, and NYC routes. Executed with discretion, timing
              discipline, and a clean standard.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {/* <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold text-neutral-950 md:text-lg hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                }}
              >
                Call {CONTACT.phoneDisplay}
              </a> */}

              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-600/80 bg-black/30 px-8 py-4 text-base font-semibold text-neutral-100 hover:border-neutral-400 md:text-lg"
              >
                Reserve Online
              </Link>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-4">
              <InfoChip title="Service area" desc="Boston · New England · NYC" />
              <InfoChip title="24/7 support" desc="Phone coordination anytime" />
              <InfoChip title="VIP service" desc="White glove handling + discretion" />
              <InfoChip title="Child seats" desc="Available upon request" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-neutral-900/80">
        <div className="mx-auto max-w-[1600px] px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left: Contact cards */}
            <div className="space-y-6">
              <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
                <h2 className="text-3xl font-semibold">Direct contact</h2>
                <p className="mt-3 text-neutral-300">
                  Fastest path to confirmation is a phone call, especially for airport timing, groups, weddings,
                  and high priority schedules. We support coordination 24/7 by appointment.
                </p>

                <div className="mt-8 grid gap-4">
                  <ContactRow label="Phone (24/7)" value={CONTACT.phoneDisplay} href={CONTACT.phoneHref} />
                  <ContactRow label="Email" value={CONTACT.email} href={CONTACT.emailHref} />
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  {/* <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold text-neutral-950 hover:opacity-95"
                    style={{
                      background:
                        "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                    }}
                  >
                    Call Now
                  </a> */}
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/30 px-8 py-4 font-semibold hover:border-neutral-500"
                  >
                    View Services
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
                <h3 className="text-2xl font-semibold">Want the brand story + reviews?</h3>
                <p className="mt-3 text-neutral-300">
                  See what clients value most and how we deliver a luxury experience across Boston and New England.
                </p>
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/30 px-8 py-4 font-semibold hover:border-neutral-500"
                  >
                    About + Reviews
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-10">
              <h2 className="text-3xl font-semibold">Request details</h2>
              <p className="mt-3 text-neutral-300">
                This is a quick request builder. 
              </p>

              {!submitted ? (
                <form onSubmit={onSubmit} className="mt-10 space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Name*" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                    <Field label="Phone*" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Email (optional)" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                    <Select
                      label="Service"
                      value={form.service}
                      options={SERVICES}
                      onChange={(v) => setForm({ ...form, service: v })}
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field
                      label="Date / Time (optional)"
                      placeholder="e.g. Jan 12, 7:30 PM"
                      value={form.date}
                      onChange={(v) => setForm({ ...form, date: v })}
                    />
                    <Field
                      label="Pickup location*"
                      placeholder="Address / airport / hotel"
                      value={form.pickup}
                      onChange={(v) => setForm({ ...form, pickup: v })}
                    />
                  </div>

                  <Field
                    label="Dropoff location (optional)"
                    placeholder="Address / venue / hotel"
                    value={form.dropoff}
                    onChange={(v) => setForm({ ...form, dropoff: v })}
                  />

                  <Textarea
                    label="Notes (optional)"
                    placeholder="Passengers, luggage, child seat, timing notes, etc."
                    value={form.notes}
                    onChange={(v) => setForm({ ...form, notes: v })}
                  />

                  <div className="pt-2">
                    <button
                      disabled={busy}
                      className="w-full rounded-2xl px-8 py-4 text-base font-semibold text-neutral-950 hover:opacity-95 disabled:opacity-70"
                      style={{
                        background:
                          "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                      }}
                    >
                      {busy ? "Submitting..." : "Submit Request"}
                    </button>
                    <p className="mt-3 text-xs text-neutral-400">
                      No automation yet. This generates a clean summary for phone coordination.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="mt-10">
                  <div className="rounded-3xl border border-neutral-800/70 bg-black/25 p-8">
                    <div className="text-xl font-semibold">Request generated.</div>
                    <p className="mt-2 text-neutral-300">
                      Next step: call us and share the details, or copy the summary below.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={CONTACT.phoneHref}
                        className="inline-flex flex-1 items-center justify-center rounded-2xl px-6 py-3 font-semibold text-neutral-950 hover:opacity-95"
                        style={{
                          background:
                            "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
                        }}
                      >
                        Call Now
                      </a>
                      <button
                        onClick={copyToClipboard}
                        className="inline-flex flex-1 items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/30 px-6 py-3 font-semibold hover:border-neutral-500"
                      >
                        Copy Summary
                      </button>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: "",
                            phone: "",
                            email: "",
                            service: SERVICES[0],
                            date: "",
                            pickup: "",
                            dropoff: "",
                            notes: "",
                          });
                        }}
                        className="inline-flex flex-1 items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/30 px-6 py-3 font-semibold hover:border-neutral-500"
                      >
                        New Request
                      </button>
                    </div>

                    <pre className="mt-8 whitespace-pre-wrap rounded-2xl border border-neutral-800/70 bg-black/30 p-6 text-xs text-neutral-200">
{message}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoChip({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-6">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-neutral-300">{desc}</div>
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-800/70 bg-neutral-950/30 p-5">
      <div>
        <div className="text-xs text-neutral-400">{label}</div>
        <div className="mt-1 font-semibold">{value}</div>
      </div>
      <a
        href={href}
        className="rounded-xl border border-neutral-700/80 bg-neutral-950/30 px-4 py-2 text-sm font-semibold hover:border-neutral-500"
      >
        Open
      </a>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <div className="text-xs text-neutral-400">{label}</div>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-neutral-800/70 bg-black/25 px-4 py-3 text-sm text-neutral-100 outline-none placeholder:text-neutral-500 focus:border-neutral-600"
      />
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <div className="text-xs text-neutral-400">{label}</div>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        className="mt-2 w-full rounded-2xl border border-neutral-800/70 bg-black/25 px-4 py-3 text-sm text-neutral-100 outline-none placeholder:text-neutral-500 focus:border-neutral-600"
      />
    </label>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <div className="text-xs text-neutral-400">{label}</div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-neutral-800/70 bg-black/25 px-4 py-3 text-sm text-neutral-100 outline-none focus:border-neutral-600"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
