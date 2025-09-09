"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopFilterComp from "../../components/documents/TopFilterComp";
import ContentRenderer from "@/app/testing_documents/rendering_tools";
import payload, { versionSlugMap } from "../payload";

export default function DocumentationClient({ version }) {
  const router = useRouter();

  // Map slug to version key
  const mappedVersion =
    Object.keys(versionSlugMap).find((key) => versionSlugMap[key] === version) ||
    "V1";

  const [selectedVersionType, setSelectedVersionType] = useState(mappedVersion);
  const [selectedFilter, setSelectedFilter] = useState({
    app_type: null,
    version_type: mappedVersion,
  });

  useEffect(() => {
    // Sync the selected version type when the URL changes
    setSelectedVersionType(mappedVersion);
    setSelectedFilter({
      app_type: null,
      version_type: mappedVersion,
    });
  }, [mappedVersion]);

  const handleSelectVersionType = (key) => {
    if (key !== selectedVersionType) {
      const slug = versionSlugMap[key];
      router.push(`/documentation/${slug}`);
    }
  };

  const content = payload[selectedVersionType];

  return (
    <div className="documentation-page">
      <TopFilterComp
        initialVersionType={selectedVersionType}
        setSelectedFilter={({ version_type }) =>
          handleSelectVersionType(version_type)
        }
      />
      {content && <ContentRenderer content={content} />}
      <p>Current version: {selectedVersionType}</p>
    </div>
  );
}
