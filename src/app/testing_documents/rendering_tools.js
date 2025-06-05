"use client";

import React, { useState, useEffect, Suspense } from "react";
// import "./test.css";
import styles from "./renderingToolSty.module.css";
import { useSearchParams } from "next/navigation";
import YouTubeEmbed from "../components/YouTubeVideo";
import { FaLink } from "react-icons/fa6";


const CondRadioRender = ({ r_options }) => {
  const [selectedOption, setSelectedOption] = useState(r_options[0]?.text);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the viewport is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOptionChange = (optionText) => {
    setSelectedOption(optionText);
  };

  const selectedDescription = r_options.find(
    (option) => option.text === selectedOption
  )?.description;

  return (
    <div className={styles.setup}>
      {isMobile ? (
        <div className={styles.dropdown}>
          <select
            value={selectedOption || ""}
            onChange={(e) => handleOptionChange(e.target.value)}
            className={styles["dropdown-select"]}
          >
            {r_options.map((option, index) => (
              <option key={index} value={option.text}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className={styles.tabs}>
          {r_options.map((option, index) => (
            <button
              key={index}
              className={`${styles["tab-button"]} ${
                selectedOption === option.text ? styles["active"] : ""
              }`}
              onClick={() => handleOptionChange(option.text)}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}

      <div className={styles.description}>
        <ContentRenderer content={selectedDescription} />
      </div>
    </div>
  );
};

// Updated supported tags
const supportedTags = [
  "h1",
  "h2",
  "h3",
  "h4",
  "p",
  "div",
  "img",
  "a",
  "blockquote",
  "ul",
  "li",
  "code",
  "ol",
  "table",
  "accordion",
  "breadcrumbs",
  "code_with_copy",
  "callout",
  "steps",
  "tabs",
  "tooltip",
  "pagination",
  "kbd",
  "text", // Add this
  "side_nav",
  "search",
  "mermaid_diagram",
  "api_table",
  "mesgTip",
  "strong",
];
const renderTextWithElements = (text, linkParts) => {
  if (!linkParts) return text;

  const parts = [];
  let lastIndex = 0;

  linkParts.forEach((part, index) => {
    const startIndex = text.indexOf(part.text, lastIndex);
    if (startIndex > -1) {
      if (startIndex > lastIndex) {
        parts.push(text.substring(lastIndex, startIndex));
      }
      parts.push(
        <a
          key={`link-${index}`}
          href={part.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {part.text}
        </a>
      );
      lastIndex = startIndex + part.text.length;
    }
  });

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

const Callout = ({ type = "info", title, children }) => {
  const icons = {
    info: "ℹ️",
    warning: "⚠️",
    danger: "⛔",
    success: "✅",
  };

  return (
    <div className={`${styles.callout} ${styles[`callout-${type}`]}`}>
      <div className={styles["callout-header"]}>
        <span className={styles["callout-icon"]}>{icons[type]}</span>
        {title && <h4 className={styles["callout-title"]}>{title}</h4>}
      </div>
      <div className={styles["callout-content"]}>{children}</div>
    </div>
  );
};

const MessageTip = ({ title, children }) => {
  return (
    <div className={styles.messageTipWrap}>
      <div className={styles.leftBorder}></div>
      <div className={styles["mesg-title"]}>
        {title && <strong>{title}</strong>}
        <div className={styles["mesg-content"]}>{children}</div>
      </div>
    </div>
  );
};
// Update the Steps component to use ContentRenderer
const Steps = ({ items }) => {
  return (
    <div className={styles.steps}>
      {items.map((step, index) => (
        <div key={index} className={styles.step}>
          <div className={styles["step-number"]}>{index + 1}</div>
          <div className={styles["step-content"]}>
            {step.title && (
              <h4 className={styles["step-title"]}>{step.title}</h4>
            )}
            <div className={styles["step-description"]}>
              <ContentRenderer content={step.content} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// New Component: Tabs
const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles["tabs-container"]}>
      <div className={styles["tab-buttons"]}>
        {items.map((tab, index) => (
          <button
            key={index}
            className={`${styles["tab-button"]} ${
              index === activeTab ? styles["active"] : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles["tab-content"]}>
        <ContentRenderer content={items[activeTab].content} />
      </div>
    </div>
  );
};

// New Component: Tooltip
const Tooltip = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <ContentRenderer content={[children]} />
      {isVisible && (
        <div className="tooltip">
          <ContentRenderer content={content} />
        </div>
      )}
    </div>
  );
};

const SideNav = ({ items }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`side-nav ${isOpen ? "open" : "collapsed"}`}>
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "◀" : "▶"}
      </button>
      {isOpen && (
        <nav>
          {items.map((item) => (
            <a href={`#${item.id}`} key={item.id} className="nav-item">
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
};

const DocSearch = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="doc-search">
      <input
        type="text"
        placeholder="Search documentation..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button">🔍</button>
    </div>
  );
};

const MermaidDiagram = ({ code }) => {
  useEffect(() => {
    // Initialize Mermaid diagram
    window.mermaid?.initialize({ startOnLoad: true });
    window.mermaid?.init();
  }, [code]);

  return <div className="mermaid">{code}</div>;
};

// Update the Pagination component
const Pagination = ({ currentPage, totalPages }) => {
  const [page, setPage] = useState(currentPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    // Add any additional page change logic here
    console.log("Page changed to:", newPage);
  };

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`page-number ${i + 1 === page ? "active" : ""}`}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

// New Component: Keyboard Shortcut
const Kbd = ({ keys }) => {
  return (
    <span className="kbd-container">
      {keys.map((key, index) => (
        <React.Fragment key={key}>
          <kbd className="kbd-key">{key}</kbd>
          {index < keys.length - 1 && <span className="kbd-plus">+</span>}
        </React.Fragment>
      ))}
    </span>
  );
};

const CodeWithCopy = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={styles["code-with-copy"]}>
      <pre className={styles.script_code}>
        <code>{code}</code>
      </pre>
      <button onClick={copyToClipboard} className={styles["copy-button"]}>
        {copied ? "✓ Copied" : "📋 Copy"}
      </button>
    </div>
  );
};

// New Component: Accordion Section
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button
        className={`accordion-header ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="accordion-icon">{isOpen ? "▼" : "▶"}</span>
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

// New Component: Table
const Table = ({ headers, rows }) => {
  return (
    <table className="doc-table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// New Component: Breadcrumbs
const Breadcrumbs = ({ items }) => {
  return (
    <nav className="breadcrumbs">
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && <span className="separator">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

const List = ({
  items,
  listType,
  collapsable,
  fcNonCollapsable,
  depth = 0,
}) => {
  return listType === "ol" ? (
    <ol className={`${styles["content-list"]} ${styles.ordered}`}>
      {items.map((item, index) => (
        <ListItem
          key={index}
          item={item}
          listType={listType}
          collapsable={collapsable}
          fcNonCollapsable={fcNonCollapsable}
          depth={depth}
        />
      ))}
    </ol>
  ) : (
    <ul className={styles["content-list"]}>
      {items.map((item, index) => (
        <ListItem
          key={index}
          item={item}
          listType={listType}
          collapsable={collapsable}
          fcNonCollapsable={fcNonCollapsable}
          depth={depth}
        />
      ))}
    </ul>
  );
};

const ListItem = ({ item, listType, collapsable, fcNonCollapsable, depth }) => {
  const [expanded, setExpanded] = useState(depth < 1);
  const hasSubItems = item.sub_items && item.sub_items.length > 0;
  const isCollapsible = collapsable && hasSubItems && depth >= 1;
  const childCollapsable = depth === 0 ? fcNonCollapsable : collapsable;

  const handleScroll = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (isCollapsible) setExpanded(!expanded);
  };

  const renderLink = () => {
    if (!item.link_configuration?.show) return null;

    const config = item.link_configuration;

    if (config.type === "internal") {
      return (
        <button
          onClick={() => handleScroll(config.targetSelector)}
          className={`${styles["content-link"]} ${styles.internal}`}
          title="Scroll to section"
        >
          {/* 🔗 */}
          <FaLink size={16}/>
        </button>
      );
    }

    return (
      <a
        href={config.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles["content-link"]} ${styles.external}`}
        title="Open in new tab"
      >
        🔗
      </a>
    );
  };

  return (
    <li
      style={{
        cursor: isCollapsible ? "pointer" : "default",
        listStyleType: listType === "ol" ? "none" : "disc",
        // position: "relative",
        // paddingLeft: "35px",
      }}
    >
      {isCollapsible && (
        <span
          onClick={handleClick}
          style={{
            position: "absolute",
            left: 0,
            transform: expanded ? "rotate(90deg)" : "none",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
        >
          ▶
        </span>
      )}

      <div onClick={handleClick}>
        {typeof item === "string" ? (
          <span dangerouslySetInnerHTML={{ __html: item }} />
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {item.text && <span>{item.text}</span>}
              {renderLink()}
            </div>
            {item.code && (
              <pre className="script_code">
                <code>{item.code}</code>
              </pre>
            )}
          </>
        )}
      </div>

      {hasSubItems && (
        <div
          style={{ display: expanded ? "block" : "none", marginLeft: "20px" }}
        >
          <List
            items={item.sub_items}
            listType={item.listType || listType}
            collapsable={childCollapsable}
            fcNonCollapsable={fcNonCollapsable}
            depth={depth + 1}
          />
        </div>
      )}
    </li>
  );
};

const APIReferenceTable = ({ properties }) => (
  <table className="api-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {properties.map((prop) => (
        <tr key={prop.name}>
          <td>
            <code>{prop.name}</code>
          </td>
          <td>
            <em>{prop.type}</em>
          </td>
          <td>{prop.default || "-"}</td>
          <td>{prop.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const ContentRenderer = ({ content }) => {
  return (
    <div className={`${styles.contents} ${styles.sidebarContentclass}`}>
      {content?.map((item, index) => {
        const Tag = supportedTags.includes(item.tag_type)
          ? item.tag_type
          : "div";

        switch (item.tag_type) {
          case "img":
            return (
              <div className="content-list-img" key={index}>
                <img src={item.src} alt={item.alt || ""} />
              </div>
            );

          case "video":
            return (
              <div key={index}>
                <div className={styles.videos_wrapper}>
                  <YouTubeEmbed src={item.src} desc={item.desc} />
                </div>
              </div>
            );

          case "h2":
            return (
              <h2 key={index} className={styles["content-heading"]}>
                {item.text}
              </h2>
            );

          case "h4":
            return (
              <h2 key={index} className="content-inner-heading">
                {item.text}
              </h2>
            );

          case "side_nav":
            return <SideNav key={index} items={item.items} />;

          case "search":
            return <DocSearch key={index} />;

          case "mermaid_diagram":
            return <MermaidDiagram key={index} code={item.code} />;

          case "api_table":
            return (
              <APIReferenceTable key={index} properties={item.properties} />
            );

          case "feature_options":
            return <CondRadioRender r_options={item.options} key={index} />;

          case "callout":
            return (
              <Callout key={index} type={item.type} title={item.title}>
                <ContentRenderer content={item.children} />
              </Callout>
            );
          case "mesgTip":
            return (
              <MessageTip key={index} title={item.title}>
                <ContentRenderer content={item.children} />
              </MessageTip>
            );
          case "steps":
            return <Steps key={index} items={item.items} />;

          case "tabs":
            return <Tabs key={index} items={item.items} />;

          case "tooltip":
            return (
              <Tooltip key={index} content={item.content}>
                <ContentRenderer content={item.children} />
              </Tooltip>
            );

          case "pagination":
            return (
              <Pagination
                key={index}
                currentPage={item.currentPage}
                totalPages={item.totalPages}
                onPageChange={item.onPageChange}
              />
            );

          case "kbd":
            return <Kbd key={index} keys={item.keys} />;

          // Add text handling
          case "text":
            return <span key={index}>{item.text}</span>;

          // Update the p case in ContentRenderer
          case "p":
            return (
              <div key={index} className="content-paragraph">
                {item.text &&
                  renderTextWithElements(item.text, item.link_parts)}
                {item.children && (
                  <div className="p-children">
                    <ContentRenderer content={item.children} />
                  </div>
                )}
              </div>
            );

          case "h3":
            return (
              <h3 key={index} className="second_subheading">
                {item.text}
              </h3>
            );

          case "a":
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="content-link"
              >
                {item.text}
              </a>
            );

          case "ul":
          case "ol":
            return (
              <List
                key={index}
                items={item.items}
                listType={item.tag_type}
                collapsable={item.property?.collapse?.collapsable}
                fcNonCollapsable={item.property?.collapse?.fc_non_collapsable}
              />
            );

          case "blockquote":
            return (
              <blockquote key={index} className="content-blockquote">
                {item.text}
              </blockquote>
            );

          // New Component Cases
          case "table":
            return (
              <Table key={index} headers={item.headers} rows={item.rows} />
            );

          case "accordion":
            return (
              <Accordion key={index} title={item.title}>
                <ContentRenderer content={item.children} />
              </Accordion>
            );

          case "breadcrumbs":
            return <Breadcrumbs key={index} items={item.items} />;

          case "code_with_copy":
            return (
              <CodeWithCopy
                key={index}
                code={item.code}
                language={item.language}
              />
            );

          case "code":
            return item.show_copy ? (
              <CodeWithCopy
                key={index}
                code={item.text}
                language={item.language}
              />
            ) : (
              <pre key={index} className="content-code">
                <code>{item.text}</code>
              </pre>
            );

          case "li":
            return (
              <li key={index} className="content-list-item">
                {item.text}
                {item.sub_items && (
                  <List
                    items={item.sub_items}
                    listType={item.listType || "ul"}
                  />
                )}
              </li>
            );

          case "div":
            return (
              <div key={index} className="content-div">
                {item.children?.map((child, i) => (
                  <ContentRenderer key={`${index}-${i}`} content={[child]} />
                ))}
                {item.extra_text && <div>{item.extra_text}</div>}
                {item.code && (
                  <pre className="script_code">
                    <code>{item.code}</code>
                  </pre>
                )}
              </div>
            );

          default:
            return (
              <Tag
                key={index}
                className={`content-${item.tag_type}`}
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            );
        }
      })}
    </div>
  );
};

export default ContentRenderer;
