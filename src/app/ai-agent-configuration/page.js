"use client"
import React, { useState, useEffect, useRef } from "react";

import styles from "./AiAgentWorkflowInfo.module.css";

// ─── Value Props (Focus on Outcomes) ─────────────────────────────
const VALUE_PROPS = [
  {
    icon: "🎯",
    title: "Intent‑Aware API Orchestration",
    description:
      "Every user message is instantly mapped to the right backend action. One intent can trigger a single API, a chain of APIs, or an entire workflow – all without custom code.",
    stat: "2 min",
    statLabel: "Avg. Setup Time",
  },
  {
    icon: "🔗",
    title: "One Config, Infinite Reuse",
    description:
      "Define your API connection once, then reuse it across any intent, form, or lead‑gen flow. Your chatbot grows smarter with every integration, not more complex.",
    stat: "1:Many",
    statLabel: "Config Reuse",
  },
  {
    icon: "⚡",
    title: "Single API or Chained APIs",
    description:
      "Connect a single endpoint for simple tasks, or chain multiple APIs together for complex workflows. Handle dependencies seamlessly – all from one place.",
    stat: "Any",
    statLabel: "API Complexity",
  },
  {
    icon: "🛡️",
    title: "Authenticated & Unauthenticated Support",
    description:
      "Whether your APIs use API keys, Bearer tokens, JWT, or custom headers – we handle it. No middleware, no proxy servers, no extra config.",
    stat: "All",
    statLabel: "Auth Methods",
  },
  {
    icon: "🤖",
    title: "From Lead Gen to Transactional",
    description:
      "The same API configuration powers both your AI bot and your Lead Generation bot. Collect leads, process bookings, or execute complex actions – all from one place.",
    stat: "2x",
    statLabel: "Faster Launch",
  },
  {
    icon: "📋",
    title: "One‑Click cURL Import",
    description:
      "Don't waste time writing configuration. Paste your cURL command – we parse it automatically. Headers, payload, variables – everything just works.",
    stat: "< 1 min",
    statLabel: "Import Time",
  },
];

// ─── Problem / Solution ────────────────────────────────────────────
const PROBLEM_SOLUTION = [
  {
    problem: "Your chatbot can chat, but it can't actually do anything.",
    solution:
      "Our platform connects your chatbot directly to your backend APIs. Booking rooms, checking availability, placing orders – all handled automatically.",
  },
  {
    problem: "Every new integration means weeks of development.",
    solution:
      "Paste a cURL command once, map it to an intent. Done. The entire process takes minutes, not weeks.",
  },
  {
    problem: "Authentication and security are a nightmare.",
    solution:
      "We support API keys, Bearer tokens, JWT, and custom headers out of the box. No proxies, no middleware – just secure, direct connections.",
  },
];

// ─── Benefits ──────────────────────────────────────────────────────
const BENEFITS = [
  {
    icon: "🎯",
    title: "Intent-Aware Routing",
    description:
      "Automatically detects user intent and routes it to the right API call – no manual mapping required.",
  },
  {
    icon: "🔗",
    title: "Zero-Code Integration",
    description:
      "No SDKs, no middleware, no custom development. Connect your APIs using a simple, intuitive interface.",
  },
  {
    icon: "⚡",
    title: "Chain Multiple APIs",
    description:
      "Link APIs together in sequence. The output of one becomes the input of the next – perfect for complex workflows.",
  },
  {
    icon: "🛡️",
    title: "Enterprise Security",
    description:
      "JWT tokens, strict auth modes, and session-level isolation built right in. Your data stays secure.",
  },
  {
    icon: "📋",
    title: "cURL Importer",
    description:
      "Paste any cURL command and we auto‑configure the entire API call. Headers, payload, variables – all parsed for you.",
  },
  {
    icon: "♻️",
    title: "Unified Config",
    description:
      "Use the same API config across your AI bot, lead gen bot, and forms. One setup, infinite use cases.",
  },
  {
    icon: "🚀",
    title: "Instant Lead Gen",
    description:
      "Connect lead forms directly to your backend. No separate integration required – your existing API config handles everything.",
  },
  {
    icon: "🔄",
    title: "Auth‑Ready",
    description:
      "Supports API keys, Bearer tokens, JWT, and custom headers. Never worry about auth again.",
  },
];

// ─── Social Proof ──────────────────────────────────────────────────
const SOCIAL_PROOF = [
  {
    quote:
      "We connected our entire booking API in under 10 minutes using the cURL importer. Our AI bot went from 'I don't understand' to booking rooms instantly.",
    role: "CTO",
    industry: "Hospitality Platform",
  },
  {
    quote:
      "I'm not a developer, but I was able to connect our order management API and set up a lead gen bot in the same afternoon. This is a game-changer.",
    role: "Product Manager",
    industry: "E‑commerce",
  },
  {
    quote:
      "The ability to reuse a single API config across multiple intents saved us months of work. We'll never go back to building separate integrations.",
    role: "Senior Engineer",
    industry: "SaaS",
  },
];

// ─── How It Works ──────────────────────────────────────────────────
const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Paste Your cURL",
    description:
      "Copy the cURL command from your API documentation. Paste it into our importer – we parse everything automatically.",
  },
  {
    step: "2",
    title: "Map to an Intent",
    description:
      "Select which user intent triggers this API call. Want to chain multiple APIs? Just add more calls in sequence.",
  },
  {
    step: "3",
    title: "Deploy & Go Live",
    description:
      "Your AI bot now executes real actions. Use the same config for lead gen, forms, and more – all from one place.",
  },
];

// ─── Component ─────────────────────────────────────────────────────
const AiAgentWorkflowInfo = () => {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Animated counters
  const industries = useCountUp(25, 1500, startCount);
  const intents = useCountUp(200, 1500, startCount);
  const apiCalls = useCountUp(500, 1500, startCount);

  return (
    <section className={styles.container}>
      {/* ─── Hero Section ─────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className={styles.shapesContainer}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
          <div className={styles.shape4}></div>
          <div className={styles.shape5}></div>
          <div className={styles.shape6}></div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>⚡ Intent‑Driven Infrastructure</div>
          <h1 className={styles.heroTitle}>
            Turn Your Chatbot Into a
            <br />
            <span className={styles.gradientText}>Real‑Time Action Engine</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Connect your AI bot directly to your backend APIs – single endpoints
            or complex chains. Authenticated or unauthenticated. All without
            writing a single line of code.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>See the Platform →</button>
            <button className={styles.secondaryButton}>Book a Demo</button>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className={styles.statsContainer}>
          {[
            { value: industries, suffix: "+", label: "Industries" },
            { value: intents, suffix: "+", label: "Pre‑built Intents" },
            { value: apiCalls, suffix: "+", label: "API Calls Supported" },
            { value: 3, suffix: " min", label: "Avg. Config Time" },
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

      {/* ─── Problem / Solution ───────────────────────────────────────── */}
      <section className={styles.problemSolution}>
        <h2 className={styles.sectionTitle}>
          The Gap Between Chatbots and Business Outcomes
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

      {/* ─── How It Works ────────────────────────────────────────────── */}
      <section className={styles.howItWorksSection}>
        <h2 className={styles.sectionTitle}>Get Started in 3 Simple Steps</h2>
        <p className={styles.sectionSubtitle}>
          No SDKs, no middleware, no custom code. Just your API and our platform.
        </p>
        <div className={styles.howItWorksGrid}>
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} className={styles.howItWorksCard}>
              <div className={styles.howItWorksStep}>{item.step}</div>
              <h3 className={styles.howItWorksTitle}>{item.title}</h3>
              <p className={styles.howItWorksDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Value Props ──────────────────────────────────────────────── */}
      <section className={styles.valueSection}>
        <h2 className={styles.sectionTitle}>
          Designed for Developers,<br /> Built for Everyone
        </h2>
        <p className={styles.sectionSubtitle}>
          Connect your APIs in minutes. Reuse them everywhere. No engineering sprint required.
        </p>
        <div className={styles.animatedGrid}>
          {VALUE_PROPS.map((vp) => (
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

      {/* ─── Benefits ──────────────────────────────────────────────────── */}
      <section className={styles.valuePrpWrap}>
        <div className={styles.benefitsStickyNote}>
          <h2 className={styles.benefitsMainTitle}>
            Built for Teams, Not Just Engineers
          </h2>
          <p className={styles.benefitsSubtitle}>
            Eight capabilities that make the difference
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

      {/* ─── Social Proof ─────────────────────────────────────────────── */}
      <section className={styles.testimonialwraper}>
        <h2 className={styles.sectionTitle}>Trusted by Teams Like Yours</h2>
        <p className={styles.sectionSubtitle}>Real people, real results</p>
        <div className={styles.testimonialMasonryAlt}>
          {SOCIAL_PROOF.map((p, i) => (
            <div key={i} className={styles.testimonialCardImageTop}>
              <div className={styles.imageTopContainer}>
                <img
                  src={`/images/testimonial${i + 1}.jpg`}
                  alt={p.role}
                  className={styles.imageTop}
                />
                <div className={styles.imageOverlayDark}></div>
                <div className={styles.cardHeading}>
                  <div className={styles.cardHeadingIcon}>"</div>
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
                <div className={styles.quoteMarkSmall}>"</div>
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

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className={styles.ctaGlowSection}>
        <div className={styles.ctaGlowOrb}></div>
        <div className={styles.ctaGlowOrb2}></div>
        <div className={styles.ctaContent}>
          <div className={styles.ctaPulseRing}>
            <span className={styles.ctaPulseText}>🚀 Free Trial</span>
          </div>
          <h2 className={styles.ctaGlowTitle}>
            Connect Your APIs Today.<br />
            <span className={styles.ctaGradientText}>Launch Tomorrow.</span>
          </h2>
          <p className={styles.ctaGlowSubtitle}>
            See exactly how your API connects to our platform. No commitment, no engineering overhead.
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
            <button className={styles.ctaOutlineButton}>Book a Demo</button>
          </div>
          <div className={styles.ctaTrustSignals}>
            <span>🔒 Secure & Encrypted</span>
            <span>⚡ Instant Setup</span>
            <span>💳 No Credit Card Required</span>
          </div>
        </div>
      </section>

      <footer className={styles.footerNote}>
        Replace testimonials and stats with your actual data. Add illustrations or abstract 3D visuals in place of solid colors.
      </footer>
    </section>
  );
};

// ─── useCountUp Hook ───────────────────────────────────────────────
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

export default AiAgentWorkflowInfo;