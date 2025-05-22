import { Container } from "../shared/Container";
import logo from "../../assets/Pita Logo.png";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { useCart } from "../shared/CartContext";
import { useState } from "react";

const navItems = [
  { link: "/", text: "Home" },
  { link: "/AboutPage", text: "About Us" },
  { link: "/ServicesPage", text: "Services" },
  { link: "/ContactPage", text: "Contact Us" },
];

export const Navbar = () => {
  const { toggleCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 inset-x-0 z-50 py-6 lg:px-10 shadow-md bg-surface-a0 hidd">
      <Container>
        <nav className="w-full flex items-center justify-between relative">
          {/* Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50z-40"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          {/* Slide-In Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-surface-a0 shadow-lg z-50 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
          >
            <ul className="flex flex-col gap-6 p-6 text-black">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavItem
                    link={item.link}
                    text={item.text}
                    key={index}
                    onClick={() => setIsMenuOpen(false)}
                  />
                </li>
              ))}
              <li>
                <BtnLink text="Order Now" link="/Menu" className="w-full" />
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="min-w-max inline-flex">
            <a href="/" className="flex items-center gap-3">
              <img src={logo} alt="Pita Logo" className="w-25 md:w-40" />
            </a>
          </div>

          {/* Nav links (centered on md and up) */}
          <ul className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-x-6 text-black">
            {navItems.map((item, index) => (
              <NavItem link={item.link} text={item.text} key={index} />
            ))}
          </ul>

          {/* Hamburger + Button */}
          <div className="flex items-center gap-4 min-w-max">
            {/* Order Button */}
            <BtnLink
              text="Order Now"
              link="/Menu"
              className={"hidden md:block"}
            />
            <button
              onClick={() => toggleCart(true)}
              className="text-surface-a0 bg-primary-a0 rounded-full text-[5px] py-2 px-4"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>

            {/* Hamburger icon (visible below md) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block md:hidden space-y-1.5"
            >
              <span className="block w-6 h-0.5 bg-primary-a0"></span>
              <span className="block w-6 h-0.5 bg-primary-a0"></span>
              <span className="block w-6 h-0.5 bg-primary-a0"></span>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
