import React from "react";
import ReactionsPage from "@/app/components/platform_items/reactions/page";
import DeliveryReports from "@/app/components/platform_items/delivery-reports/page";
import LiveStatus from "@/app/components/platform_items/live-status/page";
import EmailNotifications from "@/app/components/platform_items/email-notifications/page";
import Integration from "@/app/components/platform_items/integration/page";


export async function generateStaticParams() {
  // List all your features here (lowercase, URL-friendly)
  const features = [
    "reactions",
    "delivery-reports",
    "live-status",
    "email-notifications",
    // "integration"
    // ...
  ];

  return features.map((feature) => ({ feature }));
}

export default async function FeaturePage  ({ params }) {
   const resolvedParams = await Promise.resolve(params);
  const { feature } = resolvedParams;

  // Map URL param → React component
  const featureComponents = {
    "reactions": <ReactionsPage />,
    "delivery-reports": <DeliveryReports/>,
    "live-status": <LiveStatus/>,
    "email-notifications": <EmailNotifications/>,
    // "integration" : <Integration/>
    


    // ...
  };

  const Component = featureComponents[feature];

  if (!Component) return <h1>Feature not found</h1>;

  return Component;
};

