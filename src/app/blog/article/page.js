"use client";
import React from "react";
import articleSty from "./articleStyle.module.css";
import { FaClock, FaCalendarAlt, FaRegHandPointRight } from "react-icons/fa";

import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { useRef } from "react";

const Article = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const sectionsContent = {
    "Why addChat Bots": {
      ref: useRef(null),
      icon: <FaRegHandPointRight />,
      content: [
        {
          type: "p",
          className: "addChat-bots",
          parts: [
            "MagicChat Bots help ",
            {
              type: "link",
              href: "https://example.com",
              text: "you",
              className: "link-style",
            },
            " automate repetitive tasks efficiently.",
          ],
        },
        {
          type: "p",
          text: "At Daily, we have been building real-time audio and video infrastructure since 2016. Our customers have been developers building conversational experiences – it started with people talking to each other..",
        },
      ],
    },
    "AI that talks naturally": {
      ref: useRef(null),
      icon: <FaRegHandPointRight />,
      content: [
        { type: "p", text: "Our AI mimics human-like conversation patterns." },
        {
          type: "img",
          src: `${basePath}/Asset/ai_img.png`,
          alt: "AI Conversation",
        },
        { type: "p", text: "This ensures better engagement with users." },
      ],
    },
    "Flexibility to use the best models, and the best models for your use case":
      {
        ref: useRef(null),
        icon: <FaRegHandPointRight />,
        content: [
          {
            type: "p",
            text: "MagicChat Bots help automate repetitive tasks efficiently.",
          },
          {
            type: "ul",
            items: [
              {
                parts: [
                  "Save time by using ",
                  {
                    type: "link",
                    href: "https://example.com/save",
                    text: "MagicChat Bots",
                  },
                  " to handle routine tasks.",
                ],
              },
              {
                parts: [
                  "Reduce errors with ",
                  {
                    type: "link",
                    href: "https://example.com/errors",
                    text: "AI automation",
                  },
                  ".",
                ],
              },
              { parts: ["Increase productivity effortlessly."] },
            ],
            className: "bullet-list",
          },
          {
            type: "p",
            text: "They seamlessly integrate with your existing workflows.",
          },
        ],
      },
    "Build now, and for the future": {
      ref: useRef(null),
      icon: <FaRegHandPointRight />,
      content: [
        { type: "p", text: "Our AI mimics human-like conversation patterns." },
        {
          type: "img",
          src: `${basePath}/images/ai_convo.png`,
          alt: "AI Conversation",
        },
        { type: "p", text: "This ensures better engagement with users." },
      ],
    },
    "Demos, demos, demos & starting out": {
      ref: useRef(null),
      icon: <FaRegHandPointRight />,
      content: [
        {
          type: "p",
          text: "MagicChat Bots help automate repetitive tasks efficiently.",
        },
        {
          type: "ul",
          items: [
            {
              parts: [
                "Reduce errors with ",
                {
                  type: "link",
                  href: "https://example.com/errors",
                  text: "AI automation",
                },
                ".",
              ],
            },
            { parts: ["Increase productivity effortlessly."] },
            { parts: ["Save time."] },
            { parts: ["Reduce errors."] },
            { parts: ["Increase productivity."] },
          ],
        },
        {
          type: "p",
          text: "They seamlessly integrate with your existing workflows.",
          className: "normal-text",
        },
      ],
    },
  };

  const handleScroll = (section) => {
    sectionsContent[section].ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className={articleSty.container}>
      <section className={articleSty.banner}>
        <div className={articleSty.banner_content}>
          <h3>
            addChat Bots: Build Real-Time Voice, Vision, and Video AI
            Agents__(Lorem)
          </h3>
          <p>
            <div className={articleSty.bannerIc}>
              <img src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D" />
              Justyna Polaczyk
            </div>

            <div className={articleSty.bannerIc}>
              <span>
                <FaClock size={18} />
              </span>
              3 min read
            </div>

            <div className={articleSty.bannerIc}>
              <span>
                <FaCalendarAlt size={18} />
              </span>
              Feb 28
            </div>
          </p>
        </div>
        <div className={articleSty.bannerImg}>
          <img
            src="https://plus.unsplash.com/premium_photo-1661255378914-d0934128d91d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Article thumbnail"
          />
        </div>
      </section>

      <section className={articleSty["detail-desc"]}>
        <div className={articleSty.leftSection}>
          <div className={articleSty.desc}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          {Object.entries(sectionsContent).map(
            ([section, { ref, content }]) => (
              <section
                key={section}
                ref={ref}
                className={articleSty["content-section"]}
              >
                <h2 className={articleSty.highlighted}>{section}</h2>

                {content.map((block, index) => {
                  switch (block.type) {
                    case "p":
                      return (
                        <p key={index} className={block.className || ""}>
                          {block.parts
                            ? block.parts.map((part, i) =>
                                typeof part === "string" ? (
                                  part
                                ) : part.type === "link" ? (
                                  <a
                                    key={i}
                                    href={part.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={
                                      part.className
                                        ? articleSty[part.className]
                                        : ""
                                    }
                                  >
                                    {part.text}
                                  </a>
                                ) : null
                              )
                            : block.text}
                        </p>
                      );

                    case "ul":
                      return (
                        <ul
                          key={index}
                          className={
                            block.className ? articleSty[block.className] : ""
                          }
                        >
                          {block.items.map((item, i) => (
                            <li key={i}>
                              {item.parts
                                ? item.parts.map((part, j) =>
                                    typeof part === "string" ? (
                                      part
                                    ) : part.type === "link" ? (
                                      <a
                                        key={j}
                                        href={part.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={
                                          part.className
                                            ? articleSty[part.className]
                                            : ""
                                        }
                                      >
                                        {part.text}
                                      </a>
                                    ) : null
                                  )
                                : item.text}
                            </li>
                          ))}
                        </ul>
                      );

                    case "img":
                      return (
                        <img
                          key={index}
                          src={block.src}
                          alt={block.alt}
                          className={
                            block.className ? articleSty[block.className] : ""
                          }
                        />
                      );

                    default:
                      return null;
                  }
                })}
              </section>
            )
          )}
        </div>

        <div className={articleSty.rightSection}>
          <header className={articleSty.sections}>
            <nav className={articleSty["sections-tabs"]}>
              {Object.entries(sectionsContent).map(([tab, { icon }]) => (
                <a
                  key={tab}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(tab);
                  }}
                >
                  {icon && <span className={articleSty.icon}>{icon}</span>}
                  {tab}
                </a>
              ))}
            </nav>
          </header>
        </div>
      </section>
    </div>
  );
};

export default Article;
