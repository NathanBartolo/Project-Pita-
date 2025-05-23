import { Container } from "../shared/Container";
import { BtnLink } from "../shared/BtnLink";
import { TitleDesc } from "../shared/TitleDesc";
export const About = () => {
  const galleryImages = [
    [
      "/gallery/food1.JPG",
      "/food/taho.jpg",
      "/gallery/food2.JPG",
    ],
    [
      "/gallery/small1.webp",
      "/gallery/crop5.jpg",
      "/gallery/crop1.jpg",
    ],
    [
      "/gallery/crop6.jpg",
      "/gallery/crop7.jpg",
      "/gallery/small2.jpg",
    ],
    [
      "/gallery/crop9.JPG",
      "/gallery/small3.webp",
      "/gallery/crop12.jpg",
    ],
  ];
  return (
    <section className="relative">
      <Container className="flex flex-col">
        <div className="flex flex-col mx-auto justify-center items-center">
          <TitleDesc
            title={"Pita, Dubai"}
            description={
              "Nestled in the heart of Deira, Pita, Dubai is your go-to destination for authentic Filipino flavors in the UAE. From the comforting aroma of freshly cooked adobo to the irresistible crunch of lumpia, Pita brings the vibrant essence of Filipino cuisine to life. Our goal is simple — to offer a place where kababayans and curious foodies alike can enjoy a hearty, affordable, and memorable meal that feels like home."
            }
          />
          {/* dynamic gallery */}
          <div className="columns-2 md:columns-4 gap-4 mb-10">
            {galleryImages.flat().map((src, idx) => (
              <div key={idx} className="mb-4 break-inside-avoid">
                    <img
                      className="w-full rounded-lg "
                      src={src}
                      alt={`Gallery Image ${idx}`}
                    />
              </div>
            ))}
          </div>

          <BtnLink
            text={"Read More"}
            className="py-3 px-5"
            link={"/AboutPage"}
          />
        </div>
      </Container>
    </section>
  );
};
