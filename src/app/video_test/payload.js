// Example payload with additional tags and Lorem Ipsum content
const payload = {
  installation: {
    "Integration Steps": [
      {
        P2A__V1: {
          content: [
            {
              tag_type: "h2",
              text: `Cloud Managed Auth + Chat (Simple Site)`,
            },
            {
              tag_type: "h3",
              text: `This type of chat application is tailored for simple websites built with HTML, JavaScript, and CSS, typically used as informational sites. It is ideal for scenarios where the existing product lacks built-in authentication but requires the seamless integration of both authentication and chat functionality.`,
            },

            {
              tag_type: "div",
              children: [
                { tag_type: "h2", text: "Prerequisite" },

                {
                  tag_type: "p",
                  text: "To integrate Chat into your app, do the following:",
                },
                {
                  tag_type: "ol",
                  items: [
                    {
                      text: "Signup/Login to your account at MagicChat.",
                      link_parts: [
                        {
                          text: "Signup/Login",
                          link: "https://www.google.com/",
                        },
                      ],
                    },

                    {
                      tag_type: "li",
                      text: "Create an app as per your use case. (Be Sure to choose the right Mode [Headless | HEADFUL])",
                    },

                    {
                      tag_type: "li",
                      text: "Go To created app's  detail page and locate the credentials.",
                    },
                  ],
                },
              ],
            },

            {
              tag_type: "div",
              children: [
                { tag_type: "h2", text: "Project setup" },

                {
                  tag_type: "p",
                  text: "To integrate Chat into your app, do the following:",
                },

                {
                  tag_type: "feature_options",
                  options: [
                    {
                      text: "HEADFUL",
                      description: [
                        {
                          tag_type: "p",
                          text: "In this mode [HEADFUL], the header will include authentication options (Signup, Login, etc.) along with a chat box for user interaction.",
                        },

                        {
                          tag_type: "p",
                          text: "To integrate it into your app, Do the following.",
                        },

                        {
                          tag_type: "ol",
                          items: [
                            {
                              tag_type: "li",
                              text: "Update the script credentials section with your app's credentials",
                              sub_items: [
                                {
                                  tag_type: "li",
                                  text: "Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",
                                  // extra_text:
                                  //   "Update the script credentials section with your app's credentials",
                                  code: '<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>',
                                },
                                {
                                  tag_type: "li",
                                  // text: "after script is loaded we can initialize it like below.",
                                  // extra_text: "kindly add it below the first script",
                                  code: `<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js"></script>`,
                                },
                                {
                                  tag_type: "li",
                                  text: "after script is loaded we can initialize it like below.",
                                  // extra_text: "kindly add it below the first script",
                                  code: `<script>
              document.addEventListener("DOMContentLoaded", async function () {
                const token = localStorage.getItem("tezkit_token");
                if (token) {
                  window.chathead.initialize(token);
                } else {
                  window.chathead.setUp(
                    "<Your App Name>", 
                    "<Your Api Key>", 
                    JSON.stringify({
                      "header_theme": {
                        "backgroundColor": "rgb(30, 136, 125)"
                      },
                      "chat_opener_theme": {
                        "backgroundColor": "rgb(41, 48, 78)"
                      }
                    }),
                    true,
                    "/index.html"
                  );
                }
              });
            </script>
            `,
                                },
                              ],
                            },
                            {
                              tag_type: "li",
                              text: "Verify if you see the header on the top of your page and chat icon on the bottom of your page. like in below image ",
                              // "more_text": "To add the necessary permissions, in /app/Manifests/AndroidManifest.xml, add the following permissions after </application>:",
                              img: "Asset/headerful_example.png",
                            },

                            {
                              text: "Refer to the example code in the screenshot above if needed for guidance.",
                              link_parts: [
                                {
                                  text: "example code",
                                  link: "https://github.com/codekeep18feb/examples/tree/main/vanila_js_sites/p2a_v1_clients",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag_type: "video",
                          src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
                          desc: "Demo for P2A V1 [Headful]",
                        },
                      ],
                    },
                    {
                      text: "HEADLESS",
                      description: [
                        {
                          tag_type: "p",
                          text: "In this mode, instead of displaying a standard header, all the authentication components (Signup, Login, etc.) are grouped together. These components are designed to be flexible, allowing you to place them in a fixed position anywhere within your custom header or elsewhere in your layout. Additionally, this mode includes a chat box for user interaction",
                        },

                        {
                          tag_type: "p",
                          text: "To integrate Chat this into your app, Do the following.",
                        },

                        {
                          tag_type: "ol",
                          items: [
                            {
                              tag_type: "li",
                              text: "Insert the following div into any desired location within your HTML page where you want the Authentication Component to appear.",
                              // extra_text: "kindly add it below the first script",
                              code: `<div id="tezkit-auth-area" style="min-width: 200px;"> </div>`,
                            },
                            {
                              tag_type: "li",
                              text: "Update the script credentials section with your app's credentials",
                              sub_items: [
                                {
                                  tag_type: "li",
                                  text: "Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",
                                  // extra_text:
                                  //   "Update the script credentials section with your app's credentials",
                                  code: '<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>',
                                },
                                {
                                  tag_type: "li",
                                  // text: "after script is loaded we can initialize it like below.",
                                  // extra_text: "kindly add it below the first script",
                                  code: `<script src="node_modules/chathead-consumer-client/dist/bundle.js"></script>`,
                                },
                                {
                                  tag_type: "li",
                                  text: "after script is loaded we can initialize it like below.",
                                  // extra_text: "kindly add it below the first script",
                                  code: `<script>
              document.addEventListener("DOMContentLoaded", async function () {
                const token = localStorage.getItem("tezkit_token");
                if (token) {
                  window.chathead.initialize(token);
                } else {
                  window.chathead.setUp(
                    "<Your App Name>", 
                    "<Your Api Key>", 
                    JSON.stringify({
                      "header_theme": {
                        "backgroundColor": "rgb(30, 136, 125)"
                      },
                      "chat_opener_theme": {
                        "backgroundColor": "rgb(41, 48, 78)"
                      }
                    }),
                    false,
                    "/index.html"
                  );
                }
              });
            </script>
            `,
                                },
                              ],
                            },

                            {
                              tag_type: "li",
                              text: "Verify if you see the Auth components where you placed them in your page and chat icon on the bottom of your page. like in below image ",
                              // "more_text": "To add the necessary permissions, in /app/Manifests/AndroidManifest.xml, add the following permissions after </application>:",
                              img: "Asset/headerless_example.png",
                            },
                            {
                              text: "Refer to the example code in the screenshot above if needed for guidance.",
                              link_parts: [
                                {
                                  text: "example code",
                                  link: "https://github.com/codekeep18feb/examples/tree/main/vanila_js_sites/p2a_v1_clients",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag_type: "div",
                          children: [
                            {
                              tag_type: "div",
                              children: [
                                {
                                  tag_type: "video",
                                  src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
                                  desc: "Demo for P2A V1 [HeadLess]",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag_type: "div",
                  children: [
                    {
                      tag_type: "h3",
                      text: "Congratulations Integration Should be Successfully Done by now!",
                    },

                    {
                      tag_type: "p",
                      text: "Your users can now sign up and seamlessly chat with the Admin Team, enabling two-way communication.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        P2A__V2: {
          content: [
            {
              tag_type: "h2",
              text: `Locally Managed Auth + Chat (Complex Sites)`,
            },
            {
              tag_type: "h3",
              text: `This chat application is designed specifically for complex sites or apps built with JavaScript on both the client and server sides. It is ideal for products that already have built-in authentication and are looking to seamlessly integrate robust chat functionality.`,
            },

            //prerequisite?
            {
              tag_type: "div",
              children: [
                { tag_type: "h2", text: "Prerequisite" },

                {
                  tag_type: "p",
                  text: "To integrate Chat into your app, do the following:",
                },
                {
                  tag_type: "ol",
                  items: [
                    {
                      text: "Signup/Login to your account at MagicChat.",
                      link_parts: [
                        {
                          text: "Signup/Login",
                          link: "https://www.google.com/",
                        },
                      ],
                    },

                    {
                      tag_type: "li",
                      text: "Create an app as per your use case. (Be Sure to choose the right version V2)",
                    },

                    {
                      tag_type: "li",
                      text: "Go To created app's  detail page and locate the credentials.",
                    },
                  ],
                },
              ],
            },

            {
              tag_type: "div",
              children: [
                { tag_type: "h2", text: "Project setup" },

                {
                  tag_type: "h4",
                  text: "Client Side Integration",
                },
                {
                  tag_type: "ol",
                  items: [
                    {
                      tag_type: "li",
                      text: "Update the script credentials section with your app's credentials",
                      sub_items: [
                        {
                          tag_type: "li",
                          text: "Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",
                          // extra_text:
                          //   "Update the script credentials section with your app's credentials",
                          code: '<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>',
                        },
                        {
                          tag_type: "li",
                          text: "Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",
                          // extra_text:
                          //   "Update the script credentials section with your app's credentials",
                          code: '<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>',
                        },

                        {
                          tag_type: "li",
                          // text: "after script is loaded we can initialize it like below.",
                          // extra_text: "kindly add it below the first script",
                          code: `<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js"></script>`,
                        },
                        {
                          tag_type: "li",
                          text: "[setUp] at initial load when user detected loggedout, it should be called to run the setUp for MagicChat once before we initialize the app as the next step",
                          // extra_text: "kindly add it below the first script",
                          code: `<script>
  const token = localStorage.getItem('tezkit_token',null);
    if (!token) {
        window.chathead.setUp(
            (app_name = "v2.1_first_app"),
            (api_key =
            "amV3ZWxlcnlraW5nX19TRVBSQVRPUl9fdjIuMV9maXJzdF9hcHA="),
            (theme=JSON.stringify({"header_theme":{"backgroundColor":"rgb(30, 136, 125)"}, "chat_opener_theme":{"backgroundColor":"rgb(41 48 78)"}}))
        );
            }
  </script>
    `,
                        },

                        {
                          tag_type: "li",
                          text: "[initialize] Once we have already run the setUp we are ought to run initialize asap the logged in user detected.",
                          // extra_text: "kindly add it below the first script",
                          code: `const token = localStorage.getItem('tezkit_token',null);
  if (token) {
      console.log("arew we seerhewrewr ing")
      window.chathead.initialize({"uid": <new_user>}); // it should contain atleast \`uid\` key
  }
    `,
                        },
                      ],
                    },
                    {
                      tag_type: "li",
                      text: "Verify if you see chat icon on the bottom of your page. like in below image ",
                      // "more_text": "To add the necessary permissions, in /app/Manifests/AndroidManifest.xml, add the following permissions after </application>:",
                      img: "Asset/headerful_example.png",
                    },

                    {
                      text: "Refer to the example code in the screenshot above if needed for guidance.",
                      link_parts: [
                        {
                          text: "example code",
                          link: "https://github.com/codekeep18feb/examples/tree/main/vanila_js_sites/p2a_v1_clients",
                        },
                      ],
                    },
                  ],
                },

                //Backend side integration

                {
                  tag_type: "h4",
                  text: "Backend Integration for Onboarding api",
                },
                {
                  tag_type: "p",
                  text: `Since authenticaiton is locally managed by you; 
                      whenever a new user has signed up on your platform you should let us know by onbarding them like below`,
                },

                {
                  tag_type: "p",
                  text: `Kindly Note - You won't be able to see newly signed up user on your platform on the Admin without it`,
                },

                {
                  tag_type: "img",
                  src: "Asset/v2.1_preview.png",
                },

                {
                  tag_type: "p",
                  text: `Onboarding Rest Endpoint`,
                },

                {
                  tag_type: "img",
                  src: "https://learn.microsoft.com/en-us/graph/images/postman-screenshot.png",
                },

                {
                  tag_type: "p",
                  text: "Here’s an example that demonstrates integration when the product uses JWT authentication. However, this integration approach applies universally, regardless of the authentication system in use. The key requirement is to ensure that the Onboarding API is called immediately after the user successfully signs up, regardless of the authentication method implemented.",
                },
                {
                  tag_type: "feature_options",
                  options: [
                    {
                      text: "python",
                      description: [
                        {
                          tag_type: "p",
                          text: "Here’s an example of how this integration might look in your Python code, specifically when using Flask:",
                        },

                        {
                          tag_type: "div",
                          children: [
                            {
                              tag_type: "code",
                              text: `
  
  
  import json
  import os
  import requests
  from flask import request, jsonify
  from werkzeug.security import generate_password_hash  # Replace bcrypt with Flask's hashing if needed
  
  # Your database setup and models go here (e.g., User, db, etc.)
  
  def signup():
      # Step 1: Handle user signup logic
      data = request.get_json()
      uid = data.get('uid')
      email = data.get('email')
      password = data.get('password')
      hashed_password = generate_password_hash(password)
  
      # Replace with your ORM/DB logic
      new_user = User(uid=uid, email=email, password=hashed_password)
      db.session.add(new_user)
      db.session.commit()
  
      # Step 2: Set up MagicChat credentials securely
      credentials = {
          "APP_API_KEY": os.getenv("ADDCHAT_API_KEY"),
          "app_name": os.getenv("ADDCHAT_APP_NAME"),
          "tenant": os.getenv("ADDCHAT_TENANT")
      }
  
      # Step 3: Make the MagicChat onboarding API call
      onboarding_url = "https://gfxb0jf19k.execute-api.ap-south-1.amazonaws.com/prod/onboarding"
      headers = {
          "Accept": "*/*",
          "User-Agent": "MyApp (https://myapp.com)",
          "X-API-Key": credentials["APP_API_KEY"],
          "Content-Type": "application/json"
      }
      payload = {
          "tenant": credentials["tenant"],
          "uid": uid,
          "app_name": credentials["app_name"]
      }
  
      try:
          response = requests.post(onboarding_url, headers=headers, json=payload)
          response.raise_for_status()  # Raise an error for HTTP errors
          onboarding_response = response.json()
          print("Onboarding successful:", onboarding_response)
      except requests.exceptions.RequestException as e:
          print(f"Error during onboarding: {e}")
          return jsonify({"msg": "User created, but onboarding failed"}), 500
  
      # Step 4: Respond to the client
      return jsonify({"msg": "User created and onboarded successfully"}), 201
  
      
      `,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      text: "node",
                      description: [
                        {
                          tag_type: "p",
                          text: "Here’s an example of how this integration might look in your Node.js code, specifically when using Express:",
                        },

                        {
                          tag_type: "div",
                          children: [
                            {
                              tag_type: "code",
                              text: `
  
  
  const express = require("express");
  const bcrypt = require("bcrypt");
  const axios = require("axios");
  const dotenv = require("dotenv");
  const bodyParser = require("body-parser");
  
  // Load environment variables
  dotenv.config();
  
  const app = express();
  app.use(bodyParser.json());
  
  // Simulated database and models
  const db = {
    users: [],
    addUser: function (user) {
      this.users.push(user);
    },
  };
  
  app.post("/signup", async (req, res) => {
    try {
      // Step 1: Handle user signup logic
      const { uid, email, password } = req.body;
      if (!uid || !email || !password) {
        return res.status(400).json({ msg: "All fields are required" });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Simulate saving the user to the database
      const newUser = { uid, email, password: hashedPassword };
      db.addUser(newUser);
  
      // Step 2: Set up MagicChat credentials securely
      const credentials = {
        APP_API_KEY: process.env.ADDCHAT_API_KEY,
        app_name: process.env.ADDCHAT_APP_NAME,
        tenant: process.env.ADDCHAT_TENANT,
      };
  
      // Step 3: Make the MagicChat onboarding API call
      const onboardingUrl =
        "https://gfxb0jf19k.execute-api.ap-south-1.amazonaws.com/prod/onboarding";
      const headers = {
        Accept: "*/*",
        "User-Agent": "MyApp (https://myapp.com)",
        "X-API-Key": credentials.APP_API_KEY,
        "Content-Type": "application/json",
      };
      const payload = {
        tenant: credentials.tenant,
        uid: uid,
        app_name: credentials.app_name,
      };
  
      // API call using axios
      const response = await axios.post(onboardingUrl, payload, { headers });
  
      console.log("Onboarding successful:", response.data);
  
      // Step 4: Respond to the client
      res.status(201).json({ msg: "User created and onboarded successfully" });
    } catch (error) {
      console.error("Error during onboarding:", error.message || error);
  
      // Handle error
      res.status(500).json({
        msg: "User created, but onboarding failed",
        error: error.response?.data || error.message,
      });
    }
  });
  
  // Start the Express server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
  console.log("Server running on port ".concat(PORT));
  
  });
  
  
      
      `,
                            },
                          ],
                        },
                      ],
                    },

                    {
                      text: "other",
                      description: [
                        {
                          tag_type: "h4",
                          text: "In the similar manners this can be implimented in any other backend; Just rememeber to call the onboarding rest endpoint whenever a new users has signed up on your platform.",
                        },
                      ],
                    },
                  ],
                },

                {
                  tag_type: "video",
                  src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
                  desc: "Demo for P2A_V2.1",
                },

                {
                  tag_type: "div",
                  children: [
                    {
                      tag_type: "h3",
                      text: "Congratulations Integration Should be Successfully Done by now!",
                    },

                    {
                      tag_type: "p",
                      text: "Your users can now sign up and seamlessly chat with the Admin Team, enabling two-way communication.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },

      {
        P2A__V3: {
          content: [
            {
              tag_type: "h2",
              text: `Locally Managed Auth + Chat (Wordpress)`,
            },
            {
              tag_type: "h3",
              text: `This chat application is designed specifically for Wordpress using native wp authentication. It is ideal for products that already have built-in authentication probably using some plugin and are looking to seamlessly integrate robust chat functionality.`,
            },

            //prerequisite?
            {
              tag_type: "div",
              children: [
                { tag_type: "h2", text: "Prerequisite" },

                {
                  tag_type: "p",
                  text: "To integrate Chat into your app, do the following:",
                },
                {
                  tag_type: "ol",
                  items: [
                    {
                      text: "Signup/Login to your account at MagicChat.",
                      link_parts: [
                        {
                          text: "Signup/Login",
                          link: "https://www.google.com/",
                        },
                      ],
                    },

                    {
                      tag_type: "li",
                      text: "Create an app as per your use case. (Be Sure to choose the right version V3)",
                    },

                    {
                      tag_type: "li",
                      text: "Go To created app's  detail page and locate the credentials.",
                    },
                  ],
                },
              ],
            },

            {
              tag_type: "div",
              children: [
                { tag_type: "h2", text: "Project setup" },

                {
                  tag_type: "h4",
                  text: "Client Side Integration",
                },
                {
                  tag_type: "p",
                  text: "Install the MagicChat plugin",
                },
                {
                  tag_type: "p",
                  text: "Add the MagicChat Credentials like below",
                },
                {
                  tag_type: "img",
                  src: "Asset/v2.1_preview.png",
                },

                {
                  tag_type: "p",
                  text: "Verify if you can see the chat utility on your product like below",
                },

                {
                  tag_type: "img",
                  src: "Asset/v2.1_preview.png",
                },

                {
                  tag_type: "video",
                  src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
                  desc: "Demo for P2A_V2.2",
                },

                {
                  tag_type: "div",
                  children: [
                    {
                      tag_type: "h3",
                      text: "Congratulations Integration Should be Successfully Done by now!",
                    },

                    {
                      tag_type: "p",
                      text: "Your users can now sign up and seamlessly chat with the Admin Team, enabling two-way communication.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
  },
};

export default payload;
