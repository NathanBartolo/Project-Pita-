import { AccordionDemo } from "../shared/AccordionDemo";
import { Container } from "../shared/Container";
import { TitleDesc } from "../shared/TitleDesc";
export const Questions = () => {
  return (
    <section className="relative">
      <Container className="flex flex-col">
        <TitleDesc title={"Frequently Asked Questions"} />
        <AccordionDemo />
      </Container>
    </section>
  );
};
