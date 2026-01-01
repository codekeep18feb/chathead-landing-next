import React from "react";

export default function Page() {
  return (
    <div style={{ padding: "24px", maxWidth: "900px" }}>


      <pre className="renderingToolSty_script_code__hmTwz">
        <code>
          {`<script>
  document.addEventListener("DOMContentLoaded", async () => {
    const profileData = await window.profileDataPromise; // Change this line to match how your application retrieves profile data

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
      <div>
        Run the <code>setUp</code> function at your application's entry point
        (usually the landing page or root URL) to ensure it loads immediately
        when the application starts.
      </div>
      <table
        border="1"
        cellPadding="8"
        cellSpacing="0"
        style={{ marginTop: "24px" }}
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
    </div>
  );
}
