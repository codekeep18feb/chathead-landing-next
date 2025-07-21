import React from "react";
import ContentRenderer from "./rendering_tools";
import ScrollButtonExample from "../components/ScrollButtonExample";

function doc() {

  

 const testContent = [
    {
      tag_type: "div",
      children: [
        {
          tag_type: "h2",
          text: "Image Test"
        },
        {
          tag_type: "img",
          src: "/path/to/image1.jpg",
          alt: "Example Image 1",
          style: { width: "100%", maxWidth: "500px" }
        },
        {
          tag_type: "p",
          text: "This is a description below the first image"
        },
        {
          tag_type: "img",
          src: "/Asset/add_credentials_wp.png",
          alt: "Example Image 2",
          className: "custom-image-class"
        }
      ]
    }
  ];
  
  // Then in your component

  return (
    <div>

      <ContentRenderer key={2} content={testContent} />
    </div>
  );
}

export default doc;
