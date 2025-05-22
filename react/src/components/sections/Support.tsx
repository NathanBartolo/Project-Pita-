import { Container } from "../shared/Container";
import { BtnC } from "../shared/BtnC";
import { BtnW } from "../shared/BtnW";

export const Support = () => {
  return (
    <section className="relative bg-primary-a0 bg-[url(/banners/support_banner.jpg)] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <Container className="flex flex-col relative z-10">
        <div className="flex flex-col justify-start items-start text-white py-35">
          <h2 className="text-[min(7vw,2rem)]/tight pt-5 w-full lg:max-w-2/3">
            Order Directly from our website or via our WhatsApp to save money on
            fees, get faster service, and support local businesses.
          </h2>
          <div className="flex pt-5 gap-3">
            <BtnW
              text={"WhatsApp"}
              pillClassName={
                "bg-surface-a0 py-4 px-6 text-primary-a0 transition-transform duration-200 hover:scale-105"
              }
            />
            <BtnC
              link={"/Menu"}
              text={"Order Online"}
              pillClassName={
                "outline-2 outline-surface-a0 outline-offset-0 py-4 px-6 hover:bg-surface-a0 transition-colors hover:outline-transparent hover:text-primary-a0 transition-transform duration-200 hover:scale-105"
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
