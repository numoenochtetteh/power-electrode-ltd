// import Link from "next/link";

// const highlights = [
//   "Made in Ghana",
//   "Consistent Arc",
//   "Reliable Weld Strength",
// ];

// function ArrowIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//       aria-hidden="true"
//     >
//       <path
//         d="M5 12h14M13 6l6 6-6 6"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function CheckIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
//       <path
//         d="M5 12.5l4.2 4L19 7"
//         stroke="currentColor"
//         strokeWidth="2.4"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// export function Hero1() {
//   return (
//     <section className="px-3 pb-6 pt-2 sm:px-5 lg:px-8">
//       <div className="relative mx-auto min-h-[640px] max-w-[1800px] overflow-hidden rounded-[26px] bg-black sm:min-h-[620px] lg:min-h-[560px] lg:rounded-[34px]">
//         {/* Background video */}
//         <video
//           className="absolute inset-0 h-full w-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="metadata"
//           poster="/images/welding-hero.jpg"
//         >
//           <source src="/video/vid2.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Neutral overlays */}
//         <div className="absolute inset-0 bg-black/5" />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

//         {/* Orange glow */}
//         <div className="pointer-events-none absolute -left-28 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />

//         {/* Hero content */}
//         <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl flex-col justify-center px-6 py-12 sm:min-h-[620px] sm:px-10 lg:min-h-[560px] lg:px-14 lg:py-10">
//           {/* Top labels */}
//           <div className="flex flex-wrap gap-2">
//             {/* <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md sm:text-xs">
//               Power Electrode Ltd
//             </span> */}

//             <span className="rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-300 backdrop-blur-md sm:text-xs">
//               Power Electrode Ltd
//             </span>
//           </div>

//           {/* Main content */}
//           <div className="mt-7 grid items-end gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
//             <div>
//               <h1 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-6xl">
//                 Manufacturers & Suppliers of
//                 <span className="block text-orange-400">
//                   Welding Electrodes.
//                 </span>
//               </h1>
//             </div>

//             <div className="max-w-xl lg:pb-1">
//               <p className="text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
//                 Welding electrodes engineered for stable arc performance,
//                 dependable strength and consistent results across professional
//                 fabrication and industrial applications.
//               </p>

//               <div className="mt-5 flex flex-col gap-3 sm:flex-row">
//                 <Link
//                   href="/contact"
//                   className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 sm:w-fit"
//                 >
//                   Request a Quote
//                   <ArrowIcon />
//                 </Link>

//                 <Link
//                   href="/products"
//                   className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#102a4a] sm:w-fit"
//                 >
//                   Explore Products
//                   <ArrowIcon />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Highlights */}
//           <div className="mt-8 border-t border-white/20 pt-5">
//             <div className="grid gap-3 sm:grid-cols-3 sm:gap-6">
//               {highlights.map((highlight) => (
//                 <div
//                   key={highlight}
//                   className="flex items-center gap-3 text-sm font-medium text-white/80"
//                 >
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-orange-400/30 bg-orange-500/15 text-orange-400">
//                     <CheckIcon />
//                   </span>

//                   <span>{highlight}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom brand */}

//         <div className="pointer-events-none absolute bottom-5 right-7 hidden items-center gap-3 text-white/30 lg:flex">
//           <span className="h-px w-14 bg-white/30" />

//           <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
//             Engineered for Performance
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }
import Link from "next/link";

const highlights = [
  "Made in Ghana",
  "Consistent Arc",
  "Reliable Weld Strength",
];

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

export function Hero1() {
  return (
    <section className="px-3 pb-6 pt-2 sm:px-5 lg:px-8">
      <div className="relative mx-auto min-h-[640px] max-w-[1800px] overflow-hidden rounded-[26px] bg-black sm:min-h-[620px] lg:min-h-[560px] lg:rounded-[34px]">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/welding-hero.jpg"
        >
          <source src="/video/vid2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Neutral dark overlays */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/15" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

        {/* Orange glow */}
        <div className="pointer-events-none absolute -left-28 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl flex-col justify-center px-6 py-12 sm:min-h-[620px] sm:px-10 lg:min-h-[560px] lg:px-14 lg:py-10">
          {/* Company label */}
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-orange-400/40 bg-black/35 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-orange-300 backdrop-blur-md sm:text-[10px]">
              Power Electrode Ltd
            </span>
          </div>

          {/* Main content */}
          <div className="mt-7 grid items-end gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            {/* Heading */}
            <div>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] sm:text-5xl md:text-6xl lg:text-6xl">
                Manufacturers &amp; Suppliers of
                <span className="block text-orange-400">
                  Welding Electrodes.
                </span>
              </h1>
            </div>

            {/* Description and buttons */}
            <div className="max-w-xl lg:pb-1">
              <p className="text-base leading-7 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-lg sm:leading-8">
                Welding electrodes engineered for stable arc performance,
                dependable strength and consistent results across professional
                fabrication and industrial applications.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 sm:w-fit"
                >
                  Request a Quote
                  <ArrowIcon />
                </Link>

                <Link
                  href="/products"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-white/40 bg-black/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#102a4a] sm:w-fit"
                >
                  Explore Products
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-8 border-t border-white/30 pt-5">
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-6">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 text-sm font-semibold text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-orange-400/40 bg-black/25 text-orange-400">
                    <CheckIcon />
                  </span>

                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom brand */}
        <div className="pointer-events-none absolute bottom-5 right-7 hidden items-center gap-3 text-white/45 lg:flex">
          <span className="h-px w-14 bg-white/40" />

          <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
            Engineered for Performance
          </span>
        </div>
      </div>
    </section>
  );
}
