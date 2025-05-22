import { NavLink } from "react-router-dom";

// NavItem.tsx
type NavItemProps = {
  link: string;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const NavItem = ({ link, text, onClick }: NavItemProps) => {
  return (
    <li>
      <NavLink
        to={link}
        onClick={onClick}
        className={({ isActive }) =>
          [
            "text-primary-a0 text-sm lg:text-base hover:underline underline-offset-6 transition-all duration-150",
            isActive ? "font-bold underline" : "",
          ].join(" ")
        }
        // className={`text-primary-a0 text-sm lg:text-base hover:underline underline-offset-6 transition-all duration-150 ${
        //   isActive ? "font-bold underline" : ""
        // }`}
      >
        {text}
      </NavLink>
    </li>
  );
};
