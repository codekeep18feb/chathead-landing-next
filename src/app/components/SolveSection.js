// src/app/components/SolveSection.js
import React from "react";

const SolveSection = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section className="solve-section">
      <div className="solve-content">
        <h1>What do we Solve</h1>
        <p>
          No-code chatbot platform for Lead Gen, AI answers & Live Agent
          Chat — "All in one".
        </p>
        {/* <div className="email-input">
                    <input type="email" placeholder="Enter your email id" />
                    <button>Get Started Free</button>
                </div> */}
        <div className="email-input">
          <a href="http://dev.addchat.tech/schedule_demo">
            <button>Schedule Demo</button>
          </a>
        </div>
      </div>
      <div className="solve-image">
        <img
          src={`${basePath}/Asset/banner_img_chat.png`}
          alt="Chat Solution"
        />
      </div>
    </section>
  );
};

export default SolveSection;
