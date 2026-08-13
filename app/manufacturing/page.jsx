import { ManufacturingProcessVideo } from "@/components/manufacturing-process-video";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Manufacturing Process",
  description:
    "See how Power Electrode Ltd manufactures welding electrodes, from raw material preparation to inspection and packaging.",
  alternates: { canonical: "/manufacturing" },
};

const processSteps = [
  {
    number: "01",
    title: "Raw Material Selection",
    description:
      "The manufacturing process begins with the careful selection of core wire and coating materials required for electrode production.",
    detail:
      "Materials are reviewed before production to support consistency and dependable welding performance.",
    image: "/images/process-raw-material.webp",
  },
  {
    number: "02",
    title: "Core Wire Preparation",
    description:
      "Metal core wire is straightened, cleaned and cut into the required electrode lengths.",
    detail:
      "Proper preparation creates a consistent foundation for the coating and finishing stages.",
    image: "/images/process-core-wire.webp",
  },
  {
    number: "03",
    title: "Coating Mixture Preparation",
    description:
      "Selected coating materials are carefully measured and blended to produce the mixture applied around the electrode core.",
    detail:
      "The coating supports arc behaviour, weld protection and consistent electrode operation.",
    image: "/images/process-coating-mixture.webp",
  },
  {
    number: "04",
    title: "Electrode Coating",
    description:
      "The prepared core wires are evenly coated through a controlled application process.",
    detail:
      "Careful coating helps maintain a consistent electrode shape and dependable welding performance.",
    image: "/images/process-electrode-coating.webp",
  },
  {
    number: "05",
    title: "Drying and Finishing",
    description:
      "The coated electrodes are dried and finished under controlled conditions before final inspection.",
    detail:
      "This stage supports coating durability, product handling and storage quality.",
    image: "/images/process-drying-finishing.webp",
  },
  {
    number: "06",
    title: "Inspection and Packaging",
    description:
      "Finished electrodes are checked and securely packaged before storage and distribution.",
    detail:
      "Protective packaging helps reduce damage and unnecessary moisture exposure.",
    image: "/images/process-inspection-packaging.webp",
  },
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

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHero
        image="/images/frame2.webp"
        imageAlt="Power Electrode Ltd manufacturing facility"
        imagePosition="58% center"
        eyebrow="Power Electrode Ltd Manufacturing"
        title="Our Factory"
        description="Explore how raw materials are prepared, processed, coated, finished and packaged to produce dependable welding electrodes."
        actions={[
          { label: "Watch the Process", href: "#process-video" },
          {
            label: "Request a Quote",
            href: "/contact",
            variant: "secondary",
          },
        ]}
      />

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
          <div className="mx-auto mt-6 max-w-3xl text-center">
            <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              See how carefully prepared core wire and coating materials move
              through controlled production, inspection and packaging to become
              dependable welding electrodes.
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
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
