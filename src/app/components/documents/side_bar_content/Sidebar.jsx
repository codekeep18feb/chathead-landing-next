import React from 'react';
import ContentRenderer from '@/app/testing_documents/rendering_tools';

export default function Sidebar({ selectedFilter }) {
  console.log("Here is the glimpse of selectedFilter?", selectedFilter);

  const appType = selectedFilter?.app_type;
  const versionType = selectedFilter?.version_type;

  console.log("appType:", appType);
  console.log("versionType:", versionType);

  // === Define content versions ===

  const ContentByVersion = {
    V1: [
      { 
        tag_type: "ol",
        items: [
          {
            tag_type: "li",
            text: "Integration",
            sub_items: [
              {
                tag_type: "li",
                text: "Prerequisite",
                link_configuration: {
                  show: true,
                  type: "internal",
                  selector_uid: "v1_prerequisites" ,
                  // targetSelector: "body > div > div > div.docPageSty_rightWrap__YUmnZ > div > div.docPageSty_content-area__heU1U > div > div:nth-child(3) > div:nth-child(1) > h2"
                }
              },
              {
                tag_type: "li",
                text: "Client Integration",
                link_configuration: {
                  show: true,
                  type: "internal",
                  selector_uid: "v1_client_integration", 
                  // targetSelector: "body > div > div > div.docPageSty_rightWrap__YUmnZ > div > div.docPageSty_content-area__heU1U > div > div:nth-child(4) > div > h2"
                }
              },
              {
                tag_type: "li",
                text: "Code Example",
                link_configuration: {
                  show: true,
                  type: "internal",
                  selector_uid: "v1_code_example" ,
                  // targetSelector: "body > div > div > div.docPageSty_rightWrap__YUmnZ > div > div.docPageSty_content-area__heU1U > div > div:nth-child(4) > div > div.renderingToolSty_callout__7ZUMr.renderingToolSty_callout-info__gccVq > div:nth-child(2) > div > button"
                }
              },
             
              
            ],
            link_configuration: {
              show: true,
              type: "internal",
              targetSelector: ".content-inner-heading"
            }
          }
        ],
        property: {
          collapse: {
            collapsable: true,
            fc_non_collapsable: true,
          }
        }
      }
    ],
    V2: [
      {
        tag_type: "ol",
        items: [
          {
            tag_type: "li",
            text: "Integration",
            sub_items: [
              {
                tag_type: "li",
                text: "Prerequisite",
                link_configuration: {
                  show: true,
                  type: "internal",
                  selector_uid: "v2_prerequisites" ,
                  // targetSelector: "body > div > div > div.docPageSty_rightWrap__YUmnZ > div > div.docPageSty_content-area__heU1U > div > div:nth-child(3) > div > h2"
                }
              },
              {
                tag_type: "li",
                text: "Client Integration",
                link_configuration: {
                  show: true,
                  type: "internal",
                  selector_uid: "v2_client_integration" 
                  // targetSelector: "body > div > div > div.docPageSty_rightWrap__YUmnZ > div > div.docPageSty_content-area__heU1U > div > div:nth-child(4) > div > h2:nth-child(1)"
                }
              },
              {
                tag_type: "li",
                text: "Code Example",
                link_configuration: {
                  show: true,
                  type: "internal",
                  selector_uid: "v2_code_example" 
                  // targetSelector: "body > div > div > div.docPageSty_rightWrap__YUmnZ > div > div.docPageSty_content-area__heU1U > div > div:nth-child(4) > div > div:nth-child(5) > div:nth-child(2) > div > button"
                }
              },
              {
                tag_type: "li",
                text: "Backend Integration",
                link_configuration: {
                  show: true,
                  type: "internal",
                  selector_uid: "v2_backend_integration"  ,
                  // targetSelector: "body > div > div > div.docPageSty_rightWrap__YUmnZ > div > div.docPageSty_content-area__heU1U > div > div:nth-child(4) > div > h2:nth-child(6)"
                }
              },
              
            ],
            link_configuration: {
              show: true,
              type: "internal",
              targetSelector: ".content-inner-heading"
            }
          }
        ],
        property: {
          collapse: {
            collapsable: true,
            fc_non_collapsable: true,
          }
        }
      }
    ],
    V3: [
      {
        tag_type: "ol",
        items: [
          {
            tag_type: "li",
            text: "Integration",
            sub_items: [
              {
                tag_type: "li",
                text: "Prerequisite",
                link_configuration: {
                  show: true,
                  type: "internal",
                  selector_uid: "v3_prerequisites", 
                  // targetSelector: "body > div > div > div.docPageSty_rightWrap__YUmnZ > div > div.docPageSty_content-area__heU1U > div > div:nth-child(3) > div > h2"
                }
              },
              {
                tag_type: "li",
                text: "Client Integration",
                link_configuration: {
                  show: true,
                  type: "internal",
                  selector_uid: "v3_client_integration", 
                  // targetSelector: "body > div > div > div.docPageSty_rightWrap__YUmnZ > div > div.docPageSty_content-area__heU1U > div > div:nth-child(4) > div > h2"
                }
              },
              
             
              
            ],
            link_configuration: {
              show: true,
              type: "internal",
              targetSelector: ".content-inner-heading"
            }
          }
        ],
        property: {
          collapse: {
            collapsable: true,
            fc_non_collapsable: true,
          }
        }
      }
    ],
    V4: [
      {
        tag_type: "ol",
        items: [
          {
            tag_type: "li",
            text: "Integration",
            sub_items: [
              {
                tag_type: "li",
                text: "Prerequisite",
                link_configuration: {
                  show: true,
                  type: "internal",
                  selector_uid: "v4_prerequisites" 
                  // targetSelector: "body > div > div > div.docPageSty_rightWrap__YUmnZ > div > div.docPageSty_content-area__heU1U > div > div:nth-child(3) > div > h2"
                }
              },
              {
                tag_type: "li",
                text: "Client Integration",
                link_configuration: {
                  show: true,
                  type: "internal",
                  selector_uid: "v4_client_integration" 
                  // targetSelector: "body > div > div > div.docPageSty_rightWrap__YUmnZ > div > div.docPageSty_content-area__heU1U > div > div:nth-child(4) > div > h2:nth-child(1)"
                }
              },
              {
                tag_type: "li",
                text: "Code Example",
                link_configuration: {
                  show: true,
                  type: "internal",
                  selector_uid: "v4_code_example" 
                  // targetSelector: "body > div > div > div.docPageSty_rightWrap__YUmnZ > div > div.docPageSty_content-area__heU1U > div > div:nth-child(4) > div > div:nth-child(5) > div:nth-child(2) > div > button"
                }
              },
              
              
            ],
            link_configuration: {
              show: true,
              type: "internal",
              targetSelector: ".content-inner-heading"
            }
          }
        ],
        property: {
          collapse: {
            collapsable: true,
            fc_non_collapsable: true,
          }
        }
      }
    ]
  };

 

  console.log("sdfsdfsdfversionType",versionType)

  return (
    <div>
      {(versionType) ? (
        <ContentRenderer
          key={`${versionType}`} // Force re-render on change
          content={ContentByVersion[versionType]}
        />
      ) : (
        <div>Please select a valid application type and version</div>
      )}
    </div>
  );
}
