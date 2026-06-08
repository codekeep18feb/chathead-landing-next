"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import deliveryStatus from "../../../../public/Asset/delivery_status.svg";
import reply from "../../../../public/Asset/reply.svg";
import reaction from "../../../../public/Asset/reaction.svg";
import formword from "../../../../public/Asset/formword.svg";
import styles from "./EngagementSectionPage.module.css";

const EngagementSectionPage = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const cardsRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const features = [
    {
      icon: reply,
      title: "Threaded Conversations",
      shortDesc: "Never lose context in busy channels",
      description:
        "Reply directly to any message with quick threaded responses. Keep conversations clean and easy to follow with organized threading. Each reply stays connected to its parent message, creating a natural conversation flow.",
      benefits: [
        "Clean organization",
        "Easy to follow",
        "Context preservation",
      ],
      imagePosition: "left",
      bgGradient: "linear-gradient(135deg, #667eea15 0%, #764ba215 100%)",
      accentColor: "#667eea",
    },
    {
      icon: deliveryStatus,
      title: "Real-Time Intelligence",
      shortDesc: "Know exactly when messages are seen",
      description:
        "See real-time delivery and read receipts. Know exactly when someone has seen or replied to your message. Get instant insights into customer engagement and response patterns.",
      benefits: ["Delivery tracking", "Read receipts", "Response insights"],
      imagePosition: "right",
      bgGradient: "linear-gradient(135deg, #4BCF9E15 0%, #2d8c6b15 100%)",
      accentColor: "#4BCF9E",
    },
    {
      icon: reaction,
      title: "Human-Centered Reactions",
      shortDesc: "Make conversations feel natural",
      description:
        "Express yourself with emoji reactions. Add quick emotions and make conversations feel natural and human. Build better connections with instant visual feedback that words alone can't convey.",
      benefits: ["Quick feedback", "Emotional context", "Higher engagement"],
      imagePosition: "left",
      bgGradient: "linear-gradient(135deg, #f5c54215 0%, #ff8c0015 100%)",
      accentColor: "#f5c542",
    },
    {
      icon: formword,
      title: "Rich Media Hub",
      shortDesc: "Share everything in one message",
      description:
        "Share documents, PDFs, images, and text together in a single message. Perfect for quick and efficient communication across teams. No more switching between apps or sending multiple messages.",
      benefits: ["Multi-format support", "Seamless sharing", "Time saving"],
      imagePosition: "right",
      bgGradient: "linear-gradient(135deg, #f093fb15 0%, #f5576c15 100%)",
      accentColor: "#f5576c",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, parseInt(index)])]);
          }
        });
      },
      { threshold: 0.3 },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll progress for the vertical line
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleHeight =
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const totalHeight = rect.height;
        const progress = Math.max(
          0,
          Math.min(100, (visibleHeight / totalHeight) * 100),
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles["alternating-section"]}>
      {/* Background decoration */}
      <div className={styles["bg-decoration"]}>
        <div className={styles["grid-pattern"]}></div>
        <div className={styles["gradient-blur-1"]}></div>
        <div className={styles["gradient-blur-2"]}></div>
      </div>

      <div className={styles["section-header"]}>
        <div className={styles["header-badge"]}>
          <span className={styles.pulse}></span>✨ Modern Messaging Platform
        </div>
        <h2>
          Customer Engagement
          <span className={styles.gradientText}> made easy</span>
        </h2>
        <p>
          Give your users a smooth, modern chat experience that fits right
          inside your product.
        </p>
        <div className={styles["header-stats"]}>
          <div className={styles["stat-chip"]}>
            <span className={styles["stat-number"]}>10k+</span>
            <span>Active Teams</span>
          </div>
          <div className={styles["stat-chip"]}>
            <span className={styles["stat-number"]}>99.9%</span>
            <span>Uptime</span>
          </div>
          <div className={styles["stat-chip"]}>
            <span className={styles["stat-number"]}>24/7</span>
            <span>Support</span>
          </div>
        </div>
      </div>

      {/* Cards Container with Vertical Timeline */}
      <div className={styles["cards-container"]} ref={containerRef}>
        {/* Vertical Timeline Line */}
        <div className={styles["vertical-timeline-line"]}>
          <div
            className={styles["timeline-progress"]}
            style={{ height: `${scrollProgress}%` }}
          ></div>
        </div>

        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            data-index={index}
            className={`${styles["split-card"]} ${styles[`card-${feature.imagePosition}`]} ${visibleItems.includes(index) ? styles["card-visible"] : ""}`}
            style={{ background: feature.bgGradient }}
          >
            {/* Timeline Icon on the vertical line */}
            <div className={styles["timeline-icon-wrapper"]}>
              <div
                className={styles["timeline-icon"]}
                style={{
                  background: feature.accentColor,
                  boxShadow: `0 0 0 4px ${feature.accentColor}20, 0 0 0 8px ${feature.accentColor}10`,
                }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={30}
                  height={30}
                />
              </div>
              <div
                className={styles["icon-pulse-ring"]}
                style={{ background: feature.accentColor }}
              ></div>
            </div>

            {/* Floating decorative elements */}
            <div
              className={styles["floating-dot-1"]}
              style={{ backgroundColor: feature.accentColor }}
            ></div>
            <div
              className={styles["floating-dot-2"]}
              style={{ backgroundColor: feature.accentColor }}
            ></div>

            {/* Image Section */}
            <div className={styles["card-image"]}>
              <div className={styles["image-wrapper"]}>
                <div
                  className={styles["image-glow"]}
                  style={{ background: feature.accentColor }}
                ></div>
                <div className={styles["image-container"]}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={200}
                    height={200}
                  />
                </div>
                <div
                  className={styles["image-badge"]}
                  style={{ background: feature.accentColor }}
                >
                  🚀 Popular
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className={styles["card-content"]}>
              <div
                className={styles["content-tag"]}
                style={{ color: feature.accentColor }}
              >
                Feature 0{index + 1}
              </div>
              <h3>{feature.title}</h3>
              <div className={styles["short-desc"]}>{feature.shortDesc}</div>
              <p className={styles["description"]}>{feature.description}</p>

              {/* Benefits List */}
              <div className={styles["benefits"]}>
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className={styles["benefit-item"]}>
                    <svg
                      className={styles["check-icon"]}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              {/* <button className={styles['learn-more-btn']} style={{ borderColor: feature.accentColor, color: feature.accentColor }}>
                Learn more 
                <svg className={styles['arrow-icon']} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button> */}
            </div>

            {/* Connector line for alternating layout */}
            <div className={styles["connector-line"]}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngagementSectionPage;
