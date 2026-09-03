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
            <h1 className={styles.title}>
              One AI platform. Every
              <span className={styles.highlight}>Conversation.</span>
            </h1>

            <p className={styles.subtitle}>
              No-code chatbot platform for Lead Gen, AI answers & Live Agent
              Chat — "All in one".
            </p>

            <div className={styles.bannerActions}>
              <button className={styles.learnMoreBtn}>Schedule Demo →</button>
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
