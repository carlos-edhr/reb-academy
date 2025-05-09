import Image from "next/image";
import Hero from "./_components/sections/hero";
import AnimatedCounter from "./_components/secondary/animated-counter";
import AppShowcase from "./_components/sections/showcase";
import Navbar from "./_components/sections/navbar";
import LogoShowcase from "./_components/sections/logos-showcase";
import FeatureCards from "./_components/sections/feature-cards";
import Experience from "./_components/sections/experience-timeline";
import TechStack from "./_components/sections/tech-stack";
import Testimonials from "./_components/sections/testimonials";
import Contact from "./_components/sections/contact";

import { ProgramsSection } from "./_components/sections/programs-section";
import { TrainersSection } from "./_components/sections/tainers-section";
import { PersonalTrainingSection } from "./_components/sections/personal-training-section";
import { GallerySection } from "./_components/sections/gallery-section";
import { MerchandiseSection } from "./_components/sections/merchandise-section";
import { RegistrationForm } from "./_components/sections/register-section";
import { FooterSection } from "./_components/sections/footer-section";

export default function Home() {
  return (
    <div className="">
      {/* <h1 className="bg-azulAstro underline">3d portfolio</h1> */}
      <Navbar />
      <Hero />
      <ProgramsSection />
      <TrainersSection />
      <PersonalTrainingSection />
      <GallerySection />
      <MerchandiseSection />
      <RegistrationForm />
      <FooterSection />
      {/* <AppShowcase />
      <LogoShowcase />
      <FeatureCards />
      <Experience /> */}
      {/* <TechStack /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}
