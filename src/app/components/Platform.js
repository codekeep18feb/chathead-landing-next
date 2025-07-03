const Platform = () => {
  const platformList = {
    features: [
      {
        icon: "fa-solid fa-face-smile",
        subHeading: "Reactions",
        text: "Let users express themselves instantly with emoji reactions to messages, making conversations more engaging and dynamic.",
      },
      {
        icon: "fa-solid fa-receipt",
        subHeading: "Delivery Reports",
        text: "Track message delivery in real time with instant read and delivery receipts, ensuring your communication is always on point.",
      },
      {
        icon: "fa-solid fa-signal",
        subHeading: "Live Status",
        text: "Monitor live presence and availability of users across your platform with real-time status indicators.",
      },
      {
        icon: "fa-solid fa-envelope-circle-check",
        subHeading: "Email Notifications",
        text: "Receive instant email alerts for important events, ensuring users never miss out on critical updates or activities.",
      },
      // Uncomment to add more features
      // {
      //   icon: "fa-solid fa-network-wired",
      //   subHeading: "Multi-Tenancy",
      //   text: "Create and manage multiple isolated chat environments within a single platform, perfect for SaaS and B2B use cases.",
      // },
      // {
      //   icon: "fa-solid fa-plug",
      //   subHeading: "Webhooks",
      //   text: "Enable real-time external integrations with custom webhooks triggered by chat events.",
      // },
      // {
      //   icon: "fa-solid fa-shield-halved",
      //   subHeading: "Security & Compliance",
      //   text: "Enterprise-grade security including end-to-end encryption, GDPR, HIPAA, and SOC 2 compliance.",
      // },
      // {
      //   icon: "fa-solid fa-list-check",
      //   subHeading: "All Features",
      //   text: "Access a complete suite of messaging, voice, video, moderation, and engagement tools.",
      // },
    ],
    integration: [
      // {
      //   icon: "fa-solid fa-layer-group",
      //   subHeading: "UI Kits",
      //   text: "Accelerate development with pre-built, customizable UI components that include chat business logic out of the box.",
      // },
      // {
      //   icon: "fa-solid fa-code",
      //   subHeading: "SDKs & APIs",
      //   text: "Integrate chat capabilities deeply into your application using modular SDKs and robust APIs tailored to your stack.",
      // },
      {
        icon: "fa-solid fa-puzzle-piece",
        subHeading: "Integration",
        text: "Please follow the documentaton to integrate it into your product.",
      },
    ],
  };
  
 
   return (
     <div className="platform-container">
       <div className="platform-sections">
         <div className="platform-section">
           <h2 className="section-title">Features</h2>
           <div className="card-list">
             {platformList.features.map((item, index) => (
               <div className="card" key={index}>
                 <div className="card-header">
                   <div className="icon_wrapper"><i className={`card-icon ${item.icon}`}></i></div>
                   <h3>{item.subHeading}</h3>
                 </div>
                 <p>{item.text}</p>
               </div>
             ))}
           </div>
         </div>
         <div className="platform-section">
           <h2 className="section-title">Integration</h2>
           <div className="card-list newcard-list">
             {platformList.integration.map((item, index) => (
               <div className="card" key={index}>
                 <div className="card-header">
                  <div className="icon_wrapper"><i className={`card-icon ${item.icon}`}></i></div>
                   <h3>{item.subHeading}</h3>
                 </div>
                 <p>{item.text}</p>
               </div>
             ))}
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default Platform;
 