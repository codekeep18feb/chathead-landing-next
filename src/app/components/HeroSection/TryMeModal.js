"use client";

import React from "react";
import styles from "./TryMeModal.module.css";

const TryMeModal = ({ onClose }) => {
  // Prevent body scroll
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const hotel = {
    title: "Hotel",
    url: "https://veloura-on-react.vercel.app/",
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <h2 className={styles.heading}>Try Our Platform</h2>

        <p className={styles.subheading}>
          Click the tile below to explore our platform.
        </p>

        <div className={styles.tileWrapper}>
          <a
            href={hotel.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tile}
          >
            <div className={styles.tileContent}>
              <span className={styles.tileIcon}>🏨</span>
              <h3 className={styles.tileTitle}>{hotel.title}</h3>
              <p className={styles.tileDescription}>
                Explore our hotel platform demo
              </p>
              <span className={styles.tileArrow}>→</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TryMeModal;