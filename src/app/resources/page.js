"use client";

import React from "react";
import Link from "next/link";
import styles from "../platform/RootPages.module.css";
import { resourcesList } from "../data/resourcesList";

function ResourcesRootPage() {
  return (
    <div className={styles.container}>

      {/* Blog / AddChat Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Blog / Resources</h2>
        <div className={styles.cards}>
          {resourcesList.addChat_blog.map((item, index) => {
            // Generate slug for dynamic route
            const slug = item.subHeading.toLowerCase().replace(/\s+/g, "-");
            return (
              <Link href={`/resources/${slug}`} key={index} className={styles.card}>
                <div className={styles.icon_wrapper}>
                  <i className={`${item.icon} ${styles["card-icon"]}`}></i>
                </div>
                <h3 className={styles.subHeading}>{item.subHeading}</h3>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Company Type / Other Resources Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Other Resources</h2>
        <div className={styles.cards}>
          {resourcesList.company_type.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.icon_wrapper}>
                <i className={`${item.icon} ${styles["card-icon"]}`}></i>
              </div>
              <h3 className={styles.subHeading}>{item.subHeading}</h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ResourcesRootPage;
