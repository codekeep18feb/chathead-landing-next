"use client";

import React, { useState, useEffect, Suspense } from "react";
import "./test.css";
import { useSearchParams } from "next/navigation";
import YouTubeEmbed from "../components/YouTubeVideo";

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
    <div className="setup">
      {isMobile ? (
        <div className="dropdown">
          <select
            value={selectedOption || ""}
            onChange={(e) => handleOptionChange(e.target.value)}
            className="dropdown-select"
          >
            {r_options.map((option, index) => (
              <option key={index} value={option.text}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="tabs">
          {r_options.map((option, index) => (
            <button
              key={index}
              className={`tab-button ${
                selectedOption === option.text ? "active" : ""
              }`}
              onClick={() => handleOptionChange(option.text)}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}

      <div className="description">
        <ContentRenderer content={selectedDescription} />
      </div>
    </div>
  );
};

const supportedTags = [
  "h1", "h2", "h3", "h4", "p", "div", "img", "a", 
  "blockquote", "ul", "li", "code", "ol"
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


const List = ({ items, listType, collapsable }) => {
  return listType === "ol" ? (
    <ol className="content-list ordered">
      {items.map((item, index) => (
        <ListItem 
          key={index} 
          item={item} 
          listType={listType}
          collapsable={collapsable}
        />
      ))}
    </ol>
  ) : (
    <ul className="content-list">
      {items.map((item, index) => (
        <ListItem 
          key={index} 
          item={item} 
          listType={listType}
          collapsable={collapsable}
        />
      ))}
    </ul>
  );
};

const ListItem = ({ item, listType, collapsable }) => {
  const [expanded, setExpanded] = useState(false);
  const hasSubItems = item.sub_items && item.sub_items.length > 0;
  const isCollapsible = collapsable && hasSubItems;

  const handleClick = (e) => {
    e.stopPropagation();
    if (isCollapsible) {
      setExpanded(!expanded);
    }
  };

  const handleChevronClick = (e) => {
    e.stopPropagation();
    if (isCollapsible) {
      setExpanded(!expanded);
    }
  };

  return (
    <li
      style={{ 
        cursor: isCollapsible ? 'pointer' : 'default',
        listStyleType: listType === 'ol' ? 'none' : 'disc',
        position: 'relative',
        paddingLeft: '20px'
      }}
    >
      {isCollapsible && (
        <span 
          onClick={handleChevronClick}
          style={{
            position: 'absolute',
            left: 0,
            transform: expanded ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}>
          ▶
        </span>
      )}
      
      <div onClick={handleClick}>
        {typeof item === "string" ? (
          <span dangerouslySetInnerHTML={{ __html: item }} />
        ) : (
          <>
            {item.text && (
              <span>
                {renderTextWithElements(item.text, item.link_parts)}
              </span>
            )}
            {/* ... (rest of item content rendering remains same) ... */}
          </>
        )}
      </div>

      {hasSubItems && (
        <div style={{ 
          display: expanded || !isCollapsible ? 'block' : 'none',
          marginLeft: '20px',
          transition: 'all 0.3s ease',
          pointerEvents: 'auto'
        }}>
          <List 
            items={item.sub_items} 
            listType={item.listType || listType}
            collapsable={collapsable}
          />
        </div>
      )}
    </li>
  );
};


// standard list all items at once.
// const List = ({ items, listType }) => (
//   listType === "ol" ? (
//     <ol className="content-list ordered">
//       {items.map((item, index) => (
//         <ListItem key={index} item={item} listType={listType} />
//       ))}
//     </ol>
//   ) : (
//     <ul className="content-list">
//       {items.map((item, index) => (
//         <ListItem key={index} item={item} listType={listType} />
//       ))}
//     </ul>
//   )
// );

// const ListItem = ({ item, listType }) => (
//   <li>
//     {typeof item === "string" ? (
//       <span dangerouslySetInnerHTML={{ __html: item }} />
//     ) : (
//       <>
//         {item.text && (
//           <span>
//             {renderTextWithElements(item.text, item.link_parts)}
//           </span>
//         )}
//         <div>
//           {item.img && (
//             <img src={item.img} alt="" className="content-list-img" />
//           )}
//         </div>
//         {item.more_text && <p>{item.more_text}</p>}
//         {item.code && (
//           <pre className="script_code">
//             <code>{item.code}</code>
//           </pre>
//         )}
//         {item.extra_text && <p>{item.extra_text}</p>}
//         {item.sub_items && (
//           <List items={item.sub_items} listType={item.listType || listType} />
//         )}
//       </>
//     )}
//   </li>
// );

const ContentRenderer = ({ content }) => {
  return (
    <div className="contents">
      {content?.map((item, index) => {
        const Tag = supportedTags.includes(item.tag_type) ? item.tag_type : "div";

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
                <div className="videos_wrapper">
                  <YouTubeEmbed src={item.src} desc={item.desc} />
                </div>
              </div>
            );

          case "h2":
            return <h2 key={index} className="content-heading">{item.text}</h2>;
            
          case "h4":
            return <h2 key={index} className="content-inner-heading">{item.text}</h2>;
            
          case "feature_options":
            return <CondRadioRender r_options={item.options} key={index} />;

          case "p":
            return <p key={index} className="content-subheading">{item.text}</p>;

          case "h3":
            return <h3 key={index} className="second_subheading">{item.text}</h3>;

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
            return <List key={index} items={item.items} listType={item.tag_type} collapsable={item.property?.collapsable}/>;

          case "blockquote":
            return <blockquote key={index} className="content-blockquote">{item.text}</blockquote>;

          case "code":
            return (
              <pre key={index} className="content-code">
                <code>{item.text}</code>
              </pre>
            );

          case "li":
            return (
              <li key={index} className="content-list-item">
                {item.text}
                {item.sub_items && (
                  <List items={item.sub_items} listType={item.listType || "ul"} />
                )}
              </li>
            );

          case "div":
            return (
              <div key={index} className="content-div">
                {item.children?.map((child, i) => (
                  <ContentRenderer
                    key={`${index}-${i}`}
                    content={[child]}
                  />
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