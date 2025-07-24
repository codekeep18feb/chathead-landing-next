"use client";

import IndustryPageTemplate from "../../IndustryPageTemplate";

export default function Marketplace() {
  return (
    <>
      <h1>Marketplace</h1>
      <IndustryPageTemplate
        industry_name={"Marketplace"}
        industry_reason={
          "Less friction, Better communication, No platform leakage"
        }
      />
    </>
  );
}
