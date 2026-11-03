"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./WhyWeAreSpecial.module.css";

// Icons
import {
  FaRocket,
  FaShieldAlt,
  FaPlug,
  FaBrain,
  FaNetworkWired,
  FaPaintBrush,
  FaLock,
  FaRobot,
  FaArrowRight,
  FaCheckCircle,
  FaPlayCircle,
  FaCog,
  FaProjectDiagram,
  FaWaveSquare,
  FaChevronDown,
  FaChevronUp,
  FaLayerGroup,
  FaCodeBranch,
  FaMagic,
  FaServer,
  FaLink,
  FaKey,
  FaClock,
  FaRandom,
  FaExclamationTriangle,
  FaTasks,
  FaBolt,
  FaUsers,
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
      description: "True pause-and-resume — durable state, no timeouts",
    },
    "admin-panel": {
      title: "Admin Panel Demo",
      description: "Complete control over your AI agents and workflows",
    },
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
            You keep your backend. We give you the intelligent orchestration layer.
            Turn existing APIs (Petpooja, Posist, Rista) into deterministic AI agents
            with auto-generated UI screens, encrypted tokens, durable async workflows,
            and human-in-the-loop approvals — designed for 70,000-restaurant scale.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>0</span>
              <span className={styles.heroStatLabel}>Data Stored by Default</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>AES-256</span>
              <span className={styles.heroStatLabel}>Token Encryption at Rest</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>Opt-In</span>
              <span className={styles.heroStatLabel}>Tenant → App Attachment</span>
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
            <span>🔒 You own your users & auth</span>
            <span>⚡ 3-minute setup</span>
            <span>🌟 No LLM token costs</span>
          </div>
        </div>

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
              Why Most Restaurant AI Projects <span className={styles.gradientText}>Fail</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              You already have the data. Why is building an AI layer on top of it so hard?
            </p>
          </div>

          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>⏰</div>
              <h3>Months of Backend Dev</h3>
              <p>Building custom integrations, RAG pipelines, and new UIs takes months. By the time it launches, your menus or workflows have changed.</p>
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
              <p>Connect your existing CRMs. The AI agent maps intents to your backend workflows, handling auth and data transformation.</p>
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
              <h3>Durable Async Workflows</h3>
              <p>Pause a workflow, walk away, come back tomorrow. Mid-flight state is stored in DynamoDB with a TTL — the request ends, the workflow doesn't.</p>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon} style={{ background: "#EC489A20", color: "#EC489A" }}>
                <FaShieldAlt />
              </div>
              <h3>Zero Data Storage</h3>
              <p>No API request or response is stored by default. History is enabled per-API and only persists during a session. Explicit opt-in only.</p>
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
                  <h4>Durable Pause & Resume</h4>
                  <p>Pause for approvals, store state, resume via webhook</p>
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
              Every card below is implemented in the runtime — not aspirational.
              Expand any card to see exactly how it's engineered.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            
            {/* FEATURE 1 — HYBRID RSA + AES TOKEN ENCRYPTION */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("token-encryption")}>
                <div className={styles.featureIcon} style={{ background: "#10B98120", color: "#10B981" }}>
                  <FaKey />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Encrypted Tokens, Never Plaintext</h3>
                  <p>Hybrid RSA-OAEP + AES-256-GCM. We only ever see ciphertext.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "token-encryption" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "token-encryption" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>The Flow</h4>
                    <ul>
                      <li>Your server generates a fresh RSA-2048 keypair on demand.</li>
                      <li>You hand us the public key once. The private half never leaves Secrets Manager.</li>
                      <li>Your login server encrypts the JWT with our public key using AES-256-GCM.</li>
                      <li>We decrypt with the private key inside the runtime — the plaintext never persists.</li>
                      <li>Plaintext JWTs are <strong>rejected outright</strong> — the runtime refuses to accept an unencrypted token.</li>
                      <li>Key rotation demotes the old key with a <strong>7-day grace window</strong> so live sessions don't break.</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: A CISO reading your architecture sees enterprise-grade crypto, not a shared API key.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FEATURE 2 — DURABLE PAUSE & RESUME */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("durable-async")}>
                <div className={styles.featureIcon} style={{ background: "#EC489A20", color: "#EC489A" }}>
                  <FaClock />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Durable Pause & Resume</h3>
                  <p>Pause a workflow, walk away, resume tomorrow.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "durable-async" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "durable-async" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>What "Async" Actually Means Here</h4>
                    <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}>
                      Not "the HTTP request stays open longer." The request <em>ends</em>. The workflow state is stored in DynamoDB with a TTL. When the external system calls back, the workflow resumes exactly where it stopped.
                    </p>
                    <ul>
                      <li>The <code>PendingWebhookCalls</code> row carries the full conversation state: API config, substitution fields, token body, response data, node path, original request.</li>
                      <li>Every pause carries an <code>X-Correlation-ID</code> header the external system echoes back.</li>
                      <li>Resume works through any depth — including further pauses inside the resumed branch.</li>
                      <li>Default TTL 600 seconds, configurable per API config.</li>
                      <li>Works identically for leadgen form pauses and chain-node pauses.</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Refunds paused for manager approval at 11pm resume at 9am — no state loss, no polling.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FEATURE 3 — PARALLEL SIDE EFFECTS */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("parallel-actions")}>
                <div className={styles.featureIcon} style={{ background: "#8B5CF620", color: "#8B5CF6" }}>
                  <FaBolt />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Parallel Side Effects</h3>
                  <p>Fire Slack, WhatsApp, Calendar — without blocking the flow.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "parallel-actions" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "parallel-actions" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Side Effects That Never Block</h4>
                    <ul>
                      <li>Attach any connector to any chain node or leadgen form.</li>
                      <li>Fires to a connector queue (SQS) in parallel with the main flow.</li>
                      <li>The main flow returns immediately — a slow Slack or Google API cannot delay a table booking.</li>
                      <li>Failures are logged to a DLQ; the main flow is unaffected.</li>
                      <li>Each trigger carries the accumulated context (including <code>response_data</code>) so the connector renders the right message.</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: One booking node fires 4 side effects. The customer sees confirmation in 300ms.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FEATURE 4 — OPT-IN ATTACHMENT */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("attachment-model")}>
                <div className={styles.featureIcon} style={{ background: "#F59E0B20", color: "#F59E0B" }}>
                  <FaLink />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Opt-In Attachment Model</h3>
                  <p>Detach an app without collateral damage.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "attachment-model" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "attachment-model" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Tenant → App, With Real Safety</h4>
                    <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}>
                      The attachment is the <em>pointer</em>, not the resource. You can detach one app's access while every other app keeps working. The resource survives. Only the app that gave up access is affected.
                    </p>
                    <ul>
                      <li>Tenant admin publishes a shared resource (API config, chain, auth server, OAuth grant).</li>
                      <li>App explicitly attaches it — nothing auto-inherits.</li>
                      <li>Detach is a single click. Every other app continues untouched.</li>
                      <li>The resource survives detach — it's just a pointer that's gone.</li>
                      <li>Delete of the resource is <strong>blocked</strong> while any app is still attached. Fail-hard, no override for delete.</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: 70,000 restaurants share 1 tenant library. One store leaving doesn't break the other 69,999.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FEATURE 5 — FAIL-HARD VALIDATION */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("fail-hard")}>
                <div className={styles.featureIcon} style={{ background: "#EF444420", color: "#EF4444" }}>
                  <FaExclamationTriangle />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Fail-Hard Validation</h3>
                  <p>Every write path validates before it persists.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "fail-hard" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "fail-hard" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>What We Validate Before Persisting</h4>
                    <div style={{ overflowX: 'auto', marginTop: '12px' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                        <thead>
                          <tr style={{ background: '#f8fafc', textAlign: 'left' }}>
                            <th style={{ padding: '10px', borderBottom: '2px solid #e2e8f0' }}>What we validate</th>
                            <th style={{ padding: '10px', borderBottom: '2px solid #e2e8f0' }}>Where</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>Field type + shape of every auth config</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>API Config save</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>Every chain node references a real API config</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>Chain save</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>Every reference is attached by the calling app</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>Chain + Form mapping save</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>Every validation rule has valid kind, when, require, at_least</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>Validation Rules save</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>Every UI component has valid type, options, min/max/step</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>UI Component save</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>Attachment segments reject the reserved separator</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>Every attach call</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '10px' }}>Tenant resources are locked while apps are attached</td>
                            <td style={{ padding: '10px' }}>Every delete/update</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.featureBenefit} style={{ marginTop: '16px' }}>
                      <span>✅ Benefit: A vendor evaluating you for 70,000 restaurants sees a real safety contract, not a promise.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FEATURE 6 — DETERMINISTIC RENDERING ENGINE */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("rendering-engine")}>
                <div className={styles.featureIcon} style={{ background: "#667EEA20", color: "#667EEA" }}>
                  <FaLayerGroup />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Deterministic Rendering Engine</h3>
                  <p>Jinja2 templates per status code. Not LLM-generated.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "rendering-engine" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "rendering-engine" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Three Output Modes — Per API, Per Status</h4>
                    <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}>
                      Every response is versioned, auditable, and deterministic. Not generated by the LLM. The runtime picks the template from the status code and renders it with the API's response data.
                    </p>
                    <ul>
                      <li><strong>Curated text answer</strong> — a Jinja2 template you control, always rendering the same shape. Perfect for "Your order ships tomorrow."</li>
                      <li><strong>Structured UI screen</strong> — a rendered form, table, or approval card. Built with transformation steps.</li>
                      <li><strong>Both</strong> — a text answer followed by an interactive screen.</li>
                      <li>Each output has its own <code>transformation_steps</code> and <code>actions</code> array.</li>
                      <li>Templates are stored per-status-code in <code>FinalApiUiUxResponse</code>, versioned, active/inactive toggles.</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: No hallucination on output shape. The template renders the API data, every time.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FEATURE 7 — SINGLE-API VS CHAIN INTENT MODES */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("intent-modes")}>
                <div className={styles.featureIcon} style={{ background: "#4BCF9E20", color: "#4BCF9E" }}>
                  <FaRandom />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Single-API or Chain Intents</h3>
                  <p>Two modes, one editor. Simple when you need it.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "intent-modes" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "intent-modes" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Two Modes</h4>
                    <ul>
                      <li><strong>Single API mode</strong> — the intent maps to exactly one API call. Ships in 30 seconds from the intent editor.</li>
                      <li><strong>Chain mode</strong> — the intent triggers a multi-step chain with branching and pause/resume.</li>
                      <li>Both modes use the same intent editor and the same response renderer.</li>
                      <li>The runtime doesn't distinguish between modes — it just walks the intent's target.</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Simple intents stay simple. Complex workflows don't pollute them.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FEATURE 8 — CROSS-FIELD VALIDATION RULES */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("cross-field-validation")}>
                <div className={styles.featureIcon} style={{ background: "#F9731620", color: "#F97316" }}>
                  <FaTasks />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Cross-Field Validation Rules</h3>
                  <p>Declare in the admin. Enforced everywhere.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "cross-field-validation" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "cross-field-validation" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Two Rule Kinds</h4>
                    <ul>
                      <li><strong>Conditional required</strong> — "If <code>has_pet === true</code>, then <code>pet_type</code> and <code>pet_weight</code> are required."</li>
                      <li><strong>Presence cardinality</strong> — "At least 2 of <code>email</code>, <code>phone</code>, <code>address</code> must be filled."</li>
                      <li>Rules are versioned with a <code>current_validation_version</code> counter.</li>
                      <li>The client SDK short-circuits if the version hasn't changed — no wasted roundtrips.</li>
                      <li>Declared once in the admin, enforced automatically in every form render and every submission.</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Restaurant CRM saves weeks of React validation code. Rules ship with the API config, not with the frontend.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FEATURE 9 — ZERO DATA STORAGE */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("zero-data")}>
                <div className={styles.featureIcon} style={{ background: "#10B98120", color: "#10B981" }}>
                  <FaShieldAlt />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Zero Data Storage</h3>
                  <p>No request or response saved by default.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "zero-data" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "zero-data" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Privacy-First Architecture</h4>
                    <ul>
                      <li>We do not save API requests or responses by default.</li>
                      <li>History is explicitly opt-in per API.</li>
                      <li>Session-only persistence.</li>
                      <li>Enterprise-grade data safety.</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Safe to sell to high-stake franchise clients.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FEATURE 10 (GAP 1) — SOLO TO TEAM SCALING */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("solo-team")}>
                <div className={styles.featureIcon} style={{ background: "#6366f120", color: "#6366f1" }}>
                  <FaUsers />
                </div>
                                <div className={styles.featureTitle}>
                  <h3>Solo → Team Scaling</h3>
                  <p>The same agent serves a solo owner and a 40-person franchise team.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "solo-team" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {expandedFeature === "solo-team" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>From One Phone to a Full Organization</h4>
                    <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}>
                      A single-franchise owner manages their store entirely from their phone.
                      A 40-location chain has managers, accountants, warehouse staff, and shift
                      supervisors all interacting with the same AI agent. No configuration
                      change between the two.
                    </p>
                    <ul>
                      <li><strong>Solo mode:</strong> one login, one dashboard, one AI agent that handles everything.</li>
                      <li><strong>Team mode:</strong> a one-toggle switch activates RBAC, per-role UI, and audit trails.</li>
                      <li>Role changes take effect instantly — no re-login required.</li>
                      <li>When a solo owner signs a second location, the same agent scales without touching the config.</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: One product serves 5,000 independent restaurateurs and 500 franchise chains without forking the codebase.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FEATURE 11 (GAP 4) — ENTERPRISE SCALE MATH */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("enterprise-math")}>
                <div className={styles.featureIcon} style={{ background: "#22c55e20", color: "#22c55e" }}>
                  <FaRocket />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Architected for 70,000 Restaurants</h3>
                  <p>The math behind the scale claim — not a marketing number.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "enterprise-math" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {expandedFeature === "enterprise-math" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>The Two-Tier Architecture at Scale</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '16px 0' }}>
                      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>60,000</div>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#475569', marginTop: '4px' }}>Base Users</div>
                        <div style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>Restaurant staff accessing pre-built agents. 1 attached app each. No customization.</div>
                      </div>
                      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>10,000</div>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#475569', marginTop: '4px' }}>Power Users</div>
                        <div style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>Franchise managers and developers. ~7 apps each. Build workflows, override tenant defaults.</div>
                      </div>
                    </div>
                    <ul>
                      <li>One tenant admin team maintains the shared library — 90% of the work lives here.</li>
                      <li>Each restaurant is one app on the tenant — inherits everything by attaching, without duplicating infrastructure.</li>
                      <li>Metering is per-execution, so the CRM bills each restaurant directly at whatever granularity they choose.</li>
                      <li>No additional infrastructure cost per restaurant — the shared library serves 70,000 apps from one config.</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: A CRM's CFO can answer "does this scale?" with arithmetic, not a sales call.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

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
              Deterministic by <span className={styles.gradientText}>Design.</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              The model decides what the user wants. The runtime decides what happens next.
            </p>
          </div>

          <div className={styles.architectureLayers}>
            <div className={styles.architectureLayer} style={{ width: '100%' }}>
              <div className={styles.layerContent}>
                <div className={styles.layerHeader}>
                  <div className={styles.layerIcon} style={{ background: "#4BCF9E20", color: "#4BCF9E" }}>
                    <FaServer />
                  </div>
                  <h3>LLM Tolerant Architecture</h3>
                </div>
                <p>We use LLMs where it's safe (intent matching) and deterministic APIs where it matters (data retrieval).</p>
                
                <div style={{ overflowX: 'auto', marginTop: '20px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                      <tr style={{ background: '#f8fafc', textAlign: 'left' }}>
                        <th style={{ padding: '12px', borderBottom: '2px solid #e2e8f0' }}>Concern</th>
                        <th style={{ padding: '12px', borderBottom: '2px solid #e2e8f0' }}>Deterministic</th>
                        <th style={{ padding: '12px', borderBottom: '2px solid #e2e8f0' }}>LLM-Allowed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>Intent classification</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>—</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', color: '#10b981' }}>✅</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>API URL / method / auth</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', color: '#10b981' }}>✅</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>❌</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>Response content</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', color: '#10b981' }}>✅</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>❌</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>Template rendering</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', color: '#10b981' }}>✅</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>❌</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px' }}>Data storage</td>
                        <td style={{ padding: '12px', color: '#10b981' }}>✅ (off by default)</td>
                        <td style={{ padding: '12px' }}>❌</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
              <span>Data Storage</span>
              <span className={styles.negative}>Stores everything</span>
              <span className={styles.positive}>Zero by default</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Attachment Model</span>
              <span className={styles.negative}>All-or-nothing</span>
              <span className={styles.positive}>Opt-in per app</span>
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
                "The durable pause-resume is a game changer. Our inventory sync takes 2 minutes, and the AI just waits and renders the result. No timeouts, no state loss."
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