// "use client";

// export function Benefits() {
//   const benefits = [
//     {
//       icon: "👤",
//       title: "Personalized Training",
//       description:
//         "One-on-one sessions tailored to your skill level and career goals",
//     },
//     {
//       icon: "⏰",
//       title: "Flexible Scheduling",
//       description: "Book sessions at times that work best for your schedule",
//     },
//     {
//       icon: "💬",
//       title: "Real-Time Feedback",
//       description:
//         "Get instant guidance and corrections during your training sessions",
//     },
//     {
//       icon: "🚀",
//       title: "Career Support",
//       description:
//         "Resume review, interview prep, and job placement guidance included",
//     },
//     {
//       icon: "🛠️",
//       title: "Tools & Resources",
//       description: "Access to exclusive templates, guides, and industry tools",
//     },
//     {
//       icon: "📈",
//       title: "Lifetime Access",
//       description:
//         "Ongoing support and resources even after your training ends",
//     },
//   ];

//   return (
//     <section id="benefits" className="bg-background py-20 md:py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <p className="text-accent font-semibold text-sm uppercase tracking-wide">
//             Why Choose Us
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
//             Everything You Need to Succeed
//           </h2>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Comprehensive training designed to accelerate your career as a
//             virtual assistant
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition"
//             >
//               <div className="text-4xl mb-4">{benefit.icon}</div>
//               <h3 className="text-xl font-semibold text-foreground mb-2">
//                 {benefit.title}
//               </h3>
//               <p className="text-muted-foreground">{benefit.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import {
  BadgeCheck,
  Factory,
  Headphones,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";

const benefits = [
  {
    title: "Local Manufacturing",
    description:
      "Our local production operation supports dependable quality control, product availability and efficient delivery to customers across Ghana.",
    icon: Factory,
  },
  {
    title: "Proven Quality",
    description:
      "Our welding electrodes are manufactured with careful quality standards to provide reliable results across different welding applications.",
    icon: BadgeCheck,
  },
  {
    title: "Reliable Performance",
    description:
      "Engineered to produce strong, durable welds with dependable performance for fabrication, construction, maintenance and repair work.",
    icon: ShieldCheck,
  },
  {
    title: "Consistent Arc Stability",
    description:
      "Our electrodes provide smooth ignition, a stable arc and consistent operation to help welders achieve cleaner and stronger results.",
    icon: Zap,
  },
  {
    title: "On-Time Delivery",
    description:
      "Our distribution and logistics process helps ensure that customer orders arrive safely and when they are needed.",
    icon: Truck,
  },
  {
    title: "Customer Support",
    description:
      "Our relationship continues beyond delivery. We help customers select suitable electrodes and provide dependable product support.",
    icon: Headphones,
  },
];

export function Benefits() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#f7f8fa] px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
            <span className="h-px w-5 bg-orange-500" />

            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-xs">
              Why Power Electrode Ltd
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            The Power Electrode Advantage
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            We combine local manufacturing expertise with strict quality
            standards to deliver strong, consistent and dependable welding
            electrodes to professionals and industries across Ghana.
          </p>
        </div>

        {/* Benefit cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-2 md:gap-6 lg:mt-16 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)] sm:p-7 lg:min-h-[260px]"
              >
                {/* Orange hover line */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-200 bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={23} strokeWidth={2} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
        <br />

        {/* Bottom callout */}
        {/* Bottom callout */}
        <div className="relative mt-10 overflow-hidden rounded-2xl bg-[#17375e] px-5 py-10 text-center sm:px-8 sm:py-12 lg:px-10">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-white/10 sm:h-44 sm:w-44" />

          <div className="pointer-events-none absolute -right-14 -top-16 h-40 w-40 rounded-full bg-white/10 sm:h-48 sm:w-48" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Ready to Work With Ghana&apos;s Trusted Welding Electrode
              Manufacturer?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
              Whether you need welding electrodes for fabrication, construction,
              maintenance or industrial applications, our team is ready to help.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 sm:w-auto"
              >
                Send an Enquiry
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="tel:+233000000000"
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#17375e] sm:w-auto"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M7.5 3.5H5.2c-.9 0-1.7.7-1.7 1.7 0 8.5 6.8 15.3 15.3 15.3.9 0 1.7-.7 1.7-1.7v-2.3c0-.8-.5-1.4-1.2-1.6l-3-.8c-.6-.2-1.3 0-1.7.5l-.7.9a13.1 13.1 0 0 1-5.4-5.4l.9-.7c.5-.4.7-1.1.5-1.7l-.8-3c-.2-.7-.8-1.2-1.6-1.2Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
