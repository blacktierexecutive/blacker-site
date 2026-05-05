"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "Service Area", href: "/service-area" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900/80 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          {/* Logo: compact container (controls header height) */}
          <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-black">
            <img
              src="/images/brand/logo-mark.png"
              alt="BackTier Executives logo"
              className="h-full w-full object-cover scale-110"
            />
          </span>

          {/* Brand text: tighter + cleaner */}
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-neutral-100">
              BackTier Executives
            </span>
            <span className="text-xs text-neutral-400">
              Boston &amp; New England
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/book"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:opacity-95"
            style={{
              background:
                "linear-gradient(135deg, rgb(var(--bt-gold)), rgba(255,255,255,0.95))",
            }}
          >
            Reserve
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-lg border border-neutral-800/80 bg-black/30 p-2 text-neutral-200 md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-neutral-900/80 bg-neutral-950 md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-900 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-xl px-4 py-3 text-center text-sm font-semibold text-neutral-950"
              style={{
                background:
                  "linear-gradient(135deg, (rgb(var(--bt-gold))), rgba(255,255,255,0.95))",
              }}
            >
              Reserve
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}