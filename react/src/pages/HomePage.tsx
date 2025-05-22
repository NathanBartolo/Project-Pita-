import { Hero } from "@/components/sections/Hero";
import { MenuHor } from "@/components/sections/MenuHor";
import { CateringBanner } from "@/components/sections/CateringBanner";
import { Reviews } from "@/components/sections/Reviews";
import { Questions } from "@/components/sections/Questions";
import { Support } from "@/components/sections/Support";
import { Contact } from "@/components/sections/Contact";
import { Location } from "../components/sections/Location";
import { About } from "@/components/sections/About";

const HomePage = () => {
  return (
    <>
      <Hero />
      <MenuHor />
      <About />
      <CateringBanner />
      <Reviews />
      <Questions />
      <Support />
      <Location />
      <Contact />
    </>
  );
};

export default HomePage;
