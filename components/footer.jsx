import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Manufacturing Process", href: "/manufacturing" },
      { name: "Quality Commitment", href: "/about#quality" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Welding Electrodes", href: "/products" },
      { name: "Product Applications", href: "/products#applications" },
      { name: "Bulk Orders", href: "/contact" },
      { name: "Request a Quote", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Product Enquiries", href: "/contact" },
      { name: "Technical Support", href: "/contact" },
      { name: "Delivery Information", href: "/contact" },
      { name: "Frequently Asked Questions", href: "/faq" },
    ],
  },
];

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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#102a4a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Footer callout */}
        <div className="flex flex-col gap-6 border-b border-white/15 py-10 sm:py-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
              Power Your Next Project
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
              Looking for dependable welding electrodes?
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/65 sm:text-base">
              Speak with our team about your welding requirements, product
              enquiries and bulk orders.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-600 sm:w-fit"
          >
            Request a Quote
            <ArrowIcon />
          </Link>
        </div>

        {/* Main footer */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12 lg:py-16">
          {/* Company information */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1">
                <img
                  src="/images/power-electrode-logo.png"
                  alt="Power Electrode Ltd logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-lg font-extrabold uppercase tracking-[0.08em] text-red-500">
                  Power
                </p>

                <p className="text-lg font-extrabold uppercase tracking-[0.08em] text-white">
                  Electrode Ltd
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Manufacturing reliable welding electrodes for welders,
              fabricators, contractors and industrial businesses across Ghana.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 shrink-0 text-orange-400"
                aria-hidden="true"
              >
                <path
                  d="M12 21s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="12"
                  cy="9"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>

              <span className="text-sm font-medium text-white/75">
                Proudly serving customers across Ghana
              </span>
            </div>
          </div>

          {/* Footer navigation */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                {section.title}
              </h3>

              <div className="mt-3 h-0.5 w-8 rounded-full bg-orange-500" />

              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-orange-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-white/30 transition-colors group-hover:bg-orange-400" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/15 py-6 text-center text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {currentYear} Power Electrode Ltd. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end">
            <Link
              href="/privacy"
              className="transition-colors hover:text-orange-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-orange-400"
            >
              Terms &amp; Conditions
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-orange-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
