"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [activeComponent, setActiveComponent] = useState("component1");

  return (
    <div style={{ padding: "24px", maxWidth: "900px" }}>
      {/* Top Developers Link */}
      <div style={{ marginBottom: "16px" }}>
        <Link
          href="/documentation_v3"
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
          onClick={() => setActiveComponent("component1")}
          style={{
            marginRight: "8px",
            padding: "8px 16px",
            background: activeComponent === "component1" ? "#000" : "#eee",
            color: activeComponent === "component1" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
          }}
        >
          Component 1
        </button>

        <button
          onClick={() => setActiveComponent("component2")}
          style={{
            padding: "8px 16px",
            background: activeComponent === "component2" ? "#000" : "#eee",
            color: activeComponent === "component2" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
          }}
        >
          Component 2
        </button>
      </div>

      {/* Conditional Rendering */}
      {activeComponent === "component1" ? <Component1 /> : <Component2 />}
    </div>
  );
}

/* ---------------- Component 1 ---------------- */
function Component1() {
  return (
    <>
      <pre className="renderingToolSty_script_code__hmTwz">
        <code>
{`<script>
  document.addEventListener("DOMContentLoaded", async () => {
    const profileData = await window.profileDataPromise;

    if (!profileData) {
      await window.magicchat_io.setUp(
        "v2_app1",
        "bGVnYWwxMTFfX1NFUFJBVE9SX192Ml9hcHAx"
      );
    } else {
      await window.magicchat_io.initialize({
        app_version: "V2",
        uid: profileData.username,
      });
    }
  });
</script>`}
        </code>
      </pre>

      <div style={{ marginTop: "12px" }}>
        Run the <code>setUp</code> function at your application's entry point
        (usually the landing page or root URL) to ensure it loads immediately
        when the application starts.
      </div>

      <table
        border="1"
        cellPadding="8"
        cellSpacing="0"
        style={{ marginTop: "24px", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>app_name</td>
            <td>string</td>
            <td>Unique application identifier</td>
          </tr>
          <tr>
            <td>api_key</td>
            <td>string</td>
            <td>Base64 encoded API key</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

/* ------------------ Component 2 ---------------- */
function Component2() {
  return (
    <div>
      <h3>Speciality of an Eagle</h3>
      <p>
        Eagles have incredibly sharp vision, seeing 4–8 times better than humans,
        allowing them to spot prey from miles away. Their eyes are so large they
        fill most of their skull. They build enormous nests called eyries, which
        can weigh thousands of pounds and grow bigger each year. Eagles are also
        loyal, often mating for life, and they soar at altitudes over 10,000 feet
        using powerful wings while conserving energy.
      </p>
    </div>
  );
}
