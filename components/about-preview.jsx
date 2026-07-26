// import Link from "next/link";

// export function AboutPreview() {
//   return (
//     <section className="bg-background px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
//           {/* Image */}
//           <div className="relative min-h-[440px] overflow-hidden rounded-[28px] sm:min-h-[520px] md:min-h-[620px]">
//             <img
//               src="/images/pic3.jpg"
//               alt="Welding electrodes manufactured by Power Electrode Ltd"
//               className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

//             <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-slate-950/40 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7">
//               <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
//                 Power Electrode Ltd
//               </p>

//               <p className="mt-2 text-xl font-bold sm:text-2xl">
//                 Quality electrodes for stronger, more dependable welds
//               </p>
//             </div>
//           </div>

//           {/* Content */}
//           <div>
//             <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
//               <span className="h-px w-5 bg-orange-500" />

//               <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
//                 About Us
//               </p>
//             </div>

//             <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.1]">
//               Powering Stronger Welds Across Ghana
//             </h2>

//             <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
//               Power Electrode Ltd is a welding electrode manufacturer committed
//               to supplying reliable products to welders, fabricators,
//               contractors and industrial businesses.
//             </p>

//             <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
//               We focus on consistent arc performance, dependable weld strength
//               and quality manufacturing. Our goal is to support professionals
//               with electrodes they can trust across different welding
//               applications.
//             </p>

//             <div className="mt-8 grid grid-cols-2 gap-4">
//               <div className="rounded-2xl border border-slate-200 bg-muted/30 p-4 sm:p-5">
//                 <p className="text-xl font-bold text-orange-500 sm:text-2xl">
//                   Quality
//                 </p>
//                 <p className="mt-1 text-sm text-muted-foreground">
//                   Consistent manufacturing
//                 </p>
//               </div>

//               <div className="rounded-2xl border border-slate-200 bg-muted/30 p-4 sm:p-5">
//                 <p className="text-xl font-bold text-orange-500 sm:text-2xl">
//                   Strength
//                 </p>
//                 <p className="mt-1 text-sm text-muted-foreground">
//                   Dependable welding results
//                 </p>
//               </div>
//             </div>

//             <Link
//               href="/about"
//               className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600 sm:w-fit"
//             >
//               More About Us
//               <span aria-hidden="true">→</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
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

const strengths = [
  {
    number: "01",
    title: "Quality",
    description: "Careful and consistent manufacturing",
  },
  {
    number: "02",
    title: "Strength",
    description: "Dependable professional welding results",
  },
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-100/45 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-14 lg:gap-20">
          {/* Image column */}
          <div className="relative">
            {/* Orange shape behind image */}
            <div className="absolute -bottom-4 -right-4 h-[85%] w-[85%] rounded-[30px] bg-orange-100 sm:-bottom-5 sm:-right-5" />

            <div className="relative min-h-[480px] overflow-hidden rounded-[28px] border border-white/40 shadow-[0_25px_70px_rgba(15,23,42,0.14)] sm:min-h-[560px] md:min-h-[610px]">
              <img
                src="/images/pic3.jpg"
                alt="Welding electrodes manufactured by Power Electrode Ltd"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/10" />

              {/* Registration badge */}
              <div className="absolute right-5 top-5 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:right-6 sm:top-6">
                Registered April 2025
              </div>

              {/* Image information */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-slate-950/45 p-5 text-white shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <div className="mb-3 h-1 w-10 rounded-full bg-orange-500" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-400 sm:text-xs">
                  Power Electrode Ltd
                </p>

                <p className="mt-2 max-w-lg text-xl font-bold leading-tight sm:text-2xl">
                  Quality electrodes for stronger, more dependable welds
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
              <span className="h-px w-5 bg-orange-500" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-xs">
                About Power Electrode Ltd
              </p>
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              Powering Stronger Welds
              <span className="block text-orange-500">Across Ghana.</span>
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Power Electrode Ltd is a Ghanaian welding electrode manufacturer
              committed to supplying reliable products to welders, fabricators,
              contractors and industrial businesses.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We focus on consistent arc performance, dependable weld strength
              and responsible manufacturing—giving professionals electrodes they
              can trust across different applications.
            </p>

            {/* Strength cards */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div
                  key={strength.number}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8fa] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-lg"
                >
                  <div className="absolute left-0 top-0 h-1 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xl font-bold text-slate-900 sm:text-2xl">
                        {strength.title}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {strength.description}
                      </p>
                    </div>

                    <span className="text-sm font-bold text-orange-500">
                      {strength.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/about"
                className="group inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 sm:w-fit"
              >
                More About Us
                <ArrowIcon />
              </Link>

              <Link
                href="/manufacturing"
                className="group inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold text-slate-700 transition-colors hover:text-orange-500 sm:justify-start"
              >
                See How We Manufacture
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
