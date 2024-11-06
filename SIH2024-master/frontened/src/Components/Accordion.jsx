import React, { useState } from "react";
import "../Css/Accordion.css"; // Assuming your CSS is in this file
import Line from "./Line";
import { faqItems } from "../data/FAQData/faq-data";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="accordion-item">
        <button aria-expanded={isOpen} onClick={toggleAccordion}>
          <span className="accordion-title">{title}</span>
          <span
            className={`accordion-icon ${isOpen ? "open" : ""}`}
            aria-hidden="true"
          ></span>
        </button>
        <div
          className="accordion-content"
          style={{
            maxHeight: isOpen ? "9em" : "0",
            opacity: isOpen ? "1" : "0",
          }}
        >
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

const Accordion = () => {
  return (
    <div className="fnq-section">
      <div className="accordion-heading-container">
        <Line />
        <p>Frequently Asked Questions</p>
      </div>
      <div className="accordion-container">
        <div className="accordion">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
