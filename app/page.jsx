import { Header } from "@/components/header";
import { Hero1 } from "@/components/hero1";
import { Welder } from "@/components/welder";
import { Benefits } from "@/components/benefits";
import { ManufacturingDivisions } from "@/components/manufacturing-divisions";
import { AboutPreview } from "@/components/about-preview";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Power Electrode Ltd | Welding Electrodes in Ghana",
  description:
    "Power Electrode Ltd manufactures and supplies dependable welding electrodes for fabricators, contractors and industries across Ghana.",
  alternates: { canonical: "/" },
};

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
