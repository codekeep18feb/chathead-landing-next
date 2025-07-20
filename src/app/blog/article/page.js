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
    "August 2025 Release Highlights": {
      ref: useRef(null),
      icon: <FaRegHandPointRight />,
      content: [
        {
          type: "p",
          text: "We're excited to announce game-changing features coming this August that will transform how teams manage customer support. These updates focus on enhanced collaboration and granular control.",
        },
        {
          type: "img",
          src: `${basePath}/images/team-collab.jpg`,
          alt: "Team collaboration",
        },
      ],
    },
    "Multi-Admin Support": {
      ref: useRef(null),
      icon: <FaRegHandPointRight />,
      content: [
        {
          type: "p",
          text: "Delegate tasks and empower your team with our new multi-admin functionality:",
        },
        {
          type: "ul",
          items: [
            { parts: ["Onboard unlimited support agents/admins"] },
            { parts: ["Assign conversations to specific team members"] },
            { parts: ["Maintain oversight while distributing workload"] },
            { parts: ["Enable team members to act on your behalf"] },
          ],
          className: "bullet-list",
        },
        {
          type: "p",
          text: "This eliminates bottlenecks and ensures customers always get timely responses from the most qualified team member.",
        },
      ],
    },
    "Advanced RBAC System": {
      ref: useRef(null),
      icon: <FaRegHandPointRight />,
      content: [
        {
          type: "p",
          text: "Our new Role-Based Access Control provides unprecedented flexibility:",
        },
        {
          type: "ul",
          items: [
            { parts: ["Create custom roles with granular permissions"] },
            { parts: ["Define access levels for different support tiers"] },
            { parts: ["Restrict sensitive actions to authorized personnel"] },
            { parts: ["One-click role assignment for new team members"] },
          ],
          className: "bullet-list",
        },
        {
          type: "p",
          text: "Sample permission options:",
        },
        {
          type: "img",
          src: `${basePath}/images/rbac-screenshot.png`,
          alt: "RBAC permissions interface",
          className: "feature-image",
        },
      ],
    },
    "Enterprise-Grade Support Center": {
      ref: useRef(null),
      icon: <FaRegHandPointRight />,
      content: [
        {
          type: "p",
          text: "Together these features enable fully-functional support teams:",
        },
        {
          type: "ul",
          items: [
            { parts: ["Scale support operations without complexity"] },
            { parts: ["Maintain security with least-privilege access"] },
            { parts: ["Reduce resolution time with smart delegation"] },
            { parts: ["Audit trails for all admin actions"] },
          ],
          className: "bullet-list",
        },
        {
          type: "p",
          text: "Whether you have 5 agents or 500, our new system adapts to your organizational structure and security requirements.",
        },
      ],
    },
    "Rollout Timeline": {
      ref: useRef(null),
      icon: <FaRegHandPointRight />,
      content: [
        {
          type: "p",
          text: "These features will be available to all enterprise plans starting August 1, 2025:",
        },
        {
          type: "ul",
          items: [
            { parts: ["July 30: Documentation and training materials released"] },
            { parts: ["August 4: Early access for beta customers"] },
            { parts: ["August 10: General availability for all customers"] },
          ],
          className: "bullet-list",
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
          <h3>What's Coming in August 2025: Team Support Revolution</h3>
          {/* Fixed: Replaced invalid <p> wrapper with <div> */}
          <div className={articleSty.bannerInfo}>
            <div className={articleSty.bannerIc}>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              Product Team
            </div>

            <div className={articleSty.bannerIc}>
              <span>
                <FaClock size={18} />
              </span>
              4 min read
            </div>

            <div className={articleSty.bannerIc}>
              <span>
                <FaCalendarAlt size={18} />
              </span>
              July 21, 2025
            </div>
          </div>
        </div>
        <div className={articleSty.bannerImg}>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team collaboration"
          />
        </div>
      </section>

      <section className={articleSty["detail-desc"]}>
        <div className={articleSty.leftSection}>
          <div className={articleSty.desc}>
            <p>
              This August, we're launching powerful new features designed for growing support teams. 
              Discover how our Multi-Admin support and advanced RBAC system will transform your customer 
              service operations and enable enterprise-grade collaboration.
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
            <h3>In this article</h3>
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