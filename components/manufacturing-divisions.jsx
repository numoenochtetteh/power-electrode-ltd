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
      className="overflow-hidden bg-[#f6f7f9] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
            <span className="h-px w-5 bg-orange-500" />

            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-xs">
              Our Manufacturing Process
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
            How Our Welding Electrodes Are Made
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-lg">
            From material preparation to final packaging, every stage of our
            manufacturing process is focused on producing strong, consistent and
            dependable welding electrodes.
          </p>

          {/* About page button */}
          <a
            href="/manufacturing"
            className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600 sm:w-fit"
          >
            Learn More About Our Process
            <ArrowIcon />
          </a>
        </div>

        {/* Manufacturing video */}
        <div className="relative overflow-hidden rounded-[24px] bg-slate-950 shadow-[0_18px_50px_rgba(15,23,42,0.14)] sm:rounded-[30px]">
          <video
            className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[480px]"
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

            <h3 className="mt-2 max-w-2xl text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
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
