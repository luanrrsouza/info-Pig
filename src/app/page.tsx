import { AboutProject } from "@/components/AboutProject";
import { HomeSection } from "@/components/InitialSection";
import { NavBar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <AboutProject />
    </>
  );
}
