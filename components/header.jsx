"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "Contact", href: "/contact" },
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 px-3 py-3 backdrop-blur-xl sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="rounded-2xl border border-slate-200 bg-white px-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:px-5">
          <div className="flex min-h-[72px] items-center justify-between gap-5">
            {/* Company logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex min-w-0 items-center gap-3"
            >
              <img
                src="/images/power-electrode-logo.png"
                alt="Power Electrode Ltd logo"
                className="h-12 w-12 shrink-0 rounded-xl object-cover"
              />

              <div className="hidden min-w-0 sm:block">
                <p className="truncate text-sm font-extrabold uppercase tracking-[0.08em] text-red-600">
                  Power
                </p>

                <p className="truncate text-sm font-extrabold uppercase tracking-[0.08em] text-[#17375e]">
                  Electrode Ltd
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:bg-orange-50 hover:text-orange-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600"
              >
                Get a Quote
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition-colors hover:bg-orange-50 hover:text-orange-500 lg:hidden"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Mobile and tablet navigation */}
          {menuOpen && (
            <div className="border-t border-slate-200 pb-4 pt-3 lg:hidden">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                >
                  Get a Quote
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
