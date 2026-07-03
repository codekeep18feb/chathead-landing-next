"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

// ─── useCountUp Hook ───────────────────────────────────────────────
const useCountUp = (end, duration = 1800, startCounting = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting || isNaN(end)) return;
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);
  return count;
};

const HeroSection = ({
  // Customizable props with defaults
  badge = "⚡ Intent‑Driven Infrastructure",
  title = "Turn Your Chatbot Into a",
  highlightedText = "Real‑Time Action Engine",
  subtitle = "Connect your AI bot directly to your backend APIs – single endpoints or complex chains. Authenticated or unauthenticated. All without writing a single line of code.",
  primaryButtonText = "See the Platform →",
  secondaryButtonText = "Book a Demo",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
  stats = [
    { value: 25, suffix: "+", label: "Industries" },
    { value: 200, suffix: "+", label: "Pre‑built Intents" },
    { value: 500, suffix: "+", label: "API Calls Supported" },
    { value: 3, suffix: " min", label: "Avg. Config Time" },
  ],
  showShapes = true,
  showButtons = true, // New prop to control button visibility
  customClass = "",
}) => {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Animated counters for numeric stats
  const animatedStats = stats.map((stat) => {
    const numericValue = typeof stat.value === 'number' ? stat.value : 0;
    const animatedValue = useCountUp(numericValue, 1500, startCount);
    return {
      ...stat,
      displayValue: typeof stat.value === 'number' ? animatedValue : stat.value,
    };
  });

  return (
    <section className={`${styles.heroSection} ${customClass}`}>
      {/* Shapes Container */}
      {showShapes && (
        <div className={styles.shapesContainer}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
          <div className={styles.shape4}></div>
          <div className={styles.shape5}></div>
          <div className={styles.shape6}></div>
        </div>
      )}

      {/* Hero Content */}
      <div className={styles.heroContent}>
        {badge && <div className={styles.heroBadge}>{badge}</div>}
        <h1 className={styles.heroTitle}>
          {title}
          <br />
          <span className={styles.gradientText}>{highlightedText}</span>
        </h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
        
        {/* Conditionally render buttons */}
        {showButtons && (
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton} onClick={onPrimaryClick}>
              {primaryButtonText}
            </button>
            <button className={styles.secondaryButton} onClick={onSecondaryClick}>
              {secondaryButtonText}
            </button>
          </div>
        )}
      </div>

      {/* Stats */}
      <div ref={statsRef} className={styles.statsContainer}>
        {animatedStats.map((stat) => (
          <div key={stat.label} className={styles.statItem}>
            <div className={styles.statValue}>
              {stat.displayValue}
              {stat.suffix}
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;