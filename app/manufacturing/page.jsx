// import Link from "next/link";
// import { Footer } from "@/components/footer";
// import { Header } from "@/components/header";

// export const metadata = {
//   title: "Manufacturing Process | Power Electrode Ltd",
//   description:
//     "Explore how Power Electrode Ltd manufactures welding electrodes, from material preparation through inspection and packaging.",
// };

// const processSteps = [
//   {
//     number: "01",
//     title: "Raw Material Selection",
//     description:
//       "The manufacturing process begins with the careful selection of core wire and coating materials required for electrode production.",
//     detail:
//       "Materials are reviewed before production to support product consistency and dependable welding performance.",
//   },
//   {
//     number: "02",
//     title: "Core Wire Preparation",
//     description:
//       "Metal core wire is straightened, cleaned and cut into the required electrode lengths.",
//     detail:
//       "Proper wire preparation helps create a consistent foundation for the coating and finishing stages.",
//   },
//   {
//     number: "03",
//     title: "Coating Mixture Preparation",
//     description:
//       "Selected coating materials are measured and blended to produce the mixture used around the electrode core.",
//     detail:
//       "The coating supports arc behaviour, weld protection and consistent electrode operation.",
//   },
//   {
//     number: "04",
//     title: "Electrode Coating",
//     description:
//       "The prepared core wires are evenly coated through a controlled application process.",
//     detail:
//       "Careful coating helps maintain a consistent electrode shape and dependable performance during welding.",
//   },
//   {
//     number: "05",
//     title: "Drying and Finishing",
//     description:
//       "The coated electrodes are dried and finished under controlled conditions before final inspection.",
//     detail:
//       "This stage helps improve coating durability, product handling and storage quality.",
//   },
//   {
//     number: "06",
//     title: "Inspection and Packaging",
//     description:
//       "Finished electrodes are checked and securely packaged in preparation for storage and distribution.",
//     detail:
//       "Packaging helps protect the finished product from damage and unnecessary moisture exposure.",
//   },
// ];

// const qualityPoints = [
//   {
//     title: "Material Checks",
//     description:
//       "Production materials are reviewed before entering the manufacturing process.",
//   },
//   {
//     title: "Process Control",
//     description:
//       "Each production stage is managed to support consistent electrode quality.",
//   },
//   {
//     title: "Product Inspection",
//     description:
//       "Finished electrodes are examined before approval and packaging.",
//   },
//   {
//     title: "Protected Packaging",
//     description:
//       "Products are packaged to support safe handling, storage and distribution.",
//   },
// ];

// const capabilities = [
//   "Core wire preparation",
//   "Electrode coating",
//   "Controlled drying",
//   "Product finishing",
//   "Quality inspection",
//   "Secure packaging",
//   "Bulk-order preparation",
//   "Distribution support",
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

// export default function ManufacturingPage() {
//   return (
//     <main className="min-h-screen bg-white">
//       <Header />

//       {/* Video hero */}
//       <section className="px-3 pb-0 pt-2 sm:px-5 lg:px-8">
//         <div className="relative mx-auto min-h-[500px] max-w-[1800px] overflow-hidden rounded-[26px] bg-[#071a31] sm:min-h-[540px] lg:min-h-[580px] lg:rounded-[34px]">
//           <video
//             className="absolute inset-0 h-full w-full object-cover"
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="metadata"
//             poster="/images/frame1.jpg"
//           >
//             <source src="/video/vid1.mp4" type="video/mp4" />
//           </video>

//           <div className="absolute inset-0 bg-gradient-to-r from-[#071a31]/95 via-[#071a31]/80 to-[#071a31]/35" />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#071a31]/75 via-transparent to-[#071a31]/20" />

//           <div className="pointer-events-none absolute inset-3 rounded-[20px] border border-white/10 sm:inset-4 lg:rounded-[27px]" />

//           <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-16 sm:min-h-[540px] sm:px-10 lg:min-h-[580px] lg:px-14">
//             <div className="max-w-3xl">
//               <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 backdrop-blur-sm">
//                 <span className="h-2 w-2 rounded-full bg-orange-400" />

//                 <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-orange-300 sm:text-xs">
//                   Power Electrode Ltd Manufacturing
//                 </p>
//               </div>

//               <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
//                 Precision at Every Stage of Production
//               </h1>

//               <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
//                 Discover the carefully managed process behind our welding
//                 electrodes—from material preparation and coating to final
//                 inspection and packaging.
//               </p>

//               <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                 <a
//                   href="#process"
//                   className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition-colors hover:bg-orange-600 sm:w-fit"
//                 >
//                   Explore Our Process
//                   <ArrowIcon />
//                 </a>

//                 <Link
//                   href="/contact"
//                   className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-white/35 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#102a4a] sm:w-fit"
//                 >
//                   Request a Quote
//                   <ArrowIcon />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="pointer-events-none absolute bottom-7 right-8 hidden items-center gap-3 text-white/35 lg:flex">
//             <span className="h-px w-16 bg-white/30" />

//             <span className="text-xs font-bold uppercase tracking-[0.25em]">
//               Made in Ghana
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Overview strip */}
//       <section className="bg-white px-4 py-8 shadow-[0_12px_35px_rgba(15,23,42,0.06)] sm:px-6 lg:px-8">
//         <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {[
//             ["06", "Production Stages"],
//             ["01", "Controlled Process"],
//             ["100%", "Electrode Focused"],
//             ["GH", "Local Manufacturing"],
//           ].map(([value, label]) => (
//             <div key={label} className="flex items-center gap-4">
//               <span className="flex h-12 min-w-12 items-center justify-center rounded-xl bg-orange-50 px-3 text-sm font-bold text-orange-500">
//                 {value}
//               </span>

//               <div>
//                 <p className="font-bold text-slate-900">{label}</p>
//                 <p className="mt-1 text-sm text-slate-500">
//                   Power Electrode Ltd
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Manufacturing introduction */}
//       <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
//         <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
//           <div>
//             <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
//               <span className="h-px w-5 bg-orange-500" />

//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
//                 How We Manufacture
//               </p>
//             </div>

//             <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
//               From Raw Material to Finished Electrode
//             </h2>

//             <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
//               Welding electrode manufacturing requires careful preparation,
//               consistent processing and attention throughout every stage of
//               production.
//             </p>

//             <p className="mt-5 leading-7 text-slate-600">
//               At Power Electrode Ltd, our process brings together prepared core
//               wire and electrode coating materials to create finished products
//               designed for dependable welding performance.
//             </p>

//             <p className="mt-5 leading-7 text-slate-600">
//               From initial material handling through drying, inspection and
//               packaging, each stage contributes to the quality and consistency
//               of the final product.
//             </p>
//           </div>

//           <div className="relative min-h-[440px] overflow-hidden rounded-[28px] sm:min-h-[540px]">
//             <img
//               src="/images/pic2.jpg"
//               alt="Power Electrode Ltd electrode manufacturing"
//               className="absolute inset-0 h-full w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#071a31]/80 via-transparent to-transparent" />

//             <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#071a31]/50 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
//                 Our Production Focus
//               </p>

//               <p className="mt-2 text-xl font-bold sm:text-2xl">
//                 Consistency, reliability and careful product finishing
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Process steps */}
//       <section
//         id="process"
//         className="scroll-mt-28 bg-[#f7f8fa] px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
//       >
//         <div className="mx-auto max-w-7xl">
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
//               Step by Step
//             </p>

//             <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
//               Our Electrode Manufacturing Process
//             </h2>

//             <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
//               Each stage plays an important role in transforming prepared
//               materials into finished welding electrodes.
//             </p>
//           </div>

//           <div className="mt-12 space-y-5">
//             {processSteps.map((step, index) => (
//               <article
//                 key={step.number}
//                 className="group grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-orange-200 hover:shadow-lg md:grid-cols-[160px_1fr]"
//               >
//                 <div className="flex items-center justify-between bg-[#102a4a] p-6 text-white md:flex-col md:items-start md:justify-center md:p-8">
//                   <span className="text-4xl font-bold text-orange-400">
//                     {step.number}
//                   </span>

//                   <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
//                     Production
//                   </span>
//                 </div>

//                 <div className="grid gap-4 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10">
//                   <div>
//                     <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
//                       {step.title}
//                     </h3>

//                     <p className="mt-3 leading-7 text-slate-600">
//                       {step.description}
//                     </p>
//                   </div>

//                   <div className="rounded-2xl bg-[#f7f8fa] p-5">
//                     <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
//                       Why This Stage Matters
//                     </p>

//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       {step.detail}
//                     </p>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Capabilities */}
//       <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
//         <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
//               Production Capabilities
//             </p>

//             <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
//               Supporting the Complete Electrode Production Workflow
//             </h2>

//             <p className="mt-5 leading-7 text-slate-600 sm:text-lg sm:leading-8">
//               Our manufacturing workflow covers the important stages required to
//               prepare, coat, finish, inspect and package welding electrodes.
//             </p>
//           </div>

//           <div className="grid gap-3 sm:grid-cols-2">
//             {capabilities.map((capability) => (
//               <div
//                 key={capability}
//                 className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
//               >
//                 <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
//                   <CheckIcon />
//                 </span>

//                 <p className="text-sm font-semibold text-slate-700">
//                   {capability}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quality control */}
//       <section className="bg-[#f7f8fa] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
//         <div className="mx-auto max-w-7xl">
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
//               Quality Focus
//             </p>

//             <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
//               Quality Considered Throughout Production
//             </h2>

//             <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
//               Product consistency depends on attention throughout the complete
//               manufacturing process—not only at the final stage.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {qualityPoints.map((point, index) => (
//               <article
//                 key={point.title}
//                 className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
//               >
//                 <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-sm font-bold text-orange-500">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 <h3 className="mt-5 text-lg font-bold text-slate-900">
//                   {point.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-slate-600">
//                   {point.description}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
//         <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#102a4a] px-6 py-12 text-center sm:px-10">
//           <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/5" />
//           <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-white/5" />

//           <div className="relative mx-auto max-w-3xl">
//             <h2 className="text-3xl font-bold text-white sm:text-4xl">
//               Dependable Manufacturing. Reliable Electrodes.
//             </h2>

//             <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/65">
//               Contact Power Electrode Ltd to discuss product specifications,
//               availability and bulk-order requirements.
//             </p>

//             <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
//               <Link
//                 href="/contact"
//                 className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition-colors hover:bg-orange-600 sm:w-fit"
//               >
//                 Request a Quote
//                 <ArrowIcon />
//               </Link>

//               <Link
//                 href="/products"
//                 className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-[#102a4a] sm:w-fit"
//               >
//                 View Our Products
//                 <ArrowIcon />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata = {
  title: "Manufacturing Process | Power Electrode Ltd",
  description:
    "See how Power Electrode Ltd manufactures welding electrodes, from raw material preparation to inspection and packaging.",
};

const processSteps = [
  {
    number: "01",
    title: "Raw Material Selection",
    description:
      "The manufacturing process begins with the careful selection of core wire and coating materials required for electrode production.",
    detail:
      "Materials are reviewed before production to support consistency and dependable welding performance.",
    image: "/images/pic2.jpg",
  },
  {
    number: "02",
    title: "Core Wire Preparation",
    description:
      "Metal core wire is straightened, cleaned and cut into the required electrode lengths.",
    detail:
      "Proper preparation creates a consistent foundation for the coating and finishing stages.",
    image: "/images/pic2.jpg",
  },
  {
    number: "03",
    title: "Coating Mixture Preparation",
    description:
      "Selected coating materials are carefully measured and blended to produce the mixture applied around the electrode core.",
    detail:
      "The coating supports arc behaviour, weld protection and consistent electrode operation.",
    image: "/images/pic2.jpg",
  },
  {
    number: "04",
    title: "Electrode Coating",
    description:
      "The prepared core wires are evenly coated through a controlled application process.",
    detail:
      "Careful coating helps maintain a consistent electrode shape and dependable welding performance.",
    image: "/images/pic2.jpg",
  },
  {
    number: "05",
    title: "Drying and Finishing",
    description:
      "The coated electrodes are dried and finished under controlled conditions before final inspection.",
    detail:
      "This stage supports coating durability, product handling and storage quality.",
    image: "/images/pic2.jpg",
  },
  {
    number: "06",
    title: "Inspection and Packaging",
    description:
      "Finished electrodes are checked and securely packaged before storage and distribution.",
    detail:
      "Protective packaging helps reduce damage and unnecessary moisture exposure.",
    image: "/images/pic2.jpg",
  },
];

const qualityPoints = [
  {
    title: "Material Checks",
    description:
      "Production materials are reviewed before entering the manufacturing process.",
  },
  {
    title: "Process Control",
    description:
      "Each production stage is carefully managed to support product consistency.",
  },
  {
    title: "Product Inspection",
    description:
      "Finished electrodes are examined before approval and packaging.",
  },
  {
    title: "Protected Packaging",
    description:
      "Products are packaged to support safe handling, storage and distribution.",
  },
];

const capabilities = [
  "Core wire preparation",
  "Electrode coating",
  "Controlled drying",
  "Product finishing",
  "Quality inspection",
  "Secure packaging",
  "Bulk-order preparation",
  "Distribution support",
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

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Image hero */}
      <section className="px-3 pb-0 pt-2 sm:px-5 lg:px-8">
        <div className="relative mx-auto min-h-[440px] max-w-[1800px] overflow-hidden rounded-[26px] bg-[#071a31] sm:min-h-[480px] lg:min-h-[520px] lg:rounded-[34px]">
          <img
            src="/images/frame1.jpg"
            alt="Power Electrode Ltd manufacturing facility"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071a31]/95 via-[#071a31]/80 to-[#071a31]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071a31]/75 via-transparent to-[#071a31]/20" />

          <div className="pointer-events-none absolute inset-3 rounded-[20px] border border-white/10 sm:inset-4 lg:rounded-[27px]" />

          <div className="relative z-10 mx-auto flex min-h-[440px] max-w-7xl items-center px-6 py-14 sm:min-h-[480px] sm:px-10 lg:min-h-[520px] lg:px-14">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-orange-400" />

                <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-orange-300 sm:text-xs">
                  Power Electrode Ltd Manufacturing
                </p>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Precision at Every Stage of Production
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                Explore how raw materials are prepared, processed, coated,
                finished and packaged to produce dependable welding electrodes.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#process-video"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition-colors hover:bg-orange-600 sm:w-fit"
                >
                  Watch the Process
                  <ArrowIcon />
                </a>

                <Link
                  href="/contact"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-white/35 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#102a4a] sm:w-fit"
                >
                  Request a Quote
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-7 right-8 hidden items-center gap-3 text-white/35 lg:flex">
            <span className="h-px w-16 bg-white/30" />

            <span className="text-xs font-bold uppercase tracking-[0.25em]">
              Made in Ghana
            </span>
          </div>
        </div>
      </section>

      {/* Manufacturing introduction and video */}
      <section
        id="process-video"
        className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
              <span className="h-px w-5 bg-orange-500" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                How We Manufacture
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              From Raw Material to Finished Electrode
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Welding electrode manufacturing requires careful preparation,
              controlled processing and attention throughout every production
              stage.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              At Power Electrode Ltd, prepared core wire and electrode coating
              materials come together through a carefully managed production
              process.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              Watch the video to see how the materials move through the
              manufacturing process before the finished electrodes are inspected
              and packaged.
            </p>
          </div>

          {/* Manufacturing process video */}
          <div className="overflow-hidden rounded-[24px] bg-[#071a31] p-2 shadow-[0_20px_60px_rgba(15,23,42,0.18)] sm:rounded-[30px] sm:p-3">
            <video
              className="aspect-video w-full rounded-[18px] object-cover sm:rounded-[22px]"
              controls
              playsInline
              preload="metadata"
              poster="/images/pic2.jpg"
            >
              <source src="/video/vid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="px-4 py-4 text-white sm:px-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                Inside Our Manufacturing Process
              </p>

              <p className="mt-1 text-sm text-white/60">
                See how Power Electrode Ltd produces welding electrodes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section
        id="process"
        className="scroll-mt-28 bg-[#f7f8fa] px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
              Step by Step
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Electrode Manufacturing Process
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Follow the key stages that transform prepared materials into
              finished welding electrodes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl"
              >
                {/* Temporary step image */}
                <div className="relative h-[210px] overflow-hidden">
                  <img
                    src={step.image}
                    alt={`${step.title} in the welding electrode manufacturing process`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071a31]/75 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-sm font-bold text-white shadow-lg">
                    {step.number}
                  </span>

                  <span className="absolute bottom-5 right-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                    Production Stage
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>

                  <div className="mt-5 rounded-xl bg-[#f7f8fa] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-500">
                      Why This Stage Matters
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-7 text-center text-xs text-slate-500">
            The current step images are temporary and can be replaced with
            photographs from each production stage.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-[420px] overflow-hidden rounded-[28px]">
            <img
              src="/images/pic2.jpg"
              alt="Finished Power Electrode Ltd welding electrodes"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071a31]/80 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#071a31]/50 p-5 text-white backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                Complete Production Workflow
              </p>

              <p className="mt-2 text-xl font-bold">
                Supporting every stage from preparation to packaging
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
              Production Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              A Complete Electrode Manufacturing Workflow
            </h2>

            <p className="mt-5 leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Our manufacturing process covers the key stages required to
              prepare, coat, finish, inspect and package welding electrodes.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <CheckIcon />
                  </span>

                  <p className="text-sm font-semibold text-slate-700">
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality control */}
      <section className="bg-[#f7f8fa] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
              Quality Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Quality Considered Throughout Production
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Product consistency depends on careful attention throughout the
              complete manufacturing process.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualityPoints.map((point, index) => (
              <article
                key={point.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-sm font-bold text-orange-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#102a4a] px-6 py-12 text-center sm:px-10">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/5" />
          <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-white/5" />

          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Dependable Manufacturing. Reliable Electrodes.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/65">
              Contact Power Electrode Ltd to discuss product specifications,
              availability and bulk-order requirements.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition-colors hover:bg-orange-600 sm:w-fit"
              >
                Request a Quote
                <ArrowIcon />
              </Link>

              <Link
                href="/products"
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-[#102a4a] sm:w-fit"
              >
                View Our Products
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
