"use client";

import { useRouter } from "next/navigation";
import { solutionList } from "../data/solutionList";

const Solutions = ({ onCloseModal }) => {
  const router = useRouter();

  const handleCardClick = (subHeading) => {
    if (onCloseModal) onCloseModal();
    // router.push(path);

   const slug = subHeading
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")  // spaces → hyphens
    .replace(/&/g, "and")   // replace & with 'and'
    .replace(/[^\w\-]/g, ""); // remove other special characters

    router.push(`/solutions/${slug}`);

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
                // onClick={() =>
                //   handleCardClick(
                //     `/${item.subHeading
                //       .toLowerCase()
                //       .replace(/[^a-z0-9 ]/g, "")
                //       .trim() 
                //       .replace(/\s+/g, "-")}`
                //   )
                // }
                onClick={() => handleCardClick(item.subHeading)}
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
