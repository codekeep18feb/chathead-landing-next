// src/app/partners/page.js
"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Partners.module.css";

const PARTNER_TYPES = [
  {
    id: "implementation",
    icon: "🛠️",
    title: "Implementation Partner",
    description:
      "You deploy Sageion inside your clients' systems and own the integration work.",
    idealFor: "Consultancies, agencies, system integrators",
  },
  {
    id: "technology",
    icon: "🔌",
    title: "Technology Partner",
    description:
      "You build connectors, operations, or integrations that extend the runtime.",
    idealFor: "API vendors, platform builders, vertical SaaS",
  },
  {
    id: "referral",
    icon: "🤝",
    title: "Referral Partner",
    description:
      "You introduce us to Restaurant CRMs or franchise networks you work with.",
    idealFor: "Sales advisors, industry consultants",
  },
  {
    id: "reseller",
    icon: "📦",
    title: "Reseller / White-label",
    description:
      "You bundle Sageion into your own product or resell it under your brand.",
    idealFor: "Restaurant CRMs, POS platforms, franchise networks",
  },
];

const COMPANY_SIZES = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-1000 employees",
  "1000+ employees",
];

const REGIONS = [
  "India",
  "United States",
  "United Kingdom",
  "Middle East",
  "Southeast Asia",
  "Europe",
  "Australia",
  "Other",
];

const REVENUE_RANGES = [
  "Pre-revenue",
  "$0-$100K ARR",
  "$100K-$1M ARR",
  "$1M-$10M ARR",
  "$10M+ ARR",
];

export default function PartnersPage() {
  const [selectedType, setSelectedType] = useState("implementation");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    website: "",
    companySize: "",
    region: "",
    revenue: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // ⭐ ENDPOINT TODO: replace this block with a real POST
    //
    //   await fetch("/api/partners", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       partner_type: selectedType,
    //       ...formData,
    //     }),
    //   });
    //
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✅</div>
          <h1 className={styles.successTitle}>You're in the pipeline.</h1>
          <p className={styles.successText}>
            Thanks, {formData.name || "friend"}. We've received your application. Our partnerships team
            reviews every submission within two business days. You'll hear from us at{" "}
            <strong>{formData.email}</strong>.
          </p>
          <div className={styles.successActions}>
            <Link href="/" className={styles.secondaryBtn}>
              Back to Home
            </Link>
            <Link href="/platform/connectors" className={styles.primaryBtn}>
              Explore the Connector Framework →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>🤝 Partner Program</div>
        <h1 className={styles.heroTitle}>
          Build With Us.
          <br />
          <span className={styles.highlight}>Not Just On Us.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Sageion is the runtime layer powering the next generation of Restaurant
          CRMs and franchise platforms. If you're building in this space — as an
          integrator, a connector vendor, or a reseller — we want to hear from you.
        </p>
      </section>

      {/* ─── PARTNER TYPES ─── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Which type of partner are you?</h2>
          <p className={styles.sectionSubtitle}>
            Pick the one that fits best. You can always change it in the conversation.
          </p>
        </div>

        <div className={styles.typesGrid}>
          {PARTNER_TYPES.map((type) => (
            <button
              key={type.id}
              type="button"
              className={`${styles.typeCard} ${selectedType === type.id ? styles.typeCardActive : ""}`}
              onClick={() => setSelectedType(type.id)}
            >
              <div className={styles.typeIcon}>{type.icon}</div>
              <h3 className={styles.typeTitle}>{type.title}</h3>
              <p className={styles.typeDescription}>{type.description}</p>
              <div className={styles.typeIdealFor}>
                <strong>Ideal for:</strong> {type.idealFor}
              </div>
              {selectedType === type.id && (
                <div className={styles.typeCheck}>✓ Selected</div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ─── APPLICATION FORM ─── */}
      <section className={styles.section}>
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Tell us about yourself</h2>
            <p className={styles.formSubtitle}>
              Every field below is optional except name and email. We read every
              submission — no bot filter, no CRM gate.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Row 1: Name & Email */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Sarah Chen"
                  value={formData.name}
                  onChange={handleChange("name")}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Work Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="sarah@yourcrm.com"
                  value={formData.email}
                  onChange={handleChange("email")}
                  required
                />
              </div>
            </div>

            {/* Row 2: Company & Role */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Company</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="FranchiseOS"
                  value={formData.company}
                  onChange={handleChange("company")}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Your Role</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Head of Partnerships"
                  value={formData.role}
                  onChange={handleChange("role")}
                />
              </div>
            </div>

            {/* Row 3: Website */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Company Website</label>
              <input
                type="url"
                className={styles.input}
                placeholder="https://yourcrm.com"
                value={formData.website}
                onChange={handleChange("website")}
              />
            </div>

            {/* Row 4: Company Size, Region, Revenue */}
            <div className={styles.formRowThree}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Company Size</label>
                <select
                  className={styles.select}
                  value={formData.companySize}
                  onChange={handleChange("companySize")}
                >
                  <option value="">Select...</option>
                  {COMPANY_SIZES.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Region</label>
                <select
                  className={styles.select}
                  value={formData.region}
                  onChange={handleChange("region")}
                >
                  <option value="">Select...</option>
                  {REGIONS.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Revenue Range</label>
                <select
                  className={styles.select}
                  value={formData.revenue}
                  onChange={handleChange("revenue")}
                >
                  <option value="">Select...</option>
                  {REVENUE_RANGES.map((rev) => (
                    <option key={rev} value={rev}>{rev}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 5: Message */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                What would you like to build with Sageion?
              </label>
              <textarea
                className={styles.textarea}
                rows={5}
                placeholder="We're a Petpooja-tier CRM with 500 restaurant clients. We want to ship an AI agent to our top 50 franchise customers. Looking for a white-label runtime layer..."
                value={formData.message}
                onChange={handleChange("message")}
              />
              <div className={styles.textareaHint}>
                Feel free to be specific — technical details, use cases, or existing
                partner relationships all help us route your inquiry correctly.
              </div>
            </div>

            {/* Submit */}
            <div className={styles.formActions}>
              <div className={styles.formActionsLeft}>
                <span className={styles.formPrivacy}>
                  🔒 We never share your data with third parties.
                </span>
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Application →"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ─── WHY PARTNER WITH US ─── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why partner with Sageion?</h2>
        </div>

        <div className={styles.reasonsGrid}>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🚀</div>
            <h3>The category is early</h3>
            <p>
              Every Restaurant CRM wants to ship AI. Almost none have the runtime
              to do it. Partners who move early define the category.
            </p>
          </div>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🛡️</div>
            <h3>Built for their buyers</h3>
            <p>
              Zero-data by default. Per-tenant secrets. Encrypted tokens. The
              things a Restaurant CRM's CISO asks for are already in the runtime.
            </p>
          </div>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>📈</div>
            <h3>Aligned economics</h3>
            <p>
              Per-execution metering means every workflow you help build compounds
              into recurring revenue — for you and for Sageion.
            </p>
          </div>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🧱</div>
            <h3>Extensible by design</h3>
            <p>
              Connectors, operations, and workflows are schema-driven. Your
              integrations ship without touching the admin UI.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Not sure which type you are?</h2>
          <p className={styles.ctaSubtitle}>
            Submit the form anyway. Our partnerships lead will figure out the best
            shape together — most partners land in one of the four types above
            after a single conversation.
          </p>
          <div className={styles.ctaButtons}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={styles.primaryBtn}
            >
              Apply Now
            </button>
            <Link href="/contact_us" className={styles.secondaryBtn}>
              Contact Us Instead
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}