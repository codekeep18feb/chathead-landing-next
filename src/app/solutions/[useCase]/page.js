// src/app/solutions/[useCase]/page.js
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { solutionList } from "../../data/solutionList";
import styles from "./SolutionDetail.module.css";

export function generateStaticParams() {
  const allItems = [...solutionList.useCase, ...solutionList.company_type];
  return allItems.map((item) => ({
    useCase: item.slug,
  }));
}

export function generateMetadata({ params }) {
  const { useCase } = params;
  const allItems = [...solutionList.useCase, ...solutionList.company_type];
  const pageData = allItems.find((item) => item.slug === useCase);

  if (!pageData) return { title: "Not Found | Sageion" };

  return {
    title: `${pageData.subHeading} | Sageion`,
    description: pageData.text?.slice(0, 160) || "",
  };
}

export default function SolutionDetailPage({ params }) {
  const { useCase } = params;

  const allItems = [...solutionList.useCase, ...solutionList.company_type];
  const pageData = allItems.find((item) => item.slug === useCase);

  if (!pageData) {
    notFound();
  }

  // Determine the "back" link based on which list the item came from
  const isCompanyType = solutionList.company_type.some(
    (item) => item.slug === useCase
  );
  const backHref = isCompanyType ? "/solutions#who-we-serve" : "/solutions";
  const backLabel = isCompanyType
    ? "Back to Who We Serve"
    : "Back to All Solutions";

  return (
    <div className={styles.page}>
      {/* ============== HERO ============== */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href={backHref} className={styles.backLink}>
            ← {backLabel}
          </Link>

          <div className={styles.heroIcon}>
            {pageData.iconType === "svg" ? (
              <img
                src={`/${pageData.icon}`}
                alt={pageData.subHeading}
                width={56}
                height={56}
              />
            ) : (
              <span className={styles.heroEmoji}>{pageData.icon}</span>
            )}
          </div>

          <h1 className={styles.heroTitle}>{pageData.subHeading}</h1>
          <p className={styles.heroLead}>{pageData.text}</p>
        </div>
      </section>

      {/* ============== THE PROBLEM ============== */}
            {/* ============== THE PROBLEM ============== */}
      {pageData.problem && (
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>😓 The Problem</span>
              <h2 className={styles.sectionTitle}>
                What {pageData.subHeading} teams face today
              </h2>
            </div>
            <p className={styles.problemText}>{pageData.problem}</p>
          </div>
        </section>
      )}

      {/* ============== HOW IT WORKS ============== */}
      {pageData.howItWorks && pageData.howItWorks.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>⚙️ How It Works</span>
              <h2 className={styles.sectionTitle}>
                How Sageion solves it
              </h2>
              <p className={styles.sectionSubtitle}>
                Every step below is a capability already shipping in the runtime —
                not a roadmap item.
              </p>
            </div>

            <ol className={styles.howItWorksList}>
              {pageData.howItWorks.map((step, idx) => (
                <li key={idx} className={styles.howItWorksStep}>
                  <div className={styles.stepNumber}>{idx + 1}</div>
                  <div className={styles.stepContent}>
                    <p className={styles.stepText}>{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ============== WORKFLOW EXAMPLE ============== */}
      {pageData.workflowExample && (
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>🎯 Real Workflow</span>
              <h2 className={styles.sectionTitle}>
                {pageData.workflowExample.title}
              </h2>
            </div>

            <div className={styles.workflowCard}>
              <div className={styles.workflowCardHeader}>
                <span className={styles.workflowDot} />
                <span className={styles.workflowDot} />
                <span className={styles.workflowDot} />
                <span className={styles.workflowCardTitle}>
                  Execution trace
                </span>
              </div>
              <ol className={styles.workflowSteps}>
                {pageData.workflowExample.steps.map((step, idx) => (
                  <li key={idx} className={styles.workflowStep}>
                    <span className={styles.workflowStepArrow}>→</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className={styles.workflowCardFooter}>
                <span className={styles.workflowFooterText}>
                  Every step is deterministic — no LLM in the data path.
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============== OUTCOMES ============== */}
      {pageData.outcomes && pageData.outcomes.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>✨ Outcomes</span>
              <h2 className={styles.sectionTitle}>
                What you get
              </h2>
            </div>

            <div className={styles.outcomesGrid}>
              {pageData.outcomes.map((outcome, idx) => (
                <div key={idx} className={styles.outcomeCard}>
                  <span className={styles.outcomeCheck}>✓</span>
                  <p className={styles.outcomeText}>{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============== CTA ============== */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>
            Ready to build {pageData.subHeading.toLowerCase()} on Sageion?
          </h2>
          <p className={styles.ctaSubtitle}>
            Book a call and we'll walk through the exact workflows for your use case,
            using your own APIs — no commitment, no procurement cycle.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact_us" className={styles.ctaPrimaryBtn}>
              Book a Demo →
            </Link>
            <Link href="/pricing" className={styles.ctaSecondaryBtn}>
              See Pricing
            </Link>
          </div>
          <div className={styles.ctaTrust}>
            <span>🔒 You own your users &amp; auth</span>
            <span>⚡ 3-minute setup</span>
            <span>🌟 Free forever tier</span>
          </div>
        </div>
      </section>
    </div>
  );
}