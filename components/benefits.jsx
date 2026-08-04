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
    icon: "quality",
    title: "Proven Quality",
    description:
      "Carefully produced to deliver dependable professional welding results.",
    href: "/manufacturing",
  },
  {
    icon: "arc",
    title: "Stable Arc",
    description:
      "Designed for smooth ignition and consistent electrode operation.",
    href: "/products",
  },
  {
    icon: "strength",
    title: "Strong Welds",
    description:
      "Engineered to support strength, durability and reliable performance.",
    href: "/products",
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
        className="h-16 w-16"
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

  if (type === "quality") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="h-16 w-16"
        aria-hidden="true"
      >
        <path
          d="m32 8 6 4 7-.5 2.5 6.5 6 4-2.5 6 2.5 6-6 4-2.5 6.5-7-.5-6 4-6-4-7 .5-2.5-6.5-6-4 2.5-6-2.5-6 6-4 2.5-6.5 7 .5 6-4Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <path
          d="m23 31 6 6 12-13"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "arc") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="h-16 w-16"
        aria-hidden="true"
      >
        <path
          d="M35 6 17 34h15l-3 24 18-31H33l2-21Z"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M12 48h8m25-34 5-5M49 31h8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "strength") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="h-16 w-16"
        aria-hidden="true"
      >
        <path
          d="M32 7 13 15v14c0 13 7.8 23 19 28 11.2-5 19-15 19-28V15L32 7Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <path
          d="m22 31 7 7 14-15"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "delivery") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="h-16 w-16"
        aria-hidden="true"
      >
        <path
          d="M7 15h32v31H7V15Zm32 12h9l9 10v9H39V27Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <path
          d="M19 54a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm27 0a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />

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
      className="h-16 w-16"
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
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
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
            Dependable electrodes developed for consistent professional and
            industrial welding performance.
          </p>
        </div>

        {/* Benefits cards */}
        <div className="grid justify-items-center gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-9">
          {advantages.map((advantage) => (
            <article
              key={advantage.title}
              className="group w-full max-w-[250px] overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.13)] sm:max-w-[320px] lg:max-w-[350px]"
            >
              {/* Reduced navy visual area */}
              <div className="relative flex h-[120px] items-center justify-center overflow-hidden bg-[#102a4a] text-orange-400 sm:h-[155px] lg:h-[170px]">
                {/* Decorative circle */}
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full border border-white/10" />

                {/* Decorative circle */}
                <div className="absolute -bottom-12 -left-12 h-28 w-28 rounded-full border border-white/10" />

                {/* Feature icon */}
                <div className="relative scale-[0.68] transition-transform duration-300 group-hover:scale-[0.74] sm:scale-[0.78] sm:group-hover:scale-[0.84]">
                  <FeatureIcon type={advantage.icon} />
                </div>
              </div>

              {/* White content area */}
              <div className="flex min-h-[190px] flex-col items-center px-5 py-6 text-center sm:min-h-[220px] sm:px-7 lg:min-h-[235px]">
                <h3 className="text-[13px] font-extrabold uppercase leading-5 tracking-[-0.025em] text-[#102a4a] sm:text-base">
                  {advantage.title}
                </h3>

                <p className="mt-3 max-w-[250px] text-[11px] leading-[1.6] text-slate-600 sm:text-sm sm:leading-6">
                  {advantage.description}
                </p>

                <Link
                  href={advantage.href}
                  className="group/link mt-auto inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-orange-300 px-5 py-2 text-[11px] font-bold text-[#102a4a] transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white sm:text-xs"
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
