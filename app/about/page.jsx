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
    image: "/images/112.jpg",
    action: "Contact Us",
    href: "/contact",
  },
  {
    category: "PERFORMANCE",
    title: "Consistent Performance",
    description:
      "Our products are developed to support stable arc performance and reliable welding results.",
    image: "/images/113.jpg",
    action: "View Products",
    href: "/products",
  },
  {
    category: "CUSTOMER FOCUS",
    title: "Customer Focus",
    description:
      "We listen to our customers and work to provide products that support their welding requirements.",
    image: "/images/114.jpg",
    action: "Request a Quote",
    href: "/contact",
  },
  {
    category: "IMPROVEMENT",
    title: "Continuous Improvement",
    description:
      "We are committed to improving our processes, products and customer experience as the company grows.",
    image: "/images/115.jpg",
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
    icon: "target",
  },
  {
    label: "Our Vision",
    title: "A Trusted Ghanaian Brand",
    description:
      "To become a trusted welding electrode brand serving professionals, businesses and industries throughout Ghana and beyond.",
    icon: "eye",
  },
  {
    label: "Our Commitment",
    title: "Quality at Every Stage",
    description:
      "To maintain care, consistency and responsibility throughout our manufacturing and customer-service processes.",
    icon: "shield",
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

function BeliefIcon({ type }) {
  if (type === "target") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />

        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />

        <path
          d="M12 4V2M20 12h2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "eye") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <circle
          cx="12"
          cy="12"
          r="2.8"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 3 19 6v5c0 4.8-2.8 8.2-7 10-4.2-1.8-7-5.2-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
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

      {/* About page hero */}
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

      {/* Who we are */}
      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          {/* Text content */}
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

            {/* Company information */}
            <div className="mt-8 grid grid-cols-1 gap-4 min-[400px]:grid-cols-2">
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

          {/* Main image */}
          <div className="relative h-[430px] overflow-hidden rounded-[22px] bg-slate-950 sm:h-[520px] sm:rounded-[28px] lg:h-[580px]">
            <img
              src="/images/111.jpg"
              alt="Power Electrode Ltd welding electrode manufacturing"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Image overlays */}
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071a31]/90 via-[#071a31]/15 to-black/5" />

            {/* Image information */}
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

      {/* Our values */}
      <section
        id="quality"
        className="bg-[#f7f8fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-500">
              Our Values
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              What Drives Us
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              The principles shaping how we manufacture our products, serve our
              customers and grow Power Electrode Ltd.
            </p>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-orange-400" />
          </div>

          {/* Image cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="group relative min-h-[430px] overflow-hidden bg-[#071a31] shadow-[0_18px_45px_rgba(15,23,42,0.14)] sm:min-h-[480px]"
              >
                {/* Background image */}
                <img
                  src={value.image}
                  alt={value.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlays */}
                <div className="absolute inset-0 bg-black/15" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/5" />

                {/* Category */}
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

      {/* Mission, vision and commitment */}
      <section className="relative overflow-hidden bg-[#f3f7fb] px-4 pb-20 pt-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Decorative backgrounds */}
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-orange-100/45 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                What We Believe In
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#102a4a] sm:text-4xl lg:text-5xl">
                Built Around a Clear Purpose
              </h2>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Our mission, vision and commitment guide the way we build our
                products, serve our customers and grow Power Electrode Ltd.
              </p>
            </div>
          </div>

          {/* Belief cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-6">
            {beliefs.map((belief) => (
              <article
                key={belief.label}
                className="group relative min-h-[320px] overflow-hidden rounded-[26px] border border-slate-200/90 bg-white p-7 shadow-[0_16px_45px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:min-h-[330px] sm:p-8"
              >
                {/* Top orange accent */}
                <div className="absolute left-0 top-0 h-1.5 w-20 bg-orange-500 transition-all duration-500 group-hover:w-full" />

                {/* Decorative corner */}
                <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#102a4a]/[0.035] transition-transform duration-700 group-hover:scale-125" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <BeliefIcon type={belief.icon} />
                </div>

                {/* Label */}
                <p className="relative mt-8 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                  {belief.label}
                </p>

                {/* Title */}
                <h3 className="relative mt-3 text-2xl font-bold leading-tight text-[#102a4a] lg:text-[27px]">
                  {belief.title}
                </h3>

                {/* Divider */}
                <div className="relative mt-5 h-px w-full bg-slate-200">
                  <div className="h-full w-12 bg-orange-400 transition-all duration-500 group-hover:w-24" />
                </div>

                {/* Description */}
                <p className="relative mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  {belief.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#102a4a] px-6 py-12 text-center sm:px-10 lg:px-14 lg:py-16">
          {/* Decorations */}
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
