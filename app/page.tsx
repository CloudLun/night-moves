import Image from "next/image";

import Nav from "@/component/Nav";
import LandingPage from "@/pages/LandingPage";
import NarrativeIntroPage from "@/pages/NarrativeIntroPage";
import TaxiCostIntroPage from "@/pages/TaxiCostIntroPage";
import ArrowMapPage from "@/pages/ArrowMapPage";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] bg-black">
      <Nav />
      <LandingPage />
      <NarrativeIntroPage />
      <TaxiCostIntroPage />
      <ArrowMapPage />
    </main>
  );
}
