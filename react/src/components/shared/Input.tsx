import { useState } from "react";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Example: Send via WhatsApp
    const whatsappURL = `https://wa.me/971529141077?text=${encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`;
    window.open(whatsappURL, "_blank");

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="pt-10">
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              className="w-full py-2 px-2 border-b-2 focus:border-b-primary-a0 focus:outline-none focus:bg-primary-a0/10"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className="w-full py-2 px-2 border-b-2 focus:border-b-primary-a0 focus:outline-none focus:bg-primary-a0/10"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className="w-full py-2 px-2 border-b-2 focus:border-b-primary-a0 focus:outline-none focus:bg-primary-a0/10"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <textarea
              className="w-full py-2 px-2 border-b-2 focus:border-b-primary-a0 focus:outline-none focus:bg-primary-a0/10"
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-a0 rounded-full text-white py-2 px-4 hover:bg-primary-a0/90 transition"
          >
            Send
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-green-600 text-center font-medium">
            Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </section>
  );
};
