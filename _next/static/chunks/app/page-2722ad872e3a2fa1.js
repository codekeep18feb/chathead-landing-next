(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5029:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,8173,23)),Promise.resolve().then(t.bind(t,9725)),Promise.resolve().then(t.bind(t,7603)),Promise.resolve().then(t.bind(t,8835)),Promise.resolve().then(t.bind(t,9734)),Promise.resolve().then(t.bind(t,7266)),Promise.resolve().then(t.bind(t,6913))},7266:(e,s,t)=>{"use strict";t.d(s,{default:()=>m});var i=t(7437),n=t(2265);let a=e=>{let{images:s,onClose:t}=e,[a,l]=(0,n.useState)(0);return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:s[a],alt:"Demo for version"}),(0,i.jsxs)("div",{className:"step-navigation",children:[(0,i.jsx)("button",{onClick:()=>{l(e=>(e-1+s.length)%s.length)},disabled:0===s.length||0===a,className:"btn btn-prev",children:"Previous"}),s.length>1&&a<s.length-1?(0,i.jsx)("button",{onClick:()=>{l(e=>(e+1)%s.length)},className:"btn btn-next",children:"Next"}):(0,i.jsx)("button",{onClick:()=>{console.log("You clicked on finsih btn"),l(0),t()},className:"btn btn-finish",children:"Finish"})]})]})})},l=e=>{let{version:s,onWatchDemo:t,onBack:n}=e;return(0,i.jsxs)("div",{className:"chat-type-wrapper",style:{display:"block"},children:[(0,i.jsx)("div",{className:"back-btn",children:(0,i.jsx)("button",{onClick:n,children:(0,i.jsx)("i",{className:"bi bi-x"})})}),(0,i.jsx)("div",{className:"world-chat",children:(0,i.jsxs)("section",{className:"v1_wrapper",children:[(0,i.jsx)("h4",{children:"".concat(s," - CASE1 - If they already have an authentication system in product (JWT) and just want the chat.")}),(0,i.jsx)(r,{version:s,onWatchDemo:t})]})})]})},r=e=>{let{version:s,onWatchDemo:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"row",children:["Benefits","Provides"].map((e,t)=>(0,i.jsx)(o,{title:e,version:s},t))}),(0,i.jsx)(c,{onWatchDemo:t,version:s})," ",(0,i.jsx)("div",{className:"row",children:["Steps","Examples"].map((e,t)=>(0,i.jsx)(o,{title:e,version:s},t))})]})},o=e=>{let{title:s,version:t}=e,n={v1:{Benefits:["v1 Lorem Ipsum is simply dummy text of the printing","Lorem Ipsum is simply dummy text of the printing","Lorem Ipsum is simply dummy text of the printing"],Provides:["v1 Provides high performance and reliability","Integrates seamlessly with existing systems","User-friendly interface for easy navigation"],Steps:["v1 Step 1: Integrate the API","Step 2: Configure settings","Step 3: Launch and monitor"],Examples:["v1 Example 1: Real-time messaging","Example 2: Group chats with multiple users","Example 3: Custom emoji support"]},v2:{Benefits:["v2 Lorem Ipsum is advanced text of the printing","Enhanced features for better engagement","Scalable for large user bases"],Provides:["v2 Provides analytics and reporting tools","Advanced security protocols in place","Customizable user permissions"],Steps:["v2 Step 1: Set up your account","Step 2: Customize your chat experience","Step 3: Utilize the reporting features"],Examples:["v2 Example 1: Integrated video calls","Example 2: Multi-channel support","Example 3: AI-driven responses"]},v3:{Benefits:["v3 Lorem Ipsum is the most cutting-edge text of the printing","Provides tools for extensive customization","Offers proactive customer support"],Provides:["v3 Provides AI-driven insights for better engagement","Integration with third-party applications","Advanced user segmentation capabilities"],Steps:["v3 Step 1: Deploy the chat widget","Step 2: Engage users with personalized messages","Step 3: Review analytics and optimize strategies"],Examples:["v3 Example 1: Smart replies based on user behavior","Example 2: Contextual help features","Example 3: Integration with CRM tools"]}}[t][s];return(0,i.jsxs)("div",{className:"v1_content_card",children:[(0,i.jsx)("h5",{children:s}),(0,i.jsx)("ul",{children:n.map((e,s)=>(0,i.jsx)("li",{children:e},s))}),(0,i.jsx)("div",{className:"icon-wrapper",children:(0,i.jsx)("img",{className:"icon",src:"Asset/arrow.png",alt:"icon"})})]})},c=e=>{let{onWatchDemo:s,version:t}=e;return(0,i.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,i.jsx)("button",{className:"read_more_btn",onClick:()=>s(t),children:"Watch Demo"})})},d=()=>(0,i.jsxs)("div",{className:"chat-type-wrapper",children:[(0,i.jsx)("div",{className:"back-btn",children:(0,i.jsx)("button",{children:(0,i.jsx)("i",{className:"bi bi-x"})})}),(0,i.jsxs)("div",{className:"world-chat",children:[(0,i.jsx)(h,{title:"Benefits",items:["Start quickly to stay ahead of your competitors.","Free tier pack is enough for small business.","Flexible and most affordable pricing plans.","Hassle-free integration with most types of sites/apps.","Reliable and comes with SLA terms.","Flexibility to choose the correct chat type for your needs."]}),(0,i.jsx)(h,{title:"Examples",items:["Lorem Ipsum is simply dummy text of the printing.","Lorem Ipsum is simply dummy text of the printing.","Lorem Ipsum is simply dummy text of the printing.","Lorem Ipsum is simply dummy text of the printing."]}),(0,i.jsx)(h,{title:"For Who",items:["Someone who wants a One-to-One Chat Solution in their product with any of the following cases:","Case 1- Auth - cloud managed","Case 2- Auth - locally managed","Case 3- Auth - not required"]}),(0,i.jsx)(h,{title:"How it Works",items:["Make a tenant account","Login to your Account","Create An App","Choose the right type of chat for your App","Follow the respective integration docs"]}),(0,i.jsx)("img",{src:"Asset/globe.png",alt:"World Chat",className:"center-image"})]})]}),h=e=>{let{title:s,items:t}=e;return(0,i.jsxs)("div",{className:"chat-type-content",children:[(0,i.jsx)("h5",{children:s}),(0,i.jsx)("ul",{children:t.map((e,s)=>(0,i.jsx)("li",{children:e},s))})]})},m=()=>{let[e,s]=(0,n.useState)(null),[t,r]=(0,n.useState)(!1),[o,c]=(0,n.useState)(null),h=e=>{s(e)};return(0,i.jsx)("section",{className:"how-section",children:(0,i.jsxs)("div",{className:"how-content",children:[(0,i.jsxs)("div",{className:"left-side",children:[(0,i.jsx)("h2",{children:"Peer to Admin"}),(0,i.jsx)("ul",{className:"peer-list",children:["v1","v2","v3"].map(e=>(0,i.jsx)("li",{onClick:()=>h(e),children:e},e))})]}),(0,i.jsx)("div",{className:"right-side",children:e?(0,i.jsx)(l,{version:e,onWatchDemo:e=>{c(e),r(!0)},onBack:()=>s(null)}):(0,i.jsx)(d,{})}),t&&(0,i.jsx)("div",{className:"overlay",children:(0,i.jsx)("div",{className:"popup",children:(0,i.jsx)("div",{className:"image-wrappe",children:(0,i.jsx)(a,{images:["/Asset/demo_imgs/after.jpeg","/Asset/demo_imgs/before.jpeg"],onClose:()=>{r(!1),c(null)}})})})})]})})}},6913:(e,s,t)=>{"use strict";t.d(s,{default:()=>a});var i=t(7437),n=t(2265);let a=()=>{let[e,s]=(0,n.useState)(!1);return(0,i.jsxs)("nav",{className:"navbar",children:[(0,i.jsxs)("div",{className:"logo",children:[(0,i.jsx)("img",{src:"/Asset/logo.png",alt:"quickChat"}),(0,i.jsx)("h2",{children:"quickChat"})]}),(0,i.jsx)("div",{className:"burger-icon",onClick:()=>{s(e=>!e)},children:"☰"}),(0,i.jsxs)("ul",{className:"nav-links ".concat(e?"active":""),id:"nav-links",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#platform",className:"link",children:"Platform"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#solutions",className:"link",children:"Solutions"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#developer",className:"link",children:"Developers"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#resource",className:"link",children:"Resources"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#pricing",className:"link",children:"Pricing"})}),(0,i.jsxs)("div",{className:"auth-buttons",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"http://122.160.157.99:3101/newlogin",children:(0,i.jsx)("button",{className:"login",children:"Log-in"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"http://122.160.157.99:3101/newsignup",children:(0,i.jsx)("button",{className:"signup",children:"Sign-up"})})})]})]})]})}},9725:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});let i={src:"/chathead-landing-next//_next/static/media/delivery_status.4a1ed03c.svg",height:223,width:300,blurWidth:0,blurHeight:0}},7603:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});let i={src:"/chathead-landing-next//_next/static/media/formword.eb531bae.svg",height:315,width:418,blurWidth:0,blurHeight:0}},8835:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});let i={src:"/chathead-landing-next//_next/static/media/reaction.253cd4f9.svg",height:224,width:300,blurWidth:0,blurHeight:0}},9734:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});let i={src:"/chathead-landing-next//_next/static/media/reply.5b899cca.svg",height:350,width:419,blurWidth:0,blurHeight:0}}},e=>{var s=s=>e(e.s=s);e.O(0,[173,130,215,744],()=>s(5029)),_N_E=e.O()}]);