import React from "react";
import ContentRenderer from "./rendering_tools";
import ScrollButtonExample from "../components/ScrollButtonExample";

function doc() {

  

  const content_test = [
    {
      tag_type: "ul",
      items: [
        {
          text: "Main Item",
          sub_items: [
            {
              tag_type: "div",
              children: [
                { tag_type: "p", text: "This is a paragraph inside a div" }
              ]
            }
          ]
        }
      ]
    }
  ];

  return (
    <div>

      <ContentRenderer key={2} content={content_test} />
    </div>
  );
}

export default doc;
