"use client";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./CarouselStyle.module.css";

const Carousel = ({ slides, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <h1>{title}</h1>
        <p>{description}</p>

        <div className={styles.arrowBtn}>
          <button className={styles.leftArrow} onClick={prevSlide}>
            <FaChevronLeft size={18} />
          </button>
          <button className={styles.rightArrow} onClick={nextSlide}>
            <FaChevronRight size={18} />
          </button>
        </div>

        <div
          className={styles.slideContainer}
          style={{
            transform: isMobile
              ? `translateX(-${currentIndex * 100}%)`
              : `translateX(calc(-${currentIndex * 95}% - 40px))`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === slides.length - 1 ? styles.lastSlide : ""
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={styles.image}
                onClick={nextSlide}
              />
              <div className={styles.overlay}>
                <div className={styles.testimonial}>
                  <img
                    src={slide.logo}
                    alt="Company Logo"
                    className={styles.logo}
                  />
                  <div className={styles.text_content}>
                    <p className={styles.text}>{slide.text}</p>
                    <div className={styles.author}>
                      <div>
                        <span className={styles.name}>{slide.author}</span> —{" "}
                        <span className={styles.role}>{slide.designation}</span>
                      </div>
                      <button className={styles.readMore}>Read more →</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
