import React from "react";
import styles from "./DataSecurity.module.css";

export default function DataSecurity() {
  return (
    <div className={styles.section}>
      <h2>Is my data secure?</h2>
      <p>
        Absolutely. All chat data is encrypted in transit and at rest.
        MagicChat never shares or sells your data — and doesn’t train external models on it.
        You have full control over your chatbot’s training data, access levels, and chat logs.
      </p>
    </div>
  );
}
