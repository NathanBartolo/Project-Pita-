import { Container } from "../shared/Container";
import { TitleDesc } from "../shared/TitleDesc";
import { ReviewCard } from "../shared/ReviewCard";
export const Reviews = () => {
  return (
    <section className="relative">
      <Container className="flex flex-col">
        <div className="flex flex-col mx-auto justify-center items-center">
          <TitleDesc
            title={"What Customers Are Saying About Us"}
            description={
              "Over 200+ happy and fulfilled customers have left our doors satisfied and ready to order for more."
            }
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-25 items-start gap-3 lg:gap-5">
          <div className="flex flex-col gap-3 lg:gap-5">
            <ReviewCard
              customer={"Mariely Melencion"}
              rating={"5.0 ★★★★★"}
              meal={"Breakfast | Dine-In | AED 1-50"}
              description={
                "We went there before 9am luckily they open just on time so we waited inside the restaurant. The place is small just like a small carinderia back home in the Philippines but they have tables outside as well. The music is great you can easily jive. Highly recommend the chicken sisig its really creamy and tasty. They have the best halo-halo so come visit pita restaurant."
              }
            />
            <ReviewCard
              customer={"Mariely Melencion"}
              rating={"5.0 ★★★★★"}
              meal={"Breakfast | Dine-In | AED 1-50"}
              description={
                "We love their cheesecake! So delicious, beats the cakes in hotel buffets. Very fluffy, yummy and fresh! Very good addition to any occasion or even when you are just craving for it."
              }
            />
          </div>
          <div className="flex flex-col gap-3 lg:gap-5">
            <ReviewCard
              customer={"Mariely Melencion"}
              rating={"5.0 ★★★★★"}
              meal={"Breakfast | Dine-In | AED 1-50"}
              description={
                "The food was absolutely delicious, just like home-cooked meals. The staff were very accommodating and made us feel welcome. A true taste of the Philippines!"
              }
            />
            <ReviewCard
              customer={"Mariely Melencion"}
              rating={"5.0 ★★★★★"}
              meal={"Breakfast | Dine-In | AED 1-50"}
              description={
                "We went there before 9am luckily they open just on time so we waited inside the restaurant. The place is small just like a small carinderia back home in the Philippines but they have tables outside as well. The music is great you can easily jive. Highly recommend the chicken sisig its really creamy and tasty. They have the best halo-halo so come visit pita restaurant."
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
