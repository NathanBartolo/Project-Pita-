interface BtnCaterProps {
  text: string;
  pillClassName: string;
}

export const BtnCater = ({ text, pillClassName = "" }: BtnCaterProps) => {
  const handleWhatsAppCatering = () => {
    const phone = "971529141077"; // WhatsApp number
    const defaultMessage =
      "Hello, I want to know more about your catering services"; // Message for catering inquiry
    const encoded = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppCatering}
      className={`text-xs lg:text-base py-2 px-4 rounded-full ${pillClassName}`}
    >
      <span className="relative z-10 font-semibold">{text}</span>
    </button>
  );
};
