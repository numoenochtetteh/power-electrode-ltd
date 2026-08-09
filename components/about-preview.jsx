import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
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

const strengths = [
  {
    number: "01",
    title: "Quality",
    description: "Careful and consistent manufacturing",
  },
  {
    number: "02",
    title: "Strength",
    description: "Dependable professional welding results",
  },
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 hidden h-96 w-96 rounded-full bg-orange-100/45 blur-3xl sm:block" />

      <div className="relative mx-auto max-w-7xl">
        {/* Phone heading */}
        <div className="mb-5 text-center sm:hidden">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-2">
            <span className="h-px w-4 bg-orange-500" />

            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-orange-500">
              About Power Electrode Ltd
            </p>
          </div>

          <h2 className="mt-4 text-[1.7rem] font-bold leading-[1.08] tracking-[-0.035em] text-slate-950">
            Powering Stronger Welds
            <span className="block text-orange-500">Across Ghana.</span>
          </h2>
        </div>

        <div className="grid items-center gap-7 md:grid-cols-2 md:gap-14 lg:gap-20">
          {/* Image — displayed last on phones */}
          <div className="relative order-2 sm:order-1">
            {/* Orange shape behind image */}
            <div className="absolute -bottom-5 -right-5 hidden h-[85%] w-[85%] rounded-[30px] bg-orange-100 sm:block" />

            <div className="relative min-h-[420px] overflow-hidden rounded-[18px] border border-white/40 shadow-[0_18px_45px_rgba(15,23,42,0.1)] sm:min-h-[500px] sm:rounded-[24px] md:min-h-[560px]">
              <img
                src="/images/pic1.jpg"
                alt="Power Electrode Ltd welding electrode manufacturing"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/10" />

              {/* Registration badge */}
              <div className="absolute right-4 top-4 rounded-full border border-white/25 bg-black/30 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md sm:right-6 sm:top-6 sm:px-4 sm:text-[10px]">
                Registered April 2025
              </div>

              {/* Image information */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-slate-950/50 p-4 text-white shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:rounded-2xl sm:p-6">
                <div className="mb-2 h-1 w-8 rounded-full bg-orange-500 sm:mb-3 sm:w-10" />

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-xs sm:tracking-[0.22em]">
                  Power Electrode Ltd
                </p>

                <p className="mt-2 max-w-lg text-lg font-bold leading-tight sm:text-2xl">
                  Quality electrodes for stronger, more dependable welds
                </p>
              </div>
            </div>
          </div>

          {/* Content — displayed before video on phones */}
          <div className="order-1 sm:order-2">
            {/* Tablet and laptop heading */}
            <div className="hidden sm:block sm:text-left">
              <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
                <span className="h-px w-5 bg-orange-500" />

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
                  About Power Electrode Ltd
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 lg:text-5xl">
                Powering Stronger Welds
                <span className="block text-orange-500">Across Ghana.</span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Power Electrode Ltd is a Ghanaian welding electrode manufacturer
                committed to supplying reliable products to welders,
                fabricators, contractors and industrial businesses.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                We focus on consistent arc performance, dependable weld strength
                and responsible manufacturing—giving professionals electrodes
                they can trust across different applications.
              </p>
            </div>

            {/* Short phone description */}
            <p className="mx-auto max-w-sm text-center text-[14px] leading-6 text-slate-600 sm:hidden">
              We manufacture reliable welding electrodes for welders,
              fabricators and industrial businesses across Ghana.
            </p>

            {/* Strength cards — hidden on phones */}
            <div className="mt-7 hidden grid-cols-2 gap-4 sm:grid">
              {strengths.map((strength) => (
                <article
                  key={strength.number}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f6f7f9] p-5 transition-all duration-300 hover:border-orange-200 hover:bg-white"
                >
                  <div className="absolute left-0 top-0 h-1 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">
                        {strength.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {strength.description}
                      </p>
                    </div>

                    <span className="shrink-0 text-sm font-bold text-orange-500">
                      {strength.number}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-5 flex flex-col items-center gap-1.5 sm:mt-7 sm:flex-row sm:items-center sm:gap-3">
              <Link
                href="/about"
                className="group inline-flex min-h-9 w-fit items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-2 text-[10px] font-bold text-white transition-colors hover:bg-orange-600 sm:min-h-12 sm:gap-3 sm:px-7 sm:py-3 sm:text-sm"
              >
                More About Us
                <ArrowIcon />
              </Link>

              <Link
                href="/manufacturing"
                className="group inline-flex min-h-9 w-fit items-center justify-center gap-2 px-4 py-2 text-[10px] font-semibold text-slate-700 transition-colors hover:text-orange-500 sm:min-h-12 sm:justify-start sm:py-3 sm:text-sm"
              >
                See How We Manufacture
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
