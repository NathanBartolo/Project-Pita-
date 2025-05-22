import { Banner } from "../components/shared/Banner";
import { Story } from "@/components/sections/Story";
import { Questions } from "../components/sections/Questions";
import { Contact } from "../components/sections/Contact";
import { Support } from "../components/sections/Support";

const AboutPage = () => {
  return (
    <>
      <Banner
        subheading={"Authentic Pinoy Cuisine in Dubai"}
        title={"Serving our Filipino Community since 1995"}
        bgImage="/public/banners/about_banner.jpg"
      />
      <Story />
      <Support />
      <Questions />
      <Contact />
    </>
  );
};

export default AboutPage;
