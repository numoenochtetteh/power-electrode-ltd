import { Header } from "@/components/header";

import { ManufacturingDivisions } from "@/components/manufacturing-divisions";
import { AboutPreview } from "@/components/about-preview";
import { Benefits } from "@/components/benefits";
import { Hero1 } from "@/components/hero1";
import { Footer } from "@/components/footer";
import { Welder } from "@/components/welder";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero1 />
      <Welder />

      <ManufacturingDivisions />
      <AboutPreview />
      <Benefits />
      <Footer />
    </main>
  );
}
