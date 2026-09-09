"use client";
import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import ChatComponent from "../ChatComponent";
import TryMeModal from "./TryMeModal";

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTryMeOpen, setIsTryMeOpen] = useState(false);

  const videos = ["/video/video1.mp4", "/video/video4.mp4"];

  return (
    <section className={styles["solve-section"]}>
      <div className={styles["video-container"]}>
        <video
          key={currentVideo}
          className={styles["hero-video"]}
          autoPlay
          muted
          playsInline
          onEnded={() => setCurrentVideo((prev) => (prev + 1) % videos.length)}
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>

        <div className={styles.overlay}></div>

        <div className={styles.hero_content}>
          <div className={styles.container}>
            {/* ===== NEW HEADLINE ===== */}
            <h1 className={styles.title}>
              The Operating System for
              <br />
              <span className={styles.highlight}>AI Agents.</span>
            </h1>

            {/* ===== NEW SUBTITLE ===== */}
            <p className={styles.subtitle}>
              Connect your backend systems. Build any agent. Deploy anywhere.
              <br />
              <span style={{ fontSize: "0.9em", opacity: 0.8 }}>
                API-first architecture. No code required. No vendor lock-in.
              </span>
            </p>

            {/* ===== NEW TAGLINE ===== */}
            <p className={styles.tagline}>
              <span className={styles.taglineHighlight}>Your systems.</span>{" "}
              Your AI. <span className={styles.taglineHighlight}>Your Rules.</span>
              <br />
              <span style={{ fontSize: "0.8em", opacity: 0.7 }}>
                Give Your Backend A Superpower.
              </span>
            </p>

            {/* ===== VALUE PROPS ===== */}
            <div className={styles.valueProps}>
              <span className={styles.valueProp}>
                <span className={styles.valueIcon}>⚡</span> Deploy in hours, not months
              </span>
              <span className={styles.valueProp}>
                <span className={styles.valueIcon}>🔐</span> You own your users & auth
              </span>
              <span className={styles.valueProp}>
                <span className={styles.valueIcon}>💰</span> No LLM token costs
              </span>
              <span className={styles.valueProp}>
                <span className={styles.valueIcon}>🔗</span> API-first architecture
              </span>
              <span className={styles.valueProp}>
                <span className={styles.valueIcon}>🎨</span> No-code visual designer
              </span>
            </div>

            {/* ===== BUTTONS ===== */}
            <div className={styles.bannerActions}>
              <button
                className={`${styles.learnMoreBtn} ${styles.primaryButton}`}
                onClick={() => (window.location.href = "/pricing")}
              >
                Get Started →
              </button>
              <button
                className={`${styles.learnMoreBtn} ${styles.secondaryButton}`}
                onClick={() => (window.location.href = "/contact")}
              >
                Schedule Demo →
              </button>
              <button
                className={`${styles.learnMoreBtn} ${styles.tryMe}`}
                onClick={() => setIsTryMeOpen(true)}
              >
                Try Me →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.chatPart}>
        <ChatComponent />
      </div>

      {isTryMeOpen && <TryMeModal onClose={() => setIsTryMeOpen(false)} />}
    </section>
  );
};

export default HeroSection;