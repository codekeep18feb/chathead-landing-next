"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./FlipCard.module.css";

export default function FlipCard({ 
  frontContent, 
  backContent,
  emoji = "🚀",
  color = "#6366f1",
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={styles.container}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className={styles.flipper}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          duration: 0.6,
          type: "spring",
          stiffness: 120,
          damping: 15,
        }}
      >
        {/* Front */}
        <div className={`${styles.side} ${styles.front}`} style={{ background: color }}>
          <motion.div
            animate={{
              scale: isFlipped ? 0.8 : 1,
              rotate: isFlipped ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.frontTitle}>{frontContent.title}</h3>
            <p className={styles.frontDesc}>{frontContent.description}</p>
            <div className={styles.flipHint}>Hover to flip</div>
          </motion.div>
        </div>

        {/* Back */}
        <div className={`${styles.side} ${styles.back}`} style={{ background: color + 'dd' }}>
          <motion.div
            animate={{
              scale: isFlipped ? 1 : 0.8,
              rotateY: 180,
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={styles.backTitle}>{backContent.title}</h3>
            <ul className={styles.features}>
              {backContent.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -20 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  ✦ {feature}
                </motion.li>
              ))}
            </ul>
            <motion.button 
              className={styles.flipButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}