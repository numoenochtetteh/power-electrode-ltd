import Link from "next/link";
import { ContactEnquiryForm } from "@/components/contact-enquiry-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata = {
  title: "Contact Us | Power Electrode Ltd",
  description:
    "Contact Power Electrode Ltd for welding electrode enquiries, quotations, bulk orders and directions.",
};

const contactDetails = [
  {
    number: "01",
    title: "Call Our Team",
    detail: "+233 244 316 183",
    description: "Speak with us about products, prices and availability.",
    href: "tel:+233244316183",
    action: "Call now",
  },
  {
    number: "02",
    title: "Visit Our Location",
    detail: "North Dawhenya",
    description:
      "Central University 282, Ningo Prampram, Greater Accra, Ghana.",
    href: "https://www.google.com/maps/search/?api=1&query=GN-0282-3548",
    action: "Get directions",
  },
  {
    number: "03",
    title: "GhanaPost GPS",
    detail: "GN-0282-3548",
    description: "Use our digital address to locate Power Electrode Ltd.",
    href: "https://www.google.com/maps/search/?api=1&query=GN-0282-3548",
    action: "Open location",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Contact hero */}
      <section className="px-3 pb-10 pt-2 sm:px-5 lg:px-8">
        <div className="relative mx-auto min-h-[380px] max-w-[1800px] overflow-hidden rounded-[26px] bg-[#071a31] sm:min-h-[420px] lg:rounded-[34px]">
          <img
            src="/images/frame1.jpg"
            alt="Contact Power Electrode Ltd"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071a31]/95 via-[#071a31]/80 to-[#071a31]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071a31]/70 to-transparent" />

          <div className="pointer-events-none absolute inset-3 rounded-[20px] border border-white/10 sm:inset-4 lg:rounded-[27px]" />

          <div className="relative z-10 mx-auto flex min-h-[380px] max-w-7xl items-center px-6 py-14 sm:min-h-[420px] sm:px-10 lg:px-14">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-400">
                Get in Touch
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s Discuss Your Welding Requirements
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                Contact Power Electrode Ltd for product information, quotations,
                bulk orders and electrode recommendations.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+233244316183"
                  className="inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition-colors hover:bg-orange-600 sm:w-fit"
                >
                  Call +233 244 316 183
                </a>

                <a
                  href="#enquiry"
                  className="group inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#102a4a] sm:w-fit"
                >
                  Send an Enquiry
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {contactDetails.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-sm font-bold text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                {item.number}
              </span>

              <h2 className="mt-5 text-lg font-bold text-slate-900">
                {item.title}
              </h2>

              <p className="mt-2 font-semibold text-[#102a4a]">{item.detail}</p>

              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-500"
              >
                {item.action}
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Enquiry form */}
      <section
        id="enquiry"
        className="scroll-mt-28 bg-[#f7f8fa] px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
              <span className="h-px w-5 bg-orange-500" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Product Enquiry
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Tell Us About Your Requirements
            </h2>

            <p className="mt-5 leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Give us information about the electrode grade, quantity,
              application and delivery location you require.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Electrode grade or size",
                "Required quantity",
                "Welding application",
                "Preferred delivery location",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#102a4a] text-xs font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#102a4a] p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                Prefer to Call?
              </p>

              <p className="mt-3 text-lg font-bold">+233 244 316 183</p>

              <p className="mt-2 text-sm leading-6 text-white/60">
                Speak directly with our team about your welding electrode
                requirements.
              </p>
            </div>
          </div>

          <ContactEnquiryForm />
        </div>
      </section>

      {/* Location */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
                Find Power Electrode Ltd
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Visit Our Location
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                North Dawhenya / Central University 282, Ningo Prampram, Greater
                Accra, Ghana.
              </p>
            </div>

            <div className="md:text-right">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                GhanaPost GPS
              </p>

              <p className="mt-2 text-2xl font-bold text-[#102a4a]">
                GN-0282-3548
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 p-2 shadow-[0_15px_45px_rgba(15,23,42,0.08)]">
            <iframe
              src="https://www.google.com/maps?q=GN-0282-3548&output=embed"
              title="Power Electrode Ltd location"
              className="h-[400px] w-full rounded-[18px] border-0 sm:h-[500px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://www.google.com/maps/search/?api=1&query=GN-0282-3548"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-xl bg-[#102a4a] px-7 py-4 font-semibold text-white transition-colors hover:bg-orange-500 sm:w-fit"
            >
              Open in Google Maps
              <ArrowIcon />
            </a>

            <a
              href="tel:+233244316183"
              className="inline-flex min-h-13 w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-[#102a4a] transition-colors hover:border-orange-500 hover:text-orange-500 sm:w-fit"
            >
              Call for Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
