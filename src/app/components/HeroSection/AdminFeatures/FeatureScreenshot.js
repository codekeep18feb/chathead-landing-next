import React, { useState, useEffect, useRef } from "react";
import styles from "./AdminFeatures.module.css";
import { FaPlayCircle } from "react-icons/fa";

const FeatureScreenshot = ({
  featureId,
  images = [],
  title,
  videoId,
  imagePages,
  setImagePages,
  openVideoModal,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalImages = images.length;

  // Auto-play functionality
  useEffect(() => {
    if (totalImages > 1 && isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === totalImages - 1 ? 0 : prevIndex + 1,
        );
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [totalImages, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const goToSlide = (index) => setCurrentIndex(index);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1,
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div className={styles.featureVisual}>
      <div
        className={styles.featureScreenshot}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.length > 0 ? (
          <>
            <div
              className={styles.featureScreenshotWrapper}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {images.map((image, index) => (
                <div
                  key={`${featureId}-slide-${index}`}
                  className={styles.featureScreenshotSlide}
                >
                  <img
                    src={image}
                    alt={`${title} screenshot ${index + 1}`}
                    className={styles.featureScreenshotImage}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className={`${styles.carouselNavButton} ${styles.carouselNavButtonPrev}`}
                  onClick={prevSlide}
                  aria-label="Previous screenshot"
                >
                  ❮
                </button>

                <button
                  type="button"
                  className={`${styles.carouselNavButton} ${styles.carouselNavButtonNext}`}
                  onClick={nextSlide}
                  aria-label="Next screenshot"
                >
                  ❯
                </button>
              </>
            )}
          </>
        ) : (
          <div className={styles.screenshotPlaceholder}>
            <span className={styles.placeholderIcon}>📋</span>
            <span>{title}</span>
            <span className={styles.placeholderSubtext}>
              Placeholder: Screenshot / Demo here
            </span>
          </div>
        )}
      </div>

      {/* Carousel Indicators - MOVED OUTSIDE the image */}
      {images.length > 1 && (
        <div className={styles.carouselIndicators}>
          {images.map((_, index) => (
            <button
              key={`${featureId}-dot-${index}`}
              type="button"
              className={`${styles.carouselDot} ${
                index === currentIndex ? styles.carouselDotActive : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {videoId && (
        <button
          type="button"
          className={styles.watchDemoBtn}
          onClick={() => openVideoModal(videoId)}
        >
          <FaPlayCircle /> Watch Demo
        </button>
      )}
    </div>
  );
};

export default FeatureScreenshot;