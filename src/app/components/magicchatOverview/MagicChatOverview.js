// src/app/components/magicchatOverview/MagicChatOverview.js
"use client";
import React from "react";
import styles from "./MagicChatOverview.module.css";

import OverviewIntro from "./OverviewIntro";
import PlatformFeatures from "./PlatformFeatures";
import ProblemsSolved from "./ProblemsSolved";
import Differentiators from "./Differentiators";
import TargetAudience from "./TargetAudience";
import HowItWorks from "./HowItWorks";
import DataSecurity from "./DataSecurity";
import Scalability from "./Scalability";
import ExpectedResults from "./ExpectedResults";
import PricingPlans from "./PricingPlans";
import RoadmapNext from "./RoadmapNext";
import WhyChooseNow from "./WhyChooseNow";

export default function MagicChatOverview() {
  return (
    <section className={styles.overviewWrapper}>
      <OverviewIntro />
      <PlatformFeatures />
      <ProblemsSolved />
      <Differentiators />
      <TargetAudience />
      <HowItWorks />
      <DataSecurity />
      <Scalability />
      <ExpectedResults />
      <PricingPlans />
      <RoadmapNext />
      <WhyChooseNow />
    </section>
  );
}
