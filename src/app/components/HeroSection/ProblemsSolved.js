import React from "react";
import styles from "./ProblemsSolved.module.css";
import { FaRegTimesCircle, FaMagic } from "react-icons/fa";
import Image from "next/image";
import HowItWorksPage from "./HowItWorksPage";

export default function ProblemsSolved() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading Section */}
        <div className={styles.grid}>
          <div className={styles.row}>
            <div className={styles.col}>
              <h2 className={styles.heading}>
                What problems do we solve — and how?
              </h2>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className={styles.grid}>
          <div className={`${styles.row} ${styles.twoColRow}`}>
            {/* Without MagicChat Card */}
            <div className={styles.col}>
              <div className={`${styles.card} ${styles.leftCard}`}>
                <div className={styles.cardImageWrapper}>
                  <div className={styles.cardImage}>
                    <Image
                      src="/images/without-magicchat.svg"
                      alt="Without MagicChat - scattered conversations, manual support, frustrated customers"
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Without MagicChat</h3>
                  <div className={styles.cardText}>
                    <ul className={styles.bullets}>
                      <li>
                        Customers don't get instant answers and end up leaving
                        your website.
                      </li>
                      <li>
                        You rely on tools like WhatsApp or email, pushing users
                        away from your product.
                      </li>
                      <li>
                        Your brand feels less trustworthy when support isn't
                        built into your product.
                      </li>
                      <li>
                        Setting up a proper chat system is expensive and
                        time-consuming for most teams.
                      </li>
                      <li>
                        All conversations stay scattered, making it hard to
                        track who said what.
                      </li>
                      <li>
                        Your team keeps repeating the same questions every day,
                        wasting precious time.
                      </li>
                      <li>
                        No clear roles or permissions — anyone can access
                        anything, creating confusion.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* With MagicChat Card */}
            <div className={styles.col}>
              <div className={`${styles.card} ${styles.rightCard}`}>
                <div className={styles.cardImageWrapper}>
                  <div className={styles.cardImage}>
                    <Image
                      src="/images/with-magicchat.svg"
                      alt="With MagicChat - unified AI-powered support, happy customers, organized system"
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>With MagicChat</h3>
                  <div className={styles.cardText}>
                    <ul className={styles.bullets}>
                      <li>
                        AI answers common questions instantly, so your team can
                        focus on real issues.
                      </li>
                      <li>
                        In-app chat keeps users inside your product instead of
                        redirecting them elsewhere.
                      </li>
                      <li>
                        Your brand feels more professional, reliable, and easy
                        to talk to.
                      </li>
                      <li>
                        One-time setup — all future changes happen from your
                        Admin panel with no code.
                      </li>
                      <li>
                        Unified Inbox puts every conversation from every website
                        in one clean place.
                      </li>
                      <li>
                        Team Collaboration lets agents work together smoothly
                        without stepping on each other.
                      </li>
                      <li>
                        RBAC makes sure only the right people can change
                        important settings.
                      </li>
                      <li>
                        Smart Human Handover brings in a real agent when AI
                        isn't 100% sure.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HowItWorksPage/>
    </section>
  );
}
