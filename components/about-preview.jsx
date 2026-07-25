import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Image */}
          <div className="relative min-h-[440px] overflow-hidden rounded-[28px] sm:min-h-[520px] md:min-h-[620px]">
            <img
              src="/images/pic2.jpg"
              alt="Welding electrodes manufactured by Power Electrode Ltd"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-slate-950/40 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
                Power Electrode Ltd
              </p>

              <p className="mt-2 text-xl font-bold sm:text-2xl">
                Quality electrodes for stronger, more dependable welds
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
              <span className="h-px w-5 bg-orange-500" />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
                About Us
              </p>
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              Powering Stronger Welds Across Ghana
            </h2>

            <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Power Electrode Ltd is a welding electrode manufacturer committed
              to supplying reliable products to welders, fabricators,
              contractors and industrial businesses.
            </p>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              We focus on consistent arc performance, dependable weld strength
              and quality manufacturing. Our goal is to support professionals
              with electrodes they can trust across different welding
              applications.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-muted/30 p-4 sm:p-5">
                <p className="text-xl font-bold text-orange-500 sm:text-2xl">
                  Quality
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Consistent manufacturing
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-muted/30 p-4 sm:p-5">
                <p className="text-xl font-bold text-orange-500 sm:text-2xl">
                  Strength
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Dependable welding results
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600 sm:w-fit"
            >
              More About Us
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
