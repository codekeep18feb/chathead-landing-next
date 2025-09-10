"use client";

import { useRouter } from "next/navigation";
import { platformList } from "../data/platformData";

const Platform = () => {
  const router = useRouter();

  const handleCardClick = (subHeading) => {
    // router.push(path);
    router.push(`/platform/${subHeading.toLowerCase().replace(/ /g, "-")}`);
  };

  return (
    <div className="platform-container">
      <div className="platform-sections">
        <div className="platform-section">
          <>
            <h2 className="section-title">Features</h2>
          </>
          <div className="card-list">
            {platformList.features.map((item, index) => (
              <div
                className="card"
                key={index}
                //  onClick={() => handleCardClick(`/${item.subHeading.toLowerCase().replace(/ /g, '-')}`)}
                onClick={() => handleCardClick(item.subHeading)}
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
            <h2 className="section-title">Integration</h2>
          </>
          <div className="card-list newcard-list">
            {platformList.integration.map((item, index) => (
              <div
                className="card"
                key={index}
                // onClick={() => handleCardClick("/documentation")}
                 onClick={() => handleCardClick(item.subHeading)}
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
      </div>
    </div>
  );
};

export default Platform;
