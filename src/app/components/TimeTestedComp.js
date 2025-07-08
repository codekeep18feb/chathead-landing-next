import styles from "./TimeTested.module.css";

const cardsData = [
  {
    number: "01",
    heading: "Discovery & Requirements Gathering",
    description:
      "Being a top-rated Real estate application development company, our development process begins with discovering the market fit of your Realestate app idea. We thoughtfully study the landscape for similar offerings and develop the best technology to satisfy your specific requirements.",
  },
  {
    number: "02",
    heading: "Design & Prototyping",
    description:
      "Create wireframes, mockups, and interactive prototypes for the app’s UI/UX. Design iterations are made based on feedback to ensure usability and alignment with business goals, helping visualize the app before development begins.",
  },
  {
    number: "03",
    heading: "Best development practices",
    description:
      "In this step, we also zero in on the best possible . elements to cater to your audience and design thoughtful user journeys that increase conversions.",
  },
  {
    number: "04",
    heading: "Development and Testing",
    description:
      "In this stage of the development process we develop the apps, create the necessary components and APIs and seamlessly connect the parts together that come alive as a beautiful and engaging Real estate app.",
  },
  {
    number: "05",
    heading: "Deployment and maintenance",
    description:
      "As part of our Real estate software development services, we deploy the app or software on its intended platform and based on the feedback from focus groups and general users alike, we update and maintain the app for the best result.",
  },
  {
    number: "06",
    heading: "Ongoing Support & Future Enhancements",
    description:
      "Our partnership doesn't end at launch. We offer continuous support, monitor performance, fix bugs, and roll out new features based on user feedback and market trends to ensure your real estate app remains competitive and future-ready.",
  },
];

export default function TimeTestedComp() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>
          Our services encompass a proven and adaptable development process.
        </h1>
        <p className={styles.description}>
          We integrate our technical knowledge with our clients’ creative
          concepts to provide optimal mobile Real Estate app development
          solutions.
        </p>
      </div>

      <div className={styles.cardWrap}>
        <div className={styles.verticalDivider1}></div>
        <div className={styles.verticalDivider2}></div>

        <div className={styles.row}>
          {cardsData.slice(0, 3).map(({ number, heading, description }) => (
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
          {cardsData.slice(3, 6).map(({ number, heading, description }) => (
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
