// page.js
import DetailContent from "./DetailContent";
import ToWhomContent from "./ToWhomContent";
import {
  cloudManagedExampleUsageContent,
  cloudManagedHowItWorksContent,
  cloudManagedProvidesContent,
  cloudManagedToWhomContent,
  cmsChatOnlyHowItWorksContent,
  cmsChatOnlyProvidesContent,
  cmsExampleUsageContent,
  exampleUsageContent,
  localmagaeContent,
  plugChatOnlyHowItWorksContent,
  plugChatOnlyProvidesContent,
  pluginmagaeContent,
  noAuthChatToWhomContent,
  noAuthChatProvidesContent,
  noAuthChatHowItWorksContent,
  noAuthChatExampleUsageContent,
} from "./data/cloudmagaeSections";

const contentMap = {
  "instant-auth-chat": {
    "to-whom": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="instant-auth-chat"
            config={cloudManagedToWhomContent}
          />
        ),
      },
    ],
    provides: [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="instant-auth-chat"
            config={cloudManagedProvidesContent}
          />
        ),
      },
    ],
    "how-it-works": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="instant-auth-chat"
            config={cmsChatOnlyHowItWorksContent}
          />
        ),
      },
    ],
    "example-usage": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="instant-auth-chat"
            config={exampleUsageContent}
          />
        ),
      },
    ],
  },
  "byo": {
    "to-whom": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="2"
            version="byo"
            config={localmagaeContent}
          />
        ),
      },
    ],
    provides: [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="instant-auth-chat"
            config={cmsChatOnlyProvidesContent}
          />
        ),
      },
    ],
    "how-it-works": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="instant-auth-chat"
            config={cloudManagedHowItWorksContent}
          />
        ),
      },
    ],
    "example-usage": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="instant-auth-chat"
            config={cloudManagedExampleUsageContent}
          />
        ),
      },
    ],
  },
  "cms-ready-chat": {
    "to-whom": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="3"
            version="cms-ready-chat"
            config={pluginmagaeContent}
          />
        ),
      },
    ],
    provides: [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="instant-auth-chat"
            config={plugChatOnlyProvidesContent}
          />
        ),
      },
    ],
    "how-it-works": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="instant-auth-chat"
            config={plugChatOnlyHowItWorksContent}
          />
        ),
      },
    ],
    "example-usage": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="instant-auth-chat"
            config={cmsExampleUsageContent}
          />
        ),
      },
    ],
  },
  "no-auth-only-chat": {
    "to-whom": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="no-auth-only-chat"
            config={noAuthChatToWhomContent}
          />
        ),
      },
    ],
    provides: [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="no-auth-only-chat"
            config={noAuthChatProvidesContent}
          />
        ),
      },
    ],
    "how-it-works": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="no-auth-only-chat"
            config={noAuthChatHowItWorksContent}
          />
        ),
      },
    ],
    "example-usage": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="no-auth-only-chat"
            config={noAuthChatExampleUsageContent}
          />
        ),
      },
    ],
  },
};

export default async function Page(props) {
  const { version, section } = await props.params;
  const content = contentMap[version]?.[section];
  return <DetailContent section={section} content={content} />;
}

export async function generateStaticParams() {
  const params = [];
  for (const version in contentMap) {
    for (const section in contentMap[version]) {
      params.push({ version, section });
    }
  }
  return params;
}
