"use client";

import React, { useState, useEffect, Suspense } from "react";
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
  "text",
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
    window.mermaid?.initialize({ startOnLoad: true });
    window.mermaid?.init();
  }, [code]);

  return <div className="mermaid">{code}</div>;
};

const Pagination = ({ currentPage, totalPages }) => {
  const [page, setPage] = useState(currentPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
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

const Table = ({ headers, rows }) => {
  return (
    <table className={styles.docTable}>
      <thead className={styles.docTableHead}>
        <tr className={styles.docTableHeadRow}>
          {headers.map((header, index) => (
            <th key={index} className={styles.docTableHeadCell}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.docTableBody}>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={styles.docTableBodyRow}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={styles.docTableBodyCell}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

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
          // onClick={() => handleScroll(config.targetSelector)}
          onClick={() => handleScroll(config.selector_uid)}
          className={`${styles["content-link"]} ${styles.internal}`}
          title="Scroll to section"
        >
          <FaLink size={16} />
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
        listStyleType: listType === "ol" ? "none" : "none",
        position: "relative",
        // paddingLeft: isCollapsible ? "20px" : "0px",
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
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                // marginRight: "10px",
                flex: "1",
                justifyContent: "space-between"
              }}
            >
              {item.text && <span>{item.text}</span>}
              {renderLink()}
            </div>
            {item.code && (
              <pre className={styles["script_code"]}>
                <code>{item.code}</code>
              </pre>
            )}
          </div>
        )}
      </div>

      {hasSubItems && (
        <div
          style={{
            display: expanded ? "block" : "none",
            marginTop: "5px",
            marginLeft: "10px",
          }}
        >
          {/* FIX: Wrap sub_items in proper list container */}
          {item.sub_items[0]?.tag_type === "li" ? (
            <ul className={styles["content-list"]}>
              <ContentRenderer content={item.sub_items} />
            </ul>
          ) : (
            <ContentRenderer content={item.sub_items} />
          )}
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
  // Helper function for link rendering in li elements

  console.log("contenterewr", content);
  const renderLink = (item) => {
    if (!item.link_configuration?.show) return null;
    const config = item.link_configuration;

    if (config.type === "internal") {
      return (
        <button
          onClick={() => {
            try {
              // const element = document.querySelector(config.targetSelector);
              const element = document.getElementById(config.selector_uid);
              if (element) element.scrollIntoView({ behavior: "smooth" });
            } catch (e) {
              console.error("Scroll error:", e);
            }
          }}
          className={`${styles["content-link"]} ${styles.internal}`}
          title="Scroll to section"
        >
          <FaLink size={16} />
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
            // return (
            //   <h2 key={index} className={styles["content-heading"]}>
            //     {item.text}
            //   </h2>
            // );
            if (item.hasOwnProperty("selector_uid")) {
              console.log("hwsdfdsfsererew are we??");
              return (
                <h2
                  key={index}
                  className={styles["content-heading"]}
                  id={item.selector_uid}
                >
                  {item.text}
                </h2>
              );
            } else {
              console.log("areweyouewarhwererew are we??");

              return (
                <h2 key={index} className={styles["content-heading"]}>
                  {item.text}
                </h2>
              );
            }

          case "h4":
            return (
              <h2  key={index}
                className={styles["content-inner-heading"]}
                id={item.selector_uid}>
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
              />
            );

          case "kbd":
            return <Kbd key={index} keys={item.keys} />;

          case "text":
            return <span key={index}>{item.text}</span>;

          case "p":
            return (
              <div key={index} className={styles["content-paragraph"]}>
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
              <h3 key={index} className={styles.second_subheading}>
                {item.text}
              </h3>
            );

          case "a":
            return (
             <button className={styles["view-full-implementation"]} key={index}>
               <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["content-link"]}
              >
                {item.text}
              </a>
             </button>
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
              <pre key={index} className={styles["content-code"]}>
                <code>{item.text}</code>
              </pre>
            );

          case "li":
            return (
              <li key={index} className={styles["content-list-item"]}>
                <div className={styles.sidebarLi}>
                  {item.text && <span>{item.text}</span>}
                  {item.link_configuration && renderLink(item)}
                </div>
                {item.code && (
                  <pre className="script_code">
                    <code>{item.code}</code>
                  </pre>
                )}

                {item.sub_items && (
                  <div style={{ marginLeft: "20px" }}>
                    {/* FIX: Wrap sub_items in proper list container */}
                    {item.sub_items[0]?.tag_type === "li" ? (
                      <ul className={styles["content-list"]}>
                        <ContentRenderer content={item.sub_items} />
                      </ul>
                    ) : (
                      <ContentRenderer content={item.sub_items} />
                    )}
                  </div>
                )}
              </li>
            );

          // case "div":
          //   return (
          //     <div key={index} className={styles["content-div"]}>
          //       {item.children?.map((child, i) => (
          //         <ContentRenderer key={`${index}-${i}`} content={[child]} />
          //       ))}
          //       {item.extra_text && <div>{item.extra_text}</div>}
          //       {item.code && (
          //         <pre className={styles.script_code}>
          //           <code>{item.code}</code>
          //         </pre>
          //       )}
          //     </div>
          //   );

          case "div":
            return (
              <div
                key={index}
                className={item.className || styles["content-div"]}
              >
                {item.text && <span>{item.text}</span>}

                {item.children && <ContentRenderer content={item.children} />}

                {item.extra_text && <div>{item.extra_text}</div>}

                {item.code && (
                  <pre className={styles.script_code}>
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
