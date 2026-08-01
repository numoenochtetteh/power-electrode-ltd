"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      {open ? (
        <path
          d="M6 6l12 12M18 6 6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M5 8h14M5 16h14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu when the page changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Slightly reduce the header width after scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the menu when Escape is pressed.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-transparent px-3 py-3 sm:px-5 lg:px-8">
      <nav
        aria-label="Main navigation"
        className={`relative mx-auto border border-slate-200/90 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 ease-out ${
          scrolled
            ? "max-w-[1120px] shadow-[0_12px_35px_rgba(15,23,42,0.12)]"
            : "max-w-[1240px]"
        } rounded-[20px] px-3 sm:px-4 lg:rounded-full lg:px-3`}
      >
        <div className="flex h-[64px] items-center justify-between gap-3 lg:h-[60px]">
          {/* Logo and company name */}
          <Link
            href="/"
            aria-label="Power Electrode Ltd homepage"
            className="flex min-w-0 items-center gap-2.5 lg:pl-1"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50 lg:h-9 lg:w-9">
              <img
                src="/images/power-electrode-logo.png"
                alt="Power Electrode Ltd logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0 leading-none">
              <p className="truncate text-[10px] font-extrabold uppercase tracking-[0.1em] text-red-600 sm:text-[11px]">
                Power
              </p>

              <p className="mt-1 truncate text-[10px] font-extrabold uppercase tracking-[0.07em] text-[#17375e] sm:text-[11px]">
                Electrode Ltd
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative whitespace-nowrap rounded-full px-3.5 py-2 text-[12px] font-semibold transition-colors duration-300 ${
                    active
                      ? "text-orange-600"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-orange-500 transition-all duration-300 ${
                      active ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop quote button */}
          <Link
            href="/contact"
            className="group hidden min-h-10 items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-[12px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 lg:inline-flex"
          >
            Request a Quote
            <ArrowIcon />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${
              menuOpen
                ? "border-orange-200 bg-orange-50 text-orange-600"
                : "border-slate-200 bg-slate-50 text-slate-900 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
            }`}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {/* Mobile and tablet dropdown */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-[calc(100%+10px)] origin-top overflow-hidden rounded-[22px] border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.15)] transition-all duration-300 lg:hidden ${
            menuOpen
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-2 scale-[0.98] opacity-0"
          }`}
        >
          <div className="space-y-1">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group flex min-h-12 items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  <span>{item.name}</span>

                  <span
                    aria-hidden="true"
                    className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="group mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600"
          >
            Request a Quote
            <ArrowIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
}
