import { NavLink } from "react-router-dom";

interface BtnLinkProps {
  link: string;
  text: string;
  className?: string;
}

export const BtnLink = ({ link, text, className }: BtnLinkProps) => {
  return (
    <NavLink
      to={link}
      className={`bg-primary-a0 hover:bg-primary-a0/90 text-base lg:text-base text-white font-semibold py-2 px-4 rounded-full ${className}`}
    >
      <span className="relative z-10">{text}</span>
    </NavLink>
  );
};
