import React from 'react';
import ContentRenderer from '@/app/testing_documents/rendering_tools';

export default function Sidebar({ selectedFilter }) {

  console.log("whawerjwerselectedFilter",selectedFilter)
  // Safe null checking with optional chaining
  const appType = selectedFilter?.app_type;

  console.log("appTypesdafsdf",appType)
  // Common content configuration
  const p2aContent = [
    {
      tag_type: "ol",
      items: [
        {
          tag_type: "li",
          text: "Project setup",
          link_configuration: {
            show: true,
            type: "internal",
            targetSelector: ".content-heading"
          },
          sub_items: [
            {
              tag_type: "li",
              text: "Client Side Integration",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Client Side Integration",
                  link_configuration: {
                    show: true,
                    type: "internal",
                    targetSelector: ".content-inner-heading"
                  }
                },
                {
                  tag_type: "li",
                  text: "Backend Integration",
                  link_configuration: {
                    show: true,
                    type: "internal",
                    targetSelector: ".second_subheading"
                  }
                  
                }
              ],
              link_configuration: {
                show: true,
                type: "internal",
                targetSelector: ".content-inner-heading"
              }
            },
            {
              tag_type: "li",
              text: "Backend Integration",
              link_configuration: {
                show: true,
                type: "internal",
                targetSelector: ".second_subheading"
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
  ];


  // Common content configuration
  const p2pContent = [
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
  ];


  // Conditional content based on app type
  const getContent = () => {
    switch(appType) {
      case 'P2A':
        return p2aContent.map(item => ({
          ...item,
          items: item.items.map(li => ({
            ...li,
            text: `${li.text} (P2A Specific)`
          }))
        }));
      
      case 'P2P':
        return p2pContent.map(item => ({
          ...item,
          items: item.items.map(li => ({
            ...li,
            text: `${li.text} (P2P Specific)`
          }))
        }));

      default:
        return [{
          tag_type: "div",
          text: "Select a valid application type from the filter"
        }];
    }
  };

  return (
    <div>
      {appType ? (
        <ContentRenderer 
          key={appType} // Important for re-rendering on type change
          content={getContent()} 
        />
      ) : (
        <div>Please select a valid application type</div>
      )}
    </div>
  );
}