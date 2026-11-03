"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./WhyWeAreSpecial.module.css";
import { isEnabled } from "../config/features"; // Using the flag system

// Icons
import {
  FaRocket,
  FaShieldAlt,
  FaPlug,
  FaBrain,
  FaUsers,
  FaNetworkWired,
  FaPaintBrush,
  FaBolt,
  FaLock,
  FaServer,
  FaRobot,
  FaArrowRight,
  FaCheckCircle,
  FaPlayCircle,
  FaCog,
  FaProjectDiagram,
  FaWaveSquare,
  FaChevronDown,
  FaChevronUp,
  FaComments,
} from "react-icons/fa";

const WhyWeAreSpecial = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState({});
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const sectionRefs = useRef({});
  const observerRef = useRef(null);

  // Intersection Observer for animations
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
      { threshold: 0.15 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observerRef.current.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const toggleFeature = (id) => {
    setExpandedFeature(expandedFeature === id ? null : id);
  };

  const openVideoModal = (videoId) => {
    setActiveVideo(videoId);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setActiveVideo(null);
  };

  // Video data for placeholders
  const videos = {
    "api-chaining": {
      title: "API Chaining Demo",
      description: "Complex API workflows built visually in minutes",
    },
    "form-generation": {
      title: "Generative Forms Demo",
      description: "AI-generated forms with pre-filled data",
    },
    "webhook-async": {
      title: "Async Webhook Demo",
      description: "True async support with no 30-second timeout",
    },
    "admin-panel": {
      title: "Admin Panel Demo",
      description: "Complete control over your AI agents and workflows",
    }
  };

  const sections = [
    { id: "hero", label: "Overview" },
    { id: "problem", label: "The Problem" },
    { id: "solution", label: "The AI Layer" },
    { id: "key-features", label: "Key Features" },
    { id: "architecture", label: "Architecture" },
    { id: "workflows", label: "Restaurant Use Cases" },
    { id: "comparison", label: "Comparison" },
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Fixed Navigation */}
      <nav className={styles.stickyNav}>
        <div className={styles.navContainer}>
          <div className={styles.navLogo}>
            <span className={styles.logoIcon}>✨</span>
            <span className={styles.logoText}>Sageion</span>
          </div>
          <div className={styles.navLinks}>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`${styles.navLink} ${activeSection === section.id ? styles.navLinkActive : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(section.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(section.id);
                  }
                }}
              >
                {section.label}
              </a>
            ))}
          </div>
          <button className={styles.navCta}>Start Free Trial</button>
        </div>
      </nav>

      {/* ============================================================
      HERO SECTION
      ============================================================ */}
      <section id="hero" className={styles.heroSection} ref={(el) => (sectionRefs.current.hero = el)}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOrb1}></div>
          <div className={styles.heroOrb2}></div>
          <div className={styles.heroOrb3}></div>
          <div className={styles.heroGrid}></div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.pulseDot}></span>
            <span>🍽️ The AI Agent Layer for Restaurant CRMs</span>
          </div>

          <h1 className={styles.heroTitle}>
            Transform Your Restaurant CRM
            <span className={styles.heroHighlight}> Into an AI Workforce</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Turn existing backend APIs (Petpooja, Posist, Rista) into intelligent, multi-step AI agents. 
            Generate dynamic UI screens, inject human-in-the-loop approvals, and process async tasks — 
            <strong> without changing your core systems</strong>.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>0</span>
              <span className={styles.heroStatLabel}>Code Changes Needed</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>100%</span>
              <span className={styles.heroStatLabel}>API-First Architecture</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>Async</span>
              <span className={styles.heroStatLabel}>Long-Running Workflows</span>
            </div>
          </div>

          <div className={styles.heroButtons}>
            <button className={styles.heroPrimaryBtn}>
              Start Free Trial <FaArrowRight className={styles.btnArrow} />
            </button>
            <button className={styles.heroSecondaryBtn}>
              <FaPlayCircle className={styles.btnPlay} /> Watch Demo
            </button>
          </div>

          <div className={styles.heroTrust}>
            <span>🔒 No credit card required</span>
            <span>⚡ 3-minute setup</span>
            <span>🌟 You own your users & auth</span>
          </div>
        </div>

        {/* Hero Visual - Placeholder */}
        <div className={styles.heroVisual}>
          <div className={styles.heroVisualPlaceholder}>
            <div className={styles.visualPlaceholderContent}>
              <span className={styles.placeholderIcon}>💻</span>
              <span className={styles.placeholderText}>AI Agent Dashboard</span>
              <span className={styles.placeholderSubtext}>Add your restaurant AI visual here</span>
              <div className={styles.placeholderDimensions}>1920 x 1080</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
      PROBLEM SECTION
      ============================================================ */}
      <section id="problem" className={styles.problemSection} ref={(el) => (sectionRefs.current.problem = el)}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>😓 The Reality</span>
            <h2 className={styles.sectionTitle}>
              Why Restaurant AI Projects <span className={styles.gradientText}>Fail</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              You already have the data. Why is building an AI layer on top of it so hard?
            </p>
          </div>

          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>⏰</div>
              <h3>Months of Backend Dev</h3>
              <p>Building custom integrations, RAG pipelines, and new UIs takes months. By the time it launches, your menu or workflow has changed.</p>
            </div>

            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>👥</div>
              <h3>Forcing Humans to Chat</h3>
              <p>Traditional chatbots force managers to type everything. Restaurant workflows are complex and require quick selections, not typing.</p>
            </div>

            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🔧</div>
              <h3>LLM Hallucinations</h3>
              <p>Letting an LLM generate prices or order statuses causes disasters. You need a single source of truth for business data.</p>
            </div>

            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🔄</div>
              <h3>30-Second Timeouts</h3>
              <p>If an inventory update or report generation takes 2 minutes, standard chatbots just fail. You need true async support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
      SOLUTION SECTION
      ============================================================ */}
      <section id="solution" className={styles.solutionSection} ref={(el) => (sectionRefs.current.solution = el)}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>✨ The AI Layer</span>
            <h2 className={styles.sectionTitle}>
              This Is How <span className={styles.gradientText}>AI Agents Should Work</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              You keep your backend. We give you the intelligent orchestration layer.
            </p>
          </div>

          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon} style={{ background: "#4BCF9E20", color: "#4BCF9E" }}>
                <FaNetworkWired />
              </div>
              <h3>API-First AI Agents</h3>
              <p>Connect your existing APIs. The AI agent maps intents to your backend workflows, handling auth and data transformation.</p>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon} style={{ background: "#667EEA20", color: "#667EEA" }}>
                <FaPaintBrush />
              </div>
              <h3>Auto-UI Generation</h3>
              <p>Don't force users to chat. The AI generates custom UX screens (forms, tables, buttons) directly from your API responses.</p>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon} style={{ background: "#F59E0B20", color: "#F59E0B" }}>
                <FaWaveSquare />
              </div>
              <h3>Async & Human-in-the-Loop</h3>
              <p>Pause workflows for manual approvals. Handle long-running background tasks with async webhooks and update the UI instantly.</p>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon} style={{ background: "#EC489A20", color: "#EC489A" }}>
                <FaShieldAlt />
              </div>
              <h3>Deterministic Responses</h3>
              <p>Tolerate LLM for intent matching, but rely on your APIs for the truth. Never hallucinate a price or order status again.</p>
            </div>
          </div>

          {/* Video Proof - Placeholder */}
          <div className={styles.videoProofSection}>
            <div className={styles.videoProofHeader}>
              <span className={styles.videoProofBadge}>🎬 See It In Action</span>
              <h3>Watch Sageion Transform a Restaurant CRM</h3>
            </div>
            <div className={styles.videoProofGrid}>
              <div className={styles.videoProofCard} onClick={() => openVideoModal("api-chaining")}>
                <div className={styles.videoThumbnail}>
                  <div className={styles.videoThumbnailPlaceholder}>
                    <FaPlayCircle className={styles.videoPlayIcon} />
                    <span>API Chaining Demo</span>
                  </div>
                  <div className={styles.videoDuration}>3:15</div>
                </div>
                <div className={styles.videoProofInfo}>
                  <h4>Complex API Chaining</h4>
                  <p>Build multi-step booking flows visually in minutes</p>
                </div>
              </div>

              <div className={styles.videoProofCard} onClick={() => openVideoModal("webhook-async")}>
                <div className={styles.videoThumbnail}>
                  <div className={styles.videoThumbnailPlaceholder}>
                    <FaPlayCircle className={styles.videoPlayIcon} />
                    <span>Async Webhook Demo</span>
                  </div>
                  <div className={styles.videoDuration}>2:45</div>
                </div>
                <div className={styles.videoProofInfo}>
                  <h4>Human-in-the-Loop</h4>
                  <p>Pause for approvals, wait for webhooks, no timeouts</p>
                </div>
              </div>

              <div className={styles.videoProofCard} onClick={() => openVideoModal("form-generation")}>
                <div className={styles.videoThumbnail}>
                  <div className={styles.videoThumbnailPlaceholder}>
                    <FaPlayCircle className={styles.videoPlayIcon} />
                    <span>Generative Forms Demo</span>
                  </div>
                  <div className={styles.videoDuration}>2:30</div>
                </div>
                <div className={styles.videoProofInfo}>
                  <h4>Auto-UI Generation</h4>
                  <p>Pre-filled, intelligent forms from your backend data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
      KEY FEATURES SECTION
      ============================================================ */}
      <section id="key-features" className={styles.featuresSection} ref={(el) => (sectionRefs.current["key-features"] = el)}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>⚡ Core Capabilities</span>
            <h2 className={styles.sectionTitle}>
              Built for <span className={styles.gradientText}>AI Orchestration</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to turn APIs into intelligent, autonomous workflows.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {/* Feature 1: Generative AI Forms */}
            <div className={`${styles.featureCard} ${styles.featureExpanded}`}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("gen-forms")}>
                <div className={styles.featureIcon} style={{ background: "#4BCF9E20", color: "#4BCF9E" }}>
                  <FaBrain />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Generative AI Forms</h3>
                  <p>Intelligent UX screens that pre-fill what users already told you</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "gen-forms" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "gen-forms" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>How It Works</h4>
                    <ul>
                      <li>User says: "Book a table for 4 for tonight"</li>
                      <li>AI detects BOOKING intent</li>
                      <li>Extracts: {`{ guests: 4, date: "today" }`}</li>
                      <li>Generates custom UI form with pre-filled values</li>
                      <li>User only adds missing info (e.g., table preference)</li>
                      <li>Complete data → Trigger your existing booking API</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: 70% faster workflow completion</span>
                    </div>
                  </div>

                  <div className={styles.featureVisual}>
                    <div className={styles.featureScreenshot}>
                      <div className={styles.screenshotPlaceholder}>
                        <span className={styles.placeholderIcon}>📋</span>
                        <span>Form Generation Demo</span>
                        <span className={styles.placeholderSubtext}>Placeholder: Screenshot / GIF here</span>
                      </div>
                    </div>
                    <button className={styles.watchDemoBtn} onClick={() => openVideoModal("form-generation")}>
                      <FaPlayCircle /> Watch Demo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 2: API Chaining */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("api-chaining")}>
                <div className={styles.featureIcon} style={{ background: "#667EEA20", color: "#667EEA" }}>
                  <FaProjectDiagram />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Visual API Chaining</h3>
                  <p>Complex workflows built without writing a single line of code</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "api-chaining" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "api-chaining" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Chain Everything</h4>
                    <ul>
                      <li>Conditional logic: If/Else/Else If</li>
                      <li>Multiple API calls in sequence</li>
                      <li>Error handling and retry logic</li>
                      <li>Data transformation between steps</li>
                      <li>Parallel execution support</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Replace 1000+ lines of code</span>
                    </div>
                  </div>

                  <div className={styles.featureVisual}>
                    <div className={styles.featureScreenshot}>
                      <div className={styles.screenshotPlaceholder}>
                        <span className={styles.placeholderIcon}>🔗</span>
                        <span>API Chaining Workflow</span>
                        <span className={styles.placeholderSubtext}>Placeholder: Screenshot / Diagram here</span>
                      </div>
                    </div>
                    <button className={styles.watchDemoBtn} onClick={() => openVideoModal("api-chaining")}>
                      <FaPlayCircle /> Watch Demo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 3: True Async Webhooks */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("async-webhooks")}>
                <div className={styles.featureIcon} style={{ background: "#EC489A20", color: "#EC489A" }}>
                  <FaWaveSquare />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Async & Human-in-the-Loop</h3>
                  <p>No 30-second timeout — pause for manual approvals</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "async-webhooks" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "async-webhooks" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Process Anything</h4>
                    <ul>
                      <li>No hard timeout (30s, 60s, etc.)</li>
                      <li>WebSocket callback for results</li>
                      <li>Pause workflow for manual manager approval</li>
                      <li>Process can take seconds, minutes, hours, or days</li>
                      <li>Automatic retry and error handling</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Handle any process, no matter how long</span>
                    </div>
                  </div>

                  <div className={styles.featureVisual}>
                    <div className={styles.featureScreenshot}>
                      <div className={styles.screenshotPlaceholder}>
                        <span className={styles.placeholderIcon}>🔄</span>
                        <span>Async Webhook Flow</span>
                        <span className={styles.placeholderSubtext}>Placeholder: Screenshot / Diagram here</span>
                      </div>
                    </div>
                    <button className={styles.watchDemoBtn} onClick={() => openVideoModal("webhook-async")}>
                      <FaPlayCircle /> Watch Demo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 4: Dynamic Screen Generation */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("screen-gen")}>
                <div className={styles.featureIcon} style={{ background: "#8B5CF620", color: "#8B5CF6" }}>
                  <FaPaintBrush />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Dynamic Screen Generation</h3>
                  <p>Multiple screens from a single API response</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "screen-gen" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "screen-gen" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Screen Capabilities</h4>
                    <ul>
                      <li>Template-based rendering</li>
                      <li>Style transformations (bold, highlight, buttons)</li>
                      <li>Structural transformations (tables, cards, lists)</li>
                      <li>Media transformations (images, PDFs)</li>
                      <li>Multiple screens from array data</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: No hardcoded UI — adapts to your data</span>
                    </div>
                  </div>

                  <div className={styles.featureVisual}>
                    <div className={styles.featureScreenshot}>
                      <div className={styles.screenshotPlaceholder}>
                        <span className={styles.placeholderIcon}>🎨</span>
                        <span>Dynamic Screen Demo</span>
                        <span className={styles.placeholderSubtext}>Placeholder: Screenshot / Demo here</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 5: Multi-Admin (Reframed) */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("multi-admin")}>
                <div className={styles.featureIcon} style={{ background: "#0EA5E920", color: "#0EA5E9" }}>
                  <FaUsers />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Multi-Admin & RBAC</h3>
                  <p>Enterprise role management for franchise hierarchies</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "multi-admin" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "multi-admin" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Admin Capabilities</h4>
                    <ul>
                      <li>Granular role-based access control (RBAC)</li>
                      <li>Franchise owner vs. Store manager views</li>
                      <li>Approve high-value actions (refunds, large orders)</li>
                      <li>Audit trails for all AI agent actions</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Enterprise-grade governance</span>
                    </div>
                  </div>

                  <div className={styles.featureVisual}>
                    <div className={styles.featureScreenshot}>
                      <div className={styles.screenshotPlaceholder}>
                        <span className={styles.placeholderIcon}>👥</span>
                        <span>Admin Panel Interface</span>
                        <span className={styles.placeholderSubtext}>Placeholder: Screenshot / Demo here</span>
                      </div>
                    </div>
                    <button className={styles.watchDemoBtn} onClick={() => openVideoModal("admin-panel")}>
                      <FaPlayCircle /> Watch Demo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 6: Security & Auth */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("security")}>
                <div className={styles.featureIcon} style={{ background: "#10B98120", color: "#10B981" }}>
                  <FaLock />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Enterprise-Grade Security</h3>
                  <p>No XSS attacks, no stored scripts, complete safety</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "security" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "security" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Security Features</h4>
                    <ul>
                      <li>No HTML/JS stored in database</li>
                      <li>Template + transformations applied client-side</li>
                      <li>Primary + Secondary authentication</li>
                      <li>Role-Based Access Control (RBAC)</li>
                      <li>Secure API key management</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Safe, secure, compliant</span>
                    </div>
                  </div>

                  <div className={styles.featureVisual}>
                    <div className={styles.featureScreenshot}>
                      <div className={styles.screenshotPlaceholder}>
                        <span className={styles.placeholderIcon}>🔐</span>
                        <span>Security Architecture</span>
                        <span className={styles.placeholderSubtext}>Placeholder: Security diagram here</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* --- LEGACY FEATURES (Hidden under flags) --- */}

            {/* RAG Engine (Hidden) */}
            {isEnabled("faqQna") && (
              <div className={styles.featureCard}>
                <div className={styles.featureHeader} onClick={() => toggleFeature("rag")}>
                  <div className={styles.featureIcon} style={{ background: "#F59E0B20", color: "#F59E0B" }}>
                    <FaRobot />
                  </div>
                  <div className={styles.featureTitle}>
                    <h3>Built-in RAG Engine</h3>
                    <p>Context-aware AI without paying per-query to OpenAI</p>
                  </div>
                  <div className={styles.featureToggle}>
                    {expandedFeature === "rag" ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                {expandedFeature === "rag" && (
                  <div className={styles.featureContent}>
                    <div className={styles.featureDescription}>
                      <h4>RAG Capabilities</h4>
                      <ul>
                        <li>Ingest websites, PDFs, documents</li>
                        <li>Semantic search across your knowledge base</li>
                        <li>Context-aware responses</li>
                        <li>No token costs — fixed pricing</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Live Chat (Hidden) */}
            {isEnabled("liveChat") && (
              <div className={styles.featureCard}>
                <div className={styles.featureHeader} onClick={() => toggleFeature("live-chat")}>
                  <div className={styles.featureIcon} style={{ background: "#0EA5E920", color: "#0EA5E9" }}>
                    <FaComments />
                  </div>
                  <div className={styles.featureTitle}>
                    <h3>Live Chat</h3>
                    <p>Real-time agent collaboration</p>
                  </div>
                  <div className={styles.featureToggle}>
                    {expandedFeature === "live-chat" ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                {expandedFeature === "live-chat" && (
                  <div className={styles.featureContent}>
                    <div className={styles.featureDescription}>
                      <h4>Chat Capabilities</h4>
                      <ul>
                        <li>Multi-admin support with role-based access</li>
                        <li>Unified inbox across all websites</li>
                        <li>Smart agent routing and handover</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ============================================================
      ARCHITECTURE SECTION
      ============================================================ */}
      <section id="architecture" className={styles.architectureSection} ref={(el) => (sectionRefs.current.architecture = el)}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>🏗️ Architecture</span>
            <h2 className={styles.sectionTitle}>
              Built Different. <span className={styles.gradientText}>Works Better.</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              The three-layer architecture that makes Sageion infinitely more powerful.
            </p>
          </div>

          <div className={styles.architectureLayers}>
            <div className={styles.architectureLayer}>
              <div className={styles.layerNumber}>1</div>
              <div className={styles.layerContent}>
                <div className={styles.layerHeader}>
                  <div className={styles.layerIcon} style={{ background: "#4BCF9E20", color: "#4BCF9E" }}>
                    <FaPaintBrush />
                  </div>
                  <h3>Presentation Layer</h3>
                </div>
                <p>Dynamic UI generation from API responses. No hardcoded screens.</p>
                <ul className={styles.layerDetails}>
                  <li><FaCheckCircle /> Templated responses with Nunjucks</li>
                  <li><FaCheckCircle /> Style transformations (bold, highlight, buttons)</li>
                  <li><FaCheckCircle /> Structural transformations (tables, cards, lists)</li>
                  <li><FaCheckCircle /> Media transformations (images, PDFs)</li>
                  <li><FaCheckCircle /> Multiple screens from single API response</li>
                </ul>
              </div>
            </div>

            <div className={styles.architectureLayer}>
              <div className={styles.layerNumber}>2</div>
              <div className={styles.layerContent}>
                <div className={styles.layerHeader}>
                  <div className={styles.layerIcon} style={{ background: "#667EEA20", color: "#667EEA" }}>
                    <FaNetworkWired />
                  </div>
                  <h3>Orchestration Layer</h3>
                </div>
                <p>Intent → API/Chain → Response screens with dynamic forms.</p>
                <ul className={styles.layerDetails}>
                  <li><FaCheckCircle /> Generative AI form creation with pre-filled values</li>
                  <li><FaCheckCircle /> Complex API chaining with conditional logic</li>
                  <li><FaCheckCircle /> True async webhook support (no 30s timeout)</li>
                  <li><FaCheckCircle /> Human-in-the-loop manual pauses</li>
                  <li><FaCheckCircle /> Session memory across all actions</li>
                </ul>
              </div>
            </div>

            <div className={styles.architectureLayer}>
              <div className={styles.layerNumber}>3</div>
              <div className={styles.layerContent}>
                <div className={styles.layerHeader}>
                  <div className={styles.layerIcon} style={{ background: "#F59E0B20", color: "#F59E0B" }}>
                    <FaPlug />
                  </div>
                  <h3>Integration Layer</h3>
                </div>
                <p>Connect to anything without changing your systems.</p>
                <ul className={styles.layerDetails}>
                  <li><FaCheckCircle /> Primary + Secondary authentication (Bearer, API Key, Basic)</li>
                  <li><FaCheckCircle /> Protected and public API support</li>
                  <li><FaCheckCircle /> Webhook callbacks for long-running processes</li>
                  <li><FaCheckCircle /> No database access required</li>
                  <li><FaCheckCircle /> Multi-tenant ready from day one</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
      WORKFLOWS SECTION
      ============================================================ */}
      <section id="workflows" className={styles.workflowsSection} ref={(el) => (sectionRefs.current.workflows = el)}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>🔄 Use Cases</span>
            <h2 className={styles.sectionTitle}>
              Built for <span className={styles.gradientText}>Restaurant Operations</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              From table bookings to complex franchise workflows.
            </p>
          </div>

          <div className={styles.workflowsGrid}>
            <div className={styles.workflowCard}>
              <div className={styles.workflowIcon}>🍽️</div>
              <h3>Table Reservations</h3>
              <p>Multi-step API chaining checking availability, holding the table, and confirming payment.</p>
              <div className={styles.workflowTags}>
                <span>Availability API</span>
                <span>Payment API</span>
                <span>Confirmation</span>
              </div>
            </div>

                        <div className={styles.workflowCard}>
              <div className={styles.workflowIcon}>📦</div>
              <h3>Order Status & Tracking</h3>
              <p>Users ask "Where is my order?". The AI hits your POS API and generates a custom UI timeline of the order status.</p>
              <div className={styles.workflowTags}>
                <span>POS API</span>
                <span>Auto-UI</span>
                <span>Async Check</span>
              </div>
            </div>

            <div className={styles.workflowCard}>
              <div className={styles.workflowIcon}>💸</div>
              <h3>Refund Approvals</h3>
              <p>AI detects a refund intent, extracts the amount, and pauses the workflow for a Manager (Human-in-the-loop) to approve before hitting the payment gateway.</p>
              <div className={styles.workflowTags}>
                <span>RBAC</span>
                <span>Manual Pause</span>
                <span>Payment API</span>
              </div>
            </div>

            <div className={styles.workflowCard}>
              <div className={styles.workflowIcon}>🏢</div>
              <h3>Franchise Management</h3>
              <p>Franchise owners ask for daily sales. The AI agent chains multiple store APIs, aggregates the data, and renders a dynamic table.</p>
              <div className={styles.workflowTags}>
                <span>Multi-Tenant</span>
                <span>Data Aggregation</span>
                <span>Table Generation</span>
              </div>
            </div>

            <div className={styles.workflowCard}>
              <div className={styles.workflowIcon}>📊</div>
              <h3>Inventory Updates</h3>
              <p>Staff can update stock via natural language. The AI maps this to your backend inventory API without needing a new UI.</p>
              <div className={styles.workflowTags}>
                <span>Intent Detection</span>
                <span>Inventory API</span>
                <span>Custom Forms</span>
              </div>
            </div>

            <div className={styles.workflowCard}>
              <div className={styles.workflowIcon}>👨‍🍳</div>
              <h3>Staff Scheduling</h3>
              <p>Managers ask to swap shifts. The AI generates a form with available staff, and upon submission, triggers the HR API.</p>
              <div className={styles.workflowTags}>
                <span>HR API</span>
                <span>Generative Forms</span>
                <span>Conflict Check</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
      COMPARISON SECTION
      ============================================================ */}
      <section id="comparison" className={styles.comparisonSection} ref={(el) => (sectionRefs.current.comparison = el)}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>⚔️ Comparison</span>
            <h2 className={styles.sectionTitle}>
              Sageion vs. <span className={styles.gradientText}>The Rest</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              See for yourself why Sageion is the clear choice for API-first AI Agents.
            </p>
          </div>

          <div className={styles.comparisonTable}>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCellHeader}>Aspect</div>
              <div className={styles.comparisonCellHeader}>Traditional Chatbots</div>
              <div className={styles.comparisonCellHeader}>Sageion AI Agents</div>
            </div>
            <div className={styles.comparisonRow}>
              <span>Primary Interface</span>
              <span className={styles.negative}>Text-based chat</span>
              <span className={styles.positive}>Auto-generated UX screens</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Data Source</span>
              <span className={styles.negative}>LLM hallucinations</span>
              <span className={styles.positive}>Your existing backend APIs</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Workflow Complexity</span>
              <span className={styles.negative}>Single-step Q&A</span>
              <span className={styles.positive}>Multi-step API chaining</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Human-in-the-Loop</span>
              <span className={styles.negative}>None</span>
              <span className={styles.positive}>Manual pauses & approvals</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Long-Running Tasks</span>
              <span className={styles.negative}>30s timeout</span>
              <span className={styles.positive}>True Async Webhooks</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Role Management</span>
              <span className={styles.negative}>Basic access control</span>
              <span className={styles.positive}>Granular RBAC for franchises</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Core System Changes</span>
              <span className={styles.negative}>Major rewrites</span>
              <span className={styles.positive}>Zero changes</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Implementation Time</span>
              <span className={styles.negative}>6-12 months</span>
              <span className={styles.positive}>Days to weeks</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
      TESTIMONIALS SECTION
      ============================================================ */}
      <section id="testimonials" className={styles.testimonialsSection} ref={(el) => (sectionRefs.current.testimonials = el)}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>⭐ Testimonials</span>
            <h2 className={styles.sectionTitle}>
              Trusted by <span className={styles.gradientText}>Restaurant Tech Teams</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Real results from teams building on top of existing CRMs.
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialRating}>★★★★★</div>
              <p className={styles.testimonialText}>
                "We plugged Sageion into our Petpooja backend and had a multi-step refund approval workflow running in 4 days. No new database needed."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>SC</div>
                <div>
                  <div className={styles.testimonialName}>Sarah Chen</div>
                  <div className={styles.testimonialTitle}>CTO, FranchiseOS</div>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialRating}>★★★★★</div>
              <p className={styles.testimonialText}>
                "The async webhook support is a game changer. Our inventory sync takes 2 minutes, and the AI just waits and renders the result. No timeouts."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>MR</div>
                <div>
                  <div className={styles.testimonialName}>Marcus Rodriguez</div>
                  <div className={styles.testimonialTitle}>Head of Product, Rista</div>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialRating}>★★★★★</div>
              <p className={styles.testimonialText}>
                "We stopped forcing our managers to type in chat boxes. The AI generates custom forms and tables from our existing APIs. It's beautiful."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>JP</div>
                <div>
                  <div className={styles.testimonialName}>Jamie Park</div>
                  <div className={styles.testimonialTitle}>Founder, Posist Partner</div>
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
              <span className={styles.ctaBadge}>🚀 Ready to Build Your AI Layer?</span>
              <h2 className={styles.ctaTitle}>
                Turn Your CRM into an <span className={styles.gradientText}>AI Agent</span> Today
              </h2>
              <p className={styles.ctaSubtitle}>
                Join the restaurant tech teams building intelligent, multi-step workflows on top of existing APIs. 
                Start with our free forever tier.
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
                <span>🏆 You own your users & auth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className={styles.videoModal} onClick={closeVideoModal}>
          <div className={styles.videoModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.videoModalClose} onClick={closeVideoModal}>✕</button>
            <div className={styles.videoModalBody}>
              <div className={styles.videoPlaceholder}>
                <div className={styles.videoPlaceholderContent}>
                  <FaPlayCircle className={styles.videoPlaceholderIcon} />
                  <span>Video Placeholder: {activeVideo}</span>
                  <span className={styles.placeholderSubtext}>Replace with actual video embed</span>
                </div>
              </div>
              <div className={styles.videoModalInfo}>
                <h3>{activeVideo ? videos[activeVideo]?.title : "Demo Video"}</h3>
                <p>{activeVideo ? videos[activeVideo]?.description : "Video description"}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyWeAreSpecial;