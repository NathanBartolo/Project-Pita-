import { useCart } from "../shared/CartContext";
import { useEffect } from "react";
import { BtnW } from "./BtnW";

export const CartDrawer = () => {
  const { cart, increment, decrement, isOpen, toggleCart } = useCart();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup when unmounted
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-colors duration-300"
          onClick={() => toggleCart(false)}
        ></div>
      )}
      <div
        className={`fixed right-0 inset-y-30 h-[calc(100dvh-9rem)] md:inset-y-35 md:h-[calc(100dvh-10rem)] w-1/2 md:w-1/3 lg:w-1/4 rounded-3xl overflow-hidden bg-surface-a0 shadow-xl z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0 mr-4  md:mr-8" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b-1 bg-primary-a0 border-primary-a0">
          <h2 className="text-text-[min(3vw,1.2rem)]/tight font-bold text-surface-a0">
            Cart
          </h2>
          <button onClick={() => toggleCart(false)} className="text-surface-a0">
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar p-4 space-y-2 max-h-[calc(100dvh-20rem)]">
          {cart.map((item) => (
            <div
              key={item.name}
              className="bg-surface-a0 shadow-md rounded-lg p-3 flex justify-between items-center"
            >
              <div>
                <p className="text-[min(3vw,1rem)]">{item.name}</p>
                <p className="text-[min(3vw,1rem)] text-primary-a40">{`AED ${item.price}`}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrement(item.name)}
                  className="px-1.5 py-0.5 md:px-2 md:py-1 bg-primary-a30 text-white rounded"
                >
                  -
                </button>
                <span className="text-[min(3vw,1rem)]">{item.quantity}</span>
                <button
                  onClick={() => increment(item.name)}
                  className="px-1.5 py-0.5 md:px-2 md:py-1 bg-primary-a30 text-white rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          {cart.length === 0 && (
            <p className="text-center text-gray-400">Cart is empty</p>
          )}
        </div>

        {/* Fixed Button at Bottom */}
        <div className="px-4 py-6 inset-shadow-md bg-surface-a0">
          <BtnW
            text={"Order in WhatsApp"}
            pillClassName={
              "w-full text-white bg-primary-a0 py-4 px-5 rounded-lg text-[min(3vw,1rem)]"
            }
          />
        </div>
      </div>
    </>
  );
};
