import { useCart } from "../shared/CartContext";

interface BtnWProps {
  text: string;
  pillClassName: string;
}

export const BtnW = ({ text, pillClassName = "" }: BtnWProps) => {
  const { cart } = useCart();

  const handleWhatsAppOrder = () => {
    const phone = "971529141077";

    if (cart.length === 0) {
      const defaultMessage =
        "Hello, Contacting from the Pita Restaurant Website.";
      const encoded = encodeURIComponent(defaultMessage);
      window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
      return;
    }

    const message = cart
      .map(
        (item) =>
          `${item.quantity}x ${item.name}\nAED ${item.price * item.quantity}`
      )
      .join("\n");

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const fullMessage = `New Order List:\n${message}\n\nTotal: AED ${total}`;
    const encoded = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${phone}?text=${encoded}`;

    window.open(whatsappURL, "_blank");
  };
  return (
    <button
      onClick={handleWhatsAppOrder}
      className={`text-xs lg:text-base py-2 px-4 rounded-full ${pillClassName}`}
    >
      <span className="relative z-10 font-semibold">{text}</span>
    </button>
  );
};
