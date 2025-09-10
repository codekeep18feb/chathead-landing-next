"use client";

import React from "react";
import Link from "next/link";
import styles from "./RootPages.module.css";
import { platformList } from "@/app/data/platformData";

function PlatformRootPage() {
  return (
    <div className={styles.container}>
      {/* Features Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Platform Features</h2>
        <div className={styles.cards}>
          {platformList.features.map((feature, index) => (
            <Link
              key={index}
              href={`/platform/${feature.subHeading.toLowerCase().replace(/\s+/g, "-")}`}
              className={styles.card}
            >
             <div className={styles.icon_wrapper}>
               <i className={`${feature.icon} ${styles["card-icon"]}`}></i>
             </div>
              <h3 className={styles.subHeading}>{feature.subHeading}</h3>
              <p className={styles.text}>{feature.text}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Integration Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Integrations</h2>
        <div className={styles.cards}>
          {platformList.integration.map((item, index) => (
            <Link
              key={index}
              href={`/platform/${item.subHeading.toLowerCase().replace(/\s+/g, "-")}`}
              className={styles.card}
            >
              <div className={styles.icon_wrapper}>
              <i className={`${item.icon} ${styles["card-icon"]}`}></i>
              </div>
              <h3 className={styles.subHeading}>{item.subHeading}</h3>
              <p className={styles.text}>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlatformRootPage;
