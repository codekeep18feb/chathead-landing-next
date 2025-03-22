import React from "react";
// import Matrimony from '../components/solutions_items/matrimony/page'
import Accordion from "../components/solutions_items/matrimony/page";
import ai_power from "../../../Asset/ai_power.png";
import notification_img from "../../../Asset/notification_img.png";
import webhooks_img from "../../../Asset/webhooks_img.png";

const accordionItems = [
  {
    title: "AI powered insights",
    subheading: "Gain deep insights into user behavior",
    content:
      "Analyze chat usage to understand how users interact. Create detailed user profiles based on chat history and sentiment analysis. Develop user funnels to track and optimize user journeys.",
    image: ai_power.src,
  },
  {
    title: "Notifications  ",
    subheading: "Gain deep insights into user behavior ",
    content:
      "Analyze chat usage to understand how users interact. Create detailed user profiles based on chat history and sentiment analysis. Develop user funnels to track and optimize user journeys. ",
    image: notification_img.src,
  },
  {
    title: "Webhooks",
    subheading: "Gain deep insights into user behavior",
    content:
      "Analyze chat usage to understand how users interact. Create detailed user profiles based on chat history and sentiment analysis. Develop user funnels to track and optimize user journeys.",
    image: webhooks_img.src,
  },
];

export default function page() {
  return (
    <div>
      <div>Whole Content</div>
      {/* <Matrimony /> */}
      <Accordion items={accordionItems} />
    </div>
  );
}
