import { AboutProject } from "@/components/AboutProject";
import { AboutUs } from "@/components/AboutUs";
import { DisplaySanitaryGuidelines } from "@/components/BioSafetyPratices";
import { BiosecuritySection } from "@/components/BioSecurity/BioSecuritySection";
import { FacilitiesSection } from "@/components/Facilities/FacilitiesSection";
import { Footer } from "@/components/Footer";
import { HomeSection } from "@/components/InitialSection";
import { NavBar } from "@/components/Navbar";
import { Results } from "@/components/Results";
import { Vaccination } from "@/components/Vaccination";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <AboutProject />
      <DisplaySanitaryGuidelines />
      <BiosecuritySection />
      <FacilitiesSection />
      <Vaccination />
      <Results />
      <AboutUs />
      <Footer />
    </>
  );
}
