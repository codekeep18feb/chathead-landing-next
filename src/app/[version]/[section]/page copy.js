import DetailContent from "./DetailContent";
import ExampleUsageContent from "./ExampleUsageContent";
import HowItWorkContent from "./HowItWorkContent";
import ProvidesContent from "./ProvidesContent";
import ToWhomContent from "./ToWhomContent";

const contentMap = {
  "instant-auth-chat": {
    "to-whom": [{ type: "component", element: <ToWhomContent key="1" /> }],
    provides: [{ type: "component", element: <ProvidesContent key="1" /> }],
    "how-it-works": [
      { type: "component", element: <HowItWorkContent key="1" /> },
    ],
    "example-usage": [
      { type: "component", element: <ExampleUsageContent key="1" /> },
    ],
  },
  "byo-auth-chat": {
    "to-whom": [{ type: "list", text: "Locally managed auth To-Whom content" }],
    provides: [{ type: "list", text: "Locally managed auth Provides content" }],
    "how-it-works": [
      { type: "list", text: "Locally managed auth How-it-works content" },
    ],
    "example-usage": [
      { type: "list", text: "Locally managed auth Example usage content" },
    ],
  },
  "cms-ready-chat": {
    "to-whom": [{ type: "list", text: "Plugin driven To-Whom content" }],
    provides: [{ type: "list", text: "Plugin driven Provides content" }],
    "how-it-works": [
      { type: "list", text: "Plugin driven How-it-works content" },
    ],
    "example-usage": [
      { type: "list", text: "Plugin driven Example usage content" },
    ],
  },
};

export default async function Page(props) {
  const { version, section } = await props.params; // 👈 keeping `await` as requested

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
