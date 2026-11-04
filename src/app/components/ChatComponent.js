"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatComponent.module.css";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showApprovalCard, setShowApprovalCard] = useState(false);
  const [approvalState, setApprovalState] = useState("pending"); // pending | approved | rejected
  const [isRestarting, setIsRestarting] = useState(false);
  const messagesListRef = useRef(null);

  let messageIndex = 0;
  let isActive = true;
  let restartTimeout = null;

  // ─── High-stakes operator conversation ────────────────────────
  // A franchise owner is running a 40-store operation. She asks
  // the AI agent for a cross-store revenue comparison, then
  // triggers a refund that must be human-approved.
  // ──────────────────────────────────────────────────────────────
  const conversationFlow = [
    // 1. Owner opens the conversation
    {
      text: "How did Store #4 do this weekend compared to last week?",
      brand: "Priya (Franchise Owner)",
      avatar: "👤",
      type: "user",
      user: "Owner",
    },

    // 2. Agent runs a multi-store API chain — no LLM in the data path
    {
      text: "Pulling that now. Chaining 4 APIs: yesterday's sales → last week's sales → POS deltas → inventory reconciliation.",
      brand: "Sageion AI Agent",
      avatar: "🤖",
      type: "assistant",
      user: "AI Agent",
      apiTrace: [
        "GET  /pos/stores/4/sales?range=yesterday",
        "GET  /pos/stores/4/sales?range=last_week",
        "GET  /pos/stores/4/inventory/deltas",
        "POST /analytics/compare",
      ],
    },

    // 3. Agent renders a custom UI screen from the API response
    {
      text: "Here's the comparison. Revenue is up 12.4%, but food cost is up 3.1% — driven by a rice price hike on Thursday.",
      brand: "Sageion AI Agent",
      avatar: "🤖",
      type: "assistant",
      user: "AI Agent",
      isRevenueCard: true,
    },

    // 4. Owner triggers a high-stakes action — refund above policy
    {
      text: "Issue a refund for order #4421 — customer complained about cold food.",
      brand: "Priya (Franchise Owner)",
      avatar: "👤",
      type: "user",
      user: "Owner",
    },

    // 5. Agent detects HITL required (refund > $50) and pauses
    {
      text: "Refund detected: $145.00 for order #4421. This is above your $50 auto-approval threshold, so I'm pausing the workflow for your approval before hitting the payment gateway.",
      brand: "Sageion AI Agent",
      avatar: "🤖",
      type: "assistant",
      user: "AI Agent",
      apiTrace: [
        "GET  /pos/orders/4421 (200 OK)",
        "GET  /payments/4421 (200 OK)",
        "POST /refunds/4421 → PAUSED (HITL required)",
      ],
      isApprovalRequest: true,
    },

    // 6. Show the approval card (rendered from the pause state)
    {
      type: "assistant",
      isApprovalCard: true,
      brand: "Sageion AI Agent",
      avatar: "🤖",
      user: "AI Agent",
    },
  ];

  const smoothScrollToBottom = () => {
    setTimeout(() => {
      if (messagesListRef.current) {
        messagesListRef.current.scrollTo({
          top: messagesListRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const startConversation = () => {
    let localMessageIndex = 0;
    isActive = true;

    const addMessage = () => {
      if (!isActive) return;

      if (localMessageIndex < conversationFlow.length) {
        if (
          conversationFlow[localMessageIndex].type === "assistant" &&
          localMessageIndex > 0 &&
          !conversationFlow[localMessageIndex].isApprovalCard
        ) {
          setIsTyping(true);
          setTimeout(() => {
            if (!isActive) return;
            setIsTyping(false);
            addActualMessage();
          }, 1800);
        } else {
          addActualMessage();
        }
      }
    };

    const addActualMessage = () => {
      if (!isActive) return;

      const message = conversationFlow[localMessageIndex];

      if (message.isApprovalCard) {
        setTimeout(() => {
          setShowApprovalCard(true);
          smoothScrollToBottom();
        }, 600);
        localMessageIndex++;
        return;
      }

      const newMessage = {
        id: Date.now() + Math.random(),
        ...message,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, newMessage]);
      smoothScrollToBottom();
      localMessageIndex++;

      if (localMessageIndex < conversationFlow.length) {
        const delay = Math.random() * 1800 + 1200;
        setTimeout(addMessage, delay);
      }
    };

    const timeout = setTimeout(addMessage, 1200);

    return () => {
      clearTimeout(timeout);
    };
  };

  // ─── Auto-approve the refund after a short pause ─────────────
  // On a real product this fires when the owner taps "Approve."
  // Here we animate it so the demo loop can restart.
  // ──────────────────────────────────────────────────────────────
  const handleApproval = (approved) => {
    if (approvalState !== "pending") return;

    setApprovalState(approved ? "approved" : "rejected");
    setShowApprovalCard(false);

    const followUp = {
      id: Date.now(),
      text: approved
        ? "Approved. Refund of $145.00 has been processed to the customer's card. Payment gateway will confirm in 3-5 business days. Audit log updated."
        : "Rejected. The refund workflow has been closed. No payment was issued. Audit log updated.",
      brand: "Sageion AI Agent",
      avatar: "🤖",
      type: "assistant",
      user: "AI Agent",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      apiTrace: approved
        ? [
            "POST /refunds/4421/approve (200 OK)",
            "POST /payments/4421/refund (202 Accepted)",
            "→ Awaiting payment gateway webhook",
          ]
        : ["POST /refunds/4421/reject (200 OK)"],
    };

    setMessages((prev) => [...prev, followUp]);
    smoothScrollToBottom();

    // Restart conversation after a pause so the demo loops
    setTimeout(() => {
      setIsRestarting(true);
      setTimeout(() => {
        setMessages([]);
        setShowApprovalCard(false);
        setApprovalState("pending");
        messageIndex = 0;
        setIsRestarting(false);
        setTimeout(() => startConversation(), 800);
      }, 2500);
    }, 2500);
  };

  // Auto-trigger approval after the card has been shown for 4s
  // (so the demo doesn't stall waiting for a click)
  useEffect(() => {
    if (showApprovalCard && approvalState === "pending" && !isRestarting) {
      const t = setTimeout(() => {
        handleApproval(true);
      }, 4000);
      return () => clearTimeout(t);
    }
  }, [showApprovalCard, approvalState, isRestarting]);

  // Initial conversation start
  useEffect(() => {
    const cleanup = startConversation();

    return () => {
      isActive = false;
      if (restartTimeout) clearTimeout(restartTimeout);
      if (cleanup) cleanup();
    };
  }, []);

  useEffect(() => {
    smoothScrollToBottom();
  }, [messages, isTyping, showApprovalCard]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesList} ref={messagesListRef}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.messageItem} ${
              message.type === "assistant"
                ? styles.assistantMessage
                : styles.userMessage
            }`}
          >
            <div className={styles.messageAvatar}>{message.avatar}</div>
            <div className={styles.messageWrapper}>
              <div className={styles.messageHeader}>
                <span className={styles.messageBrand}>{message.brand}</span>
                <span className={styles.messageTime}>{message.timestamp}</span>
              </div>

              {/* API trace — shows the deterministic chain */}
              {message.apiTrace && (
                <div className={styles.apiTrace}>
                  {message.apiTrace.map((line, i) => (
                    <div key={i} className={styles.apiTraceLine}>
                      <span className={styles.apiTraceArrow}>→</span>
                      <code>{line}</code>
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.messageText}>{message.text}</div>

              {/* Inline revenue card — auto-generated UI */}
              {message.isRevenueCard && (
                <div className={styles.revenueCard}>
                  <div className={styles.revenueHeader}>
                    <span className={styles.revenueTitle}>
                      Store #4 — Weekend Comparison
                    </span>
                    <span className={styles.revenueBadge}>Rendered from API</span>
                  </div>

                  <div className={styles.revenueGrid}>
                    <div className={styles.revenueMetric}>
                      <span className={styles.revenueMetricLabel}>Revenue</span>
                      <span className={styles.revenueMetricValue}>
                        $12,480
                      </span>
                      <span
                        className={`${styles.revenueDelta} ${styles.revenueDeltaUp}`}
                      >
                        ↑ 12.4%
                      </span>
                    </div>
                    <div className={styles.revenueMetric}>
                      <span className={styles.revenueMetricLabel}>Food Cost</span>
                      <span className={styles.revenueMetricValue}>$4,320</span>
                      <span
                        className={`${styles.revenueDelta} ${styles.revenueDeltaDown}`}
                      >
                        ↑ 3.1%
                      </span>
                    </div>
                    <div className={styles.revenueMetric}>
                      <span className={styles.revenueMetricLabel}>Orders</span>
                      <span className={styles.revenueMetricValue}>312</span>
                      <span
                        className={`${styles.revenueDelta} ${styles.revenueDeltaUp}`}
                      >
                        ↑ 8.7%
                      </span>
                    </div>
                  </div>

                  <div className={styles.revenueNote}>
                    ⚠ Rice supplier raised prices on Thursday. Affects 6 SKUs.
                  </div>

                  <div className={styles.revenueActions}>
                    <button className={styles.revenueActionBtn}>
                      Drill into stores
                    </button>
                    <button className={styles.revenueActionBtnSecondary}>
                      Export report
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Human-in-the-loop approval card — the signature primitive */}
        {showApprovalCard && (
          <div
            className={`${styles.messageItem} ${styles.assistantMessage}`}
          >
            <div className={styles.messageAvatar}>🤖</div>
            <div className={styles.messageWrapper}>
              <div className={styles.messageHeader}>
                <span className={styles.messageBrand}>Sageion AI Agent</span>
                <span className={styles.messageTime}>
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              <div className={styles.approvalCard}>
                <div className={styles.approvalHeader}>
                  <span className={styles.approvalIcon}>⏸️</span>
                  <div>
                    <div className={styles.approvalTitle}>
                      Workflow paused for approval
                    </div>
                    <div className={styles.approvalSubtitle}>
                      Refund above auto-approval threshold
                    </div>
                  </div>
                </div>

                <div className={styles.approvalBody}>
                  <div className={styles.approvalRow}>
                    <span>Order</span>
                    <strong>#4421</strong>
                  </div>
                  <div className={styles.approvalRow}>
                    <span>Customer</span>
                    <strong>Jane M.</strong>
                  </div>
                  <div className={styles.approvalRow}>
                    <span>Amount</span>
                    <strong className={styles.approvalAmount}>$145.00</strong>
                  </div>
                  <div className={styles.approvalRow}>
                    <span>Reason</span>
                    <strong>Cold food complaint</strong>
                  </div>
                  <div className={styles.approvalRow}>
                    <span>Policy</span>
                    <strong>$50 auto-approval limit</strong>
                  </div>
                </div>

                <div className={styles.approvalActions}>
                  <button
                    className={styles.approvalReject}
                    onClick={() => handleApproval(false)}
                  >
                    Reject
                  </button>
                  <button
                    className={styles.approvalApprove}
                    onClick={() => handleApproval(true)}
                  >
                    Approve Refund
                  </button>
                </div>

                <div className={styles.approvalFooter}>
                  🔒 Deterministic amount · API-verified · Audit-logged
                </div>
              </div>
            </div>
          </div>
        )}

        {isTyping && (
          <div className={styles.typingIndicator}>
            <div className={styles.typingAvatar}>🤖</div>
            <div className={styles.typingDots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatComponent;