interface TextImageProps {
  title: string;
  description: string;
  img: string;
  alt: string;
  textOrder: string;
}

export const TextImage = ({
  title,
  description,
  img,
  alt,
  textOrder,
}: TextImageProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5  pb-3 border-b-2 border-primary-a40/20 md:border-b-0 justify-center items-center">
      <div className={`flex flex-col ${textOrder}`}>
        <h2 className="text-[min(7vw,2.5rem)]/10 font-bold pb-5 w-full text-primary-a0">
          {title}
        </h2>
        <p className="text-base pb-5 ">{description}</p>
      </div>
      <div className="col-span-1 md:col-span-2 h-70">
        <div className="h-full w-full overflow-hidden rounded-2xl">
          <img src={img} alt={alt} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};
