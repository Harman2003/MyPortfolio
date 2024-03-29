import * as React from "react";

import {
  CarouselSection,
  HeroSection,
  IntroSection,
  ProjectSection
} from "../sections";
import { Footer, RoundedBulge } from "@/components";


export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <IntroSection />
        <ProjectSection />
        <CarouselSection />
        <RoundedBulge />
      </main>
      <Footer />
    </>
  );
}

