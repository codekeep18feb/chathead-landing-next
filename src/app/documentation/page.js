"use client";

import React, { useState } from "react";
// import video from "../../../Asset/demo_imgs/before.jpeg"
import "./test.css"; // Import the CSS file

// Example payload with additional tags and Lorem Ipsum content
const payload = {
  installation: {
    "Peer to Admin - V1 (Chat + Auth)": [
      {
        VANILA_JS: {
          content: [
            {
              tag_type: "h4",
              text: `This type of chat application is tailored for simple websites built with HTML, JavaScript, and CSS, typically used as informational sites. It is ideal for scenarios where the existing product lacks built-in authentication but requires the seamless integration of both authentication and chat functionality.`,
            },
            {
              tag_type: "p",
              text: `
Instant messaging boosts user engagement, fostering community, satisfaction, and loyalty. It also provides real-time support, allowing users to get quick help. The Chat SDK enables seamless real-time messaging on any app or device.`,
            },

            //prerequisite?
            {
              tag_type: "div",
              children: [
                { tag_type: "h2", text: "Prerequisite" },

                {
                  tag_type: "p",
                  text: "To integrate Chat into your app, do the following:",
                },
                {
                  tag_type: "ol",
                  items: [
                    {
                      text: "Signup/Login to your account at AddChat.",
                      link_parts: [
                        {
                          text: "Signup/Login",
                          link: "https://www.google.com/",
                        },
                      ],
                    },

                    {
                      tag_type: "li",
                      text: "Create an app as per your use case. (Be Sure to choose the right Mode [Headless | HeaderFul])",
                    },

                    {
                      tag_type: "li",
                      text: "Go To created apps's detail page and locate the credentials.",
                    },
                  ],
                },
              ],
            },

            {
              tag_type: "div",
              children: [
                { tag_type: "h2", text: "Project setup" },

                {
                  tag_type: "p",
                  text: "To integrate Chat into your app, do the following:",
                },

                {
                  tag_type: "feature_options",
                  options: [
                    {
                      text: "[HeaderFul] Don't currently have a header and would like to have one",
                      description: [
                       
                        {
                          tag_type: "p",
                          text: "In this mode [HeaderFul], the header will include authentication options (Signup, Login, etc.) along with a chat box for user interaction.",
                        },

                        {
                          tag_type: "p",
                          text: "To integrate it into your app, Do the following.",
                        },

                        {
                          tag_type: "ol",
                          items: [
                            {
                              tag_type: "li",
                              text: "Update the script credentials section with your app's credentials",
                              sub_items: [
                                {
                                  tag_type: "li",
                                  text: "Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",
                                  // extra_text:
                                  //   "Update the script credentials section with your app's credentials",
                                  code: '<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>',
                                },
                                {
                                  tag_type: "li",
                                  // text: "after script is loaded we can initialize it like below.",
                                  // extra_text: "kindly add it below the first script",
                                  code: `<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js"></script>`,
                                },
                                {
                                  tag_type: "li",
                                  text: "after script is loaded we can initialize it like below.",
                                  // extra_text: "kindly add it below the first script",
                                  code: `<script>
            document.addEventListener("DOMContentLoaded", async function () {
              const token = localStorage.getItem("tezkit_token");
              if (token) {
                window.chathead.initialize(token);
              } else {
                window.chathead.setUp(
                  "<Your App Name>", 
                  "<Your Api Key>", 
                  JSON.stringify({
                    "header_theme": {
                      "backgroundColor": "rgb(30, 136, 125)"
                    },
                    "chat_opener_theme": {
                      "backgroundColor": "rgb(41, 48, 78)"
                    }
                  }),
                  true,
                  "/index.html"
                );
              }
            });
          </script>
          `,
                                },
                              ],
                            },
                            {
                              tag_type: "li",
                              text: "Verify if you see the header on the top of your page and chat icon on the bottom of your page. like in below image ",
                              // "more_text": "To add the necessary permissions, in /app/Manifests/AndroidManifest.xml, add the following permissions after </application>:",
                              img: "Asset/headerful_example.png",
                            },
                           

                            {
                              text: "Refer to the example code in the screenshot above if needed for guidance.",
                              link_parts: [
                                {
                                  text: "example code",
                                  link: "https://github.com/codekeep18feb/examples/tree/main/vanila_js_sites/p2a_v1_clients",
                                },
                              ],
                            },
                            
                          ],

                          
                        },
                        {
                          tag_type: "video",
                          src: "https://cdn.pixabay.com/video/2024/01/23/197898-905833761_tiny.mp4",
                          desc: "Demo for P2A V1 [Headful]",
                        },
                       
                        {
                          tag_type: "div",
                          children: [

                       

                            { tag_type: "h3", text: "Congratulations Integration Should be Successfully Done by now!" },
            
                            
                            {
                              tag_type: "p",
                              text: "Your users can now sign up and seamlessly chat with the Admin Team, enabling two-way communication.",
                            },
                            
                          ],
                        },
                      ],
                    },
                    {
                      text: "[HeaderLess] Currently have an Existing header and would like not to have one;",
                      description: [
                        {
                          tag_type: "p",
                          text: "In this mode, instead of displaying a standard header, all the authentication components (Signup, Login, etc.) are grouped together. These components are designed to be flexible, allowing you to place them in a fixed position anywhere within your custom header or elsewhere in your layout. Additionally, this mode includes a chat box for user interaction",
                        },

                        {
                          tag_type: "p",
                          text: "To integrate Chat this into your app, Do the following.",
                        },

                        {
                          tag_type: "ol",
                          items: [
                            {
                              tag_type: "li",
                              text: "Insert the following div into any desired location within your HTML page where you want the Authentication Component to appear.",
                              // extra_text: "kindly add it below the first script",
                              code: `<div id="tezkit-auth-area" style="min-width: 200px;"> </div>`,
                            },
                            {
                              tag_type: "li",
                              text: "Update the script credentials section with your app's credentials",
                              sub_items: [
                                {
                                  tag_type: "li",
                                  text: "Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",
                                  // extra_text:
                                  //   "Update the script credentials section with your app's credentials",
                                  code: '<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>',
                                },
                                {
                                  tag_type: "li",
                                  // text: "after script is loaded we can initialize it like below.",
                                  // extra_text: "kindly add it below the first script",
                                  code: `<script src="node_modules/chathead-consumer-client/dist/bundle.js"></script>`,
                                },
                                {
                                  tag_type: "li",
                                  text: "after script is loaded we can initialize it like below.",
                                  // extra_text: "kindly add it below the first script",
                                  code: `<script>
            document.addEventListener("DOMContentLoaded", async function () {
              const token = localStorage.getItem("tezkit_token");
              if (token) {
                window.chathead.initialize(token);
              } else {
                window.chathead.setUp(
                  "<Your App Name>", 
                  "<Your Api Key>", 
                  JSON.stringify({
                    "header_theme": {
                      "backgroundColor": "rgb(30, 136, 125)"
                    },
                    "chat_opener_theme": {
                      "backgroundColor": "rgb(41, 48, 78)"
                    }
                  }),
                  false,
                  "/index.html"
                );
              }
            });
          </script>
          `,
                                },
                              ],
                            },

                            {
                              tag_type: "li",
                              text: "Verify if you see the Auth components where you placed them in your page and chat icon on the bottom of your page. like in below image ",
                              // "more_text": "To add the necessary permissions, in /app/Manifests/AndroidManifest.xml, add the following permissions after </application>:",
                              img: "Asset/headerless_example.png",
                            },
                            {
                              text: "Refer to the example code in the screenshot above if needed for guidance.",
                              link_parts: [
                                {
                                  text: "example code",
                                  link: "https://github.com/codekeep18feb/examples/tree/main/vanila_js_sites/p2a_v1_clients",
                                },
                              ],
                            },
                            
                            
                          ],
                        
                        },
                        {
                          tag_type: "div",
                          children: [

                            {
                              tag_type: "div",
                              children: [
                                {
                                  tag_type: "video",
                                  src: "https://cdn.pixabay.com/video/2024/01/23/197898-905833761_tiny.mp4",
                                  desc: "Demo for P2A V1 [HeadLess]",
                                },
                              ],
                            },

                            { tag_type: "h3", text: "Congratulations Integration Should be Successfully Done by now!" },
            
                            
                            {
                              tag_type: "p",
                              text: "Your users can now sign up and seamlessly chat with the Admin Team, enabling two-way communication.",
                            },
                            
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },

          ],
        },
      },
      {
        REACT: {
          content: [
            { tag_type: "h1", text: "Install it from REACT 3000source" },
            { tag_type: "div", text: "<div >sdsfdsdfon REACT devices.</div>" },
            { tag_type: "div", text: "sdsdfon REACT devices." },
          ],
        },
      },
    ],
  },
 
};

const CondRadioRender = ({ r_options }) => {
  // Set the initial selected option to the first one
  const [selectedOption, setSelectedOption] = useState(r_options[0].text);

  const handleChange = (event) => {
    // Update the selected option based on user selection
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="content-paragraph">
        {r_options.map((option, index) => (
          <div key={index} className="radio-container">
            <label>
              <input
                type="radio"
                name="option"
                value={option.text}
                checked={selectedOption === option.text}
                onChange={handleChange}
                className="custom-radio"
              />
              <p className="input_text">{option.text}</p>
            </label>
          </div>
        ))}
      </div>
      <div className="description">
        <h3>
          Select the Right Mode and follow the respective integration as below
          mentioned Steps.
        </h3>
        <div>
          {/* {r_options.find(option => option.text === selectedOption)?.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                    )
                )
                    
                    } */}

          <ContentRenderer
            content={
              r_options.find((option) => option.text === selectedOption)
                ?.description
            }
            key={8888}
          />
        </div>
      </div>
    </div>
  );
};

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
];

const renderTextWithElements = (
  text,
  linkParts,
  buttonParts,
  highlightParts
) => {
  if (!linkParts && !buttonParts && !highlightParts) {
    return text;
  }

  const parts = [];
  let lastIndex = 0;

  const elements = [
    ...(linkParts || []),
    ...(buttonParts || []),
    ...(highlightParts || []),
  ];
  let sortedParts = elements.sort(
    (a, b) => text.indexOf(a.text) - text.indexOf(b.text)
  );

  sortedParts.forEach((part, index) => {
    const startIndex = text.indexOf(part.text, lastIndex);

    if (startIndex > -1) {
      if (startIndex > lastIndex) {
        parts.push(text.substring(lastIndex, startIndex));
      }

      if (part.link) {
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
      } else if (part.onClick) {
        parts.push(
          <button key={`button-${index}`} onClick={part.onClick}>
            {part.text}
          </button>
        );
      } else if (
        highlightParts &&
        highlightParts.some((hp) => hp.text === part.text)
      ) {
        parts.push(
          <span
            key={`highlight-${index}`}
            style={{ backgroundColor: "green", color: "white" }}
          >
            {part.text}
          </span>
        );
      }

      lastIndex = startIndex + part.text.length;
    }
  });

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

const List = ({ items, listType }) =>
  listType === "ol" ? (
    <ol className="content-list ordered">
      {items.map((item, index) => (
        <ListItem key={index} item={item} listType={listType} />
      ))}
    </ol>
  ) : (
    <ul className="content-list">
      {items.map((item, index) => (
        <ListItem key={index} item={item} listType={listType} />
      ))}
    </ul>
  );

const ListItem = ({ item, listType }) => {
  const linkParts = item.link_parts || [];
  const buttonParts = item.buttonParts || [];
  const highlightParts = item.highlightParts || [];

  return (
    <li>
      {typeof item === "string" ? (
        <span dangerouslySetInnerHTML={{ __html: item }} />
      ) : (
        <React.Fragment>
          {item.text ? (
            <span>
              {renderTextWithElements(
                item.text,
                linkParts,
                buttonParts,
                highlightParts
              )}
            </span>
          ) : null}
          <div>
            {item.img && (
              <img src={item.img} alt="" className="content-list-img" />
            )}
          </div>
          {item.more_text && <p>{item.more_text}</p>}
          {item.add_more_p && <p>{item.add_more_p}</p>}
          {item.code && (
            <pre className="script_code">
              <code>{item.code}</code>
            </pre>
          )}
          {item.extra_text && <p>{item.extra_text}</p>}
          {item.sub_items && (
            <List items={item.sub_items} listType={item.listType || listType} />
          )}
        </React.Fragment>
      )}
    </li>
  );
};

const ContentRenderer = ({ content }) => {
  return (
    <div className="contents">
      {content.map((item, index) => {
        const Tag = supportedTags.includes(item.tag_type)
          ? item.tag_type
          : "div";

        if (item.tag_type === "img") {
          return (
            <div className="content-img">
              <img key={index} src={item.src} alt={item.alt || ""} />
            </div>
          );
        }

        if (item.tag_type === "video") {
          return (
            <div key={index}>
              <h3>{item.desc}</h3>
              <div className="videos">
                <video width="100%" height="auto" controls>
                  <source src={item.src} type="video/mp4" />
                </video>
              </div>
            </div>
          );
        }
        if (item.tag_type === "h2") {
          return (
            <h2 key={index} className="content-heading">
              {item.text}
            </h2>
          );
        } else if (item.tag_type === "h4") {
          return (
            <h2 key={index} className="content-inner-heading">
              {item.text}
            </h2>
          );
        } else if (item.tag_type === "feature_options") {
          return <CondRadioRender r_options={item.options} key={index} />;
        }

        // <CondRadioRender r_options={options} />
        else if (item.tag_type === "h3") {
          return (
            <h3 key={index} className="content-subheading">
              {item.text}
            </h3>
          );
        } else if (item.tag_type === "p") {
          return (
            <p key={index} className="content-paragraph">
              {item.text}
            </p>
          );
        } else if (item.tag_type === "img") {
          return (
            <div className="content-img">
              <img key={index} src={item.src} alt={item.alt || ""} />
            </div>
          );
        } else if (item.tag_type === "a") {
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
        } else if (item.tag_type === "ul" || item.tag_type === "ol") {
          return (
            <List key={index} items={item.items} listType={item.tag_type} />
          );
        } else if (item.tag_type === "blockquote") {
          return (
            <blockquote key={index} className="content-blockquote">
              {item.text}
            </blockquote>
          );
        } else if (item.tag_type === "code") {
          return (
            <pre key={index} className="content-code">
              <code>{item.text}</code>
            </pre>
          );
        } else if (item.tag_type === "li") {
          return (
            <li key={index} className="content-list-item">
              {item.text}
              {item.sub_items && (
                <List items={item.sub_items} listType={item.listType || "ul"} />
              )}
            </li>
          );
        } else if (item.tag_type === "div") {
          return (
            <div key={index} className="content-div">
              {item.children &&
                item.children.map((child, i) => (
                  <ContentRenderer key={i} content={[child]} />
                ))}
            </div>
          );
        } else {
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

const Document = () => {
  const [selectedKey, setSelectedKey] = useState(Object.keys(payload)[0]);
  const [selectedTab, setSelectedTab] = useState("VANILA_JS");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleKeyClick = (key) => {
    setSelectedKey(key);
    setSelectedTab("VANILA_JS"); // reset tab selection to default
  };

  const renderTabs = () => {
    const versions = ["VANILA_JS", "REACT"]; // Directly define the versions
    return (
      <div className="tabs">
        {versions.map((version) => (
          <button
            key={version}
            onClick={() => setSelectedTab(version)}
            className={`tab-button ${selectedTab === version ? "active" : ""}`}
          >
            {version.toUpperCase()}
          </button>
        ))}
      </div>
    );
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); // Toggle the state on click
  };

  const renderContent = () => {
    if (!selectedKey) return <div>Select a key from the left</div>;

    const steps = Object.keys(payload[selectedKey]);
    return (
      <div className="content-area">
        {steps.map((step) => (
          <div key={step} className="step">
            <h1 className="step-title">{step}</h1>
            {payload[selectedKey][step].map((item, index) => {
              const content = item[selectedTab]
                ? item[selectedTab].content
                : null;
              return content ? (
                <ContentRenderer key={index} content={content} />
              ) : null;
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="document-container">
      <div className="doc_sidebar">
        <div className={`sidebar_wrapper ${isDropdownOpen ? "active" : ""}`}>
          {Object.keys(payload).map((key) => (
            <div
              key={key}
              onClick={() => handleKeyClick(key)}
              className="sidebar-item"
            >
              <h2>{key}</h2>
            </div>
          ))}
        </div>
        <div className="downIcon" onClick={toggleDropdown}>
          <h3>Overview</h3>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0C12.0333 0 9.13319 0.879734 6.66645 2.52796C4.19972 4.17618 2.27713 6.51886 1.14181 9.25975C0.00649932 12.0006 -0.290551 15.0166 0.288227 17.9264C0.867006 20.8361 2.29562 23.5088 4.3934 25.6066C6.49119 27.7044 9.16394 29.133 12.0737 29.7118C14.9834 30.2906 17.9994 29.9935 20.7403 28.8582C23.4811 27.7229 25.8238 25.8003 27.472 23.3335C29.1203 20.8668 30 17.9667 30 15C29.9953 11.0232 28.4135 7.21061 25.6014 4.39858C22.7894 1.58655 18.9768 0.00469155 15 0ZM22.7823 13.2368L15.9641 20.055C15.7084 20.3106 15.3616 20.4543 15 20.4543C14.6384 20.4543 14.2916 20.3106 14.0359 20.055L7.21773 13.2368C6.96934 12.9796 6.83189 12.6352 6.835 12.2776C6.8381 11.9201 6.98151 11.5781 7.23434 11.3252C7.48717 11.0724 7.82919 10.929 8.18673 10.9259C8.54427 10.9228 8.88873 11.0602 9.14591 11.3086L15 17.1627L20.8541 11.3086C21.1113 11.0602 21.4557 10.9228 21.8133 10.9259C22.1708 10.929 22.5128 11.0724 22.7657 11.3252C23.0185 11.5781 23.1619 11.9201 23.165 12.2776C23.1681 12.6352 23.0307 12.9796 22.7823 13.2368Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="rightWrap">
        <div className="main-content">
          {renderTabs()}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Document;
