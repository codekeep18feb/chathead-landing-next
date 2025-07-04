
import DetailContent from "./DetailContent";
import ExampleUsageContent from "./ExampleUsageContent";
import HowItWorkContent from "./HowItWorkContent";
import ProvidesContent from "./ProvidesContent";
import ToWhomContent from "./ToWhomContent";



// ✅ Static content to render for each section
const contentData = {
  "to-whom": [
    // { type: "list", text: "Some point about the service." },
    { type: "component", element: <ToWhomContent key="banner" /> },
  ],
  provides: [
    { type: "component", element: <ProvidesContent key="banner" /> },
  ],
  "how-it-works": [
    { type: "component", element: <HowItWorkContent key="banner" /> },
  ],
  "example-usage": [
    { type: "component", element: <ExampleUsageContent key="banner" /> },
  ],
};

export async function generateStaticParams() {
  return Object.keys(contentData).map((section) => ({ section }));
}

// ✅ FIXED: make this async!
export default async function Page(props) {
  const params = await props.params; // <-- await the full params
  const section = params.section;
  const content = contentData[section];
  return <DetailContent section={section} content={content} />;
}
