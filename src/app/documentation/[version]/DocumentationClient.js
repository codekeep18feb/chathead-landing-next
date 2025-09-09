"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import TopFilterComp from "../../components/documents/TopFilterComp";
import payload from "@/app/video_test/payload";
import { versionSlugMap } from "../payload";
import ContentRenderer from "@/app/testing_documents/rendering_tools";

export default function DocumentationClient({ version }) {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVersionType, setSelectedVersionType] = useState("V1");

  useEffect(() => {
    const mappedVersion = Object.keys(versionSlugMap).find(
      (key) => versionSlugMap[key] === version
    ) || "V1";
    setSelectedVersionType(mappedVersion);
  }, [version]);

  const handleSelectVersionType = (key) => {
    setSelectedVersionType(key);
    const slug = versionSlugMap[key];
    router.push(`/documentation/${slug}`);
  };

  const content = payload[selectedVersionType];

  return (
    <div className="documentation-page">
      <TopFilterComp
        selectedVersionType={selectedVersionType}
        handleSelectVersionType={handleSelectVersionType}
      />
      <ContentRenderer content={content} />
      <p>Current path: {pathname}</p>
    </div>
  );
}
