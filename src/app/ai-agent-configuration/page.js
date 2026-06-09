"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./AiAgentWorkflowInfo.module.css";

// ------------------------------------------------------------------
// Story-driven sections
// ------------------------------------------------------------------
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

// ------------------------------------------------------------------
// Animated Counter (kept minimal)
// ------------------------------------------------------------------
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
      {/* Problem/Solution Section */}
      <section aria-label="Problem and Solution" style={{ marginBottom: "100px" }}>
        <h2 className={styles.sectionTitle}>
          The Gap Between Chatbots and Your Business
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {PROBLEM_SOLUTION.map((item, i) => (
            <div key={i} className={styles.problemCard}>
              <div className={styles.problemLabel}>❌ The Problem</div>
              <p className={styles.problemText}>"{item.problem}"</p>
              <div className={styles.solutionLabel}>✅ Our Solution</div>
              <p className={styles.solutionText}>{item.solution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Props Section */}
      <section aria-label="Value Propositions" style={{ marginBottom: "100px" }}>
        <h2 className={styles.sectionTitle}>More Than Just "How It Works"</h2>
        <p className={styles.sectionSubtitle}>
          The outcome matters more than the process. Here's what you unlock.
        </p>
        {VALUE_PROPS.map((vp, i) => (
          <div
            key={vp.title}
            className={styles.valuePropCard}
            style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
          >
            <div style={{ flex: 1 }}>
              <div className={styles.valuePropIcon}>{vp.icon}</div>
              <h3 className={styles.valuePropTitle}>{vp.title}</h3>
              <p className={styles.valuePropDesc}>{vp.description}</p>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statBoxValue}>{vp.stat}</div>
              <div className={styles.statBoxLabel}>{vp.statLabel}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Benefits Grid Section */}
      <section aria-label="Benefits" style={{ marginBottom: "100px" }}>
        <h2 className={styles.sectionTitle}>Built for Teams, Not Engineers</h2>
        <div className={styles.benefitsGrid}>
          {BENEFITS.map((b) => (
            <div key={b.title} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>{b.icon}</div>
              <h3 className={styles.benefitTitle}>{b.title}</h3>
              <p className={styles.benefitDesc}>{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof Section */}
      <section aria-label="Testimonials" style={{ marginBottom: "100px" }}>
        <h2 className={styles.sectionTitle}>Trusted by Teams Like Yours</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {SOCIAL_PROOF.map((p, i) => (
            <div key={i} className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>"{p.quote}"</p>
              <div className={styles.testimonialAuthor}>
                <strong>{p.role}</strong> · {p.industry}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section aria-label="Call to Action" className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          Ready to Make Your Chatbot Actually Work?
        </h2>
        <p className={styles.ctaSubtitle}>
          Join the teams turning conversations into conversions.
        </p>
        <button className={styles.ctaButton}>Get Started →</button>
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