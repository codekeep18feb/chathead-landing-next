import styles from "./DetailPage.module.css";
import { FaHandPointRight } from "react-icons/fa";
import React from "react";

export default function DetailContent({ section, content }) {
  if (!content) return <p>Section not found.</p>;

  return (
    <div className={styles.detailWrapper}>
      <h1 className={styles.title}>{section.replace(/-/g, " ")}</h1>

      <div className={styles.contentBlock}>
        {content.map((item, index) => {
          if (item.type === "list") {
            return (
              <li key={index}>
                <FaHandPointRight className={styles.icon} />
                {item.text}
              </li>
            );
          }

          if (item.type === "component") {
            return <div key={index}>{item.element}</div>;
          }

          return null;
        })}
      </div>
    </div>
  );
}
