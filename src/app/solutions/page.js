"use client";

import React from "react";
import Link from "next/link";
import styles from "../platform/RootPages.module.css";
import { solutionList } from "../data/solutionList";

function SolutionsRootPage() {
  return (
    <div className={styles.container}>
      {/* Hero / Intro */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "12px" }}>
          The AI Runtime for Restaurant Tech
        </h1>
        <p style={{ fontSize: "16px", color: "#6b7280", maxWidth: "640px", margin: "0 auto" }}>
          Built for Restaurant CRMs, franchise platforms, and POS systems with heavy backend APIs.
          Add a deterministic AI layer without rewriting your backend — or your business.
        </p>
      </div>

      {/* Use Cases Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Use Cases</h2>
        <div className={styles.cards}>
          {solutionList.useCase.map((item, index) => (
            <Link href={`/solutions/${item.slug}`} key={index} className={styles.card}>
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
          ))}
        </div>
      </div>

      {/* Company Types Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Who We Serve</h2>
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