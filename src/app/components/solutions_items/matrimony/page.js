"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import matrimonySty from "./matrimony.module.css";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0); // Default open first section

  // const toggleAccordion = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  const toggleAccordion = (index) => {
    if (openIndex !== index) {
        setOpenIndex(index); // Open the clicked accordion and close the previous one
    }
};

  return (
    <div className={matrimonySty.accordionContainer}>
      <div className={matrimonySty.leftSection}>
        {items.map((item, index) => (
          <div key={index} className={matrimonySty.accordionItem}>
            <button
              className={matrimonySty.accordionButton}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <FaAngleDown
                className={`${matrimonySty.icon} ${
                  openIndex === index ? matrimonySty.rotate : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className={matrimonySty.accordionContent}>
                <h4 className={matrimonySty.subHeading}>{item.subheading}</h4>
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={matrimonySty.rightSection}>
        {console.log("Image Path:", items[openIndex]?.image)}
        <img
          src={items[openIndex]?.image}
          alt={items[openIndex]?.title}
          className={matrimonySty.image}
        />
      </div>
    </div>
  );
}
