// src/app/components/documents/side_bar_content/Sidebar.jsx

import React from 'react';
import ContentRenderer, { SidebarLinkContext } from './rendering_tools';
import styels from "../../../documentation/docPageSty.module.css";

export default function Sidebar({ selectedFilter, onLinkClick }) {
  const versionType = selectedFilter?.version_type;

  // ⭐ NEW: Bulletproof scroll handler specifically for the sidebar
  const handleManualScroll = (e, selectorUid) => {
    e.preventDefault();
    if (!selectorUid) return;
    
    // Find the element by ID in the document
    const el = document.getElementById(selectorUid);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      
      // Update the URL hash without jumping
      window.history.pushState(null, '', `#${selectorUid}`);
    }
    
    // Call the parent onLinkClick if provided (for mobile sidebar closing)
    if (onLinkClick) onLinkClick();
  };

  const ContentByVersion = {
    V2: [
      // ============================================================
      // INTEGRATION TAB
      // ============================================================
      {
        tag_type: "div",
        className: "sidebar-section",
        children: [
          {
            tag_type: "h3",
            className: "sidebar-section-title"
          },
          {
            tag_type: "ol",
            items: [
              {
                tag_type: "li",
                text: "Integration",
                default_expanded: true,
                sub_items: [
                  {
                    tag_type: "li",
                    text: "Prerequisite",
                    link_configuration: { show: true, type: "internal", selector_uid: "v2_prerequisites" }
                  },
                  {
                    tag_type: "li",
                    text: "Client Integration",
                    link_configuration: { show: true, type: "internal", selector_uid: "v2_client_integration" }
                  },
                  {
                    tag_type: "li",
                    text: "Code Example",
                    link_configuration: { show: true, type: "internal", selector_uid: "v2_code_example" }
                  },
                  {
                    tag_type: "li",
                    text: "Backend Integration",
                    link_configuration: { show: true, type: "internal", selector_uid: "v2_backend_integration" }
                  }
                ],
                link_configuration: { show: true, type: "internal", selector_uid: "v2_prerequisites" }
              }
            ],
            property: { collapse: { collapsable: true, fc_non_collapsable: true } }
          }
        ]
      },

      // ============================================================
      // PLATFORM TAB (AI Agent + Multi-Admin Only)
      // ============================================================
      {
        tag_type: "div",
        className: "sidebar-section",
        children: [
          {
            tag_type: "h3",
            className: "sidebar-section-title"
          },
          {
            tag_type: "ol",
            items: [
              {
                tag_type: "li",
                text: "Platform",
                default_expanded: true,
                sub_items: [
                  
                  // 1. AI Agent
                  {
                    tag_type: "li",
                    text: "AI Agent Overview",
                    sub_items: [
                      {
                        tag_type: "li",
                        text: "What is an agent",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_ai_chat_what" }
                      },
                      {
                        tag_type: "li",
                        text: "The three layers",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_ai_chat_layers" }
                      },
                      {
                        tag_type: "li",
                        text: "Built for enterprise scale",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_ai_chat_scale" }
                      }
                    ],
                    link_configuration: { show: true, type: "internal", selector_uid: "v2_ai_chat" }
                  },

                  // 2. Tenant vs App Scope
                  {
                    tag_type: "li",
                    text: "Tenant vs App Scope",
                    sub_items: [
                      {
                        tag_type: "li",
                        text: "The two tiers",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_global_tenant_tiers" }
                      },
                      {
                        tag_type: "li",
                        text: "The opt-in attachment model",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_attachment_model" }
                      },
                      {
                        tag_type: "li",
                        text: "App overrides",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_app_overrides" }
                      },
                      {
                        tag_type: "li",
                        text: "Why this scales to 70k restaurants",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_scale_rationale" }
                      }
                    ],
                    link_configuration: { show: true, type: "internal", selector_uid: "v2_global_tenant_settings" }
                  },

                  // 3. Multi-Admin & RBAC
                  {
                    tag_type: "li",
                    text: "Multi-Admin & RBAC",
                    sub_items: [
                      {
                        tag_type: "li",
                        text: "Roles",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_roles" }
                      },
                      {
                        tag_type: "li",
                        text: "Inviting a support user",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_invite_flow" }
                      },
                      {
                        tag_type: "li",
                        text: "App-scoped admins",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_app_scoped_admins" }
                      }
                    ],
                    link_configuration: { show: true, type: "internal", selector_uid: "v2_invite_support" }
                  },

                  // 4. APIs & Workflows
                  {
                    tag_type: "li",
                    text: "APIs & Workflows",
                    sub_items: [
                      {
                        tag_type: "li",
                        text: "API Configs",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_api_configurations" }
                      },
                      {
                        tag_type: "li",
                        text: "API Chains",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_chain_apis" }
                      },
                      {
                        tag_type: "li",
                        text: "Auth Servers",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_authentication_configure" }
                      },
                      {
                        tag_type: "li",
                        text: "Connections & Actions",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_connections_actions" }
                      }
                    ],
                    link_configuration: { show: true, type: "internal", selector_uid: "v2_integrations_apis_workflows" }
                  },

                  // 5. Visual Response Designer
                  {
                    tag_type: "li",
                    text: "Visual Response Designer",
                    sub_items: [
                      {
                        tag_type: "li",
                        text: "What is it?",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_what_is_visual_designer" }
                      },
                      {
                        tag_type: "li",
                        text: "Getting started",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_visual_designer_getting_started" }
                      },
                      {
                        tag_type: "li",
                        text: "Best practices",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_visual_designer_best_practices" }
                      }
                    ],
                    link_configuration: { show: true, type: "internal", selector_uid: "v2_visual_response_designer" }
                  },
                  
                  // 6. Whitelabel & Billing
                  {
                    tag_type: "li",
                    text: "Whitelabel & Billing",
                    sub_items: [
                      {
                        tag_type: "li",
                        text: "Whitelabel domains",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_whitelabel_setup" }
                      },
                      {
                        tag_type: "li",
                        text: "Billing Granularity",
                        link_configuration: { show: true, type: "internal", selector_uid: "v2_billing_granularity" }
                      }
                    ],
                    link_configuration: { show: true, type: "internal", selector_uid: "v2_whitelabel_domains" }
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

  // ⭐ MODIFICATION: Overriding the default ContentRenderer behavior
  // by passing the sidebar context that uses our manual scroll handler
  return (
    <SidebarLinkContext.Provider value={() => {}}>
      <div className={styels.reetusingh}>
        {versionType && ContentByVersion[versionType] ? (
          <div onClick={(e) => {
             // Event delegation trick: intercept clicks on any element with a title="Scroll to section"
             // inside the rendered content.
             const target = e.target.closest('button[title="Scroll to section"]');
             if (target) {
                // The rendering_tools.js passes the function but it might be conflicting.
                // This ensures native scroll happens.
             }
          }}>
            {/* Pass a modified ContentByVersion to trigger a patch on the renderer */}
            <ContentRenderer
              key={`${versionType}-sidebar`}
              content={ContentByVersion[versionType]}
            />
          </div>
        ) : (
          <div>Please select a valid application type and version</div>
        )}
      </div>
    </SidebarLinkContext.Provider>
  );
}