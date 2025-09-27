"use client";

import React from "react";

function DevelopersRootPage() {
  console.log("how many times it renderes?")
  return (
    <div className="platform-container p-6">
      <div className="platform-sections max-w-2xl mx-auto">
        <div className="platform-section">
          <h1 className="text-2xl font-bold mb-6">Developer Documentation</h1>
          <p className="text-gray-600 mb-6">
            Explore our different integration modes. Each version is designed for
            a specific use case, so you can pick what best fits your product.
          </p>

          <ul className="space-y-4">
            <li>
              <a
                href="/documentation"
                className="block p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
              >
                <h2 className="text-lg font-semibold text-blue-600">
                  📘 Full Documentation
                </h2>
                <p className="text-gray-500 text-sm">
                  Complete reference for all features and APIs.
                </p>
              </a>
            </li>

            <li>
              <a
                href="https://magicchat.io/documentation/instant-auth"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
              >
                <h2 className="text-lg font-semibold text-blue-600">
                  ⚡ Instant Auth + Chat (V1)
                </h2>
                <p className="text-gray-500 text-sm">
                  Quickest way to get started with authentication and chat built-in.
                </p>
              </a>
            </li>


            <li>
              <a
                href="https://magicchat.io/documentation/byo"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
              >
                <h2 className="text-lg font-semibold text-blue-600">
                  ⚡ BYO Auth + Chat (V2)
                </h2>
                <p className="text-gray-500 text-sm">Bring your own authentication, pair it with chat powered by MagicChat.                </p>
              </a>
            </li>



            <li>
              <a
                href="https://magicchat.io/documentation/cms-chat"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
              >
                <h2 className="text-lg font-semibold text-blue-600">
                  📰 CMS Chat (V3)
                </h2>
                <p className="text-gray-500 text-sm">
                  Seamlessly embed chat inside your CMS-powered site or app.
                </p>
              </a>
            </li>

            <li>
              <a
                href="https://magicchat.io/documentation/no-auth"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
              >
                <h2 className="text-lg font-semibold text-blue-600">
                  💬 No Auth, Chat Only (V4)
                </h2>
                <p className="text-gray-500 text-sm">
                  Lightweight option: embed chat without requiring authentication.
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DevelopersRootPage;
