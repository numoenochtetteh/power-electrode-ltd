import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Welding Electrodes",
  description:
    "Explore welding electrodes manufactured by Power Electrode Ltd for fabrication, maintenance and industrial applications.",
  alternates: { canonical: "/products" },
};

const products = [
  {
    grade: "Grade 12",
    label: "Light Duty",
    description:
      "Suitable for thin sheet metal, light repairs, finishing work and general maintenance applications.",
    thickness: "2.5mm",
    strength: "Standard",
    applications: ["Sheet Metal", "Auto Body", "Finishing", "Light Repairs"],
  },
  {
    grade: "Grade 10",
    label: "All Purpose",
    description:
      "A dependable all-round electrode for everyday fabrication, machinery work and general construction.",
    thickness: "3.2mm",
    strength: "Medium",
    applications: ["Fabrication", "Machinery", "Construction", "Frames"],
  },
  {
    grade: "Grade 8",
    label: "Heavy Duty",
    description:
      "Developed for demanding structural and industrial welding work involving heavier metal sections.",
    thickness: "4.0mm",
    strength: "High",
    applications: ["Structural", "Heavy Fabrication", "Bridges", "Pipelines"],
  },
];

const comparisonRows = [
  {
    label: "Best For",
    grade12: "Thin metal and light repairs",
    grade10: "General fabrication projects",
    grade8: "Heavy structural fabrication",
  },
  {
    label: "Typical Work",
    grade12: "Sheet metal and finishing",
    grade10: "Frames, machinery and construction",
    grade8: "Heavy structures and pipelines",
  },
  {
    label: "Electrode Size",
    grade12: "2.5mm",
    grade10: "3.2mm",
    grade8: "4.0mm",
  },
  {
    label: "Strength Level",
    grade12: "Standard",
    grade10: "Medium",
    grade8: "High",
  },
  {
    label: "Applications",
    grade12: "Maintenance and auto body",
    grade10: "Construction and manufacturing",
    grade8: "Heavy industrial applications",
  },
];

const specifications = [
  { name: "Coating Type", value: "Rutile / Basic" },
  { name: "Current Type", value: "AC / DC" },
  { name: "Welding Positions", value: "All positions" },
  { name: "Rod Lengths", value: "300mm, 350mm and 400mm" },
  { name: "Diameter Range", value: "2.5mm – 4.0mm" },
  { name: "Packaging", value: "5kg and 20kg boxes" },
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

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHero
        image="/images/frame1.webp"
        imageAlt="Power Electrode Ltd welding electrodes"
        imagePosition="58% center"
        eyebrow="Power Electrode Ltd Products"
        title="Welding Electrodes"
        description="Quality welding electrodes manufactured for fabrication, maintenance, construction and industrial welding applications across Ghana."
        actions={[
          { label: "Send an Enquiry", href: "/contact" },
          {
            label: "Call +233 241 751 355",
            href: "tel:+233244316183",
            variant: "secondary",
            icon: "phone",
          },
        ]}
      />

      {/* Product cards */}
      <section
        id="grades"
        className="scroll-mt-28 bg-[#f6f7f9] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
              Product Range
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Choose the Right Electrode
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              From light repairs to demanding structural work, select the
              electrode grade that suits your welding application.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={product.grade}
                className="group flex flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-sm font-bold text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full bg-orange-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-orange-500">
                    {product.label}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {product.grade}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#f7f8fa] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      Electrode Size
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      {product.thickness}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f7f8fa] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      Strength
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      {product.strength}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {product.applications.map((application) => (
                    <span
                      key={application}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600"
                    >
                      {application}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/contact?product=${encodeURIComponent(product.grade)}`}
                  className="group mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#102a4a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  Enquire About {product.grade}
                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Product comparison */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
              Product Comparison
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Compare All Grades
            </h2>

            <p className="mt-4 text-slate-600">
              A quick guide to help you select a suitable electrode.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="bg-[#102a4a] text-white">
                  <th className="px-5 py-4 text-sm font-semibold">
                    Comparison
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold">Grade 12</th>

                  <th className="px-5 py-4 text-sm font-semibold">Grade 10</th>

                  <th className="px-5 py-4 text-sm font-semibold">Grade 8</th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.label}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <th className="border-t border-slate-200 px-5 py-4 text-sm font-bold text-slate-900">
                      {row.label}
                    </th>

                    <td className="border-t border-slate-200 px-5 py-4 text-sm text-slate-600">
                      {row.grade12}
                    </td>

                    <td className="border-t border-slate-200 px-5 py-4 text-sm text-slate-600">
                      {row.grade10}
                    </td>

                    <td className="border-t border-slate-200 px-5 py-4 text-sm text-slate-600">
                      {row.grade8}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-slate-500 md:hidden">
            Swipe sideways to view the complete comparison table.
          </p>
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-[#f7f8fa] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
              Technical Information
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Electrode Specifications
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Available configurations for different professional welding
              requirements.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
            {specifications.map((specification, index) => (
              <div
                key={specification.name}
                className={`flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 ${
                  index !== specifications.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                <p className="text-sm font-semibold text-slate-900">
                  {specification.name}
                </p>

                <p className="text-sm text-slate-600">{specification.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50 p-4 text-center text-sm leading-6 text-slate-600">
            Contact our team to confirm product availability and the correct
            electrode specification for your application.
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#102a4a] px-6 py-12 text-center sm:px-10">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/5" />

          <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-white/5" />

          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Need Help Choosing an Electrode?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/65">
              Tell the Power Electrode Ltd team about your welding application,
              material and order requirements.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition-colors hover:bg-orange-600 sm:w-fit"
            >
              Speak With Our Team
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
