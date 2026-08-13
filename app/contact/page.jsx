import Link from "next/link";
import { ContactEnquiryForm } from "@/components/contact-enquiry-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import { ReviewForm } from "@/components/review-form";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Power Electrode Ltd for welding electrode enquiries, quotations, bulk orders and directions.",
  alternates: { canonical: "/contact" },
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
    href: "https://www.google.com/maps/search/?api=1&query=North+Dawhenya+Central+University+282+Ningo+Prampram+Greater+Accra+Ghana",
    action: "Get directions",
  },
  {
    number: "03",
    title: "Email Our Team",
    detail: "info@powerelectrode.net",
    description:
      "Send us your product enquiries, quotation requests and order details.",
    href: "mailto:info@powerelectrode.net",
    action: "Send an email",
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

      <PageHero
        image="/images/frame4.webp"
        imageAlt="Contact Power Electrode Ltd"
        imagePosition="58% center"
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Contact Power Electrode Ltd for product information, quotations, bulk orders and electrode recommendations."
        actions={[
          { label: "Send an Enquiry", href: "#enquiry" },
          {
            label: "Call +233 244 316 183",
            href: "tel:+233244316183",
            variant: "secondary",
            icon: "phone",
          },
        ]}
      />

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

      {/* Customer review */}
      <section id="reviews" className="scroll-mt-28 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
              <span className="h-px w-5 bg-orange-500" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Customer Review</p>
            </div>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">Share Your Experience</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-600 sm:text-lg sm:leading-8">Have you worked with our electrodes or our team? Send us an honest review to help us improve our products and service.</p>
            <div className="mt-6 rounded-2xl bg-[#102a4a] p-5 text-white sm:p-6">
              <p className="font-bold">Reviews are checked before publishing</p>
              <p className="mt-2 text-sm leading-6 text-white/65">This protects customer privacy and keeps every published review genuine and relevant.</p>
            </div>
          </div>
          <ReviewForm />
        </div>
      </section>

      {/* Location */}
      <section
        id="location"
        className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
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
                Company Email
              </p>

              <a
                href="mailto:info@powerelectrode.net"
                className="mt-2 inline-block break-all text-lg font-bold text-[#102a4a] transition-colors hover:text-orange-500 sm:text-2xl"
              >
                info@powerelectrode.net
              </a>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 p-2 shadow-[0_15px_45px_rgba(15,23,42,0.08)]">
            <iframe
              src="https://www.google.com/maps?q=North%20Dawhenya%20Central%20University%20282%20Ningo%20Prampram%20Greater%20Accra%20Ghana&output=embed"
              title="Power Electrode Ltd location"
              className="h-[400px] w-full rounded-[18px] border-0 sm:h-[500px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://www.google.com/maps/search/?api=1&query=North+Dawhenya+Central+University+282+Ningo+Prampram+Greater+Accra+Ghana"
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
