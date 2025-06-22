"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import styles from "./AccordionStyle.module.css";

export default function AccordionSection({
  heading,
  description,
  items = [],
  defaultOpenIndex = 0,
  showImage = true,
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggleAccordion = (index) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  return (
    <div className={styles.accordionContainer}>
      {heading && <h1>{heading}</h1>}
      {description && <p>{description}</p>}

      <div className={styles.accordion_content}>
        <div className={styles.leftSection}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${
                openIndex === index ? styles.activeItem : ""
              }`}
            >
              <button
                className={styles.accordionButton}
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <FaAngleDown
                  className={`${styles.icon} ${
                    openIndex === index ? styles.rotate : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className={styles.accordionContent}>
                  {item.subheading && (
                    <h4 className={styles.subHeading}>{item.subheading}</h4>
                  )}
                  <p className={styles.accordiontext}>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {showImage && items[openIndex]?.image && (
          <div className={styles.rightSection}>
            <img
              src={items[openIndex].image}
              alt={items[openIndex].title || "Accordion Image"}
              className={styles.image}
            />
          </div>
        )}
      </div>
    </div>
  );
}
