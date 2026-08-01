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
    <section className="bg-white px-3 pb-5 pt-1 sm:px-5 sm:pb-7 lg:px-8">
      <div className="relative mx-auto min-h-[590px] max-w-[1800px] overflow-hidden rounded-[28px] bg-slate-950 sm:min-h-[610px] lg:min-h-[570px] lg:rounded-[34px]">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[54%_center] sm:object-center"
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

        {/* Neutral overlays keep the copy readable without hiding the footage. */}
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/38 to-black/10 lg:from-black/75 lg:via-black/35 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl items-end px-6 py-8 sm:min-h-[610px] sm:px-10 sm:py-11 lg:min-h-[570px] lg:items-center lg:px-14 lg:py-12">
          <div className="w-full max-w-3xl">
            <p className="inline-flex rounded-full border border-orange-400/40 bg-black/25 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-orange-300 backdrop-blur-sm sm:text-[10px]">
              Power Electrode Ltd
            </p>

            <h1 className="mt-5 max-w-[760px] text-[2.55rem] font-bold leading-[0.98] tracking-[-0.045em] text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-[4.35rem]">
              Manufacturers &amp; Suppliers of
              <span className="mt-1 block text-orange-400">
                Welding Electrodes.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/85 drop-shadow-md sm:text-lg sm:leading-8">
              Reliable welding electrodes engineered for stable arc performance,
              dependable strength and consistent results across professional and
              industrial applications.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(249,115,22,0.25)] transition-all hover:-translate-y-0.5 hover:bg-orange-600 sm:w-fit"
              >
                Request a Quote
                <ArrowIcon />
              </Link>

              <Link
                href="/products"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-white/40 bg-black/15 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#102a4a] sm:w-fit"
              >
                Explore Products
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 right-8 hidden items-center gap-3 text-white/45 lg:flex">
          <span className="h-px w-12 bg-white/40" />
          <span className="text-[10px] font-bold uppercase tracking-[0.24em]">
            Engineered for performance
          </span>
        </div>
      </div>
    </section>
  );
}
