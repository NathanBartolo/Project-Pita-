import { Container } from "../shared/Container";
import { FooterItem } from "../shared/FooterItem";
import logo from "../../assets/Pita Logo.png";

const footerItemcol1 = [
  { href: "#", text: "Home" },
  { href: "#services", text: "About Us" },
  { href: "#about-us", text: "Services" },
  { href: "#features", text: "Contact Us" },
];
const footerItemcol2 = [
  { href: "#", text: "WhatsApp" },
  { href: "#services", text: "E-mail" },
  { href: "#about-us", text: "Facebook" },
  { href: "#features", text: "Instagram" },
];
const footerItemcol3 = [
  { href: "#", text: "Menu" },
  { href: "#services", text: "Our Newsletter" },
  { href: "#about-us", text: "Loyalty Program" },
];

export const Footer = () => {
  return (
    <section className="relative bg-surface-a0">
      <Container className="flex">
        <div
          className="flex w-full flex-col gap-5
                          rounded-t-4xl bg-primary-a0 px-15 py-20 text-white"
        >
          <div className="flex flex-col lg:flex-row items-start md:items-center justify-between pb-5">
            {/* logo */}
            <div className="min-w-max inline-flex">
              <a href="/" className="flex items-center gap-3">
                <img src={logo} alt="Pita Logo" className="w-40 md:w-60" />
              </a>
            </div>
            {/* footerlinks */}
            <div className="grid md:grid-cols-3 gap-3 pt-5 lg:pt-0 grid-cols-1 justify-start items-start">
              <ul className="text-base/relaxed">
                {footerItemcol1.map((item, index) => (
                  <FooterItem href={item.href} text={item.text} key={index} />
                ))}
              </ul>
              <ul className="text-base/relaxed">
                {footerItemcol2.map((item, index) => (
                  <FooterItem href={item.href} text={item.text} key={index} />
                ))}
              </ul>
              <ul className="text-base/relaxed">
                {footerItemcol3.map((item, index) => (
                  <FooterItem href={item.href} text={item.text} key={index} />
                ))}
              </ul>
            </div>
          </div>
          <span className="bg-white outline-1 outline-white w-full"></span>
          <div className="flex gap-2 justify-start items-start flex-col md:flex-row sm:gap-5 sm:justify-center lg:justify-start ">
            <p>@2025 Pita Restaurant</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
