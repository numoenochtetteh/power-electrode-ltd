"use client";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Virtual Assistant",
      image: "/professional-woman-headshot.png",
      quote:
        "This training completely transformed my career. I went from struggling with time management to landing a high-paying VA position within 3 months.",
    },
    {
      name: "Michael Chen",
      role: "Executive Assistant",
      image: "/professional-man-headshot.png",
      quote:
        "The personalized feedback was invaluable. My trainer helped me identify my strengths and turn them into marketable skills.",
    },
    {
      name: "Emily Rodriguez",
      role: "Freelance VA",
      image: "/professional-woman-smiling.png",
      quote:
        "I appreciated the real-time guidance during sessions. It made me feel confident and prepared for client interactions.",
    },
  ];

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            What Our Students Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
