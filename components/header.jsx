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

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white px-3 py-2.5 sm:px-5 sm:py-3 lg:px-8">
      <nav
        className="mx-auto max-w-[1300px] rounded-[20px] border border-slate-200/90 bg-white px-3 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:px-4 lg:rounded-2xl lg:px-5"
        aria-label="Main navigation"
      >
        <div className="flex h-[66px] items-center justify-between gap-3 sm:h-[72px]">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <img
              src="/images/power-electrode-logo.png"
              alt="Power Electrode Ltd"
              className="h-11 w-11 shrink-0 rounded-xl object-cover sm:h-12 sm:w-12"
            />

            <div className="min-w-0 leading-none">
              <p className="truncate text-[11px] font-extrabold uppercase tracking-[0.09em] text-red-600 sm:text-sm">
                Power
              </p>
              <p className="mt-1 truncate text-[11px] font-extrabold uppercase tracking-[0.07em] text-[#17375e] sm:text-sm">
                Electrode Ltd
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="hidden min-h-11 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600 lg:inline-flex"
          >
            Get a Quote
            <span aria-hidden="true">→</span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-900 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 lg:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-slate-200 pb-3 pt-2">
              {navigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold ${
                      active
                        ? "bg-orange-50 text-orange-600"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                    <span aria-hidden="true" className="text-slate-400">
                      →
                    </span>
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className="mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white"
              >
                Request a Quote
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
