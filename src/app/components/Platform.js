"use client";

import { useRouter } from "next/navigation";
import { platformList } from "../data/platformData";
import styles from "./CommonDropdown.module.css";

const Platform = () => {
  const router = useRouter();

  const handleCardClick = (item, type) => {
    if (type === "aiAgentConfiguration") {
      router.push("/ai-agent-configuration");
    } else if (type === "integration") {
      router.push("/documentation");
    } else {
      const slug = item.subHeading.toLowerCase().replace(/\s+/g, "-");
      router.push(`/platform/${slug}`);
    }
  };

  return (
    <div className={styles.platformContainer}>
      {/* Left Side - Image */}
      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <img 
            src="/images/platform.png" 
            alt="Platform Illustration" 
            className={styles.platformImage}
          />
          <div className={styles.imageOverlay}>
            <h3>Build Smarter</h3>
            <p>With our comprehensive platform</p>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className={styles.contentSection}>
        <div className={styles.platformSections}>
          {/* Features Section */}
          <div className={styles.platformSection}>
            <h2 className={styles.sectionTitle}>Features</h2>
            <div className={styles.cardList}>
              {platformList.features.map((item, index) => (
                <div
                  className={styles.card}
                  key={index}
                  onClick={() => handleCardClick(item, "feature")}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <i className={`${styles.cardIcon} ${item.icon}`}></i>
                    </div>
                    <h3>{item.subHeading}</h3>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Agent Configuration Section */}
          <div className={styles.platformSection}>
            <h2 className={styles.sectionTitle}>AI Agent Configuration</h2>
            <div className={styles.cardList}>
              {platformList.aiAgentConfiguration.map((item, index) => (
                <div
                  className={styles.card}
                  key={index}
                  onClick={() => handleCardClick(item, "aiAgentConfiguration")}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <i className={`${styles.cardIcon} ${item.icon}`}></i>
                    </div>
                    <h3>{item.subHeading}</h3>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Section */}
          <div className={styles.platformSection}>
            <h2 className={styles.sectionTitle}>Integration</h2>
            <div className={styles.cardList}>
              {platformList.integration.map((item, index) => (
                <div
                  className={styles.card}
                  key={index}
                  onClick={() => handleCardClick(item, "integration")}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <i className={`${styles.cardIcon} ${item.icon}`}></i>
                    </div>
                    <h3>{item.subHeading}</h3>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;