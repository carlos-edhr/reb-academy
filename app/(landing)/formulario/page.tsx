import React from "react";
import { RegistrationForm } from "../_components/sections/register-section";
import Navbar from "../_components/sections/navbar";
import { FooterSection } from "../_components/sections/footer-section";

export default function page() {
  return (
    <div>
      <Navbar />

      <RegistrationForm />
      <FooterSection />
    </div>
  );
}
