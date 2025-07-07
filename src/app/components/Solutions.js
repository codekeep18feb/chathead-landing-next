"use client";

import { useRouter } from "next/navigation";

const Solutions = () => {
  const router = useRouter();

  const handleCardClick = (path) => {
    router.push(path);
  };

  const solutionList = {
    useCase: [
      {
        icon: "fa-solid fa-chart-bar",
        subHeading: "Marketplace",
        text: "Boost buyer-seller transactions with real-time chat   (_lorem ipsum)",
      },
      {
        icon: "fa-solid fa-chart-bar",
        subHeading: "On-Demand Services",
        text: "Enhance service experience with direct communication between customers and providers     (_lorem ipsum)",
      },
      {
        icon: "fa-solid fa-chart-bar",
        subHeading: "Matrimony",
        text: "Create meaningful connections with secure 1:1 conversations    (_lorem ipsum)",
      },
      {
        icon: "fa-solid fa-chart-bar",
        subHeading: "Healthcare & Telehealth",
        text: "Support doctor-patient and other sensitive communication with HIPAA-compliant chat     (_lorem ipsum)",
      },
      {
        icon: "fa-solid fa-chart-bar",
        subHeading: "Online Education & Ed-Tech",
        text: "Foster learning with tools that keep students engaged and facilitate collaboration     (_lorem ipsum)",
      },
      {
        icon: "fa-solid fa-chart-bar",
        subHeading: "E-commerce",
        text: "Strengthen community engagement through dynamic, real-time communication tools     (_lorem ipsum)",
      },
      {
        icon: "fa-solid fa-chart-bar",
        subHeading: "Financial Services",
        text: "Strengthen community engagement through dynamic, real-time communication tools     (_lorem ipsum)",
      },
      {
        icon: "fa-solid fa-chart-bar",
        subHeading: "Grocery Delivery",
        text: "Seamlessly deploy chat to your SaaS product with built-in multi tenancy     (_lorem ipsum)",
      },
      {
        icon: "fa-solid fa-chart-bar",
        subHeading: "Travel",
        text: "Liven virtual events with dynamic chat, powered by AI and smart moderation     (_lorem ipsum)",
      },
      {
        icon: "fa-solid fa-chart-bar",
        subHeading: "Real Estate",
        text: "Improve productivity and collaboration with real-time communication tools for teams     (_lorem ipsum)",
      },
      {
        icon: "fa-solid fa-chart-bar",
        subHeading: "Legal Tech",
        text: "Improve productivity and collaboration with real-time communication tools for teams     (_lorem ipsum)",
      },
    ],
    company_type: [
      {
        icon: "fa-solid fa-user",
        subHeading: "Enterprise",
        text: "Fully compliant and endlessly scalable solution for large enterprises     (_lorem ipsum)",
      },
      {
        icon: "fa-solid fa-envelope",
        subHeading: "Startups",
        text: "A feature rich, quick-to-deploy engagement solution for fast-growing startups     (_lorem ipsum)",
      },
    ],
  };

  return (
    <div className="platform-container">
      <div className="platform-sections">
        <div className="platform-section">
          <>
            <h2 className="section-title">By use case</h2>
          </>
          <div className="card-list">
            {solutionList.useCase.map((item, index) => (
              <div
                className="card"
                key={index}
                onClick={() =>
                  handleCardClick(
                    `/${item.subHeading
                      .toLowerCase()
                      .replace(/[^a-z0-9 ]/g, "")  // remove special characters
                      .trim()                      // remove extra space at the ends
                      .replace(/\s+/g, "-")}`      // replace spaces with hyphen
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
          <>
            <h2 className="section-title">By company type</h2>
          </>
          <div className="card-list newcard-list">
            {solutionList.company_type.map((item, index) => (
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

export default Solutions;
