// Example payload with additional tags and Lorem Ipsum content
const payload = {
  V1: [
    {
      tag_type: "h2",
      text: `Cloud Managed Auth + Chat (Simple Site)`,
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
              text: "Signup/Login to your account at AddChat.",
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
          tag_type: "p",
          text: "To integrate Chat into your app, do the following:",
        },
        {
          tag_type: "ol",
          items: [
            {
              text: "Signup/Login to your account at AddChat.",
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
              text: "Load the neccessary scripts",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",
                  extra_text:
                    "It should ideally be placed head of the root file.",
                  code: `<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js</script>`,
                },
                {
                  tag_type: "li",
                  text: "Run SetUp",
                  extra_text:
                    "This code should ideally execute on the page where an unauthenticated user is first detected. It is recommended to include it within the UI logic associated with the entry URL, which is typically the root /.",
                  code: `<script>
const token = localStorage.getItem('tezkit_token',null);
if (!token) { //  To check if user is not logged in (based on your product's specific implimentation)
window.chathead.setUp(
(app_name = "<Your App Name>"),
(api_key =
"<Your Api Key>"),
(theme=JSON.stringify({"header_theme":{"backgroundColor":"rgb(30, 136, 125)"}, "chat_opener_theme":{"backgroundColor":"rgb(41 48 78)"}}))
);
}
</script>
`,
                },

                {
                  tag_type: "li",
                  text: "Run initialization",
                  extra_text: `This code should execute as soon as an authenticated user is detected. Ideally, it should run within the UI logic immediately after a logged-in user is identified.
Additionally:

Ensure this code runs only after the previous setup code in your product has completed execution.
To verify the execution order, consider adding log statements both at the setup phase and here for debugging purposes.`,
                  code: `const token = localStorage.getItem('tezkit_token',null);
if (token) {
window.chathead.initialize({"uid": <new_user>}); // uid is mandatory as this will be used to distingush between different users and should be unique for all of them.
}
`,
                },
              ],
            },
            {
              tag_type: "li",
              text: "Verify if you see chat icon on the bottom of your page. like in below image (Client integration should be done by now.)",
              // "more_text": "To add the necessary permissions, in /app/Manifests/AndroidManifest.xml, add the following permissions after </application>:",
              img: "Asset/is_chat_icon_present_for_v2.png",
            },

            {
              text: "Refer to the example code.",
              link_parts: [
                {
                  text: "here",
                  link: "https://github.com/codekeep18feb/examples/tree/website_placeholder_examples/p2a_v2_client/p2a_v2.1_client_jwt",
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
          text: `Since authenticaiton is locally managed by you; whenever a new user has signed up on your platform you should let AddChat know by onbarding them like below.`,
        },

        {
          tag_type: "p",
          text: `Please note: Until users are onboarded, the admin panel will not display any users, even if the application has been created, as shown below.`,
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
          tag_type: "p",
          text: `Should Ideally happens as soon as a new user has signed up on your platform.`,
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
          tag_type: "video",
          src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
          desc: "Demo for P2A_V2.1",
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
              text: "Signup/Login to your account at AddChat.",
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
          text: "Install the AddChat plugin",
        },
        {
          tag_type: "p",
          text: "Add the AddChat Credentials like below",
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
