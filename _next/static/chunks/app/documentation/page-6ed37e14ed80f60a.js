(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{1527:(e,t,n)=>{Promise.resolve().then(n.bind(n,8593))},8593:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var i=n(7437),s=n(2265);n(9590);let a={installation:{"Peer to Admin - V1":[{VANILA_JS:{content:[{tag_type:"p",text:"Instant messaging enhances user engagement by enabling users to connect and form a community within the app. \n              Increased engagement can lead to increased user satisfaction and loyalty to your app. \n              An instant messaging feature can also provide real-time support to users, \n              allowing them to get help and answers to their questions quickly. \n              The Chat SDK enables you to embed real-time messaging in any app, on any device, anywhere."},{tag_type:"div",children:[{tag_type:"h2",text:"Prerequisite"},{tag_type:"p",text:"To integrate Chat into your app, do the following:"},{tag_type:"ol",items:[{text:"Signup/Login to your account at AddChat.",link_parts:[{text:"Signup/Login",link:"https://www.google.com/"}]},{tag_type:"li",text:"Create an app for your use case."},{tag_type:"li",text:"Go To created apps's detail page and locate the credentials."}]}]},{tag_type:"div",children:[{tag_type:"h2",text:"Project setup"},{tag_type:"p",text:"To integrate Chat into your app, do the following:"},{tag_type:"feature_options",options:[{text:"[HeaderFul] Don't currently have a header and would like to have one",description:[{tag_type:"p",text:"In this mode, the header will include authentication options (Signup, Login, etc.) along with a chat box for user interaction."},{tag_type:"p",text:"To integrate Chat this into your app, Do the following."},{tag_type:"ol",items:[{tag_type:"li",text:"Update the script credentials section with your app's credentials",sub_items:[{tag_type:"li",text:"Find the entry file usually (index.html) and add these code in the head section of the html page.",code:'<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>'},{tag_type:"li",text:"after script is loaded we can initialize it lidddke below.",extra_text:"kindly add it below the first script",code:'<script src="node_modules/chathead-consumer-client/dist/bundle.js"></script>'},{tag_type:"li",text:"after script is loaded we can initialize it like below.",extra_text:"kindly add it below the first script",code:'<script>\n            document.addEventListener("DOMContentLoaded", async function () {\n              const token = localStorage.getItem("tezkit_token");\n              if (token) {\n                window.chathead.initialize(token);\n              } else {\n                window.chathead.setUp(\n                  "<Your App Name>", \n                  "<Your Api Key>", \n                  JSON.stringify({\n                    "header_theme": {\n                      "backgroundColor": "rgb(30, 136, 125)"\n                    },\n                    "chat_opener_theme": {\n                      "backgroundColor": "rgb(41, 48, 78)"\n                    }\n                  }),\n                  true,\n                  "/index.html"\n                );\n              }\n            });\n          </script>\n          '}]},{tag_type:"li",text:"Verify if you see the header on the top of your page and chat icon on the bottom of your page. like in below image ",img:"Asset/globe.png"},{tag_type:"li",text:"if so it was successfull integrated."}]}]},{text:"[HeaderLess] Currently have an Existing header and would like not to have one;",description:[{tag_type:"p",text:"In this mode, instead of displaying a standard header, all the authentication components (Signup, Login, etc.) are grouped together. These components are designed to be flexible, allowing you to place them in a fixed position anywhere within your custom header or elsewhere in your layout. Additionally, this mode includes a chat box for user interaction"},{tag_type:"p",text:"To integrate Chat this into your app, Do the following."},{tag_type:"ol",items:[{tag_type:"li",text:"Update the script credentials section with your app's credentials",sub_items:[{tag_type:"li",text:"Find the entry file usually (index.html) and add these code in the head section of the html page.",code:'<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>'},{tag_type:"li",text:"after script is loaded we can initialize it lidddke below.",extra_text:"kindly add it below the first script",code:'<script src="node_modules/chathead-consumer-client/dist/bundle.js"></script>'},{tag_type:"li",text:"after script is loaded we can initialize it like below.",extra_text:"kindly add it below the first script",code:'<script>\n            document.addEventListener("DOMContentLoaded", async function () {\n              const token = localStorage.getItem("tezkit_token");\n              if (token) {\n                window.chathead.initialize(token);\n              } else {\n                window.chathead.setUp(\n                  "<Your App Name>", \n                  "<Your Api Key>", \n                  JSON.stringify({\n                    "header_theme": {\n                      "backgroundColor": "rgb(30, 136, 125)"\n                    },\n                    "chat_opener_theme": {\n                      "backgroundColor": "rgb(41, 48, 78)"\n                    }\n                  }),\n                  false,\n                  "/index.html"\n                );\n              }\n            });\n          </script>\n          '}]},{tag_type:"li",text:"Verify if you see the Auth components where you placed them in your page and chat icon on the bottom of your page. like in below image ",img:"Asset/globe.png"},{tag_type:"li",text:"if so it was successfull integrated."}]}]}]}]},{tag_type:"div",children:[{tag_type:"h4",text:"Users now should be able to do the following"},{tag_type:"ul",items:["User on your site can now Signup / login from buttons in the header","User can send message to the Admin","User can receive message from the Admin","Admin can receive the message and reply to the user"]}]}]}},{REACT:{content:[{tag_type:"h1",text:"Install it from REACT 3000source"},{tag_type:"div",text:"<div >sdsfdsdfon REACT devices.</div>"},{tag_type:"div",text:"sdsdfon REACT devices."}]}}]},probable_use_cases:{install:[{VANILA_JS:{content:[{tag_type:"h1",text:"Install it from VANILA_JS source"},{tag_type:"p",text:"Ensure your device meets the system requirements before installation."},{tag_type:"img",src:"https://images.pexels.com/photos/10618233/pexels-photo-10618233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:"Installation Image"},{tag_type:"blockquote",text:"Refer to the user manual for detailed instructions."}]}},{REACT:{content:[{tag_type:"h1",text:"Install it from REACT source"},{tag_type:"p",text:"Follow the official guide to install on your REACT device."}]}}],usage:[{VANILA_JS:{content:[{tag_type:"h2",text:"Usage Instructions for VANILA_JS"},{tag_type:"ul",items:["Launch the app","Go to the settings menu","Adjust the settings as needed"]},{tag_type:"p",text:"Keep the app updated for best performance."}]}},{REACT:{content:[{tag_type:"h2",text:"Usage Instructions for REACT"},{tag_type:"ul",items:["Start the application","Access settings","Customize your options"]},{tag_type:"p",text:"Check for updates regularly."}]}}]},examples:{install:[{VANILA_JS:{content:[{tag_type:"h1",text:"examples information"},{tag_type:"p",text:"Ensure your device meets the system requirements before installation."},{tag_type:"img",src:"https://images.pexels.com/photos/10618233/pexels-photo-10618233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:"Installation Image"},{tag_type:"blockquote",text:"Refer to the user manual for detailed instructions."}]}},{REACT:{content:[{tag_type:"h1",text:"Install it from REACT source"},{tag_type:"p",text:"Follow the official guide to install on your REACT device."}]}}],usage:[{VANILA_JS:{content:[{tag_type:"h2",text:"Usage Instructions for VANILA_JS"},{tag_type:"ul",items:["Launch the app","Go to the settings menu","Adjust the settings as needed"]},{tag_type:"p",text:"Keep the app updated for best performance."}]}},{REACT:{content:[{tag_type:"h2",text:"Usage Instructions for REACT"},{tag_type:"ul",items:["Start the application","Access settings","Customize your options"]},{tag_type:"p",text:"Check for updates regularly."}]}}]}},o=e=>{var t;let{r_options:n}=e,[a,o]=(0,s.useState)(n[0].text),r=e=>{o(e.target.value)};return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"content-paragraph",children:n.map((e,t)=>(0,i.jsx)("div",{className:"radio-container",children:(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:"option",value:e.text,checked:a===e.text,onChange:r,className:"custom-radio"}),(0,i.jsx)("p",{className:"input_text",children:e.text})]})},t))}),(0,i.jsxs)("div",{className:"description",children:[(0,i.jsx)("h3",{children:"Kindly follow the below integration steps for your type of chat system."}),(0,i.jsx)("div",{children:(0,i.jsx)(p,{content:null===(t=n.find(e=>e.text===a))||void 0===t?void 0:t.description},8888)})]}),(0,i.jsx)("div",{className:"videos",children:(0,i.jsx)("video",{width:"100%",height:"auto",controls:!0,children:(0,i.jsx)("source",{src:"https://cdn.pixabay.com/video/2024/01/23/197898-905833761_tiny.mp4",type:"video/mp4"})})})]})},r=["h1","h2","h3","h4","p","div","img","a","blockquote","ul","li","code","ol"],l=(e,t,n,s)=>{if(!t&&!n&&!s)return e;let a=[],o=0;return[...t||[],...n||[],...s||[]].sort((t,n)=>e.indexOf(t.text)-e.indexOf(n.text)).forEach((t,n)=>{let r=e.indexOf(t.text,o);r>-1&&(r>o&&a.push(e.substring(o,r)),t.link?a.push((0,i.jsx)("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",children:t.text},"link-".concat(n))):t.onClick?a.push((0,i.jsx)("button",{onClick:t.onClick,children:t.text},"button-".concat(n))):s&&s.some(e=>e.text===t.text)&&a.push((0,i.jsx)("span",{style:{backgroundColor:"green",color:"white"},children:t.text},"highlight-".concat(n))),o=r+t.text.length)}),o<e.length&&a.push(e.substring(o)),a},c=e=>{let{items:t,listType:n}=e;return"ol"===n?(0,i.jsx)("ol",{className:"content-list ordered",children:t.map((e,t)=>(0,i.jsx)(d,{item:e,listType:n},t))}):(0,i.jsx)("ul",{className:"content-list",children:t.map((e,t)=>(0,i.jsx)(d,{item:e,listType:n},t))})},d=e=>{let{item:t,listType:n}=e,a=t.link_parts||[],o=t.buttonParts||[],r=t.highlightParts||[];return(0,i.jsx)("li",{children:"string"==typeof t?(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:t}}):(0,i.jsxs)(s.Fragment,{children:[t.text?(0,i.jsx)("span",{children:l(t.text,a,o,r)}):null,(0,i.jsx)("div",{children:t.img&&(0,i.jsx)("img",{src:t.img,alt:"",className:"content-list-img"})}),t.more_text&&(0,i.jsx)("p",{children:t.more_text}),t.add_more_p&&(0,i.jsx)("p",{children:t.add_more_p}),t.code&&(0,i.jsx)("pre",{className:"script_code",children:(0,i.jsx)("code",{children:t.code})}),t.extra_text&&(0,i.jsx)("p",{children:t.extra_text}),t.sub_items&&(0,i.jsx)(c,{items:t.sub_items,listType:t.listType||n})]})})},p=e=>{let{content:t}=e;return(0,i.jsx)("div",{className:"contents",children:t.map((e,t)=>{let n=r.includes(e.tag_type)?e.tag_type:"div";if("img"===e.tag_type)return(0,i.jsx)("div",{className:"content-img",children:(0,i.jsx)("img",{src:e.src,alt:e.alt||""},t)});if("h2"===e.tag_type)return(0,i.jsx)("h2",{className:"content-heading",children:e.text},t);if("h4"===e.tag_type)return(0,i.jsx)("h2",{className:"content-inner-heading",children:e.text},t);if("feature_options"===e.tag_type)return(0,i.jsx)(o,{r_options:e.options},t);if("h3"===e.tag_type)return(0,i.jsx)("h3",{className:"content-subheading",children:e.text},t);if("p"===e.tag_type)return(0,i.jsx)("p",{className:"content-paragraph",children:e.text},t);if("img"===e.tag_type)return(0,i.jsx)("div",{className:"content-img",children:(0,i.jsx)("img",{src:e.src,alt:e.alt||""},t)});if("a"===e.tag_type)return(0,i.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"content-link",children:e.text},t);else if("ul"===e.tag_type||"ol"===e.tag_type)return(0,i.jsx)(c,{items:e.items,listType:e.tag_type},t);else if("blockquote"===e.tag_type)return(0,i.jsx)("blockquote",{className:"content-blockquote",children:e.text},t);else if("code"===e.tag_type)return(0,i.jsx)("pre",{className:"content-code",children:(0,i.jsx)("code",{children:e.text})},t);else if("li"===e.tag_type)return(0,i.jsxs)("li",{className:"content-list-item",children:[e.text,e.sub_items&&(0,i.jsx)(c,{items:e.sub_items,listType:e.listType||"ul"})]},t);else if("div"===e.tag_type)return(0,i.jsx)("div",{className:"content-div",children:e.children&&e.children.map((e,t)=>(0,i.jsx)(p,{content:[e]},t))},t);else return(0,i.jsx)(n,{className:"content-".concat(e.tag_type),dangerouslySetInnerHTML:{__html:e.text}},t)})})},h=()=>{let[e,t]=(0,s.useState)(Object.keys(a)[0]),[n,o]=(0,s.useState)("VANILA_JS"),[r,l]=(0,s.useState)(!1),c=e=>{t(e),o("VANILA_JS")};return(0,i.jsxs)("div",{className:"document-container",children:[(0,i.jsxs)("div",{className:"doc_sidebar",children:[(0,i.jsx)("div",{className:"sidebar_wrapper ".concat(r?"active":""),children:Object.keys(a).map(e=>(0,i.jsx)("div",{onClick:()=>c(e),className:"sidebar-item",children:(0,i.jsx)("h2",{children:e})},e))}),(0,i.jsxs)("div",{className:"downIcon",onClick:()=>{l(e=>!e)},children:[(0,i.jsx)("h3",{children:"Overview"}),(0,i.jsx)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M15 0C12.0333 0 9.13319 0.879734 6.66645 2.52796C4.19972 4.17618 2.27713 6.51886 1.14181 9.25975C0.00649932 12.0006 -0.290551 15.0166 0.288227 17.9264C0.867006 20.8361 2.29562 23.5088 4.3934 25.6066C6.49119 27.7044 9.16394 29.133 12.0737 29.7118C14.9834 30.2906 17.9994 29.9935 20.7403 28.8582C23.4811 27.7229 25.8238 25.8003 27.472 23.3335C29.1203 20.8668 30 17.9667 30 15C29.9953 11.0232 28.4135 7.21061 25.6014 4.39858C22.7894 1.58655 18.9768 0.00469155 15 0ZM22.7823 13.2368L15.9641 20.055C15.7084 20.3106 15.3616 20.4543 15 20.4543C14.6384 20.4543 14.2916 20.3106 14.0359 20.055L7.21773 13.2368C6.96934 12.9796 6.83189 12.6352 6.835 12.2776C6.8381 11.9201 6.98151 11.5781 7.23434 11.3252C7.48717 11.0724 7.82919 10.929 8.18673 10.9259C8.54427 10.9228 8.88873 11.0602 9.14591 11.3086L15 17.1627L20.8541 11.3086C21.1113 11.0602 21.4557 10.9228 21.8133 10.9259C22.1708 10.929 22.5128 11.0724 22.7657 11.3252C23.0185 11.5781 23.1619 11.9201 23.165 12.2776C23.1681 12.6352 23.0307 12.9796 22.7823 13.2368Z",fill:"black"})})]})]}),(0,i.jsx)("div",{className:"rightWrap",children:(0,i.jsxs)("div",{className:"main-content",children:[(0,i.jsx)("div",{className:"tabs",children:["VANILA_JS","REACT"].map(e=>(0,i.jsx)("button",{onClick:()=>o(e),className:"tab-button ".concat(n===e?"active":""),children:e.toUpperCase()},e))}),(()=>{if(!e)return(0,i.jsx)("div",{children:"Select a key from the left"});let t=Object.keys(a[e]);return(0,i.jsx)("div",{className:"content-area",children:t.map(t=>(0,i.jsxs)("div",{className:"step",children:[(0,i.jsx)("h1",{className:"step-title",children:t}),a[e][t].map((e,t)=>{let s=e[n]?e[n].content:null;return s?(0,i.jsx)(p,{content:s},t):null})]},t))})})()]})})]})}},9590:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[568,130,215,744],()=>t(1527)),_N_E=e.O()}]);