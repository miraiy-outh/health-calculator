import { Accordion, AccordionItem } from "@heroui/react";

export const Page = () => {
  return (
    <div>
      <div>Калькулятор здоровья</div>
      <Accordion isCompact>
        <AccordionItem key="1" aria-label="IMT" title="ИМТ"></AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Accordion 2"
        ></AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Accordion 3"
        ></AccordionItem>
      </Accordion>
    </div>
  );
};
