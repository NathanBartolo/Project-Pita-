import { TitleDesc } from "../shared/TitleDesc";
import { Container } from "../shared/Container";
import { TextImage } from "../shared/TextImage";
export const Story = () => {
  return (
    <section>
      <Container>
        <TitleDesc
          className="pb-10"
          title={"Our Story"}
          description="Pita began as a small kitchen with a big dream — to bring the heart of the Philippines to the streets of Dubai. What started as a humble food concept has grown into a beloved restaurant known for authentic dishes, community warmth, and consistent flavor."
        />
        <div className="flex flex-col gap-10 py-10">
          <TextImage
            title={"Behind the Success"}
            description={
              "Behind every dish is a team of passionate Filipinos who understand the value of good food and even better company. From our chefs to our service crew, each member of the Pita family is dedicated to creating a dining experience that goes beyond just filling your stomach — it fills your soul."
            }
            img={
              "/gallery/story1.JPG"
            }
            alt={"Behind the Success"}
            textOrder={"order-last md:order-first"}
          />
          <TextImage
            title={"The Experience"}
            description={
              "Dining at Pita is more than just a meal — it's a celebration of Filipino culture. The moment you walk in, you're welcomed with the familiar scent of traditional dishes and the cheerful chatter that feels like home. Whether you're dining in or ordering out, you’ll experience the warm, genuine hospitality that defines the Filipino spirit."
            }
            img={
              "/gallery/story2.JPG"
            }
            alt={"Behind the Success"}
            textOrder={"order-last"}
          />
          <TextImage
            title={"A Taste of Home"}
            description={
              "For every OFW missing a taste of the Philippines, Pita serves as your second kitchen. Our menu is filled with comforting classics that bring back memories of Sunday lunches, fiestas, and family gatherings. Each bite tells a story — your story, our story, the Filipino story."
            }
            img={
              "/gallery/beef_tapa.jpg"
            }
            alt={"A Taste of Home"}
            textOrder={"order-last md:order-first"}
          />
        </div>
      </Container>
    </section>
  );
};
