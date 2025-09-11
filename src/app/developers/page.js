"use client";

import React from "react";

function DevelopersRootPage() {
  return (
    <div className="platform-container">
      <div className="platform-sections">
        <div className="platform-section">
          <h2 className="text-xl font-semibold mb-4">v1 Documentation</h2>
          <ul className="space-y-2">

            <li >
              <a href="/documentation">Full Documentation</a>
            </li>

            <li>
              <a
                href="https://magicchat.io/documentation/instant-auth"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instant Auth + Chat (V1)
              </a>
            </li>
            <li>
              <a
                href="https://magicchat.io/documentation/byo-auth"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                           BYO Auth (V2)

              </a>
            </li>
            <li>
              <a
                href="https://magicchat.io/documentation/cms-chat"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CMS Chat (V3)
              </a>
            </li>
            <li>
              <a
                href="https://magicchat.io/documentation/no-auth"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                No Auth but only Chat (V4)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DevelopersRootPage;
