import React from "react";
import styles from "./Differentiators.module.css";

export default function Differentiators() {
  return (
    <div className={`${styles.section} ${styles.split}`}>
      <div>
        <h2>How are we different from others?</h2>
        {/* <div className={styles.offer_warp}>
          <div className={styles.offerCards}>
            <div className={styles.offerCards_content}>
              <span>1</span>
              <h4>Built for Teams</h4>
              <p>
                Multi-admin collaboration with live routing and permissions.
              </p>
            </div>
            <div className={styles.offerCards_icons}>Icon</div>
          </div>

          <div className={styles.offerCards}>
            <div className={styles.offerCards_content}>
              <span>2</span>
              <h4>True AI, Real Data</h4>
              <p>Trained from your actual content, not pre-filled templates.</p>
            </div>
            <div className={styles.offerCards_icons}>Icon</div>
          </div>

          <div className={styles.offerCards}>
            <div className={styles.offerCards_content}>
              <span>3</span>
              <h4>Your Data Stays Yours</h4>
              <p>
                Private by design, never shared or used for external training.
              </p>
            </div>
            <div className={styles.offerCards_icons}>Icon</div>
          </div>

          <div className={styles.offerCards}>
            <div className={styles.offerCards_content}>
              <span>4</span>
              <h4>Set Up in Minutes</h4>
              <p>
                Connect your site, upload docs, and go live — no developers
                needed.
              </p>
            </div>
            <div className={styles.offerCards_icons}>Icon</div>
          </div>

          <div className={styles.offerCards}>
            <div className={styles.offerCards_content}>
              <span>4</span>
              <h4>Lightweight and Fast</h4>
              <p>Optimized for performance, even on low-bandwidth websites.</p>
            </div>
            <div className={styles.offerCards_icons}>Icon</div>
          </div>
        </div> */}
        <ul className={styles.bullets}>
          <li>👨‍👩‍👧 <b>Built for Teams</b> — Multi-admin collaboration with live routing and permissions.</li>
          <li>🤖 <b>True AI, Real Data</b> — Trained from your actual content, not pre-filled templates.</li>
          <li>🔒 <b>Your Data Stays Yours</b> — Private by design, never shared or used for external training.</li>
          <li>⚡ <b>Set Up in Minutes</b> — Connect your site, upload docs, and go live — no developers needed.</li>
          <li>🪶 <b>Lightweight and Fast</b> — Optimized for performance, even on low-bandwidth websites.</li>
        </ul>
      </div>
    </div>
  );
}
