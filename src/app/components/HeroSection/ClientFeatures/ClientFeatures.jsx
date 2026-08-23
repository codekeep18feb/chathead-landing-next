import React, { useState } from "react";
import styles from "./ClientFeatures.module.css";

const ClientFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "live-chat",
      icon: "💬",
      title: "Enterprise Live Chat",
      subtitle: "Real-Time Communication at Scale",
      description: "Deliver instant, reliable messaging with enterprise-grade delivery guarantees. Every message matters.",
      stats: [
        { label: "Delivery Speed", value: "<100ms" },
        { label: "Uptime", value: "99.99%" },
        { label: "Message Guarantee", value: "100%" }
      ],
      highlights: [
        {
          icon: "✅",
          title: "Instant Delivery Reports",
          description: "Users see exactly when their message is sent, delivered, and read. No more wondering if your message went through."
        },
        {
          icon: "🟢",
          title: "Live Status Indicators",
          description: "Real-time online/offline indicators for agents. Users know when help is immediately available."
        },
        {
          icon: "✏️",
          title: "Typing Indicators",
          description: "See when someone is typing a response. Creates a natural, human-like conversation flow."
        },
        {
          icon: "👁️",
          title: "Read Receipts",
          description: "Know exactly when your message was read. Complete transparency in every conversation."
        },
        {
          icon: "🔄",
          title: "Message Editing & Reply Threads",
          description: "Edit sent messages and reply to specific messages within a conversation. Context is everything."
        }
      ],
      visual: "chat-interface"
    },
    {
      id: "ai-bot",
      icon: "🧠",
      title: "GenAI-Powered Bot",
      subtitle: "Intelligence That Understands Your Business",
      description: "An AI bot that doesn't just answer—it understands context, detects intent, and learns from every interaction.",
      stats: [
        { label: "Response Time", value: "<2s" },
        { label: "Intent Accuracy", value: "94%" },
        { label: "Self-Service Rate", value: "76%" }
      ],
      highlights: [
        {
          icon: "📚",
          title: "Multi-Source Knowledge",
          description: "Answer from multiple data sources simultaneously—PDFs, documents, reinforcement learning, and structured data. One unified intelligence."
        },
        {
          icon: "🎯",
          title: "Advanced Intent Detection",
          description: "Automatically detect user intent and execute the right workflow. From simple questions to complex business processes."
        },
        {
          icon: "📋",
          title: "Smart Form Generation",
          description: "AI generates dynamic input forms based on context. Users see exactly what information is needed, when it's needed."
        },
        {
          icon: "🧩",
          title: "Context-Aware Responses",
          description: "The bot remembers conversation context. No need to repeat yourself—it understands the full picture."
        },
        {
          icon: "🔄",
          title: "Human Handover",
          description: "Seamless transition from AI to human agent. Users get the best of both worlds—speed when needed, human touch when it matters."
        }
      ],
      visual: "ai-bot"
    },
    {
      id: "faq-smart",
      icon: "🌳",
      title: "Smart FAQ & Lead Generation",
      subtitle: "Turn Every Question Into a Lead",
      description: "Interactive FAQ trees with custom form nodes that capture leads and qualify prospects automatically.",
      stats: [
        { label: "Lead Capture Rate", value: "34%" },
        { label: "FAQ Resolution", value: "82%" },
        { label: "Breadcrumb Navigation", value: "100%" }
      ],
      highlights: [
        {
          icon: "🏠",
          title: "Interactive FAQ Tree",
          description: "A beautiful, intuitive navigation tree that guides users to the right answer. Like a conversation, not a search engine."
        },
        {
          icon: "📝",
          title: "Custom Form Nodes",
          description: "Every FAQ answer can include dynamic forms that capture leads. Turn questions into qualified opportunities."
        },
        {
          icon: "🧭",
          title: "Breadcrumb Navigation",
          description: "Users always know where they are and how to go back. Zero confusion, complete confidence."
        },
        {
          icon: "🎯",
          title: "Lead Generation Workflows",
          description: "Capture lead data through forms embedded in the conversation. Qualify prospects without leaving the chat."
        },
        {
          icon: "📊",
          title: "Analytics-Ready Data",
          description: "Every form submission is structured and ready for your CRM. Close the loop between conversation and conversion."
        }
      ],
      visual: "faq-tree"
    },
    {
      id: "rich-media",
      icon: "📎",
      title: "Rich Media & Collaboration",
      subtitle: "Share, Collaborate, Communicate",
      description: "Seamless file sharing with previews, drag-and-drop uploads, and real-time collaboration capabilities.",
      stats: [
        { label: "File Types Supported", value: "20+" },
        { label: "Upload Speed", value: "<1s" },
        { label: "Preview Support", value: "100%" }
      ],
      highlights: [
        {
          icon: "📄",
          title: "Multi-Format Support",
          description: "Share images, PDFs, documents, audio files, and more. Everything your users need to share, supported."
        },
        {
          icon: "🖱️",
          title: "Drag & Drop Upload",
          description: "Simply drag files into the chat. No complicated upload flows—just natural, intuitive sharing."
        },
        {
          icon: "👁️",
          title: "Live Preview",
          description: "See images and documents right in the chat. No need to download—view instantly."
        },
        {
          icon: "📂",
          title: "Smart File Organization",
          description: "Files are organized and accessible. Users can find shared files instantly, even from previous conversations."
        },
        {
          icon: "🔗",
          title: "Shareable Links",
          description: "Convert files into shareable links. Share with anyone, even outside the conversation."
        }
      ],
      visual: "multimedia"
    },
    {
      id: "security-workflows",
      icon: "🔐",
      title: "Security & Intelligent Workflows",
      subtitle: "Enterprise-Grade Security, Consumer-Grade Experience",
      description: "Multi-layer authentication, secure sessions, and intelligent workflows that adapt to user needs.",
      stats: [
        { label: "Authentication Types", value: "3" },
        { label: "Workflow Automation", value: "100%" },
        { label: "Session Security", value: "AES-256" }
      ],
      highlights: [
        {
          icon: "🔑",
          title: "Primary + Secondary Auth",
          description: "Multiple authentication layers with OTP support. Secure access without compromising user experience."
        },
        {
          icon: "⚡",
          title: "Quick Intent Links",
          description: "One-click triggers for specific workflows. Users get to the right action instantly, every time."
        },
        {
          icon: "🔄",
          title: "Conditional Workflow Chains",
          description: "Complex business processes broken into intuitive steps. Users flow through the experience naturally."
        },
        {
          icon: "🤝",
          title: "Human Handover",
          description: "Intelligent escalation to human agents. Users get help from the right person at the right time."
        },
        {
          icon: "🛡️",
          title: "Secure Session Management",
          description: "Enterprise-grade encryption and session handling. User data is always protected."
        }
      ],
      visual: "workflows"
    }
  ];

  return (
    <section className={styles.clientFeatures}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>✨ Client Experience</span>
          <h2 className={styles.title}>
            The <span className={styles.highlight}>MagicChat</span> Experience
          </h2>
          <p className={styles.subtitle}>
            Enterprise-grade capabilities delivered with consumer-grade simplicity.
            Every feature is designed to delight, not just function.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className={styles.tabsContainer}>
          {features.map((feature, index) => (
            <button
              key={feature.id}
              className={`${styles.tabButton} ${activeFeature === index ? styles.active : ''}`}
              onClick={() => setActiveFeature(index)}
            >
              <span className={styles.tabIcon}>{feature.icon}</span>
              <span className={styles.tabLabel}>{feature.title}</span>
            </button>
          ))}
        </div>

        {/* Active Feature Display */}
        <div className={styles.featureShowcase}>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`${styles.featureContent} ${activeFeature === index ? styles.active : ''}`}
            >
              {/* Left Column - Content */}
              <div className={styles.featureInfo}>
                <div className={styles.featureHeader}>
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  <div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureSubtitle}>{feature.subtitle}</p>
                  </div>
                </div>
                <p className={styles.featureDescription}>{feature.description}</p>

                {/* Stats */}
                <div className={styles.statsGrid}>
                  {feature.stats.map((stat, i) => (
                    <div key={i} className={styles.statItem}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className={styles.highlightsList}>
                  {feature.highlights.map((highlight, i) => (
                    <div key={i} className={styles.highlightItem}>
                      <span className={styles.highlightIcon}>{highlight.icon}</span>
                      <div>
                        <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                        <p className={styles.highlightDesc}>{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Visual Preview */}
              <div className={styles.featureVisual}>
                <div className={styles.visualCard}>
                  {feature.visual === "chat-interface" && (
                    <div className={styles.chatPreview}>
                      <div className={styles.chatHeader}>
                        <span>🟢 Support Agent</span>
                        <span className={styles.chatStatus}>Online</span>
                      </div>
                      <div className={styles.chatMessages}>
                        <div className={styles.messageReceived}>
                          <div className={styles.bubble}>Hey! How can I help you today?</div>
                          <span className={styles.timestamp}>10:30 AM</span>
                        </div>
                        <div className={styles.messageSent}>
                          <div className={styles.bubble}>I need help with my order #12345</div>
                          <span className={styles.timestamp}>10:31 AM</span>
                          <span className={styles.deliveryStatus}>✓✓ Read</span>
                        </div>
                        <div className={styles.typingIndicator}>
                          <span>Agent is typing</span>
                          <span className={styles.typingDots}>...</span>
                        </div>
                      </div>
                      <div className={styles.chatInput}>
                        <span>📎</span>
                        <span>Type a message...</span>
                        <span>➤</span>
                      </div>
                    </div>
                  )}

                  {feature.visual === "ai-bot" && (
                    <div className={styles.aiPreview}>
                      <div className={styles.aiHeader}>
                        <span>🧠 AI Assistant</span>
                        <span className={styles.aiStatus}>Powered by GPT</span>
                      </div>
                      <div className={styles.aiMessages}>
                        <div className={styles.aiMessage}>
                          <span className={styles.aiAvatar}>🤖</span>
                          <div>
                            <div className={styles.aiBubble}>
                              I found the answer in your product documentation. Here's what you need...
                            </div>
                            <span className={styles.sourceBadge}>📄 Source: Product Guide v2.3</span>
                          </div>
                        </div>
                        <div className={styles.intentDetected}>
                          <span>🎯 Intent Detected: Refund Request</span>
                          <button className={styles.actionBtn}>Start Refund Workflow →</button>
                        </div>
                        <div className={styles.formPreview}>
                          <span>📋 Smart Form Generated</span>
                          <div className={styles.formFields}>
                            <span>📝 Order ID: ______</span>
                            <span>📧 Email: ______</span>
                            <span>📅 Date: ______</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.visual === "faq-tree" && (
                    <div className={styles.faqPreview}>
                      <div className={styles.faqHeader}>
                        <span>🌳 FAQ & Lead Generation</span>
                        <span className={styles.faqNav}>Home - Support - Returns</span>
                      </div>
                      <div className={styles.faqContent}>
                        <div className={styles.faqNode}>
                          <span>📁 Product Information</span>
                          <span className={styles.faqCount}>12</span>
                        </div>
                        <div className={styles.faqNodeActive}>
                          <span>📦 Shipping & Returns</span>
                          <span className={styles.faqCount}>8</span>
                        </div>
                        <div className={styles.faqNode}>
                          <span>💳 Payment & Billing</span>
                          <span className={styles.faqCount}>6</span>
                        </div>
                        <div className={styles.leadForm}>
                          <span>📝 Need More Help?</span>
                          <div className={styles.formPreview}>
                            <span>Name: ______</span>
                            <span>Email: ______</span>
                            <span>Phone: ______</span>
                            <button className={styles.submitBtn}>Submit →</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.visual === "multimedia" && (
                    <div className={styles.mediaPreview}>
                      <div className={styles.mediaHeader}>
                        <span>📎 File Sharing</span>
                        <span className={styles.mediaActions}>Drag & Drop or Click</span>
                      </div>
                      <div className={styles.mediaGrid}>
                        <div className={styles.mediaItem}>
                          <span>📄</span>
                          <span>Annual_Report_2024.pdf</span>
                          <span className={styles.fileSize}>2.4 MB</span>
                        </div>
                        <div className={styles.mediaItem}>
                          <span>🖼️</span>
                          <span>product_showcase.png</span>
                          <span className={styles.fileSize}>1.2 MB</span>
                        </div>
                        <div className={styles.mediaItem}>
                          <span>📹</span>
                          <span>tutorial_video.mp4</span>
                          <span className={styles.fileSize}>8.7 MB</span>
                        </div>
                        <div className={styles.mediaDropZone}>
                          <span>📂 Drop files here</span>
                          <span className={styles.uploadHint}>or click to browse</span>
                        </div>
                      </div>
                      <div className={styles.previewContainer}>
                        <span>👁️ Preview</span>
                        <div className={styles.previewContent}>
                          <span>📄 document.pdf • 2 pages</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.visual === "workflows" && (
                    <div className={styles.workflowPreview}>
                      <div className={styles.workflowHeader}>
                        <span>⚡ Intelligent Workflows</span>
                        <span className={styles.workflowStatus}>Active</span>
                      </div>
                      <div className={styles.workflowContent}>
                        <div className={styles.quickIntents}>
                          <span>🎯 Quick Intent Links</span>
                          <div className={styles.intentButtons}>
                            <button>📦 Track Order</button>
                            <button>💳 Payment Help</button>
                            <button>🔄 Start Return</button>
                            <button>📞 Call Support</button>
                          </div>
                        </div>
                        <div className={styles.workflowSteps}>
                          <div className={styles.stepCompleted}>
                            <span>✅</span>
                            <span>Intent Detected</span>
                          </div>
                          <div className={styles.stepActive}>
                            <span>🔄</span>
                            <span>Processing Request</span>
                          </div>
                          <div className={styles.stepWaiting}>
                            <span>⏳</span>
                            <span>Human Handover (if needed)</span>
                          </div>
                        </div>
                        <div className={styles.authBadge}>
                          <span>🔐 Secure Session</span>
                          <span className={styles.authStatus}>Primary + OTP Verified</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Feature Tags */}
                <div className={styles.featureTags}>
                  {feature.highlights.map((h, i) => (
                    <span key={i} className={styles.tag}>
                      {h.icon} {h.title.split(" ").slice(0, 2).join(" ")}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Edge Banner */}
        <div className={styles.edgeBanner}>
          <div className={styles.edgeContent}>
            <span className={styles.edgeIcon}>🏆</span>
            <div>
              <h4>Built Different. Built Better.</h4>
              <p>
                While others offer features, MagicChat delivers experiences. 
                Every interaction is designed to delight, every workflow is built to convert.
              </p>
            </div>
            <div className={styles.competitorComparison}>
              <span>vs Sierra.ai</span>
              <span>vs Intercom</span>
              <span>vs Zendesk</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>Ready to transform your customer experience?</h3>
            <p>Join thousands of businesses using MagicChat to delight their customers and grow their business.</p>
            <button className={styles.ctaButton}>
              Start Your Free Trial →
              <span className={styles.ctaNote}>No credit card required</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeatures;