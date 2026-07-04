"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ScrollCards.module.css";

export default function Card({
  title,
  description,
  image,
  color = "#ffffff",
  index,
  total,
}) {
  const ref = useRef(null);

  // Track this card's scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Calculate card's position from top of stack
  const positionFromTop = total - index;
  
  // Overlap effect: cards slide over each other
  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.85, 1],
    [
      100 + (positionFromTop - 1) * 30,  // Start: spread out
      70 + (positionFromTop - 1) * 15,   // Begin overlapping
      30 + (positionFromTop - 1) * 8,    // More overlap
      10 + (positionFromTop - 1) * 3,    // Almost stacked
      0                                  // Fully overlapped
    ]
  );

  // Scale: cards get slightly smaller as they stack
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [
      0.92 - (positionFromTop - 1) * 0.015,
      0.95 - (positionFromTop - 1) * 0.01,
      0.98 - (positionFromTop - 1) * 0.005,
      1
    ]
  );

  // Opacity: fade in as they overlap
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.4, 0.6, 0.8, 0.95, 1]
  );

  // Z-index: cards rise to the top as they become active
  const zIndex = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9, 1],
    [
      index + 1,
      index + 3,
      index + 6,
      index + 8,
      total + 5 + (total - index) // Top card gets highest z-index
    ]
  );

  // Rotate for 3D effect
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [6, 4, 2, 0]
  );

  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [3, 1, 0]
  );

  // Image parallax
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [100, 60, 20, -40]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.15, 1.08, 1]
  );

  // Content animations
  const contentX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [-100, -60, -20, 0]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0.3, 0.6, 0.85, 1]
  );

  // Shadow depth increases when overlapped
  const shadowY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [40, 20, 5]
  );

  const shadowBlur = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [30, 20, 10]
  );

  // Border glow
  const borderGlow = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [0, 0.5, 1]
  );

  return (
    <div
      ref={ref}
      className={styles.cardContainer}
      style={{
        top: `${50 + index * 12}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        className={styles.card}
        style={{
          y,
          scale,
          opacity,
          zIndex,
          rotateX,
          rotateY,
          backgroundColor: color,
          boxShadow: `0 ${shadowY}px ${shadowBlur}px rgba(0,0,0,0.15)`,
          transformOrigin: "center top",
          border: `2px solid rgba(99, 102, 241, ${borderGlow})`,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 80, 
          damping: 25,
          mass: 0.7
        }}
      >
        {/* Glow effect behind card */}
        <motion.div 
          className={styles.cardGlow}
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.8, 1], [0, 0.3, 0.6]),
          }}
        />

        {/* Left side - Content */}
        <div className={styles.left}>
          <motion.div
            className={styles.badge}
            style={{
              opacity: contentOpacity,
              x: contentX,
            }}
          >
            <span className={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={styles.badgeText}>Featured</span>
          </motion.div>

          <motion.h2
            className={styles.title}
            style={{
              x: contentX,
              opacity: contentOpacity,
            }}
          >
            {title}
          </motion.h2>

          <motion.p
            className={styles.description}
            style={{
              x: contentX,
              opacity: useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.2, 0.5, 0.8, 1]),
            }}
          >
            {description}
          </motion.p>

          <motion.div
            className={styles.tags}
            style={{
              x: contentX,
              opacity: useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [0, 0.3, 0.7, 1]),
            }}
          >
            <span className={styles.tag}>Innovation</span>
            <span className={styles.tag}>Design</span>
            <span className={styles.tag}>Technology</span>
          </motion.div>

          <motion.div
            className={styles.button}
            style={{
              x: contentX,
              opacity: useTransform(scrollYProgress, [0, 0.6, 0.9, 1], [0, 0.2, 0.6, 1]),
            }}
          >
            <span>View Project</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M11.6667 5L15.8333 10L11.6667 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </div>

        {/* Right side - Image */}
        <div className={styles.right}>
          <motion.img
            src={image}
            alt={title}
            className={styles.image}
            style={{
              y: imageY,
              scale: imageScale,
            }}
          />
          
          {/* Overlay gradient */}
          <motion.div 
            className={styles.imageOverlay}
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.4, 0.1]),
            }}
          />
        </div>

        {/* Decorative line at bottom of card */}
        <motion.div 
          className={styles.cardLine}
          style={{
            scaleX: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 1]),
          }}
        />
      </motion.div>
    </div>
  );
}