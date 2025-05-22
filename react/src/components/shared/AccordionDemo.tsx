import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <div className="px-15">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            What are you known for?
          </AccordionTrigger>
          <AccordionContent>
            Pita is best known for its home-style Filipino meals made with love
            — especially our sizzling sisig, kare-kare, and grilled chicken
            inasal. Our generous portions, bold flavors, and warm hospitality
            keep our customers coming back for more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">
            What meals do you serve?
          </AccordionTrigger>
          <AccordionContent>
            We serve a full range of traditional Filipino dishes, from breakfast
            silogs and savory stews to grilled favorites and sweet desserts.
            Whether you're craving tapsilog in the morning or crispy pata for
            dinner, Pita has you covered.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">
            Do you offer delivery?
          </AccordionTrigger>
          <AccordionContent>
            Yes! We offer delivery services across the Dubai emirate, so you can
            enjoy your favorite Filipino meals from the comfort of your home.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg">
            What areas do you serve
          </AccordionTrigger>
          <AccordionContent>
            We deliver across Dubai, including areas near Deira contact us to
            know more.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
