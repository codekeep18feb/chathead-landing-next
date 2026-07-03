"use client";

import { useRouter } from "next/navigation";
import { solutionList } from "../data/solutionList";
import styles from "./CommonDropdown.module.css";

const Solutions = ({ onCloseModal }) => {
  const router = useRouter();

  const handleCardClick = (subHeading) => {
    if (onCloseModal) onCloseModal();

    const slug = subHeading
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/&/g, "and")
      .replace(/[^\w\-]/g, "");

    router.push(`/solutions/${slug}`);
  };

  const handleCompanyTypeClick = (subHeading) => {
    if (onCloseModal) onCloseModal();
    
    const slug = subHeading
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/&/g, "and")
      .replace(/[^\w\-]/g, "");

    router.push(`/solutions/company/${slug}`);
  };

  return (
    <div className={styles.platformContainer}>
      {/* Left Side - Image */}
      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <img 
            src="/images/soultions.png" 
            alt="Solutions Illustration" 
            className={styles.platformImage}
          />
          <div className={styles.imageOverlay}>
            <h3>Smart Solutions</h3>
            <p>Tailored for your business needs</p>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className={styles.contentSection}>
        <div className={styles.platformSections}>
          {/* By Use Case Section */}
          <div className={styles.platformSection}>
            <h2 className={styles.sectionTitle}>By use case</h2>
            <div className={styles.cardList}>
              {solutionList.useCase.map((item, index) => (
                <div
                  className={styles.card}
                  key={index}
                  onClick={() => handleCardClick(item.subHeading)}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      {(item.iconType === "fontawesome" || item.iconType === "bootstrap") && (
                        <i className={`${styles.cardIcon} ${item.icon}`}></i>
                      )}
                      {item.iconType === "svg" && (
                        <img src={item.icon} alt="icon" className={styles.cardIcon} />
                      )}
                    </div>
                    <h3>{item.subHeading}</h3>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* By Company Type Section */}
          <div className={styles.platformSection}>
            <h2 className={styles.sectionTitle}>By company type</h2>
            <div className={styles.cardList}>
              {solutionList.company_type.map((item, index) => (
                <div
                  className={styles.card}
                  key={index}
                  onClick={() => handleCompanyTypeClick(item.subHeading)}
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

export default Solutions;