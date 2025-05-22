import { Questions } from "../components/sections/Questions";
import { Banner } from "../components/shared/Banner";
import { MenuHor } from "../components/sections/MenuHor";
import { Support } from "../components/sections/Support";
import { Location } from "../components/sections/Location";
import { BtnW } from "@/components/shared/BtnW";

const ServicesPage = () => {
  return (
    <>
      <Banner
        subheading={"Get in Touch"}
        title={"We Offer Catering Services and Delivery Options"}
        bgImage="/public/banners/service_banner.jpg"
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
      <MenuHor />
      <Support />
      <Questions />
      <Location />
    </>
  );
};

export default ServicesPage;
