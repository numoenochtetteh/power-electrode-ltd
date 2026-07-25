// export function Hero1() {
//   return (
//     <section className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
//       <div className="relative flex min-h-[600px] items-center justify-center overflow-hidden rounded-[32px] lg:min-h-[680px]">
//         {/* Background image */}
//         <img
//           src="/images/welding-hero.jpg"
//           alt="Welding electrode manufacturing facility"
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-slate-950/45" />

//         {/* Blue gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-blue-950/30" />

//         {/* Hero content */}
//         <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 text-center text-white sm:px-8">
//           <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-orange-400 sm:text-sm">
//             Built for strength. Made in Ghana.
//           </p>

//           <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
//             Manufacturers &amp; Suppliers of Institutional Furniture and Welding
//             Electrodes
//           </h1>

//           <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
//             Serving academic institutions and industrial clients across Ghana
//             with quality manufacturing and reliable delivery.
//           </p>

//           <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
//             <a
//               href="#contact"
//               className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-orange-600 sm:w-auto"
//             >
//               Send an Enquiry
//               <span aria-hidden="true">→</span>
//             </a>

//             <a
//               href="#products"
//               className="inline-flex min-h-14 w-full items-center justify-center rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-950 sm:w-auto"
//             >
//               View Our Products
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M5 12.5l4.2 4L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const highlights = [
  "Made in Ghana",
  "Consistent Performance",
  "Reliable Weld Strength",
];

export function Hero1() {
  return (
    <section className="px-3 pb-6 pt-2 sm:px-5 lg:px-8">
      <div className="relative mx-auto min-h-[590px] max-w-[1800px] overflow-hidden rounded-[26px] bg-[#0b1f38] sm:min-h-[620px] lg:min-h-[650px] lg:rounded-[34px]">
        {/* Background image */}
        <img
          src="/images/welding-hero.jpg"
          alt="Power Electrode Ltd welding electrode manufacturing"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Premium dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a31]/95 via-[#071a31]/80 to-[#071a31]/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071a31]/80 via-transparent to-[#071a31]/25" />

        {/* Orange decorative glow */}
        <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-500/15 blur-3xl" />

        {/* Thin decorative border */}
        <div className="pointer-events-none absolute inset-3 rounded-[20px] border border-white/10 sm:inset-4 lg:rounded-[27px]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl items-center px-6 py-16 sm:min-h-[620px] sm:px-10 lg:min-h-[650px] lg:px-14">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-orange-400" />

              <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-orange-300 sm:text-xs">
                Ghana&apos;s Welding Electrode Manufacturer
              </p>
            </div>

            {/* Main heading */}
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Built for Stronger Welds.
              <span className="mt-1 block text-orange-400">
                Engineered for Performance.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-xl">
              Power Electrode Ltd manufactures dependable welding electrodes for
              professional welders, fabricators, contractors and industrial
              businesses across Ghana.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 sm:w-auto"
              >
                Request a Quote
                <ArrowIcon />
              </a>

              <a
                href="/products"
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#102a4a] sm:w-auto"
              >
                Explore Our Products
                <ArrowIcon />
              </a>
            </div>

            {/* Product highlights */}
            <div className="mt-9 grid max-w-2xl grid-cols-1 gap-3 border-t border-white/20 pt-6 sm:grid-cols-3 sm:gap-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-sm font-medium text-white/80"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                    <CheckIcon />
                  </span>

                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side brand decoration */}
        <div className="pointer-events-none absolute bottom-7 right-8 hidden items-center gap-3 text-white/30 lg:flex">
          <span className="h-px w-16 bg-white/30" />

          <span className="text-xs font-bold uppercase tracking-[0.28em]">
            Power Electrode Ltd
          </span>
        </div>
      </div>
    </section>
  );
}
