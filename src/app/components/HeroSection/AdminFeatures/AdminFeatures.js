"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./AdminFeatures.module.css";

import {
  FaRocket,
  FaShieldAlt,
  FaPlug,
  FaNetworkWired,
  FaPaintBrush,
  FaLock,
  FaRobot,
  FaArrowRight,
  FaCheckCircle,
  FaPlayCircle,
  FaCog,
  FaWaveSquare,
  FaComments,
} from "react-icons/fa";

// Import the separate Key Features component
import KeyFeaturesSection from "./KeyFeaturesSection";
import KeyFeaturesCardview from "./KeyFeaturesCardview";
import HowDiffrentMagicChat from "../HowDiffrentMagicChat";
import TargetAudiencePage from "../TargetAudiencePage";
import PricingPlansPage from "../PricingPlansPage";

/* ============================================================
   ADMIN FEATURES
   ============================================================ */

const AdminFeatures = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState({});
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [featurePages, setFeaturePages] = useState({});
  const [imagePages, setImagePages] = useState({});
  const [viewMode, setViewMode] = useState("accordion");

  const sectionRefs = useRef({});
  const observerRef = useRef(null);

  /* ============================================================
     VIEW MODE PERSISTENCE - First time shows Card View
     ============================================================ */

  useEffect(() => {
    const visitCount = localStorage.getItem("sageionVisitCount");
    const count = visitCount ? parseInt(visitCount, 10) : 0;

    if (count < 2) {
      setViewMode("card");
    } else {
      setViewMode("accordion");
    }

    // Increment visit count
    localStorage.setItem("sageionVisitCount", (count + 1).toString());
  }, []);

  /* ============================================================
     INTERSECTION OBSERVER
     ============================================================ */

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) {
        observerRef.current.observe(ref);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  /* ============================================================
     VIDEO MODAL
     ============================================================ */

  const openVideoModal = (videoId) => {
    setActiveVideo(videoId);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setActiveVideo(null);
  };

  /* ============================================================
     VIDEO DATA
     ============================================================ */

  const videos = {
    "rag-demo": {
      title: "RAG Engine Demo",
      description:
        "See how Sageion's RAG engine retrieves context from your documents",
      thumbnail: "/videos/rag-demo-thumbnail.jpg",
    },

    "api-chaining": {
      title: "API Chaining Demo",
      description: "Complex API workflows built visually in minutes",
      thumbnail: "/videos/api-chaining-thumbnail.jpg",
    },

    "form-generation": {
      title: "Generative Forms Demo",
      description: "AI-generated forms with pre-filled data",
      thumbnail: "/videos/form-generation-thumbnail.jpg",
    },

    "webhook-async": {
      title: "Async Webhook Demo",
      description: "True async support with no 30-second timeout",
      thumbnail: "/videos/webhook-async-thumbnail.jpg",
    },

    "live-chat": {
      title: "Live Chat with Multi-Admin Demo",
      description: "Real-time agent collaboration and routing",
      thumbnail: "/videos/live-chat-thumbnail.jpg",
    },

    "admin-panel": {
      title: "Admin Panel Demo",
      description: "Complete control over your AI agents and workflows",
      thumbnail: "/videos/admin-panel-thumbnail.jpg",
    },
  };

  /* ============================================================
     SECTIONS
     ============================================================ */

  const sections = [
    {
      id: "hero",
      label: "Overview",
    },
    {
      id: "problem",
      label: "The Problem",
    },
    {
      id: "solution",
      label: "Our Solution",
    },
    {
      id: "key-features",
      label: "Key Features",
    },
    {
      id: "time-savings",
      label: "Time Savings",
    },
    {
      id: "architecture",
      label: "Architecture",
    },
    {
      id: "workflows",
      label: "Workflows",
    },
    {
      id: "integrations",
      label: "Integrations",
    },
    {
      id: "security",
      label: "Security",
    },
    {
      id: "scalability",
      label: "Scalability",
    },
    {
      id: "comparison",
      label: "Comparison",
    },
    {
      id: "testimonials",
      label: "Testimonials",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* ============================================================
          STICKY NAVIGATION
          ============================================================ */}

      <nav className={styles.stickyNav}>
        <div className={styles.navContainer}>
          <div className={styles.navLogo}>
            <span className={styles.logoIcon}>🧠</span>
            <span className={styles.logoText}>Sageion</span>
          </div>

          <div className={styles.navLinks}>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`${styles.navLink} ${activeSection === section.id ? styles.navLinkActive : ""
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {section.label}
              </a>
            ))}
          </div>

          <button className={styles.navCta}>Get Started</button>
        </div>
      </nav>

      {/* ============================================================
          HERO SECTION
          ============================================================ */}

      <section
        id="hero"
        className={styles.heroSection}
        ref={(el) => {
          sectionRefs.current["hero"] = el;
        }}
      >
        <div className={styles.heroBackground}>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroOrb3} />
          <div className={styles.heroGrid} />
        </div>

        <div className={styles.sectionContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.pulseDot} />
              <span>🚀 Now available in public beta</span>
            </div>

            <h1 className={styles.heroTitle}>
              Build AI Agents{" "}
              <span className={styles.heroHighlight}>Without Code</span>
            </h1>

            <p className={styles.heroSubtitle}>
              <strong>Sageion</strong> is the only platform that lets you build
              complex AI agents and workflows using your existing APIs — without
              writing a single line of code.
            </p>

            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>90%</span>
                <span className={styles.heroStatLabel}>Faster deployment</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>0</span>
                <span className={styles.heroStatLabel}>Code required</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>5K+</span>
                <span className={styles.heroStatLabel}>Teams trust us</span>
              </div>
            </div>

            <div className={styles.heroButtons}>
              <button className={styles.heroPrimaryBtn}>
                Start Free Trial <span className={styles.btnArrow}>→</span>
              </button>
              <button
                className={styles.heroSecondaryBtn}
                onClick={() => openVideoModal("rag-demo")}
              >
                <span className={styles.btnPlay}>▶</span> Watch Demo
              </button>
            </div>

            <div className={styles.heroTrust}>
              <span>🔒 No credit card required</span>
              <span>⚡ 3-minute setup</span>
              <span>🌟 Free forever tier</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroVisualPlaceholder}>
              <div className={styles.visualPlaceholderContent}>
                <span className={styles.placeholderIcon}>🤖</span>
                <span className={styles.placeholderText}>
                  Sageion Platform Demo
                </span>
                <span className={styles.placeholderSubtext}>
                  Interactive AI agent builder
                </span>
                <span className={styles.placeholderDimensions}>
                  16:9 • Click to play
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
    KEY FEATURES SECTION - SEPARATE COMPONENT
    ============================================================ */}

      <section
        id="key-features"
        className={styles.featuresSection}
        ref={(el) => (sectionRefs.current["key-features"] = el)}
      >
        <div className={styles.sectionContainer}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>⚡ Key Features</span>
            <h2 className={styles.sectionTitle}>
              Everything You Need{" "}
              <span className={styles.gradientText}>to Succeed</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive features that make Sageion the most complete
              platform for business automation.
            </p>

            {/* View Tabs */}
            <div className={styles.viewTabs}>
              <button
                className={`${styles.viewTab} ${viewMode === "accordion" ? styles.viewTabActive : ""}`}
                onClick={() => setViewMode("accordion")}
              >
                Accordion View
              </button>
              <button
                className={`${styles.viewTab} ${viewMode === "card" ? styles.viewTabActive : ""}`}
                onClick={() => setViewMode("card")}
              >
                Card View
              </button>
            </div>
          </div>

          {/* Key Features Component */}
          {viewMode === "accordion" ? (
            <KeyFeaturesSection
              featurePages={featurePages}
              setFeaturePages={setFeaturePages}
              imagePages={imagePages}
              setImagePages={setImagePages}
              openVideoModal={openVideoModal}
            />
          ) : (
            <KeyFeaturesCardview
              featurePages={featurePages}
              setFeaturePages={setFeaturePages}
              imagePages={imagePages}
              setImagePages={setImagePages}
              openVideoModal={openVideoModal}
            />
          )}
        </div>
      </section>
      {/* ============================================================
          VIDEO MODAL
          ============================================================ */}

      {videoModalOpen && activeVideo && videos[activeVideo] && (
        <div className={styles.videoModalOverlay} onClick={closeVideoModal}>
          <div
            className={styles.videoModal}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.videoModalClose}
              onClick={closeVideoModal}
              aria-label="Close video"
            >
              ×
            </button>

            <div className={styles.videoModalContent}>
              <h3>{videos[activeVideo].title}</h3>

              <p>{videos[activeVideo].description}</p>

              <div className={styles.videoPlaceholder}>
                <img
                  src={videos[activeVideo].thumbnail}
                  alt={videos[activeVideo].title}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <HowDiffrentMagicChat />
      <TargetAudiencePage />
      <PricingPlansPage />

      {/* ============================================================
          PROBLEM SECTION
          ============================================================ */}

      <section
        id="problem"
        className={styles.problemSection}
        ref={(el) => (sectionRefs.current.problem = el)}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>😓 The Reality</span>
            <h2 className={styles.sectionTitle}>
              Why Most AI Projects{" "}
              <span className={styles.gradientText}>Fail</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              We've seen it hundreds of times. Here's what's actually happening.
            </p>
          </div>

          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>⏰</div>
              <h3>6-12 Months to Launch</h3>
              <p>
                Massive teams, endless meetings, constant delays. By the time
                you launch, your business needs have changed.
              </p>
              <div className={styles.problemStat}>
                <span className={styles.problemStatNegative}>
                  ❌ Average: 8 months
                </span>
              </div>
            </div>

            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>👥</div>
              <h3>8-15 People Required</h3>
              <p>
                Developers, data scientists, project managers, QA, DevOps — all
                needed just to get started.
              </p>
              <div className={styles.problemStat}>
                <span className={styles.problemStatNegative}>
                  ❌ Massive team overhead
                </span>
              </div>
            </div>

            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🔧</div>
              <h3>Major System Changes</h3>
              <p>
                Database access required, ETL pipelines, data duplication,
                security risks — changing everything.
              </p>
              <div className={styles.problemStat}>
                <span className={styles.problemStatNegative}>
                  ❌ High risk, high cost
                </span>
              </div>
            </div>

            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>💸</div>
              <h3>$100K+ Upfront Cost</h3>
              <p>
                Before you see a single result. And that's just for a "simple"
                chatbot implementation.
              </p>
              <div className={styles.problemStat}>
                <span className={styles.problemStatNegative}>
                  ❌ Budget killer
                </span>
              </div>
            </div>

            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🔄</div>
              <h3>Slow Updates</h3>
              <p>
                Every change requires a new release cycle. Days or weeks to
                update a simple flow.
              </p>
              <div className={styles.problemStat}>
                <span className={styles.problemStatNegative}>
                  ❌ Can't iterate fast
                </span>
              </div>
            </div>

            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>😩</div>
              <h3>Flacky, Unreliable Results</h3>
              <p>
                After all that effort, the AI still gets it wrong half the time.
                Users lose trust.
              </p>
              <div className={styles.problemStat}>
                <span className={styles.problemStatNegative}>
                  ❌ Low user adoption
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SOLUTION SECTION
          ============================================================ */}

      <section
        id="solution"
        className={styles.solutionSection}
        ref={(el) => (sectionRefs.current.solution = el)}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>✨ The Solution</span>
            <h2 className={styles.sectionTitle}>
              This Is How{" "}
              <span className={styles.gradientText}>AI Should Work</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Everything you need. Nothing you don't. One platform, endless
              possibilities.
            </p>
          </div>

          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <div
                className={styles.solutionIcon}
                style={{ background: "#4BCF9E20", color: "#4BCF9E" }}
              >
                <FaRocket />
              </div>
              <h3>1000% Faster Implementation</h3>
              <p>
                What others take 6-12 months to build, you can do in 2-4 weeks —
                with just 1 person who knows your APIs.
              </p>
              <div className={styles.solutionProof}>
                <span className={styles.proofBadge}>📊 Proven</span>
                <span className={styles.proofMetric}>90% time reduction</span>
              </div>
            </div>

            <div className={styles.solutionCard}>
              <div
                className={styles.solutionIcon}
                style={{ background: "#667EEA20", color: "#667EEA" }}
              >
                <FaShieldAlt />
              </div>
              <h3>Zero System Changes</h3>
              <p>
                No database access needed. No ETL pipelines. No data
                duplication. Just your existing APIs.
              </p>
              <div className={styles.solutionProof}>
                <span className={styles.proofBadge}>🔒 Secure</span>
                <span className={styles.proofMetric}>No DB access</span>
              </div>
            </div>

            <div className={styles.solutionCard}>
              <div
                className={styles.solutionIcon}
                style={{ background: "#F59E0B20", color: "#F59E0B" }}
              >
                <FaPlug />
              </div>
              <h3>One-Time Integration</h3>
              <p>
                Add our snippet once. All future changes — UI, flows, logic,
                rules — happen instantly. Forever.
              </p>
              <div className={styles.solutionProof}>
                <span className={styles.proofBadge}>⚡ Instant</span>
                <span className={styles.proofMetric}>No redeploys ever</span>
              </div>
            </div>

            <div className={styles.solutionCard}>
              <div
                className={styles.solutionIcon}
                style={{ background: "#EC489A20", color: "#EC489A" }}
              >
                <FaNetworkWired />
              </div>
              <h3>Complex API Chaining</h3>
              <p>
                Chain multiple APIs together with conditional logic, auth, error
                handling — all from a visual UI.
              </p>
              <div className={styles.solutionProof}>
                <span className={styles.proofBadge}>🎯 Powerful</span>
                <span className={styles.proofMetric}>Visual chaining</span>
              </div>
            </div>
          </div>

          {/* Video Proof - Placeholder */}
          <div className={styles.videoProofSection}>
            <div className={styles.videoProofHeader}>
              <span className={styles.videoProofBadge}>
                🎬 See It In Action
              </span>
              <h3>Watch Sageion Transform a Business</h3>
            </div>
            <div className={styles.videoProofGrid}>
              <div
                className={styles.videoProofCard}
                onClick={() => openVideoModal("rag-demo")}
              >
                <div className={styles.videoThumbnail}>
                  <div className={styles.videoThumbnailPlaceholder}>
                    <FaPlayCircle className={styles.videoPlayIcon} />
                    <span>RAG Engine Demo</span>
                  </div>
                  <div className={styles.videoDuration}>2:30</div>
                </div>
                <div className={styles.videoProofInfo}>
                  <h4>RAG Engine in Action</h4>
                  <p>Context-aware responses from your documents</p>
                </div>
              </div>

              <div
                className={styles.videoProofCard}
                onClick={() => openVideoModal("api-chaining")}
              >
                <div className={styles.videoThumbnail}>
                  <div className={styles.videoThumbnailPlaceholder}>
                    <FaPlayCircle className={styles.videoPlayIcon} />
                    <span>API Chaining Demo</span>
                  </div>
                  <div className={styles.videoDuration}>3:15</div>
                </div>
                <div className={styles.videoProofInfo}>
                  <h4>Complex API Chaining</h4>
                  <p>Build workflows visually in minutes</p>
                </div>
              </div>

              <div
                className={styles.videoProofCard}
                onClick={() => openVideoModal("form-generation")}
              >
                <div className={styles.videoThumbnail}>
                  <div className={styles.videoThumbnailPlaceholder}>
                    <FaPlayCircle className={styles.videoPlayIcon} />
                    <span>Generative Forms Demo</span>
                  </div>
                  <div className={styles.videoDuration}>2:45</div>
                </div>
                <div className={styles.videoProofInfo}>
                  <h4>AI-Generated Forms</h4>
                  <p>Pre-filled, intelligent forms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TIME SAVINGS SECTION
          ============================================================ */}

      <section
        id="time-savings"
        className={styles.timeSavingsSection}
        ref={(el) => (sectionRefs.current["time-savings"] = el)}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>⏱️ Time Savings</span>
            <h2 className={styles.sectionTitle}>
              From Months to <span className={styles.gradientText}>Days</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              We've benchmarked hundreds of implementations. The numbers are
              staggering.
            </p>
          </div>

          <div className={styles.timeSavingsMetrics}>
            <div className={styles.timeMetric}>
              <div className={styles.timeMetricValue}>90%</div>
              <div className={styles.timeMetricLabel}>
                Implementation Time Reduction
              </div>
              <div className={styles.timeMetricCompare}>
                <span className={styles.oldValue}>8 months →</span>
                <span className={styles.newValue}>2 weeks</span>
              </div>
            </div>

            <div className={styles.timeMetric}>
              <div className={styles.timeMetricValue}>85%</div>
              <div className={styles.timeMetricLabel}>
                Cost Savings vs. Building In-House
              </div>
              <div className={styles.timeMetricCompare}>
                <span className={styles.oldValue}>$100K+ →</span>
                <span className={styles.newValue}>$0 start</span>
              </div>
            </div>

            <div className={styles.timeMetric}>
              <div className={styles.timeMetricValue}>100x</div>
              <div className={styles.timeMetricLabel}>
                Faster Update Deployment
              </div>
              <div className={styles.timeMetricCompare}>
                <span className={styles.oldValue}>Days/Weeks →</span>
                <span className={styles.newValue}>Seconds</span>
              </div>
            </div>

            <div className={styles.timeMetric}>
              <div className={styles.timeMetricValue}>1 vs 10+</div>
              <div className={styles.timeMetricLabel}>Team Size Needed</div>
              <div className={styles.timeMetricCompare}>
                <span className={styles.oldValue}>10+ people →</span>
                <span className={styles.newValue}>1 person</span>
              </div>
            </div>
          </div>

          {/* Case Study Section */}
          <div className={styles.caseStudySection}>
            <div className={styles.caseStudyHeader}>
              <span className={styles.caseStudyBadge}>
                📋 Real-World Case Study
              </span>
              <h3>How a SaaS Company Built 15 Workflows in 3 Weeks</h3>
            </div>
            <div className={styles.caseStudyContent}>
              <div className={styles.caseStudyMetrics}>
                <div className={styles.caseMetric}>
                  <span className={styles.caseMetricNumber}>15</span>
                  <span className={styles.caseMetricLabel}>
                    Workflows Built
                  </span>
                </div>
                <div className={styles.caseMetric}>
                  <span className={styles.caseMetricNumber}>8</span>
                  <span className={styles.caseMetricLabel}>
                    APIs Integrated
                  </span>
                </div>
                <div className={styles.caseMetric}>
                  <span className={styles.caseMetricNumber}>5</span>
                  <span className={styles.caseMetricLabel}>Product Lines</span>
                </div>
                <div className={styles.caseMetric}>
                  <span className={styles.caseMetricNumber}>1</span>
                  <span className={styles.caseMetricLabel}>
                    Business Analyst
                  </span>
                </div>
              </div>
              <div className={styles.caseStudyResult}>
                <span className={styles.resultBadge}>✅ Success</span>
                <span>
                  Deployed in 3 weeks, 0 developers needed, $0 additional
                  infrastructure cost
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ARCHITECTURE SECTION
          ============================================================ */}

      <section
        id="architecture"
        className={styles.architectureSection}
        ref={(el) => (sectionRefs.current.architecture = el)}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>🏗️ Architecture</span>
            <h2 className={styles.sectionTitle}>
              Built Different.{" "}
              <span className={styles.gradientText}>Works Better.</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              The three-layer architecture that makes Sageion infinitely more
              powerful.
            </p>
          </div>

          <div className={styles.architectureLayers}>
            <div className={styles.architectureLayer}>
              <div className={styles.layerNumber}>1</div>
              <div className={styles.layerContent}>
                <div className={styles.layerHeader}>
                  <div
                    className={styles.layerIcon}
                    style={{ background: "#4BCF9E20", color: "#4BCF9E" }}
                  >
                    <FaPaintBrush />
                  </div>
                  <h3>Presentation Layer</h3>
                </div>
                <p>
                  Dynamic UI generation from API responses. No hardcoded
                  screens.
                </p>
                <ul className={styles.layerDetails}>
                  <li>
                    <FaCheckCircle /> Templated responses with Nunjucks
                  </li>
                  <li>
                    <FaCheckCircle /> Style transformations (bold, highlight,
                    buttons)
                  </li>
                  <li>
                    <FaCheckCircle /> Structural transformations (tables, cards,
                    lists)
                  </li>
                  <li>
                    <FaCheckCircle /> Media transformations (images, PDFs)
                  </li>
                  <li>
                    <FaCheckCircle /> Multiple screens from single API response
                  </li>
                </ul>
                <div className={styles.layerScreenshot}>
                  <div className={styles.layerScreenshotPlaceholder}>
                    <span>Presentation Layer Screenshot</span>
                    <span className={styles.placeholderSubtext}>
                      Placeholder: UI generation demo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.architectureLayer}>
              <div className={styles.layerNumber}>2</div>
              <div className={styles.layerContent}>
                <div className={styles.layerHeader}>
                  <div
                    className={styles.layerIcon}
                    style={{ background: "#667EEA20", color: "#667EEA" }}
                  >
                    <FaNetworkWired />
                  </div>
                  <h3>Orchestration Layer</h3>
                </div>
                <p>Intent → API/Chain → Response screens with dynamic forms.</p>
                <ul className={styles.layerDetails}>
                  <li>
                    <FaCheckCircle /> Generative AI form creation with
                    pre-filled values
                  </li>
                  <li>
                    <FaCheckCircle /> Complex API chaining with conditional
                    logic
                  </li>
                  <li>
                    <FaCheckCircle /> True async webhook support (no 30s
                    timeout)
                  </li>
                  <li>
                    <FaCheckCircle /> Session memory across all actions
                  </li>
                  <li>
                    <FaCheckCircle /> RAG integration for knowledge retrieval
                  </li>
                </ul>
                <div className={styles.layerScreenshot}>
                  <div className={styles.layerScreenshotPlaceholder}>
                    <span>Orchestration Layer Screenshot</span>
                    <span className={styles.placeholderSubtext}>
                      Placeholder: Workflow builder demo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.architectureLayer}>
              <div className={styles.layerNumber}>3</div>
              <div className={styles.layerContent}>
                <div className={styles.layerHeader}>
                  <div
                    className={styles.layerIcon}
                    style={{ background: "#F59E0B20", color: "#F59E0B" }}
                  >
                    <FaPlug />
                  </div>
                  <h3>Integration Layer</h3>
                </div>
                <p>Connect to anything without changing your systems.</p>
                <ul className={styles.layerDetails}>
                  <li>
                    <FaCheckCircle /> Primary + Secondary authentication
                    (Bearer, API Key, Basic)
                  </li>
                  <li>
                    <FaCheckCircle /> Protected and public API support
                  </li>
                  <li>
                    <FaCheckCircle /> Webhook callbacks for long-running
                    processes
                  </li>
                  <li>
                    <FaCheckCircle /> No database access required
                  </li>
                  <li>
                    <FaCheckCircle /> Multi-tenant ready from day one
                  </li>
                </ul>
                <div className={styles.layerScreenshot}>
                  <div className={styles.layerScreenshotPlaceholder}>
                    <span>Integration Layer Screenshot</span>
                    <span className={styles.placeholderSubtext}>
                      Placeholder: API connector demo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className={styles.architectureDiagram}>
            <div className={styles.diagramPlaceholder}>
              <div className={styles.diagramContent}>
                <span className={styles.placeholderIcon}>📐</span>
                <span>Full Architecture Diagram</span>
                <span className={styles.placeholderSubtext}>
                  Placeholder: Complete system architecture diagram
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WORKFLOWS SECTION
          ============================================================ */}

      <section
        id="workflows"
        className={styles.workflowsSection}
        ref={(el) => (sectionRefs.current.workflows = el)}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>🔄 Workflows</span>
            <h2 className={styles.sectionTitle}>
              Build <span className={styles.gradientText}>Anything</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              From simple questions to complex multi-step business processes.
            </p>
          </div>

          <div className={styles.workflowsGrid}>
            <div className={styles.workflowCard}>
              <div className={styles.workflowIcon}>📊</div>
              <h3>Lead Generation</h3>
              <p>Internal saving lead + External CRM integration</p>
              <div className={styles.workflowTags}>
                <span>Salesforce</span>
                <span>HubSpot</span>
                <span>Internal DB</span>
              </div>
            </div>

            <div className={styles.workflowCard}>
              <div className={styles.workflowIcon}>🏨</div>
              <h3>Booking Management</h3>
              <p>Complex API chaining for hotel/restaurant bookings</p>
              <div className={styles.workflowTags}>
                <span>Payment</span>
                <span>Availability</span>
                <span>Confirmation</span>
              </div>
            </div>

            <div className={styles.workflowCard}>
              <div className={styles.workflowIcon}>💳</div>
              <h3>Payment Processing</h3>
              <p>Async webhook support for payment flows</p>
              <div className={styles.workflowTags}>
                <span>Stripe</span>
                <span>Razorpay</span>
                <span>Custom</span>
              </div>
            </div>

            <div className={styles.workflowCard}>
              <div className={styles.workflowIcon}>📦</div>
              <h3>Order Fulfillment</h3>
              <p>Multi-step workflows with external systems</p>
              <div className={styles.workflowTags}>
                <span>Inventory</span>
                <span>Shipping</span>
                <span>Tracking</span>
              </div>
            </div>

            <div className={styles.workflowCard}>
              <div className={styles.workflowIcon}>🏥</div>
              <h3>Healthcare Scheduling</h3>
              <p>Protected API integration with compliance</p>
              <div className={styles.workflowTags}>
                <span>HIPAA</span>
                <span>EHR</span>
                <span>Booking</span>
              </div>
            </div>

            <div className={styles.workflowCard}>
              <div className={styles.workflowIcon}>🏠</div>
              <h3>Real Estate Search</h3>
              <p>Dynamic response screens for property listings</p>
              <div className={styles.workflowTags}>
                <span>Search</span>
                <span>Filters</span>
                <span>Booking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          INTEGRATIONS SECTION
          ============================================================ */}

      <section
        id="integrations"
        className={styles.integrationsSection}
        ref={(el) => (sectionRefs.current.integrations = el)}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>🔌 Integrations</span>
            <h2 className={styles.sectionTitle}>
              Connect to <span className={styles.gradientText}>Anything</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Primary + Secondary authentication. Public + Protected APIs. We
              handle it all.
            </p>
          </div>

          <div className={styles.integrationGrid}>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🔐</div>
              <h3>Primary Auth</h3>
              <p>Bearer Token, API Key, Basic Auth</p>
            </div>

            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🛡️</div>
              <h3>Secondary Auth</h3>
              <p>OAuth2, JWT, Custom Headers</p>
            </div>

            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🌐</div>
              <h3>Public APIs</h3>
              <p>REST, GraphQL, WebSocket</p>
            </div>

            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🏢</div>
              <h3>Protected APIs</h3>
              <p>Internal systems, enterprise APIs</p>
            </div>

            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>📨</div>
              <h3>Webhooks</h3>
              <p>True async support, no 30s timeout</p>
            </div>

            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>📁</div>
              <h3>File Upload</h3>
              <p>Images, PDFs, documents</p>
            </div>
          </div>

          <div className={styles.integrationCTA}>
            <p>Need to integrate with a specific system?</p>
            <button className={styles.integrationCTABtn}>Let's Talk →</button>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECURITY SECTION
          ============================================================ */}

      <section
        id="security"
        className={styles.securitySection}
        ref={(el) => (sectionRefs.current.security = el)}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>🔒 Security</span>
            <h2 className={styles.sectionTitle}>
              Enterprise-Grade{" "}
              <span className={styles.gradientText}>Security</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              No XSS attacks. No stored scripts. Complete peace of mind.
            </p>
          </div>

          <div className={styles.securityGrid}>
            <div className={styles.securityCard}>
              <div className={styles.securityIcon}>🚫</div>
              <h3>No XSS Attacks</h3>
              <p>
                We never store HTML/JS in the database. Templates +
                transformations are applied client-side as DOM operations.
              </p>
              <div className={styles.securityTags}>
                <span>No innerHTML</span>
                <span>DOM operations only</span>
                <span>No stored scripts</span>
              </div>
            </div>

            <div className={styles.securityCard}>
              <div className={styles.securityIcon}>👤</div>
              <h3>Role-Based Access Control</h3>
              <p>
                Granular permissions for every user. Super Admin, Tenant Admin,
                Support Admin — complete control.
              </p>
              <div className={styles.securityTags}>
                <span>RBAC</span>
                <span>Audit logs</span>
                <span>Team workflows</span>
              </div>
            </div>

            <div className={styles.securityCard}>
              <div className={styles.securityIcon}>🔑</div>
              <h3>Secure API Management</h3>
              <p>
                Primary + Secondary authentication. API key rotation. Secure
                storage.
              </p>
              <div className={styles.securityTags}>
                <span>Bearer Token</span>
                <span>API Keys</span>
                <span>OAuth2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SCALABILITY SECTION
          ============================================================ */}

      <section
        id="scalability"
        className={styles.scalabilitySection}
        ref={(el) => (sectionRefs.current.scalability = el)}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>📈 Scalability</span>
            <h2 className={styles.sectionTitle}>
              Scale Without <span className={styles.gradientText}>Limits</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Start free. Grow to millions. No architecture changes required.
            </p>
          </div>

          <div className={styles.scalabilityGrid}>
            <div className={styles.scalabilityCard}>
              <div className={styles.scalabilityIcon}>🚀</div>
              <h3>From Startup to Enterprise</h3>
              <p>
                Start free with full features. Scale to millions of users
                without changing your architecture.
              </p>
              <div className={styles.scalabilityMetrics}>
                <span>0 → 1M+ users</span>
                <span>1 → 1000+ agents</span>
                <span>Single → Multi-tenant</span>
              </div>
            </div>

            <div className={styles.scalabilityCard}>
              <div className={styles.scalabilityIcon}>💰</div>
              <h3>No Per-Query AI Costs</h3>
              <p>
                Inbuilt RAG engine means you don't pay per query to OpenAI,
                DeepSeek, or others.
              </p>
              <div className={styles.scalabilityMetrics}>
                <span>Fixed monthly cost</span>
                <span>Unlimited queries</span>
                <span>No token surprises</span>
              </div>
            </div>

            <div className={styles.scalabilityCard}>
              <div className={styles.scalabilityIcon}>🏢</div>
              <h3>Multi-Tenant Ready</h3>
              <p>
                Manage multiple clients, brands, or products from a single
                dashboard. One-click to enable multi-tenant mode.
              </p>
              <div className={styles.scalabilityMetrics}>
                <span>Agency management</span>
                <span>Product line separation</span>
                <span>White-label ready</span>
              </div>
            </div>
          </div>

          {/* Growth Path */}
          <div className={styles.growthPathSection}>
            <h3>Your Growth Path with Sageion</h3>
            <div className={styles.growthPathSteps}>
              <div className={styles.growthStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <strong>Start Free</strong>
                  <span>Full features, 2 agents, unlimited websites</span>
                </div>
              </div>
              <div className={styles.growthArrow}>→</div>
              <div className={styles.growthStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <strong>Grow Your Team</strong>
                  <span>Add agents, enable multi-tenant, scale up</span>
                </div>
              </div>
              <div className={styles.growthArrow}>→</div>
              <div className={styles.growthStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <strong>Enterprise</strong>
                  <span>Custom deployments, dedicated support, SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMPARISON SECTION
          ============================================================ */}

      <section
        id="comparison"
        className={styles.comparisonSection}
        ref={(el) => (sectionRefs.current.comparison = el)}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>⚔️ Comparison</span>
            <h2 className={styles.sectionTitle}>
              Sageion vs. <span className={styles.gradientText}>The Rest</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              See for yourself why Sageion is the clear choice.
            </p>
          </div>

          <div className={styles.comparisonTable}>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCellHeader}>Aspect</div>
              <div className={styles.comparisonCellHeader}>Traditional</div>
              <div className={styles.comparisonCellHeader}>Sageion</div>
            </div>
            <div className={styles.comparisonRow}>
              <span>Implementation Time</span>
              <span className={styles.negative}>6-12 months</span>
              <span className={styles.positive}>2-4 weeks</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Team Required</span>
              <span className={styles.negative}>8-15 people</span>
              <span className={styles.positive}>1-2 people</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>System Changes Needed</span>
              <span className={styles.negative}>Major rewrites</span>
              <span className={styles.positive}>None</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Update Deployment Time</span>
              <span className={styles.negative}>Days to weeks</span>
              <span className={styles.positive}>Instant</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>API Integration Complexity</span>
              <span className={styles.negative}>Extensive coding</span>
              <span className={styles.positive}>Visual chaining</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Cost</span>
              <span className={styles.negative}>$100K+ upfront</span>
              <span className={styles.positive}>$0 to start</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>AI Query Costs</span>
              <span className={styles.negative}>Pay per query</span>
              <span className={styles.positive}>Fixed cost</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Async Webhook Support</span>
              <span className={styles.negative}>30s timeout</span>
              <span className={styles.positive}>No timeout</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Dynamic UI Generation</span>
              <span className={styles.negative}>Hardcoded screens</span>
              <span className={styles.positive}>Template-based</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Multi-Tenant</span>
              <span className={styles.negative}>Custom build</span>
              <span className={styles.positive}>One-click</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Security (No XSS)</span>
              <span className={styles.negative}>Varies</span>
              <span className={styles.positive}>Built-in</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS SECTION
          ============================================================ */}

      <section
        id="testimonials"
        className={styles.testimonialsSection}
        ref={(el) => (sectionRefs.current.testimonials = el)}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>⭐ Testimonials</span>
            <h2 className={styles.sectionTitle}>
              Trusted by <span className={styles.gradientText}>5,000+</span>{" "}
              Teams
            </h2>
            <p className={styles.sectionSubtitle}>
              Real results from real customers.
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialRating}>★★★★★</div>
              <p className={styles.testimonialText}>
                "Cut our response time by 60% and completely eliminated the need
                for a dedicated support team."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>SC</div>
                <div>
                  <div className={styles.testimonialName}>Sarah Chen</div>
                  <div className={styles.testimonialTitle}>CTO, GrowthAI</div>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialRating}>★★★★★</div>
              <p className={styles.testimonialText}>
                "Best decision we made this year. Our customers can't tell it's
                AI, and our team is finally free."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>MR</div>
                <div>
                  <div className={styles.testimonialName}>Marcus Rodriguez</div>
                  <div className={styles.testimonialTitle}>Support Lead</div>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialRating}>★★★★★</div>
              <p className={styles.testimonialText}>
                "We built 15 complex workflows in 1 week with just 1 person.
                Sageion saved us months of development."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>JP</div>
                <div>
                  <div className={styles.testimonialName}>Jamie Park</div>
                  <div className={styles.testimonialTitle}>Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA SECTION
          ============================================================ */}

      <section className={styles.finalCTASection}>
        <div className={styles.sectionContainer}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaBadge}>🚀 Ready to Transform?</span>
              <h2 className={styles.ctaTitle}>
                Start Building Your{" "}
                <span className={styles.gradientText}>Future</span> Today
              </h2>
              <p className={styles.ctaSubtitle}>
                Join 5,000+ teams that have already cut their implementation
                time by 90%. Get started with our free forever tier.
              </p>
              <div className={styles.ctaButtons}>
                <button className={styles.ctaPrimaryBtn}>
                  Start Free Trial <FaArrowRight className={styles.ctaArrow} />
                </button>
                <button className={styles.ctaSecondaryBtn}>
                  Schedule Demo →
                </button>
              </div>
              <div className={styles.ctaTrust}>
                <span>🔒 No credit card required</span>
                <span>⚡ 3-minute setup</span>
                <span>🌟 Free forever tier</span>
                <span>🏆 5,000+ teams trust us</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminFeatures;
