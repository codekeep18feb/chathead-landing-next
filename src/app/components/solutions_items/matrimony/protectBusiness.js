import { useState } from "react";
import { FaHandPointRight } from "react-icons/fa6";
import proBusiStyle from "./protectBusiness.module.css";

const ProtectBusiness = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const sections = [
    {
      subheading: "Tinder-style interface with all features out of the box",
      image: `${basePath}/Asset/secureIc.png`,
      content: [
        {
          type: "p",
          text: "Smooth and user-friendly chat interface for seamless real-time communication.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Let users express themselves with emojis, stickers, and creative avatars.",
            "Suggest conversation starters based on shared interests, personalities, and messaging history.",
            "Leverage interactive message formats to show polls, quizzes, and chat-based games to create an engaging experience.",
          ],
        },
      ],
    },
    {
      subheading: "Enhanced security for business messaging",
      image: `${basePath}/Asset/protect_userIc.png`,
      content: [
        {
          type: "p",
          text: "End-to-end encryption ensures secure business communication.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Enable two-factor authentication for added security.",
            "Automatically detect and filter spam messages.",
            "Monitor and audit messages to prevent unauthorized access.",
          ],
        },
      ],
    },
  ];

  return (
    <div className={proBusiStyle.wrapper}>
      <header className={proBusiStyle.header}>
        <h1>Protect your business  with our unique solutions</h1>
        <p>Communication platform built for growth</p>
      </header>
      <section className={proBusiStyle.contentWrap}>
        {sections.map((section, secIndex) => (
          <div key={secIndex} className={proBusiStyle.contentSection}>
            <img
              src={section.image}
              alt="Banner"
              className={proBusiStyle.banner}
            />
            <h2 className={proBusiStyle.subheading}>{section.subheading}</h2>
            <div className={proBusiStyle.content}>
              {section.content.map((item, index) => {
                if (item.type === "p") {
                  return <p key={index}>{item.text}</p>;
                } else if (item.type === "group") {
                  return item.texts.map((text, subIdx) => (
                    <p
                      key={`${index}-${subIdx}`}
                      className={proBusiStyle[item.className] || ""}
                    >
                      <span className={proBusiStyle.icon}>
                        <FaHandPointRight size={18} />
                      </span>
                      {text}
                    </p>
                  ));
                }
                return null;
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProtectBusiness;
