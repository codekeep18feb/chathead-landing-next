"use client";

import Link from "next/link";
import styles from "./CommonDropdown.module.css";

const Developers = ({ onCloseModal, onCloseMenu }) => {
  const handleLinkClick = () => {
    // Close both the modal and the mobile menu
    if (onCloseModal) onCloseModal();
    if (onCloseMenu) onCloseMenu();
  };

  return (
    <div className={styles.platformContainer}>
      {/* Left Side - Image */}
      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <img 
            src="/images/developer.png" 
            alt="Developers Illustration" 
            className={styles.platformImage}
          />
          <div className={styles.imageOverlay}>
            <h3>Developer Hub</h3>
            <p>Tools and resources for building amazing apps</p>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className={styles.contentSection}>
        <div className={styles.platformSections}>
          <div className={styles.platformSection}>
            <h2 className={styles.sectionTitle}>Developer Resources</h2>
            <div className={styles.cardList}>
              <Link 
                href="/documentation" 
                className={styles.developerLink}
                onClick={handleLinkClick}
              >
                <div className={styles.linkIcon}>
                  <i className="fas fa-book-open"></i>
                </div>
                <div className={styles.linkContent}>
                  <h3>Documentation</h3>
                  <p>Read our comprehensive API documentation</p>
                </div>
                <div className={styles.linkArrow}>→</div>
              </Link>

              {/* <Link 
                href="/api-reference" 
                className={styles.developerLink}
                onClick={handleLinkClick}
              >
                <div className={styles.linkIcon}>
                  <i className="fas fa-code"></i>
                </div>
                <div className={styles.linkContent}>
                  <h3>API Reference</h3>
                  <p>Explore our API endpoints and examples</p>
                </div>
                <div className={styles.linkArrow}>→</div>
              </Link>

              <Link 
                href="/github" 
                className={styles.developerLink}
                onClick={handleLinkClick}
              >
                <div className={styles.linkIcon}>
                  <i className="fab fa-github"></i>
                </div>
                <div className={styles.linkContent}>
                  <h3>GitHub</h3>
                  <p>Access our open-source repositories</p>
                </div>
                <div className={styles.linkArrow}>→</div>
              </Link>

              <Link 
                href="/sdk" 
                className={styles.developerLink}
                onClick={handleLinkClick}
              >
                <div className={styles.linkIcon}>
                  <i className="fas fa-download"></i>
                </div>
                <div className={styles.linkContent}>
                  <h3>SDKs & Libraries</h3>
                  <p>Download SDKs for various programming languages</p>
                </div>
                <div className={styles.linkArrow}>→</div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;