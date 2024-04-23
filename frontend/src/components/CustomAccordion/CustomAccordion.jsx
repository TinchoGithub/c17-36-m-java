import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function CustomAccordion({ accordionData, textClass }) {
  const data = [
    { title: "Header", text: "description" },
    { title: "Header", text: "description" },
    { title: "Header", text: "description" },
    { title: "Header", text: "description" },
  ];

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      {accordionData?.map(({ title, text }, index) => (
        <Accordion open={open === index + 1} icon={<Icon id={index + 1} open={open} />}>
          <AccordionHeader className="border-b-0 p-2 font-inter text-sm text-white hover:text-white" onClick={() => handleOpen(index + 1)}>
            {title}
          </AccordionHeader>
          <AccordionBody className={`pt-0 mt-0 font-inter text-white ${textClass}`}>{text}</AccordionBody>
        </Accordion>
      ))}
    </>
  );
}

export default CustomAccordion;
