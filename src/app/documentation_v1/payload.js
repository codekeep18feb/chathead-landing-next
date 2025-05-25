// Example payload with additional tags and Lorem Ipsum content
const payload = [
  {
    tag_type: "h2",
    text: `Cloud Managed Auth + Chat (Simple Site)`,
  },
  {
    tag_type: "p",
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
                        code: `<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js"></script>`,
                      },

                      {
                        tag_type: "li",
                        text: "Run Setup & Initialization together",
                        extra_text:
                          "Since this a simple site having one root file (index.html) we can run both (Setup & Initialization) together; Above is an example of it using LocalStorage But the same is applicable for cookies and SessionStorage",
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
  "backgroundColor": "rgb(30, 136, 125)" //to override the header background Color
},
"chat_opener_theme": {
  "backgroundColor": "rgb(41, 48, 78)" //to override the chatBox background Color
}
}),
false, // for HEADLESS MODE
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
                    text: "Verify the Results!",
                    more_text:
                      "Kindly verify if you see the header on the top of your page and chat icon on the bottom of your page. like in below image ",
                    img: "Asset/headerful_example.png",
                  },

                  {
                    text: "Refer to the example code here.",
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
                        code: `<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js"></script>`,
                      },

                      {
                        tag_type: "li",
                        text: "Run Setup & Initialization together",
                        extra_text:
                          "Since this a simple site having one root file (index.html) we can run both (Setup & Initialization) together; Above is an example of it using LocalStorage But the same is applicable for cookies and SessionStorage",
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
  "backgroundColor": "rgb(30, 136, 125)" //to override the header background Color
},
"chat_opener_theme": {
  "backgroundColor": "rgb(41, 48, 78)" //to override the chatBox background Color
}
}),
true, // for HEADLESS MODE
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
                    text: "Point the Location to show the to place the Authentication Components.",
                    extra_text:
                      "Insert the following div into any desired location within your HTML page where you want the Authentication Component to appear.",
                    code: `<div id="tezkit-auth-area" style="min-width: 200px;"> </div>`,
                  },

                  {
                    tag_type: "li",
                    text: "Verify the Results!",
                    more_text:
                      "Kindly verify if you see the header on the top of your page and chat icon on the bottom of your page. like in below image ",
                    img: "Asset/headerful_example.png",
                  },

                  {
                    text: "Refer to the example code here.",
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
                desc: "Demo for P2A V1 [HeadLess]",
              },
              // {
              //   tag_type: "div",
              //   children: [
              //     {
              //       tag_type: "div",
              //       children: [
              //         {
              //           tag_type: "video",
              //           src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
              //           desc: "Demo for P2A V1 [HeadLess]",
              //         },
              //       ],
              //     },
              //   ],
              // },
            ],
          },
        ],
      },
    ],
  },
]

export default payload;
