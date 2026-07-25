"use client";

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
    <section id="about" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
            Our Welding Electrodes
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Engineered for Stronger, More Reliable Welds
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Quality welding electrodes manufactured to deliver strength,
            consistency and dependable performance across industrial,
            construction and fabrication applications.
          </p>
        </div>

        {/* Image and content */}
        <div className="grid items-stretch gap-12 md:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative min-h-[520px] overflow-hidden rounded-[28px] md:min-h-[680px]">
            <img
              src="/images/pic2.jpg"
              alt="High-quality welding electrodes"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Image overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-slate-950/35 p-5 text-white backdrop-blur-md sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
                Built for performance
              </p>

              <p className="mt-2 text-xl font-bold sm:text-2xl">
                Reliable electrodes for professional welding
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Quality You Can Depend On
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
                Welding Electrodes Made for Strength and Consistency
              </h3>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Our welding electrodes are manufactured to support reliable weld
              quality across a wide range of metal fabrication and industrial
              applications. Each product is developed with performance,
              durability and ease of use in mind.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Whether used for construction, maintenance, repairs or general
              fabrication, our electrodes provide stable arc performance and
              dependable results for professional welders and industrial clients
              across Ghana.
            </p>

            {/* Features */}
            <div className="space-y-5 pt-4">
              {electrodeFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
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
                    <p className="font-bold text-foreground">{feature.title}</p>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-3 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600 sm:w-fit"
            >
              Make an Enquiry
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
