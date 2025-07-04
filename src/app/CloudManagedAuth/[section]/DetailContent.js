import styles from "./DetailPage.module.css";
import { FaHandPointRight } from "react-icons/fa";

export default function DetailContent({ section, content }) {
  if (!content) return <p>Section not found.</p>;

  return (
    <div className={styles.detailWrapper}>
      <h1 className={styles.title}>{section.replace(/-/g, " ")}</h1>
      <ul className={styles.list}>
        {content.map((item, index) => (
          <li key={index}>
            <FaHandPointRight className={styles.icon} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}