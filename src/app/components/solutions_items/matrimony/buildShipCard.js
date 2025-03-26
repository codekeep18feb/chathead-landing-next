import { useState } from "react";
import { MdOutlineSecurity } from "react-icons/md";
import proBusiStyle from "./protectBusiness.module.css";

const BuildShipCard = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const sections = [
    {
      subheading: "UI kits",
      icon: <MdOutlineSecurity/>,
      content: [
        {
          type: "p",
          text: "Quickly implement chat functionality with UI Kits that include built-in business logic and a customizable user interface.",
        },
      ],
    },
    {
      subheading: "Data retention",
      icon: <MdOutlineSecurity/>,
      content: [
        {
          type: "p",
          text: "Retain chat histories securely for compliance and user satisfaction, allowing users to revisit and cherish their meaningful conversations. ",
        },
      ],
    },
    {
      subheading: "Security",
      icon: <MdOutlineSecurity/>,
      content: [
        {
          type: "p",
          text: "Enhance user interactions with intelligent suggestions and responses, making conversations smoother and more engaging.",
        },
      ],
    },
    {
      subheading: "Bots",
      icon: <MdOutlineSecurity/>,
      content: [
        {
          type: "p",
          text: "Automate routine tasks and provide instant support with chatbots to reduce operational workload.",
        },
      ],
    },
    {
      subheading: "Rich media sharing",
      icon: <MdOutlineSecurity/>,
      content: [
        {
          type: "p",
          text: "Allow users to share photos, videos, and voice messages, enriching their interactions and making connections more personal.",
        },
      ],
    },
    {
      subheading: "Tinder-style interface with all features out of the box",
      icon: <MdOutlineSecurity/>,
      content: [
        {
          type: "p",
          text: "Smooth and user-friendly chat interface for seamless real-time communication.",
        },
      ],
    },
    
  ];

  return (
    <div className={proBusiStyle.wrapper}>
      <header className={proBusiStyle.header}>
        <h1>Build, ship and manage chat at scale</h1>
        <p>Communication platform built for growth</p>
      </header>
      <section className={proBusiStyle.cardsWrap}>
        {sections.map((section, secIndex) => (
          <div key={secIndex} className={proBusiStyle.card}>
            <div className={proBusiStyle.heading_icon}>
              <span className={proBusiStyle.icons}>
              {section.icon}
              </span>
              <h3>{section.subheading}</h3>
            </div>
            <div className={proBusiStyle.content}>
              {section.content.map((item, index) => {
                if (item.type === "p") {
                  return <p key={index}>{item.text}</p>;
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

export default BuildShipCard;
