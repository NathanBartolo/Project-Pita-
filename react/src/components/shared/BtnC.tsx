import { NavLink } from "react-router-dom";

interface BtnCProps {
  link: string;
  text: string;
  pillClassName: string;
}

export const BtnC = ({ link, text, pillClassName = "" }: BtnCProps) => {
  return (
    <NavLink
      to={link}
      className={`text-xs lg:text-base py-2 px-4 rounded-full ${pillClassName}`}
    >
      <span className="relative z-10 font-semibold">{text}</span>
    </NavLink>
  );
};
