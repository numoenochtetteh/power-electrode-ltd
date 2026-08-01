const electrodeFeatures = [
  {
    title: "Consistent Arc Performance",
    description: "Designed to provide smooth ignition and stable welding.",
  },
  {
    title: "Strong and Reliable Welds",
    description: "Manufactured for dependable strength and durability.",
  },
  {
    title: "Quality Manufacturing",
    description: "Produced with careful quality and performance standards.",
  },
];

export function Welder() {
  return (
    <section id="electrodes" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-xs">
            Our Welding Electrodes
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
            Built for Reliable Performance
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-lg">
            Carefully manufactured electrodes for fabrication, construction,
            maintenance and professional welding applications.
          </p>
        </div>

        {/* Image and content */}
        <div className="grid items-center gap-9 md:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative min-h-[360px] overflow-hidden rounded-[26px] sm:min-h-[460px] md:min-h-[560px]">
            <img
              src="/images/pic1.jpg"
              alt="High-quality welding electrodes"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-slate-950/45 p-4 text-white backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                Built for Performance
              </p>

              <p className="mt-2 text-lg font-bold sm:text-xl">
                Reliable electrodes for professional welding
              </p>
            </div>
          </div>

          {/* Right-side content */}
          <div className="flex flex-col justify-center gap-5">
            {/* Centred only on phones */}
            <div className="text-center sm:text-left">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-xs">
                Quality You Can Depend On
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Consistency in Every Electrode
              </h3>
            </div>

            <p className="text-center text-base leading-7 text-slate-600 sm:text-left sm:text-lg sm:leading-8">
              Our welding electrodes are manufactured to support reliable weld
              quality across a wide range of metal fabrication and industrial
              applications, with performance and ease of use in mind.
            </p>

            {/* Product features */}
            <div className="space-y-3 pt-1">
              {electrodeFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-3.5 rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5l4.2 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">{feature.title}</p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/products"
              className="mt-2 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#102a4a] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-500 sm:w-fit"
            >
              Explore Our Products
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
