import { Header } from "@/components/header";
import { Hero1 } from "@/components/hero1";
import { Welder } from "@/components/welder";
import { Benefits } from "@/components/benefits";
import { ManufacturingDivisions } from "@/components/manufacturing-divisions";
import { AboutPreview } from "@/components/about-preview";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero1 />
      <Welder />
      <Benefits />
      <ManufacturingDivisions />
      <AboutPreview />
      <Footer />
    </main>
  );
}
