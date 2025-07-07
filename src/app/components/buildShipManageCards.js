import styles from "./proBusiStyle.module.css";

const BuildShipManageCards = ({ title, subtitle, sections }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";


  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
      <section className={styles.cardsWrap}>
        {sections.map((section, secIndex) => (
          <div key={secIndex} className={styles.card}>
            <div className={styles.heading_icon}>
              <div className={styles.icons}>{section.icon}</div>
              <h3>{section.subheading}</h3>
            </div>
            <div className={styles.content}>
              {section.content.map((item, index) =>
                item.type === "p" ? <p key={index}>{item.text}</p> : null
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BuildShipManageCards;
