"use client";
import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import ChatComponent from "../ChatComponent";

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

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
          onEnded={() =>
            setCurrentVideo((prev) => (prev + 1) % videos.length)
          }
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>

        <div className={styles.overlay}></div>

        <div className={styles.hero_content}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              Move beyond deflection. Deliver real resolutions.
              <span className={styles.highlight}>Resolutions</span>
            </h1>

            <p className={styles.subtitle}>
              No-code chatbot platform for Lead Gen, AI answers &
              Live Agent Chat — "All in one".
            </p>

            <button className={styles.learnMoreBtn}>
              Schedule Demo →
            </button>
          </div>
        </div>
      </div>

      <ChatComponent />
    </section>
  );
};

export default HeroSection;