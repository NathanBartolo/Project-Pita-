import { useCart } from "../shared/CartContext";
import { Plus } from "lucide-react"; // Optional icon lib

interface MenuCardProps {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
}

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  return "★".repeat(fullStars) + (halfStar ? "☆" : "");
};

export const MenuCard = ({ id, name, price, rating, image }: MenuCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const numericPrice = parseFloat(price.replace(/[^\d.]/g, ""));
    addToCart({ id, name, price: numericPrice });
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="flex h-50 md:h-70 w-full items-end overflow-hidden rounded-3xl bg-primary-a0 shadow-md shadow-primary-a0/20 bg-cover bg-center"
      >
        <div className="h-20 md:h-30 w-full bg-surface-a0 py-2 px-4 flex flex-col justify-between">
          <h4 className="text-[min(3vw,1.2rem)]/tight  font-semibold">
            {name}
          </h4>
          <div className="flex flex-row justify-between">
            <div>
              <p className="text-[min(3vw,0.8rem)]">{price}</p>
              <p className="text-[min(3vw,0.8rem)] text-yellow-500">
                {renderStars(rating)}
              </p>
            </div>
            {/* Plus Icon */}
            <button
              onClick={handleAddToCart}
              className="bg-primary-a30 rounded-full p-[min(4vw,0.8rem)] hover:bg-primary-a0 transition"
            >
              <Plus className="w-[min(2vw,1rem)] h-[min(2vw,1rem)] text-surface-a0" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
