"use client";

import React, { useState } from "react";

export default function Page() {
    const [activeTab, setActiveTab] = useState("intro"); // default active

    return (
        <div style={{ padding: "20px" }}>
            {/* Tabs Header */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <button
                    onClick={() => setActiveTab("intro")}
                    style={{
                        padding: "10px 16px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        background: activeTab === "intro" ? "#2c3e50" : "#f5f5f5",
                        color: activeTab === "intro" ? "#fff" : "#000",
                        cursor: "pointer",
                    }}
                >
                    Intro
                </button>

                <button
                    onClick={() => setActiveTab("tables")}
                    style={{
                        padding: "10px 16px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        background: activeTab === "tables" ? "#2c3e50" : "#f5f5f5",
                        color: activeTab === "tables" ? "#fff" : "#000",
                        cursor: "pointer",
                    }}
                >
                    Tables
                </button>
            </div>

            {/* Tab Content */}
            {activeTab === "intro" && (
                <div>
                   <h2>🚀 SaaS Platform Overview</h2>
<p>
  This SaaS platform helps teams automate decision-making, visualize structured
  data, and track system events in a clear and actionable way.
</p>
<p>
  It is designed for product teams, analysts, and developers who need fast
  insights without complex configuration. Using rule-based tables and timeline
  views, users can easily understand pricing logic, workflows, and historical
  changes.
</p>
<p>
  Switch to the <strong>Tables</strong> tab to explore real examples such as
  decision rules and product timelines.
</p>

                </div>
            )}

            {activeTab === "tables" && (
                <>
                    <DecisionTable />
                    <TimelineTable />
                </>
            )}
        </div>
    );
}


/* -------------------------------------------------- */
function DecisionTable() {
  return (
    <div style={{ marginBottom: "40px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2 style={{ color: "#2c3e50" }}>🚚 Shipping Cost Decision Rules</h2>
      <p style={{ color: "#666", fontStyle: "italic" }}>"What is the shipping cost for a 5kg package to Europe with express delivery?"</p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "15px" }}>
        <thead style={{ backgroundColor: "#f5f5f5" }}>
          <tr>
            <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #ddd" }}>Weight (kg)</th>
            <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #ddd" }}>Destination Zone</th>
            <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #ddd" }}>Delivery Speed</th>
            <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #ddd" }}>Shipping Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "12px" }}>≤ 2</td>
            <td style={{ padding: "12px" }}>Domestic</td>
            <td style={{ padding: "12px" }}>Standard</td>
            <td style={{ padding: "12px", fontWeight: "bold" }}>$5.99</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "12px" }}>≤ 2</td>
            <td style={{ padding: "12px" }}>Domestic</td>
            <td style={{ padding: "12px" }}>Express</td>
            <td style={{ padding: "12px", fontWeight: "bold" }}>$12.99</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "12px" }}>2-10</td>
            <td style={{ padding: "12px" }}>Europe</td>
            <td style={{ padding: "12px" }}>Standard</td>
            <td style={{ padding: "12px", fontWeight: "bold" }}>$24.99</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "12px" }}>2-10</td>
            <td style={{ padding: "12px" }}>Europe</td>
            <td style={{ padding: "12px" }}>Express</td>
            <td style={{ padding: "12px", fontWeight: "bold" }}>$49.99</td>
          </tr>
          <tr>
            <td style={{ padding: "12px" }}>10-25</td>
            <td style={{ padding: "12px" }}>Asia</td>
            <td style={{ padding: "12px" }}>Express</td>
            <td style={{ padding: "12px", fontWeight: "bold" }}>$89.99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* -------------------------------------------------- */
/* 6️⃣ Timeline / Events (timeline) */
/* Real Example: Project Milestone Timeline */
/* -------------------------------------------------- */
function TimelineTable() {
  return (
    <div style={{ marginBottom: "40px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2 style={{ color: "#2c3e50" }}>📅 Product Development Timeline</h2>
      <p style={{ color: "#666", fontStyle: "italic" }}>"What happened on June 15, 2024?"</p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "15px" }}>
        <thead style={{ backgroundColor: "#f5f5f5" }}>
          <tr>
            <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #ddd", width: "20%" }}>Date</th>
            <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #ddd", width: "30%" }}>Milestone</th>
            <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #ddd" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "12px" }}>2024-03-15</td>
            <td style={{ padding: "12px" }}>Project Kickoff</td>
            <td style={{ padding: "12px" }}>Initial planning and team allocation</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "12px" }}>2024-05-20</td>
            <td style={{ padding: "12px" }}>Alpha Release</td>
            <td style={{ padding: "12px" }}>Internal testing with core features</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "12px" }}>2024-06-15</td>
            <td style={{ padding: "12px" }}>Beta Launch</td>
            <td style={{ padding: "12px" }}>Public beta with limited users</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "12px" }}>2024-08-01</td>
            <td style={{ padding: "12px" }}>Version 1.0</td>
            <td style={{ padding: "12px" }}>Full public release</td>
          </tr>
          <tr>
            <td style={{ padding: "12px" }}>2024-10-15</td>
            <td style={{ padding: "12px" }}>Feature Update 1.2</td>
            <td style={{ padding: "12px" }}>Added analytics dashboard</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}