interface ReviewCardProps {
  cardClassName?: string;
  customer: string;
  rating: string;
  meal: string;
  description: string;
}

export const ReviewCard = ({
  customer,
  rating,
  meal,
  description,
  cardClassName = "",
}: ReviewCardProps) => {
  return (
    <>
      <div
        className={`rounded-3xl bg-primary-a0 px-5 py-7 md:px-7 md:py-10 text-white ${cardClassName}`}
      >
        <h4 className="text-lg md:text-xl">{customer}</h4>
        <div className="pt-3 md:pt-5">
          <h4 className="text-lg md:text-xl">{rating}</h4>
          <h5 className="text-sm">{meal}</h5>
        </div>
        <p className="text-sm md:text-base pt-3 md:pt-5">{description}</p>
      </div>
    </>
  );
};
