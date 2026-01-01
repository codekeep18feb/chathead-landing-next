"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [activeComponent, setActiveComponent] = useState("component3");

  return (
    <div style={{ padding: "24px", maxWidth: "900px" }}>
      {/* Top Developers Link */}
      <div style={{ marginBottom: "16px" }}>
        <Link
          href="/developers"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: 500,
          }}
        >
          ← Developers
        </Link>
      </div>

      {/* Toggle Buttons */}
      <div style={{ marginBottom: "16px" }}>
        <button
          onClick={() => setActiveComponent("component3")}
          style={{
            marginRight: "8px",
            padding: "8px 16px",
            background: activeComponent === "component3" ? "#000" : "#eee",
            color: activeComponent === "component3" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
          }}
        >
          Component 1
        </button>

        <button
          onClick={() => setActiveComponent("component4")}
          style={{
            padding: "8px 16px",
            background: activeComponent === "component4" ? "#000" : "#eee",
            color: activeComponent === "component4" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
          }}
        >
          Component 2
        </button>
      </div>

      {/* Conditional Rendering */}
      {activeComponent === "component3" ? <Component3 /> : <Component4 />}
    </div>
  );
}

/* ---------------- Component 1 ---------------- */
function Component3() {
  return(<>
  <div>
    <div>
      magicchat.io is a saas based chat tool. you can use in your websites.
    </div>

    <div>
      <div>
        <h2>Detailed Feature Comparison</h2>
        <p>
          Compare all features across our plans to choose what's best for your business
        </p>

        <div>
          <table>
            <thead>
              <tr>
                <th>Features</th>
                <th>
                  <div>Launch 🚀</div>
                </th>
                <th>
                  <div>Starter 🌟</div>
                </th>
                <th>
                  <div>
                    Growth 🌱
                    <div>Most Popular</div>
                  </div>
                </th>
                <th>
                  <div>Scale ⚡</div>
                </th>
                <th>
                  <div>Enterprise 🏢</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Core Features Section */}
              <tr>
                <td colSpan={6}>
                  <div>
                    <strong>Core Features</strong>
                    <span>▼</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div>
                    Monthly Active Users
                    <button aria-label="More info about Monthly Active Users">ℹ️</button>
                  </div>
                </td>
                <td>100 (Live Chat & Auth)</td>
                <td>1,000 (Live Chat & Auth)</td>
                <td>5,000 (Live Chat & Auth)</td>
                <td>25,000 (Live Chat & Auth)</td>
                <td>Custom</td>
              </tr>

              {/* AI Chat Features Section */}
              <tr>
                <td colSpan={6}>
                  <div>
                    <strong>AI Chat Features</strong>
                    <span>▼</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div>
                    AI Messages / month
                    <button aria-label="More info about AI Messages / month">ℹ️</button>
                  </div>
                </td>
                <td>100</td>
                <td>5,000</td>
                <td>10,000+ (scalable)</td>
                <td>20,000+ (scalable)</td>
                <td>Unlimited</td>
              </tr>

              <tr>
                <td>
                  <div>
                    Multi-language Support
                    <button aria-label="More info about Multi-language Support">ℹ️</button>
                  </div>
                </td>
                <td>✘</td>
                <td>✘</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</>
)
}

/* ---------------- Component 2 ---------------- */
function Component4() {
  return (
    <div>
      <h3>King of the Land</h3>
      <p>
        The lion is often called the king of the land because of its strength,
        dominance, and commanding presence. With powerful muscles and a fearless
        nature, lions sit at the top of the food chain. They live and hunt in
        groups called prides, showing strong leadership and cooperation. A
        lion’s roar can be heard from miles away, symbolizing authority and
        control over its territory.
      </p>
    </div>
  );
}
