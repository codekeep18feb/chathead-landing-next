
import { versionSlugMap } from "../payload";
import DocumentationClient from "./DocumentationClient";

export async function generateStaticParams() {
  return Object.values(versionSlugMap).map(slug => ({
    version: slug
  }));
}

export default async function DocumentationPage({ params }) {
  // Wrap params with await to satisfy Next.js
  const resolvedParams = await Promise.resolve(params);

  return <DocumentationClient version={resolvedParams.version} />;
}