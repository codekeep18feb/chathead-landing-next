"use client";
import { useState } from "react";
import styles from "./Tabs.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { image, sections } = slides[index];

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slide}>
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className={styles.slideImage}
          />

          <button className={styles.prevButton} onClick={handlePrev}>
            <FaChevronLeft />
          </button>

          <button className={styles.nextButton} onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>

        {sections.map((section, idx) => (
          <div key={idx} className={styles.section}>
            {section.heading && <h2>{section.heading}</h2>}
            {section.subheading && <h4>{section.subheading}</h4>}
            {section.paragraph && <p>{section.paragraph}</p>}
            {section.list && (
              <ul>
                {section.list.map((item, liIdx) => (
                  <li key={liIdx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
