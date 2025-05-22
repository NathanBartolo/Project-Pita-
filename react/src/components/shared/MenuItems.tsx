import { MenuCard } from "./MenuCard";
import menuData from "../../data/menu.json";

interface MenuItemData {
  image: string;
  name: string;
  price: number;
  rating: number;
  tags: string[];
}

const renderSection = (title: string, id: string, items: MenuItemData[]) => {
  return (
    <div
      className="section-menu-container pb-20 scroll-mt-50 md:scroll-mt-35"
      id={id}
    >
      <h2 className="text-[min(5vw,1.5rem)] font-semibold pb-3 md:pb-5">
        {title}
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
        {items.map((item, index) => (
          <MenuCard
            key={`${id}-${index}`}
            name={item.name}
            price={`${item.price} AED`}
            rating={item.rating}
            id={"item.id"}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export const MenuItems = () => {
  const menuItems = menuData as MenuItemData[];

  const bestItems = menuItems.filter((item) => item.tags.includes("best"));
  const mainItems = menuItems.filter((item) => item.tags.includes("main"));
  const dessertItems = menuItems.filter((item) =>
    item.tags.includes("dessert")
  );
  const beverageItems = menuItems.filter((item) =>
    item.tags.includes("beverages")
  );

  return (
    <div className="w-full">
      {renderSection("Best Sellers", "best", bestItems)}
      {renderSection("Main Course", "main", mainItems)}
      {renderSection("Dessert", "dessert", dessertItems)}
      {renderSection("Beverages", "beverages", beverageItems)}
    </div>
  );
};
