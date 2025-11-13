// src/app/components/SolveSection.js
import React from "react";
import styles from "./SolveSection.module.css";
import Image from "next/image";
import adminChat from "../../../public/Asset/magicChatImg/adminChat.png";
import credential from "../../../public/Asset/magicChatImg/credential.png";
import clinetChat from "../../../public/Asset/magicChatImg/clinetChatModal_full.png";

const SolveSection = () => {
  return (
    <section className={styles["solve-section"]}>
      <div className={styles["solve-content"]}>
        <h1>What do we Solve</h1>
        <p>
          No-code chatbot platform for Lead Gen, AI answers & Live Agent Chat —
          "All in one".
        </p>
        {/* <div className="email-input">
                    <input type="email" placeholder="Enter your email id" />
                    <button>Get Started Free</button>
                </div> */}
        <div className={styles["email-input"]}>
          <a href="https://admin.magicchat.io/schedule_demo">
            <button>Schedule Demo</button>
          </a>
        </div>
      </div>
      <div className={styles["solve-image"]}>
        <Image src={adminChat} alt="adminChat" />
        <Image src={credential} alt="credential" />
        <Image src={clinetChat} alt="clinetChat" />
      </div>
    </section>
  );
};

export default SolveSection;
