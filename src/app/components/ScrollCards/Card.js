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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const positionFromTop = total - index;
  
  // Cinematic slide overlap
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [
      150 + (positionFromTop - 1) * 50,
      100 + (positionFromTop - 1) * 30,
      50 + (positionFromTop - 1) * 15,
      20 + (positionFromTop - 1) * 5,
      0
    ]
  );

  // Scale with cinematic zoom
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [
      0.75 - (positionFromTop - 1) * 0.015,
      0.85 - (positionFromTop - 1) * 0.01,
      0.95 - (positionFromTop - 1) * 0.005,
      1
    ]
  );

  // Cinematic tilt
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [8, 5, 2, 0]
  );

  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [
      (index % 2 === 0 ? 5 : -5),
      (index % 2 === 0 ? 3 : -3),
      (index % 2 === 0 ? 1 : -1),
      0
    ]
  );

  // Opacity
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.4, 0.7, 1],
    [0.15, 0.3, 0.6, 0.9, 1]
  );

  const zIndex = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9, 1],
    [
      index + 1,
      index + 5,
      index + 10,
      index + 15,
      total + 30 + (total - index) * 3
    ]
  );

  // Parallax layers
  const bgY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [150, 80, 30, -60]
  );

  const midY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [100, 50, 15, -30]
  );

  const fgY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [50, 20, 5, -15]
  );

  // Image effects
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.3, 1.15, 1]
  );

  const imageBlur = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [8, 3, 0]
  );

  // Content effects
  const contentX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [
      (index % 2 === 0 ? -120 : 120),
      (index % 2 === 0 ? -60 : 60),
      (index % 2 === 0 ? -20 : 20),
      0
    ]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0.2, 0.5, 0.85, 1]
  );

  // Cinematic vignette
  const vignetteOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 0.4, 0]
  );

  // Shadow
  const shadowY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [60, 30, 10]
  );

  return (
    <div
      ref={ref}
      className={styles.cardContainer}
      style={{
        top: `${30 + index * 8}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        className={`${styles.card} ${styles.variation2}`}
        style={{
          y,
          scale,
          rotateX,
          rotateY,
          opacity,
          zIndex,
          backgroundColor: color,
          boxShadow: `0 ${shadowY}px 80px rgba(0,0,0,0.2)`,
          transformOrigin: "center top",
        }}
        transition={{ 
          type: "spring", 
          stiffness: 60, 
          damping: 30 
        }}
      >
        {/* Cinematic vignette overlay */}
        <motion.div 
          className={styles.vignette}
          style={{ opacity: vignetteOpacity }}
        />

        <div className={styles.left}>
          <motion.div
            className={styles.cinematicBadge}
            style={{
              opacity: contentOpacity,
              x: useTransform(contentX, x => -x),
            }}
          >
            <span className={styles.projectTag}>PROJECT</span>
            <span className={styles.projectNumber}>#{String(index + 1).padStart(2, "0")}</span>
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
              opacity: useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.1, 0.4, 1]),
            }}
          >
            {description}
          </motion.p>

          <motion.div
            className={styles.quote}
            style={{
              x: contentX,
              opacity: useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 0.05, 0.3, 0.8]),
            }}
          >
            <span className={styles.quoteIcon}>"</span>
            <span className={styles.quoteText}>Transforming ideas into reality</span>
            <span className={styles.quoteIcon}>"</span>
          </motion.div>

          <motion.div
            className={styles.button}
            style={{
              x: contentX,
              opacity: useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [0, 0.05, 0.3, 1]),
            }}
          >
            <span>Discover →</span>
          </motion.div>
        </div>

        <div className={styles.right}>
          <motion.img
            src={image}
            alt={title}
            className={styles.image}
            style={{
              y: bgY,
              scale: imageScale,
              filter: `blur(${imageBlur}px)`,
            }}
          />
          <div className={styles.parallaxOverlay} />
        </div>
      </motion.div>
    </div>
  );
}