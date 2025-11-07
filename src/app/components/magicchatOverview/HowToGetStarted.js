import React from "react";
import styles from "./HowToGetStarted.module.css";
import { FaHome, FaCubes, FaKey, FaShip, FaCode } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaHome />,
    title: "Create a tenant (Admin) account",
    pos: "bottom-left",
  },
  {
    id: 2,
    icon: <FaCubes />,
    title: "Create an App",
    pos: "top-left",
  },
  {
    id: 3,
    icon: <FaKey />,
    title: "Set App Credentials",
    pos: "top-center",
  },
  {
    id: 4,
    icon: <FaShip />,
    title: "Customize your App as per need",
    pos: "top-right",
  },
  {
    id: 5,
    icon: <FaCode />,
    title: "Plug integration code in your site",
    pos: "bottom-right",
  },
];

export default function HowToGetStarted() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>How to Get Started</h2>

      <div className={styles.flowContainer}>
        {/* Multi-curve dotted path (desktop only) */}
        <svg
          className={styles.flowLine}
          viewBox="0 0 1000 320"
          preserveAspectRatio="none"
        >
          <path
            d="M60,220 
               C200,100 380,140 480,80 
               S780,100 940,220"
            fill="none"
            stroke="rgba(189, 46, 255, 0.3)"
            strokeWidth="3"
            strokeDasharray="10 8"
            strokeLinecap="round"
          />
        </svg>

        {/* Render Steps */}
        {steps.map((step) => (
          <div
            key={step.id}
            className={`${styles.step} ${styles[step.pos]}`}
            data-step={step.id}
          >
            <div className={styles.iconWrap}>
              <div className={styles.icon}>{step.icon}</div>
            </div>
            <div className={styles.text}>{step.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
