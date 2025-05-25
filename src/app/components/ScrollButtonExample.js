// components/ScrollButtonExample.js
"use client";

import React from "react";

const ScrollButtonExample = () => {
  const handleScroll = () => {
    const element = document.querySelector(".integration_successful");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <button onClick={handleScroll}>Scroll to Target</button>;
};

export default ScrollButtonExample;
