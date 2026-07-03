"use client";
// ExpectedResultsPage.jsx - Light Theme Version
import React, { useEffect, useRef, useState } from "react";
import styles from "./ExpectedResultsPage.module.css";

export default function ExpectedResultsPage() {
  const results = [
    { emoji: "⚡", value: 60, max: 100, suffix: "%", text: "Faster response times", color: "#4BCF9E" },
    { emoji: "🧩", value: 40, max: 100, suffix: "%", text: "Fewer repetitive tickets", color: "#4D6BDF" },
    { emoji: "💰", value: 2, max: 5, suffix: "×", text: "Higher conversion rates", color: "#FF6B6B" },
    { emoji: "⏱️", value: 10, max: 15, suffix: "hrs", text: "Saved per week", color: "#A855F7" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.dashboardFrame}>
        <div className={styles.dashboardHeader}>
          <div className={styles.ledIndicator}>
            <span className={styles.ledRed} />
            <span className={styles.ledGreen} />
          </div>
          <span className={styles.dashboardTitle}>METRICS_DASHBOARD.exe</span>
          <div className={styles.signalBars}>
            <span /><span /><span />
          </div>
        </div>
        
        <h2 className={styles.heading}>
          <span className={styles.blinkCursor}>›</span> What results can I expect? <span className={styles.blinkCursor}>_</span>
        </h2>
        
        <div className={styles.gaugeGrid}>
          {results.map((item, idx) => (
            <AnalogGauge key={idx} {...item} index={idx} />
          ))}
        </div>
        
        <div className={styles.terminalNote}>
          <span className={styles.prompt}>$</span> MagicChat pays for itself — usually within the first month
          <span className={styles.blinkingBlock}>█</span>
        </div>
      </div>
    </section>
  );
}

function AnalogGauge({ value, max, suffix, text, emoji, color, index }) {
  const [rotation, setRotation] = useState(-90);
  const [count, setCount] = useState(0);
  const gaugeRef = useRef(null);
  
  const percentage = (value / max) * 100;
  const angle = -90 + (percentage / 100) * 180;
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startRot = -90;
          let startVal = 0;
          const endRot = angle;
          const endVal = value;
          const duration = 1800;
          const startTime = performance.now();
          
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(1, elapsed / duration);
            const eased = 1 - Math.pow(1 - progress, 2);
            const currentRot = startRot + (endRot - startRot) * eased;
            const currentVal = Math.floor(startVal + (endVal - startVal) * eased);
            setRotation(currentRot);
            setCount(currentVal);
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (gaugeRef.current) observer.observe(gaugeRef.current);
    return () => observer.disconnect();
  }, [angle, value]);
  
  return (
    <div ref={gaugeRef} className={styles.gaugeCard}>
      <div className={styles.gaugeEmoji}>{emoji}</div>
      <div className={styles.gaugeWrapper}>
        <svg className={styles.gaugeSvg} viewBox="0 0 200 120">
          {/* Gauge background arc */}
          <path
            d="M 30 100 A 70 70 0 0 1 170 100"
            fill="none"
            stroke="rgba(0, 0, 0, 0.08)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Gauge fill arc */}
          <path
            d="M 30 100 A 70 70 0 0 1 170 100"
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray="220"
            strokeDashoffset={220 - (percentage / 100) * 220}
            style={{ transition: 'stroke-dashoffset 1.8s ease-out' }}
          />
          {/* Needle */}
          <g transform={`rotate(${rotation}, 100, 100)`}>
            <line x1="100" y1="100" x2="100" y2="40" stroke={color} strokeWidth="3" strokeLinecap="round" />
            <circle cx="100" cy="100" r="8" fill={color} />
            <circle cx="100" cy="100" r="4" fill="#ffffff" />
          </g>
          {/* Center number display */}
          <text x="100" y="85" textAnchor="middle" className={styles.gaugeNumber}>
            {count}{suffix}
          </text>
          <text x="100" y="105" textAnchor="middle" className={styles.gaugeMax}>
            max {max}{suffix === "%" ? "%" : ""}
          </text>
        </svg>
      </div>
      <p className={styles.gaugeText}>{text}</p>
    </div>
  );
}