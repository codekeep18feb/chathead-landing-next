"use client";
import React, { useEffect, useState } from "react";
import styles from "./MyUiShowcase.module.css";

const sliderImages = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"];

const MyUiShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!hasMoved) setHasMoved(true);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hasMoved]);


  return (
    <div className={styles.container}>
      {/* Banner */}
      <div className={styles.banner}>
        <h1>Welcome to the UI Showcase</h1>
      </div>

      {/* Image */}
      <img src="/banner.jpg" alt="Banner" className={styles.image} />

      {/* List */}
      <ul className={styles.list}>
        <li>✔️ Responsive Design</li>
        <li>✔️ Accessible Components</li>
        <li>✔️ Clean Structure</li>
      </ul>

      {/* Button */}
      <button className={styles.button}>Click Me</button>

      {/* Card */}
      <div className={styles.card}>
        <h3>Card Title</h3>
        <p>This is a sample card description. Cards are useful to group content.</p>
      </div>

      {/* Form */}
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <button type="submit">Submit</button>
      </form>

      {/* Image Slider */}
      <div className={styles.slider}>
        <button onClick={handlePrev}>&lt;</button>
        <img src={sliderImages[currentSlide]} alt="Slide" className={styles.slideImage} />
        <button onClick={handleNext}>&gt;</button>
      </div>

      {hasMoved && (
        <div
          className={styles.mouseCircle}
          style={{ left: mousePos.x, top: mousePos.y }}
        >
          <div className={styles.centerDot}></div>
        </div>
      )}
    </div>
  );
};

export default MyUiShowcase;
