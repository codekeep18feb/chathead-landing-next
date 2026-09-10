// /home/codewithreetu/Desktop/workspace/p__workspace/landingSide/chathead-landing-next/src/app/components/documents/side_bar_content/rendering_tools.js

"use client";

import React, {
  useState,
  useEffect,
  Suspense,
  createContext,
  useContext,
} from "react";
import styles from "./renderingToolSty.module.css";
import { useSearchParams } from "next/navigation";
import YouTubeEmbed from "../../YouTubeVideo";
import { FaLink } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./style_globle.css";

// ============================================================
// MARKER HIGHLIGHTING HELPERS  (from main)
//
// Two marker syntaxes, applicable in ANY payload string field:
//   [[ value ]]        → inline highlight   (amber, .ph)
//   [[[ region ]]]     → block highlight    (green border, .ph-block)
//
// Order matters: escape HTML FIRST, then inject spans. This way any
// `<`, `>`, `&` in the source text cannot break the HTML output, and
// the injected spans are not double-escaped.
// ============================================================

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export const stripMarkers = (raw) => {
  if (raw == null) return "";
  return String(raw)
    .replace(/\[\[\[([\s\S]*?)\]\]\]/g, "$1")
    .replace(/\[\[(.+?)\]\]/g, "$1");
};

export const applyMarkers = (raw) => {
  if (raw == null) return "";

  // 1. Extract block regions first so the inline pass doesn't touch them.
  const blocks = [];
  const withoutBlocks = String(raw).replace(
    /\[\[\[([\s\S]*?)\]\]\]/g,
    (_, inner) => {
      blocks.push(inner);
      return `\u0000BLOCK${blocks.length - 1}\u0000`;
    }
  );

  // 2. Escape, then apply inline markers.
  let out = escapeHtml(withoutBlocks).replace(
    /\[\[(.+?)\]\]/g,
    '<span class="ph">$1</span>'
  );

  // 3. Reinsert block regions, escaped, wrapped in .ph-block.
  out = out.replace(/\u0000BLOCK(\d+)\u0000/g, (_, idx) => {
    const inner = escapeHtml(blocks[Number(idx)]);
    return `<span class="ph-block">${inner}</span>`;
  });

  return out;
};

// Simple wrapper — use it anywhere you'd previously render {item.text}.
const MarkedText = ({ children }) => (
  <span dangerouslySetInnerHTML={{ __html: applyMarkers(children) }} />
);

// ============================================================
// SIDEBAR LINK CONTEXT  (from mobile_doc)
// Closes the mobile sidebar when a navigation link is clicked.
// ============================================================
export const SidebarLinkContext = createContext(null);

// ============================================================
// SUPPORTED TAGS
// ============================================================
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

// ============================================================
// renderTextWithElements — used by <p> tag and ListItem text.
// Plain-string segments pass through applyMarkers; link segments
// remain React <a> nodes. (main precedence)
// ============================================================
const renderTextWithElements = (text, linkParts) => {
  if (!linkParts || linkParts.length === 0) {
    return <span dangerouslySetInnerHTML={{ __html: applyMarkers(text) }} />;
  }

  const parts = [];
  let lastIndex = 0;

  linkParts.forEach((part, index) => {
    const startIndex = text.indexOf(part.text, lastIndex);

    if (startIndex > -1) {
      if (startIndex > lastIndex) {
        parts.push(
          <span
            key={`txt-${index}`}
            dangerouslySetInnerHTML={{
              __html: applyMarkers(text.substring(lastIndex, startIndex)),
            }}
          />
        );
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
    parts.push(
      <span
        key="txt-tail"
        dangerouslySetInnerHTML={{
          __html: applyMarkers(text.substring(lastIndex)),
        }}
      />
    );
  }

  return parts;
};

// ============================================================
// FEATURE-OPTION RADIO / DROPDOWN
// ============================================================
const CondRadioRender = ({ r_options }) => {
  const [selectedOption, setSelectedOption] = useState(r_options[0]?.text);
  const [isMobile, setIsMobile] = useState(false);

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
              <MarkedText>{option.text}</MarkedText>
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

// ============================================================
// CALLOUT
// ============================================================
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
        {title && (
          <h4 className={styles["callout-title"]}>
            <MarkedText>{title}</MarkedText>
          </h4>
        )}
      </div>
      <div className={styles["callout-content"]}>{children}</div>
    </div>
  );
};

// ============================================================
// MESSAGE TIP
// ============================================================
const MessageTip = ({ title, children }) => {
  return (
    <div className={styles.messageTipWrap}>
      <div className={styles.leftBorder}></div>
      <div className={styles["mesg-title"]}>
        {title && (
          <strong>
            <MarkedText>{title}</MarkedText>
          </strong>
        )}
        <div className={styles["mesg-content"]}>{children}</div>
      </div>
    </div>
  );
};

// ============================================================
// STEPS
// ============================================================
const Steps = ({ items }) => {
  return (
    <div className={styles.steps}>
      {items.map((step, index) => (
        <div key={index} className={styles.step}>
          <div className={styles["step-number"]}>{index + 1}</div>
          <div className={styles["step-content"]}>
            {step.title && (
              <h4 className={styles["step-title"]}>
                <MarkedText>{step.title}</MarkedText>
              </h4>
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

// ============================================================
// TABS
// ============================================================
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
            <MarkedText>{tab.label}</MarkedText>
          </button>
        ))}
      </div>
      <div className={styles["tab-content"]}>
        <ContentRenderer content={items[activeTab].content} />
      </div>
    </div>
  );
};

// ============================================================
// TOOLTIP
// ============================================================
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

// ============================================================
// SIDE NAV
// ============================================================
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

// ============================================================
// SEARCH
// ============================================================
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

// ============================================================
// MERMAID DIAGRAM
// ============================================================
const MermaidDiagram = ({ code }) => {
  useEffect(() => {
    window.mermaid?.initialize({ startOnLoad: true });
    window.mermaid?.init();
  }, [code]);

  return <div className="mermaid">{code}</div>;
};

// ============================================================
// PAGINATION
// ============================================================
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

// ============================================================
// KBD
// ============================================================
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

// ============================================================
// CODE WITH COPY  (marker-aware)
// ============================================================
const CodeWithCopy = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const plainCode = stripMarkers(code);
  const highlighted = applyMarkers(code);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(plainCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={styles["code-with-copy"]}>
      <pre className={styles.script_code}>
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
      <button onClick={copyToClipboard} className={styles["copy-button"]}>
        {copied ? "✓ Copied" : "📋 Copy"}
      </button>
    </div>
  );
};

// ============================================================
// ACCORDION
// ============================================================
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button
        className={`${styles.accordionHeader} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MarkedText>{title}</MarkedText>
        <span className="accordion-icon">{isOpen ? "▼" : "▶"}</span>
      </button>
      {isOpen && <div className={styles["accordion-content"]}>{children}</div>}
    </div>
  );
};

// ============================================================
// TABLE
// ============================================================
const Table = ({ headers, rows }) => {
  return (
    <table className={styles.docTable}>
      <thead className={styles.docTableHead}>
        <tr className={styles.docTableHeadRow}>
          {headers.map((header, index) => (
            <th key={index} className={styles.docTableHeadCell}>
              <MarkedText>{header}</MarkedText>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.docTableBody}>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={styles.docTableBodyRow}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={styles.docTableBodyCell}>
                <MarkedText>{cell}</MarkedText>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// ============================================================
// BREADCRUMBS
// ============================================================
const Breadcrumbs = ({ items }) => {
  return (
    <nav className="breadcrumbs">
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <a href={item.href}>
                <MarkedText>{item.label}</MarkedText>
              </a>
            ) : (
              <span>
                <MarkedText>{item.label}</MarkedText>
              </span>
            )}
            {index < items.length - 1 && <span className="separator">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// ============================================================
// LIST
// ============================================================
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

// ============================================================
// LIST ITEM
// Uses:
//   • mobile_doc:  SidebarLinkContext + default_expanded
//   • main:        renderTextWithElements + applyMarkers
// ============================================================
const ListItem = ({ item, listType, collapsable, fcNonCollapsable, depth }) => {
  const onLinkClick = useContext(SidebarLinkContext);

  const [expanded, setExpanded] = useState(
    item.default_expanded !== undefined ? item.default_expanded : depth < 1
  );
  const hasSubItems = item.sub_items && item.sub_items.length > 0;
  const isCollapsible = collapsable && hasSubItems && depth >= 1;
  const childCollapsable = depth === 0 ? fcNonCollapsable : collapsable;

  const shouldShowDownIcon = hasSubItems && depth === 0;

  const handleScroll = (selector) => {
    console.log("Looking for element with selector:", selector);
    const element = document.getElementById(selector);
    console.log("Found element:", element);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(`Element with ID "${selector}" not found`);
    }
    // ✅ Close mobile sidebar after navigation
    if (onLinkClick) onLinkClick();
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (isCollapsible || shouldShowDownIcon) {
      setExpanded(!expanded);
    }
  };

  const renderLink = () => {
    if (!item.link_configuration?.show) return null;

    const config = item.link_configuration;

    if (config.type === "internal") {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleScroll(config.selector_uid);
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
    <li
      style={{
        cursor: isCollapsible || shouldShowDownIcon ? "pointer" : "default",
        listStyleType: "none",
        position: "relative",
      }}
    >
      {isCollapsible && (
        <span
          onClick={handleClick}
          className={`${styles.collapseIcon} ${
            expanded ? styles.collapseIconExpanded : ""
          }`}
        >
          <IoIosArrowDown size={16} />
        </span>
      )}

      <div>
        {typeof item === "string" ? (
          <span dangerouslySetInnerHTML={{ __html: applyMarkers(item) }} />
        ) : (
          <div>
            <div className={styles.contentHeaderWrap}>
              {item.text && (
                <div>
                  <span>
                    {renderTextWithElements(item.text, item.link_parts)}
                  </span>
                </div>
              )}
              {(isCollapsible || shouldShowDownIcon) && (
                <span
                  onClick={handleClick}
                  className={`${styles.downIcon} ${
                    expanded ? styles.downIconExpanded : ""
                  }`}
                >
                  <IoIosArrowDown size={16} />
                </span>
              )}
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
            margin: "5px",
          }}
          className={styles.liSubItems}
        >
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

// ============================================================
// API REFERENCE TABLE
// ============================================================
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
            <code>
              <MarkedText>{prop.name}</MarkedText>
            </code>
          </td>
          <td>
            <em>
              <MarkedText>{prop.type}</MarkedText>
            </em>
          </td>
          <td>
            <MarkedText>{prop.default || "-"}</MarkedText>
          </td>
          <td>
            <MarkedText>{prop.description}</MarkedText>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

// ============================================================
// CONTENT RENDERER
// Uses:
//   • mobile_doc:  SidebarLinkContext + stopPropagation on internal links
//   • main:        MarkedText + applyMarkers everywhere
// ============================================================
const ContentRenderer = ({ content }) => {
  const onLinkClick = useContext(SidebarLinkContext);

  console.log("contenterewr", content);

  const renderLink = (item) => {
    if (!item.link_configuration?.show) return null;
    const config = item.link_configuration;

    if (config.type === "internal") {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            try {
              const element = document.getElementById(config.selector_uid);
              if (element) element.scrollIntoView({ behavior: "smooth" });
            } catch (e) {
              console.error("Scroll error:", e);
            }
            // ✅ Close mobile sidebar after navigation
            if (onLinkClick) onLinkClick();
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
              <div className={styles["content-list-img"]} key={index}>
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
            if (item.hasOwnProperty("selector_uid")) {
              return (
                <h2
                  key={index}
                  className={styles["content-heading"]}
                  id={item.selector_uid}
                >
                  <MarkedText>{item.text}</MarkedText>
                </h2>
              );
            } else {
              return (
                <h2 key={index} className={styles["content-heading"]}>
                  <MarkedText>{item.text}</MarkedText>
                </h2>
              );
            }

          case "h4":
            return (
              <h2
                key={index}
                className={styles["content-inner-heading"]}
                id={item.selector_uid}
              >
                <MarkedText>{item.text}</MarkedText>
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
            return <MarkedText key={index}>{item.text}</MarkedText>;

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
              <h3
                key={index}
                className={styles.second_subheading}
                id={item.selector_uid}
              >
                <MarkedText>{item.text}</MarkedText>
              </h3>
            );

          case "a":
            return (
              <button
                className={styles["view-full-implementation"]}
                key={index}
              >
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
                <MarkedText>{item.text}</MarkedText>
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

          case "li": {
            const [isExpanded, setIsExpanded] = useState(false);
            const hasSubItems = item.sub_items && item.sub_items.length > 0;

            return (
              <li key={index} className={styles["content-list-item"]}>
                <div className={styles.sidebarLi}>
                  {item.text && <MarkedText>{item.text}</MarkedText>}

                  {hasSubItems && (
                    <span
                      onClick={() => setIsExpanded(!isExpanded)}
                      className={`${styles["expand-icon"]} ${
                        isExpanded ? styles["expanded"] : styles["collapsed"]
                      }`}
                    >
                      <IoIosArrowDown size={16} />
                    </span>
                  )}
                  {item.link_configuration && renderLink(item)}
                </div>

                {item.code && (
                  <pre className="script_code">
                    <code>{item.code}</code>
                  </pre>
                )}

                {hasSubItems && (
                  <div
                    className={styles.li_subLi}
                    style={{ display: isExpanded ? "block" : "none" }}
                  >
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
          }

          case "div":
            return (
              <div
                key={index}
                className={item.className || styles["content-div"]}
              >
                {item.text && <MarkedText>{item.text}</MarkedText>}

                {item.children && <ContentRenderer content={item.children} />}

                {item.extra_text && (
                  <div>
                    <MarkedText>{item.extra_text}</MarkedText>
                  </div>
                )}

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
                dangerouslySetInnerHTML={{ __html: applyMarkers(item.text) }}
              />
            );
        }
      })}
    </div>
  );
};

export default ContentRenderer;