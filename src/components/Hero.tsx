"use client";

import { useEffect, useState } from "react";

/**
 * HeroSection — sticky navbar + full hero, in ONE self-contained component.
 *
 * Next.js: copy this file anywhere under your project (e.g. components/HeroSection.tsx)
 * and import it from your page. The "use client" directive is required because
 * of the mobile-menu and scroll state.
 *
 * Dependencies: Tailwind CSS only. No other packages, no icon library, no
 * image assets — the logo is an inline SVG and the background is pure CSS.
 *
 * The section anchors (#services, #pricing, …) assume the sections exist
 * further down the page; update NAV_LINKS to match your own sections.
 */

type NavLink = { label: string; href: string };

const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      {/* Decorative background — pure CSS, no images */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 left-1/2 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-[24rem] w-[24rem] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0)_40%,rgba(2,6,23,0.9))]" />
      </div>

      {/* Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-white/10 bg-slate-950/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-8"
        >
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5" aria-label="Acme home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-400 text-slate-950">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                <path d="M12 2c1 3.5-1.5 5.5-1.5 8a3.5 3.5 0 1 0 7 0c0-1-.3-2-.8-2.8C17 9.5 15 10.5 15 10.5 15 6.5 13 4 12 2Z" strokeLinejoin="round" />
                <path d="M6.5 12.5A5.5 5.5 0 1 0 17 19" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-lg font-bold tracking-tight">Acme</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300"
            >
              Get started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="hero-mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div id="hero-mobile-menu" className="border-t border-white/10 bg-slate-950 md:hidden">
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-100 hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-md bg-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-950"
                >
                  Get started
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero content */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 sm:pb-32 sm:pt-36 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
            New — 2026 platform launch
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Build something people actually want to use
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Acme helps teams ship faster with a toolkit that scales from the first
            prototype to production — without the usual complexity.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300"
            >
              Start your project
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See how it works
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            No credit card required · Free 14-day trial
          </p>
        </div>
      </div>
    </section>
  );
}
