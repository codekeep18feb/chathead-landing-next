// /src/app/components/documents/side_bar_content/Sidebar.jsx

import React from 'react';
import ContentRenderer from '@/app/testing_documents/rendering_tools';

export default function Sidebar({ selectedFilter }) {
  const versionType = selectedFilter?.version_type;

  const ContentByVersion = {
    V2: [
      // ====== INTEGRATION TAB ======
      {
        tag_type: "div",
        className: "sidebar-section",
        children: [
          {
            tag_type: "h3",
            text: "Integration",
            className: "sidebar-section-title"
          },
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
                      selector_uid: "v2_prerequisites"
                    }
                  },
                  {
                    tag_type: "li",
                    text: "Client Integration",
                    link_configuration: {
                      show: true,
                      type: "internal",
                      selector_uid: "v2_client_integration"
                    }
                  },
                  {
                    tag_type: "li",
                    text: "Code Example",
                    link_configuration: {
                      show: true,
                      type: "internal",
                      selector_uid: "v2_code_example"
                    }
                  },
                  {
                    tag_type: "li",
                    text: "Backend Integration",
                    link_configuration: {
                      show: true,
                      type: "internal",
                      selector_uid: "v2_backend_integration"
                    }
                  }
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
                fc_non_collapsable: true
              }
            }
          }
        ]
      },
      
      // ====== PLATFORM TAB ======
      {
        tag_type: "div",
        className: "sidebar-section",
        children: [
          {
            tag_type: "h3",
            text: "Platform",
            className: "sidebar-section-title"
          },
          {
            tag_type: "ol",
            items: [
              {
                tag_type: "li",
                text: "Platform",
                sub_items: [
                  {
                    tag_type: "li",
                    text: "Global Level Settings",
                    sub_items: [
                      {
                        tag_type: "li",
                        text: "Global Tenant Settings",
                        link_configuration: {
                          show: true,
                          type: "internal",
                          selector_uid: "v2_global_tenant_settings"
                        }
                      },
                      {
                        tag_type: "li",
                        text: "Invite Support User",
                        link_configuration: {
                          show: true,
                          type: "internal",
                          selector_uid: "v2_invite_support"
                        }
                      },
                      {
                        tag_type: "li",
                        text: "Whitelabel Domains",
                        link_configuration: {
                          show: true,
                          type: "internal",
                          selector_uid: "v2_whitelabel_domains"
                        }
                      }
                    ],
                    link_configuration: {
                      show: true,
                      type: "internal",
                      selector_uid: "v2_global_level_settings"
                    }
                  },
                  {
                    tag_type: "li",
                    text: "App-Specific Configuration",
                    link_configuration: {
                      show: true,
                      type: "internal",
                      selector_uid: "v2_app_settings"
                    }
                  }
                ],
                link_configuration: {
                  show: true,
                  type: "internal",
                  selector_uid: "v2_platform_overview"
                }
              }
            ],
            property: {
              collapse: {
                collapsable: true,
                fc_non_collapsable: true
              }
            }
          }
        ]
      }
    ]
  };

  return (
    <div>
      {versionType && ContentByVersion[versionType] ? (
        <ContentRenderer
          key={`${versionType}`}
          content={ContentByVersion[versionType]}
        />
      ) : (
        <div>Please select a valid application type and version</div>
      )}
    </div>
  );
}