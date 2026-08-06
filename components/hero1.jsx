import Link from "next/link";

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

export function Hero1() {
  return (
    <section className="relative min-h-[620px] w-full overflow-hidden bg-slate-950 sm:min-h-[680px] lg:min-h-[720px]">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/vid3.mp4" type="video/mp4" />
      </video>

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-7xl items-end px-5 pb-12 pt-32 sm:min-h-[680px] sm:items-center sm:px-8 sm:pb-16 sm:pt-32 lg:min-h-[720px] lg:px-12 lg:pb-20 lg:pt-36 xl:px-6">
        <div className="w-full max-w-4xl">
          {/* Company label */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-orange-400/40 bg-black/25 px-3.5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-300 sm:text-[10px]">
              Power Electrode Ltd
            </p>
          </div>

          {/* Main heading */}
          <h1 className="mt-5 max-w-[900px] text-[2.55rem] font-bold leading-[1.02] tracking-[-0.045em] text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-[4.5rem] xl:text-[4.8rem]">
            Manufacturers &amp; Suppliers of
            <span className="mt-1 block text-orange-400">
              Welding Electrodes.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/85 drop-shadow-md sm:text-lg sm:leading-8">
            Reliable welding electrodes engineered for stable arc performance,
            dependable strength and consistent results across professional and
            industrial applications.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="group inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-3.5 text-center text-sm font-bold text-white shadow-[0_12px_30px_rgba(249,115,22,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 sm:w-fit"
            >
              Request a Quote
              <ArrowIcon />
            </Link>

            <Link
              href="/products"
              className="group inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full border border-white/40 bg-black/20 px-7 py-3.5 text-center text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#102a4a] sm:w-fit"
            >
              Explore Products
              <ArrowIcon />
            </Link>
          </div>

          {/* Mobile detail */}
          <div className="mt-8 flex items-center gap-3 text-white/60 sm:hidden">
            <span className="h-px flex-1 bg-white/30" />

            <span className="shrink-0 text-[8px] font-bold uppercase tracking-[0.2em]">
              Engineered in Ghana
            </span>
          </div>
        </div>
      </div>

      {/* Desktop detail */}
      <div className="pointer-events-none absolute bottom-9 right-10 hidden items-center gap-3 text-white/45 lg:flex">
        <span className="h-px w-14 bg-white/40" />

        <span className="text-[9px] font-bold uppercase tracking-[0.24em]">
          Engineered for Performance
        </span>
      </div>
    </section>
  );
}
