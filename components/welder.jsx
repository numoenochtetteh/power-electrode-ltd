import { LazyVideo } from "@/components/lazy-video";

const electrodeFeatures = [
  {
    icon: "quality",
    title: "Proven Quality",
    description:
      "Carefully produced to deliver dependable professional welding results.",
  },
  {
    icon: "arc",
    title: "Stable Arc",
    description:
      "Designed for smooth ignition and consistent electrode operation.",
  },
  {
    icon: "strength",
    title: "Strong Welds",
    description:
      "Engineered to support strength, durability and reliable performance.",
  },
];

function FeatureIcon({ type }) {
  if (type === "quality") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="m12 3 2.1 1.4 2.5-.2.9 2.3 2.1 1.4-.9 2.1.9 2.1-2.1 1.4-.9 2.3-2.5-.2L12 17l-2.1-1.4-2.5.2-.9-2.3-2.1-1.4.9-2.1-.9-2.1 2.1-1.4.9-2.3 2.5.2L12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        <path
          d="m8.5 10 2.2 2.2 4.8-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "arc") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M13 2 6.5 13H12l-1 9 6.5-12H12l1-8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M4 17h3M17 5l2-2M18 13h3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 3 5 6v5.2c0 4.8 2.9 8.5 7 10.3 4.1-1.8 7-5.5 7-10.3V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="m8.5 12 2.2 2.2 4.8-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Welder() {
  return (
    <section id="electrodes" className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-xs">
            Our Welding Electrodes
          </p>

          <h2 className="mt-3 text-[2rem] font-bold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
            Built for Reliable Performance
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-lg">
            Carefully manufactured electrodes for fabrication, construction,
            maintenance and professional welding applications.
          </p>
        </div>

        {/* Video and content */}
        <div className="grid items-center gap-9 md:grid-cols-2 lg:gap-16">
          {/* Video */}
          <div className="relative h-[380px] overflow-hidden rounded-[22px] bg-slate-950 sm:h-[570px] sm:rounded-[28px] lg:h-[620px]">
            {" "}
            <LazyVideo
              src="/video/vid8.mp4"
              poster="/images/111.webp"
              className="h-full w-full object-cover"
              ariaLabel="Power Electrode Ltd welding electrodes"
            />
            {/* Video overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-black/5 to-transparent" />
            {/* Video information */}
            <div className="absolute bottom-4 left-4 right-4 rounded-[18px] border border-white/20 bg-slate-950/55 p-4 text-white backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-2xl sm:p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                Built for Performance
              </p>

              <p className="mt-2 text-lg font-bold sm:text-xl">
                Reliable electrodes for professional welding
              </p>
            </div>
          </div>

          {/* Right-side content */}
          <div className="flex flex-col justify-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-xs">
                Quality You Can Depend On
              </p>

              <h3 className="mt-3 text-[1.75rem] font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Consistency in Every Electrode
              </h3>
            </div>

            <p className="text-center text-base leading-7 text-slate-600 sm:text-left sm:text-lg sm:leading-8">
              Our welding electrodes are manufactured to support reliable weld
              quality across metal fabrication and industrial applications.
            </p>

            {/* Product features */}
            <div className="grid gap-2.5 pt-1">
              {electrodeFeatures.map((feature, index) => (
                <article
                  key={feature.title}
                  className="group flex items-center gap-3 rounded-xl border border-orange-200 bg-white px-3.5 py-3 shadow-[0_8px_22px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-[0_12px_28px_rgba(15,23,42,0.14)] sm:gap-4 sm:px-4 sm:py-3.5"
                >
                  {/* Feature icon */}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <FeatureIcon type={feature.icon} />
                  </span>

                  {/* Feature text */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-[14px] font-bold leading-5 text-slate-950 sm:text-[15px]">
                        {feature.title}
                      </h4>

                      <span className="shrink-0 text-[9px] font-bold text-orange-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mt-1 text-[12px] leading-[1.55] text-slate-600 sm:text-[13px] sm:leading-5">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <a
              href="/products"
              className="group mt-3 inline-flex min-h-10 w-[70%] max-w-[210px] self-center items-center justify-center gap-2 rounded-full bg-[#102a4a] px-5 py-2.5 text-[11px] font-bold text-white shadow-[0_8px_20px_rgba(16,42,74,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-[0_10px_24px_rgba(249,115,22,0.22)] sm:min-h-12 sm:w-fit sm:max-w-none sm:self-start sm:gap-3 sm:px-7 sm:py-3 sm:text-sm"
            >
              Explore Our Products
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
