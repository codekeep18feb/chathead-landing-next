"use client";
import { FiDollarSign, FiTrendingUp, FiSettings } from "react-icons/fi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { useEffect, useState, useRef } from "react";

import styles from "./HowDiffrentMagicChat.module.css";

export default function HowDiffrentMagicChat() {
  const [activeTab, setActiveTab] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const sectionRef = useRef(null);

  const differentiators = [
    {
      icon: <AiOutlineFieldTime size={24} color="#4bcf9e" />,
      title: "Saves You Time",
      gradient: "linear-gradient(135deg, #4bcf9e, #2d9c73)",
      points: [
        "One-Time Integration: Add a simple drag-and-drop snippet once — no recurring setup or maintenance.",
        "Instant Updates: Any admin change (chat UI, flow, text, or rules) goes live instantly — no redeploys or user re-logins.",
        "Real-Time Admin Control: Modify, preview, and apply updates without waiting on developer cycles.",
      ],
    },
    {
      icon: <FiDollarSign size={24} color="#4bcf9e" />,
      title: "Reduces Cost",
      gradient: "linear-gradient(135deg, #4bcf9e, #3b82f6)",
      points: [
        "In-Built RAG Chatbot: Get a robust, AI-powered chatbot without paying per-query fees to external LLMs like OpenAI or DeepSeek.",
        "Low-Cost Infrastructure: No hidden AI or API costs; your RAG engine runs within MagicChat's optimized framework.",
        "Free Tier With Everything: Build, test, and deploy with full features. Pay only when you scale.",
      ],
    },
    {
      icon: <FiTrendingUp size={24} color="#4bcf9e" />,
      title: "Scales Effortlessly",
      gradient: "linear-gradient(135deg, #4bcf9e, #8b5cf6)",
      points: [
        "Built for All Sizes: Start small, grow big — MagicChat adapts from solo startups to enterprise-scale setups.",
        "One-Click Multi-Tenant Mode: Manage multiple clients, projects, or products in one dashboard.",
        "Enterprise Features: Team collaboration, secure chat routing, offline notifications, and easy data migration.",
      ],
    },
    {
      icon: <FiSettings size={24} color="#4bcf9e" />,
      title: "Gives You Total Control",
      gradient: "linear-gradient(135deg, #4bcf9e, #f59e0b)",
      points: [
        "Deep Customization Without Code: Control tone, design, chatbot behavior, triggers, and logic — all from the admin dashboard.",
        "Instant Client Sync: Admin changes are broadcast to all live clients automatically.",
        "Flexible Architecture: Every configuration, from colors to logic, can be adjusted visually.",
      ],
    },
    {
      icon: <MdOutlineIntegrationInstructions size={24} color="#4bcf9e" />,
      title: "Simplifies Integration & Auth",
      gradient: "linear-gradient(135deg, #4bcf9e, #ec489a)",
      points: [
        "Auth-Agnostic Design: Works with or without your product's authentication.",
        "Inbuilt Auto-Scaling Auth System: Plug-and-play login flow available if needed.",
        "CMS Plugins: Ready for WordPress; more platforms (Shopify, Webflow, etc.) coming soon.",
        "No Code Dependency: Developers integrate once, then business users take over.",
      ],
    },
  ];

  const activeDifferentiator = differentiators[activeTab];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % differentiators.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, differentiators.length]);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        
        if (scrolled + viewportHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
          const progress = (scrolled + viewportHeight - sectionTop) / (sectionHeight + viewportHeight);
          sectionRef.current.style.setProperty('--scroll-progress', Math.min(Math.max(progress, 0), 1));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Animated background elements */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgOrb3} />
      <div className={styles.gridOverlay} />
      
      <div className={styles.container}>
        {/* Floating particles */}
        <div className={styles.particles}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.particle} style={{
              '--delay': `${i * 0.5}s`,
              '--duration': `${3 + (i % 5)}s`,
              '--size': `${3 + (i % 7)}px`,
              '--start-x': `${Math.random() * 100}%`,
            }} />
          ))}
        </div>

        <h2 className={styles.heading}>
          <span className={styles.headingGlow}>How are we different</span>
          <span className={styles.headingHighlight}> from others?</span>
        </h2>

        <div className={styles.tabContainer}>
          {/* Sidebar Tabs */}
          <div className={styles.sidebar}>
            {differentiators.map((item, index) => (
              <button
                key={index}
                className={`${styles.tabButton} ${activeTab === index ? styles.activeTab : ""}`}
                onClick={() => {
                  setActiveTab(index);
                  setAutoPlay(false);
                }}
                style={{
                  '--tab-gradient': item.gradient,
                }}
              >
                <span className={styles.tabIcon}>{item.icon}</span>
                <span className={styles.tabTitle}>{item.title}</span>
                {activeTab === index && <span className={styles.tabActiveIndicator} />}
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className={styles.contentPanel} key={activeTab}>
            <div 
              className={styles.panelGradient}
              style={{
                background: activeDifferentiator.gradient,
              }}
            />
            <div className={styles.panelHeader}>
              <div className={styles.panelIconWrapper}>
                <div className={styles.panelIconRing}>
                  <div className={styles.panelIcon}>
                    {activeDifferentiator.icon}
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.panelBadge}>Key Differentiator</div>
                <h3 className={styles.panelTitle}>
                  {activeDifferentiator.title}
                </h3>
              </div>
            </div>
            
            {/* Progress bar for auto-play */}
            {autoPlay && (
              <div className={styles.progressBar}>
                <div className={styles.progressFill} />
              </div>
            )}
            
            <ul className={styles.pointsList}>
              {activeDifferentiator.points.map((point, i) => (
                <li key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className={styles.pointIcon}>✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            {/* Decorative element */}
            <div className={styles.panelDecoration}>
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="58" stroke="rgba(75, 207, 158, 0.1)" strokeWidth="2" />
                <circle cx="60" cy="60" r="45" stroke="rgba(75, 207, 158, 0.08)" strokeWidth="1.5" />
                <circle cx="60" cy="60" r="32" stroke="rgba(75, 207, 158, 0.06)" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Auto-play indicator */}
        <div className={styles.autoPlayIndicator}>
          <button 
            className={`${styles.autoPlayBtn} ${autoPlay ? styles.active : ''}`}
            onClick={() => setAutoPlay(!autoPlay)}
          >
            {autoPlay ? '⏸ Pause Auto-rotate' : '▶ Auto-rotate'}
          </button>
        </div>
      </div>
    </section>
  );
}