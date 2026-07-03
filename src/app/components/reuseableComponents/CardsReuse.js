"use client";
import React from "react";
import styles from "./CardsReuse.module.css";

const CardsReuse = ({
  title = "Designed for Developers, Built for Everyone",
  subtitle = "Connect your APIs in minutes. Reuse them everywhere. No engineering sprint required.",
  items = [],
  cardClassName = "",
  gridClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  showStats = true,
  columns = 3, // 2, 3, or 4
}) => {
  return (
    <section className={styles.valueSection}>
      {(title || subtitle) && (
        <div className={styles.headerWrapper}>
          {title && (
            <h2 className={`${styles.sectionTitle} ${titleClassName}`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`${styles.sectionSubtitle} ${subtitleClassName}`}>
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div
        className={`${styles.animatedGrid} ${styles[`cols-${columns}`]} ${gridClassName}`}
      >
        {items.map((item, index) => (
          <div
            key={item.title || index}
            className={`${styles.animatedCard} ${cardClassName}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.animatedIconWrapper}>
              <div className={styles.animatedIcon}>{item.icon}</div>
            </div>
            <h3 className={styles.animatedTitle}>{item.title}</h3>
            <p className={styles.animatedDesc}>{item.description}</p>
            {showStats && item.stat && (
              <div className={styles.animatedStatWrapper}>
                <div className={styles.animatedStat}>{item.stat}</div>
                <div className={styles.animatedStatLabel}>{item.statLabel}</div>
              </div>
            )}
            <div className={styles.animatedBorder}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsReuse;