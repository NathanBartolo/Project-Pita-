import { Container } from "../shared/Container";

export const Hero = () => {
  return (
    <section className="relative">
      <Container className="flex">
        <div
          className="relative flex h-120 w-full flex-col items-start justify-end 
                     rounded-4xl bg-cover bg-center bg-[url(/banners/hero_banner.jpg)] 
                     px-5 md:px-25 py-10 text-white overflow-hidden"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 rounded-4xl z-0" />

          {/* Text Content */}
          <div className="relative z-10">
            <p className="text-[min(4vw,1rem)]/tight border-l-2 pl-2 sm:border-l-4 sm:pl-3">
              Authentic Pinoy Cuisine in Dubai
            </p>
            <h2 className="text-[min(7vw,4rem)]/tight font-bold pt-5 w-full xl:max-w-2/3">
              The Place Where You Belong
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
};
