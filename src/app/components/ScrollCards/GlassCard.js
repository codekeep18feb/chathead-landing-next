"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./GlassCard.module.css";

export default function GlassCard({ 
  title, 
  description, 
  icon, 
  gradient = "from-purple-500 to-pink-500",
  index = 0,
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 0.4, 0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 0.95, 1]);

  return (
    <motion.div
      ref={ref}
      className={styles.container}
      style={{ opacity, y, scale }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className={styles.glassCard}
        animate={{
          background: isHovered 
            ? 'rgba(255, 255, 255, 0.15)' 
            : 'rgba(255, 255, 255, 0.08)',
          backdropFilter: isHovered ? 'blur(20px)' : 'blur(10px)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated gradient border */}
        <motion.div 
          className={styles.borderGlow}
          animate={{
            opacity: isHovered ? 1 : 0.3,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Icon */}
        <motion.div 
          className={styles.iconWrapper}
          animate={{
            rotate: isHovered ? [0, -10, 10, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.icon}>{icon}</span>
        </motion.div>

        {/* Content */}
        <motion.h3 
          className={styles.title}
          animate={{
            color: isHovered ? '#ffffff' : 'rgba(255,255,255,0.9)',
          }}
        >
          {title}
        </motion.h3>

        <motion.p 
          className={styles.description}
          animate={{
            opacity: isHovered ? 1 : 0.7,
          }}
        >
          {description}
        </motion.p>

        {/* Animated line */}
        <motion.div 
          className={styles.line}
          animate={{
            width: isHovered ? '100%' : '0%',
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Floating particles */}
        <div className={styles.particles}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              animate={{
                y: [0, -20 - i * 5, 0],
                x: [0, (i % 2 === 0 ? 10 : -10), 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}