import { Container } from "../shared/Container";
import { BtnLink } from "../shared/BtnLink";
import { TitleDesc } from "../shared/TitleDesc";
export const About = () => {
  const galleryImages = [
    [
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    ],
    [
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    ],
    [
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    ],
    [
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4">
            {galleryImages.map((column, colIdx) => (
              <div key={colIdx} className="grid gap-4">
                {column.map((src, imgIdx) => (
                  <div key={imgIdx}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={src}
                      alt={`Gallery Image ${colIdx}-${imgIdx}`}
                    />
                  </div>
                ))}
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
