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
            You keep your backend. We give you the intelligent orchestration layer.
            Turn existing APIs (Petpooja, Posist, Rista) into deterministic AI agents
            with auto-generated UI screens, async webhooks, and human-in-the-loop approvals.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>0</span>
              <span className={styles.heroStatLabel}>Data Stored by Default</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>100%</span>
              <span className={styles.heroStatLabel}>Deterministic API Execution</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>Opt-In</span>
              <span className={styles.heroStatLabel}>Tenant to App Attachment</span>
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
              <h3>Async & Human-in-the-Loop</h3>
              <p>Pause workflows for manual approvals. Handle long-running background tasks with async webhooks and update the UI instantly.</p>
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
                  <h3>Bulk Intent Generation</h3>
                  <p>Point at your APIs and chains, and we generate intents in bulk.</p>
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
                      <li>Select your backend APIs and configured chains</li>
                      <li>Platform auto-generates intent mapping logic</li>
                      <li>Extracts required fields: {`{ guests, date, table }`}</li>
                      <li>Generates the initial AI routing logic</li>
                      <li>You curate and deploy instantly</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Skip weeks of prompt engineering</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 2: Curated Text Templates */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("curated-text")}>
                <div className={styles.featureIcon} style={{ background: "#667EEA20", color: "#667EEA" }}>
                  <FaLayerGroup />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Curated Text Templates</h3>
                  <p>Control the exact output shape with Jinja templates.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "curated-text" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "curated-text" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>The Right Output Type</h4>
                    <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '15px' }}>
                      Not every API response should become a form. For any API, you decide the output shape:
                    </p>
                    <ul>
                      <li><strong>UI screen:</strong> A form, table, or approval card generated from the response</li>
                      <li><strong>Curated text:</strong> A Jinja template you control, always rendering the same shape</li>
                      <li><strong>Both:</strong> A text answer followed by an interactive UI</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Zero hallucination. Total brand control.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 3: Opt-In Attachment Model */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("attachment-model")}>
                <div className={styles.featureIcon} style={{ background: "#F59E0B20", color: "#F59E0B" }}>
                  <FaLink />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Opt-In Attachment Model</h3>
                  <p>Sell tiered AI features to your franchises with one-click Attach/Detach. No credential leaks. No data duplication.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "attachment-model" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "attachment-model" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Enterprise Scalability & Upselling</h4>
                    <ul>
                      <li><strong>Create once, share intentionally:</strong> Build a default base app with tenant-level API configs, auth, and chains.</li>
                      <li><strong>Explicit scoping:</strong> Other apps must explicitly <em>attach</em> the resources they need — no silent inheritance.</li>
                      <li><strong>Fail-hard guards:</strong> Prevent a rogue app from hitting tenant-wide endpoints or using shared credentials.</li>
                      <li><strong>Clean detach:</strong> Remove access without breaking sibling apps that rely on the same resource.</li>
                      <li><strong>Feature toggling for upsells:</strong> Turn premium AI workflows on or off for specific franchise customers by attaching or detaching the config.</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Deliver high-business customization and upsell premium features safely.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 4: Connectors on Every Node */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("connectors")}>
                <div className={styles.featureIcon} style={{ background: "#EC489A20", color: "#EC489A" }}>
                  <FaProjectDiagram />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Connectors on Every Node</h3>
                  <p>Tag connectors onto any step. Sync or async.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "connectors" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "connectors" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Fire-and-Forget Architecture</h4>
                    <ul>
                      <li>Attach Slack, Google, WhatsApp, or custom webhooks</li>
                      <li>Support for manual, sync, and async nodes</li>
                      <li>Failures don't block the main AI conversation flow</li>
                      <li>SQS queue handles decoupling</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Never let a slow API break the UX.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 5: Visual API Chaining */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("api-chaining")}>
                <div className={styles.featureIcon} style={{ background: "#8B5CF620", color: "#8B5CF6" }}>
                  <FaCodeBranch />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Visual API Chaining</h3>
                  <p>Build multi-step workflows by just connecting dots.</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "api-chaining" ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedFeature === "api-chaining" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>No-Code Ops</h4>
                    <ul>
                      <li>Connect APIs visually on a canvas</li>
                      <li>Map outputs to inputs with type coercion</li>
                      <li>Handle 404s and 409s with fallback branches</li>
                      <li>Save customized UI screens at the end of any chain</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Replace 1000+ lines of code.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 6: Zero Data Storage */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader} onClick={() => toggleFeature("zero-data")}>
                <div className={styles.featureIcon} style={{ background: "#10B98120", color: "#10B981" }}>
                  <FaShieldAlt />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Zero Data Storage</h3>
                  <p>No request/response saved by default.</p>
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
                      <li>We do not save API requests or responses</li>
                      <li>History is explicitly opt-in per API</li>
                      <li>Session-only persistence</li>
                      <li>Enterprise-grade data safety</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Safe to sell to high-stake franchise clients.</span>
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

          {/* Deterministic vs LLM Table */}
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
      {/* <section id="testimonials" className={styles.testimonialsSection} ref={(el) => (sectionRefs.current.testimonials = el)}>
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
      </section> */}

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