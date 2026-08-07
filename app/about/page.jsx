import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "About Us | Power Electrode Ltd",
  description:
    "Learn about Power Electrode Ltd, a Ghanaian welding electrode manufacturer registered on 25 April 2025.",
};

const values = [
  {
    category: "QUALITY",
    title: "Quality First",
    description:
      "We focus on producing dependable welding electrodes through careful material selection and controlled manufacturing.",
    video: "/video/vid1.mp4",
    action: "Contact Us",
    href: "/contact",
  },
  {
    category: "PERFORMANCE",
    title: "Consistent Performance",
    description:
      "Our products are developed to support stable arc performance and reliable welding results.",
    video: "/video/vid1.mp4",
    action: "View Products",
    href: "/products",
  },
  {
    category: "CUSTOMER FOCUS",
    title: "Customer Focus",
    description:
      "We listen to our customers and work to provide products that support their welding requirements.",
    video: "/video/vid1.mp4",
    action: "Request a Quote",
    href: "/contact",
  },
  {
    category: "IMPROVEMENT",
    title: "Continuous Improvement",
    description:
      "We are committed to improving our processes, products and customer experience as the company grows.",
    video: "/video/vid1.mp4",
    action: "Our Manufacturing",
    href: "/manufacturing",
  },
];

const beliefs = [
  {
    label: "Our Mission",
    title: "Dependable Products",
    description:
      "To manufacture reliable welding electrodes that help professionals achieve strong and consistent welding results.",
  },
  {
    label: "Our Vision",
    title: "A Trusted Ghanaian Brand",
    description:
      "To become a trusted welding electrode brand serving professionals, businesses and industries throughout Ghana and beyond.",
  },
  {
    label: "Our Commitment",
    title: "Quality at Every Stage",
    description:
      "To maintain care, consistency and responsibility throughout our manufacturing and customer-service processes.",
  },
];

const processSteps = [
  "Material selection",
  "Core wire preparation",
  "Flux preparation",
  "Electrode coating",
  "Drying and finishing",
  "Inspection and packaging",
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <PageHero
        image="/images/frame3.jpg"
        imageAlt="Power Electrode Ltd welding operations"
        imagePosition="58% center"
        eyebrow="Power Electrode Ltd"
        title="About Us"
        description="Building a dependable Ghanaian welding electrode brand focused on strength, consistency and quality manufacturing."
        actions={[
          {
            label: "Contact Our Team",
            href: "/contact",
          },
          {
            label: "View Products",
            href: "/products",
            variant: "secondary",
          },
        ]}
      />

      {/* WHO WE ARE */}
      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
              <span className="h-px w-5 bg-orange-500" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Who We Are
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              A New Ghanaian Brand With a Powerful Purpose
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Power Electrode Ltd is a Ghanaian welding electrode company
              officially registered on 25 April 2025. The company was
              established with a clear goal: to manufacture dependable welding
              electrodes for professionals, fabricators, contractors and
              industrial businesses.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              We are focused on producing electrodes that support stable arc
              performance, reliable weld strength and consistent operation
              across different welding applications.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              As we continue to grow, our priority is to build lasting customer
              relationships through quality products, responsible manufacturing
              and dependable service.
            </p>

            {/* INFO BOXES */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-[#f7f8fa] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
                  Registered
                </p>

                <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
                  25 April 2025
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f7f8fa] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
                  Our Industry
                </p>

                <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
                  Welding Electrodes
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="relative h-[520px] overflow-hidden rounded-[28px] bg-slate-950 sm:h-[570px] lg:h-[620px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/video/vid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video overlays */}
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071a31]/90 via-[#071a31]/10 to-black/10" />

            {/* Video content box */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#071a31]/75 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                Our Purpose
              </p>

              <p className="mt-2 text-xl font-bold leading-snug sm:text-2xl">
                Manufacturing products welding professionals can depend on
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section
        id="quality"
        className="bg-[#f7f8fa] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* HEADING */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-500">
              Our Values
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              What Drives Us
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              The principles shaping how we manufacture our products, serve our
              customers and grow Power Electrode Ltd.
            </p>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-orange-400" />
          </div>

          {/* VIDEO VALUE CARDS */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="group relative min-h-[480px] overflow-hidden bg-[#071a31] shadow-[0_18px_45px_rgba(15,23,42,0.14)]"
              >
                {/* Background video */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src={value.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video overlays */}
                <div className="absolute inset-0 bg-black/15" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/5" />

                {/* Top category */}
                <div className="absolute left-5 top-0 max-w-[90%] bg-orange-400 px-5 py-3">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#071a31]">
                    {value.category}
                  </p>
                </div>

                {/* Card content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-bold leading-tight text-white">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/75">
                    {value.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={value.href}
                    className="group/button mt-6 inline-flex items-center gap-2 border-b border-orange-400 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:text-orange-400"
                  >
                    {value.action}

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1"
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
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION, VISION AND COMMITMENT */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
              What We Believe In
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Building Power Electrode Ltd for the Future
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {beliefs.map((belief) => (
              <article
                key={belief.label}
                className="relative overflow-hidden rounded-[24px] bg-[#102a4a] p-7 text-white sm:p-8"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/5" />

                <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                  {belief.label}
                </p>

                <h3 className="relative mt-4 text-2xl font-bold">
                  {belief.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-white/65">
                  {belief.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING PROCESS */}
      <section className="bg-[#f7f8fa] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            {/* LEFT */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
                Our Manufacturing Process
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Quality Considered at Every Stage
              </h2>

              <p className="mt-5 leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Our manufacturing process follows a carefully managed sequence
                from material preparation through to final inspection and
                packaging.
              </p>

              <Link
                href="/manufacturing"
                className="group mt-7 inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-orange-600 sm:w-fit"
              >
                See How We Manufacture
                <ArrowIcon />
              </Link>
            </div>

            {/* RIGHT PROCESS STEPS */}
            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((step) => (
                <div
                  key={step}
                  className="group flex min-h-[88px] items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5l4.2 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <p className="font-semibold text-slate-900">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#102a4a] px-6 py-12 text-center sm:px-10 lg:px-14">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/5" />

          <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-white/5" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
              Work With Power Electrode Ltd
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Dependable Electrodes for Serious Welding
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/65">
              Speak with our team about product enquiries, availability, supply
              requirements and bulk welding electrode orders.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition-colors hover:bg-orange-600 sm:w-fit"
              >
                Contact Our Team
                <ArrowIcon />
              </Link>

              <Link
                href="/products"
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-[#102a4a] sm:w-fit"
              >
                View Products
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
