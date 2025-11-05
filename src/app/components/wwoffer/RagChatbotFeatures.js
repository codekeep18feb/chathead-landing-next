import React from "react";
import styles from "./RagChatbotFeatures.module.css";
import tabContents from "./TabContent.module.css"

const RagChatbotFeatures = () => {
  const features = [
    {
      icon: "🔍",
      title: "Smart Document Understanding",
      description:
        "Understands PDFs, Word files, and web pages using advanced text extraction and reasoning.",
      benefit:
        "Upload any file and get accurate, human-like answers instantly — no manual reading required.",
    },
    {
      icon: "🌐",
      title: "Multi-Source Intelligence",
      description:
        "Retrieves information from websites, sitemaps, and uploaded documents together.",
      benefit:
        "Delivers unified, comprehensive answers from all your knowledge sources.",
    },
    {
      icon: "🎯",
      title: "Domain-Aware Expertise",
      description:
        "Automatically adapts to scientific, technical, and business topics.",
      benefit: "Get expert-level insights tailored to your domain — instantly.",
    },
    {
      icon: "📊",
      title: "Confidence Scoring",
      description:
        "Displays accuracy confidence for every response, suggesting alternatives when uncertain.",
      benefit: "You always know when to trust an answer — and when to verify.",
    },
    {
      icon: "🔢",
      title: "Data Validation",
      description:
        "Cross-verifies numbers, statistics, and percentages from original sources.",
      benefit: "Reliable, fact-checked responses you can depend on.",
    },
    {
      icon: "⚡",
      title: "Intent Recognition",
      description:
        "Understands user intent and seamlessly routes complex or sensitive queries to live support.",
      benefit: "Smooth, human fallback when AI can’t help — no friction.",
    },
    {
      icon: "🧠",
      title: "Context-Aware Memory",
      description:
        "Maintains distinct knowledge bases per project, with isolated context.",
      benefit: "Keeps conversations focused and prevents data overlap.",
    },
    {
      icon: "📝",
      title: "Structured Response Generation",
      description:
        "Organizes answers into bullet lists, steps, or formatted outputs automatically.",
      benefit:
        "Readable, actionable responses — not just plain text dumps.",
    },
    {
      icon: "🔄",
      title: "Adaptive Processing",
      description:
        "Intelligently chunks and prioritizes data based on document structure and size.",
      benefit: "Handles research papers and long documents efficiently.",
    },
    {
      icon: "🎨",
      title: "Answer Enhancement",
      description:
        "Augments responses with real-world examples and related insights.",
      benefit: "Richer, more complete answers — without extra prompting.",
    },
    {
      icon: "🗂️",
      title: "Knowledge Management",
      description:
        "Easily set up, update, and organize multiple specialized knowledge bases.",
      benefit: "Centralized control over all your AI knowledge assets.",
    },
    {
      icon: "🤖",
      title: "Advanced RAG Engine",
      description:
        "Combines retrieval-based intelligence with generative AI for pinpoint accuracy.",
      benefit:
        "Every answer is grounded in your actual documents — not generic AI guesses.",
    },
  ];

  return (
    <section className={tabContents.ragSection}>
      <header className={tabContents.header}>
        <h2 className={tabContents.title}>RAG Chatbot — Your Intelligent Document Assistant</h2>
        <p className={tabContents.subtitle}>
          Powered by 12 specialized AI capabilities working together to read,
          understand, and respond with complete accuracy.
        </p>
      </header>

      <div className={tabContents.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={tabContents.icon}>{feature.icon}</div>
            <h3 className={tabContents.cardTitle}>{feature.title}</h3>
            <p className={tabContents.description}>{feature.description}</p>
            <p className={styles.benefit}>
              <strong>You get:</strong> {feature.benefit}
            </p>
          </div>
        ))}
      </div>

      {/* <footer className={styles.cta}>
        <h3>Experience Intelligent Document Processing</h3>
        <p>
          Upload your first document or connect your knowledge base to see the
          RAG engine in action.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primary}>Try Demo</button>
          <button className={styles.secondary}>View Docs</button>
        </div>
      </footer> */}
    </section>
  );
};

export default RagChatbotFeatures;
