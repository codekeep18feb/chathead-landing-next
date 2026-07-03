"use client";
import styles from "./WhyChooseNowPage.module.css";
import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "Cut our response time by 60%",
    author: "Sarah Chen, CTO at GrowthAI",
    rating: 5,
  },
  {
    text: "Best decision we made this year",
    author: "Marcus Rodriguez, Support Lead",
    rating: 5,
  },
  {
    text: "Our customers can't tell it's AI",
    author: "Jamie Park, Founder",
    rating: 5,
  },
];

export default function WhyChooseNowPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`${styles.gridWrap} ${isVisible ? styles.visible : ""}`}
    >
      {/* Animated Background Elements */}
      <div className={styles.animatedBg}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
        <div className={styles.particles}></div>
      </div>

      {/* Header with animation */}
      <div className={styles.headerSection}>
        <div className={styles.badge}>✨ The AI Standard</div>
        <h2 className={styles.mainTitle}>
          Why <span>MagicChat </span>
          <span className={styles.blinkingCursor}> now?</span>
        </h2>
        <p className={styles.subtitle}>
          AI isn't coming — it's already the standard.
        </p>
        {/* <div className={styles.titleUnderline}></div> */}
      </div>

      {/* Content Grid */}
      <div className={styles.contentGrid}>
        <div className={`${styles.statsCard} ${styles.cardAnimate}`}>
          <div className={styles.floatingIcon}>⚡</div>
          <div className={styles.counterWrapper}>
            <div className={styles.bigStat}>
              <span className={styles.counterNumber}>5,000</span>+
            </div>
            <div className={styles.statLabel}>Active Teams</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statRow}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>99.9%</div>
              <div className={styles.statName}>Uptime</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>24/7</div>
              <div className={styles.statName}>Support</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>3min</div>
              <div className={styles.statName}>Setup</div>
            </div>
          </div>
          <a
            href="https://admin.magicchat.io/signup"
            className={styles.ctaLink}
          >
            <button className={styles.subscribeBtn}>
              Start free trial
              <span className={styles.btnArrow}>→</span>
            </button>
          </a>
        </div>

        <div className={styles.testimonialGrid2x2}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${styles.testimonialCard} ${styles.cardAnimate}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.rating}>
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className={styles.star}>
                    ★
                  </span>
                ))}
              </div>
              <p className={styles.testimonialText}>"{t.text}"</p>
              <div className={styles.author}>
                <div className={styles.authorAvatar}>
                  <div className={styles.avatarPlaceholder}>
                    {t.author.charAt(0)}
                  </div>
                </div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>
                    {t.author.split(",")[0]}
                  </div>
                  <div className={styles.authorTitle}>
                    {t.author.split(",")[1]}
                  </div>
                </div>
              </div>
              <div className={styles.quoteIcon}>“</div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Trust Badge */}
      <div className={styles.trustSection}>
        <div className={styles.pulseRing}></div>
        <div className={styles.trustBadge}>
          <span className={styles.trustIcon}>🏆</span>
          Trusted by 5,000+ innovative teams worldwide
          <span className={styles.sparkle}>✨</span>
        </div>
      </div>
    </section>
  );
}
