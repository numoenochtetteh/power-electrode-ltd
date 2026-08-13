import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Manufacturing Process", href: "/manufacturing" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Welding Electrodes", href: "/products" },
      { name: "Compare Grades", href: "/products#grades" },
      { name: "Bulk Orders", href: "/contact" },
      { name: "Request a Quote", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Product Enquiries", href: "/contact" },
      { name: "Call +233 241 751 355", href: "tel:+233244316183" },
      { name: "WhatsApp +233 20 059 4776", href: "https://wa.me/233200594776" },
      {
        name: "info@powerelectrode.net",
        href: "mailto:info@powerelectrode.net",
      },
      { name: "Get Directions", href: "/contact#location" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", type: "facebook", href: null },
  { name: "Instagram", type: "instagram", href: null },
  { name: "LinkedIn", type: "linkedin", href: null },
  { name: "YouTube", type: "youtube", href: null },
  {
    name: "WhatsApp",
    type: "whatsapp",
    href: "https://wa.me/233200594776",
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

function SocialIcon({ type }) {
  if (type === "facebook") {
    return (
      <path
        d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.5l.5-4h-4V9c0-.7.3-1 1-1Z"
        fill="currentColor"
      />
    );
  }

  if (type === "instagram") {
    return (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </>
    );
  }

  if (type === "linkedin") {
    return (
      <>
        <path
          d="M6 9v10M6 5.5v.1M10.5 19v-6c0-2.2 1.4-3.5 3.4-3.5 2.2 0 3.6 1.4 3.6 4V19M10.5 10v9"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </>
    );
  }

  if (type === "youtube") {
    return (
      <>
        <path
          d="M21 12c0 2.2-.3 4.3-.7 5-.3.8-1 1.4-1.8 1.6-1.4.4-5 .4-6.5.4s-5.1 0-6.5-.4c-.8-.2-1.5-.8-1.8-1.6-.4-.7-.7-2.8-.7-5s.3-4.3.7-5c.3-.8 1-1.4 1.8-1.6C6.9 5 10.5 5 12 5s5.1 0 6.5.4c.8.2 1.5.8 1.8 1.6.4.7.7 2.8.7 5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
      </>
    );
  }

  return (
    <>
      <path
        d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.4-4A8 8 0 1 1 20 11.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.5c.3 2.7 2 4.5 4.8 5.2l1-1.2c.2-.2.5-.3.8-.2l1.7.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#102a4a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Footer callout */}
        <div className="flex flex-col gap-5 border-b border-white/15 py-9 sm:py-11 md:flex-row md:items-center md:justify-between">
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
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-11 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12 lg:py-14">
          {/* Company information */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 sm:h-16 sm:w-16">
                <img
                  src="/images/power-electrode-logo.webp"
                  alt="Power Electrode Ltd logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-base font-extrabold uppercase tracking-[0.08em] text-red-500 sm:text-lg">
                  Power
                </p>

                <p className="text-base font-extrabold uppercase tracking-[0.08em] text-white sm:text-lg">
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

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                Connect With Us
              </p>

              <div className="mt-3 flex flex-wrap gap-2.5">
                {socialLinks.map((social) => {
                  const classes =
                    "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400 hover:bg-orange-500 hover:text-white";

                  const icon = (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-[18px] w-[18px]"
                      aria-hidden="true"
                    >
                      <SocialIcon type={social.type} />
                    </svg>
                  );

                  return social.href ? (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={classes}
                    >
                      {icon}
                    </a>
                  ) : (
                    <span
                      key={social.name}
                      title={`${social.name} link coming soon`}
                      aria-label={`${social.name} link coming soon`}
                      className={`${classes} cursor-default hover:translate-y-0 hover:border-white/15 hover:bg-white/5 hover:text-white/70`}
                    >
                      {icon}
                    </span>
                  );
                })}
              </div>
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
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
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
