import DetailContent from "./DetailContent";

// ✅ Static content to render for each section
const contentData = {
  "to-whom": [
    "Products that need both authentication and chat out of the box.",
    "Apps that haven't implemented authentication yet.",
    "Websites aiming to convert visitors into active, authenticated users.",
    "Ideal for live or AI-powered chat paired with Magicchat’s authentication services.",
  ],
  "provides": [
    "Adds user login, signup, and authentication UI to your app or website.",
    "Embeds a customizable chatbox into any interface—web or mobile.",
    "Shows user activity and insights through intuitive dashboards.",
    "Includes an admin panel to manage chats, users, and app settings.",
  ],
  "how-it-works": [
    "Visitors will see authentication options embedded in your app or website.",
    "If logged in, users can access the chatbox with AIbot and preset Q&A.",
    "Upon signup and login, users unlock live chat to connect with a real admin.",
    "Admins can respond in real-time, offer support, and resolve user queries.",
    "Users and admins can exchange messages even when one is offline.",
  ],
  "example-usage": [
    "Ideal for small product-based businesses—connect sellers and buyers instantly through chat.",
    "Great for service providers, support-driven businesses, and small-scale chat call centers.",
    "Boosts lead generation by engaging visitors on high-traffic web pages.",
    "Useful for blogs, educational platforms, or landing pages needing instant engagement.",
    "Perfect for MVPs or new apps needing auth and chat fast.",
  ],
};


export async function generateStaticParams() {
  return Object.keys(contentData).map((section) => ({ section }));
}

// ✅ FIXED: make this async!
export default async function Page(props) {
  const params = await props.params; // <-- await the full params
  const section = params.section;
  const content = contentData[section];
  return <DetailContent section={section} content={content} />;
}