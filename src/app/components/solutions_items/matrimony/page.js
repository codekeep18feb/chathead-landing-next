"use client";
import Head from "next/head";
import { useRef } from "react";
import matrimonySty from "./matrimony.module.css";
import Accordion from "./accordion";
import { FaHandPointRight } from "react-icons/fa6";
import Carousel from "./carousel";
import ProtectBusiness from "./protectBusiness";
import BuildShipCard from "./buildShipCard";

export default function Matrimy() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const sections = {
    "Messaging experience": {
      ref: useRef(null),
      subheading: "Tinder-style interface with all features out of the box",
      className: "messaging-experience",
      image: `${basePath}/Asset/messaging_experience.png`,

      content: [
        {
          type: "p",
          text: "Smooth and user-friendly chat interface for seamless real-time communication.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Let users express themselves with emojis, stickers, and creative avatars",
            "Suggest conversation starters based on shared interests, personalities, and messaging history.",
            "Leverage interactive message formats to show polls, quizzes, and chat-based games to create an engaging experience.",
          ],
        },
      ],
    },
    "Voice and video calling": {
      ref: useRef(null),
      subheading: "Tinder-style interface with all features out of the box",
      className: "voice-video",
      image: `${basePath}/Asset/voice_video.png`,

      content: [
        {
          type: "p",
          text: "Provide a more immersive and interactive way for users to get to know each other and build relationships.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Video calling helps users to verify identity and makes it harder for catfishers to operate.",
            "Alleviate pre-date nerves by providing a face-time like experience within your app interface.",
            "Low latency and HD quality videos for a better user experience and retention.",
          ],
        },
      ],
    },
    "Scale for millions": {
      ref: useRef(null),
      subheading: "Always available, always reliable",
      className: "scale-millions",
      image: `${basePath}/Asset/scale_millions.png`,
      content: [
        {
          type: "p",
          text: "Scalable and reliable infrastructure that can handle large user bases and high traffic.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Uninterrupted service even in peak usage hours. Our system can support up to a million concurrent users.",
            "Globally distributed network of servers, ensures low latency and lightning-fast message delivery.",
            "Eliminate the need for expensive in-house DevOps teams and server management.",
          ],
        },
      ],
    },
    "Moderation control": {
      ref: useRef(null),
      subheading: "Advanced content moderation",
      className: "moderation-control",
      image: `${basePath}/Asset/moderation_control.png`,
      content: [
        { type: "p", text: "Our AI mimics human-like conversation patterns." },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Uninterrupted service even in peak usage hours. Our system can support up to a million concurrent users.",
            "Globally distributed network of servers, ensures low latency and lightning-fast message delivery.",
            "Eliminate the need for expensive in-house DevOps teams and server management.",
          ],
        },
      ],
    },
    "Monetize chat": {
      ref: useRef(null),
      subheading: "Maximize revenue with chat",
      className: "monetize-chat",
      image: `${basePath}/Asset/monetize_chat.png`,
      content: [
        {
          type: "p",
          text: "AddChat Bots help automate repetitive tasks efficiently.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Uninterrupted service even in peak usage hours. Our system can support up to a million concurrent users.",
            "Globally distributed network of servers, ensures low latency and lightning-fast message delivery.",
            "Eliminate the need for expensive in-house DevOps teams and server management.",
          ],
        },
      ],
    },
  };

  const accordionItems = [
    {
      title: "AI powered insights",
      subheading: "Gain deep insights into user behavior",
      content:
        "Analyze chat usage to understand how users interact. Create detailed user profiles based on chat history and sentiment analysis. Develop user funnels to track and optimize user journeys.",
      image: `${basePath}/Asset/ai_power.png`,
    },
    {
      title: "Notifications  ",
      subheading: "Gain deep insights into user behavior ",
      content:
        "Analyze chat usage to understand how users interact. Create detailed user profiles based on chat history and sentiment analysis. Develop user funnels to track and optimize user journeys. ",
      image: `${basePath}/Asset/notification_img.png`,
    },
    {
      title: "Webhooks",
      subheading: "Gain deep insights into user behavior",
      content:
        "Analyze chat usage to understand how users interact. Create detailed user profiles based on chat history and sentiment analysis. Develop user funnels to track and optimize user journeys.",
      image: `${basePath}/Asset/webhooks_img.png`,
    },
  ];
  // Scroll to section function
  const handleScroll = (section) => {
    sections[section].ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className={matrimonySty.container}>
        <Head>
          <title>AddChat for Matrimonial</title>
          <meta
            name="description"
            content="Seamless, secure messaging for matrimonial platforms"
          />
        </Head>
        {/* banner section */}
        <div className={matrimonySty.banner}>
          <div className={matrimonySty.banner_content}>
            <div className={matrimonySty.datingIc}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 0C21.7323 0 28 6.26773 28 14C28 21.7323 21.7323 28 14 28C6.26773 28 0 21.7323 0 14C0 6.26773 6.26773 0 14 0ZM11.5402 12.612C15.5433 11.2328 14.1285 6.69977 14.5338 6.83484C17.1549 8.11617 20.1015 10.9118 20.1015 15.1052C20.1015 18.3198 17.6088 21.1619 13.9863 21.1619C10.7723 21.3079 8.04945 18.8218 7.90344 15.6084C7.7525 12.2763 10.8648 9.84594 10.8648 10.4459C10.8921 10.7871 11.1825 12.612 11.5402 12.612Z"
                  fill="#2C2424"
                />
              </svg>

              <span>Dating</span>
            </div>
            <h3>
              Create a safe, secure and positive messaging environment for your
              users
            </h3>
            <p>
              Messaging experience that seamlessly scales from thousands to
              millions of users. Leverage AI-powered moderation to prevent and
              manage inappropriate user behaviors.
            </p>
            <button className={matrimonySty.demo}>Schedule a demo</button>
          </div>
          <img
            src={`${basePath}/Asset/matrimony_banner.png`}
            alt="Chat Solution"
          />
        </div>

        <div className={matrimonySty.conatiner_wrap}>
          {/* Header Section */}
          <header className={matrimonySty.header}>
            <h1>AddChat for matrimonial</h1>
            <p>Seamless connections, safer interactions, smarter matches</p>

            {/* Navigation Tabs */}
            <nav className={matrimonySty["nav-tabs"]}>
              {Object.keys(sections).map((tab) => (
                <a
                  key={tab}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(tab);
                  }}
                >
                  {tab}
                </a>
              ))}
            </nav>
          </header>

          {/* Section Content Blocks */}
          {Object.entries(sections).map(([section, data], index) => (
            <section
              key={section}
              ref={data.ref}
              className={`${matrimonySty["content-section"]} 
      ${matrimonySty[data.className]} 
      ${index % 2 === 0 ? matrimonySty.evenSection : matrimonySty.oddSection}`}
            >
              <div className={matrimonySty.matrimonial_leftSection}>
                <h2 className={matrimonySty.highlighted}>{section}</h2>
                <h3 className={matrimonySty.subheading}>{data.subheading}</h3>

                {/* Section Content */}
                {data.content.map((item, idx) => {
                  if (item.type === "p") {
                    return <p key={idx}>{item.text}</p>;
                  } else if (item.type === "group") {
                    return item.texts.map((text, subIdx) => (
                      <p
                        key={`${idx}-${subIdx}`}
                        className={matrimonySty[item.className]}
                      >
                        <span className={matrimonySty.icon}>
                          <FaHandPointRight size={18} />
                        </span>
                        {text}
                      </p>
                    ));
                  } else if (item.type === "img") {
                    return <img key={idx} src={item.src} alt={item.alt} />;
                  }
                  return null;
                })}
              </div>

              <div className={matrimonySty["image-container"]}>
                <img src={data.image} alt={section} />
              </div>
            </section>
          ))}
        </div>
      </div>
      <ProtectBusiness />
      <BuildShipCard />
      <Accordion items={accordionItems} />
      <Carousel />
    </>
  );
}
