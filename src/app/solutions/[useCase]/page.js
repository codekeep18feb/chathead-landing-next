import React from "react";
import Marketplace from "@/app/components/solutions_items/marketplace/page";
import Matrimony from "@/app/components/solutions_items/matrimony/page";
import OnDemand from "@/app/components/solutions_items/ondemand/page";
import OnlineEducation from "@/app/components/solutions_items/onlineEducation/page";
import HealthcareTelehealth from "@/app/components/solutions_items/healthcare/page";
import LegalTech from "@/app/components/solutions_items/legalTech/page";
import RealEstate from "@/app/components/solutions_items/realEstate/page";
import Travel from "@/app/components/solutions_items/travel/page";
import GroceryDelivery from "@/app/components/solutions_items/groceryDelivery/page";
import FinancialServices from "@/app/components/solutions_items/financialServices/page";
import Ecommerce from "@/app/components/solutions_items/ecommerce/page";

export async function generateStaticParams() {
  const useCase = [
    "marketplace",
    "on-demand-services",
    "matrimony",
    "healthcare-and-telehealth",
    "online-education-and-ed-tech",
    "e-commerce",
    "financial-services",
    "grocery-delivery",
    "travel",
    "real-estate",
    "legal-tech",

  ];
  return useCase.map((useCase) => ({ useCase }));
}

export default async function UseCasePage({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const { useCase } = resolvedParams;

  const featureComponents = {
    "marketplace": <Marketplace />,
    "on-demand-services": <OnDemand />,
    "matrimony": <Matrimony />,
    "healthcare-and-telehealth": <HealthcareTelehealth />,
    "online-education-and-ed-tech": <OnlineEducation />,
    "e-commerce": <Ecommerce />,
    "financial-services": <FinancialServices />,
    "grocery-delivery": <GroceryDelivery />,
    "travel": <Travel />,
    "real-estate": <RealEstate />,
    "legal-tech": <LegalTech />,
  };

  const Component = featureComponents[useCase];
  if (!Component) return <h1>Feature not found</h1>;

  return Component;
}
