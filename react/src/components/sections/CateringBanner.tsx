import { Banner } from "../shared/Banner";
import { BtnCater } from "../shared/BtnCater";
export const CateringBanner = () => {
  return (
    <section className="relative">
      <Banner
        subheading={"Get in Touch"}
        title={"We Offer Catering Services and Delivery Options"}
        bgImage="/public/banners/catering_banner.jpg"
      >
        <div>
          <BtnCater
            text={"Cater with Us"}
            pillClassName={
              "bg-surface-a0 py-4 px-6 text-primary-a0 transition-transform duration-200 hover:scale-105"
            }
          />
        </div>
      </Banner>
    </section>
  );
};
