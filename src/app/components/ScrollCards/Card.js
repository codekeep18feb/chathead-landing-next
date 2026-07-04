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
  
  // Neon stacking
  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55, 0.85, 1],
    [
      100 + (positionFromTop - 1) * 35,
      70 + (positionFromTop - 1) * 20,
      35 + (positionFromTop - 1) * 10,
      10 + (positionFromTop - 1) * 3,
      0
    ]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [
      0.88 - (positionFromTop - 1) * 0.02,
      0.92 - (positionFromTop - 1) * 0.015,
      0.97 - (positionFromTop - 1) * 0.01,
      1
    ]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [15, 8, 3, 0]
  );

  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      (index % 3 === 0 ? 4 : index % 3 === 1 ? -4 : 2),
      (index % 3 === 0 ? 2 : index % 3 === 1 ? -2 : 1),
      0
    ]
  );

  // Neon glow intensity
  const glowIntensity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.2, 0.6, 1]
  );

  // Colors for neon effect
  const neonColors = [
    "#6366f1", // Purple
    "#ec4899", // Pink
    "#14b8a6", // Teal
    "#f59e0b", // Amber
    "#8b5cf6", // Violet
  ];

  const neonColor = neonColors[index % neonColors.length];

  // Glow effect
  const glowSize = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [20, 40, 60]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.6, 1],
    [0.2, 0.4, 0.7, 0.95, 1]
  );

  const zIndex = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9, 1],
    [
      index + 1,
      index + 6,
      index + 12,
      index + 18,
      total + 40 + (total - index) * 4
    ]
  );

  // Image effects
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [90, 50, 15, -40]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.15, 1.08, 1]
  );

  // Content
  const contentX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [-80, -50, -20, 0]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.4, 0.7, 1],
    [0, 0.2, 0.5, 0.85, 1]
  );

  // Shadow
  const shadowSpread = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [5, 15, 25]
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
        className={`${styles.card} ${styles.variation3}`}
        style={{
          y,
          scale,
          rotateX,
          rotateZ,
          opacity,
          zIndex,
          backgroundColor: color,
          boxShadow: `0 ${shadowSpread}px 80px rgba(99, 102, 241, ${glowIntensity * 0.15})`,
          transformOrigin: "center top",
          border: `2px solid rgba(99, 102, 241, ${glowIntensity * 0.3})`,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 90, 
          damping: 22 
        }}
      >
        {/* Neon glow behind card */}
        <motion.div
          className={styles.neonGlow}
          style={{
            opacity: glowIntensity,
            width: glowSize,
            height: glowSize,
            background: `radial-gradient(circle, ${neonColor}44, transparent 70%)`,
          }}
        />

        <div className={styles.left}>
          <motion.div
            className={styles.neonBadge}
            style={{
              opacity: contentOpacity,
              x: contentX,
            }}
          >
            <span className={styles.neonNumber} style={{ color: neonColor }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={styles.neonDot} style={{ backgroundColor: neonColor }} />
            <span className={styles.neonLabel}>LIVE</span>
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
            className={styles.neonTags}
            style={{
              x: contentX,
              opacity: useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 0.05, 0.3, 1]),
            }}
          >
            {['Innovation', 'Design', 'Tech'].map((tag, i) => (
              <span 
                key={i} 
                className={styles.neonTag}
                style={{ 
                  borderColor: neonColor + '44',
                  color: neonColor 
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            className={styles.button}
            style={{
              x: contentX,
              opacity: useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [0, 0.05, 0.3, 1]),
              backgroundColor: neonColor,
            }}
          >
            <span>Explore Now →</span>
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
          <motion.div 
            className={styles.neonOverlay}
            style={{
              background: `linear-gradient(135deg, ${neonColor}22 0%, transparent 60%)`,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}