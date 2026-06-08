"use client";
import React, { useState, useEffect } from "react";
import styles from "./HowToGetStartedPage.module.css";
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

export default function HowToGetStartedPage() {
  const [lineProgress, setLineProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      setLineProgress(Math.min(progress, 100));
      
      if (progress >= 20 && activeStep < 1) setActiveStep(1);
      if (progress >= 40 && activeStep < 2) setActiveStep(2);
      if (progress >= 60 && activeStep < 3) setActiveStep(3);
      if (progress >= 80 && activeStep < 4) setActiveStep(4);
      if (progress >= 95 && activeStep < 5) setActiveStep(5);
      
      if (progress >= 100) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, [activeStep]);

  const totalLength = 2000;
  const dashOffset = totalLength * (1 - lineProgress / 100);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>How to Get Started</h2>

      <div className={styles.flowContainer}>
        {/* Dashed Line */}
        <svg
          className={styles.flowLine}
          viewBox="0 0 1000 320"
          preserveAspectRatio="none"
        >
          {/* Background dashed line */}
          <path
            d="M60,220 C200,100 380,140 480,80 S780,100 940,220"
            fill="none"
            stroke="var(--border-color)"
            strokeWidth="2"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />
          
          {/* Animated line that grows */}
          <path
            d="M60,220 C200,100 380,140 480,80 S780,100 940,220"
            fill="none"
            stroke="var(--sub-btn-color)"
            strokeWidth="2"
            strokeDasharray={totalLength}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            className={styles.animatedLine}
          />
        </svg>

        {/* Steps */}
        {steps.map((step) => (
          <div
            key={step.id}
            className={`${styles.step} ${styles[step.pos]} ${activeStep >= step.id ? styles.active : ''}`}
          >
            <div className={styles.iconWrap}>
              <div className={styles.icon}>
                {step.icon}
              </div>
              {activeStep >= step.id && (
                <div className={styles.checkmark}>✓</div>
              )}
            </div>
            <div className={styles.text}>{step.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}