import React from "react";
import styles from "./WhyChooseNow.module.css";

export default function WhyChooseNow() {
  return (
    <section className={styles.chooesWrap}>
      <div>
        <img src="/Asset/magicChatImg/chooseMagicchat.png"/>
      </div>
      <div className={`${styles.section} ${styles.final}`}>
        <h2>Why choose Sageion now?</h2>
        <p>
          Because customer conversations are evolving — and AI is now the
          standard. Sageion gives you enterprise-grade conversational
          intelligence that’s easy to deploy, affordable to scale, and designed
          for real human outcomes.
        </p>
        <h3>
          💫 Start today, and let AI work for you — not the other way around.
        </h3>

        <a href="https://admin.sageion.com/signup" className={styles.linkWrap}>
  <button className={styles.subscribeBtn}>Try Sageion Free →</button>
</a>

      </div>
    </section>
  );
}
