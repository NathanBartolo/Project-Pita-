import { Container } from "../shared/Container";
import { TitleDesc } from "../shared/TitleDesc";
import { ContactUs } from "../shared/Input";
export const Location = () => {
  return (
    <section className="relative">
      <Container className="flex flex-col">
        <TitleDesc title={"Where Can You Find Us?"} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-primary-a0">
          <div className="mx-auto w-[1000px] max-w-full overflow-hidden rounded-3xl col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.061899886115!2d55.31105284072107!3d25.26850307775814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43556e1eebfb%3A0x7fa2f8a7a0644060!2sPita%20Restaurant!5e0!3m2!1sen!2sae!4v1747392056316!5m2!1sen!2sae"
              className="w-full h-[500px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col justify-between w-full">
            <h3 className="text-3xl font-bold">Pita Restaurant</h3>
            <p>For more inquiries please don't hesitate to reach out to us.</p>
            <ContactUs />
          </div>
        </div>
      </Container>
    </section>
  );
};
