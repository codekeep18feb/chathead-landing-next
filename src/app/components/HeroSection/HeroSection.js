"use client";
import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import ChatComponent from "../ChatComponent";
import TryMeModal from "./TryMeModal";

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTryMeOpen, setIsTryMeOpen] = useState(false);
  const [typedText, setTypedText] = useState("");

  // ─── Typed tagline ─────────────────────────────────────────────
  // Line 1: "Your systems. Your AI. Your Rules."
  // Line 2: "The AI runtime your Restaurant CRM was missing."
  // ───────────────────────────────────────────────────────────────
  const firstText = "Your systems. Your AI. Your Rules.";
  const secondText = "The runtime your Restaurant CRM was missing.";

  useEffect(() => {
    const fullText = `${firstText}|${secondText}`;

    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));

      index++;

      // Restart typing after completing everything
      if (index >= fullText.length) {
        index = 0;
        setTypedText("");
      }
    }, 180);

    return () => clearInterval(typingInterval);
  }, []);

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
            {/* ===== HEADLINE ===== */}
            <div>
              <h1 className={styles.title}>
                The AI Runtime for
                <br />
                <span className={styles.highlight}>Restaurant CRMs.</span>
              </h1>

              {/* ===== SUBHEADLINE ===== */}
              <p className={styles.subtitle}>
                Turn your existing POS, inventory, and payment APIs into
                deterministic AI agents.
                <br />
                <span style={{ fontSize: "0.9em", opacity: 0.8 }}>
                  Auto-generated UI screens. Zero data stored. Built for
                  70,000-restaurant scale.
                </span>
              </p>
            </div>

            <div className={`${styles.middlesection}`}>
              <div className={styles.middleContent}>
                <p className={styles.tagline}>
                  {(() => {
                    const [first = "", second = ""] = typedText.split("|");

                    const systems = "Your systems.";
                    const ai = " Your AI.";
                    const rules = " Your Rules.";

                    return (
                      <>
                        {/* Your systems. */}
                        <span className={styles.taglineHighlight}>
                          {first.slice(0, systems.length)}
                        </span>

                        {/* Your AI. */}
                        {first.length > systems.length && (
                          <span>
                            {first.slice(
                              systems.length,
                              systems.length + ai.length,
                            )}
                          </span>
                        )}

                        {/* Your Rules. */}
                        {first.length > systems.length + ai.length && (
                          <span className={styles.taglineHighlight}>
                            {first.slice(systems.length + ai.length)}
                          </span>
                        )}

                        {/* Cursor for first line */}
                        {!typedText.includes("|") && (
                          <span className={styles.typingCursor}>|</span>
                        )}

                        {/* Second line starts after first line finishes */}
                        {typedText.includes("|") && (
                          <>
                            <br />

                            <span className={styles.backendTagline}>
                              {second}
                            </span>

                            {/* Cursor for second line */}
                            {second.length < secondText.length && (
                              <span className={styles.typingCursor}>|</span>
                            )}
                          </>
                        )}
                      </>
                    );
                  })()}
                </p>

                {/* ===== BUTTONS ===== */}
                <div className={styles.bannerActions}>
                  <button
                    className={`${styles.learnMoreBtn} ${styles.primaryButton}`}
                    onClick={() => (window.location.href = "/pricing")}
                  >
                    Start Free Trial →
                  </button>
                  <button
                    className={`${styles.learnMoreBtn} ${styles.secondaryButton}`}
                    onClick={() => (window.location.href = "/contact_us")}
                  >
                    Book a Demo →
                  </button>
                  <button
                    className={`${styles.learnMoreBtn} ${styles.tryMe}`}
                    onClick={() => setIsTryMeOpen(true)}
                  >
                    Try Me →
                  </button>
                </div>
              </div>
              <div className={styles.chatPart}>
                <ChatComponent />
              </div>
            </div>
          </div>

          {/* ===== VALUE PROPS ===== */}
          <div className={styles.valueProps}>
            <div className={styles.valuePropsTrack}>
              <span className={styles.valueProp}>
                <span className={styles.valueIcon}>⚡</span> Deploy in days,
                not quarters
              </span>
              <span className={styles.valueProp}>
                <span className={styles.valueIcon}>🔒</span> Zero data stored
                by default
              </span>
              <span className={styles.valueProp}>
                <span className={styles.valueIcon}>💰</span> No LLM token
                costs
              </span>
              <span className={styles.valueProp}>
                <span className={styles.valueIcon}>🔗</span> Your APIs do the
                work, not the model
              </span>
              <span className={styles.valueProp}>
                <span className={styles.valueIcon}>🧩</span> Built for 70,000
                restaurants
              </span>
              <span className={styles.valueProp}>
                <span className={styles.valueIcon}>🔐</span> You own your users
                &amp; auth
              </span>
            </div>
          </div>
        </div>
      </div>

      {isTryMeOpen && <TryMeModal onClose={() => setIsTryMeOpen(false)} />}
    </section>
  );
};

export default HeroSection;