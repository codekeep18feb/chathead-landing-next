"use client";

import { useRouter } from "next/navigation";

const Resources = () => {
  const router = useRouter();

  const handleCardClick = (path) => {
    router.push(path);
  };
  const resourcesList = {
    addChat_blog: [
      {
        icon: "fa-solid fa-chart-bar",
        subHeading: "Blog",
        // text: "Foster learning with tools that keep students engaged and facilitate collaboration     (_lorem ipsum)",
      },
      {
        icon: "fa-solid fa-chart-bar",
        subHeading:
          "Understanding In-App Chat: Benefits, Key Features and Use Cases   (_lorem ipsum)",
        //  text: "Improve productivity and collaboration with real-time communication tools for teams     (_lorem ipsum)",
      },
    ],
    company_type: [
      {
        icon: "fa-solid fa-user",
        subHeading: "Interactive demo  (_lorem ipsum)",
        // text: "Fully compliant and endlessly scalable solution for large enterprises     (_lorem ipsum)",
      },
      {
        icon: "fa-solid fa-envelope",
        subHeading: "Help center  (_lorem ipsum)",
        // text: "A feature rich, quick-to-deploy engagement solution for fast-growing startups     (_lorem ipsum)",
      },
      {
        icon: "fa-solid fa-envelope",
        subHeading: "Partners  (_lorem ipsum)",
        // text: "A feature rich, quick-to-deploy engagement solution for fast-growing startups     (_lorem ipsum)",
      },
    ],
  };

  return (
    <div className="platform-container">
      <div className="platform-sections">
        <div className="platform-section">
          <h2 className="section-title">MagicChat Blog</h2>
          <div className="newcard-list">
            {resourcesList.addChat_blog.map((item, index) => (
              <div
                className="card"
                key={index}
                onClick={() =>
                  handleCardClick(
                    `/${item.subHeading.toLowerCase().replace(/ /g, "-")}`
                  )
                }
              >
                <div className="card-header">
                  <div className="icon_wrapper">
                    <i className={`card-icon ${item.icon}`}></i>
                  </div>
                  <h3>{item.subHeading}</h3>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="platform-section">
          <h2 className="section-title">Resources</h2>
          <div className="newcard-list">
            {resourcesList.company_type.map((item, index) => (
              <div className="card" key={index}>
                <div className="card-header">
                  <div className="icon_wrapper">
                    <i className={`card-icon ${item.icon}`}></i>
                  </div>
                  <h3>{item.subHeading}</h3>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
