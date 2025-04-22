const Platform = () => {
   const platformList = {
     features: [
       {
         icon: "fa-solid fa-chart-bar",
         subHeading: "Moderation",
         text: "Create a safe environment for your users with our AI moderation   (_lorem ipsum)",
       },
       {
         icon: "fa-solid fa-chart-bar",
         subHeading: "Analytics & insights",
         text: "Get real-time usage insights of your user engagement through chat",
       },
       {
         icon: "fa-solid fa-chart-bar",
         subHeading: "Notifications",
         text: "Push, email notifications for new messages, mentions, and other important events.",
       },
       {
         icon: "fa-solid fa-chart-bar",
         subHeading: "Interactive messages",
         text: "Convert your chat into a powerful operations hub",
       }
       ,
      //  {
      //    icon: "fa-solid fa-chart-bar",
      //    subHeading: "Multi-tenancy",
      //    text: "Create and manage multiple, independent chat environments with ease",
      //  },
      //  {
      //    icon: "fa-solid fa-chart-bar",
      //    subHeading: "Webhooks",
      //    text: "Set up programmatic triggers for all chat events",
      //  },
      //  {
      //    icon: "fa-solid fa-chart-bar",
      //    subHeading: "Security & compliance",
      //    text: "Advanced encryption and security. Fully compliant with HIPAA, GDPR, SOC 2",
      //  },
      //  {
      //    icon: "fa-solid fa-chart-bar",
      //    subHeading: "All features",
      //    text: "Explore all features of CometChat across chat, voice and video",
      //  },
     ],
     integration: [
       {
         icon: "fa-solid fa-user",
         subHeading: "UI kits",
         text: "Ready to ship chat with pre-built UI components & business logic",
       },
       {
         icon: "fa-solid fa-envelope",
         subHeading: "SDKs & APIs",
         text: "Fully customisable SDKs and APIs to power your in-app user engagement",
       },
       {
         icon: "fa-solid fa-chart-bar",
         subHeading: "Widgets",
         text: "Simple, no-code option for light-weight chat use cases",
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
 