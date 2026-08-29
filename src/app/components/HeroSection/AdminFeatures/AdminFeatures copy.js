"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./AdminFeatures.module.css";

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
  FaComments,
} from "react-icons/fa";

const AdminFeatures = () => {
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
      { threshold: 0.15 },
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

  const sections = [
    { id: "hero", label: "Overview" },
    { id: "problem", label: "The Problem" },
    { id: "solution", label: "Our Solution" },
    { id: "key-features", label: "Key Features" },
    { id: "time-savings", label: "Time Savings" },
    { id: "architecture", label: "Architecture" },
    { id: "workflows", label: "Workflows" },
    { id: "integrations", label: "Integrations" },
    { id: "security", label: "Security" },
    { id: "scalability", label: "Scalability" },
    { id: "comparison", label: "Comparison" },
    { id: "testimonials", label: "Testimonials" },
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* ============================================================
      KEY FEATURES SECTION
      ============================================================ */}
      <section
        id="key-features"
        className={styles.featuresSection}
        ref={(el) => (sectionRefs.current["key-features"] = el)}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>⚡ Key Features</span>
            <h2 className={styles.sectionTitle}>
              Everything You Need to{" "}
              <span className={styles.gradientText}>Succeed</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive features that make Sageion the most complete
              platform for business automation.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {/* Feature 1: Generative AI Forms */}
            <div className={`${styles.featureCard} ${styles.featureExpanded}`}>
              <div
                className={styles.featureHeader}
                onClick={() => toggleFeature("gen-forms")}
              >
                <div
                  className={styles.featureIcon}
                  style={{ background: "#4BCF9E20", color: "#4BCF9E" }}
                >
                  <FaBrain />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Generative AI Forms</h3>
                  <p>
                    Intelligent forms that pre-fill what users already told you
                  </p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "gen-forms" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </div>
              </div>

              {expandedFeature === "gen-forms" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>How It Works</h4>
                    <ul>
                      <li>User sends: "Book a room for 2 guests on Dec 25"</li>
                      <li>AI detects BOOKING intent</li>
                      <li>
                        Extracts: {`{ guests: 2, check_in: "2025-12-25" }`}
                      </li>
                      <li>Generates form with pre-filled values</li>
                      <li>User only adds missing info (guest_name, payment)</li>
                      <li>Complete data → Trigger API → Get results</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: 70% faster form completion</span>
                    </div>
                  </div>

                  <div className={styles.featureVisual}>
                    <div className={styles.featureScreenshot}>
                      <div className={styles.screenshotPlaceholder}>
                        <span className={styles.placeholderIcon}>📋</span>
                        <span>Form Generation Demo</span>
                        <span className={styles.placeholderSubtext}>
                          Placeholder: Screenshot / GIF here
                        </span>
                      </div>
                    </div>
                    <button
                      className={styles.watchDemoBtn}
                      onClick={() => openVideoModal("form-generation")}
                    >
                      <FaPlayCircle /> Watch Demo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 2: API Chaining */}
            <div className={styles.featureCard}>
              <div
                className={styles.featureHeader}
                onClick={() => toggleFeature("api-chaining")}
              >
                <div
                  className={styles.featureIcon}
                  style={{ background: "#667EEA20", color: "#667EEA" }}
                >
                  <FaProjectDiagram />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Visual API Chaining</h3>
                  <p>
                    Complex workflows built without writing a single line of
                    code
                  </p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "api-chaining" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
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
                        <span className={styles.placeholderSubtext}>
                          Placeholder: Screenshot / Diagram here
                        </span>
                      </div>
                    </div>
                    <button
                      className={styles.watchDemoBtn}
                      onClick={() => openVideoModal("api-chaining")}
                    >
                      <FaPlayCircle /> Watch Demo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 3: RAG Engine */}
            <div className={styles.featureCard}>
              <div
                className={styles.featureHeader}
                onClick={() => toggleFeature("rag")}
              >
                <div
                  className={styles.featureIcon}
                  style={{ background: "#F59E0B20", color: "#F59E0B" }}
                >
                  <FaRobot />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Built-in RAG Engine</h3>
                  <p>Context-aware AI without paying per-query to OpenAI</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "rag" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
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
                      <li>Perfect session memory</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Unlimited queries, fixed cost</span>
                    </div>
                  </div>

                  <div className={styles.featureVisual}>
                    <div className={styles.featureScreenshot}>
                      <div className={styles.screenshotPlaceholder}>
                        <span className={styles.placeholderIcon}>🧠</span>
                        <span>RAG Engine Demo</span>
                        <span className={styles.placeholderSubtext}>
                          Placeholder: Screenshot / Animation here
                        </span>
                      </div>
                    </div>
                    <button
                      className={styles.watchDemoBtn}
                      onClick={() => openVideoModal("rag-demo")}
                    >
                      <FaPlayCircle /> Watch Demo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 4: True Async Webhooks */}
            <div className={styles.featureCard}>
              <div
                className={styles.featureHeader}
                onClick={() => toggleFeature("async-webhooks")}
              >
                <div
                  className={styles.featureIcon}
                  style={{ background: "#EC489A20", color: "#EC489A" }}
                >
                  <FaWaveSquare />
                </div>
                <div className={styles.featureTitle}>
                  <h3>True Async Webhooks</h3>
                  <p>No 30-second timeout — wait as long as needed</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "async-webhooks" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </div>
              </div>

              {expandedFeature === "async-webhooks" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Process Anything</h4>
                    <ul>
                      <li>No hard timeout (30s, 60s, etc.)</li>
                      <li>WebSocket callback for results</li>
                      <li>Dynamic UI updates on completion</li>
                      <li>Process can take seconds, minutes, hours, or days</li>
                      <li>Automatic retry and error handling</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>
                        ✅ Benefit: Handle any process, no matter how long
                      </span>
                    </div>
                  </div>

                  <div className={styles.featureVisual}>
                    <div className={styles.featureScreenshot}>
                      <div className={styles.screenshotPlaceholder}>
                        <span className={styles.placeholderIcon}>🔄</span>
                        <span>Async Webhook Flow</span>
                        <span className={styles.placeholderSubtext}>
                          Placeholder: Screenshot / Diagram here
                        </span>
                      </div>
                    </div>
                    <button
                      className={styles.watchDemoBtn}
                      onClick={() => openVideoModal("webhook-async")}
                    >
                      <FaPlayCircle /> Watch Demo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 5: Dynamic Screen Generation */}
            <div className={styles.featureCard}>
              <div
                className={styles.featureHeader}
                onClick={() => toggleFeature("screen-gen")}
              >
                <div
                  className={styles.featureIcon}
                  style={{ background: "#8B5CF620", color: "#8B5CF6" }}
                >
                  <FaPaintBrush />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Dynamic Screen Generation</h3>
                  <p>Multiple screens from a single API response</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "screen-gen" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </div>
              </div>

              {expandedFeature === "screen-gen" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Screen Capabilities</h4>
                    <ul>
                      <li>Template-based rendering (Nunjucks)</li>
                      <li>Style transformations (bold, highlight, buttons)</li>
                      <li>Structural transformations (tables, cards, lists)</li>
                      <li>Media transformations (images, PDFs)</li>
                      <li>Multiple screens from array data</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>
                        ✅ Benefit: No hardcoded UI — adapts to your data
                      </span>
                    </div>
                  </div>

                  <div className={styles.featureVisual}>
                    <div className={styles.featureScreenshot}>
                      <div className={styles.screenshotPlaceholder}>
                        <span className={styles.placeholderIcon}>🎨</span>
                        <span>Dynamic Screen Demo</span>
                        <span className={styles.placeholderSubtext}>
                          Placeholder: Screenshot / Demo here
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 6: Live Chat + Multi-Admin */}
            <div className={styles.featureCard}>
              <div
                className={styles.featureHeader}
                onClick={() => toggleFeature("live-chat")}
              >
                <div
                  className={styles.featureIcon}
                  style={{ background: "#0EA5E920", color: "#0EA5E9" }}
                >
                  <FaComments />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Live Chat + Multi-Admin</h3>
                  <p>Real-time agent collaboration with RBAC</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "live-chat" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
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
                      <li>Real-time typing indicators</li>
                      <li>File sharing and rich media</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Enterprise-grade customer support</span>
                    </div>
                  </div>

                  <div className={styles.featureVisual}>
                    <div className={styles.featureScreenshot}>
                      <div className={styles.screenshotPlaceholder}>
                        <span className={styles.placeholderIcon}>💬</span>
                        <span>Live Chat Interface</span>
                        <span className={styles.placeholderSubtext}>
                          Placeholder: Screenshot / Demo here
                        </span>
                      </div>
                    </div>
                    <button
                      className={styles.watchDemoBtn}
                      onClick={() => openVideoModal("live-chat")}
                    >
                      <FaPlayCircle /> Watch Demo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 7: Admin Panel */}
            <div className={styles.featureCard}>
              <div
                className={styles.featureHeader}
                onClick={() => toggleFeature("admin-panel")}
              >
                <div
                  className={styles.featureIcon}
                  style={{ background: "#F9731620", color: "#F97316" }}
                >
                  <FaCog />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Comprehensive Admin Panel</h3>
                  <p>Complete control without touching code</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "admin-panel" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </div>
              </div>

              {expandedFeature === "admin-panel" && (
                <div className={styles.featureContent}>
                  <div className={styles.featureDescription}>
                    <h4>Admin Capabilities</h4>
                    <ul>
                      <li>Visual workflow builder</li>
                      <li>Intent configuration</li>
                      <li>API integration setup</li>
                      <li>UI customization</li>
                      <li>Analytics and monitoring</li>
                    </ul>
                    <div className={styles.featureBenefit}>
                      <span>✅ Benefit: Business users take control</span>
                    </div>
                  </div>

                  <div className={styles.featureVisual}>
                    <div className={styles.featureScreenshot}>
                      <div className={styles.screenshotPlaceholder}>
                        <span className={styles.placeholderIcon}>📊</span>
                        <span>Admin Panel Interface</span>
                        <span className={styles.placeholderSubtext}>
                          Placeholder: Screenshot / Demo here
                        </span>
                      </div>
                    </div>
                    <button
                      className={styles.watchDemoBtn}
                      onClick={() => openVideoModal("admin-panel")}
                    >
                      <FaPlayCircle /> Watch Demo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Feature 8: Security & Auth */}
            <div className={styles.featureCard}>
              <div
                className={styles.featureHeader}
                onClick={() => toggleFeature("security")}
              >
                <div
                  className={styles.featureIcon}
                  style={{ background: "#10B98120", color: "#10B981" }}
                >
                  <FaLock />
                </div>
                <div className={styles.featureTitle}>
                  <h3>Enterprise-Grade Security</h3>
                  <p>No XSS attacks, no stored scripts, complete safety</p>
                </div>
                <div className={styles.featureToggle}>
                  {expandedFeature === "security" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
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
                        <span className={styles.placeholderSubtext}>
                          Placeholder: Security diagram here
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
 
    </div>
  );
};

export default AdminFeatures;
