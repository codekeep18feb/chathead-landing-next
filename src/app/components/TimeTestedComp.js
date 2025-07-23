import styles from "./TimeTested.module.css";

export default function TimeTestedComp({
  title = "Our services encompass a proven and adaptable development process.",
  subtitle = "We integrate our technical knowledge with our clients’ creative concepts to provide optimal mobile app development solutions.",
  cardsData = [],
  className = "",
}) {
  // const firstRow = cardsData.slice(0, Math.ceil(cardsData.length / 2));
  // const secondRow = cardsData.slice(Math.ceil(cardsData.length / 2));

  const firstRow = cardsData.slice(0, 3);
  const secondRow = cardsData.slice(3, 6);

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.heading}>
        <h1>{title}</h1>
        <p className={styles.description}>{subtitle}</p>
      </div>

      <div className={styles.cardWrap}>
        <div className={styles.verticalDivider1}></div>
        <div className={styles.verticalDivider2}></div>

        <div className={styles.row}>
          {firstRow.map(({ number, heading, description }) => (
            <div key={number} className={styles.box}>
              <div className={styles["card-number"]}>
                <span>{number[0]}</span>
                <span>{number[1]}</span>
              </div>
              <h3 className={styles.cardheading}>{heading}</h3>
              <div className={styles.cardDesc}>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.horizontaldivider}></div>

        <div className={styles.secondRow}>
          {secondRow.map(({ number, heading, description }) => (
            <div key={number} className={styles.box}>
              <div className={styles["card-number"]}>
                <span>{number[0]}</span>
                <span>{number[1]}</span>
              </div>
              <h3 className={styles.cardheading}>{heading}</h3>
              <div className={styles.cardDesc}>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
