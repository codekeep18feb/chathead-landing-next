import React from 'react';
import Image from 'next/image';
import styles from './AIAgentsSection.module.css';

// Import your icons (replace with your actual icon paths)
// import insightsIcon from '../../../public/Asset/insights-icon.svg';
// import omnichannelIcon from '../../../public/Asset/omnichannel-icon.svg';
// import classificationIcon from '../../../public/Asset/classification-icon.svg';
// import copilotIcon from '../../../public/Asset/copilot-icon.svg';

const AIAgentsSection = () => {
  const features = [
    {
    //   icon: insightsIcon,
      title: "AI-Surfaced Insights",
      tagline: "Fix gaps before they become problems.",
      description: "Uncover insights from all support interactions, detect knowledge gaps, and receive actionable recommendations to generate articles, optimize AI workflows, and lower costs.",
      accentColor: "#6366f1"
    },
    {
    //   icon: omnichannelIcon,
      title: "Omnichannel Agent",
      tagline: "Resolve issues instantly across any channel.",
      description: "Deliver personalized, human-like, 24/7 AI customer support across chat, email, voice, and more—all from one customer experience AI platform.",
      accentColor: "#8b5cf6"
    },
    {
    //   icon: classificationIcon,
      title: "Smarter Ticket Classification",
      tagline: "Get every ticket to the right agent, fast.",
      description: "Enhance ticket classification with pre-built or custom models to add context, prioritize cases, and tag tickets automatically—driving faster, more efficient responses.",
      accentColor: "#ec4899"
    },
    {
    //   icon: copilotIcon,
      title: "Agentic AI Copilot",
      tagline: "Empower human agents with an AI copilot.",
      description: "Give agents real-time insights, next steps, and intelligent responses with AI workflows—all without ever leaving your helpdesk.",
      accentColor: "#06b6d4"
    }
  ];

  return (
    <section className={styles['ai-agents-section']}>
      {/* Background decoration */}
      <div className={styles['section-bg']}>
        <div className={styles['gradient-orb-1']}></div>
        <div className={styles['gradient-orb-2']}></div>
      </div>

      <div className={styles['container']}>
        {/* Header */}
        <div className={styles['section-header']}>
          <div className={styles['header-badge']}>AI AGENTS FOR EVERY CUSTOMER MOMENT</div>
          <h2>
            From insights to resolution—
            <br />
            <span className={styles['gradient-text']}>AI agents that do it all</span>
          </h2>
          <p className={styles['subtitle']}>
            Deploy AI agents that collaborate across your customer journey by identifying, solving, 
            classifying, and supporting your team without added overhead.
          </p>
        </div>

        {/* Features Grid - 2x2 Layout */}
        <div className={styles['features-grid']}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={styles['feature-card']}
              style={{ 
                borderTopColor: feature.accentColor,
                '--accent-color': feature.accentColor 
              }}
            >
              <div className={styles['card-icon-wrapper']}>
                <div 
                  className={styles['card-icon-bg']}
                  style={{ background: `${feature.accentColor}15` }}
                >
                  <Image src={feature.icon} alt={feature.title} width={40} height={40} />
                </div>
              </div>
              <h3>{feature.title}</h3>
              <div 
                className={styles['card-tagline']}
                style={{ color: feature.accentColor }}
              >
                {feature.tagline}
              </div>
              <p className={styles['card-description']}>{feature.description}</p>
              
              {/* Hover arrow indicator */}
              <div className={styles['card-hover-effect']}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles['section-footer']}>
          <div className={styles['stats-row']}>
            <div className={styles['stat-item']}>
              <span className={styles['stat-number']}>90%</span>
              <span className={styles['stat-label']}>Accuracy & coverage</span>
            </div>
            <div className={styles['stat-item']}>
              <span className={styles['stat-number']}>50%</span>
              <span className={styles['stat-label']}>Reduction in resolution time</span>
            </div>
            <div className={styles['stat-item']}>
              <span className={styles['stat-number']}>168%</span>
              <span className={styles['stat-label']}>ROI in 6 months</span>
            </div>
          </div>
          
          <button className={styles['cta-button']}>
            Explore all features
            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIAgentsSection;