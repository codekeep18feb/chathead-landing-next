import React from "react";

const TEST_CASES = {
  entity_attribute: {
    context:
      "Starter plan details for MagicChat.io — Single plan properties like price, MAU, and support",
    data: {
      columns: ["Attribute", "Value"],
      sample_rows: [
        { label: "Price", values: { Starter: "$29/month" } },
        {
          label: "Monthly Active Users",
          values: { Starter: "1,000 (live chat & auth)" },
        },
        { label: "Support Level", values: { Starter: "Email only" } },
      ],
    },
  },
  entity_relationship: {
    context:
      "User assignments to projects in MagicChat.io — Each row represents which user is assigned to which project and their role",
    data: {
      columns: ["User", "Project", "Role"],
      sample_rows: [
        {
          label: "Assignment1",
          values: { User: "Alice", Project: "Project A", Role: "Developer" },
        },
        {
          label: "Assignment2",
          values: { User: "Bob", Project: "Project A", Role: "Tester" },
        },
        {
          label: "Assignment3",
          values: { User: "Carol", Project: "Project B", Role: "Manager" },
        },
      ],
    },
  },
  comparison: {
    context:
      "Compare all features across MagicChat.io plans to choose what's best for your business",
    data: {
      columns: ["Features", "Launch", "Starter", "Growth Most Popular"],
      sample_rows: [
        {
          label: "Monthly Active Users",
          values: {
            Launch: "100 (live chat & auth)",
            Starter: "1,000 (live chat & auth)",
            "Growth Most Popular": "5,000 (live chat & auth)",
          },
        },
        {
          label: "Price",
          values: { Launch: "$0", Starter: "$29", "Growth Most Popular": "$79" },
        },
      ],
    },
  },
  analytical: {
    context: "Monthly revenue for different regions — Aggregated revenue metrics",
    data: {
      columns: ["Month", "Region", "Revenue"],
      sample_rows: [
        {
          label: "Row1",
          values: { Month: "Jan", Region: "North America", Revenue: "$120,000" },
        },
        {
          label: "Row2",
          values: { Month: "Jan", Region: "Europe", Revenue: "$95,000" },
        },
      ],
    },
  },
  matrix: {
    context: "Document similarity scores using Cosine Similarity",
    data: {
      columns: ["Document A", "Document B", "Cosine Similarity"],
      sample_rows: [
        {
          label: "Pair1",
          values: { "Document A": "Doc1", "Document B": "Doc2", "Cosine Similarity": "0.87" },
        },
        {
          label: "Pair2",
          values: { "Document A": "Doc1", "Document B": "Doc3", "Cosine Similarity": "0.65" },
        },
      ],
    },
  },
  decision: {
    context: "Discount eligibility rules for MagicChat.io",
    data: {
      columns: ["User Type", "Cart Value", "Discount Percentage"],
      sample_rows: [
        {
          label: "Rule1",
          values: { "User Type": "Premium", "Cart Value": ">$100", "Discount Percentage": "20%" },
        },
        {
          label: "Rule2",
          values: { "User Type": "Standard", "Cart Value": ">$50", "Discount Percentage": "10%" },
        },
      ],
    },
  },
  timeline: {
    context: "Product release timeline — Key releases and their dates",
    data: {
      columns: ["Event", "Release Date"],
      sample_rows: [
        { label: "Release1", values: { Event: "Version 1.0", "Release Date": "2025-01-15" } },
        { label: "Release2", values: { Event: "Version 2.0", "Release Date": "2025-06-10" } },
      ],
    },
  },
  lookup: {
    context: "HTTP status codes reference",
    data: {
      columns: ["Status Code", "Meaning"],
      sample_rows: [
        { label: "Code1", values: { "Status Code": "200", Meaning: "OK" } },
        { label: "Code2", values: { "Status Code": "404", Meaning: "Not Found" } },
      ],
    },
  },
};

export default function AllTestCasesTables() {
  return (
    <div className="p-6 space-y-10">
      {Object.entries(TEST_CASES).map(([key, table]) => (
        <div key={key} className="space-y-4">
          <h2 className="text-lg font-semibold capitalize">{key.replace(/_/g, " ")}</h2>
          <p className="text-sm text-gray-600">{table.context}</p>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  {table.data.columns.map((col) => (
                    <th key={col} className="px-4 py-2 border-b text-left text-sm font-medium">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.data.sample_rows.map((row, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-gray-50">
                    {table.data.columns.map((col) => (
                      <td key={col} className="px-4 py-2 border-b text-sm">
                        {row.values[col] ?? row.label}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
