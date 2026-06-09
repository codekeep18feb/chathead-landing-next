"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./AiAgentWorkflowInfo.module.css";


const VALUE_PROPS = [
  {
    icon: "💬",
    title: "Your Chatbot, Now with Superpowers",
    description:
      "Imagine every conversation automatically triggering real actions – booking rooms, checking availability, creating tickets. Not canned responses. Real outcomes.",
    stat: "3x",
    statLabel: "Higher Conversion",
  },
  {
    icon: "⚡",
    title: "From Static to Dynamic in Hours",
    description:
      "What used to take engineering sprints now happens in a single afternoon. Connect your existing APIs without touching a line of backend code.",
    stat: "< 5 min",
    statLabel: "Average Setup",
  },
  {
    icon: "🔄",
    title: "One Configuration, Infinite Possibilities",
    description:
      "Set up an API connection once, then reuse it across every intent and form. Your chatbot grows smarter with every integration, not more complex.",
    stat: "1:Many",
    statLabel: "Config Reuse",
  },
];

const PROBLEM_SOLUTION = [
  {
    problem:
      'Your chatbot says "I don\'t understand" when customers ask real questions.',
    solution:
      "Our platform instantly routes intents to your backend, so every question gets a real answer.",
  },
  {
    problem: "Engineering is buried in integration tickets.",
    solution:
      "Non-technical teams connect APIs themselves. IT stays focused on what matters.",
  },
  {
    problem: "Every new integration means weeks of development.",
    solution:
      "Paste a cURL once, map it to an intent. Done. The entire process takes minutes.",
  },
];

const BENEFITS = [
  {
    icon: "🎯",
    title: "Intent-Aware",
    description:
      "Automatically matches user queries to the right backend action.",
  },
  {
    icon: "🔗",
    title: "Zero Code",
    description: "No SDKs, no middleware, no custom development required.",
  },
  {
    icon: "🛡️",
    title: "Enterprise Security",
    description:
      "JWT tokens, strict auth modes, and session-level isolation built in.",
  },
  {
    icon: "📈",
    title: "Instant ROI",
    description:
      "Go live the same day. See real results from the first conversation.",
  },
  {
    icon: "🌐",
    title: "25+ Industries",
    description:
      "Pre-configured skill templates for hospitality, SaaS, retail, and more.",
  },
  {
    icon: "🤖",
    title: "AI-Native",
    description:
      "Built from the ground up for conversational AI, not bolted on after.",
  },
];

const SOCIAL_PROOF = [
  {
    quote:
      "We connected our booking system in under 10 minutes. Our chatbot went from toy to tool instantly.",
    role: "Hotel Operations Director",
    industry: "Hospitality",
  },
  {
    quote:
      "Finally, a way to make our chatbot actually do things. Our customers can check order status in real time now.",
    role: "E-commerce Manager",
    industry: "Retail",
  },
];


const useCountUp = (end, duration = 1800, startCounting = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting || isNaN(end)) return;
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);
  return count;
};

const AiAgentWorkflowInfo = () => {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Static numbers (not requiring animation)
  const industries = useCountUp(25, 1500, startCount);
  const intents = useCountUp(200, 1500, startCount);

  return (
    <section className={styles.container}>
      <section className={styles.heroSection}>
        {/* Animated Background Shapes */}
        <div className={styles.shapesContainer}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
          <div className={styles.shape4}></div>
          <div className={styles.shape5}></div>
          <div className={styles.shape6}></div>
        </div>

        {/* Content on top of shapes */}
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>✨ AI Agent Infrastructure</div>
          <h1 className={styles.heroTitle}>
            Give Your Chatbot the
            <br />
            Power to{" "}
            <span className={styles.gradientText}>Actually Do Things</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Stop building chatbots that can only chat. Our infrastructure layer
            connects your conversational AI directly to your backend systems –
            no engineers, no sprints, no complexity.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>See the Platform →</button>
            <button className={styles.secondaryButton}>Talk to Us</button>
          </div>
        </div>

        {/* Stats Section - Inside Hero Section */}
        <div
          ref={statsRef}
          className={styles.statsContainer}
          aria-label="Statistics"
        >
          {[
            { value: industries, suffix: "+", label: "Industries" },
            { value: intents, suffix: "+", label: "Pre-built Intents" },
            { value: 5, suffix: " min", label: "Average Setup" },
          ].map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statValue}>
                {stat.value}
                {stat.suffix}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── Rest of your sections remain the same ───── */}
      {/* ───── Problem/Solution Section ───── */}
      <section
        aria-label="Problem and Solution"
        style={{ marginBottom: "100px" }}
        className={styles.problemSolution}
      >
        <h2 className={styles.sectionTitle}>
          The Gap Between Chatbots and Your Business
        </h2>
        <div className={styles.problemGridModern}>
          {PROBLEM_SOLUTION.map((item, i) => (
            <div key={i} className={styles.problemCardModern}>
              <div className={styles.problemImageWrapper}>
                <img
                  src={`/images/problem${i + 1}.jpg`}
                  alt={`Problem illustration ${i + 1}`}
                  className={styles.problemImageModern}
                />
                <div className={styles.problemTextOverlay}>
                  <div className={styles.problemBadge}>❌ PROBLEM</div>
                  <p className={styles.problemQuote}>"{item.problem}"</p>
                </div>
              </div>
              <div className={styles.solutionArrow}>
                <div className={styles.arrowIcon}>↓</div>
                <div className={styles.solutionBadge}>✅ SOLUTION</div>
              </div>
              <p className={styles.solutionTextModern}>{item.solution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Props Section */}
      {/* Value Props Section - Animated Counters */}
      <section aria-label="Value Propositions" className={styles.valueSection}>
        <h2 className={styles.sectionTitle}>More Than Just "How It Works"</h2>
        <p className={styles.sectionSubtitle}>
          The outcome matters more than the process. Here's what you unlock.
        </p>
        <div className={styles.animatedGrid}>
          {VALUE_PROPS.map((vp, i) => (
            <div key={vp.title} className={styles.animatedCard}>
              <div className={styles.animatedIconWrapper}>
                <div className={styles.animatedIcon}>{vp.icon}</div>
              </div>
              <h3 className={styles.animatedTitle}>{vp.title}</h3>
              <p className={styles.animatedDesc}>{vp.description}</p>
              <div className={styles.animatedStatWrapper}>
                <div className={styles.animatedStat}>{vp.stat}</div>
                <div className={styles.animatedStatLabel}>{vp.statLabel}</div>
              </div>
              <div className={styles.animatedBorder}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Grid Section */}
      {/* Benefits Grid Section - Zigzag Layout */}
      <section aria-label="Benefits" className={styles.valuePrpWrap}>
        <div className={styles.benefitsStickyNote}>
          <h2 className={styles.benefitsMainTitle}>
            Built for Teams, Not Engineers
          </h2>
          <p className={styles.benefitsSubtitle}>
            Six powerful features that make the difference
          </p>
        </div>

        <div className={styles.benefitsZigzagContainer}>
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className={`${styles.benefitsZigzagItem} ${i % 2 === 0 ? styles.benefitsLeft : styles.benefitsRight}`}
            >
              <div className={styles.benefitsVisualBlock}>
                <div className={styles.benefitsIconCircle}>
                  <span className={styles.benefitsIcon}>{b.icon}</span>
                </div>
                <div className={styles.benefitsLineConnector} />
              </div>
              <div className={styles.benefitsContentBlock}>
                <div className={styles.benefitsStepBadge}>FEATURE {i + 1}</div>
                <h3 className={styles.benefitsStepTitle}>{b.title}</h3>
                <p className={styles.benefitsStepText}>{b.description}</p>
                <div className={styles.benefitsArrow} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof Section - Image Top Layout */}
      <section aria-label="Testimonials" className={styles.testimonialwraper}>
        <h2 className={styles.sectionTitle}>Trusted by Teams Like Yours</h2>
        <p className={styles.sectionSubtitle}>Real people, real results</p>

        <div className={styles.testimonialMasonryAlt}>
          {SOCIAL_PROOF.map((p, i) => (
            <div key={i} className={styles.testimonialCardImageTop}>
              <div className={styles.imageTopContainer}>
                <img
                  src={`/images/testimonial${i + 1}.jpg`}
                  alt={`${p.role}`}
                  className={styles.imageTop}
                />
                <div className={styles.imageOverlayDark}></div>

                {/* Heading that shows before hover */}
                <div className={styles.cardHeading}>
                  <div className={styles.cardHeadingIcon}>“</div>
                  <h3 className={styles.cardHeadingTitle}>Customer Story</h3>
                  <p className={styles.cardHeadingSubtitle}>
                    {p.industry} · {p.role}
                  </p>
                  <div className={styles.cardHeadingHint}>Hover to read →</div>
                </div>

                <div className={styles.imageTopBadge}>
                  <span>⭐ Verified Review</span>
                </div>
              </div>

              <div className={styles.contentBottom}>
                <div className={styles.quoteMarkSmall}>“</div>
                <p className={styles.quoteText}>{p.quote}</p>
                <div className={styles.authorBottom}>
                  <strong>{p.role}</strong>
                  <span>{p.industry}</span>
                </div>
                <div className={styles.ratingStars}>★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section - Gradient Glow */}
      <section aria-label="Call to Action" className={styles.ctaGlowSection}>
        <div className={styles.ctaGlowOrb}></div>
        <div className={styles.ctaGlowOrb2}></div>
        <div className={styles.ctaContent}>
          <div className={styles.ctaPulseRing}>
            <span className={styles.ctaPulseText}>🚀 Limited Offer</span>
          </div>
          <h2 className={styles.ctaGlowTitle}>
            Ready to Transform Your <br />
            <span className={styles.ctaGradientText}>Customer Experience?</span>
          </h2>
          <p className={styles.ctaGlowSubtitle}>
            Join the AI revolution and see results in days, not months.
          </p>
          <div className={styles.ctaGlowButtons}>
            <button className={styles.ctaGlowButton}>
              Start Free Trial
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button className={styles.ctaOutlineButton}>Schedule Demo</button>
          </div>
          <div className={styles.ctaTrustSignals}>
            <span>🔒 Secure & Encrypted</span>
            <span>⚡ Instant Setup</span>
            <span>💳 No Credit Card Required</span>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className={styles.footerNote}>
        Replace testimonials and stats with your actual data. Add illustrations
        or abstract 3D visuals in place of solid colors.
      </footer>
    </section>
  );
};

export default AiAgentWorkflowInfo;
