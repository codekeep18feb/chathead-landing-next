"use client";

import React, { useState } from "react";
// import video from "../../../Asset/demo_imgs/before.jpeg"
import "./test.css"; // Import the CSS file
// import "Asset/globe.png" from "./lets_integrate.jpg";

// integrate_example.png
// Example payload with additional tags and Lorem Ipsum content
const payload = {
  installation: {
    "Peer to Admin - V1 - SDK quickstart updated!": [
      {
        VANILA_JS: {
          content: [
            {
              tag_type: "feature_options",
              options: [
                {
                  text: "Don't currently have a header and would like to have one",
                  description: [
                    {
                      tag_type: "p",
                      text: "here some thing1-1",
                    },

                    {
                      tag_type: "img",
                      src: "Asset/globe.png",
                      alt: "alt n",
                    },
                    {
                      tag_type: "p",
                      text: "here some thing1-2",
                    },
                  ],
                },
                {
                  text: "Do have a header so would like to get Header Components Seprately so i can add them to my existing header",
                  description: [
                    {
                      tag_type: "p",
                      text: "here some thing2-1",
                    },
                    {
                      tag_type: "p",
                      text: "here some thing2-2",
                    },
                  ],
                },
                {
                  text: "Other",
                  description: [
                    {
                      tag_type: "p",
                      text: "Have more complex requirement :: No Worries, We got you covered",
                    },
                    {
                      tag_type: "p",
                      text: "Our Tech team can help you to integrate it any in scenerios",
                    },
                  ],
                },
              ],
            },

            {
              tag_type: "p",
              text: "Instant messaging enhances user engagement by enabling users to connect and form a community within the app. Increased engagement can lead to increased user satisfaction and loyalty to your app. An instant messaging feature can also provide real-time support to users, allowing them to get help and answers to their questions quickly. The Chat SDK enables you to embed real-time messaging in any app, on any device, anywhere.",
            },

            {
              tag_type: "div",
              children: [
                {
                  tag_type: "ul",
                  items: [
                    {
                      text: "Signup/Login to your account at Qchat Admin Page.",
                      link_parts: [
                        {
                          text: "Signup/Login",
                          link: "https://www.google.com/",
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            { tag_type: "h2", text: "Project setup" },
            {
              tag_type: "p",
              text: "To integrate Chat into your app, do the following:",
            },

            {
              tag_type: "div",
              children: [
                {
                  tag_type: "ol",
                  items: [
                    {
                      tag_type: "li",
                      text: "Get your credentials Handy; Find it the credentials section of the created App' Detail Page",
                    },

                    {
                      tag_type: "li",
                      text: "Update the script credentials section with your app's credentials",
                      sub_items: [
                        {
                          tag_type: "li",
                          text: "Find the entry file usually (index.html) and this below code in the head section of the html page.",
                          extra_text:
                            "Update the script credentials section with your app's credentials",
                          code: '<script src="node_modules/chathead-consumer-client/dist/bundle.js"></script>',
                        },
                        {
                          tag_type: "li",
                          text: "after script is loaded we can initialize it like below.",
                          extra_text: "kindly add it below the first script",
                          code: `<script>\n\n async function makeMeAPICall(token) {\n const apiUrl = 'https://v1u9b7mohg.execute-api.ap-south-1.amazonaws.com/prod/me';\n\n try {\n const response = await fetch(apiUrl, {\n method: 'GET',\n headers: {\n 'Authorization': token,\n 'Accept': '*/*'\n }\n });\n\n if (!response.ok) {\n throw new Error('Network response was not ok');\n }\n\n const data = await response.json();\n console.log('User me api data:', data.id);\n return data;\n } catch (error) {\n console.error('There was a problem with the fetch operation:', error);\n throw error;\n }\n }\n \n // Wait for the document to be fully loaded\n document.addEventListener("DOMContentLoaded", async function() {\n\n const token = localStorage.getItem('tezkit_token');\n if (token){\n var loggedInUser = await makeMeAPICall(token);\n window.chathead.initialize(loggedInUser);\n }\n else{\n window.chathead.setUp(app_name="app1_acm_true_tenant5", \n api_key="dGVuYW50NV9fU0VQUkFUT1JfX2FwcDFfYWNtX3RydWVfdGVuYW50NQ==");\n window.chathead.initialize(null);\n }\n });\n\n</script>`,
                        },
                      ],
                    },
                    {
                      tag_type: "li",
                      text: "Verify if you see the header on the top of your page. like above",
                      // "more_text": "To add the necessary permissions, in /app/Manifests/AndroidManifest.xml, add the following permissions after </application>:",
                      img: "Asset/globe.png",
                    },
                    {
                      tag_type: "li",
                      text: "Verify if you see the chat icon on the bottom of your page.",
                      // "more_text": "In /Gradle Scripts/proguard-rules.pro, add the following line:",
                      img: "Asset/globe.png",
                    },
                  ],
                },
              ],
            },

            { tag_type: "h2", text: "Now visitors have become users" },
            {
              tag_type: "p",
              text: "which means we can keep close connection with them",
            },

            {
              tag_type: "div",
              children: [
                {
                  tag_type: "h4",
                  text: "Users now should be able to do the following",
                },
                {
                  tag_type: "ul",
                  items: [
                    "User can Signup / login",
                    "User can send message to the Admin",
                    "User can receive message to the Admin",
                  ],
                },
              ],
            },

            { tag_type: "h3", text: "API reference" },
            {
              tag_type: "div",
              children: [
                {
                  tag_type: "ul",
                  items: [
                    {
                      tag_type: "li",
                      text: "makeMeAPICall",
                    },
                    {
                      tag_type: "li",
                      text: "window.chathead.initialize(<loggedInUser>)",
                    },
                    {
                      tag_type: "li",
                      text: "window.chathead.setUp(<app_name>, <api_key>)",
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
  probable_use_cases: {
    install: [
      {
        VANILA_JS: {
          content: [
            { tag_type: "h1", text: "Install it from VANILA_JS source" },
            {
              tag_type: "p",
              text: "Ensure your device meets the system requirements before installation.",
            },
            {
              tag_type: "img",
              src: "https://images.pexels.com/photos/10618233/pexels-photo-10618233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Installation Image",
            },
            {
              tag_type: "blockquote",
              text: "Refer to the user manual for detailed instructions.",
            },
          ],
        },
      },
      {
        REACT: {
          content: [
            { tag_type: "h1", text: "Install it from REACT source" },
            {
              tag_type: "p",
              text: "Follow the official guide to install on your REACT device.",
            },
          ],
        },
      },
    ],
    usage: [
      {
        VANILA_JS: {
          content: [
            { tag_type: "h2", text: "Usage Instructions for VANILA_JS" },
            {
              tag_type: "ul",
              items: [
                "Launch the app",
                "Go to the settings menu",
                "Adjust the settings as needed",
              ],
            },
            {
              tag_type: "p",
              text: "Keep the app updated for best performance.",
            },
          ],
        },
      },
      {
        REACT: {
          content: [
            { tag_type: "h2", text: "Usage Instructions for REACT" },
            {
              tag_type: "ul",
              items: [
                "Start the application",
                "Access settings",
                "Customize your options",
              ],
            },
            { tag_type: "p", text: "Check for updates regularly." },
          ],
        },
      },
    ],
  },
  examples: {
    install: [
      {
        VANILA_JS: {
          content: [
            { tag_type: "h1", text: "examples information" },
            {
              tag_type: "p",
              text: "Ensure your device meets the system requirements before installation.",
            },
            {
              tag_type: "img",
              src: "https://images.pexels.com/photos/10618233/pexels-photo-10618233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Installation Image",
            },
            {
              tag_type: "blockquote",
              text: "Refer to the user manual for detailed instructions.",
            },
          ],
        },
      },
      {
        REACT: {
          content: [
            { tag_type: "h1", text: "Install it from REACT source" },
            {
              tag_type: "p",
              text: "Follow the official guide to install on your REACT device.",
            },
          ],
        },
      },
    ],
    usage: [
      {
        VANILA_JS: {
          content: [
            { tag_type: "h2", text: "Usage Instructions for VANILA_JS" },
            {
              tag_type: "ul",
              items: [
                "Launch the app",
                "Go to the settings menu",
                "Adjust the settings as needed",
              ],
            },
            {
              tag_type: "p",
              text: "Keep the app updated for best performance.",
            },
          ],
        },
      },
      {
        REACT: {
          content: [
            { tag_type: "h2", text: "Usage Instructions for REACT" },
            {
              tag_type: "ul",
              items: [
                "Start the application",
                "Access settings",
                "Customize your options",
              ],
            },
            { tag_type: "p", text: "Check for updates regularly." },
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
      <div className="videos">
        <video width="100%" height="auto" controls>
          <source
            src="https://cdn.pixabay.com/video/2024/01/23/197898-905833761_tiny.mp4"
            type="video/mp4"
          />
        </video>
      </div>
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
        <h3>Selected Option Description:</h3>
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
    setIsDropdownOpen(prevState => !prevState);  // Toggle the state on click
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
