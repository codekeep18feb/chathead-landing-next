// src/app/solutions/[useCase]/page.js
import React from "react";
import { notFound } from "next/navigation";
import { solutionList } from "../../data/solutionList";

export function generateStaticParams() {
  const allItems = [...solutionList.useCase, ...solutionList.company_type];
  return allItems.map((item) => ({
    useCase: item.slug,
  }));
}

export default function SolutionDetailPage({ params }) {
  const { useCase } = params;

  const allItems = [...solutionList.useCase, ...solutionList.company_type];
  const pageData = allItems.find((item) => item.slug === useCase);

  if (!pageData) {
    notFound();
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div style={{ marginBottom: "20px" }}>
          {pageData.iconType === "svg" ? (
            <img src={`/${pageData.icon}`} alt={pageData.subHeading} width={64} height={64} />
          ) : (
            <span style={{ fontSize: "48px" }}>{pageData.icon}</span>
          )}
        </div>
        <h1 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "16px", color: "#111827" }}>
          {pageData.subHeading}
        </h1>
        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: "1.6" }}>
          {pageData.text}
        </p>
      </div>

      <div style={{ background: "#f9fafb", padding: "32px", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "16px", color: "#111827" }}>
          How it works with Sageion
        </h2>
        <p style={{ fontSize: "16px", color: "#4b5563", marginBottom: "20px" }}>
          This is where you can add deeper detail about how the Sageion runtime
          specifically solves the {pageData.subHeading} workflow.
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", color: "#4b5563", lineHeight: "1.8" }}>
          <li>Deterministic API execution</li>
          <li>Auto-generated UI screens</li>
          <li>Async webhooks & human-in-the-loop pauses</li>
          <li>Zero-data storage by default</li>
        </ul>
      </div>
    </div>
  );
}