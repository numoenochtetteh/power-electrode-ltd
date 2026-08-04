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

export function Hero1() {
  return (
    <section className="bg-white p-0 sm:px-5 sm:pb-7 sm:pt-1 lg:px-8">
      <div className="relative mx-auto min-h-[100svh] max-w-[1800px] overflow-hidden bg-slate-950 sm:min-h-[610px] sm:rounded-[28px] lg:min-h-[570px] lg:rounded-[34px]">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover object-[44%_center] sm:object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/welding-heroo.png"
          aria-label="Welder working with industrial equipment"
        >
          <source src="/video/vid3.mp4" type="video/mp4" />
        </video>

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/5" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25 sm:from-black/60" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-6 pt-28 sm:min-h-[610px] sm:px-10 sm:py-12 lg:min-h-[570px] lg:px-14">
          <div className="w-full max-w-3xl">
            {/* Company label */}
            <p className="inline-flex rounded-full border border-orange-400/40 bg-black/25 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.18em] text-orange-300 backdrop-blur-sm sm:px-3.5 sm:text-[10px]">
              Power Electrode Ltd
            </p>

            {/* Main heading */}
            <h1 className="mt-4 max-w-[760px] text-[clamp(2.15rem,10.5vw,2.75rem)] font-bold leading-[1.02] tracking-[-0.045em] text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)] sm:mt-5 sm:text-6xl lg:text-[4.35rem]">
              Manufacturers &amp; Suppliers of
              <span className="mt-1 block text-orange-400">
                Welding Electrodes.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-[14px] leading-6 text-white/85 drop-shadow-md sm:mt-5 sm:max-w-2xl sm:text-lg sm:leading-8">
              Reliable welding electrodes engineered for stable arc performance,
              dependable strength and consistent results across professional and
              industrial applications.
            </p>

            {/* Buttons */}
            <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-7 sm:flex sm:gap-3">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-2 py-3 text-center text-[11px] font-bold text-white shadow-[0_12px_30px_rgba(249,115,22,0.25)] transition-all hover:bg-orange-600 sm:w-fit sm:gap-3 sm:px-7 sm:text-sm"
              >
                Request a Quote
                <ArrowIcon />
              </Link>

              <Link
                href="/products"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-black/15 px-2 py-3 text-center text-[11px] font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#102a4a] sm:w-fit sm:gap-3 sm:px-7 sm:text-sm"
              >
                Explore Products
                <ArrowIcon />
              </Link>
            </div>

            {/* Mobile bottom detail */}
            <div className="mt-5 flex items-center gap-3 text-white/65 sm:hidden">
              <span className="h-px flex-1 bg-white/30" />

              <span className="shrink-0 text-[8px] font-bold uppercase tracking-[0.18em]">
                Engineered in Ghana
              </span>
            </div>
          </div>
        </div>

        {/* Desktop detail */}
        <div className="pointer-events-none absolute bottom-6 right-8 hidden items-center gap-3 text-white/45 lg:flex">
          <span className="h-px w-12 bg-white/40" />

          <span className="text-[10px] font-bold uppercase tracking-[0.24em]">
            Engineered for Performance
          </span>
        </div>
      </div>
    </section>
  );
}
