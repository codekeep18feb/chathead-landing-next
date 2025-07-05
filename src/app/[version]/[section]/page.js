// page.js
import DetailContent from "./DetailContent";
import ToWhomContent from "./ToWhomContent";
import ProvidesContent from "./ProvidesContent";
import HowItWorkContent from "./HowItWorkContent";
import ExampleUsageContent from "./ExampleUsageContent";
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
} from "./data/cloudmagaeSections";

const contentMap = {
  "cloud-managed-auth": {
    "to-whom": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="cloud-managed-auth"
            config={cloudManagedToWhomContent}
          />
        ),
      },
    ],
    "provides": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="cloud-managed-auth"
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
            version="cloud-managed-auth"
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
            version="cloud-managed-auth"
            config={exampleUsageContent}
          />
        ),
      },
    ],
  },
  "locally-managed-auth": {
    "to-whom": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="2"
            version="locally-managed-auth"
            config={localmagaeContent}
          />
        ),
      },
    ],
    "provides": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="cloud-managed-auth"
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
            version="cloud-managed-auth"
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
            version="cloud-managed-auth"
            config={cloudManagedExampleUsageContent}
          />
        ),
      },
    ],
  },
  "plugin-driven": {
    "to-whom": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="3"
            version="plugin-driven"
            config={pluginmagaeContent}
          />
        ),
      },
    ],
    "provides": [
      {
        type: "component",
        element: (
          <ToWhomContent
            key="1"
            version="cloud-managed-auth"
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
            version="cloud-managed-auth"
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
            version="cloud-managed-auth"
            config={cmsExampleUsageContent}
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
