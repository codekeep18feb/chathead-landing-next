import React from 'react';
import ContentRenderer from '@/app/testing_documents/rendering_tools';

export default function Sidebar({ selectedFilter }) {
  console.log("Here is the glimpse of selectedFilter?", selectedFilter);

  const appType = selectedFilter?.app_type;
  const versionType = selectedFilter?.version_type;

  console.log("appType:", appType);
  console.log("versionType:", versionType);

  // === Define content versions ===

  const p2aContentByVersion = {
    V1: [
      {
        tag_type: "ol",
        items: [
          {
            tag_type: "li",
            text: "P2A - V1",
            link_configuration: {
              show: true,
              type: "internal",
              targetSelector: ".content-heading"
            },
            sub_items: [
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
                      targetSelector: ".content-inner-heading"
                    }
                  },
                  {
                    tag_type: "li",
                    text: "Client Integration",
                    link_configuration: {
                      show: true,
                      type: "internal",
                      targetSelector: "body > div > div.doc_core_wrapper > div.rightWrap > div > div.content-area > div > div:nth-child(3) > div:nth-child(1) > h2"
                    }
                  },
                  
                  {
                    tag_type: "li",
                    text: "Watch Demo",
                    link_configuration: {
                      show: true,
                      type: "internal",
                      targetSelector: ".videos_wrapper"
                    }
                  },
                  
                ],
                link_configuration: {
                  show: true,
                  type: "internal",
                  targetSelector: ".content-inner-heading"
                }
              }
            ]
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
            text: "Main Process",
            link_configuration: {
              show: true,
              type: "internal",
              targetSelector: ".content-inner-heading"
            },
            sub_items: [
              {
                tag_type: "li",
                text: "Actual Integration Section Reference",
                code: "// This is the target section",
                sub_items: [
                  {
                    tag_type: "li",
                    text: "Nested Implementation Detail",
                    code: "npm run integrate",
                    sub_items: [
                      {
                        tag_type: "li",
                        text: "Success Marker Element",
                        code: "<div class='integration_successful'>✅</div>"
                      }
                    ]
                  }
                ]
              }
            ]
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
            text: "Main Process",
            link_configuration: {
              show: true,
              type: "internal",
              targetSelector: ".content-inner-heading"
            },
            sub_items: [
              {
                tag_type: "li",
                text: "Actual Integration Section Reference",
                code: "// This is the target section",
                sub_items: [
                  {
                    tag_type: "li",
                    text: "Nested Implementation Detail",
                    code: "npm run integrate",
                    sub_items: [
                      {
                        tag_type: "li",
                        text: "Success Marker Element",
                        code: "<div class='integration_successful'>✅</div>"
                      }
                    ]
                  }
                ]
              }
            ]
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

  const p2pContentByVersion = {
    V1: [
      {
        tag_type: "ol",
        items: [
          {
            tag_type: "li",
            text: "Main Process",
            link_configuration: {
              show: true,
              type: "internal",
              targetSelector: ".content-inner-heading"
            },
            sub_items: [
              {
                tag_type: "li",
                text: "Actual Integration Section Reference",
                code: "// This is the target section",
                sub_items: [
                  {
                    tag_type: "li",
                    text: "Nested Implementation Detail",
                    code: "npm run integrate",
                    sub_items: [
                      {
                        tag_type: "li",
                        text: "Success Marker Element",
                        code: "<div class='integration_successful'>✅</div>"
                      }
                    ]
                  }
                ]
              }
            ]
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
            text: "Main Process",
            link_configuration: {
              show: true,
              type: "internal",
              targetSelector: ".content-inner-heading"
            },
            sub_items: [
              {
                tag_type: "li",
                text: "Actual Integration Section Reference",
                code: "// This is the target section",
                sub_items: [
                  {
                    tag_type: "li",
                    text: "Nested Implementation Detail",
                    code: "npm run integrate",
                    sub_items: [
                      {
                        tag_type: "li",
                        text: "Success Marker Element",
                        code: "<div class='integration_successful'>✅</div>"
                      }
                    ]
                  }
                ]
              }
            ]
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
            text: "Main Process",
            link_configuration: {
              show: true,
              type: "internal",
              targetSelector: ".content-inner-heading"
            },
            sub_items: [
              {
                tag_type: "li",
                text: "Actual Integration Section Reference",
                code: "// This is the target section",
                sub_items: [
                  {
                    tag_type: "li",
                    text: "Nested Implementation Detail",
                    code: "npm run integrate",
                    sub_items: [
                      {
                        tag_type: "li",
                        text: "Success Marker Element",
                        code: "<div class='integration_successful'>✅</div>"
                      }
                    ]
                  }
                ]
              }
            ]
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

  // === Get content conditionally ===
  const getContent = () => {
    if (!appType || !versionType) {
      return [{
        tag_type: "div",
        text: "Please select both app type and version type."
      }];
    }

    let contentMap;
    if (appType === 'P2A') {
      contentMap = p2aContentByVersion;
    } else if (appType === 'P2P') {
      contentMap = p2pContentByVersion;
    } else {
      return [{
        tag_type: "div",
        text: "Invalid app type selected."
      }];
    }

    return contentMap[versionType] || [{
      tag_type: "div",
      text: `No content available for ${appType} - ${versionType}`
    }];
  };

  return (
    <div>
      {(appType && versionType) ? (
        <ContentRenderer
          key={`${appType}-${versionType}`} // Force re-render on change
          content={getContent()}
        />
      ) : (
        <div>Please select a valid application type and version</div>
      )}
    </div>
  );
}
