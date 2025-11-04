import React from "react";
import styles from "./WhatWeOffer.module.css";
import LiveUserChat from "./LiveUserChat";
import RuleBasedQNA from "./RuleBasedQNA";
import LeadGen from "./LeadGen";
import RagChatbotFeatures from "./RagChatbotFeatures";

const WhatWeOfferSection = () => {
  return (
    <section className={styles["WhatWeOffer-section"]}>
      <h2 className={styles.heading}>What We Offer</h2>
      <p className={styles.subheading}>
        Everything you need to turn visitors into customers — powered by AI, built for teams.
      </p>

      <LiveUserChat />
      <RuleBasedQNA />
      <LeadGen />

      <RagChatbotFeatures />
    </section>
  );
};

export default WhatWeOfferSection;
