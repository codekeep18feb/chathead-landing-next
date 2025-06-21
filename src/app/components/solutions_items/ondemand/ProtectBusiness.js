import { FaHandPointRight } from "react-icons/fa6";
import styles from "./ProtectBusinSty.module.css";

const ProtectBusiness = ({ title, description, sections = [] }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <section className={styles.contentWrap}>
        {sections.map((section, secIndex) => (
          <div key={secIndex} className={styles.contentSection}>
            <img
              src={section.image}
              alt={`Section ${secIndex + 1}`}
              className={styles.banner}
            />
            <h2 className={styles.subheading}>{section.subheading}</h2>

            <div className={styles.content}>
              {section.content.map((item, index) => {
                if (item.type === "p") {
                  return <p key={index}>{item.text}</p>;
                } else if (item.type === "group") {
                  return item.texts.map((text, subIdx) => (
                    <p
                      key={`${index}-${subIdx}`}
                      className={styles[item.className] || ""}
                    >
                      <span className={styles.icon}>
                        <FaHandPointRight size={18} />
                      </span>
                      {text}
                    </p>
                  ));
                }
                return null;
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProtectBusiness;
