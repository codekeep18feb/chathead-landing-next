import React from 'react'
import ScrollButtonExample from '../../ScrollButtonExample'
import ContentRenderer from '@/app/testing_documents/rendering_tools'

export default function Sidebar() {

  const content_collapsable_list_ikd = [
    {
      tag_type: "ol",
      items: [
        {
          tag_type: "li",
          text: "Main Step - Scroll to Integration Section",
          link_configuration: {
            show: true,
            type: "internal",
            targetSelector: ".integration_successful" // Points to element with this class
          },
          sub_items: [
            {
              tag_type: "li",
              text: "Substep with External Link",
              link_configuration: {
                show: true,
                type: "external",
                url: "https://example.com/docs"
              }
            },
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

  return (
    <div>
      


      <ContentRenderer key={2} content={content_collapsable_list_ikd} />

    </div>
  )
}
