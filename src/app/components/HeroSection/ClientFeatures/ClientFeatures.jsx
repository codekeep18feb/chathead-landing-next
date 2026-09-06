import React, { useState, useRef, useEffect } from "react";
import styles from "./ClientFeatures.module.css";

const ClientFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeDemoStep, setActiveDemoStep] = useState(0);
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);
  const demoIntervalRef = useRef(null);

  // Auto-play demo
  useEffect(() => {
    if (isDemoPlaying) {
      demoIntervalRef.current = setInterval(() => {
        setActiveDemoStep((prev) => {
          const currentFeature = features[activeFeature];
          const slides = currentFeature?.slides || [];
          const demoSteps = slides[activeSlide]?.demoSteps || [];
          return (prev + 1) % demoSteps.length;
        });
      }, 3000);
    } else {
      if (demoIntervalRef.current) {
        clearInterval(demoIntervalRef.current);
        demoIntervalRef.current = null;
      }
    }
    return () => {
      if (demoIntervalRef.current) {
        clearInterval(demoIntervalRef.current);
        demoIntervalRef.current = null;
      }
    };
  }, [isDemoPlaying, activeFeature, activeSlide]);

  // Feature data structure - Enterprise Edition
  const features = [
    {
      id: "live-chat",
      icon: "💬",
      title: "Enterprise Live Chat",
      subtitle: "Real-Time Communication with Enterprise-Grade Reliability",
      description: "Deliver instant, reliable messaging with complete transparency. Every message matters, every interaction counts.",
      slides: [
        {
          title: "Real-Time Messaging",
          content: "Instant message delivery with real-time status updates. Users always know the state of their message.",
          details: [
            "✓ Instant delivery confirmation with ✓✓ status",
            "✓ Read receipts with precise timestamps",
            "✓ Typing indicators for natural conversation flow",
            "✓ Online/Offline presence indicators",
            "✓ Message editing and deletion capabilities",
            "✓ Rich text formatting support"
          ],
          demoSteps: [
            { label: "Message Sent", status: "✓ Sent", progress: 25 },
            { label: "Delivered", status: "✓✓ Delivered", progress: 50 },
            { label: "Read", status: "✓✓ Read", progress: 75 },
            { label: "Reply Received", status: "✓✓ Replied", progress: 100 }
          ],
          visual: "delivery-flow"
        },
        {
          title: "Rich Media Sharing",
          content: "Share images, documents, PDFs, and more with drag-and-drop simplicity. Preview before sending.",
          details: [
            "✓ Drag & drop file upload with visual feedback",
            "✓ Image, PDF, document, and video support",
            "✓ Live preview before sending",
            "✓ Smart file organization and search",
            "✓ Shareable file links",
            "✓ Automatic file compression"
          ],
          demoSteps: [
            { label: "File Selected", status: "📎 Selected", progress: 25 },
            { label: "Uploading", status: "🔄 Uploading", progress: 50 },
            { label: "Preview Ready", status: "👁️ Preview", progress: 75 },
            { label: "Shared", status: "✅ Sent", progress: 100 }
          ],
          visual: "media-flow"
        },
        {
          title: "Interactive Message Actions",
          content: "Rich message interactions that make conversations more engaging and productive.",
          details: [
            "✓ Emoji reactions with real-time updates",
            "✓ Reply threading with context preservation",
            "✓ Quick response suggestions",
            "✓ Message pinning and bookmarking",
            "✓ Message search and filtering",
            "✓ Conversation history export"
          ],
          demoSteps: [
            { label: "Message Received", status: "📨 Received", progress: 25 },
            { label: "Reacted", status: "❤️ Liked", progress: 50 },
            { label: "Replied", status: "↩️ Replied", progress: 75 },
            { label: "Thread Complete", status: "✅ Done", progress: 100 }
          ],
          visual: "interaction-flow"
        }
      ]
    },
    {
      id: "response-screens",
      icon: "📱",
      title: "Response Screens with Actions",
      subtitle: "Get Things Done With Clicks, Not Messages",
      description: "Transform complex business processes into intuitive, action-driven screens. Users complete tasks through guided interactions, not endless message loops.",
      slides: [
        {
          title: "Action-Driven Response Screens",
          content: "Each response screen is a mini-application with its own actions, inputs, and navigation. Users click, select, and complete tasks without typing a single message.",
          details: [
            "✓ Screen-based interaction model",
            "✓ Rich action buttons and controls",
            "✓ Visual progress indicators",
            "✓ Contextual navigation",
            "✓ Zero back-and-forth messaging",
            "✓ Instant task completion"
          ],
          demoSteps: [
            { label: "Action Screen Loaded", status: "📱 Loaded", progress: 20 },
            { label: "Selection Made", status: "✅ Selected", progress: 45 },
            { label: "Input Provided", status: "📝 Provided", progress: 70 },
            { label: "Action Executed", status: "⚡ Complete", progress: 100 }
          ],
          visual: "response-screen"
        },
        {
          title: "Dynamic Screen Navigation",
          content: "Screens load based on user actions. Each new screen brings fresh options, keeping users in the flow of getting things done.",
          details: [
            "✓ Contextual screen transitions",
            "✓ Smart screen sequencing",
            "✓ Visual navigation breadcrumbs",
            "✓ Screen history tracking",
            "✓ Seamless back/forward navigation",
            "✓ State preservation between screens"
          ],
          demoSteps: [
            { label: "Current Screen", status: "📍 Step 1", progress: 33 },
            { label: "Next Screen", status: "📍 Step 2", progress: 66 },
            { label: "Final Screen", status: "📍 Step 3", progress: 100 }
          ],
          visual: "screen-navigation"
        },
        {
          title: "Action-First Interaction",
          content: "Every screen presents clear, actionable choices. Users accomplish their goals through clicks, not typing.",
          details: [
            "✓ Primary and secondary actions",
            "✓ Smart action suggestions",
            "✓ One-click task completion",
            "✓ Visual action feedback",
            "✓ Context-aware action options",
            "✓ Action history and undo"
          ],
          demoSteps: [
            { label: "Action Available", status: "🎯 Ready", progress: 30 },
            { label: "Action Selected", status: "⚡ Selected", progress: 60 },
            { label: "Action Executed", status: "✅ Done", progress: 100 }
          ],
          visual: "action-flow"
        }
      ]
    },
    {
      id: "generative-ui",
      icon: "🧠",
      title: "Context-Aware Generative UI",
      subtitle: "AI That Builds the Interface As You Go",
      description: "The AI dynamically generates the right interface for each step of your business process, using information already provided and requesting only what's still needed.",
      slides: [
        {
          title: "Dynamic Form Generation",
          content: "AI creates forms on the fly based on context. Users see exactly what they need, when they need it.",
          details: [
            "✓ Context-aware form fields",
            "✓ Progressive data collection",
            "✓ Smart field validation",
            "✓ Seamless multi-step flows",
            "✓ Auto-populated fields from context",
            "✓ Intelligent field sequencing"
          ],
          demoSteps: [
            { label: "Context Analyzed", status: "🧠 Analyzed", progress: 25 },
            { label: "Form Generated", status: "📋 Generated", progress: 50 },
            { label: "Data Collected", status: "✅ Collected", progress: 75 },
            { label: "Form Complete", status: "🎉 Complete", progress: 100 }
          ],
          visual: "form-generation"
        },
        {
          title: "Intent-Driven Workflows",
          content: "The AI detects user intent and generates the appropriate UI for that specific workflow. No more generic forms.",
          details: [
            "✓ Automatic intent detection",
            "✓ Workflow-specific interfaces",
            "✓ Conditional field display",
            "✓ Real-time UI adaptation",
            "✓ Multi-intent handling",
            "✓ Contextual workflow suggestions"
          ],
          demoSteps: [
            { label: "Intent Detected", status: "🎯 Detected", progress: 30 },
            { label: "Workflow Generated", status: "⚡ Generated", progress: 60 },
            { label: "Workflow Complete", status: "✅ Complete", progress: 100 }
          ],
          visual: "intent-workflow"
        },
        {
          title: "Intelligent Data Collection",
          content: "AI remembers what was already provided and only asks for missing information. No repetition, no frustration.",
          details: [
            "✓ Context persistence across sessions",
            "✓ Progressive disclosure of fields",
            "✓ Smart field pre-population",
            "✓ Intelligent error handling",
            "✓ Data validation and verification",
            "✓ Secure data storage"
          ],
          demoSteps: [
            { label: "Data Analyzed", status: "📊 Analyzed", progress: 33 },
            { label: "Missing Fields Identified", status: "🔍 Identified", progress: 66 },
            { label: "Collection Complete", status: "✅ Complete", progress: 100 }
          ],
          visual: "data-collection"
        }
      ]
    },
    {
      id: "ai-intelligence",
      icon: "🤖",
      title: "GenAI Intelligence Engine",
      subtitle: "Multi-Source AI That Understands Your Business",
      description: "An AI that doesn't just answer questions—it understands context, detects intent, and learns from every interaction.",
      slides: [
        {
          title: "Multi-Source Knowledge",
          content: "Answer from multiple data sources simultaneously—PDFs, documents, reinforcement learning, and structured data.",
          details: [
            "✓ PDF & document understanding with RAG",
            "✓ Reinforcement learning from interactions",
            "✓ Structured data integration",
            "✓ Unified intelligence layer",
            "✓ Real-time knowledge updates",
            "✓ Source attribution and confidence scores"
          ],
          demoSteps: [
            { label: "Query Received", status: "🔍 Received", progress: 20 },
            { label: "Sources Queried", status: "📚 Queried", progress: 50 },
            { label: "Answer Synthesized", status: "🧠 Synthesized", progress: 80 },
            { label: "Response Delivered", status: "✅ Delivered", progress: 100 }
          ],
          visual: "knowledge-sources"
        },
        {
          title: "Intelligent FAQ Tree",
          content: "A beautiful, intuitive navigation tree that guides users to the right answer with interactive forms that capture leads.",
          details: [
            "✓ Interactive navigation with visual feedback",
            "✓ Custom form nodes for lead capture",
            "✓ Lead generation integration",
            "✓ Breadcrumb navigation with context",
            "✓ Search within FAQ",
            "✓ Analytics on FAQ usage"
          ],
          demoSteps: [
            { label: "FAQ Loaded", status: "🌳 Loaded", progress: 25 },
            { label: "Navigation Started", status: "📍 Navigating", progress: 50 },
            { label: "Answer Found", status: "✅ Found", progress: 75 },
            { label: "Lead Captured", status: "📝 Captured", progress: 100 }
          ],
          visual: "faq-tree"
        },
        {
          title: "Smart Form Generation",
          content: "AI generates dynamic input forms based on context. Users see exactly what information is needed, when it's needed.",
          details: [
            "✓ Dynamic field generation",
            "✓ Context-aware validation",
            "✓ Smart field types selection",
            "✓ Real-time form updates",
            "✓ Conditional field logic",
            "✓ Form analytics"
          ],
          demoSteps: [
            { label: "Context Analyzed", status: "🧠 Analyzed", progress: 30 },
            { label: "Fields Generated", status: "📋 Generated", progress: 60 },
            { label: "Form Submitted", status: "✅ Submitted", progress: 100 }
          ],
          visual: "smart-forms"
        }
      ]
    },
    {
      id: "security",
      icon: "🔐",
      title: "Enterprise Security & Auth",
      subtitle: "Multi-Layer Security, Consumer-Grade Experience",
      description: "Enterprise-grade security with a seamless user experience. Multiple authentication layers without the friction.",
      slides: [
        {
          title: "Primary + Secondary Auth",
          content: "Multiple authentication layers with OTP support. Secure access without compromising user experience.",
          details: [
            "✓ Primary authentication (email/password)",
            "✓ Secondary OTP verification",
            "✓ Secure session management",
            "✓ Enterprise-grade encryption",
            "✓ Biometric support where available",
            "✓ Social login integration"
          ],
          demoSteps: [
            { label: "Primary Auth", status: "🔑 Done", progress: 33 },
            { label: "OTP Verification", status: "📱 Done", progress: 66 },
            { label: "Session Active", status: "✅ Active", progress: 100 }
          ],
          visual: "auth-flow"
        },
        {
          title: "Secure Session Management",
          content: "Enterprise-grade encryption and session handling. User data is always protected, always secure.",
          details: [
            "✓ AES-256 encryption",
            "✓ Secure session handling",
            "✓ Automatic session expiry",
            "✓ Comprehensive audit logs",
            "✓ IP and device tracking",
            "✓ Anomaly detection"
          ],
          demoSteps: [
            { label: "Session Created", status: "🔒 Created", progress: 33 },
            { label: "Encryption Active", status: "🛡️ Active", progress: 66 },
            { label: "Session Secure", status: "✅ Secure", progress: 100 }
          ],
          visual: "session-security"
        }
      ]
    }
  ];

  const handleSlideChange = (direction) => {
    const currentSlides = features[activeFeature]?.slides || [];
    if (direction === 'next') {
      setActiveSlide((prev) => (prev + 1) % currentSlides.length);
      setActiveDemoStep(0);
    } else {
      setActiveSlide((prev) => (prev - 1 + currentSlides.length) % currentSlides.length);
      setActiveDemoStep(0);
    }
  };

  const currentFeature = features[activeFeature];
  const currentSlide = currentFeature?.slides?.[activeSlide] || {};
  const currentDemoSteps = currentSlide?.demoSteps || [];
  const currentDemoStep = currentDemoSteps[activeDemoStep] || currentDemoSteps[0] || {};

  return (
    <section className={styles.clientFeatures}>
      <div className={styles.container}>
        {/* ============================================================
            HEADER SECTION
        ============================================================ */}
        <div className={styles.header}>
          <span className={styles.badge}>✨ Enterprise Client Experience</span>
          <h2 className={styles.title}>
            The <span className={styles.highlight}>Sageion</span> Experience
          </h2>
          <p className={styles.subtitle}>
            Enterprise-grade capabilities delivered with consumer-grade simplicity.
            Every interaction is designed to delight, every workflow is built to convert.
          </p>
        </div>

        {/* ============================================================
            FEATURE TABS
        ============================================================ */}
        <div className={styles.tabsContainer}>
          {features.map((feature, index) => (
            <button
              key={feature.id}
              className={`${styles.tabButton} ${activeFeature === index ? styles.active : ''}`}
              onClick={() => {
                setActiveFeature(index);
                setActiveSlide(0);
                setActiveDemoStep(0);
                setIsDemoPlaying(false);
              }}
            >
              <span className={styles.tabIcon}>{feature.icon}</span>
              <span className={styles.tabLabel}>{feature.title}</span>
            </button>
          ))}
        </div>

        {/* ============================================================
            FEATURE SHOWCASE
        ============================================================ */}
        <div className={styles.featureShowcase}>
          <div className={styles.featureContent}>
            {/* -------- LEFT COLUMN: Content -------- */}
            <div className={styles.featureInfo}>
              <div className={styles.featureHeader}>
                <span className={styles.featureIcon}>{currentFeature?.icon}</span>
                <div>
                  <h3 className={styles.featureTitle}>{currentFeature?.title}</h3>
                  <p className={styles.featureSubtitle}>{currentFeature?.subtitle}</p>
                </div>
              </div>
              <p className={styles.featureDescription}>{currentFeature?.description}</p>

              {/* Slide Navigation */}
              <div className={styles.slideNavigation}>
                <button 
                  className={styles.slideNavBtn}
                  onClick={() => handleSlideChange('prev')}
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <span className={styles.slideIndicator}>
                  {activeSlide + 1} / {currentFeature?.slides?.length || 0}
                </span>
                <button 
                  className={styles.slideNavBtn}
                  onClick={() => handleSlideChange('next')}
                  aria-label="Next slide"
                >
                  →
                </button>
                <button 
                  className={`${styles.autoPlayBtn} ${isDemoPlaying ? styles.playing : ''}`}
                  onClick={() => setIsDemoPlaying(!isDemoPlaying)}
                  aria-label={isDemoPlaying ? "Pause demo" : "Play demo"}
                >
                  {isDemoPlaying ? '⏸' : '▶'}
                </button>
              </div>

              {/* Current Slide Content */}
              <div className={styles.slideContent}>
                <h4 className={styles.slideTitle}>{currentSlide?.title}</h4>
                <p className={styles.slideDescription}>{currentSlide?.content}</p>
                <ul className={styles.slideDetails}>
                  {currentSlide?.details?.map((detail, i) => (
                    <li key={i} className={styles.detailItem}>
                      <span className={styles.detailIcon}>✦</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Demo Progress */}
                {currentDemoSteps.length > 0 && (
                  <div className={styles.demoProgress}>
                    <div className={styles.demoSteps}>
                      {currentDemoSteps.map((step, index) => (
                        <div 
                          key={index} 
                          className={`${styles.demoStep} ${index <= activeDemoStep ? styles.active : ''}`}
                          onClick={() => setActiveDemoStep(index)}
                        >
                          <span className={styles.demoStepIcon}>
                            {index < activeDemoStep ? '✅' : index === activeDemoStep ? '🔄' : '⏳'}
                          </span>
                          <span className={styles.demoStepLabel}>{step.label}</span>
                          <span className={styles.demoStepStatus}>{step.status}</span>
                        </div>
                      ))}
                    </div>
                    <div className={styles.demoProgressBar}>
                      <div 
                        className={styles.demoProgressFill} 
                        style={{ width: `${currentDemoStep?.progress || 0}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Slide Dots */}
              <div className={styles.slideDots}>
                {currentFeature?.slides?.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${activeSlide === index ? styles.active : ''}`}
                    onClick={() => {
                      setActiveSlide(index);
                      setActiveDemoStep(0);
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* -------- RIGHT COLUMN: Visual Preview -------- */}
            <div className={styles.featureVisual}>
              <div className={styles.visualCard}>
                {/* ============================================================
                    LIVE CHAT - DELIVERY FLOW
                ============================================================ */}
                {currentSlide?.visual === "delivery-flow" && (
                  <div className={styles.previewDelivery}>
                    <div className={styles.deliveryHeader}>
                      <span>📱 Live Chat</span>
                      <span className={styles.statusBadge}>🟢 Online</span>
                    </div>
                    <div className={styles.deliveryMessages}>
                      <div className={styles.msgReceived}>
                        <div className={styles.bubble}>Hey! How can I help you today?</div>
                        <span className={styles.time}>10:30 AM</span>
                        <span className={styles.deliveryStatus}>✓✓ Delivered</span>
                      </div>
                      <div className={styles.msgSent}>
                        <div className={styles.bubble}>I need help with my order #ORD-12345</div>
                        <span className={styles.time}>10:31 AM</span>
                        <span className={styles.deliveryStatus}>✓✓ Read</span>
                      </div>
                      <div className={styles.msgReceived}>
                        <div className={styles.bubble}>Let me check that for you. One moment...</div>
                        <span className={styles.time}>10:31 AM</span>
                        <span className={styles.deliveryStatus}>✓✓ Delivered</span>
                      </div>
                      <div className={styles.msgSent}>
                        <div className={styles.bubble}>Sure, I'll wait</div>
                        <span className={styles.time}>10:32 AM</span>
                        <span className={styles.deliveryStatus}>✓✓ Read</span>
                      </div>
                      <div className={styles.typingIndicator}>
                        <span>Agent is typing</span>
                        <span className={styles.dots}>...</span>
                      </div>
                    </div>
                    <div className={styles.deliveryFooter}>
                      <span>📎</span>
                      <span className={styles.inputPlaceholder}>Type a message...</span>
                      <span className={styles.sendBtn}>➤</span>
                    </div>
                    <div className={styles.deliveryStats}>
                      <span>📊 Response Time: 2.3s</span>
                      <span>✓✓ Delivery Rate: 100%</span>
                    </div>
                  </div>
                )}

                {/* ============================================================
                    LIVE CHAT - MEDIA FLOW
                ============================================================ */}
                {currentSlide?.visual === "media-flow" && (
                  <div className={styles.previewMedia}>
                    <div className={styles.mediaHeader}>
                      <span>📎 Share Files</span>
                      <span className={styles.mediaHint}>Drag & drop or click</span>
                    </div>
                    <div className={styles.mediaList}>
                      <div className={styles.mediaItem}>
                        <span>📄</span>
                        <span>Annual_Report_2024.pdf</span>
                        <span className={styles.fileSize}>2.4 MB</span>
                        <span className={styles.previewBadge}>👁️</span>
                      </div>
                      <div className={styles.mediaItem}>
                        <span>🖼️</span>
                        <span>product_showcase.png</span>
                        <span className={styles.fileSize}>1.2 MB</span>
                        <span className={styles.previewBadge}>👁️</span>
                      </div>
                      <div className={styles.mediaItem}>
                        <span>📹</span>
                        <span>tutorial_video.mp4</span>
                        <span className={styles.fileSize}>8.7 MB</span>
                        <span className={styles.previewBadge}>👁️</span>
                      </div>
                      <div className={styles.mediaDropZone}>
                        <span>📂 Drop files here</span>
                        <span className={styles.dropHint}>or click to browse</span>
                      </div>
                    </div>
                    <div className={styles.mediaPreviewContainer}>
                      <span className={styles.previewLabel}>📄 document.pdf • 2 pages</span>
                      <span className={styles.previewActions}>Download • Share • Copy</span>
                    </div>
                  </div>
                )}

                {/* ============================================================
                    LIVE CHAT - INTERACTION FLOW
                ============================================================ */}
                {currentSlide?.visual === "interaction-flow" && (
                  <div className={styles.previewInteraction}>
                    <div className={styles.interactionHeader}>
                      <span>💬 Message Interactions</span>
                      <span className={styles.interactionBadge}>Rich Actions</span>
                    </div>
                    <div className={styles.interactionMessages}>
                      <div className={styles.msgReceived}>
                        <div className={styles.bubble}>Here's the tracking information for your order</div>
                        <div className={styles.reactionBar}>
                          <button className={styles.reactionBtn}>👍</button>
                          <button className={styles.reactionBtn}>❤️</button>
                          <button className={styles.reactionBtn}>😂</button>
                          <button className={styles.reactionBtn}>😮</button>
                          <button className={styles.reactionBtn}>👏</button>
                        </div>
                        <div className={styles.quickReplies}>
                          <button className={styles.quickReply}>Thank you! ✅</button>
                          <button className={styles.quickReply}>Need more help</button>
                          <button className={styles.quickReply}>Track another</button>
                        </div>
                      </div>
                      <div className={styles.replyThread}>
                        <span className={styles.replyThreadLabel}>↩️ Replying to: "Here's the tracking information..."</span>
                        <div className={styles.replyBubble}>Thanks, I see it now! Can you also help with returns?</div>
                      </div>
                      <div className={styles.messageActions}>
                        <button className={styles.actionBtn}>📌 Pin</button>
                        <button className={styles.actionBtn}>🔗 Share</button>
                        <button className={styles.actionBtn}>📋 Copy</button>
                        <button className={styles.actionBtn}>🗑️ Delete</button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ============================================================
                    RESPONSE SCREENS - ACTION DRIVEN
                ============================================================ */}
                {currentSlide?.visual === "response-screen" && (
                  <div className={styles.previewResponseScreen}>
                    <div className={styles.responseHeader}>
                      <span>📱 Action Screen</span>
                      <span className={styles.responseBadge}>Interactive</span>
                    </div>
                    <div className={styles.responseBody}>
                      <div className={styles.responseContext}>
                        <span>📋 Context: Order Support</span>
                        <span className={styles.responseStep}>Step 1 of 3</span>
                      </div>
                      <div className={styles.responseCard}>
                        <h4 className={styles.responseTitle}>What would you like to do?</h4>
                        <div className={styles.responseOptions}>
                          <button className={styles.responseOption}>
                            <span>📦</span>
                            <span>Track Order</span>
                            <span className={styles.optionArrow}>→</span>
                          </button>
                          <button className={styles.responseOption}>
                            <span>🔄</span>
                            <span>Return Item</span>
                            <span className={styles.optionArrow}>→</span>
                          </button>
                          <button className={styles.responseOption}>
                            <span>💳</span>
                            <span>Payment Issue</span>
                            <span className={styles.optionArrow}>→</span>
                          </button>
                          <button className={styles.responseOption}>
                            <span>📞</span>
                            <span>Call Support</span>
                            <span className={styles.optionArrow}>→</span>
                          </button>
                        </div>
                      </div>
                      <div className={styles.responseActions}>
                        <button className={styles.responsePrimary}>Select Option</button>
                        <button className={styles.responseSecondary}>Skip</button>
                      </div>
                      <div className={styles.responseProgress}>
                        <div className={styles.responseProgressBar} style={{ width: '25%' }} />
                        <span>25% Complete</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ============================================================
                    RESPONSE SCREENS - NAVIGATION
                ============================================================ */}
                {currentSlide?.visual === "screen-navigation" && (
                  <div className={styles.previewNavigation}>
                    <div className={styles.navHeader}>
                      <span>🧭 Screen Navigation</span>
                      <span className={styles.navBadge}>Dynamic Flow</span>
                    </div>
                    <div className={styles.navBody}>
                      <div className={styles.navBreadcrumb}>
                        <span className={styles.breadcrumbActive}>Step 1</span>
                        <span className={styles.breadcrumbArrow}>→</span>
                        <span className={styles.breadcrumbInactive}>Step 2</span>
                        <span className={styles.breadcrumbArrow}>→</span>
                        <span className={styles.breadcrumbInactive}>Step 3</span>
                      </div>
                      <div className={styles.navCard}>
                        <div className={styles.navStep}>
                          <span className={styles.navStepNum}>1</span>
                          <div className={styles.navStepContent}>
                            <span className={styles.navStepTitle}>Select Product</span>
                            <span className={styles.navStepDesc}>Choose the product you need help with</span>
                          </div>
                          <span className={styles.navStepStatus}>✅ Done</span>
                        </div>
                        <div className={styles.navStepActive}>
                          <span className={styles.navStepNum}>2</span>
                          <div className={styles.navStepContent}>
                            <span className={styles.navStepTitle}>Choose Issue</span>
                            <span className={styles.navStepDesc}>Select the type of issue you're facing</span>
                          </div>
                          <span className={styles.navStepStatus}>🔄 In Progress</span>
                        </div>
                        <div className={styles.navStep}>
                          <span className={styles.navStepNum}>3</span>
                          <div className={styles.navStepContent}>
                            <span className={styles.navStepTitle}>Resolution</span>
                            <span className={styles.navStepDesc}>Get your solution or next steps</span>
                          </div>
                          <span className={styles.navStepStatus}>⏳ Pending</span>
                        </div>
                      </div>
                      <div className={styles.navActions}>
                        <button className={styles.navBack}>← Back</button>
                        <button className={styles.navNext}>Next →</button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ============================================================
                    RESPONSE SCREENS - ACTION FLOW
                ============================================================ */}
                {currentSlide?.visual === "action-flow" && (
                  <div className={styles.previewActionFlow}>
                    <div className={styles.actionHeader}>
                      <span>⚡ Action-First Flow</span>
                      <span className={styles.actionBadge}>Click to Complete</span>
                    </div>
                    <div className={styles.actionBody}>
                      <div className={styles.actionCard}>
                        <h4 className={styles.actionTitle}>Complete Your Request</h4>
                        <div className={styles.actionGrid}>
                          <button className={styles.actionGridItem}>
                            <span>📝</span>
                            <span>Fill Form</span>
                            <span className={styles.actionGridArrow}>→</span>
                          </button>
                          <button className={styles.actionGridItem}>
                            <span>📎</span>
                            <span>Upload File</span>
                            <span className={styles.actionGridArrow}>→</span>
                          </button>
                          <button className={styles.actionGridItem}>
                            <span>✅</span>
                            <span>Confirm</span>
                            <span className={styles.actionGridArrow}>→</span>
                          </button>
                          <button className={styles.actionGridItem}>
                            <span>📞</span>
                            <span>Request Call</span>
                            <span className={styles.actionGridArrow}>→</span>
                          </button>
                        </div>
                        <div className={styles.actionFeedback}>
                          <span>💡 Tip: Choose an action to get started</span>
                        </div>
                      </div>
                      <div className={styles.actionHistory}>
                        <span>📋 Recent Actions:</span>
                        <div className={styles.actionHistoryItem}>✓ Tracked Order #12345</div>
                        <div className={styles.actionHistoryItem}>✓ Uploaded receipt.pdf</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ============================================================
                    GENERATIVE UI - FORM GENERATION
                ============================================================ */}
                {currentSlide?.visual === "form-generation" && (
                  <div className={styles.previewForm}>
                    <div className={styles.formHeader}>
                      <span>🧠 AI Generated Form</span>
                      <span className={styles.formContext}>Context: Order Support</span>
                    </div>
                    <div className={styles.formBody}>
                      <div className={styles.formStep}>
                        <span className={styles.stepBadge}>Step 1 of 3</span>
                        <span className={styles.stepTitle}>What's your order number?</span>
                        <div className={styles.formField}>
                          <input type="text" placeholder="Enter order number..." className={styles.formInput} />
                        </div>
                        <div className={styles.formField}>
                          <label>Order Date</label>
                          <input type="date" className={styles.formInput} />
                        </div>
                      </div>
                      <div className={styles.formProgress}>
                        <div className={styles.progressBar} style={{ width: '33%' }}></div>
                        <span className={styles.progressText}>Collecting order info</span>
                      </div>
                      <div className={styles.formActions}>
                        <button className={styles.formPrev}>← Back</button>
                        <button className={styles.formNext}>Next →</button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ============================================================
                    GENERATIVE UI - INTENT WORKFLOW
                ============================================================ */}
                {currentSlide?.visual === "intent-workflow" && (
                  <div className={styles.previewIntent}>
                    <div className={styles.intentHeader}>
                      <span>🎯 Intent Detected</span>
                      <span className={styles.intentBadge}>Refund Request</span>
                    </div>
                    <div className={styles.intentBody}>
                      <div className={styles.intentMessage}>
                        <span className={styles.intentIcon}>🤖</span>
                        <div>
                          <div className={styles.intentBubble}>
                            I understand you need a refund. Let me guide you through the process.
                          </div>
                          <div className={styles.intentContext}>
                            <span>📦 Order: #ORD-12345</span>
                            <span>💳 Amount: $249.99</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.intentOptions}>
                        <button className={styles.intentOption}>Start Refund Process →</button>
                        <button className={styles.intentOption}>Check Return Policy</button>
                      </div>
                      <div className={styles.intentFields}>
                        <div className={styles.fieldRow}>
                          <span>Reason for refund:</span>
                          <select className={styles.fieldSelect}>
                            <option>Damaged product</option>
                            <option>Wrong item</option>
                            <option>Changed mind</option>
                          </select>
                        </div>
                        <div className={styles.fieldRow}>
                          <span>Return method:</span>
                          <div className={styles.radioGroup}>
                            <label><input type="radio" name="method" /> Pickup</label>
                            <label><input type="radio" name="method" /> Drop-off</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ============================================================
                    GENERATIVE UI - DATA COLLECTION
                ============================================================ */}
                {currentSlide?.visual === "data-collection" && (
                  <div className={styles.previewData}>
                    <div className={styles.dataHeader}>
                      <span>📋 Smart Data Collection</span>
                      <span className={styles.dataStatus}>✓ Context Preserved</span>
                    </div>
                    <div className={styles.dataBody}>
                      <div className={styles.collectedData}>
                        <span className={styles.dataLabel}>Already Provided:</span>
                        <div className={styles.dataTags}>
                          <span className={styles.dataTag}>✓ Order #ORD-12345</span>
                          <span className={styles.dataTag}>✓ Email: user@example.com</span>
                          <span className={styles.dataTag}>✓ Product: Laptop Pro X</span>
                        </div>
                      </div>
                      <div className={styles.missingData}>
                        <span className={styles.dataLabel}>Still Needed:</span>
                        <div className={styles.dataFields}>
                          <div className={styles.missingField}>
                            <span>📅 Preferred date:</span>
                            <input type="date" className={styles.fieldInput} />
                          </div>
                          <div className={styles.missingField}>
                            <span>📝 Additional notes:</span>
                            <textarea className={styles.fieldTextarea} placeholder="Any other details..." />
                          </div>
                        </div>
                      </div>
                      <div className={styles.dataProgress}>
                        <div className={styles.progressFill} style={{ width: '65%' }}></div>
                        <span>65% Complete</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ============================================================
                    AI INTELLIGENCE - KNOWLEDGE SOURCES
                ============================================================ */}
                {currentSlide?.visual === "knowledge-sources" && (
                  <div className={styles.previewKnowledge}>
                    <div className={styles.knowledgeHeader}>
                      <span>📚 Multi-Source Intelligence</span>
                      <span className={styles.knowledgeBadge}>5 Sources Active</span>
                    </div>
                    <div className={styles.knowledgeBody}>
                      <div className={styles.knowledgeItem}>
                        <span>📄</span>
                        <span>Product Documentation</span>
                        <span className={styles.knowledgeStatus}>✓ Indexed</span>
                      </div>
                      <div className={styles.knowledgeItem}>
                        <span>📚</span>
                        <span>Reinforcement Learning</span>
                        <span className={styles.knowledgeStatus}>✓ Active</span>
                      </div>
                      <div className={styles.knowledgeItem}>
                        <span>📊</span>
                        <span>Structured Data</span>
                        <span className={styles.knowledgeStatus}>✓ Connected</span>
                      </div>
                      <div className={styles.knowledgeItem}>
                        <span>🔄</span>
                        <span>RAG Engine</span>
                        <span className={styles.knowledgeStatus}>✓ Optimized</span>
                      </div>
                      <div className={styles.knowledgeQuery}>
                        <span>🔍 Querying: "refund policy electronics"</span>
                        <div className={styles.queryResult}>
                          <span>📄 Source: Returns_Policy_2024.pdf → Page 3</span>
                          <span className={styles.confidence}>Confidence: 94%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ============================================================
                    AI INTELLIGENCE - FAQ TREE
                ============================================================ */}
                {currentSlide?.visual === "faq-tree" && (
                  <div className={styles.previewFaq}>
                    <div className={styles.faqHeader}>
                      <span>🌳 Intelligent FAQ Tree</span>
                      <span className={styles.faqNav}>Home › Support › Returns</span>
                    </div>
                    <div className={styles.faqBody}>
                      <div className={styles.faqNode}>
                        <span>📁 Product Information</span>
                        <span className={styles.faqCount}>12 articles</span>
                      </div>
                      <div className={styles.faqNodeActive}>
                        <span>📦 Shipping & Returns</span>
                        <span className={styles.faqCount}>8 articles</span>
                      </div>
                      <div className={styles.faqNode}>
                        <span>💳 Payment & Billing</span>
                        <span className={styles.faqCount}>6 articles</span>
                      </div>
                      <div className={styles.faqNode}>
                        <span>🔧 Technical Support</span>
                        <span className={styles.faqCount}>10 articles</span>
                      </div>
                      <div className={styles.faqLeadForm}>
                        <span>📝 Need more help? Generate a lead</span>
                        <div className={styles.faqFormFields}>
                          <input type="text" placeholder="Full Name" className={styles.faqInput} />
                          <input type="email" placeholder="Email Address" className={styles.faqInput} />
                          <button className={styles.faqSubmit}>Submit →</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ============================================================
                    AI INTELLIGENCE - SMART FORMS
                ============================================================ */}
                {currentSlide?.visual === "smart-forms" && (
                  <div className={styles.previewSmartForms}>
                    <div className={styles.smartHeader}>
                      <span>🧠 Smart Form Generation</span>
                      <span className={styles.smartBadge}>AI-Powered</span>
                    </div>
                    <div className={styles.smartBody}>
                      <div className={styles.smartContext}>
                        <span>📋 Context: Return Request</span>
                        <span className={styles.contextTag}>Auto-detected</span>
                      </div>
                      <div className={styles.smartFields}>
                        <div className={styles.smartField}>
                          <label>Order Number</label>
                          <input type="text" className={styles.smartInput} placeholder="Auto-filled from context" />
                          <span className={styles.fieldSource}>📦 From previous message</span>
                        </div>
                        <div className={styles.smartField}>
                          <label>Reason for Return</label>
                          <select className={styles.smartSelect}>
                            <option>Damaged product</option>
                            <option>Wrong item received</option>
                            <option>Changed mind</option>
                          </select>
                        </div>
                        <div className={styles.smartField}>
                          <label>Return Method</label>
                          <div className={styles.smartOptions}>
                            <button className={styles.optionActive}>Pickup</button>
                            <button className={styles.optionInactive}>Drop-off</button>
                            <button className={styles.optionInactive}>Mail-in</button>
                          </div>
                        </div>
                      </div>
                      <div className={styles.smartFooter}>
                        <span>✨ Fields adapt based on your previous answers</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ============================================================
                    SECURITY - AUTH FLOW
                ============================================================ */}
                {currentSlide?.visual === "auth-flow" && (
                  <div className={styles.previewAuth}>
                    <div className={styles.authHeader}>
                      <span>🔐 Secure Authentication</span>
                      <span className={styles.authStatus}>Primary + OTP</span>
                    </div>
                    <div className={styles.authBody}>
                      <div className={styles.authStep}>
                        <span className={styles.authStepNum}>1</span>
                        <div>
                          <span className={styles.authStepLabel}>Primary Auth</span>
                          <span className={styles.authStepStatus}>✅ Verified</span>
                        </div>
                      </div>
                      <div className={styles.authArrow}>↓</div>
                      <div className={styles.authStep}>
                        <span className={styles.authStepNum}>2</span>
                        <div>
                          <span className={styles.authStepLabel}>Secondary OTP</span>
                          <span className={styles.authStepStatus}>🔄 In Progress</span>
                        </div>
                      </div>
                      <div className={styles.authArrow}>↓</div>
                      <div className={styles.authStep}>
                        <span className={styles.authStepNum}>3</span>
                        <div>
                          <span className={styles.authStepLabel}>Session Established</span>
                          <span className={styles.authStepStatus}>⏳ Connecting</span>
                        </div>
                      </div>
                      <div className={styles.authOTP}>
                        <span>📱 OTP sent to user@example.com</span>
                        <div className={styles.otpInput}>
                          <input type="text" placeholder="Enter OTP" className={styles.otpField} maxLength="6" />
                          <button className={styles.otpVerify}>Verify →</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ============================================================
                    SECURITY - SESSION SECURITY
                ============================================================ */}
                {currentSlide?.visual === "session-security" && (
                  <div className={styles.previewSecurity}>
                    <div className={styles.securityHeader}>
                      <span>🛡️ Enterprise Security</span>
                      <span className={styles.securityBadge}>AES-256</span>
                    </div>
                    <div className={styles.securityBody}>
                      <div className={styles.securityFeature}>
                        <span>🔒</span>
                        <span>End-to-End Encryption</span>
                        <span className={styles.securityStatus}>✓ Active</span>
                      </div>
                      <div className={styles.securityFeature}>
                        <span>🔑</span>
                        <span>Secure Session Management</span>
                        <span className={styles.securityStatus}>✓ Active</span>
                      </div>
                      <div className={styles.securityFeature}>
                        <span>⏰</span>
                        <span>Automatic Session Expiry</span>
                        <span className={styles.securityStatus}>✓ 30 min</span>
                      </div>
                      <div className={styles.securityFeature}>
                        <span>📊</span>
                        <span>Comprehensive Audit Logs</span>
                        <span className={styles.securityStatus}>✓ Enabled</span>
                      </div>
                      <div className={styles.securitySession}>
                        <span>🟢 Session: Active</span>
                        <span className={styles.sessionDetails}>User: user@example.com | Expires: 15:30</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Feature Tags */}
              <div className={styles.featureTags}>
                {currentFeature?.slides?.map((slide, index) => (
                  <span key={index} className={styles.tag}>
                    {slide.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            COMPETITIVE EDGE BANNER
        ============================================================ */}
        {/* <div className={styles.edgeBanner}>
          <div className={styles.edgeContent}>
            <span className={styles.edgeIcon}>🏆</span>
            <div>
              <h4>Built Different. Built Better.</h4>
              <p>
                While others offer features, Sageion delivers experiences. 
                Every interaction is designed to delight, every workflow is built to convert.
              </p>
            </div>
            <div className={styles.competitorComparison}>
              <span>vs Sierra.ai</span>
              <span>vs Intercom</span>
              <span>vs Zendesk</span>
              <span>vs Drift</span>
            </div>
          </div>
        </div> */}

        {/* ============================================================
            CTA SECTION
        ============================================================ */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>Ready to transform your customer experience?</h3>
            <p>Join thousands of businesses using Sageion to delight their customers and grow their business.</p>
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