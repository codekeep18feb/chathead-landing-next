// ReusableCTASection.jsx
import React from 'react';
import styles from './ReusableCTASection.module.css';

const ReusableCTASection = ({
  // Content props
  badgeText = '🚀 Free Trial',
  title = 'Connect Your APIs Today.',
  highlightedText = 'Launch Tomorrow.',
  subtitle = 'See exactly how your API connects to our platform. No commitment, no engineering overhead.',
  primaryButtonText = 'Start Free Trial',
  secondaryButtonText = 'Book a Demo',

  // Trust signals
  trustSignals = [
    '🔒 Secure & Encrypted',
    '⚡ Instant Setup',
    '💳 No Credit Card Required',
  ],

  // Styling overrides
  sectionClassName = '',
  contentClassName = '',
  titleClassName = '',
  subtitleClassName = '',
  buttonClassName = '',
  outlineButtonClassName = '',
  trustSignalsClassName = '',

  // Event handlers
  onPrimaryClick = () => console.log('Primary CTA clicked'),
  onSecondaryClick = () => console.log('Secondary CTA clicked'),

  // Custom children
  children = null,
}) => {
  return (
    <section
      className={`${styles.ctaGlowSection} ${sectionClassName}`}
      data-testid="cta-section"
    >
      {/* Animated background orbs */}
      <div className={styles.ctaGlowOrb} aria-hidden="true" />
      <div className={styles.ctaGlowOrb2} aria-hidden="true" />

      <div className={`${styles.ctaContent} ${contentClassName}`}>
        {/* Badge with pulse ring */}
        <div className={styles.ctaPulseRing}>
          <span className={styles.ctaPulseText}>{badgeText}</span>
        </div>

        {/* Title */}
        <h2 className={`${styles.ctaGlowTitle} ${titleClassName}`}>
          {title}
          <br />
          <span className={styles.ctaGradientText}>{highlightedText}</span>
        </h2>

        {/* Subtitle */}
        <p className={`${styles.ctaGlowSubtitle} ${subtitleClassName}`}>
          {subtitle}
        </p>

        {/* Buttons */}
        <div className={styles.ctaGlowButtons}>
          <button
            className={`${styles.ctaGlowButton} ${buttonClassName}`}
            onClick={onPrimaryClick}
            aria-label={primaryButtonText}
          >
            {primaryButtonText}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            className={`${styles.ctaOutlineButton} ${outlineButtonClassName}`}
            onClick={onSecondaryClick}
            aria-label={secondaryButtonText}
          >
            {secondaryButtonText}
          </button>
        </div>

        {/* Trust signals */}
        <div className={`${styles.ctaTrustSignals} ${trustSignalsClassName}`}>
          {trustSignals.map((signal, index) => (
            <span key={index}>{signal}</span>
          ))}
        </div>

        {/* Optional custom children */}
        {children}
      </div>
    </section>
  );
};

export default ReusableCTASection;