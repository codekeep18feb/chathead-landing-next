"use client";

import { useRouter } from "next/navigation";

const Solutions = ({ onCloseModal }) => {
  const router = useRouter();

  const handleCardClick = (path) => {
    if (onCloseModal) onCloseModal();
    router.push(path);
  };

  const solutionList = {
    useCase: [
    {
    icon: "fa-solid fa-chart-bar",
    iconType: "fontawesome",
    subHeading: "Marketplace",
    text: "Boost buyer-seller transactions with real-time chat (_lorem ipsum)",
    },
    {
    icon: "fa-solid fa-chart-bar",
    iconType: "fontawesome",
    subHeading: "On-Demand Services",
    text: "Enhance service experience with direct communication between customers and providers (_lorem ipsum)",
    },
    {
    icon: "fa-solid fa-chart-bar",
    iconType: "fontawesome",
    subHeading: "Matrimony",
    text: "Create meaningful connections with secure 1:1 conversations (_lorem ipsum)",
    },
    {
    icon: "fa-solid fa-chart-bar",
    iconType: "fontawesome",
    subHeading: "Healthcare & Telehealth",
    text: "Support doctor-patient and other sensitive communication with HIPAA-compliant chat (_lorem ipsum)",
    },
    {
    icon: "fa-solid fa-chart-bar",
    iconType: "fontawesome",
    subHeading: "Online Education & Ed-Tech",
    text: "Foster learning with tools that keep students engaged and facilitate collaboration (_lorem ipsum)",
    },
    {
    icon: "fa-solid fa-chart-bar",
    iconType: "fontawesome",
    subHeading: "E-commerce",
    text: "Streamline online shopping experiences with seamless interactions between buyers and sellers (_lorem ipsum)",
    },
    {
    icon: "fa-solid fa-chart-bar",
    iconType: "fontawesome",
    subHeading: "Financial Services",
    text: "Boost trust and efficiency with secure communication between clients and financial institutions (_lorem ipsum)",
    },
    {
    icon: "fa-solid fa-chart-bar",
    iconType: "fontawesome",
    subHeading: "Grocery Delivery",
    text: "Simplify daily shopping with real-time communication between customers and delivery partners (_lorem ipsum)",
    },
    {
    icon: "fa-solid fa-chart-bar",
    iconType: "fontawesome",
    subHeading: "Travel",
    text: "Elevate travel experiences with seamless interaction between travelers and service providers (_lorem ipsum)",
    },
    {
    // icon: "fa-solid fa-chart-bar",
    // iconType: "fontawesome",
    icon: "/icons/finance.svg", // path to SVG in public folder
    iconType: "svg",
    subHeading: "Real Estate",
    text: "Improve property transactions with direct communication between buyers, sellers, and agents (_lorem ipsum)",
    },
    {
    icon: "bi bi-briefcase",
    iconType: "bootstrap",
    subHeading: "Legal Tech",
    text: "Simplify legal processes with seamless communication between clients and legal professionals (_lorem ipsum)",
    },
    ],
    company_type: [
    {
    icon: "fa-solid fa-user",
    subHeading: "Enterprise",
    text: "Fully compliant and endlessly scalable solution for large enterprises (_lorem ipsum)",
    },
    {
    icon: "fa-solid fa-envelope",
    subHeading: "Startups",
    text: "A feature rich, quick-to-deploy engagement solution for fast-growing startups (_lorem ipsum)",
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
                      .replace(/[^a-z0-9 ]/g, "") // remove special characters
                      .trim() // remove extra space at the ends
                      .replace(/\s+/g, "-")}` // replace spaces with hyphen
                  )
                }
              >
                <div className="card-header">
                  <div className="icon_wrapper">
                    {item.iconType === "fontawesome" && (
                      <i className={`card-icon ${item.icon}`}></i>
                    )}

                    {item.iconType === "bootstrap" && (
                      <i className={`card-icon ${item.icon}`}></i>
                    )}

                    {item.iconType === "svg" && (
                      <img src={item.icon} alt="icon" className="card-icon" />
                    )}
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
