"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div style={{ padding: "24px", maxWidth: "1200px", fontFamily: "Arial, sans-serif" }}>

      <DecisionTable />
      <TimelineTable />
    </div>
  );
}

/* -------------------------------------------------- */
/* 5️⃣ Decision Table (decision) */
/* Real Example: Shipping Cost Calculator */
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