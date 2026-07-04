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
  
  // Dramatic stacking effect
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [
      120 + (positionFromTop - 1) * 40,
      80 + (positionFromTop - 1) * 25,
      40 + (positionFromTop - 1) * 12,
      15 + (positionFromTop - 1) * 5,
      0
    ]
  );

  // Scale decreases as cards stack
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [
      0.85 - (positionFromTop - 1) * 0.02,
      0.90 - (positionFromTop - 1) * 0.015,
      0.95 - (positionFromTop - 1) * 0.01,
      1
    ]
  );

  // Rotation for organic feel
  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      (index % 2 === 0 ? 3 : -3) - (positionFromTop - 1) * 0.5,
      (index % 2 === 0 ? 1 : -1) - (positionFromTop - 1) * 0.3,
      0
    ]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [12, 6, 0]
  );

  // Opacity with fade
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.7, 1],
    [0.2, 0.4, 0.7, 0.95, 1]
  );

  // Dramatic z-index changes
  const zIndex = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9, 1],
    [
      index + 1,
      index + 4,
      index + 8,
      index + 12,
      total + 20 + (total - index) * 2
    ]
  );

  // Image with depth
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [120, 70, 20, -50]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.2, 1.1, 1]
  );

  // Content reveal
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [60, 30, 10, 0]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0.3, 0.6, 0.9, 1]
  );

  // Shadow
  const shadowIntensity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [50, 25, 10]
  );

  return (
    <div
      ref={ref}
      className={styles.cardContainer}
      style={{
        top: `${40 + index * 10}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        className={`${styles.card} ${styles.variation1}`}
        style={{
          y,
          scale,
          rotateZ,
          rotateX,
          opacity,
          zIndex,
          backgroundColor: color,
          boxShadow: `0 ${shadowIntensity}px 60px rgba(0,0,0,0.15)`,
          transformOrigin: "center top",
        }}
        transition={{ 
          type: "spring", 
          stiffness: 70, 
          damping: 25 
        }}
      >
        <div className={styles.left}>
          <motion.div
            className={styles.indexBadge}
            style={{
              opacity: contentOpacity,
              y: contentY,
            }}
          >
            <span className={styles.indexNumber}>{String(index + 1).padStart(2, "0")}</span>
          </motion.div>

          <motion.h2
            className={styles.title}
            style={{
              y: contentY,
              opacity: contentOpacity,
            }}
          >
            {title}
          </motion.h2>

          <motion.p
            className={styles.description}
            style={{
              y: contentY,
              opacity: useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 0.2, 0.6, 1]),
            }}
          >
            {description}
          </motion.p>

          <motion.div
            className={styles.stats}
            style={{
              y: contentY,
              opacity: useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [0, 0.1, 0.5, 1]),
            }}
          >
            <div className={styles.statItem}>
              <span className={styles.statValue}>99%</span>
              <span className={styles.statLabel}>Satisfaction</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>50K+</span>
              <span className={styles.statLabel}>Users</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>4.9★</span>
              <span className={styles.statLabel}>Rating</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.button}
            style={{
              y: contentY,
              opacity: useTransform(scrollYProgress, [0, 0.6, 0.9, 1], [0, 0.1, 0.5, 1]),
            }}
          >
            <span>Learn More →</span>
          </motion.div>
        </div>

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
          <div className={styles.imageGradient} />
        </div>

        {/* Corner decoration */}
        <div className={styles.cornerDecoration} />
      </motion.div>
    </div>
  );
}