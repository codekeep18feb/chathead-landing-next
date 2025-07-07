import { FaHandPointRight } from "react-icons/fa";
import styles from "./FeatureStyle.module.css";

export default function FeatureSectionBlock({
  refProp,
  title,
  subheading,
  content,
  image,
  className,
  isEven,
  bgClass = "bg1", // fallback background class
}) {
  return (
    <section
      ref={refProp}
      className={`${styles.contentSection} ${styles[bgClass]} ${className} ${
        isEven ? styles.evenSection : styles.oddSection
      }`}
    >
      <img
        src="/Asset/pattern.png"
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
        <img src={image} alt={title} />
      </div>
    </section>
  );
}
