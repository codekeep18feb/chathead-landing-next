"use client";

import React from "react";
import Link from "next/link";
import styles from "./RootPages.module.css";
import { platformList } from "@/app/data/platformData";

function PlatformRootPage() {
  return (
    <div className={styles.container}>
      {/* Hero / Intro */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "12px" }}>
          The AI Agent Runtime
        </h1>
        <p style={{ fontSize: "16px", color: "#6b7280", maxWidth: "640px", margin: "0 auto" }}>
          Turn your existing backend APIs into deterministic, multi-step workflows with 
          auto-generated UI screens. Built for enterprise scale — 60,000 base users, 
          10,000 power users, and 70,000+ restaurants.
        </p>
      </div>

      {/* Features Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Platform Features</h2>
        <div className={styles.cards}>
          {platformList.features.map((feature, index) => (
            <Link
              key={index}
              href={`/platform/${feature.slug || feature.subHeading.toLowerCase().replace(/\s+/g, "-")}`}
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
        <h2 className={styles.heading}>Agent & Servers</h2>
        <div className={styles.cards}>
          {platformList.integration.map((item, index) => (
            <Link
              key={index}
              href={`/platform/${item.slug || item.subHeading.toLowerCase().replace(/\s+/g, "-")}`}
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