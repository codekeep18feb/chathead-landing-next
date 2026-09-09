export const whitelabelDomains = [
  {
    tag_type: "h4",
    text: "Whitelabel Domains",
    selector_uid: "v2_whitelabel_domains",
  },
  {
    tag_type: "p",
    text: "Configure custom domains for your applications to maintain brand consistency. This allows you to serve the Sageion chat interface from your own domain.",
  },
  {
    tag_type: "h5",
    text: "Available Features",
  },
  {
    tag_type: "ol",
    items: [
      {
        text: "Add custom domain names for your applications",
      },
      {
        text: "SSL certificate management",
      },
      {
        text: "DNS configuration guidance",
      },
    ],
  },
  {
    tag_type: "callout",
    type: "info",
    title: "DNS Configuration Guide",
    children: [
      {
        tag_type: "p",
        text: "To set up a custom domain:",
      },
      {
        tag_type: "ol",
        items: [
          {
            text: "Add your domain in the Whitelabel Domains section",
          },
          {
            text: "Configure DNS records as instructed",
          },
          {
            text: "Wait for DNS propagation (24-48 hours)",
          },
          {
            text: "Verify the domain and enable SSL",
          },
        ],
      },
    ],
  },
  {
    tag_type: "callout",
    type: "success",
    title: "✅ Setup Complete",
    children: [
      {
        tag_type: "p",
        text: "Once configured, your chat interface will be served from your custom domain, providing a seamless brand experience for your users.",
      },
    ],
  },
];
