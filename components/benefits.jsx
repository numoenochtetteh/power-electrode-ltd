import Link from "next/link";

const advantages = [
  {
    icon: "factory",
    title: "Local Manufacturing",
    description:
      "Manufactured in Ghana with carefully controlled production standards.",
    href: "/manufacturing",
  },
  {
    icon: "delivery",
    title: "Reliable Supply",
    description:
      "Securely packaged and prepared for safe, dependable delivery.",
    href: "/contact",
  },
  {
    icon: "support",
    title: "Product Support",
    description:
      "Practical assistance when selecting electrodes for your application.",
    href: "/contact",
  },
];

function FeatureIcon({ type }) {
  if (type === "factory") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="h-12 w-12"
        aria-hidden="true"
      >
        <path
          d="M10 52V24l15 8V20l15 8V12h12v40H10Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <path
          d="M17 52V40h9v12m8 0V40h9v12M47 19h5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <path
          d="M16 35h4m10 0h4m12 0h4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "delivery") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="h-12 w-12"
        aria-hidden="true"
      >
        <path
          d="M7 15h32v31H7V15Zm32 12h9l9 10v9H39V27Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <circle cx="19" cy="47" r="7" stroke="currentColor" strokeWidth="2.5" />

        <circle cx="47" cy="47" r="7" stroke="currentColor" strokeWidth="2.5" />

        <path
          d="M13 23h18M7 32h21"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className="h-12 w-12"
      aria-hidden="true"
    >
      <path
        d="M12 35v-7a20 20 0 0 1 40 0v7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M12 32h8v18h-5a3 3 0 0 1-3-3V32Zm40 0h-8v18h5a3 3 0 0 0 3-3V32Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <path
        d="M44 51c-2 5-6 7-12 7h-4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle cx="25" cy="58" r="2.5" fill="currentColor" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
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

export function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-[#f6f7f9] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
            <span className="h-px w-5 bg-orange-500" />

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-[10px]">
              Why Power Electrode Ltd
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-[#102a4a] sm:text-4xl">
            What Sets Our
            <span className="block text-orange-500">Electrodes Apart</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Local manufacturing, reliable supply and practical support for
            professional welding requirements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid justify-items-center gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {advantages.map((advantage) => (
            <article
              key={advantage.title}
              className="group w-full max-w-[280px] overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.09)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)] sm:max-w-[250px] md:max-w-[290px] lg:max-w-[320px]"
            >
              {/* Tall navy visual area */}
              <div className="relative flex h-36 items-center justify-center overflow-hidden bg-[#102a4a] text-orange-400 sm:h-40 lg:h-44">
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full border border-white/10" />

                <div className="absolute -bottom-12 -left-12 h-28 w-28 rounded-full border border-white/10" />

                <div className="relative transition-transform duration-300 group-hover:scale-105">
                  <FeatureIcon type={advantage.icon} />
                </div>
              </div>

              {/* White content area */}
              <div className="flex min-h-[165px] flex-col items-center px-4 py-5 text-center sm:min-h-[180px] sm:px-5 sm:py-6 lg:min-h-[195px]">
                <h3 className="text-[12px] font-extrabold leading-4 text-[#102a4a] sm:text-sm lg:text-base">
                  {advantage.title}
                </h3>

                <p className="mt-3 max-w-[240px] text-[10px] leading-[1.5] text-slate-600 sm:text-xs sm:leading-5 lg:text-[13px]">
                  {advantage.description}
                </p>

                <Link
                  href={advantage.href}
                  className="group/link mt-auto inline-flex min-h-9 items-center justify-center gap-2 rounded-full border border-orange-300 px-4 py-2 text-[10px] font-bold text-[#102a4a] transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white sm:text-[11px]"
                >
                  Learn More
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
