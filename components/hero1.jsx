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
      <div className="relative mx-auto min-h-[80svh] max-w-[1800px] overflow-hidden bg-slate-950 sm:min-h-[610px] sm:rounded-[28px] lg:min-h-[570px] lg:rounded-[34px]">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[52%_center] sm:object-center"
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

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25 sm:from-black/60" />
        <div className="relative z-10 mx-auto flex min-h-[80svh] max-w-7xl items-center px-5 pb-8 pt-20 sm:min-h-[610px] sm:px-10 sm:pb-11 sm:pt-24 lg:min-h-[570px] lg:px-14 lg:py-12">
          {" "}
          <div className="w-full max-w-3xl -translate-y-10 sm:translate-y-0">
            <p className="inline-flex rounded-full border border-orange-400/40 bg-black/20 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-orange-300 backdrop-blur-sm sm:text-[10px]">
              Power Electrode Ltd
            </p>

            <h1 className="mt-5 max-w-[760px] text-[2.45rem] font-bold leading-[1.01] tracking-[-0.045em] text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)] min-[390px]:text-[2.7rem] sm:text-6xl lg:text-[4.35rem]">
              Manufacturers &amp; Suppliers of
              <span className="mt-1 block text-orange-400">
                Welding Electrodes.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[14px] leading-6 text-white/85 drop-shadow-md min-[390px]:text-[15px] min-[390px]:leading-7 sm:max-w-2xl sm:text-lg sm:leading-8">
              Reliable welding electrodes engineered for stable arc performance,
              dependable strength and consistent results across professional and
              industrial applications.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-7 sm:flex sm:gap-3">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-3 py-3 text-center text-[12px] font-bold text-white shadow-[0_12px_30px_rgba(249,115,22,0.25)] transition-all hover:bg-orange-600 sm:w-fit sm:gap-3 sm:px-7 sm:text-sm"
              >
                Request a Quote
                <ArrowIcon />
              </Link>

              <Link
                href="/products"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-black/15 px-3 py-3 text-center text-[12px] font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#102a4a] sm:w-fit sm:gap-3 sm:px-7 sm:text-sm"
              >
                Explore Products
                <ArrowIcon />
              </Link>
            </div>

            <div className="mt-7 flex items-center gap-3 text-white/65 sm:hidden">
              <span className="h-px flex-1 bg-white/30" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                Engineered in Ghana
              </span>
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
