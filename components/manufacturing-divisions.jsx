function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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

export function ManufacturingDivisions() {
  return (
    <section
      id="manufacturing"
      className="overflow-hidden bg-[#f7f8fa] px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
            <span className="h-px w-5 bg-orange-500" />

            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-xs">
              Our Manufacturing Process
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How Our Welding Electrodes Are Made
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            From material preparation to final packaging, every stage of our
            manufacturing process is focused on producing strong, consistent and
            dependable welding electrodes.
          </p>

          {/* About page button */}
          <a
            href="/about"
            className="group mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600 sm:w-fit"
          >
            Learn More About Our Process
            <ArrowIcon />
          </a>
        </div>

        {/* Manufacturing video */}
        <div className="relative overflow-hidden rounded-[24px] bg-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.18)] sm:rounded-[32px]">
          <video
            className="h-[280px] w-full object-cover sm:h-[340px] md:h-[400px] lg:h-[600px]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/video/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

          {/* Video information */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5 text-white sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
              Power Electrode Ltd
            </p>

            <h3 className="mt-2 max-w-2xl text-xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Precision at Every Stage of Production
            </h3>

            <p className="mt-2 hidden max-w-xl text-sm leading-6 text-white/75 sm:block sm:text-base">
              A carefully managed manufacturing process designed to deliver
              dependable welding electrodes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
