(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{1527:(e,t,n)=>{Promise.resolve().then(n.bind(n,3484))},3484:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var s=n(7437),i=n(2265);n(9590);var a=n(1169);let o={installation:{"Integration Steps":[{P2A__V1:{content:[{tag_type:"h2",text:"Cloud Managed Auth + Chat (Simple Site)"},{tag_type:"h3",text:"This type of chat application is tailored for simple websites built with HTML, JavaScript, and CSS, typically used as informational sites. It is ideal for scenarios where the existing product lacks built-in authentication but requires the seamless integration of both authentication and chat functionality."},{tag_type:"div",children:[{tag_type:"h2",text:"Prerequisite"},{tag_type:"p",text:"To integrate Chat into your app, do the following:"},{tag_type:"ol",items:[{text:"Signup/Login to your account at AddChat.",link_parts:[{text:"Signup/Login",link:"https://www.google.com/"}]},{tag_type:"li",text:"Create an app as per your use case. (Be Sure to choose the right Mode [Headless | HEADFUL])"},{tag_type:"li",text:"Go To created apps's detail page and locate the credentials."}]}]},{tag_type:"div",children:[{tag_type:"h2",text:"Project setup"},{tag_type:"p",text:"To integrate Chat into your app, do the following:"},{tag_type:"feature_options",options:[{text:"HEADFUL",description:[{tag_type:"p",text:"In this mode [HEADFUL], the header will include authentication options (Signup, Login, etc.) along with a chat box for user interaction."},{tag_type:"p",text:"To integrate it into your app, Do the following."},{tag_type:"ol",items:[{tag_type:"li",text:"Update the script credentials section with your app's credentials",sub_items:[{tag_type:"li",text:"Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",code:'<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>'},{tag_type:"li",code:'<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js"></script>'},{tag_type:"li",text:"after script is loaded we can initialize it like below.",code:'<script>\n              document.addEventListener("DOMContentLoaded", async function () {\n                const token = localStorage.getItem("tezkit_token");\n                if (token) {\n                  window.chathead.initialize(token);\n                } else {\n                  window.chathead.setUp(\n                    "<Your App Name>", \n                    "<Your Api Key>", \n                    JSON.stringify({\n                      "header_theme": {\n                        "backgroundColor": "rgb(30, 136, 125)"\n                      },\n                      "chat_opener_theme": {\n                        "backgroundColor": "rgb(41, 48, 78)"\n                      }\n                    }),\n                    true,\n                    "/index.html"\n                  );\n                }\n              });\n            </script>\n            '}]},{tag_type:"li",text:"Verify if you see the header on the top of your page and chat icon on the bottom of your page. like in below image ",img:"Asset/headerful_example.png"},{text:"Refer to the example code in the screenshot above if needed for guidance.",link_parts:[{text:"example code",link:"https://github.com/codekeep18feb/examples/tree/main/vanila_js_sites/p2a_v1_clients"}]}]},{tag_type:"video",src:"https://youtu.be/MKatoeFYeb8?si=slTFn2cD5I8l81Zi",desc:"Demo for P2A V1 [Headful]"}]},{text:"HEADLESS",description:[{tag_type:"p",text:"In this mode, instead of displaying a standard header, all the authentication components (Signup, Login, etc.) are grouped together. These components are designed to be flexible, allowing you to place them in a fixed position anywhere within your custom header or elsewhere in your layout. Additionally, this mode includes a chat box for user interaction"},{tag_type:"p",text:"To integrate Chat this into your app, Do the following."},{tag_type:"ol",items:[{tag_type:"li",text:"Insert the following div into any desired location within your HTML page where you want the Authentication Component to appear.",code:'<div id="tezkit-auth-area" style="min-width: 200px;"> </div>'},{tag_type:"li",text:"Update the script credentials section with your app's credentials",sub_items:[{tag_type:"li",text:"Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",code:'<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>'},{tag_type:"li",code:'<script src="node_modules/chathead-consumer-client/dist/bundle.js"></script>'},{tag_type:"li",text:"after script is loaded we can initialize it like below.",code:'<script>\n              document.addEventListener("DOMContentLoaded", async function () {\n                const token = localStorage.getItem("tezkit_token");\n                if (token) {\n                  window.chathead.initialize(token);\n                } else {\n                  window.chathead.setUp(\n                    "<Your App Name>", \n                    "<Your Api Key>", \n                    JSON.stringify({\n                      "header_theme": {\n                        "backgroundColor": "rgb(30, 136, 125)"\n                      },\n                      "chat_opener_theme": {\n                        "backgroundColor": "rgb(41, 48, 78)"\n                      }\n                    }),\n                    false,\n                    "/index.html"\n                  );\n                }\n              });\n            </script>\n            '}]},{tag_type:"li",text:"Verify if you see the Auth components where you placed them in your page and chat icon on the bottom of your page. like in below image ",img:"Asset/headerless_example.png"},{text:"Refer to the example code in the screenshot above if needed for guidance.",link_parts:[{text:"example code",link:"https://github.com/codekeep18feb/examples/tree/main/vanila_js_sites/p2a_v1_clients"}]}]},{tag_type:"div",children:[{tag_type:"div",children:[{tag_type:"video",src:"https://youtu.be/MKatoeFYeb8?si=slTFn2cD5I8l81Zi",desc:"Demo for P2A V1 [HeadLess]"}]}]}]}]},{tag_type:"div",children:[{tag_type:"h3",text:"Congratulations Integration Should be Successfully Done by now!"},{tag_type:"p",text:"Your users can now sign up and seamlessly chat with the Admin Team, enabling two-way communication."}]}]}]}},{"P2A__V2.1":{content:[{tag_type:"h2",text:"Locally Managed Auth + Chat (Complex Sites)"},{tag_type:"h3",text:"This chat application is designed specifically for complex sites or apps built with JavaScript on both the client and server sides. It is ideal for products that already have built-in authentication and are looking to seamlessly integrate robust chat functionality."},{tag_type:"div",children:[{tag_type:"h2",text:"Prerequisite"},{tag_type:"p",text:"To integrate Chat into your app, do the following:"},{tag_type:"ol",items:[{text:"Signup/Login to your account at AddChat.",link_parts:[{text:"Signup/Login",link:"https://www.google.com/"}]},{tag_type:"li",text:"Create an app as per your use case. (Be Sure to choose the right version V2.1)"},{tag_type:"li",text:"Go To created apps's detail page and locate the credentials."}]}]},{tag_type:"div",children:[{tag_type:"h2",text:"Project setup"},{tag_type:"h4",text:"Client Side Integration"},{tag_type:"ol",items:[{tag_type:"li",text:"Update the script credentials section with your app's credentials",sub_items:[{tag_type:"li",text:"Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",code:'<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>'},{tag_type:"li",text:"Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",code:'<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>'},{tag_type:"li",code:'<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js"></script>'},{tag_type:"li",text:"[setUp] at initial load when user detected loggedout, it should be called to run the setUp for AddChat once before we initialize the app as the next step",code:'<script>\n  const token = localStorage.getItem(\'tezkit_token\',null);\n    if (!token) {\n        window.chathead.setUp(\n            (app_name = "v2.1_first_app"),\n            (api_key =\n            "amV3ZWxlcnlraW5nX19TRVBSQVRPUl9fdjIuMV9maXJzdF9hcHA="),\n            (theme=JSON.stringify({"header_theme":{"backgroundColor":"rgb(30, 136, 125)"}, "chat_opener_theme":{"backgroundColor":"rgb(41 48 78)"}}))\n        );\n            }\n  </script>\n    '},{tag_type:"li",text:"[initialize] Once we have already run the setUp we are ought to run initialize asap the logged in user detected.",code:'const token = localStorage.getItem(\'tezkit_token\',null);\n  if (token) {\n      console.log("arew we seerhewrewr ing")\n      window.chathead.initialize({"uid": <new_user>}); // it should contain atleast `uid` key\n  }\n    '}]},{tag_type:"li",text:"Verify if you see chat icon on the bottom of your page. like in below image ",img:"Asset/headerful_example.png"},{text:"Refer to the example code in the screenshot above if needed for guidance.",link_parts:[{text:"example code",link:"https://github.com/codekeep18feb/examples/tree/main/vanila_js_sites/p2a_v1_clients"}]}]},{tag_type:"h4",text:"Backend Integration for Onboarding api"},{tag_type:"p",text:"Since authenticaiton is locally managed by you; \n                      whenever a new user has signed up on your plateform you should let us know by onbarding them like below"},{tag_type:"p",text:"Kindly Note - You won't be able to see newly signed up user on your platform on the Admin without it"},{tag_type:"img",src:"Asset/v2.1_preview.png"},{tag_type:"p",text:"Onboarding Rest Endpoint"},{tag_type:"img",src:"https://learn.microsoft.com/en-us/graph/images/postman-screenshot.png"},{tag_type:"p",text:"Here’s an example that demonstrates integration when the product uses JWT authentication. However, this integration approach applies universally, regardless of the authentication system in use. The key requirement is to ensure that the Onboarding API is called immediately after the user successfully signs up, regardless of the authentication method implemented."},{tag_type:"feature_options",options:[{text:"python",description:[{tag_type:"p",text:"Here’s an example of how this integration might look in your Python code, specifically when using Flask:"},{tag_type:"div",children:[{tag_type:"code",text:'\n  \n  \n  import json\n  import os\n  import requests\n  from flask import request, jsonify\n  from werkzeug.security import generate_password_hash  # Replace bcrypt with Flask\'s hashing if needed\n  \n  # Your database setup and models go here (e.g., User, db, etc.)\n  \n  def signup():\n      # Step 1: Handle user signup logic\n      data = request.get_json()\n      uid = data.get(\'uid\')\n      email = data.get(\'email\')\n      password = data.get(\'password\')\n      hashed_password = generate_password_hash(password)\n  \n      # Replace with your ORM/DB logic\n      new_user = User(uid=uid, email=email, password=hashed_password)\n      db.session.add(new_user)\n      db.session.commit()\n  \n      # Step 2: Set up AddChat credentials securely\n      credentials = {\n          "APP_API_KEY": os.getenv("ADDCHAT_API_KEY"),\n          "app_name": os.getenv("ADDCHAT_APP_NAME"),\n          "tenant": os.getenv("ADDCHAT_TENANT")\n      }\n  \n      # Step 3: Make the AddChat onboarding API call\n      onboarding_url = "https://gfxb0jf19k.execute-api.ap-south-1.amazonaws.com/prod/onboarding"\n      headers = {\n          "Accept": "*/*",\n          "User-Agent": "MyApp (https://myapp.com)",\n          "X-API-Key": credentials["APP_API_KEY"],\n          "Content-Type": "application/json"\n      }\n      payload = {\n          "tenant": credentials["tenant"],\n          "uid": uid,\n          "app_name": credentials["app_name"]\n      }\n  \n      try:\n          response = requests.post(onboarding_url, headers=headers, json=payload)\n          response.raise_for_status()  # Raise an error for HTTP errors\n          onboarding_response = response.json()\n          print("Onboarding successful:", onboarding_response)\n      except requests.exceptions.RequestException as e:\n          print(f"Error during onboarding: {e}")\n          return jsonify({"msg": "User created, but onboarding failed"}), 500\n  \n      # Step 4: Respond to the client\n      return jsonify({"msg": "User created and onboarded successfully"}), 201\n  \n      \n      '}]}]},{text:"node",description:[{tag_type:"p",text:"Here’s an example of how this integration might look in your Node.js code, specifically when using Express:"},{tag_type:"div",children:[{tag_type:"code",text:'\n  \n  \n  const express = require("express");\n  const bcrypt = require("bcrypt");\n  const axios = require("axios");\n  const dotenv = require("dotenv");\n  const bodyParser = require("body-parser");\n  \n  // Load environment variables\n  dotenv.config();\n  \n  const app = express();\n  app.use(bodyParser.json());\n  \n  // Simulated database and models\n  const db = {\n    users: [],\n    addUser: function (user) {\n      this.users.push(user);\n    },\n  };\n  \n  app.post("/signup", async (req, res) => {\n    try {\n      // Step 1: Handle user signup logic\n      const { uid, email, password } = req.body;\n      if (!uid || !email || !password) {\n        return res.status(400).json({ msg: "All fields are required" });\n      }\n  \n      // Hash the password\n      const hashedPassword = await bcrypt.hash(password, 10);\n  \n      // Simulate saving the user to the database\n      const newUser = { uid, email, password: hashedPassword };\n      db.addUser(newUser);\n  \n      // Step 2: Set up AddChat credentials securely\n      const credentials = {\n        APP_API_KEY: process.env.ADDCHAT_API_KEY,\n        app_name: process.env.ADDCHAT_APP_NAME,\n        tenant: process.env.ADDCHAT_TENANT,\n      };\n  \n      // Step 3: Make the AddChat onboarding API call\n      const onboardingUrl =\n        "https://gfxb0jf19k.execute-api.ap-south-1.amazonaws.com/prod/onboarding";\n      const headers = {\n        Accept: "*/*",\n        "User-Agent": "MyApp (https://myapp.com)",\n        "X-API-Key": credentials.APP_API_KEY,\n        "Content-Type": "application/json",\n      };\n      const payload = {\n        tenant: credentials.tenant,\n        uid: uid,\n        app_name: credentials.app_name,\n      };\n  \n      // API call using axios\n      const response = await axios.post(onboardingUrl, payload, { headers });\n  \n      console.log("Onboarding successful:", response.data);\n  \n      // Step 4: Respond to the client\n      res.status(201).json({ msg: "User created and onboarded successfully" });\n    } catch (error) {\n      console.error("Error during onboarding:", error.message || error);\n  \n      // Handle error\n      res.status(500).json({\n        msg: "User created, but onboarding failed",\n        error: error.response?.data || error.message,\n      });\n    }\n  });\n  \n  // Start the Express server\n  const PORT = process.env.PORT || 3000;\n  app.listen(PORT, () => {\n  console.log("Server running on port ".concat(PORT));\n  \n  });\n  \n  \n      \n      '}]}]},{text:"other",description:[{tag_type:"h4",text:"In the similar manners this can be implimented in any other backend; Just rememeber to call the onboarding rest endpoint whenever a new users has signed up on your plateform."}]}]},{tag_type:"video",src:"https://youtu.be/MKatoeFYeb8?si=slTFn2cD5I8l81Zi",desc:"Demo for P2A_V2.1"},{tag_type:"div",children:[{tag_type:"h3",text:"Congratulations Integration Should be Successfully Done by now!"},{tag_type:"p",text:"Your users can now sign up and seamlessly chat with the Admin Team, enabling two-way communication."}]}]}]}},{"P2A__V2.2":{content:[{tag_type:"h2",text:"Locally Managed Auth + Chat (Wordpress)"},{tag_type:"h3",text:"This chat application is designed specifically for Wordpress using native wp authentication. It is ideal for products that already have built-in authentication probably using some plugin and are looking to seamlessly integrate robust chat functionality."},{tag_type:"div",children:[{tag_type:"h2",text:"Prerequisite"},{tag_type:"p",text:"To integrate Chat into your app, do the following:"},{tag_type:"ol",items:[{text:"Signup/Login to your account at AddChat.",link_parts:[{text:"Signup/Login",link:"https://www.google.com/"}]},{tag_type:"li",text:"Create an app as per your use case. (Be Sure to choose the right version V2.2)"},{tag_type:"li",text:"Go To created apps's detail page and locate the credentials."}]}]},{tag_type:"div",children:[{tag_type:"h2",text:"Project setup"},{tag_type:"h4",text:"Client Side Integration"},{tag_type:"p",text:"Install the AddChat plugin"},{tag_type:"p",text:"Add the AddChat Credentials like below"},{tag_type:"img",src:"Asset/v2.1_preview.png"},{tag_type:"p",text:"Verify if you can see the chat utility on your product like below"},{tag_type:"img",src:"Asset/v2.1_preview.png"},{tag_type:"video",src:"https://youtu.be/MKatoeFYeb8?si=slTFn2cD5I8l81Zi",desc:"Demo for P2A_V2.2"},{tag_type:"div",children:[{tag_type:"h3",text:"Congratulations Integration Should be Successfully Done by now!"},{tag_type:"p",text:"Your users can now sign up and seamlessly chat with the Admin Team, enabling two-way communication."}]}]}]}}]}},r=e=>{var t,n;let{r_options:a,current_mode:o}=e;console.log(o,"current_mode",a,null===(t=a[1])||void 0===t?void 0:t.text);let[r,l]=(0,i.useState)(o);(0,i.useEffect)(()=>{o&&l(o)},[o]);let c=e=>{l(e)};return o?(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"cond-tabs-container",children:a.map((e,t)=>(0,s.jsx)("div",{className:"tab ".concat(r===e.text?"active":""),onClick:()=>{console.log("tabshoudl get the click?"),c(e.text)},children:e.text},t))}),(0,s.jsx)("div",{className:"description",children:(0,s.jsx)("div",{children:(0,s.jsx)(h,{content:null===(n=a.find(e=>e.text===r))||void 0===n?void 0:n.description,current_mode:o},8888)})})]}):null},l=["h1","h2","h3","h4","p","div","img","a","blockquote","ul","li","code","ol"],c=(e,t,n,i)=>{if(!t&&!n&&!i)return e;let a=[],o=0;return[...t||[],...n||[],...i||[]].sort((t,n)=>e.indexOf(t.text)-e.indexOf(n.text)).forEach((t,n)=>{let r=e.indexOf(t.text,o);r>-1&&(r>o&&a.push(e.substring(o,r)),t.link?a.push((0,s.jsx)("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",children:t.text},"link-".concat(n))):t.onClick?a.push((0,s.jsx)("button",{onClick:t.onClick,children:t.text},"button-".concat(n))):i&&i.some(e=>e.text===t.text)&&a.push((0,s.jsx)("span",{style:{backgroundColor:"green",color:"white"},children:t.text},"highlight-".concat(n))),o=r+t.text.length)}),o<e.length&&a.push(e.substring(o)),a},d=e=>{let{items:t,listType:n}=e;return console.log("Here are the items:",t),"ol"===n?(0,s.jsx)("ol",{className:"content-list ordered",children:t.map((e,t)=>(0,s.jsx)(p,{item:e,listType:n},t))}):(0,s.jsx)("ul",{className:"content-list",children:t.map((e,t)=>(0,s.jsx)(p,{item:e,listType:n},t))})},p=e=>{let{item:t,listType:n}=e,a=t.link_parts||[],o=t.buttonParts||[],r=t.highlightParts||[];return(0,s.jsx)("li",{children:"string"==typeof t?(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:t}}):(0,s.jsxs)(i.Fragment,{children:[t.text?(0,s.jsx)("span",{children:c(t.text,a,o,r)}):null,(0,s.jsx)("div",{children:t.img&&(0,s.jsx)("img",{src:t.img,alt:"",className:"content-list-img"})}),t.more_text&&(0,s.jsx)("p",{children:t.more_text}),t.add_more_p&&(0,s.jsx)("p",{children:t.add_more_p}),t.code&&(0,s.jsx)("pre",{className:"script_code",children:(0,s.jsx)("code",{children:t.code})}),t.extra_text&&(0,s.jsx)("p",{children:t.extra_text}),t.sub_items&&(0,s.jsx)(d,{items:t.sub_items,listType:t.listType||n})]})})},h=e=>{let{content:t,current_mode:n}=e;return console.log(t,"ismyscode indiv not even called",n),(0,s.jsx)("div",{className:"contents",children:null==t?void 0:t.map((e,t)=>{let i=l.includes(e.tag_type)?e.tag_type:"div";if("img"===e.tag_type)return(0,s.jsx)("div",{className:"content-list-img",children:(0,s.jsx)("img",{src:e.src,alt:e.alt||""},t)});if("video"===e.tag_type)return(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:e.desc}),(0,s.jsx)("div",{className:"videos",children:(0,s.jsx)("video",{width:"100%",height:"auto",controls:!0,children:(0,s.jsx)("source",{src:e.src,type:"video/mp4"})})})]},t);if("h2"===e.tag_type)return(0,s.jsx)("h2",{className:"content-heading",children:e.text},t);if("h4"===e.tag_type)return(0,s.jsx)("h2",{className:"content-inner-heading",children:e.text},t);if("feature_options"===e.tag_type)return(0,s.jsx)(r,{r_options:e.options,current_mode:n},t);if("h3"===e.tag_type)return(0,s.jsx)("h3",{className:"content-subheading",children:e.text},t);if("p"===e.tag_type)return(0,s.jsx)("p",{className:"content-paragraph",children:e.text},t);if("img"===e.tag_type)return(0,s.jsx)("div",{className:"content-list-img",children:(0,s.jsx)("img",{src:e.src,alt:e.alt||""},t)});if("a"===e.tag_type)return(0,s.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"content-link",children:e.text},t);else if("ul"===e.tag_type||"ol"===e.tag_type)return(0,s.jsx)(d,{items:e.items,listType:e.tag_type},t);else if("blockquote"===e.tag_type)return(0,s.jsx)("blockquote",{className:"content-blockquote",children:e.text},t);else if("code"===e.tag_type)return(0,s.jsx)("pre",{className:"content-code",children:(0,s.jsx)("code",{children:e.text})},t);else if("li"===e.tag_type)return(0,s.jsxs)("li",{className:"content-list-item",children:[e.text,e.sub_items&&(0,s.jsx)(d,{items:e.sub_items,listType:e.listType||"ul"})]},t);else if("div"===e.tag_type)return(0,s.jsx)("div",{className:"content-div",children:e.children&&e.children.map((e,t)=>(0,s.jsx)(h,{content:[e],current_mode:n},t))},t);else return(0,s.jsx)(i,{className:"content-".concat(e.tag_type),dangerouslySetInnerHTML:{__html:e.text}},t)})})},u=e=>{let{setSelectedFilter:t}=e,[n,a]=(0,i.useState)({}),[o,r]=(0,i.useState)([]),l=(e,t,n)=>{a(s=>{let i={...s},a=i;if(e.forEach(e=>{a[e]&&"object"==typeof a[e]||(a[e]={}),a=a[e]}),null==n?void 0:n.modes)a[t]={selected_mode:null};else if(Array.isArray(n)){let n=e[e.length-1];e.slice(0,-1).reduce((e,t)=>e[t],i)[n]={selected_mode:t}}else a[t]=null;return i}),n&&r(n=>[...n,e.concat(t).join(".")])},c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.entries(e).map(e=>{let[n,i]=e,a=null==i?void 0:i.disabled;return(0,s.jsxs)("div",{className:"option-container ".concat(a?"disabled":""),children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("input",{type:"radio",name:t.join(".")||"root",onChange:()=>!a&&l(t,n,i),disabled:a}),n]}),o.includes(t.concat(n).join("."))&&i&&d(i,t.concat(n))]},t.concat(n).join("."))})},d=(e,t)=>(null==e?void 0:e.modes)===null?null:(null==e?void 0:e.modes)?(0,s.jsxs)("div",{className:"nested-options",children:[(0,s.jsx)("h4",{children:"Modesa"}),e.modes.map((n,i)=>(0,s.jsxs)("label",{className:"mode-label",children:[(0,s.jsx)("input",{type:"radio",name:t.join("."),onChange:()=>l(t,n,e.modes)}),n]},i))]}):c(e,t);return(0,s.jsxs)("div",{className:"filter-container",children:[(0,s.jsx)("h3",{children:"Filter"}),(0,s.jsx)("div",{className:"options-list",children:c({P2A:{version_types:{V1:{modes:["HEADLESS","HEADFUL"]},"V2.1":{modes:null},"V2.2":{modes:null}}},P2B:{disabled:!0},P2P:{disabled:!0}},["app_types"])}),(0,s.jsx)("button",{className:"submit-btn",onClick:()=>{console.log("Final Selections:",n),n&&t(n)},children:"Submit"})]})},g=()=>{let[e,t]=(0,i.useState)(null);console.log("do we have a fitler???selectedFilter",e);let n=(0,a.useSearchParams)().get("current_version")||"P2A__V1";console.log("what is the current version now? after click",n);let[r,l]=(0,i.useState)(null),[c,d]=(0,i.useState)(Object.keys(o)[0]),[p,g]=(0,i.useState)(n),[m,y]=(0,i.useState)(!1);(0,i.useEffect)(()=>{if(e){let t=function(e){let t=e.app_types,n=[];for(let a in t){console.log(a,"hwo to get mode",e);let o=t[a].version_types;for(let t in o){var s,i;n.push("".concat(a,"__").concat(t));let o=null===(i=e.app_types[a])||void 0===i?void 0:null===(s=i.version_types[t])||void 0===s?void 0:s.selected_mode;console.log("modesdfsdafsd",o),o&&l(o)}}return n}(e);console.log(t,"keyscurrent sleelcteoirn",e,t),1==t.length&&g(t[0])}},[e]),(0,i.useEffect)(()=>{console.log("current_versionsdfsadfsdf",n),"P2A__V1"==n&&l("HEADFUL")},[n]);let _=e=>{d(e),g("P2A__V1")};return console.log("do we have nay mode?",r),(0,s.jsxs)("div",{className:"document-container",children:[(0,s.jsx)(u,{setSelectedFilter:t}),(0,s.jsxs)("div",{className:"doc_core_wrapper",children:[(0,s.jsxs)("div",{className:"doc_sidebar",children:[(0,s.jsx)("div",{className:"sidebar_wrapper ".concat(m?"active":""),children:Object.keys(o).map(e=>(0,s.jsx)("div",{onClick:()=>_(e),className:"sidebar-item",children:(0,s.jsx)("h2",{children:e})},e))}),(0,s.jsxs)("div",{className:"downIcon",onClick:()=>{y(e=>!e)},children:[(0,s.jsx)("h3",{children:"Overview"}),(0,s.jsx)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M15 0C12.0333 0 9.13319 0.879734 6.66645 2.52796C4.19972 4.17618 2.27713 6.51886 1.14181 9.25975C0.00649932 12.0006 -0.290551 15.0166 0.288227 17.9264C0.867006 20.8361 2.29562 23.5088 4.3934 25.6066C6.49119 27.7044 9.16394 29.133 12.0737 29.7118C14.9834 30.2906 17.9994 29.9935 20.7403 28.8582C23.4811 27.7229 25.8238 25.8003 27.472 23.3335C29.1203 20.8668 30 17.9667 30 15C29.9953 11.0232 28.4135 7.21061 25.6014 4.39858C22.7894 1.58655 18.9768 0.00469155 15 0ZM22.7823 13.2368L15.9641 20.055C15.7084 20.3106 15.3616 20.4543 15 20.4543C14.6384 20.4543 14.2916 20.3106 14.0359 20.055L7.21773 13.2368C6.96934 12.9796 6.83189 12.6352 6.835 12.2776C6.8381 11.9201 6.98151 11.5781 7.23434 11.3252C7.48717 11.0724 7.82919 10.929 8.18673 10.9259C8.54427 10.9228 8.88873 11.0602 9.14591 11.3086L15 17.1627L20.8541 11.3086C21.1113 11.0602 21.4557 10.9228 21.8133 10.9259C22.1708 10.929 22.5128 11.0724 22.7657 11.3252C23.0185 11.5781 23.1619 11.9201 23.165 12.2776C23.1681 12.6352 23.0307 12.9796 22.7823 13.2368Z",fill:"black"})})]})]}),(0,s.jsx)("div",{className:"rightWrap",children:(0,s.jsxs)("div",{className:"main-content",children:[(0,s.jsx)("h2",{children:"Instant messaging boosts user engagement, fostering community, satisfaction, and loyalty. It also provides real-time support, allowing users to get quick help. The Chat SDK enables seamless real-time messaging on any app or device."}),(0,s.jsx)("div",{className:"tabs",children:["P2A__V1","P2A__V2.1","P2A__V2.2"].map(e=>(0,s.jsx)("button",{onClick:()=>g(e),className:"tab-button ".concat(p===e?"active":""),children:e.toUpperCase()},e))}),(()=>{if(!c)return(0,s.jsx)("div",{children:"Select a key from the left"});let e=Object.keys(o[c]);return(0,s.jsx)("div",{className:"content-area",children:e.map(e=>(0,s.jsxs)("div",{className:"step",children:[(0,s.jsx)("h1",{className:"step-title",children:e}),o[c][e].map((e,t)=>{let n=e[p]?e[p].content:null;return n?(0,s.jsx)(h,{content:n,current_mode:r},t):null})]},e))})})()]})})]})]})},m=()=>(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(g,{})})},9590:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[568,130,215,744],()=>t(1527)),_N_E=e.O()}]);