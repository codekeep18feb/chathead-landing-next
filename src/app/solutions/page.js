"use client";

import React from "react";
import Link from "next/link";
import styles from "../platform/RootPages.module.css";
import { solutionList } from "../data/solutionList";

function SolutionsRootPage() {
  return (
    <div className={styles.container}>
      
      {/* Use Cases Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Use Cases</h2>
        <div className={styles.cards}>
          {solutionList.useCase.map((item, index) => {
            // generate slug for URL
            const slug = item.subHeading.toLowerCase().replace(/\s+/g, "-");
            return (
              <Link href={`/solutions/${slug}`} key={index} className={styles.card}>
                <div className={styles.icon_wrapper}>
                  {item.iconType === "svg" ? (
                    <img src={`/${item.icon}`} alt={item.subHeading} width={28} height={28} />
                  ) : (
                    <i className={`${item.icon} ${styles["card-icon"]}`}></i>
                  )}
                </div>
                <h3 className={styles.subHeading}>{item.subHeading}</h3>
                <p className={styles.text}>{item.text}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Company Types Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Company Types</h2>
        <div className={styles.cards}>
          {solutionList.company_type.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.icon_wrapper}>
                {item.iconType === "svg" ? (
                  <img src={`/${item.icon}`} alt={item.subHeading} width={28} height={28} />
                ) : (
                  <i className={`${item.icon} ${styles["card-icon"]}`}></i>
                )}
              </div>
              <h3 className={styles.subHeading}>{item.subHeading}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default SolutionsRootPage;
