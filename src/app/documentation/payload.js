// Example payload with additional tags and Lorem Ipsum content
const payload = {
  V1: [
    {
      tag_type: "h2",
      text: `Cloud Managed Auth [V1]`,
    },

{
  tag_type: "p",
  text: `This type of chat application is tailored for simple websites built with HTML, JavaScript, and CSS, typically used as informational sites. It is ideal for scenarios where the existing product lacks built-in authentication but requires the seamless integration of both authentication and chat functionality.
`,
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
          tag_type: "ol",
          items: [
            {
              tag_type: "li",
              text: "Load The Scripts",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",
                  extra_text:
                    "It should ideally be placed head of the root file.",
                  code: '<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>',
                },
                {
                  tag_type: "li",
                  // text: "after script is loaded we can initialize it like below.",
                  // extra_text: "kindly add it below the first script",
                  code: `
<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js">
</script>`,
                },
              ],
            },

            {
              tag_type: "li",
              text: "Running Magicchat Setup Requires two steps",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Step 1 – Initialize on Logged-Out Screens",
                  extra_text:
                    "Run the setUp function when the user is first detected as logged out. This typically applies to your app's landing page or root URL (/), where no authentication token is present.",
                  code: `<script>
  document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("tezkit_token");
    if (!token) {
      window.chathead.setUp(
        "<Your App Name>",
        "<Your API Key>",
        JSON.stringify({
          header_theme: {
            backgroundColor: "rgb(30, 136, 125)" // Customize header background color
          },
          chat_opener_theme: {
            backgroundColor: "rgb(41, 48, 78)" // Customize chat opener background color
          }
        }),
        false, // Enable or disable headless mode
        "/index.html" // Path to the chat widget's iframe container (if applicable)
      );
    }
  });
</script>`,
                },

                {
                  tag_type: "li",
                  text: "Step 2 – Initialize on Logged-In Screens",
                  extra_text:
                    "Run the initialize function on any screen that is accessible after login, where you want the chatbot to appear (e.g., bottom right corner).",
                  code: `<script>
  document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("tezkit_token");
    if (token) {
      window.chathead.initialize(token);
    }
  });
</script>`,
                },
              ],
            },
          ],
        },

        {
          tag_type: "tabs",
          items: [
            {
              label: "HEADER FULL",
              content: [
                {
                  tag_type: "h3",
                  text: "A Header having all the authentication options will be added to your site",
                },

                {
                  tag_type: "p",
                  text: "Set `headerless_mode` to `true` as in the below",
                },

                {
                  tag_type: "code_with_copy",
                  code: `window.chathead.setUp(
      "<Your App Name>", 
      "<Your Api Key>", 
      JSON.stringify({
        "header_theme": {
          "backgroundColor": "rgb(30, 136, 125)" //override the header background Color
        },
        "chat_opener_theme": {
          "backgroundColor": "rgb(41, 48, 78)" //override the chatBox background Color
        }
      }),
      true, // <-- Update this to true if not already
      "/index.html"
    );
         `,
                  language: "bash",
                },
              ],
            },

            {
              label: "HEADER LESS",
              content: [
                {
                  tag_type: "h3",
                  text: "A Header having all the authentication options will be added to your site",
                },

                {
                  tag_type: "p",
                  text: "Set `headerless_mode` to `false` as in the below",
                },

                {
                  tag_type: "code_with_copy",
                  code: `window.chathead.setUp(
      "<Your App Name>", 
      "<Your Api Key>", 
      JSON.stringify({
        "header_theme": {
          "backgroundColor": "rgb(30, 136, 125)" //override the header background Color
        },
        "chat_opener_theme": {
          "backgroundColor": "rgb(41, 48, 78)" //override the chatBox background Color
        }
      }),
      false, // <-- Update this to false if not already
      "/index.html"
    );
         `,
                  language: "bash",
                },

                // {
                //   tag_type: "p",
                //   text: "Insert the following div into any desired location within your HTML page where you want the Authentication Component to appear.",
                // },

                {
                  tag_type: "callout",
                  type: "info",
                  title: "Choose a location to load Authentication Components",
                  children: [
                    {
                      tag_type: "p",
                      text: "Insert the following div into any desired location within your HTML page where you want the Authentication Component to appear.",
                    },
                  ],
                },
                {
                  tag_type: "code_with_copy",
                  // text: "The authentication type is V1 (i.e., your site currently has no built-in authentication), and",
                  // extra_text:
                  // "The authentication type is V1 (i.e., your site currently has no built-in authentication), and",
                  code: `<div id="tezkit-auth-area" style="min-width: 200px;"> </div>`,
                },
              ],
            },
          ],
        },

        {
          tag_type: "callout",
          type: "info",
          title: "Additional Notes",
          children: [
            {
              tag_type: "p",
              text: "If your app uses a common root layout or entry point (e.g., a main index.js or layout component that renders on every route), you can combine both setUp and initialize logic into a single location. This ensures the chat behaves appropriately based on the user's login state without duplicating code across screens.",
            },

            {
              tag_type: "p",
              text: "you can probably find the root file which loads each time despite being on any screen, and you probably can run both (setup, initialize) at once",
              children: [
                {
                  tag_type: "a",
                  href: "https://github.com/codekeep18feb/examples/tree/main/vanila_js_sites/p2a_v1_clients",
                  text: "for example here ",
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
  ],

  V2: [
    {
      tag_type: "h2",
      text: `Locally Managed Auth + Chat (Complex Sites) -  [V2]`,
    },
    {
      tag_type: "p",
      text: `This chat application is designed specifically for complex sites or apps built with JavaScript on both the client and server sides. It is ideal for products that already have built-in authentication and are looking to seamlessly integrate robust chat functionality.`,
    },

    //prerequisite?
    {
      tag_type: "div",
      children: [
        { tag_type: "h2", text: "Prerequisite" },

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
              text: "Create a New App and be sure to select Version V2 during setup.",
            },

            {
              tag_type: "li",
              text: "Navigate to the App Details page and note your: , App Name, API Key, Tenant ID",
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
          text: "To integrate it into your app, Do the following.",
        },

        {
          tag_type: "ol",
          items: [
            {
              tag_type: "li",
              text: "Load The Scripts",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",
                  extra_text:
                    "It should ideally be placed head of the root file.",
                  code: '<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>',
                },
                {
                  tag_type: "li",
                  // text: "after script is loaded we can initialize it like below.",
                  // extra_text: "kindly add it below the first script",
                  code: `
<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js">
</script>`,
                },
              ],
            },

            {
              tag_type: "li",
              text: "Running Magicchat Setup Requires two steps",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Step 1 – Initialize on Logged-Out Screens",
                  extra_text:
                    "Run the setUp function when the user is first detected as logged out. This typically applies to your app's landing page or root URL (/), where no authentication token is present.",
                  code: `<script>
  document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("tezkit_token");
    if (!token) {
      window.chathead.setUp(
        "<Your App Name>",
        "<Your API Key>",
        JSON.stringify({
          header_theme: {
            backgroundColor: "rgb(30, 136, 125)" // Customize header background color
          },
          chat_opener_theme: {
            backgroundColor: "rgb(41, 48, 78)" // Customize chat opener background color
          }
        }),
        false, // Enable or disable headless mode
        "/index.html" // Path to the chat widget's iframe container (if applicable)
      );
    }
  });
</script>`,
                },

                {
                  tag_type: "li",
                  text: "Step 2 – Initialize on Logged-In Screens",
                  extra_text:
                    "Run the initialize function on any screen that is accessible after login, where you want the chatbot to appear (e.g., bottom right corner).",
                  code: `<script>
  document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("tezkit_token");
    if (token) {
      window.chathead.initialize(token);
    }
  });
</script>`,
                },
              ],
            },

            
          ],
        },


 {
          tag_type: "callout",
          type: "info",
          title: "Additional Notes",
          children: [
            {
              tag_type: "p",
              text: "If your app uses a common root layout or entry point (e.g., a main index.js or layout component that renders on every route), you can combine both setUp and initialize logic into a single location. This ensures the chat behaves appropriately based on the user's login state without duplicating code across screens.",
            },

            {
              tag_type: "p",
              text: "you can probably find the root file which loads each time despite being on any screen, and you probably can run both (setup, initialize) at once",
              children: [
                {
                  tag_type: "a",
                  href: "https://github.com/codekeep18feb/examples/tree/main/vanila_js_sites/p2a_v1_clients",
                  text: "for example here ",
                },
              ],
            },
          ],
        },
        //Backend side integration

        {
          tag_type: "h3",
          text: "Backend Integration",
        },
        {
          tag_type: "h3",
          text: "Onboarding api",
        },
      
        {
          tag_type: "p",
          text: `To ensure users can access chat features and are visible in the MagicChat Admin Panel, you must onboard them upon registration.`,
        },

        {
          tag_type: "img",
          src: "Asset/no_users_admin.png",
        },

        {
          tag_type: "h3",
          text: `Ways to Onboard Users`,
        },

       

        {
          tag_type: "feature_options",
          options: [
            {
              text: "Via Backend",
              description: [
                {
                  tag_type: "h3",
                  text: "Using Rest /signup Api Endpoint",
                },

                {
                  tag_type: "h3",
                  text: "Now this has changed to https://auth.magicchat.io/prod/onboarding",
                },

                {
                  tag_type: "div",
                  children: [

                  
                    {
                      tag_type: "img",
                      src: "Asset/onboarding_via_rest_endpoint_payload.png",
                    },

                    {
                      tag_type: "img",
                      src: "Asset/onboarding_via_rest_endpoint_headers.png",
                    },
                  ],
                  extra_text: "Please find the curl below.",
                  code: `curl --location 'https://gfxb0jf19k.execute-api.ap-south-1.amazonaws.com/prod/onboarding' \
--header 'X-API-Key: bGVnYWwxMjNfX1NFUFJBVE9SX192MmFwcDE=' \
--header 'tenant_id: legal123' \
--header 'app_name: v2app1' \
--header 'Content-Type: application/json' \
--data '{
"tenant":"legal123",
"uid":"new_site_user1",
"app_name":"v2app1"
}'`,
                },
              ],
            },
            {
              text: "Via Frontend",
              description: [
                {
                  tag_type: "div",
                  children: [],
                  extra_text:
                    "Using chathead.onboarding() method on the client side.",
                  code: `await window.chathead.onboarding({"uid":data.username,},{
        "auth_key": "bGVnYWwxMjNfX1NFUFJBVE9SX192MmFwcDE=",
        "tenant_id": "legal123",
        "app_name": "v2app1",
    })`,
                },
              ],
            },

            {
              text: "Via Admin",
              description: [
                {
                  tag_type: "h3",
                  text: "Users can be onboarded and their respective password can be shared with them.",
                },

                {
                  tag_type: "img",
                  src: "Asset/onboarding_via_admin.png",
                },
              ],
            },
          ],
        },

        {
          tag_type: "mesgTip",
          title: "Tip:",
          children: [
          {
          tag_type: "p",
          text: "Ensure you call the onboarding API immediately after user signup. Legacy or missed users can be added via batch API methods—contact support for more details.",
          },
          ],
          },
          
        {
          tag_type: "video",
          src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
          desc: "Demo for V2",
        },
      ],
    },
  ],
  V3: [
    {
      tag_type: "h2",
      text: `Locally Managed Auth + Chat (Wordpress)`,
    },
    {
      tag_type: "p",
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
          src: "Asset/add_credentials_wp.png",
        },

        {
          tag_type: "p",
          text: "Verify if you can see the chat utility on your product like below",
        },

        {
          tag_type: "img",
          src: "Asset/fashoni_chat_opener_visible.png",
        },

        {
          tag_type: "video",
          src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
          desc: "Demo for P2A_V2.2",
        },
      ],
    },
  ],
};
export default payload;
