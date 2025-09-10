"use client";

import { useRouter } from "next/navigation";
import { resourcesList } from "../data/resourcesList";

const Resources = () => {
  const router = useRouter();

  const handleCardClick = (subHeading) => {
    // router.push(path);
    router.push(`/resources/${subHeading.toLowerCase().replace(/ /g, "-")}`);
  };

  return (
    <div className="platform-container">
      <div className="platform-sections">
        <div className="platform-section">
          <>
          <h2 className="section-title">MagicChat Blog</h2>
          </>
          <div className="newcard-list">
            {resourcesList.addChat_blog.map((item, index) => (
              <div
                className="card"
                key={index}
                // onClick={() =>
                //   handleCardClick(
                //     `/${item.subHeading.toLowerCase().replace(/ /g, "-")}`
                //   )
                // }
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
          <h2 className="section-title">Resources</h2>
          </>
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
