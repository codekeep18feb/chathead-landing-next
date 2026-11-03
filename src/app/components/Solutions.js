"use client";

import { useRouter } from "next/navigation";
import styles from "./CommonDropdown.module.css";

// ============================================================
// RESTAURANT PORTAL USE CASES (API-Heavy, High-Value)
// ============================================================
const RESTAURANT_USE_CASES = [
  {
    subHeading: "Owner & Franchise Portal",
    text: "Give owners an AI assistant to query multi-store sales, approve refunds, and manage high-level inventory workflows across locations.",
    icon: "🏢", 
  },
  {
    subHeading: "Inventory & Supply Chain",
    text: "Allow managers to update stock via natural language or generated forms. Map directly to existing supply chain APIs.",
    icon: "📦",
  },
  {
    subHeading: "Customer Storefront & Kiosk",
    text: "Generate dynamic, interactive UI screens for ordering, table reservations, and upselling without building custom frontends.",
    icon: "🍽️",
  },
  {
    subHeading: "Counter & POS Specialist",
    text: "Provide staff with a lightning-fast AI interface to check order status, process returns, and apply complex discounts via API chains.",
    icon: "💳",
  },
  {
    subHeading: "Kitchen Display System (KDS)",
    text: "Enable chefs to trigger inventory depletion, flag out-of-stock items, or request substitutions through a zero-touch AI workflow.",
    icon: "👨‍🍳",
  },
  {
    subHeading: "Corporate HR & Staffing",
    text: "Let managers generate shift swaps, request time-off, and view payroll summaries by chaining directly to your HR backend APIs.",
    icon: "👥",
  },
];

// ============================================================
// COMPANY TYPES (Who are we selling to?)
// ============================================================
const COMPANY_TYPES = [
  {
    subHeading: "Restaurant OS / CRM Platforms",
    text: "White-label the Sageion AI layer. Give your high-stake clients an enterprise AI add-on with zero data duplication.",
    icon: "fa-solid fa-server",
  },
  {
    subHeading: "Franchise Networks",
    text: "Manage hundreds of locations. Provide store managers with AI agents that respect per-item rules and require manual approvals for high-value actions.",
    icon: "fa-solid fa-store",
  },
];

const Solutions = ({ onCloseModal, onCloseMenu }) => {
  const router = useRouter();

  const handleCardClick = (subHeading) => {
    // Close both the modal and the mobile menu
    if (onCloseModal) onCloseModal();
    if (onCloseMenu) onCloseMenu();

    const slug = subHeading
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/&/g, "and")
      .replace(/[^\w\-]/g, "");

    router.push(`/solutions/${slug}`);
  };

  const handleCompanyTypeClick = (subHeading) => {
    // Close both the modal and the mobile menu
    if (onCloseModal) onCloseModal();
    if (onCloseMenu) onCloseMenu();
    
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
            <h3>AI for Every Portal</h3>
            <p>Power your highest-value workflows</p>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className={styles.contentSection}>
        <div className={styles.platformSections}>
          
          {/* By Use Case Section */}
          <div className={styles.platformSection}>
            <h2 className={styles.sectionTitle}>By Portal Type</h2>
            <div className={styles.cardList}>
              {RESTAURANT_USE_CASES.map((item, index) => (
                <div
                  className={styles.card}
                  key={index}
                  onClick={() => handleCardClick(item.subHeading)}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <span style={{ fontSize: '20px' }}>{item.icon}</span>
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
            <h2 className={styles.sectionTitle}>Who is building?</h2>
            <div className={styles.cardList}>
              {COMPANY_TYPES.map((item, index) => (
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