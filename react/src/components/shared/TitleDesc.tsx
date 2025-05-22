interface TitleDescProps {
  title: string;
  description?: string;
  className?: string;
}

export const TitleDesc = ({
  title,
  description = "",
  className = "",
}: TitleDescProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <h2 className="text-[min(8vw,3rem)]/tight font-bold pt-5 w-full text-primary-a0 text-center">
        {title}
      </h2>
      <p className="text-base py-5 text-center">{description}</p>
    </div>
  );
};
