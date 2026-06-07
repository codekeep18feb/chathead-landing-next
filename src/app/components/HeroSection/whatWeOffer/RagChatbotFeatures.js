import React from "react";
import sharedStyles from "./SharedFeatureCard.module.css";
import tabContents from "./TabContent.module.css";
import {
  FaSearch,
  FaGlobe,
  FaBullseye,
  FaChartLine,
  FaCheckDouble,
  FaBolt,
  FaBrain,
  FaListUl,
  FaSync,
  FaPaintBrush,
  FaFolderOpen,
  FaRobot,
} from "react-icons/fa";

const RagChatbotFeatures = () => {
  const features = [
    {
      icon: <FaSearch />,
      title: "Smart Document Understanding",
      description:
        "Understands PDFs, Word files, and web pages using advanced text extraction and reasoning.",
      benefit:
        "Upload any file and get accurate, human-like answers instantly — no manual reading required.",
    },
    {
      icon: <FaGlobe />,
      title: "Multi-Source Intelligence",
      description:
        "Retrieves information from websites, sitemaps, and uploaded documents together.",
      benefit:
        "Delivers unified, comprehensive answers from all your knowledge sources.",
    },
    {
      icon: <FaBullseye />,
      title: "Domain-Aware Expertise",
      description:
        "Automatically adapts to scientific, technical, and business topics.",
      benefit: "Get expert-level insights tailored to your domain — instantly.",
    },
    {
      icon: <FaChartLine />,
      title: "Confidence Scoring",
      description:
        "Displays accuracy confidence for every response, suggesting alternatives when uncertain.",
      benefit: "You always know when to trust an answer — and when to verify.",
    },
    {
      icon: <FaCheckDouble />,
      title: "Data Validation",
      description:
        "Cross-verifies numbers, statistics, and percentages from original sources.",
      benefit: "Reliable, fact-checked responses you can depend on.",
    },
    {
      icon: <FaBolt />,
      title: "Intent Recognition",
      description:
        "Understands user intent and seamlessly routes complex or sensitive queries to live support.",
      benefit: "Smooth, human fallback when AI can't help — no friction.",
    },
    {
      icon: <FaBrain />,
      title: "Context-Aware Memory",
      description:
        "Maintains distinct knowledge bases per project, with isolated context.",
      benefit: "Keeps conversations focused and prevents data overlap.",
    },
    {
      icon: <FaListUl />,
      title: "Structured Response Generation",
      description:
        "Organizes answers into bullet lists, steps, or formatted outputs automatically.",
      benefit:
        "Readable, actionable responses — not just plain text dumps.",
    },
    {
      icon: <FaSync />,
      title: "Adaptive Processing",
      description:
        "Intelligently chunks and prioritizes data based on document structure and size.",
      benefit: "Handles research papers and long documents efficiently.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Answer Enhancement",
      description:
        "Augments responses with real-world examples and related insights.",
      benefit: "Richer, more complete answers — without extra prompting.",
    },
    {
      icon: <FaFolderOpen />,
      title: "Knowledge Management",
      description:
        "Easily set up, update, and organize multiple specialized knowledge bases.",
      benefit: "Centralized control over all your AI knowledge assets.",
    },
    {
      icon: <FaRobot />,
      title: "Advanced RAG Engine",
      description:
        "Combines retrieval-based intelligence with generative AI for pinpoint accuracy.",
      benefit:
        "Every answer is grounded in your actual documents — not generic AI guesses.",
    },
  ];

  return (
    <section className={tabContents.tabContentsWarp}>
      <header className={tabContents.header}>
        <h2 className={tabContents.title}>RAG Chatbot — Your Intelligent Document Assistant</h2>
        <p className={tabContents.subtitle}>
          Powered by 12 specialized AI capabilities working together to read,
          understand, and respond with complete accuracy.
        </p>
      </header>

      <div className={sharedStyles.gridContainer}>
        {features.map((feature, index) => (
          <div key={index} className={sharedStyles.card}>
            {/* Glass Overlay */}
            <div className={sharedStyles.glassOverlay}></div>
            
            {/* Shine Effect */}
            <div className={sharedStyles.shine}></div>
            
            {/* Corner Accents */}
            <div className={sharedStyles.cornerAccent}></div>
            
            {/* Icon with Column Layout */}
            <div className={sharedStyles.iconWrapper}>
              <div className={sharedStyles.icon}>{feature.icon}</div>
            </div>
            
            {/* Title */}
            <h3 className={tabContents.cardTitle}>{feature.title}</h3>
            
            {/* Description */}
            <p className={tabContents.description}>{feature.description}</p>
            
            {/* Benefit */}
            <p className={sharedStyles.benefit}>
              <strong>✨ You get:</strong> {feature.benefit}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RagChatbotFeatures;