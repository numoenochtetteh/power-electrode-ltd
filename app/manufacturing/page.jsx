import { ManufacturingProcessVideo } from "@/components/manufacturing-process-video";
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
      <section className="px-3 pb-5 pt-1 sm:px-5 sm:pb-7 lg:px-8">
        <div className="relative mx-auto min-h-[460px] max-w-[1800px] overflow-hidden rounded-[28px] bg-slate-950 sm:min-h-[500px] lg:rounded-[34px]">
          <img
            src="/images/frame1.jpg"
            alt="Power Electrode Ltd manufacturing facility"
            className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
          />

          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

          <div className="relative z-10 mx-auto flex min-h-[460px] max-w-7xl items-end px-6 py-9 sm:min-h-[500px] sm:items-center sm:px-10 lg:px-14">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-orange-400" />

                <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-orange-300 sm:text-xs">
                  Power Electrode Ltd Manufacturing
                </p>
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-[1.04] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Precision at Every Stage of Production
              </h1>

              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/85 sm:text-lg sm:leading-8">
                Explore how raw materials are prepared, processed, coated,
                finished and packaged to produce dependable welding electrodes.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#process-video"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600 sm:w-fit"
                >
                  Watch the Process
                  <ArrowIcon />
                </a>

                <Link
                  href="/contact"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-white/35 bg-black/15 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#102a4a] sm:w-fit"
                >
                  Request a Quote
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Manufacturing introduction and video */}
      <section
        id="process-video"
        className="scroll-mt-28 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
              How We Manufacture
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              From Raw Material to Finished Electrode
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-orange-400" />
          </div>

          {/* Introduction */}
          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-left">
            <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Welding electrode manufacturing requires careful preparation,
              controlled processing and close attention throughout every
              production stage.
            </p>

            <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              At Power Electrode Ltd, prepared core wire and electrode coating
              materials come together through a carefully managed production
              process. Each stage contributes to the consistency and
              dependability of the finished product.
            </p>

            <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Watch the video below to see how materials move through the
              manufacturing process before the completed electrodes are
              inspected, finished and packaged.
            </p>
          </div>

          {/* Manufacturing video */}
          <div className="mx-auto mt-12 max-w-5xl">
            <ManufacturingProcessVideo />

            <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              Video plays continuously. Sound is turned off by default.
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
