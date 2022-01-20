import React from "react";
import accordionData from "../../Data/AccordionData/AccordionData";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  return (
    <>
      <div className="title">
        <h2>Accordion </h2>
      </div>
      <div className="container">
        <div className="w-50 m-auto">
          {accordionData.map((item) => (
            <AccordionItem key={item?.id} item={item}></AccordionItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
