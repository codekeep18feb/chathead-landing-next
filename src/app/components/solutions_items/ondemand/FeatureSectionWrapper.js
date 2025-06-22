"use client";
import { useRef } from "react";
import FeatureNavTabs from "./FeatureNavTabs";
import FeatureSectionBlock from "./FeatureSectionBlock";
import styles from "./FeatureStyle.module.css";

export default function FeatureSectionWrapper({
  title,
  description,
  sections,
}) {
  const sectionRefs = Object.keys(sections).reduce((acc, key) => {
    acc[key] = useRef(null);
    return acc;
  }, {});

  const handleScroll = (tab) => {
    const ref = sectionRefs[tab];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.containerWrap}>
      <header className={styles.header}>
        <h1>{title}</h1>
        <p>{description}</p>
        <FeatureNavTabs
          tabs={Object.keys(sections)}
          onTabClick={handleScroll}
        />
      </header>

      {Object.entries(sections).map(([key, data], index) => (
        <FeatureSectionBlock
          key={key}
          refProp={sectionRefs[key]}
          title={key}
          subheading={data.subheading}
          content={data.content}
          image={data.image}
          className={styles[data.className]}
          isEven={index % 2 === 0}
          bgClass={`bg${(index % 4) + 1}`} // bg1 to bg4 rotate
        />
      ))}
    </div>
  );
}
