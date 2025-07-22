import { useEffect, useRef, useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import styles from "./FeatureStyle.module.css";

export default function FeatureSectionBlock({
  refProp = null,
  title,
  subheading,
  content,
  image,
  images = [],
  className,
  isEven,
  bgClass = "bg1",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  const startAutoSlide = () => {
    if (images.length > 1 && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mouseenter", startAutoSlide);
      section.addEventListener("mouseleave", stopAutoSlide);
    }

    return () => {
      section?.removeEventListener("mouseenter", startAutoSlide);
      section?.removeEventListener("mouseleave", stopAutoSlide);
      stopAutoSlide();
    };
  }, [images]);

  return (
    <section
      ref={(el) => {
        if (typeof refProp === "function") {
          refProp(el);
        } else if (refProp && typeof refProp === "object") {
          refProp.current = el;
        }
        sectionRef.current = el;
      }}
      className={`${styles.contentSection} ${styles[bgClass]} ${className} ${
        isEven ? styles.evenSection : styles.oddSection
      }`}
    >
      <img
        src="/Asset/newbg11.png"
        alt="background pattern"
        className={styles.patternBg}
        aria-hidden="true"
      />

      <div className={styles.leftSection}>
        <h2 className={styles.highlighted}>{title}</h2>
        <h3 className={styles.subheading}>{subheading}</h3>

        {content.map((item, idx) => {
          if (item.type === "p") {
            return <p key={idx}>{item.text}</p>;
          } else if (item.type === "group") {
            return item.texts.map((text, subIdx) => (
              <p key={`${idx}-${subIdx}`} className={styles[item.className]}>
                <span className={styles.icon}>
                  <FaHandPointRight size={18} />
                </span>
                {text}
              </p>
            ));
          } else if (item.type === "img") {
            return <img key={idx} src={item.src} alt={item.alt} />;
          }
          return null;
        })}
      </div>

      <div className={styles.imageContainer}>
        {Array.isArray(images) && images.length > 0 ? (
          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, idx) => (
              <div key={idx} className={styles.slideWrapper}>
                {img.heading && (
                  <div className={styles.imageHeading}>{img.heading}</div>
                )}
                <img
                  src={img.src}
                  alt={`${title} ${idx + 1}`}
                  className={styles.slideImage}
                />
              </div>
            ))}
          </div>
        ) : image?.src ? (
          <div className={styles.slideWrapper}>
            {image.heading && (
              <div className={styles.imageHeading}>{image.heading}</div>
            )}
            <img src={image.src} alt={title} className={styles.slideImage} />
          </div>
        ) : (
          <img src={image} alt={title} className={styles.slideImage} />
        )}
      </div>
    </section>
  );
}
