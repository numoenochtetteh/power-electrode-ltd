"use client";

import Image from "next/image";
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
    <span className="relative block h-5 w-5">
      <span
        className={`absolute left-1/2 top-[6px] h-[1.5px] w-4 -translate-x-1/2 rounded-full bg-current transition-all duration-300 ${
          open ? "translate-y-[3px] rotate-45" : ""
        }`}
      />

      <span
        className={`absolute left-1/2 top-[10px] h-[1.5px] w-4 -translate-x-1/2 rounded-full bg-current transition-all duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        className={`absolute left-1/2 top-[14px] h-[1.5px] w-4 -translate-x-1/2 rounded-full bg-current transition-all duration-300 ${
          open ? "-translate-y-[5px] -rotate-45" : ""
        }`}
      />
    </span>
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

  /*
   * Every page uses the transparent header while positioned
   * at the top of the page.
   */
  const transparentHeader = !scrolled && !menuOpen;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "px-3 py-2 sm:px-4 sm:py-3"
          : "px-0 py-0 sm:px-4 sm:py-3"
      } lg:px-8 lg:py-3`}
    >
      <nav
        aria-label="Main navigation"
        className={`relative mx-auto transition-all duration-300 lg:max-w-[1240px] lg:rounded-full lg:border lg:border-slate-200/90 lg:bg-white/95 lg:px-3 lg:shadow-[0_8px_30px_rgba(15,23,42,0.08)] lg:backdrop-blur-xl ${
          transparentHeader
            ? "max-w-none border-transparent bg-transparent px-5 shadow-none"
            : "max-w-[calc(100%-0.75rem)] rounded-full border border-slate-200/90 bg-white/95 px-3 shadow-[0_10px_35px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:max-w-[calc(100%-1.5rem)]"
        }`}
      >
        <div
          className={`flex items-center justify-between gap-3 transition-[height] duration-300 ${
            transparentHeader ? "h-[82px]" : "h-[58px]"
          } lg:h-[60px]`}
        >
          {/* Logo and company name */}
          <Link
            href="/"
            aria-label="Power Electrode Ltd home"
            className="flex min-w-0 items-center gap-2.5"
          >
            <div
              className={`flex shrink-0 items-center justify-center overflow-hidden rounded-xl transition-all duration-300 ${
                transparentHeader
                  ? "h-11 w-11 bg-white/95 p-0.5 shadow-lg"
                  : "h-10 w-10 bg-slate-50"
              } lg:h-9 lg:w-9 lg:bg-slate-50 lg:p-0 lg:shadow-none`}
            >
              <Image
                src="/images/power-electrode-logo.png"
                alt="Power Electrode Ltd logo"
                width={48}
                height={48}
                priority
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0 leading-none">
              <p
                className={`truncate text-[10px] font-extrabold uppercase tracking-[0.1em] transition-colors sm:text-[11px] ${
                  transparentHeader ? "text-white" : "text-red-600"
                } lg:text-red-600`}
              >
                Power
              </p>

              <p
                className={`mt-1 truncate text-[10px] font-extrabold uppercase tracking-[0.07em] transition-colors sm:text-[11px] ${
                  transparentHeader ? "text-white/90" : "text-[#17375e]"
                } lg:text-[#17375e]`}
              >
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
                  className={`relative whitespace-nowrap rounded-full px-3.5 py-2 text-[12px] font-semibold transition-colors ${
                    active
                      ? "text-orange-600"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-orange-500 transition-all ${
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
            className="group hidden min-h-10 items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-[12px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-orange-600 lg:inline-flex"
          >
            Request a Quote
            <ArrowIcon />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all lg:hidden ${
              transparentHeader
                ? "border-white/30 bg-black/15 text-white backdrop-blur-md"
                : menuOpen
                  ? "border-orange-200 bg-orange-50 text-orange-600"
                  : "border-slate-200 bg-slate-50 text-slate-900"
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

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-[calc(100%+8px)] origin-top overflow-hidden rounded-[22px] border border-slate-200 bg-white p-2 shadow-[0_20px_55px_rgba(15,23,42,0.18)] transition-all duration-300 lg:hidden ${
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
                  className={`group flex min-h-12 items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold ${
                    active
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.name}</span>

                  <span aria-hidden="true" className="text-slate-400">
                    →
                  </span>
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="group mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white"
          >
            Request a Quote
            <ArrowIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
}
