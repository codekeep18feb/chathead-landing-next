"use client";

import IndustryPageTemplate from "../../IndustryPageTemplate";

export default function OnDemand() {
  return (
    <>
    <h1>On-Demand Services</h1>
      <IndustryPageTemplate
        industry_name={"On-Demand Services"}
        industry_reason={
          "Less friction, Better communication, No platform leakage"
        }
      />
    </>
  );
}
