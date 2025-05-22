import { useState } from "react";
import { Container } from "../components/shared/Container";
import { MenuItems } from "../components/shared/MenuItems";

interface MenuItemProps {
  id: string;
  label: string;
}

const Menu = () => {
  const [activeSection, setActiveSection] = useState("best");
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveSection(id);
  };

  const menuItems: MenuItemProps[] = [
    { id: "best", label: "Best Sellers" },
    { id: "main", label: "Main Course" },
    { id: "dessert", label: "Dessert" },
    { id: "beverages", label: "Beverages" },
  ];
  return (
    <section className="relative">
      <div className="w-full fixed top-0 md:hidden h-45.5 bg-surface-a0 z-5"></div>
      <Container className=" relative flex flex-col md:flex-row gap-5 md:gap-15 items-start">
        <div className="w-full md:w-1/3 sticky top-30 md:top-35 z-10 border-b-1 border-primary-a0/50 pb-5 md:border-b-0">
          <ul className="flex flex-row md:flex-col gap-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left w-full text-[min(2.5vw,1.125rem)] py-2 px-4 rounded-lg transition 
                    ${
                      activeSection === item.id
                        ? "bg-surface-a30 font-semibold"
                        : "hover:bg-surface-a20"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <p className=" hidden md:block px-4 pt-10 font-semibold text-primary-a50">
            *Note that when you exit the menu page your cart will be reset.
          </p>
        </div>
        <MenuItems />
      </Container>
    </section>
  );
};

export default Menu;
