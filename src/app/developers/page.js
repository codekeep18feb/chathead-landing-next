"use client";

import React from "react";
import styles from "./developers.module.css";

function DevelopersRootPage() {
  console.log("how many times it renders?");
  return (
    <div className={styles.platformContainer}>
      <div className={styles.platformSections}>
        <div className={styles.platformSection}>
          <h1>Developer Documentation</h1>
          <p>
            Explore our different integration modes. Each version is designed for
            a specific use case, so you can pick what best fits your product.
          </p>

          <ul>
            <li>
              <a href="/documentation">
                <h2>📘 Full Documentation</h2>
                <p>Complete reference for all features and APIs.</p>
              </a>
            </li>

            <li>
              <a
                href="https://sageion.com/documentation/instant-auth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>⚡[V1] Instant Auth + Chat </h2>
                <p>Quickest way to get started with authentication and chat built-in.</p>
              </a>
            </li>

            <li>
              <a
                href="https://sageion.com/documentation/byo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>🔐[V2] BYO Auth + Chat</h2>
                <p>
                  Bring your own authentication, pair it with chat powered by Sageion.
                </p>
              </a>
            </li>

            <li>
              <a
                href="https://sageion.com/documentation/cms-chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>📰[V3] CMS Chat</h2>
                <p>Seamlessly embed chat inside your CMS-powered site or app.</p>
              </a>
            </li>

            <li>
              <a
                href="https://sageion.com/documentation/no-auth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>💬[V4] No Auth, Chat Only</h2>
                <p>Lightweight option: embed chat without requiring authentication.</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DevelopersRootPage;
