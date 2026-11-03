// src/app/identity/page.js
"use client";

import React from "react";
import Link from "next/link";
import styles from "./Identity.module.css";

export default function IdentityPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.badge}>🔐 Identity</div>
        <h1 className={styles.heroTitle}>
          Your Users Stay Yours.<br />
          <span className={styles.highlight}>Always.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Every Restaurant CRM has one non-negotiable rule: my customers are mine.
          Sageion was built with that rule as the foundation, not as a feature.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>👤</div>
            <h3>The user lives in your system</h3>
            <p>
              Your CRM creates the user. Your CRM manages their password, their 
              session, their permissions. Sageion never sees any of that.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>🔑</div>
            <h3>You mint the token</h3>
            <p>
              Your login server mints the JWT. You encrypt it with the RSA public 
              key Sageion gives you. Only you know who your user is — Sageion 
              only sees an opaque, encrypted token.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>🚫</div>
            <h3>Plaintext is rejected</h3>
            <p>
              If your server ever sends an unencrypted JWT, the runtime refuses 
              it. We don't accept tokens we can read — the architectural 
              guarantee that only you hold the keys.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>📤</div>
            <h3>Nothing to migrate if you leave</h3>
            <p>
              If you stop using Sageion tomorrow, your users still exist. Their 
              passwords still work. There is no migration — because there's nothing 
              on our side to move.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Enterprise Implication</h2>
        <div className={styles.auditBox}>
          <p>
            A vendor's CISO reviewing Sageion for their downstream customers
            will ask: <em>"does Sageion own the identity of my customers?"</em>
          </p>
          <p>
            The answer is no. The identity of every customer stays in the 
            Restaurant CRM's own identity server. Sageion never becomes a 
            controller of user data — it's a router that operates on already-
            authenticated requests.
          </p>
          <p>
            This is why Restaurant CRMs choose Sageion for their premium franchise 
            tiers: the identity story is clean enough that they can ship it to 
            their most compliance-heavy customers without any additional DPA.
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>See the Identity Architecture</h2>
        <p className={styles.ctaSubtitle}>
          Book a call and we'll walk your team through the full RSA + AES-GCM 
          token flow, from keypair generation to per-tenant rotation.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/contact_us" className={styles.primaryBtn}>Book a Security Review</Link>
          <Link href="/security" className={styles.secondaryBtn}>See Security Overview</Link>
        </div>
      </section>
    </div>
  );
}