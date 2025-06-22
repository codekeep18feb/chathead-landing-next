"use client";
import { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.tabWrapper}>
      <div className={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${activeTab === index ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tabs;
