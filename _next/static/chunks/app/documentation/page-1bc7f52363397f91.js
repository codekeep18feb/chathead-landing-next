(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{6274:(e,t,n)=>{Promise.resolve().then(n.bind(n,8593))},8593:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var s=n(7437),a=n(2265);n(9590);let i={installation:{"Peer to Admin - V1 - SDK quickstart updated!":[{VANILA_JS:{content:[{tag_type:"feature_options",options:[{text:"Don't currently have a header and would like to have one",description:[{tag_type:"p",text:"here some thing1-1"},{tag_type:"img",src:"Asset/globe.png",alt:"alt n"},{tag_type:"p",text:"here some thing1-2"}]},{text:"Do have a header so would like to get Header Components Seprately so i can add them to my existing header",description:[{tag_type:"p",text:"here some thing2-1"},{tag_type:"p",text:"here some thing2-2"}]},{text:"Other",description:[{tag_type:"p",text:"Have more complex requirement :: No Worries, We got you covered"},{tag_type:"p",text:"Our Tech team can help you to integrate it any in scenerios"}]}]},{tag_type:"p",text:"Instant messaging enhances user engagement by enabling users to connect and form a community within the app. Increased engagement can lead to increased user satisfaction and loyalty to your app. An instant messaging feature can also provide real-time support to users, allowing them to get help and answers to their questions quickly. The Chat SDK enables you to embed real-time messaging in any app, on any device, anywhere."},{tag_type:"div",children:[{tag_type:"ul",items:[{text:"Signup/Login to your account at Qchat Admin Page.",link_parts:[{text:"Signup/Login",link:"https://www.google.com/"}]}]}]},{tag_type:"h2",text:"Project setup"},{tag_type:"p",text:"To integrate Chat into your app, do the following:"},{tag_type:"div",children:[{tag_type:"ol",items:[{tag_type:"li",text:"Get your credentials Handy; Find it the credentials section of the created App' Detail Page"},{tag_type:"li",text:"Update the script credentials section with your app's credentials",sub_items:[{tag_type:"li",text:"Find the entry file usually (index.html) and this below code in the head section of the html page.",extra_text:"Update the script credentials section with your app's credentials",code:'<script src="node_modules/chathead-consumer-client/dist/bundle.js"></script>'},{tag_type:"li",text:"after script is loaded we can initialize it like below.",extra_text:"kindly add it below the first script",code:"<script>\n\n async function makeMeAPICall(token) {\n const apiUrl = 'https://v1u9b7mohg.execute-api.ap-south-1.amazonaws.com/prod/me';\n\n try {\n const response = await fetch(apiUrl, {\n method: 'GET',\n headers: {\n 'Authorization': token,\n 'Accept': '*/*'\n }\n });\n\n if (!response.ok) {\n throw new Error('Network response was not ok');\n }\n\n const data = await response.json();\n console.log('User me api data:', data.id);\n return data;\n } catch (error) {\n console.error('There was a problem with the fetch operation:', error);\n throw error;\n }\n }\n \n // Wait for the document to be fully loaded\n document.addEventListener(\"DOMContentLoaded\", async function() {\n\n const token = localStorage.getItem('tezkit_token');\n if (token){\n var loggedInUser = await makeMeAPICall(token);\n window.chathead.initialize(loggedInUser);\n }\n else{\n window.chathead.setUp(app_name=\"app1_acm_true_tenant5\", \n api_key=\"dGVuYW50NV9fU0VQUkFUT1JfX2FwcDFfYWNtX3RydWVfdGVuYW50NQ==\");\n window.chathead.initialize(null);\n }\n });\n\n</script>"}]},{tag_type:"li",text:"Verify if you see the header on the top of your page. like above",img:"Asset/globe.png"},{tag_type:"li",text:"Verify if you see the chat icon on the bottom of your page.",img:"Asset/globe.png"}]}]},{tag_type:"h2",text:"Now visitors have become users"},{tag_type:"p",text:"which means we can keep close connection with them"},{tag_type:"div",children:[{tag_type:"h4",text:"Users now should be able to do the following"},{tag_type:"ul",items:["User can Signup / login","User can send message to the Admin","User can receive message to the Admin"]}]},{tag_type:"h3",text:"API reference"},{tag_type:"div",children:[{tag_type:"ul",items:[{tag_type:"li",text:"makeMeAPICall"},{tag_type:"li",text:"window.chathead.initialize(<loggedInUser>)"},{tag_type:"li",text:"window.chathead.setUp(<app_name>, <api_key>)"}]}]}]}},{REACT:{content:[{tag_type:"h1",text:"Install it from REACT 3000source"},{tag_type:"div",text:"<div >sdsfdsdfon REACT devices.</div>"},{tag_type:"div",text:"sdsdfon REACT devices."}]}}]},probable_use_cases:{install:[{VANILA_JS:{content:[{tag_type:"h1",text:"Install it from VANILA_JS source"},{tag_type:"p",text:"Ensure your device meets the system requirements before installation."},{tag_type:"img",src:"https://images.pexels.com/photos/10618233/pexels-photo-10618233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:"Installation Image"},{tag_type:"blockquote",text:"Refer to the user manual for detailed instructions."}]}},{REACT:{content:[{tag_type:"h1",text:"Install it from REACT source"},{tag_type:"p",text:"Follow the official guide to install on your REACT device."}]}}],usage:[{VANILA_JS:{content:[{tag_type:"h2",text:"Usage Instructions for VANILA_JS"},{tag_type:"ul",items:["Launch the app","Go to the settings menu","Adjust the settings as needed"]},{tag_type:"p",text:"Keep the app updated for best performance."}]}},{REACT:{content:[{tag_type:"h2",text:"Usage Instructions for REACT"},{tag_type:"ul",items:["Start the application","Access settings","Customize your options"]},{tag_type:"p",text:"Check for updates regularly."}]}}]},examples:{install:[{VANILA_JS:{content:[{tag_type:"h1",text:"examples information"},{tag_type:"p",text:"Ensure your device meets the system requirements before installation."},{tag_type:"img",src:"https://images.pexels.com/photos/10618233/pexels-photo-10618233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:"Installation Image"},{tag_type:"blockquote",text:"Refer to the user manual for detailed instructions."}]}},{REACT:{content:[{tag_type:"h1",text:"Install it from REACT source"},{tag_type:"p",text:"Follow the official guide to install on your REACT device."}]}}],usage:[{VANILA_JS:{content:[{tag_type:"h2",text:"Usage Instructions for VANILA_JS"},{tag_type:"ul",items:["Launch the app","Go to the settings menu","Adjust the settings as needed"]},{tag_type:"p",text:"Keep the app updated for best performance."}]}},{REACT:{content:[{tag_type:"h2",text:"Usage Instructions for REACT"},{tag_type:"ul",items:["Start the application","Access settings","Customize your options"]},{tag_type:"p",text:"Check for updates regularly."}]}}]}},o=e=>{var t;let{r_options:n}=e,[i,o]=(0,a.useState)(n[0].text),r=e=>{o(e.target.value)};return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:n.map((e,t)=>(0,s.jsx)("div",{children:(0,s.jsxs)("label",{children:[(0,s.jsx)("input",{type:"radio",name:"option",value:e.text,checked:i===e.text,onChange:r}),e.text]})},t))}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Selected Option Description:"}),(0,s.jsx)("div",{children:(0,s.jsx)(d,{content:null===(t=n.find(e=>e.text===i))||void 0===t?void 0:t.description},8888)})]})]})},r=["h1","h2","h3","h4","p","div","img","a","blockquote","ul","li","code","ol"],l=(e,t,n,a)=>{if(!t&&!n&&!a)return e;let i=[],o=0;return[...t||[],...n||[],...a||[]].sort((t,n)=>e.indexOf(t.text)-e.indexOf(n.text)).forEach((t,n)=>{let r=e.indexOf(t.text,o);r>-1&&(r>o&&i.push(e.substring(o,r)),t.link?i.push((0,s.jsx)("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",children:t.text},"link-".concat(n))):t.onClick?i.push((0,s.jsx)("button",{onClick:t.onClick,children:t.text},"button-".concat(n))):a&&a.some(e=>e.text===t.text)&&i.push((0,s.jsx)("span",{style:{backgroundColor:"green",color:"white"},children:t.text},"highlight-".concat(n))),o=r+t.text.length)}),o<e.length&&i.push(e.substring(o)),i},c=e=>{let{items:t,listType:n}=e;return"ol"===n?(0,s.jsx)("ol",{className:"content-list ordered",children:t.map((e,t)=>(0,s.jsx)(p,{item:e,listType:n},t))}):(0,s.jsx)("ul",{className:"content-list",children:t.map((e,t)=>(0,s.jsx)(p,{item:e,listType:n},t))})},p=e=>{let{item:t,listType:n}=e,i=t.link_parts||[],o=t.buttonParts||[],r=t.highlightParts||[];return(0,s.jsx)("li",{children:"string"==typeof t?(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:t}}):(0,s.jsxs)(a.Fragment,{children:[t.text?(0,s.jsx)("span",{children:l(t.text,i,o,r)}):null,t.img&&(0,s.jsx)("img",{src:t.img,alt:"",className:"content-img"}),t.more_text&&(0,s.jsx)("p",{children:t.more_text}),t.add_more_p&&(0,s.jsx)("p",{children:t.add_more_p}),t.code&&(0,s.jsx)("pre",{className:"script_code",children:(0,s.jsx)("code",{children:t.code})}),t.extra_text&&(0,s.jsx)("p",{children:t.extra_text}),t.sub_items&&(0,s.jsx)(c,{items:t.sub_items,listType:t.listType||n})]})})},d=e=>{let{content:t}=e;return(0,s.jsx)("div",{className:"content",children:t.map((e,t)=>{let n=r.includes(e.tag_type)?e.tag_type:"div";if("h2"===e.tag_type)return(0,s.jsx)("h2",{className:"content-heading",children:e.text},t);if("h4"===e.tag_type)return(0,s.jsx)("h2",{className:"content-inner-heading",children:e.text},t);if("feature_options"===e.tag_type)return(0,s.jsx)(o,{r_options:e.options},t);if("h3"===e.tag_type)return(0,s.jsx)("h3",{className:"content-subheading",children:e.text},t);if("p"===e.tag_type)return(0,s.jsx)("p",{className:"content-paragraph",children:e.text},t);if("img"===e.tag_type)return(0,s.jsx)("img",{src:e.src,alt:e.alt||"",className:"content-img"},t);if("a"===e.tag_type)return(0,s.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"content-link",children:e.text},t);else if("ul"===e.tag_type||"ol"===e.tag_type)return(0,s.jsx)(c,{items:e.items,listType:e.tag_type},t);else if("blockquote"===e.tag_type)return(0,s.jsx)("blockquote",{className:"content-blockquote",children:e.text},t);else if("code"===e.tag_type)return(0,s.jsx)("pre",{className:"content-code",children:(0,s.jsx)("code",{children:e.text})},t);else if("li"===e.tag_type)return(0,s.jsxs)("li",{className:"content-list-item",children:[e.text,e.sub_items&&(0,s.jsx)(c,{items:e.sub_items,listType:e.listType||"ul"})]},t);else if("div"===e.tag_type)return(0,s.jsx)("div",{className:"content-div",children:e.children&&e.children.map((e,t)=>(0,s.jsx)(d,{content:[e]},t))},t);else return(0,s.jsx)(n,{className:"content-".concat(e.tag_type),dangerouslySetInnerHTML:{__html:e.text}},t)})})},h=()=>{let[e,t]=(0,a.useState)(Object.keys(i)[0]),[n,o]=(0,a.useState)("VANILA_JS"),r=e=>{t(e),o("VANILA_JS")};return(0,s.jsxs)("div",{className:"document-container",children:[(0,s.jsx)("div",{className:"doc_sidebar",children:Object.keys(i).map(e=>(0,s.jsx)("div",{onClick:()=>r(e),className:"sidebar-item",children:(0,s.jsx)("h2",{children:e})},e))}),(0,s.jsx)("div",{className:"rightWrap",children:(0,s.jsxs)("div",{className:"main-content",children:[(0,s.jsx)("div",{className:"tabs",children:["VANILA_JS","REACT"].map(e=>(0,s.jsx)("button",{onClick:()=>o(e),className:"tab-button ".concat(n===e?"active":""),children:e.toUpperCase()},e))}),(()=>{if(!e)return(0,s.jsx)("div",{children:"Select a key from the left"});let t=Object.keys(i[e]);return(0,s.jsx)("div",{className:"content-area",children:t.map(t=>(0,s.jsxs)("div",{className:"step",children:[(0,s.jsx)("h1",{className:"step-title",children:t}),i[e][t].map((e,t)=>{let a=e[n]?e[n].content:null;return a?(0,s.jsx)(d,{content:a},t):null})]},t))})})()]})})]})}},9590:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[568,130,215,744],()=>t(6274)),_N_E=e.O()}]);