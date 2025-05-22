import { Container } from "../shared/Container";
import { BtnW } from "../shared/BtnW";

export const Contact = () => {
  return (
    <section className="relative bg-primary-a0 bg-[url(/public/banners/contact_banner.jpg)] bg-cover bg-center bg-blur-md">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      <Container className="flex flex-col relative z-10">
        <div className="flex flex-col justify-center items-center text-white py-20 text-center">
          <h2 className="text-4xl font-bold">Got Anymore Questions?</h2>
          <p className="py-5">We’d love to hear from you!</p>
          <BtnW
            text={"Contact Us"}
            pillClassName={
              "bg-surface-a0 py-4 px-6 text-primary-a0 transition-transform duration-200 hover:scale-105"
            }
          />
        </div>
      </Container>
    </section>
  );
};
