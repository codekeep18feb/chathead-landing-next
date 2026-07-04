"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "./TargetAudiencePage.module.css";
import { RiPlayCircleLine, RiPauseCircleLine } from "react-icons/ri";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Image from "next/image";
import ExpectedResultsPage from "./ExpectedResultsPage";
import RoadmapNextPage from "./RoadmapNextPage";

export default function TargetAudiencePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);

  const sections = [
    {
      image: "/images/Community-education.jpg",
      title: "Community & Education Platforms",
      pain: "Need always-on, smart, context-aware assistants for students or members.",
      fits: [
        "Chatbot trained on course materials or documents.",
        "No API key or developer setup needed.",
        "Optional authentication for user-specific data.",
      ],
      ideal: "Online courses, LMS systems, or community hubs.",
      bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      image: "/images/SaaS-Startups.jpg",
      title: "SaaS Startups & Growing Tech Companies",
      pain: "Need to onboard users, handle support, and experiment fast — but can't afford to spend weeks integrating or paying for every AI query.",
      fits: [
        "One-time drag-and-drop integration.",
        "Free tier with full features — test and deploy immediately.",
        "Built-in auth system — no need to build one early.",
        "Scales instantly to multi-tenant mode as users grow.",
        "Fully customizable — supports branding and iteration.",
      ],
      ideal:
        "Early-stage SaaS platforms, productivity tools, dev tools, or marketplaces.",
      bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      image: "/images/Businesses.jpg",
      title: "Small & Medium Businesses (SMBs)",
      pain: "Want AI-powered chat or customer support but can't manage costly LLM tokens or complex setups.",
      fits: [
        "Inbuilt low-cost RAG chatbot — no OpenAI key needed.",
        "Simple website integration — add once, works forever.",
        "Supports URLs, sitemaps, and file training.",
        "No technical expertise required.",
      ],
      ideal:
        "E-commerce stores, real estate, education, and healthcare startups.",
      bgGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      image: "/images/Agencies-Product-Builders.jpg",
      title: "Agencies & Product Builders",
      pain: "Manage multiple client environments, each needing their own chatbot setup — fast and reliable.",
      fits: [
        "One-click multi-tenant mode for multiple brands.",
        "Team collaboration — invite client's staff securely.",
        "Admin dashboard for full customization control.",
        "White-label ready — fits any brand look.",
      ],
      ideal:
        "Digital agencies, marketing consultants, or managed service providers.",
      bgGradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      image: "/images/Enterprises.jpg",
      title: "Enterprises & Large Teams",
      pain: "Need secure, scalable, and easily maintainable systems with minimal downtime.",
      fits: [
        "Secure multi-tenant architecture.",
        "Live chat distribution to agents.",
        "Offline email notifications.",
        "Inbuilt authentication and data portability.",
      ],
      ideal: "Internal support teams, SaaS enterprises, or CX platforms.",
      bgGradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  }, [sections.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
  }, [sections.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Reset timer when manually changing slide
    if (isAutoPlaying) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  const resetAutoPlay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  }, [isAutoPlaying, nextSlide]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  // Handle auto-play toggle
  useEffect(() => {
    if (isAutoPlaying) {
      resetAutoPlay();
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoPlaying, resetAutoPlay]);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (isAutoPlaying) {
      resetAutoPlay();
    }
  };

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const current = sections[currentIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Who Is MagicChat
             {/* <span className={styles.highlight}>MagicChat</span> */}
              Best For?
          </h2>
          <p className={styles.intro}>
            MagicChat is built for teams who want powerful, fast, and low-cost
            customer engagement — without needing developers or API setups.
          </p>
        </div>

        <div
          className={styles.carousel}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Side - Text Content */}
          {/* Left Side - Text Content */}
          <div className={styles.contentSide}>
            <div className={styles.card}>
              <div
                className={`${styles.contentWrapper} ${isAnimating ? styles.fadeEnter : styles.fadeEnterActive}`}
              >
                <div className={styles.category}>
                  <span className={styles.categoryDot}></span>
                  Use Case {currentIndex + 1}/{sections.length}
                </div>
                <h3 className={styles.title}>{current.title}</h3>
                <div className={styles.painPoint}>
                  <span className={styles.painIcon}>😓</span>
                  <p>
                    <strong>Pain point:</strong> {current.pain}
                  </p>
                </div>
                <ul className={styles.featureList}>
                  {current.fits.map((fit, i) => (
                    <li key={i}>{fit}</li>
                  ))}
                </ul>
                <div className={styles.ideal}>
                  <span className={styles.idealIcon}>✨</span>
                  <p>
                    <strong>Ideal for:</strong> {current.ideal}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons - Above indicator dots */}
              <div className={styles.navButtonsLeft}>
                <button
                  className={styles.prevBtnLeft}
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  <IoChevronBack size={20} />
                </button>

                <button
                  className={styles.nextBtnLeft}
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  <IoChevronForward size={20} />
                </button>
              </div>

              {/* Slide Indicator Dots */}
              <div className={styles.slideIndicator}>
                {sections.map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.indicatorDot} ${idx === currentIndex ? styles.activeIndicatorDot : ""}`}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Progress Bar with Auto-play button on the right */}
              <div className={styles.progressContainer}>
                <button
                  className={styles.autoPlayBtn}
                  onClick={toggleAutoPlay}
                  aria-label={
                    isAutoPlaying ? "Pause auto-slide" : "Start auto-slide"
                  }
                  title={isAutoPlaying ? "Pause" : "Play"}
                >
                  {isAutoPlaying ? (
                    <RiPauseCircleLine size={20} />
                  ) : (
                    <RiPlayCircleLine size={20} />
                  )}
                </button>
                {isAutoPlaying && (
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      key={currentIndex}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Image/Illustration */}
          <div className={styles.imageSide}>
            <div
              className={styles.imageWrapper}
              style={{ background: current.bgGradient }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className={`${styles.mainImage} ${isImageLoaded ? styles.imageLoaded : ""}`}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onLoad={() => setIsImageLoaded(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExpectedResultsPage />
      <RoadmapNextPage/>
    </section>
  );
}
