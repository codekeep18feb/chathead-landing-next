"use client"
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
  const [showFlowLine, setShowFlowLine] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlowLine(true);
      
      // Simulate progress for the line
      let progress = 0;
      const interval = setInterval(() => {
        progress += 2;
        setAnimationProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 80);
      
      return () => clearInterval(interval);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>How to Get Started</h2>

      <div className={styles.flowContainer}>
        {/* Multi-curve dotted path (desktop only) */}
        <svg
          className={`${styles.flowLine} ${showFlowLine ? styles.flowLineVisible : ""}`}
          viewBox="0 0 1000 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(189, 46, 255, 0.3)" />
              <stop offset={`${animationProgress}%`} stopColor="rgba(189, 46, 255, 0.8)" />
              <stop offset="100%" stopColor="rgba(189, 46, 255, 0.3)" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <path
            d="M60,220 
               C200,100 380,140 480,80 
               S780,100 940,220"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            strokeDasharray="10 8"
            strokeLinecap="round"
            filter="url(#glow)"
          />
        </svg>

        {/* Animated dots along the path */}
        <div className={styles.pathDots}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={styles.pathDot}
              style={{
                animationDelay: `${1.4 + (i * 0.2)}s`,
                opacity: showFlowLine ? 1 : 0,
              }}
            />
          ))}
        </div>

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