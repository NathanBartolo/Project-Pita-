import { Location } from "../components/sections/Location";
import { Support } from "../components/sections/Support";
import { Reviews } from "../components/sections/Reviews";
import { Banner } from "@/components/shared/Banner";
import { Questions } from "../components/sections/Questions";
import { BtnW } from "@/components/shared/BtnW";

const ContactPage = () => {
  return (
    <>
      <Location />
      <Reviews />
      <Banner
        subheading={"Get in Touch"}
        title={"We Offer Catering Services and Delivery Options"}
        bgImage="/public/banners/questions_banner.jpg"
      >
        <div>
          <BtnW
            text={"Cater with Us"}
            pillClassName={
              "bg-surface-a0 py-4 px-6 text-primary-a0 transition-transform duration-200 hover:scale-105"
            }
          />
        </div>
      </Banner>
      <Questions />
      <Support />
    </>
  );
};

export default ContactPage;
