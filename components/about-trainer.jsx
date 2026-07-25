"use client";

export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative min-h-96 h-96 md:h-full">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5" />

            <img
              src="/images/pic2.jpg"
              alt="Institutional furniture manufactured by the company"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">
                About the Trainer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Meet Your Virtual Assistant Coach
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 10 years of experience in virtual assistance and
              business operations, I've helped hundreds of professionals master
              the skills needed to excel in this dynamic field.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My expertise spans across administrative management, client
              communication, project coordination, and digital tools mastery.
              I've worked with Fortune 500 companies and startups alike, giving
              me unique insights into what employers truly value.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Certified Virtual Assistant Trainer
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Recognized by industry leaders
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    500+ Students Trained
                  </p>
                  <p className="text-sm text-muted-foreground">
                    With 95% career advancement rate
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Personalized Coaching Approach
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Tailored to your specific goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
