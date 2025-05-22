import { createContext, useContext, useState, type ReactNode } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export type AddableCartItem = Omit<CartItem, "quantity">;

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (name: string) => void;
  increment: (name: string) => void;
  decrement: (name: string) => void;
  isOpen: boolean;
  toggleCart: (open?: boolean) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = (open?: boolean) => {
    setIsOpen((prev) => (typeof open === "boolean" ? open : !prev));
  };

  const addToCart = (item: AddableCartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        toggleCart(true);
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const increment = (name: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (name: string) => {
    setCart((prev) => {
      const updated = prev
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);

      if (updated.length === 0) toggleCart(false);

      return updated;
    });
  };

  const removeFromCart = (name: string) => {
    const updated = cart.filter((item) => item.name !== name);
    setCart(updated);
    if (updated.length === 0) toggleCart(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increment,
        decrement,
        isOpen,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
