import React from "react";

export default function AllTableTypeExamples() {
  return (
    <div className="p-6 space-y-12">

      {/* ENTITY ATTRIBUTE */}
      <Section
        title="Entity Attribute"
        context="Starter plan details for MagicChat.io — Single plan properties like price, MAU, and support"
      >
        <TwoColTable
          headers={["Attribute", "Value"]}
          rows={[
            ["Price", "$29/month"],
            ["Monthly Active Users", "1,000 (live chat & auth)"],
            ["Support Level", "Email only"],
          ]}
        />
      </Section>

      {/* ENTITY RELATIONSHIP */}
      <Section
        title="Entity Relationship"
        context="User assignments to projects in MagicChat.io — Each row represents which user is assigned to which project and their role"
      >
        <Table
          headers={["User", "Project", "Role"]}
          rows={[
            ["Alice", "Project A", "Developer"],
            ["Bob", "Project A", "Tester"],
            ["Carol", "Project B", "Manager"],
          ]}
        />
      </Section>

      {/* COMPARISON */}
      <Section
        title="Comparison"
        context="Compare all features across MagicChat.io plans to choose what's best for your business"
      >
        <Table
          headers={["Features", "Launch", "Starter", "Growth (Most Popular)"]}
          rows={[
            [
              "Monthly Active Users",
              "100 (live chat & auth)",
              "1,000 (live chat & auth)",
              "5,000 (live chat & auth)",
            ],
            ["Price", "$0", "$29", "$79"],
          ]}
        />
      </Section>

      {/* ANALYTICAL */}
      <Section
        title="Analytical"
        context="Monthly revenue for different regions — Aggregated revenue metrics"
      >
        <Table
          headers={["Month", "Region", "Revenue"]}
          rows={[
            ["Jan", "North America", "$120,000"],
            ["Jan", "Europe", "$95,000"],
          ]}
        />
      </Section>

      {/* MATRIX */}
      <Section
        title="Matrix"
        context="Document similarity scores using Cosine Similarity"
      >
        <Table
          headers={["Document A", "Document B", "Cosine Similarity"]}
          rows={[
            ["Doc1", "Doc2", "0.87"],
            ["Doc1", "Doc3", "0.65"],
          ]}
        />
      </Section>

      {/* DECISION */}
      <Section
        title="Decision"
        context="Discount eligibility rules for MagicChat.io"
      >
        <Table
          headers={["User Type", "Cart Value", "Discount Percentage"]}
          rows={[
            ["Premium", ">$100", "20%"],
            ["Standard", ">$50", "10%"],
          ]}
        />
      </Section>

      {/* TIMELINE */}
      <Section
        title="Timeline"
        context="Product release timeline — Key releases and their dates"
      >
        <Table
          headers={["Event", "Release Date"]}
          rows={[
            ["Version 1.0", "2025-01-15"],
            ["Version 2.0", "2025-06-10"],
          ]}
        />
      </Section>

      {/* LOOKUP */}
      <Section
        title="Lookup"
        context="HTTP status codes reference"
      >
        <TwoColTable
          headers={["Status Code", "Meaning"]}
          rows={[
            ["200", "OK"],
            ["404", "Not Found"],
          ]}
        />
      </Section>
    </div>
  );
}

/* -------------------- */
/* Reusable UI Helpers  */
/* -------------------- */

function Section({ title, context, children }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{context}</p>
      {children}
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-2 border-b text-left text-sm font-medium"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="odd:bg-white even:bg-gray-50">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-2 border-b text-sm"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TwoColTable({ headers, rows }) {
  return <Table headers={headers} rows={rows} />;
}
