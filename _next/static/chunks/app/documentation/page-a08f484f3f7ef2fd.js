(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{5219:(e,t,n)=>{Promise.resolve().then(n.bind(n,7766))},7766:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var i=n(7437),a=n(2265);n(9590);var o=n(1169);let s={installation:{"Integration Steps":[{P2A__V1:{content:[{tag_type:"h2",text:"Cloud Managed Auth + Chat (Simple Site)"},{tag_type:"p",text:"This type of chat application is tailored for simple websites built with HTML, JavaScript, and CSS, typically used as informational sites. It is ideal for scenarios where the existing product lacks built-in authentication but requires the seamless integration of both authentication and chat functionality."},{tag_type:"div",children:[{tag_type:"h2",text:"Prerequisite"},{tag_type:"p",text:"To integrate Chat into your app, do the following:"},{tag_type:"ol",items:[{text:"Signup/Login to your account at AddChat.",link_parts:[{text:"Signup/Login",link:"https://www.google.com/"}]},{tag_type:"li",text:"Create an app as per your use case. (Be Sure to choose the right Mode [Headless | HEADFUL])"},{tag_type:"li",text:"Go To created apps's detail page and locate the credentials."}]}]},{tag_type:"div",children:[{tag_type:"h2",text:"Project setup"},{tag_type:"p",text:"To integrate Chat into your app, do the following:"},{tag_type:"feature_options",options:[{text:"HEADFUL",description:[{tag_type:"p",text:"In this mode [HEADFUL], the header will include authentication options (Signup, Login, etc.) along with a chat box for user interaction."},{tag_type:"p",text:"To integrate it into your app, Do the following."},{tag_type:"ol",items:[{tag_type:"li",text:"Load The Scripts",sub_items:[{tag_type:"li",text:"Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",extra_text:"It should ideally be placed head of the root file.",code:'<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>'},{tag_type:"li",code:'<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js"></script>'},{tag_type:"li",text:"Run Setup & Initialization together",extra_text:"Since this a simple site having one root file (index.html) we can run both (Setup & Initialization) together; Above is an example of it using LocalStorage But the same is applicable for cookies and SessionStorage",code:'<script>\n  document.addEventListener("DOMContentLoaded", async function () {\n    const token = localStorage.getItem("tezkit_token");\n    if (token) {\n      window.chathead.initialize(token);\n    } else {\n      window.chathead.setUp(\n        "<Your App Name>", \n        "<Your Api Key>", \n        JSON.stringify({\n          "header_theme": {\n            "backgroundColor": "rgb(30, 136, 125)" //to override the header background Color\n          },\n          "chat_opener_theme": {\n            "backgroundColor": "rgb(41, 48, 78)" //to override the chatBox background Color\n          }\n        }),\n        false, // for HEADLESS MODE\n        "/index.html"\n      );\n    }\n  });\n</script>\n            '}]},{tag_type:"li",text:"Verify the Results!",more_text:"Kindly verify if you see the header on the top of your page and chat icon on the bottom of your page. like in below image ",img:"Asset/headerful_example.png"},{text:"Refer to the example code here.",link_parts:[{text:"example code",link:"https://github.com/codekeep18feb/examples/tree/main/vanila_js_sites/p2a_v1_clients"}]}]},{tag_type:"video",src:"https://www.youtube.com/watch?v=MKatoeFYeb8",desc:"Demo for P2A V1 [Headful]"}]},{text:"HEADLESS",description:[{tag_type:"p",text:"In this mode, instead of displaying a standard header, all the authentication components (Signup, Login, etc.) are grouped together. These components are designed to be flexible, allowing you to place them in a fixed position anywhere within your custom header or elsewhere in your layout. Additionally, this mode includes a chat box for user interaction"},{tag_type:"p",text:"To integrate Chat this into your app, Do the following."},{tag_type:"ol",items:[{tag_type:"li",text:"Load The Scripts",sub_items:[{tag_type:"li",text:"Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",extra_text:"It should ideally be placed head of the root file.",code:'<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>'},{tag_type:"li",code:'<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js"></script>'},{tag_type:"li",text:"Run Setup & Initialization together",extra_text:"Since this a simple site having one root file (index.html) we can run both (Setup & Initialization) together; Above is an example of it using LocalStorage But the same is applicable for cookies and SessionStorage",code:'<script>\n  document.addEventListener("DOMContentLoaded", async function () {\n    const token = localStorage.getItem("tezkit_token");\n    if (token) {\n      window.chathead.initialize(token);\n    } else {\n      window.chathead.setUp(\n        "<Your App Name>", \n        "<Your Api Key>", \n        JSON.stringify({\n          "header_theme": {\n            "backgroundColor": "rgb(30, 136, 125)" //to override the header background Color\n          },\n          "chat_opener_theme": {\n            "backgroundColor": "rgb(41, 48, 78)" //to override the chatBox background Color\n          }\n        }),\n        true, // for HEADLESS MODE\n        "/index.html"\n      );\n    }\n  });\n</script>\n            '}]},{tag_type:"li",text:"Point the Location to show the to place the Authentication Components.",extra_text:"Insert the following div into any desired location within your HTML page where you want the Authentication Component to appear.",code:'<div id="tezkit-auth-area" style="min-width: 200px;"> </div>'},{tag_type:"li",text:"Verify the Results!",more_text:"Kindly verify if you see the header on the top of your page and chat icon on the bottom of your page. like in below image ",img:"Asset/headerful_example.png"},{text:"Refer to the example code here.",link_parts:[{text:"example code",link:"https://github.com/codekeep18feb/examples/tree/main/vanila_js_sites/p2a_v1_clients"}]}]},{tag_type:"div",children:[{tag_type:"div",children:[{tag_type:"video",src:"https://www.youtube.com/watch?v=MKatoeFYeb8",desc:"Demo for P2A V1 [HeadLess]"}]}]}]}]}]}]}},{P2A__V2:{content:[{tag_type:"h2",text:"Locally Managed Auth + Chat (Complex Sites)"},{tag_type:"p",text:"This chat application is designed specifically for complex sites or apps built with JavaScript on both the client and server sides. It is ideal for products that already have built-in authentication and are looking to seamlessly integrate robust chat functionality."},{tag_type:"div",children:[{tag_type:"h2",text:"Prerequisite"},{tag_type:"p",text:"To integrate Chat into your app, do the following:"},{tag_type:"ol",items:[{text:"Signup/Login to your account at AddChat.",link_parts:[{text:"Signup/Login",link:"https://www.google.com/"}]},{tag_type:"li",text:"Create an app as per your use case. (Be Sure to choose the right version V2)"},{tag_type:"li",text:"Go To created apps's detail page and locate the credentials."}]}]},{tag_type:"div",children:[{tag_type:"h2",text:"Project setup"},{tag_type:"h4",text:"Client Side Integration"},{tag_type:"ol",items:[{tag_type:"li",text:"Load the neccessary scripts",sub_items:[{tag_type:"li",text:"Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",extra_text:"It should ideally be placed head of the root file.",code:'<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>\n<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js</script>'},{tag_type:"li",text:"Run SetUp",extra_text:"This code should ideally execute on the page where an unauthenticated user is first detected. It is recommended to include it within the UI logic associated with the entry URL, which is typically the root /.",code:'<script>\n  const token = localStorage.getItem(\'tezkit_token\',null);\n    if (!token) { //  To check if user is not logged in (based on your product\'s specific implimentation)\n        window.chathead.setUp(\n            (app_name = "<Your App Name>"),\n            (api_key =\n            "<Your Api Key>"),\n            (theme=JSON.stringify({"header_theme":{"backgroundColor":"rgb(30, 136, 125)"}, "chat_opener_theme":{"backgroundColor":"rgb(41 48 78)"}}))\n        );\n            }\n  </script>\n    '},{tag_type:"li",text:"Run initialization",extra_text:"This code should execute as soon as an authenticated user is detected. Ideally, it should run within the UI logic immediately after a logged-in user is identified.\nAdditionally:\n\nEnsure this code runs only after the previous setup code in your product has completed execution.\nTo verify the execution order, consider adding log statements both at the setup phase and here for debugging purposes.",code:"const token = localStorage.getItem('tezkit_token',null);\n  if (token) {\n      window.chathead.initialize({\"uid\": <new_user>}); // uid is mandatory as this will be used to distingush between different users and should be unique for all of them.\n  }\n    "}]},{tag_type:"li",text:"Verify if you see chat icon on the bottom of your page. like in below image (Client integration should be done by now.)",img:"Asset/is_chat_icon_present_for_v2.png"},{text:"Refer to the example code here.",link_parts:[{text:"example code",link:"https://github.com/codekeep18feb/examples/tree/website_placeholder_examples/p2a_v2_client/p2a_v2.1_client_jwt"}]}]},{tag_type:"h3",text:"Backend Integration"},{tag_type:"h3",text:"Onboarding api"},{tag_type:"p",text:"Since authenticaiton is locally managed by you; whenever a new user has signed up on your plateform you should let AddChat know by onbarding them like below."},{tag_type:"p",text:"Please note: Until users are onboarded, the admin panel will not display any users, even if the application has been created, as shown below."},{tag_type:"img",src:"Asset/no_users_admin.png"},{tag_type:"h3",text:"Ways to Onboard Users"},{tag_type:"p",text:"Should Ideally happens as soon as a new user has signed up on your plateform."},{tag_type:"feature_options",options:[{text:"Via Frontend",description:[{tag_type:"h3",text:"Using chathead.signup() method"},{tag_type:"p",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}]},{text:"Via Backend",description:[{tag_type:"h3",text:"Using Rest /signup Api Endpoint"},{tag_type:"div",children:[{tag_type:"img",src:"Asset/onboarding_via_rest_endpoint_payload.png"},{tag_type:"img",src:"Asset/onboarding_via_rest_endpoint_headers.png"}],extra_text:"Please find the curl below.",code:"curl --location 'https://gfxb0jf19k.execute-api.ap-south-1.amazonaws.com/prod/onboarding' --header 'X-API-Key: bGVnYWwxMjNfX1NFUFJBVE9SX192MmFwcDE=' --header 'tenant_id: legal123' --header 'app_name: v2app1' --header 'Content-Type: application/json' --data '{\n\"tenant\":\"legal123\",\n\"uid\":\"new_site_user1\",\n\"app_name\":\"v2app1\"\n}'"}]},{text:"Via Admin",description:[{tag_type:"h3",text:"Users can be onboarded and their respective password can be shared with them."},{tag_type:"img",src:"Asset/onboarding_via_admin.png"}]}]},{tag_type:"video",src:"https://www.youtube.com/watch?v=MKatoeFYeb8",desc:"Demo for P2A_V2.1"}]}]}},{P2A__V3:{content:[{tag_type:"h2",text:"Locally Managed Auth + Chat (Wordpress)"},{tag_type:"p",text:"This chat application is designed specifically for Wordpress using native wp authentication. It is ideal for products that already have built-in authentication probably using some plugin and are looking to seamlessly integrate robust chat functionality."},{tag_type:"div",children:[{tag_type:"h2",text:"Prerequisite"},{tag_type:"p",text:"To integrate Chat into your app, do the following:"},{tag_type:"ol",items:[{text:"Signup/Login to your account at AddChat.",link_parts:[{text:"Signup/Login",link:"https://www.google.com/"}]},{tag_type:"li",text:"Create an app as per your use case. (Be Sure to choose the right version V3)"},{tag_type:"li",text:"Go To created apps's detail page and locate the credentials."}]}]},{tag_type:"div",children:[{tag_type:"h2",text:"Project setup"},{tag_type:"h4",text:"Client Side Integration"},{tag_type:"p",text:"Install the AddChat plugin"},{tag_type:"p",text:"Add the AddChat Credentials like below"},{tag_type:"img",src:"Asset/add_credentials_wp.png"},{tag_type:"p",text:"Verify if you can see the chat utility on your product like below"},{tag_type:"img",src:"Asset/fashoni_chat_opener_visible.png"},{tag_type:"video",src:"https://www.youtube.com/watch?v=MKatoeFYeb8",desc:"Demo for P2A_V2.2"}]}]}}]}},l=e=>{let{src:t,desc:n}=e,a=(e=>{let t=e.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);return t?t[1]:null})(t);return a?(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:n}),(0,i.jsx)("div",{className:"videos",children:(0,i.jsx)("iframe",{width:"100%",height:"auto",style:{aspectRatio:"16/9",border:"none"},src:"https://www.youtube.com/embed/".concat(a),title:n,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]}):(0,i.jsx)("p",{children:"Error: Invalid YouTube URL"})},r=e=>{var t,n;let{r_options:o,current_mode:s}=e;console.log(s,"current_mode",o,null===(t=o[1])||void 0===t?void 0:t.text);let[l,r]=(0,a.useState)(s);(0,a.useEffect)(()=>{s&&r(s)},[s]);let c=e=>{r(e)};return s?(0,i.jsxs)("div",{className:"setup",children:[(0,i.jsx)("div",{className:"tabs",children:o.map((e,t)=>(0,i.jsx)("button",{className:"tab-button ".concat(l===e.text?"active":""),onClick:()=>{console.log("tabshoudl get the click?"),c(e.text)},children:e.text},t))}),(0,i.jsx)("div",{className:"description",children:(0,i.jsx)("div",{children:(0,i.jsx)(u,{content:null===(n=o.find(e=>e.text===l))||void 0===n?void 0:n.description,current_mode:s},8888)})})]}):null},c=["h1","h2","h3","h4","p","div","img","a","blockquote","ul","li","code","ol"],d=(e,t,n,a)=>{if(!t&&!n&&!a)return e;let o=[],s=0;return[...t||[],...n||[],...a||[]].sort((t,n)=>e.indexOf(t.text)-e.indexOf(n.text)).forEach((t,n)=>{let l=e.indexOf(t.text,s);l>-1&&(l>s&&o.push(e.substring(s,l)),t.link?o.push((0,i.jsx)("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",children:t.text},"link-".concat(n))):t.onClick?o.push((0,i.jsx)("button",{onClick:t.onClick,children:t.text},"button-".concat(n))):a&&a.some(e=>e.text===t.text)&&o.push((0,i.jsx)("span",{style:{backgroundColor:"green",color:"white"},children:t.text},"highlight-".concat(n))),s=l+t.text.length)}),s<e.length&&o.push(e.substring(s)),o},p=e=>{let{items:t,listType:n}=e;return console.log("Here are the items:",t),"ol"===n?(0,i.jsx)("ol",{className:"content-list ordered",children:t.map((e,t)=>(0,i.jsx)(h,{item:e,listType:n},t))}):(0,i.jsx)("ul",{className:"content-list",children:t.map((e,t)=>(0,i.jsx)(h,{item:e,listType:n},t))})},h=e=>{let{item:t,listType:n}=e,o=t.link_parts||[],s=t.buttonParts||[],l=t.highlightParts||[];return(0,i.jsx)("li",{children:"string"==typeof t?(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:t}}):(0,i.jsxs)(a.Fragment,{children:[t.text?(0,i.jsx)("span",{children:d(t.text,o,s,l)}):null,(0,i.jsx)("div",{children:t.img&&(0,i.jsx)("img",{src:t.img,alt:"",className:"content-list-img"})}),t.more_text&&(0,i.jsx)("p",{children:t.more_text}),t.add_more_p&&(0,i.jsx)("p",{children:t.add_more_p}),t.code&&(0,i.jsx)("pre",{className:"script_code",children:(0,i.jsx)("code",{children:t.code})}),t.extra_text&&(0,i.jsx)("p",{children:t.extra_text}),t.sub_items&&(0,i.jsx)(p,{items:t.sub_items,listType:t.listType||n})]})})},u=e=>{let{content:t,current_mode:n}=e;return console.log(t,"ismyscode indiv not even called",n),(0,i.jsx)("div",{className:"contents",children:null==t?void 0:t.map((e,t)=>{let a=c.includes(e.tag_type)?e.tag_type:"div";if("img"===e.tag_type)return(0,i.jsx)("div",{className:"content-list-img",children:(0,i.jsx)("img",{src:e.src,alt:e.alt||""})},t);if("video"===e.tag_type)return(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"videos_wrapper",children:(0,i.jsx)(l,{src:e.src,desc:e.desc},t)})},t);if("h2"===e.tag_type)return(0,i.jsx)("h2",{className:"content-heading",children:e.text},t);if("h4"===e.tag_type)return(0,i.jsx)("h2",{className:"content-inner-heading",children:e.text},t);if("feature_options"===e.tag_type)return(0,i.jsx)(r,{r_options:e.options,current_mode:n},t);if("p"===e.tag_type)return(0,i.jsx)("p",{className:"content-subheading",children:e.text},t);if("h3"===e.tag_type)return(0,i.jsx)("h3",{className:"second_subheading",children:e.text},t);if("p"===e.tag_type)return(0,i.jsx)("p",{className:"content-paragraph",children:e.text},t);if("a"===e.tag_type)return(0,i.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"content-link",children:e.text},t);else if("ul"===e.tag_type||"ol"===e.tag_type)return(0,i.jsx)(p,{items:e.items,listType:e.tag_type},t);else if("blockquote"===e.tag_type)return(0,i.jsx)("blockquote",{className:"content-blockquote",children:e.text},t);else if("code"===e.tag_type)return(0,i.jsx)("pre",{className:"content-code",children:(0,i.jsx)("code",{children:e.text})},t);else if("li"===e.tag_type)return(0,i.jsxs)("li",{className:"content-list-item",children:[e.text,e.sub_items&&(0,i.jsx)(p,{items:e.sub_items,listType:e.listType||"ul"})]},t);else if("div"===e.tag_type)return(0,i.jsxs)("div",{className:"content-div",children:[e.children&&e.children.map((e,a)=>(0,i.jsx)(u,{content:[e],current_mode:n},"".concat(t,"-").concat(a))),e.extra_text?(0,i.jsx)("div",{children:e.extra_text}):null,e.code&&(0,i.jsx)("pre",{className:"script_code",children:(0,i.jsx)("code",{children:e.code})})]},t);else return(0,i.jsx)(a,{className:"content-".concat(e.tag_type),dangerouslySetInnerHTML:{__html:e.text}},t)})})},g=e=>{let{setSelectedFilter:t}=e,[n,o]=(0,a.useState)({}),[s,l]=(0,a.useState)([]),r=(e,t,n)=>{o(i=>{let a={...i},o=a;if(e.forEach(e=>{o[e]&&"object"==typeof o[e]||(o[e]={}),o=o[e]}),null==n?void 0:n.modes)o[t]={selected_mode:null};else if(Array.isArray(n)){let n=e[e.length-1];e.slice(0,-1).reduce((e,t)=>e[t],a)[n]={selected_mode:t}}else o[t]=null;return a}),n&&l(n=>[...n,e.concat(t).join(".")])},c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.entries(e).map(e=>{let[n,a]=e,o=null==a?void 0:a.disabled;return(0,i.jsxs)("div",{className:"option-container ".concat(o?"disabled":""),children:[(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:t.join(".")||"root",onChange:()=>!o&&r(t,n,a),disabled:o}),n]}),s.includes(t.concat(n).join("."))&&a&&d(a,t.concat(n))]},t.concat(n).join("."))})},d=(e,t)=>(null==e?void 0:e.modes)===null?null:(null==e?void 0:e.modes)?(0,i.jsxs)("div",{className:"nested-options",children:[(0,i.jsx)("h4",{children:"Mode"}),e.modes.map((n,a)=>(0,i.jsxs)("label",{className:"mode-label",children:[(0,i.jsx)("input",{type:"radio",name:t.join("."),onChange:()=>r(t,n,e.modes)}),n]},a))]}):c(e,t);return(0,i.jsxs)("div",{className:"filter-container",children:[(0,i.jsx)("h3",{children:"Filter"}),(0,i.jsx)("div",{className:"options-list",children:c({P2A:{version_types:{V1:{modes:["HEADLESS","HEADFUL"]},V2:{modes:null},V3:{modes:null}}},P2B:{disabled:!0},P2P:{disabled:!0}},["app_types"])}),(0,i.jsx)("button",{className:"submit-btn",onClick:()=>{console.log("Final Selections:",n),n&&t(n)},children:"Submit"})]})},m=()=>{let[e,t]=(0,a.useState)(null);console.log("do we have a fitler???selectedFilter",e);let n=(0,o.useSearchParams)().get("current_version")||"P2A__V1";console.log("what is the current version now? after click",n);let[l,r]=(0,a.useState)(null),[c,d]=(0,a.useState)(Object.keys(s)[0]),[p,h]=(0,a.useState)(n),[m,y]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(e){let t=function(e){let t=e.app_types,n=[];for(let o in t){console.log(o,"hwo to get mode",e);let s=t[o].version_types;for(let t in s){var i,a;n.push("".concat(o,"__").concat(t));let s=null===(a=e.app_types[o])||void 0===a?void 0:null===(i=a.version_types[t])||void 0===i?void 0:i.selected_mode;console.log("modesdfsdafsd",s),s&&r(s)}}return n}(e);console.log(t,"keyscurrent sleelcteoirn",e,t),1==t.length&&h(t[0])}},[e]),(0,a.useEffect)(()=>{console.log("current_versionsdfsadfsdf",n),"P2A__V1"==n&&r("HEADFUL")},[n]);let x=e=>{d(e),h("P2A__V1")};return console.log("do we have nay mode?",l),(0,i.jsxs)("div",{className:"document-container",children:[(0,i.jsx)(g,{setSelectedFilter:t}),(0,i.jsxs)("div",{className:"doc_core_wrapper",children:[(0,i.jsxs)("div",{className:"doc_sidebar",children:[(0,i.jsx)("div",{className:"sidebar_wrapper ".concat(m?"active":""),children:Object.keys(s).map(e=>(0,i.jsx)("div",{onClick:()=>x(e),className:"sidebar-item",children:(0,i.jsx)("h2",{children:e})},e))}),(0,i.jsxs)("div",{className:"downIcon",onClick:()=>{y(e=>!e)},children:[(0,i.jsx)("h3",{children:"Overview"}),(0,i.jsx)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M15 0C12.0333 0 9.13319 0.879734 6.66645 2.52796C4.19972 4.17618 2.27713 6.51886 1.14181 9.25975C0.00649932 12.0006 -0.290551 15.0166 0.288227 17.9264C0.867006 20.8361 2.29562 23.5088 4.3934 25.6066C6.49119 27.7044 9.16394 29.133 12.0737 29.7118C14.9834 30.2906 17.9994 29.9935 20.7403 28.8582C23.4811 27.7229 25.8238 25.8003 27.472 23.3335C29.1203 20.8668 30 17.9667 30 15C29.9953 11.0232 28.4135 7.21061 25.6014 4.39858C22.7894 1.58655 18.9768 0.00469155 15 0ZM22.7823 13.2368L15.9641 20.055C15.7084 20.3106 15.3616 20.4543 15 20.4543C14.6384 20.4543 14.2916 20.3106 14.0359 20.055L7.21773 13.2368C6.96934 12.9796 6.83189 12.6352 6.835 12.2776C6.8381 11.9201 6.98151 11.5781 7.23434 11.3252C7.48717 11.0724 7.82919 10.929 8.18673 10.9259C8.54427 10.9228 8.88873 11.0602 9.14591 11.3086L15 17.1627L20.8541 11.3086C21.1113 11.0602 21.4557 10.9228 21.8133 10.9259C22.1708 10.929 22.5128 11.0724 22.7657 11.3252C23.0185 11.5781 23.1619 11.9201 23.165 12.2776C23.1681 12.6352 23.0307 12.9796 22.7823 13.2368Z",fill:"black"})})]})]}),(0,i.jsx)("div",{className:"rightWrap",children:(0,i.jsxs)("div",{className:"main-content",children:[(0,i.jsx)("div",{className:"mainHeading",children:(0,i.jsx)("h2",{children:"Instant messaging boosts user engagement, fostering community, satisfaction, and loyalty. It also provides real-time support, allowing users to get quick help. The Chat SDK enables seamless real-time messaging on any app or device."})}),(0,i.jsx)("div",{className:"tabs",children:["P2A__V1","P2A__V2","P2A__V3"].map(e=>(0,i.jsx)("button",{onClick:()=>h(e),className:"tab-button ".concat(p===e?"active":""),children:e.toUpperCase()},e))}),(()=>{if(!c)return(0,i.jsx)("div",{children:"Select a key from the left"});let e=Object.keys(s[c]);return(0,i.jsx)("div",{className:"content-area",children:e.map(e=>(0,i.jsxs)("div",{className:"step",children:[(0,i.jsx)("h1",{className:"step-title",children:e}),s[c][e].map((e,t)=>{let n=e[p]?e[p].content:null;return n?(0,i.jsx)(u,{content:n,current_mode:l},t):null})]},e))})})(),(0,i.jsxs)("div",{className:"integration_successful",children:[(0,i.jsx)("p",{children:"Congratulations Integration Should be Successfully Done by now!"}),(0,i.jsx)("p",{children:"Your users can now sign up and seamlessly chat with the Admin Team, enabling two-way communication."}),(0,i.jsx)("p",{children:"Please Contact Our Support Team if you faced any issues. Thank You!"})]})]})})]})]})},y=()=>(0,i.jsx)(a.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:(0,i.jsx)(m,{})})},9590:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[568,130,215,744],()=>t(5219)),_N_E=e.O()}]);