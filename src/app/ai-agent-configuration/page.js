"use client";

import React, { useState, useEffect, useRef } from "react";

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

// ------------------------------------------------------------------
// Main Component
// ------------------------------------------------------------------
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
    <div
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        color: "#111827",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px",
        background: "#fff",
      }}
    >
      {/* ───── Hero ───── */}
      <div style={{ textAlign: "center", marginBottom: "100px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 18px",
            borderRadius: "100px",
            backgroundColor: "#F3F4F6",
            color: "#4F46E5",
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "28px",
            letterSpacing: "0.5px",
          }}
        >
          ✨ AI Agent Infrastructure
        </div>
        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-0.03em",
          }}
        >
          Give Your Chatbot the
          <br />
          Power to{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Actually Do Things
          </span>
        </h1>
        <p
          style={{
            fontSize: "19px",
            color: "#6B7280",
            maxWidth: "580px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Stop building chatbots that can only chat. Our infrastructure layer
          connects your conversational AI directly to your backend systems – no
          engineers, no sprints, no complexity.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center" }}>
          <button
            style={{
              padding: "16px 32px",
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 6px 24px rgba(79,70,229,0.25)",
            }}
          >
            See the Platform →
          </button>
          <button
            style={{
              padding: "16px 32px",
              backgroundColor: "#fff",
              color: "#4F46E5",
              border: "1.5px solid #E5E7EB",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Talk to Us
          </button>
        </div>
      </div>

      {/* ───── Stats ───── */}
      <div
        ref={statsRef}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          flexWrap: "wrap",
          marginBottom: "100px",
        }}
      >
        {[
          { value: industries, suffix: "+", label: "Industries" },
          { value: intents, suffix: "+", label: "Pre-built Intents" },
          { value: 5, suffix: " min", label: "Average Setup" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div
              style={{ fontSize: "44px", fontWeight: 800, color: "#4F46E5" }}
            >
              {stat.value}
              {stat.suffix}
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#6B7280",
                fontWeight: 500,
                marginTop: "4px",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* ───── Problem / Solution ───── */}
      <div style={{ marginBottom: "100px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 4vw, 38px)",
            fontWeight: 700,
            marginBottom: "48px",
          }}
        >
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
            <div
              key={i}
              style={{
                borderRadius: "14px",
                border: "1px solid #E5E7EB",
                padding: "32px",
                backgroundColor: "#fff",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "#DC2626",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                ❌ The Problem
              </div>
              <p
                style={{
                  fontSize: "15px",
                  color: "#4B5563",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                  fontStyle: "italic",
                }}
              >
                "{item.problem}"
              </p>
              <div
                style={{
                  fontSize: "14px",
                  color: "#059669",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                ✅ Our Solution
              </div>
              <p
                style={{
                  fontSize: "15px",
                  color: "#111827",
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}
              >
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ───── Value Props ───── */}
      <div style={{ marginBottom: "100px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 4vw, 38px)",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          More Than Just "How It Works"
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "#6B7280",
            marginBottom: "56px",
          }}
        >
          The outcome matters more than the process. Here's what you unlock.
        </p>
        {VALUE_PROPS.map((vp, i) => (
          <div
            key={vp.title}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              padding: "40px",
              marginBottom: "20px",
              borderRadius: "16px",
              backgroundColor: i % 2 === 0 ? "#F9FAFB" : "#fff",
              border: "1px solid #F3F4F6",
              flexDirection: i % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>
                {vp.icon}
              </div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                {vp.title}
              </h3>
              <p
                style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}
              >
                {vp.description}
              </p>
            </div>
            <div
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "20px",
                backgroundColor: "#EEF2FF",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <div
                style={{ fontSize: "36px", fontWeight: 800, color: "#4F46E5" }}
              >
                {vp.stat}
              </div>
              <div
                style={{ fontSize: "13px", color: "#6B7280", fontWeight: 500 }}
              >
                {vp.statLabel}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ───── Benefits Grid ───── */}
      <div style={{ marginBottom: "100px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 4vw, 38px)",
            fontWeight: 700,
            marginBottom: "48px",
          }}
        >
          Built for Teams, Not Engineers
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              style={{
                padding: "28px",
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
                backgroundColor: "#fff",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0,0,0,0.06)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>
                {b.icon}
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                {b.title}
              </h3>
              <p
                style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.6 }}
              >
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ───── Social Proof ───── */}
      <div style={{ marginBottom: "100px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 4vw, 38px)",
            fontWeight: 700,
            marginBottom: "48px",
          }}
        >
          Trusted by Teams Like Yours
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {SOCIAL_PROOF.map((p, i) => (
            <div
              key={i}
              style={{
                padding: "32px",
                borderRadius: "14px",
                border: "1px solid #E5E7EB",
                backgroundColor: "#FAFAFA",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#374151",
                  fontStyle: "italic",
                  marginBottom: "16px",
                }}
              >
                "{p.quote}"
              </p>
              <div style={{ fontSize: "13px", color: "#6B7280" }}>
                <strong>{p.role}</strong> · {p.industry}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ───── CTA ───── */}
      <div
        style={{
          textAlign: "center",
          padding: "70px 40px",
          background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
          borderRadius: "24px",
          color: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          Ready to Make Your Chatbot Actually Work?
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#C7D2FE",
            marginBottom: "36px",
            maxWidth: "460px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Join the teams turning conversations into conversions.
        </p>
        <button
          style={{
            padding: "16px 36px",
            backgroundColor: "#fff",
            color: "#4F46E5",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Get Started →
        </button>
      </div>

      {/* ───── Footer ───── */}
      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
          color: "#D1D5DB",
          fontSize: "12px",
        }}
      >
        Replace testimonials and stats with your actual data. Add illustrations
        or abstract 3D visuals in place of solid colors.
      </div>
    </div>
  );
};

export default AiAgentWorkflowInfo;
