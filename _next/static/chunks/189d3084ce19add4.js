(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,24213,e=>{e.v({active:"filterSty-module__wJATaG__active","button-group":"filterSty-module__wJATaG__button-group","filter-container":"filterSty-module__wJATaG__filter-container","filter-group":"filterSty-module__wJATaG__filter-group","filter-header":"filterSty-module__wJATaG__filter-header",filterIcon:"filterSty-module__wJATaG__filterIcon",filterIconWrapper:"filterSty-module__wJATaG__filterIconWrapper","mobile-dropdown-wrapper":"filterSty-module__wJATaG__mobile-dropdown-wrapper","option-button":"filterSty-module__wJATaG__option-button","option-container":"filterSty-module__wJATaG__option-container","options-list":"filterSty-module__wJATaG__options-list","show-on-mobile":"filterSty-module__wJATaG__show-on-mobile","submit-btn":"filterSty-module__wJATaG__submit-btn"})},27818,e=>{e.v({accordion:"renderingToolSty-module__g0G2pa__accordion","accordion-content":"renderingToolSty-module__g0G2pa__accordion-content",accordionHeader:"renderingToolSty-module__g0G2pa__accordionHeader",active:"renderingToolSty-module__g0G2pa__active","api-table":"renderingToolSty-module__g0G2pa__api-table",breadcrumbs:"renderingToolSty-module__g0G2pa__breadcrumbs",callout:"renderingToolSty-module__g0G2pa__callout","callout-header":"renderingToolSty-module__g0G2pa__callout-header","callout-info":"renderingToolSty-module__g0G2pa__callout-info","code-with-copy":"renderingToolSty-module__g0G2pa__code-with-copy",collapseIcon:"renderingToolSty-module__g0G2pa__collapseIcon",collapseIconExpanded:"renderingToolSty-module__g0G2pa__collapseIconExpanded",collapsed:"renderingToolSty-module__g0G2pa__collapsed","content-area":"renderingToolSty-module__g0G2pa__content-area","content-blockquote":"renderingToolSty-module__g0G2pa__content-blockquote","content-code":"renderingToolSty-module__g0G2pa__content-code","content-div":"renderingToolSty-module__g0G2pa__content-div","content-heading":"renderingToolSty-module__g0G2pa__content-heading","content-inner-heading":"renderingToolSty-module__g0G2pa__content-inner-heading","content-link":"renderingToolSty-module__g0G2pa__content-link","content-list":"renderingToolSty-module__g0G2pa__content-list","content-list-img":"renderingToolSty-module__g0G2pa__content-list-img","content-list-item":"renderingToolSty-module__g0G2pa__content-list-item","content-paragraph":"renderingToolSty-module__g0G2pa__content-paragraph",contentHeaderWrap:"renderingToolSty-module__g0G2pa__contentHeaderWrap","copy-button":"renderingToolSty-module__g0G2pa__copy-button",description:"renderingToolSty-module__g0G2pa__description",docTable:"renderingToolSty-module__g0G2pa__docTable",docTableBodyCell:"renderingToolSty-module__g0G2pa__docTableBodyCell",docTableBodyRow:"renderingToolSty-module__g0G2pa__docTableBodyRow",docTableHeadCell:"renderingToolSty-module__g0G2pa__docTableHeadCell",docTableHeadRow:"renderingToolSty-module__g0G2pa__docTableHeadRow",downIcon:"renderingToolSty-module__g0G2pa__downIcon",downIconExpanded:"renderingToolSty-module__g0G2pa__downIconExpanded","dropdown-select":"renderingToolSty-module__g0G2pa__dropdown-select","expand-icon":"renderingToolSty-module__g0G2pa__expand-icon",expanded:"renderingToolSty-module__g0G2pa__expanded",leftBorder:"renderingToolSty-module__g0G2pa__leftBorder",liSubItems:"renderingToolSty-module__g0G2pa__liSubItems",li_subLi:"renderingToolSty-module__g0G2pa__li_subLi","mesg-title":"renderingToolSty-module__g0G2pa__mesg-title",messageTipWrap:"renderingToolSty-module__g0G2pa__messageTipWrap",ordered:"renderingToolSty-module__g0G2pa__ordered",pacontentHeaderWraprent:"renderingToolSty-module__g0G2pa__pacontentHeaderWraprent",script_code:"renderingToolSty-module__g0G2pa__script_code",second_subheading:"renderingToolSty-module__g0G2pa__second_subheading",separator:"renderingToolSty-module__g0G2pa__separator",setup:"renderingToolSty-module__g0G2pa__setup",sidebarLi:"renderingToolSty-module__g0G2pa__sidebarLi",step:"renderingToolSty-module__g0G2pa__step","step-number":"renderingToolSty-module__g0G2pa__step-number",steps:"renderingToolSty-module__g0G2pa__steps","tab-button":"renderingToolSty-module__g0G2pa__tab-button","tab-buttons":"renderingToolSty-module__g0G2pa__tab-buttons","tab-content":"renderingToolSty-module__g0G2pa__tab-content",tabs:"renderingToolSty-module__g0G2pa__tabs","tabs-container":"renderingToolSty-module__g0G2pa__tabs-container",videos_wrapper:"renderingToolSty-module__g0G2pa__videos_wrapper","view-full-implementation":"renderingToolSty-module__g0G2pa__view-full-implementation"})},15115,25137,7686,e=>{"use strict";var t=e.i(84414),a=e.i(7431),o=e.i(24213),n=e.i(63525);e.s(["default",0,({setSelectedFilter:e,initialVersionType:i})=>{let s,r,[l,c]=(0,a.useState)(null),[d,p]=(0,a.useState)(i||"V2"),[u,g]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{g(window.innerWidth<=885)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,a.useEffect)(()=>{e({app_type:l,version_type:d})},[d,l,e]),(0,t.jsx)("div",{className:o.default["filter-container"],children:(0,t.jsx)("div",{className:o.default["options-list"],children:(0,t.jsxs)("div",{className:o.default["filter-group"],children:[(0,t.jsxs)("div",{className:o.default["filter-header"],children:[(0,t.jsx)("h3",{children:"Select Version Type"}),(0,t.jsx)("div",{className:o.default.filterIconWrapper,children:(0,t.jsx)(n.IoFilter,{className:o.default.filterIcon,onClick:()=>g(e=>!e)})})]}),(0,t.jsx)("div",{className:`${o.default["button-group"]} ${u?o.default["show-on-mobile"]:""}`,children:(s=[{key:"V2",label:"BYO Auth Chat"}],r=e=>{p(e),g(!1)},s.map(({key:e,label:a})=>(0,t.jsx)("button",{className:`${o.default["option-button"]} ${d===e?o.default.active:""}`,onClick:()=>r(e),type:"button",children:a},e)))})]})})})}],15115);var i=e.i(27818);e.i(86926);let s=({src:e,desc:a})=>{let o,n=(o=e.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/))?o[1]:null;return n?(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:a}),(0,t.jsx)("div",{className:"videos",children:(0,t.jsx)("iframe",{width:"100%",height:"auto",style:{aspectRatio:"16/9",border:"none"},src:`https://www.youtube.com/embed/${n}`,title:a,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]}):(0,t.jsx)("p",{children:"Error: Invalid YouTube URL"})};var r=e.i(36033),l=e.i(81019);function c(e){return(0,l.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"},child:[]}]})(e)}function d(e){return(0,l.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"},child:[]}]})(e)}function p(e){return(0,l.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"},child:[]}]})(e)}e.s(["IoIosArrowDown",()=>c,"IoMdArrowRoundBack",()=>d,"IoMdArrowRoundForward",()=>p],25137);let u=e=>String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),g=e=>{if(null==e)return"";let t=[],a=u(String(e).replace(/\[\[\[([\s\S]*?)\]\]\]/g,(e,a)=>(t.push(a),`\u0000BLOCK${t.length-1}\u0000`))).replace(/\[\[(.+?)\]\]/g,'<span class="ph">$1</span>');return a.replace(/\u0000BLOCK(\d+)\u0000/g,(e,a)=>{let o=u(t[Number(a)]);return`<span class="ph-block">${o}</span>`})},h=({children:e})=>(0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:g(e)}}),y=(0,a.createContext)(null),_=["h1","h2","h3","h4","p","div","img","a","blockquote","ul","li","code","ol","table","accordion","breadcrumbs","code_with_copy","callout","steps","tabs","tooltip","pagination","kbd","text","side_nav","search","mermaid_diagram","api_table","mesgTip","strong"],m=(e,a)=>{if(!a||0===a.length)return(0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:g(e)}});let o=[],n=0;return a.forEach((a,i)=>{let s=e.indexOf(a.text,n);s>-1&&(s>n&&o.push((0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:g(e.substring(n,s))}},`txt-${i}`)),o.push((0,t.jsx)("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",children:a.text},`link-${i}`)),n=s+a.text.length)}),n<e.length&&o.push((0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:g(e.substring(n))}},"txt-tail")),o},f=({r_options:e})=>{let[o,n]=(0,a.useState)(e[0]?.text),[s,r]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=()=>{r(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let l=e=>{n(e)},c=e.find(e=>e.text===o)?.description;return(0,t.jsxs)("div",{className:i.default.setup,children:[s?(0,t.jsx)("div",{className:i.default.dropdown,children:(0,t.jsx)("select",{value:o||"",onChange:e=>l(e.target.value),className:i.default["dropdown-select"],children:e.map((e,a)=>(0,t.jsx)("option",{value:e.text,children:e.text},a))})}):(0,t.jsx)("div",{className:i.default.tabs,children:e.map((e,a)=>(0,t.jsx)("button",{className:`${i.default["tab-button"]} ${o===e.text?i.default.active:""}`,onClick:()=>l(e.text),children:(0,t.jsx)(h,{children:e.text})},a))}),(0,t.jsx)("div",{className:i.default.description,children:(0,t.jsx)(q,{content:c})})]})},b=({type:e="info",title:a,children:o})=>(0,t.jsxs)("div",{className:`${i.default.callout} ${i.default[`callout-${e}`]}`,children:[(0,t.jsx)("div",{className:i.default["callout-header"],children:a&&(0,t.jsx)("h4",{className:i.default["callout-title"],children:(0,t.jsx)(h,{children:a})})}),(0,t.jsx)("div",{className:i.default["callout-content"],children:o})]}),w=({title:e,children:a})=>(0,t.jsxs)("div",{className:i.default.messageTipWrap,children:[(0,t.jsx)("div",{className:i.default.leftBorder}),(0,t.jsxs)("div",{className:i.default["mesg-title"],children:[e&&(0,t.jsx)("strong",{children:(0,t.jsx)(h,{children:e})}),(0,t.jsx)("div",{className:i.default["mesg-content"],children:a})]})]}),x=({items:e})=>(0,t.jsx)("div",{className:i.default.steps,children:e.map((e,a)=>(0,t.jsxs)("div",{className:i.default.step,children:[(0,t.jsx)("div",{className:i.default["step-number"],children:a+1}),(0,t.jsxs)("div",{className:i.default["step-content"],children:[e.title&&(0,t.jsx)("h4",{className:i.default["step-title"],children:(0,t.jsx)(h,{children:e.title})}),(0,t.jsx)("div",{className:i.default["step-description"],children:(0,t.jsx)(q,{content:e.content})})]})]},a))}),v=({items:e})=>{let[o,n]=(0,a.useState)(0);return(0,t.jsxs)("div",{className:i.default["tabs-container"],children:[(0,t.jsx)("div",{className:i.default["tab-buttons"],children:e.map((e,a)=>(0,t.jsx)("button",{className:`${i.default["tab-button"]} ${a===o?i.default.active:""}`,onClick:()=>n(a),children:(0,t.jsx)(h,{children:e.label})},a))}),(0,t.jsx)("div",{className:i.default["tab-content"],children:(0,t.jsx)(q,{content:e[o].content})})]})},k=({content:e,children:o})=>{let[n,i]=(0,a.useState)(!1);return(0,t.jsxs)("div",{className:"tooltip-wrapper",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[(0,t.jsx)(q,{content:[o]}),n&&(0,t.jsx)("div",{className:"tooltip",children:(0,t.jsx)(q,{content:e})})]})},S=({items:e})=>{let[o,n]=(0,a.useState)(!0);return(0,t.jsxs)("div",{className:`side-nav ${o?"open":"collapsed"}`,children:[(0,t.jsx)("button",{className:"nav-toggle",onClick:()=>n(!o),children:o?"◀":"▶"}),o&&(0,t.jsx)("nav",{children:e.map(e=>(0,t.jsx)("a",{href:`#${e.id}`,className:"nav-item",children:e.label},e.id))})]})},A=()=>{let[e,o]=(0,a.useState)("");return(0,t.jsxs)("div",{className:"doc-search",children:[(0,t.jsx)("input",{type:"text",placeholder:"Search documentation...",value:e,onChange:e=>o(e.target.value)}),(0,t.jsx)("button",{className:"search-button",children:"🔍"})]})},T=({code:e})=>((0,a.useEffect)(()=>{window.mermaid?.initialize({startOnLoad:!0}),window.mermaid?.init()},[e]),(0,t.jsx)("div",{className:"mermaid",children:e})),I=({currentPage:e,totalPages:o})=>{let[n,i]=(0,a.useState)(e);return(0,t.jsx)("div",{className:"pagination",children:Array.from({length:o},(e,a)=>(0,t.jsx)("button",{className:`page-number ${a+1===n?"active":""}`,onClick:()=>{var e;i(e=a+1),console.log("Page changed to:",e)},children:a+1},a))})},P=({keys:e})=>(0,t.jsx)("span",{className:"kbd-container",children:e.map((o,n)=>(0,t.jsxs)(a.default.Fragment,{children:[(0,t.jsx)("kbd",{className:"kbd-key",children:o}),n<e.length-1&&(0,t.jsx)("span",{className:"kbd-plus",children:"+"})]},o))}),E=({code:e,language:o})=>{let[n,s]=(0,a.useState)(!1),r=null==e?"":String(e).replace(/\[\[\[([\s\S]*?)\]\]\]/g,"$1").replace(/\[\[(.+?)\]\]/g,"$1"),l=g(e);return(0,t.jsxs)("div",{className:i.default["code-with-copy"],children:[(0,t.jsx)("pre",{className:i.default.script_code,children:(0,t.jsx)("code",{dangerouslySetInnerHTML:{__html:l}})}),(0,t.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(r).then(()=>{s(!0),setTimeout(()=>s(!1),2e3)})},className:i.default["copy-button"],children:n?"✓ Copied":"📋 Copy"})]})},C=({title:e,children:o})=>{let[n,s]=(0,a.useState)(!1);return(0,t.jsxs)("div",{className:i.default.accordion,children:[(0,t.jsxs)("button",{className:`${i.default.accordionHeader} ${n?i.default.open:""}`,onClick:()=>s(!n),children:[(0,t.jsx)(h,{children:e}),(0,t.jsx)("span",{className:"accordion-icon",children:n?"▼":"▶"})]}),n&&(0,t.jsx)("div",{className:i.default["accordion-content"],children:o})]})},j=({headers:e,rows:a})=>(0,t.jsxs)("table",{className:i.default.docTable,children:[(0,t.jsx)("thead",{className:i.default.docTableHead,children:(0,t.jsx)("tr",{className:i.default.docTableHeadRow,children:e.map((e,a)=>(0,t.jsx)("th",{className:i.default.docTableHeadCell,children:(0,t.jsx)(h,{children:e})},a))})}),(0,t.jsx)("tbody",{className:i.default.docTableBody,children:a.map((e,a)=>(0,t.jsx)("tr",{className:i.default.docTableBodyRow,children:e.map((e,a)=>(0,t.jsx)("td",{className:i.default.docTableBodyCell,children:(0,t.jsx)(h,{children:e})},a))},a))})]}),N=({items:e})=>(0,t.jsx)("nav",{className:"breadcrumbs",children:(0,t.jsx)("ol",{children:e.map((a,o)=>(0,t.jsxs)("li",{children:[a.href?(0,t.jsx)("a",{href:a.href,children:(0,t.jsx)(h,{children:a.label})}):(0,t.jsx)("span",{children:(0,t.jsx)(h,{children:a.label})}),o<e.length-1&&(0,t.jsx)("span",{className:"separator",children:"/"})]},o))})}),R=({items:e,listType:a,collapsable:o,fcNonCollapsable:n,depth:s=0})=>"ol"===a?(0,t.jsx)("ol",{className:`${i.default["content-list"]} ${i.default.ordered}`,children:e.map((e,i)=>(0,t.jsx)(O,{item:e,listType:a,collapsable:o,fcNonCollapsable:n,depth:s},i))}):(0,t.jsx)("ul",{className:i.default["content-list"],children:e.map((e,i)=>(0,t.jsx)(O,{item:e,listType:a,collapsable:o,fcNonCollapsable:n,depth:s},i))}),O=({item:e,listType:o,collapsable:n,fcNonCollapsable:s,depth:l})=>{let d=(0,a.useContext)(y),[p,u]=(0,a.useState)(void 0!==e.default_expanded?e.default_expanded:l<1),h=e.sub_items&&e.sub_items.length>0,_=n&&h&&l>=1,f=h&&0===l,b=e=>{e.stopPropagation(),(_||f)&&u(!p)};return(0,t.jsxs)("li",{style:{cursor:_||f?"pointer":"default",listStyleType:"none",position:"relative"},children:[_&&(0,t.jsx)("span",{onClick:b,className:`${i.default.collapseIcon} ${p?i.default.collapseIconExpanded:""}`,children:(0,t.jsx)(c,{size:16})}),(0,t.jsx)("div",{children:"string"==typeof e?(0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:g(e)}}):(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:i.default.contentHeaderWrap,children:[e.text&&(0,t.jsx)("div",{children:(0,t.jsx)("span",{children:m(e.text,e.link_parts)})}),(_||f)&&(0,t.jsx)("span",{onClick:b,className:`${i.default.downIcon} ${p?i.default.downIconExpanded:""}`,children:(0,t.jsx)(c,{size:16})}),(()=>{if(!e.link_configuration?.show)return null;let a=e.link_configuration;return"internal"===a.type?(0,t.jsx)("button",{onClick:e=>{var t;let o;e.stopPropagation(),console.log("Looking for element with selector:",t=a.selector_uid),console.log("Found element:",o=document.getElementById(t)),o?o.scrollIntoView({behavior:"smooth",block:"start"}):console.warn(`Element with ID "${t}" not found`),d&&d()},className:`${i.default["content-link"]} ${i.default.internal}`,title:"Scroll to section",children:(0,t.jsx)(r.FaLink,{size:16})}):(0,t.jsx)("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:`${i.default["content-link"]} ${i.default.external}`,title:"Open in new tab",children:"🔗"})})()]}),e.code&&(0,t.jsx)("pre",{className:i.default.script_code,children:(0,t.jsx)("code",{children:e.code})})]})}),h&&(0,t.jsx)("div",{style:{display:p?"block":"none",margin:"5px"},className:i.default.liSubItems,children:e.sub_items[0]?.tag_type==="li"?(0,t.jsx)("ul",{className:i.default["content-list"],children:(0,t.jsx)(q,{content:e.sub_items})}):(0,t.jsx)(q,{content:e.sub_items})})]})},U=({properties:e})=>(0,t.jsxs)("table",{className:"api-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Type"}),(0,t.jsx)("th",{children:"Default"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsx)("tbody",{children:e.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:(0,t.jsx)(h,{children:e.name})})}),(0,t.jsx)("td",{children:(0,t.jsx)("em",{children:(0,t.jsx)(h,{children:e.type})})}),(0,t.jsx)("td",{children:(0,t.jsx)(h,{children:e.default||"-"})}),(0,t.jsx)("td",{children:(0,t.jsx)(h,{children:e.description})})]},e.name))})]}),q=({content:e})=>{let o=(0,a.useContext)(y);return console.log("contenterewr",e),(0,t.jsx)("div",{className:`${i.default.contents} ${i.default.sidebarContentclass}`,children:e?.map((e,n)=>{let l=_.includes(e.tag_type)?e.tag_type:"div";switch(e.tag_type){case"img":return(0,t.jsx)("div",{className:i.default["content-list-img"],children:(0,t.jsx)("img",{src:e.src,alt:e.alt||""})},n);case"video":return(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:i.default.videos_wrapper,children:(0,t.jsx)(s,{src:e.src,desc:e.desc})})},n);case"h2":if(e.hasOwnProperty("selector_uid"))return(0,t.jsx)("h2",{className:i.default["content-heading"],id:e.selector_uid,children:(0,t.jsx)(h,{children:e.text})},n);return(0,t.jsx)("h2",{className:i.default["content-heading"],children:(0,t.jsx)(h,{children:e.text})},n);case"h4":return(0,t.jsx)("h2",{className:i.default["content-inner-heading"],id:e.selector_uid,children:(0,t.jsx)(h,{children:e.text})},n);case"side_nav":return(0,t.jsx)(S,{items:e.items},n);case"search":return(0,t.jsx)(A,{},n);case"mermaid_diagram":return(0,t.jsx)(T,{code:e.code},n);case"api_table":return(0,t.jsx)(U,{properties:e.properties},n);case"feature_options":return(0,t.jsx)(f,{r_options:e.options},n);case"callout":return(0,t.jsx)(b,{type:e.type,title:e.title,children:(0,t.jsx)(q,{content:e.children})},n);case"mesgTip":return(0,t.jsx)(w,{title:e.title,children:(0,t.jsx)(q,{content:e.children})},n);case"steps":return(0,t.jsx)(x,{items:e.items},n);case"tabs":return(0,t.jsx)(v,{items:e.items},n);case"tooltip":return(0,t.jsx)(k,{content:e.content,children:(0,t.jsx)(q,{content:e.children})},n);case"pagination":return(0,t.jsx)(I,{currentPage:e.currentPage,totalPages:e.totalPages},n);case"kbd":return(0,t.jsx)(P,{keys:e.keys},n);case"text":return(0,t.jsx)(h,{children:e.text},n);case"p":return(0,t.jsxs)("div",{className:i.default["content-paragraph"],children:[e.text&&m(e.text,e.link_parts),e.children&&(0,t.jsx)("div",{className:"p-children",children:(0,t.jsx)(q,{content:e.children})})]},n);case"h3":return(0,t.jsx)("h3",{className:i.default.second_subheading,id:e.selector_uid,children:(0,t.jsx)(h,{children:e.text})},n);case"a":return(0,t.jsx)("button",{className:i.default["view-full-implementation"],children:(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:i.default["content-link"],children:e.text},n)},n);case"ul":case"ol":return(0,t.jsx)(R,{items:e.items,listType:e.tag_type,collapsable:e.property?.collapse?.collapsable,fcNonCollapsable:e.property?.collapse?.fc_non_collapsable},n);case"blockquote":return(0,t.jsx)("blockquote",{className:"content-blockquote",children:(0,t.jsx)(h,{children:e.text})},n);case"table":return(0,t.jsx)(j,{headers:e.headers,rows:e.rows},n);case"accordion":return(0,t.jsx)(C,{title:e.title,children:(0,t.jsx)(q,{content:e.children})},n);case"breadcrumbs":return(0,t.jsx)(N,{items:e.items},n);case"code_with_copy":return(0,t.jsx)(E,{code:e.code,language:e.language},n);case"code":return e.show_copy?(0,t.jsx)(E,{code:e.text,language:e.language},n):(0,t.jsx)("pre",{className:i.default["content-code"],children:(0,t.jsx)("code",{children:e.text})},n);case"li":{let[s,l]=(0,a.useState)(!1),d=e.sub_items&&e.sub_items.length>0;return(0,t.jsxs)("li",{className:i.default["content-list-item"],children:[(0,t.jsxs)("div",{className:i.default.sidebarLi,children:[e.text&&(0,t.jsx)(h,{children:e.text}),d&&(0,t.jsx)("span",{onClick:()=>l(!s),className:`${i.default["expand-icon"]} ${s?i.default.expanded:i.default.collapsed}`,children:(0,t.jsx)(c,{size:16})}),e.link_configuration&&(e=>{if(!e.link_configuration?.show)return null;let a=e.link_configuration;return"internal"===a.type?(0,t.jsx)("button",{onClick:e=>{e.stopPropagation();try{let e=document.getElementById(a.selector_uid);e&&e.scrollIntoView({behavior:"smooth"})}catch(e){console.error("Scroll error:",e)}o&&o()},className:`${i.default["content-link"]} ${i.default.internal}`,title:"Scroll to section",children:(0,t.jsx)(r.FaLink,{size:16})}):(0,t.jsx)("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:`${i.default["content-link"]} ${i.default.external}`,title:"Open in new tab",children:"🔗"})})(e)]}),e.code&&(0,t.jsx)("pre",{className:"script_code",children:(0,t.jsx)("code",{children:e.code})}),d&&(0,t.jsx)("div",{className:i.default.li_subLi,style:{display:s?"block":"none"},children:e.sub_items[0]?.tag_type==="li"?(0,t.jsx)("ul",{className:i.default["content-list"],children:(0,t.jsx)(q,{content:e.sub_items})}):(0,t.jsx)(q,{content:e.sub_items})})]},n)}case"div":return(0,t.jsxs)("div",{className:e.className||i.default["content-div"],children:[e.text&&(0,t.jsx)(h,{children:e.text}),e.children&&(0,t.jsx)(q,{content:e.children}),e.extra_text&&(0,t.jsx)("div",{children:(0,t.jsx)(h,{children:e.extra_text})}),e.code&&(0,t.jsx)("pre",{className:i.default.script_code,children:(0,t.jsx)("code",{children:e.code})})]},n);default:return(0,t.jsx)(l,{className:`content-${e.tag_type}`,dangerouslySetInnerHTML:{__html:g(e.text)}},n)}})})};e.s(["SidebarLinkContext",0,y,"default",0,q],7686)},53632,48651,e=>{"use strict";let t=((...e)=>e.flat().filter(Boolean))([{tag_type:"h2",text:"[V2] BYO (Bring Your Own) Auth + Chat",selector_uid:"v2_byo"},{tag_type:"p",text:"Designed for products with their own backend and authentication, this version gives you full control over user onboarding, syncing, and logout while seamlessly integrating powerful Sageion capabilities."}],[{tag_type:"div",children:[{tag_type:"h3",text:"Prerequisite",selector_uid:"v2_prerequisites"},{tag_type:"ol",items:[{text:"Sign up / log in to your Sageion account."},{tag_type:"li",text:"Create a New App and select Version V2 during setup."},{tag_type:"li",text:"Open the App Details page and note your: App Name, API Key, and Region (US or IN)."}]}]}],[{tag_type:"div",children:[{tag_type:"h2",text:"Project setup",selector_uid:"v2_client_integration"},{tag_type:"h4",text:"Client Side Integration"},{tag_type:"p",text:"Sageion boots in two ordered phases: [[setUp()]] prepares configuration and storage, and [[initialize()]] authenticates the user and mounts the chat UI. Pick your framework below, then pick the integration style that matches your app's structure."},{tag_type:"callout",type:"warning",title:"⚠️ Lifecycle contract — read before you split anything",children:[{tag_type:"ol",items:[{text:"[[setUp()]] must resolve before [[initialize()]] is called. [[initialize()]] reads the [[setup_done]] flag written by [[setUp()]] and refuses to run without it."},{text:"Both functions throw a [[SageionSetupError]] on failure. Each also renders an error popup with a Reset Settings button."},{text:'Never place [[setUp()]] and [[initialize()]] in two independent DOMContentLoaded listeners. DOM listeners do not chain await — [[initialize()]] will fire while [[setUp()]] is still in flight, and the SDK will reject it with "[[initialize ran before setUp could finish.]]"'},{text:"To split them across scripts, bridge them with a shared promise (see the Two-Block tab)."}]},{tag_type:"p",text:'You can inspect the current phase at any time with [[window.magicchat_io.getSetupStatus()]], which returns one of: "[[idle]]" | "[[pending]]" | "[[done]]" | "[[failed]]".'}]},{tag_type:"div",className:"custom-ordered-list",children:[{tag_type:"div",className:"custom-list-item",children:[{tag_type:"div",className:"list-item-header",text:"1. Load The Scripts"},{tag_type:"div",className:"sub-items-container",children:[{tag_type:"div",children:[{tag_type:"p",text:"Locate the main entry file (typically index.html) and insert the following scripts. Socket.IO must load before the Sageion bundle."},{tag_type:"code_with_copy",code:`<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
<script src="/node_modules/chathead-consumer-client/dist/bundle.js"></script>`,language:"html"},{tag_type:"p",text:"Or, if you prefer the CDN build:"},{tag_type:"code_with_copy",code:`<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
<script src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"></script>`,language:"html"},{tag_type:"callout",type:"info",title:"SDK global",children:[{tag_type:"p",text:"Loading the bundle exposes [[window.magicchat_io]]. Every example below uses that global."}]}]}]}]}]},{tag_type:"div",className:"custom-list-item",children:[{tag_type:"h3",className:"list-item-header",text:"2. Decide how to place the Sageion chat box in your app."}]},{tag_type:"p",text:"Pick your framework below. Inside each framework, choose the integration style that matches your app's structure."},{tag_type:"tabs",items:[{label:"Vanilla JS",content:[{tag_type:"p",text:"Plain HTML + JavaScript. Choose one of the three integration styles below."},{tag_type:"tabs",items:[{label:"Single-Block (Recommended)",content:[{tag_type:"h4",text:"Single-Block Implementation"},{tag_type:"p",text:"One async flow, both calls awaited in order. This is the simplest, safest setup and is what most apps should use."},{tag_type:"p",text:"Use this when your app has a single entry HTML file and the chat box should appear across all routes."},{tag_type:"code_with_copy",code:`<script>
  (async () => {
    try {
      [[[await window.magicchat_io.setUp(
        "your_app_name",                 // app_name
        "YOUR_API_KEY",                  // api_key (base64)
        "US",                            // region: "US" | "IN"
        "sageion-chat-root"              // chat_root_id (optional)
      );]]]

      // Optional: resolve uid from your own auth
      const token = localStorage.getItem("token");
      let payload = {};
      if (token) {
        const res = await fetch(\`\${window.__APP_CONFIG__.API_BASE_URL}/auth/profile\`, {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        if (res.ok) {
          const user = await res.json();
          payload = { uid: user.id.toString() };
        } else {
          localStorage.removeItem("token");
        }
      }

      [[[await window.magicchat_io.initialize(payload);]]]

      [[[console.log("Sageion ready. Status:", window.magicchat_io.getSetupStatus());]]]
    } catch (err) {
      // The SDK already rendered an error popup. Log for diagnostics only.
      console.error("[Sageion] bootstrap failed:", err);
    }
  })();
</script>`,language:"javascript"},{tag_type:"callout",type:"success",title:"Minimal form",children:[{tag_type:"p",text:"Only the first three arguments are required. [[chat_root_id]] has a sensible default — most apps can simply write:"},{tag_type:"code_with_copy",code:'[[[await window.magicchat_io.setUp("your_app_name", "YOUR_API_KEY", "US");]]]',language:"javascript"}]},{tag_type:"callout",type:"warning",title:"Don't split across two DOMContentLoaded listeners",children:[{tag_type:"p",text:'Two separate document.addEventListener("DOMContentLoaded", …) blocks do not chain their awaits. [[initialize()]] will run before [[setUp()]] resolves and the SDK will reject it. If you need two blocks, use the Two-Block tab.'}]},{tag_type:"callout",type:"info",title:"Parameter Details — [[setUp()]]",children:[{tag_type:"table",headers:["Parameter","Type","Required","Description"],rows:[["[[app_name]]","string","Yes","Unique application identifier."],["[[api_key]]","string","Yes","Base64-encoded API key from App Details."],["[[region]]","string","Yes",'"US" or "IN" — used as the config lookup prefix.'],["[[chat_root_id]]","string","No","Optional DOM element id to mount the chat into. Falls back to document.body."]]}]},{tag_type:"callout",type:"info",title:"Parameter Details — [[initialize()]]",children:[{tag_type:"table",headers:["Field","Type","Description"],rows:[["[[payload.uid]]","string","Required when [[dont_show_chat_box_at_logout]] is enabled for your app."]]}]},{tag_type:"callout",type:"info",title:"Upgrading from a previous SDK version",children:[{tag_type:"p",text:"Earlier versions of the SDK accepted extra arguments ([[header_req]], [[version]]). Both have been removed. If you were passing them, drop them and keep only the arguments shown above."},{tag_type:"table",headers:["Old call","New call"],rows:[['[[setUp(name, key, region, false, "chat-root")]]','[[setUp(name, key, region, "chat-root")]]'],["[[setUp(name, key, region, false)]]","[[setUp(name, key, region)]]"],["[[setUp(name, key, region)]]","[[setUp(name, key, region)]] (unchanged)"]]}]}]},{label:"Two-Block (Split)",content:[{tag_type:"h4",text:"Two-Block Implementation"},{tag_type:"p",text:"Use this when [[setUp()]] and [[initialize()]] must live in different files, script tags, or templates — for example, a shared layout that loads [[setUp()]] and a page-specific template that loads [[initialize()]]."},{tag_type:"callout",type:"warning",title:"Bridge with a shared promise",children:[{tag_type:"p",text:"Do not put the two calls into two independent DOMContentLoaded listeners. Publish the result of [[setUp()]] on a shared promise and chain [[initialize()]] off that promise in the second block."}]},{tag_type:"h5",text:"Script A — [[setUp()]] only"},{tag_type:"code_with_copy",code:`<script>
  window.__sageionSetup = (async function () {
    [[[await window.magicchat_io.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US",
      "sageion-chat-root"
    );]]]

    // Resolve the initialize() payload based on login state.
    const token = localStorage.getItem("token");
    if (!token) return {};

    try {
      const res = await fetch(\`\${window.__APP_CONFIG__.API_BASE_URL}/auth/profile\`, {
        headers: { Authorization: \`Bearer \${token}\` }
      });
      if (res.ok) {
        const user = await res.json();
        return { uid: user.id.toString() };
      }
      localStorage.removeItem("token");
      return {};
    } catch {
      return {};
    }
  })();
</script>`,language:"javascript"},{tag_type:"h5",text:"Script B — [[initialize()]] chained off Script A"},{tag_type:"code_with_copy",code:`<script>
  window.__sageionSetup
    [[[.then(payload => window.magicchat_io.initialize(payload))]]]
    .then(() => console.log("[Sageion] ready"))
    .catch(err => console.error("[Sageion] bootstrap failed:", err));
</script>`,language:"javascript"},{tag_type:"callout",type:"success",title:"Why this works",children:[{tag_type:"p",text:"Script B's .then only fires after Script A's [[setUp()]] resolves. If [[setUp()]] throws, .catch fires and [[initialize()]] is never called. The user sees exactly one error popup (rendered by [[setUp()]])."}]}]},{label:"Route-Specific",content:[{tag_type:"h4",text:"Route-Specific Implementation"},{tag_type:"p",text:"Use this when the chat box should only appear on certain pages. Run [[setUp()]] once from your root layout, and call [[initialize()]] only on routes where the chat is needed."},{tag_type:"h5",text:"Root layout — [[setUp()]] runs once, on every page"},{tag_type:"code_with_copy",code:`<script>
  window.__sageionSetup = (async function () {
    [[[await window.magicchat_io.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US",
      "sageion-chat-root"
    );]]]

    const token = localStorage.getItem("token");
    if (!token) return {};
    try {
      const res = await fetch(\`\${window.__APP_CONFIG__.API_BASE_URL}/auth/profile\`, {
        headers: { Authorization: \`Bearer \${token}\` }
      });
      if (res.ok) {
        const user = await res.json();
        return { uid: user.id.toString() };
      }
      localStorage.removeItem("token");
      return {};
    } catch { return {}; }
  })();
</script>`,language:"javascript"},{tag_type:"h5",text:"Target route — [[initialize()]] runs only where chat is wanted"},{tag_type:"code_with_copy",code:`<script>
  window.__sageionSetup
    [[[.then(payload => window.magicchat_io.initialize(payload))]]]
    .catch(err => console.error("[Sageion] bootstrap failed:", err));
</script>`,language:"javascript"},{tag_type:"callout",type:"info",title:"Alternative: [[exclude_paths]]",children:[{tag_type:"p",text:"If you'd rather run [[initialize()]] everywhere and hide the chat on some pages, add the paths to [[exclude_paths]] in your Sageion app settings. The SDK checks this list inside [[initialize()]] and skips mounting on excluded routes."}]}]}]}]},{label:"React",content:[{tag_type:"callout",type:"info",title:"🚧 Coming soon",children:[{tag_type:"p",text:"React-specific integration guidance is being prepared. In the meantime, use the Vanilla JS examples above — they work unchanged inside a top-level useEffect(() => { ... }, []) in your root component."},{tag_type:"code_with_copy",code:`useEffect(() => {
  let cancelled = false;
  (async () => {
    try {
      [[[await window.magicchat_io.setUp(
        "your_app_name",
        "YOUR_API_KEY",
        "US",
        "sageion-chat-root"
      );]]]

      const payload = await resolveUid(); // your own helper

      if (!cancelled) [[[await window.magicchat_io.initialize(payload);]]]
    } catch (err) {
      console.error("[Sageion] bootstrap failed:", err);
    }
  })();
  return () => { cancelled = true; };
}, []);`,language:"javascript"}]}]},{label:"Vue",content:[{tag_type:"callout",type:"info",title:"🚧 Coming soon",children:[{tag_type:"p",text:"Vue-specific integration guidance is being prepared. In the meantime, use the Vanilla JS examples above — they work unchanged inside onMounted(async () => { ... }) in your root component."}]}]},{label:"Angular",content:[{tag_type:"callout",type:"info",title:"🚧 Coming soon",children:[{tag_type:"p",text:"Angular-specific integration guidance is being prepared. In the meantime, use the Vanilla JS examples above — they work unchanged inside ngOnInit() in your root component."}]}]}]},{tag_type:"h4",text:"Handling login & logout at runtime",selector_uid:"v2_login_logout_runtime"},{tag_type:"p",text:"[[setUp()]] runs once per page load. It does not re-run when the user logs in or out in place. To reflect auth changes without a page reload, call [[initialize()]] again with the new uid, or call [[logout()]]."},{tag_type:"code_with_copy",code:`// After a successful login (no page reload):
async function onLogin(user) {
  [[[await window.magicchat_io.initialize({ uid: user.id.toString() });]]]
}

// On logout:
function onLogout() {
  [[[window.magicchat_io.logout();]]]  // clears SDK storage, disconnects sockets, resets state
  // To re-open the chat as anonymous immediately:
  // await window.magicchat_io.initialize();
}`,language:"javascript"},{tag_type:"h4",text:"Failure reference"},{tag_type:"p",text:"Both [[setUp()]] and [[initialize()]] throw a [[SageionSetupError]] on failure. The four most common messages are:"},{tag_type:"table",headers:["Error","Cause","Fix"],rows:[["[[Wrong `api_key` found in credentials]]","[[api_key]] in your config does not match the cached [[auth_key]]","Correct the key, then click Reset Settings in the error popup (or call [[magicchat_io.logout()]])"],["[[The current domain (X) is not authorized]]","Your hostname is not in the app's [[whitelabel_domains]]","Ask your Sageion admin to add the domain"],["[[initialize ran before setUp could finish]]","[[initialize()]] was called before [[setUp()]] resolved — usually from two independent DOMContentLoaded listeners","Use Single-Block or Two-Block from the tabs above"],["[[initialize skipped: setUp failed earlier]]","[[setUp()]] failed and you still called [[initialize()]]","Fix the underlying [[setUp()]] failure. The original error popup is still on screen."]]},{tag_type:"h4",text:"Example Implementations",selector_uid:"v2_code_example"},{tag_type:"p",text:"View complete working implementations on GitHub:"},{tag_type:"a",href:"https://github.com/sageion-core/example__v1/blob/b166e027ad4e841f2698e4817324fef1c7e8d347/index.html#L33",text:"Single-Block Example"},{tag_type:"a",href:"https://github.com/sageion-core/example__v2/blob402cbcd3d07fc8cca952fdf6ed1c18b5a2a90b1a/templates/base.html#L95",text:"Two-Block Example (logout cleanup included)"}]}],[{tag_type:"div",children:[{tag_type:"h2",text:"Connecting Sageion to Your Product's Authentication",selector_uid:"v2_backend_integration"},{tag_type:"p",text:"Sageion does not own your user identities. Your product remains the source of truth — users sign up and log in against your own backend, and Sageion is told about them via a small onboarding call. This page shows the full flow end-to-end."},{tag_type:"callout",type:"info",title:"🔑 How identity flows",children:[{tag_type:"ol",items:[{text:"A user signs up in your app. Your backend creates the user record and returns its own token."},{text:"Your backend calls Sageion's onboarding endpoint with the user's [[uid]] and your [[app_name]]. This maps the user into Sageion."},{text:"On the frontend, your app calls [[initialize({ uid })]] with the same [[uid]]. Sageion now knows which of its users this is."},{text:"When the user logs out, your app calls [[window.magicchat_io.logout()]] so Sageion clears the session."}]},{tag_type:"callout",type:"warning",title:"UID is the only link",children:[{tag_type:"p",text:"The [[uid]] you pass to onboarding must match the [[uid]] you pass to [[initialize()]] exactly. Sageion has no other way to know which of your users is which. Use your own users.id, users.uid, or another stable unique key — just be consistent."}]}]},{tag_type:"h3",text:"Onboarding API",selector_uid:"v2_backend_onboarding_api"},{tag_type:"p",text:"The onboarding endpoint registers a user with Sageion so they can appear in the Admin Panel and use the chat box."},{tag_type:"code_with_copy",code:"POST https://{region}.userauth2.tezkit.com/dev/onboarding",language:"http"},{tag_type:"p",text:"Replace [[{region}]] with your Sageion region — either [[us]] or [[in]]. It's the same value you pass as [[region]] to [[setUp()]] on the frontend."},{tag_type:"h4",text:"Headers"},{tag_type:"table",headers:["Header","Value","Where to get it"],rows:[["[[X-API-Key]]","Your Sageion REST API key","Sageion Admin Panel → App Details → REST API Key"],["[[Content-Type]]","[[application/json]]","Always this value"]]},{tag_type:"h4",text:"Body"},{tag_type:"table",headers:["Field","Type","Required","Description"],rows:[["[[uid]]","string","Yes","Your platform's unique user identifier, as a string. Must match what you pass to [[initialize()]] on the frontend."],["[[app_name]]","string","Yes","Your registered Sageion application name (from App Details)."]]},{tag_type:"h4",text:"Example request"},{tag_type:"code_with_copy",code:`curl --location 'https://us.userauth2.tezkit.com/dev/onboarding' \\
  --header 'X-API-Key: YOUR_REST_API_KEY' \\
  --header 'Content-Type: application/json' \\
  --data '{
    "uid": "12345",
    "app_name": "your_application_name"
  }'`,language:"bash"},{tag_type:"h4",text:"Response"},{tag_type:"p",text:"A successful onboarding returns HTTP [[200]] with a small confirmation payload. Once onboarded, the user appears under Users in the Sageion Admin Panel for that app."},{tag_type:"callout",type:"warning",title:"Response contract — status codes only",children:[{tag_type:"p",text:"The onboarding response body is not read by Sageion. What matters is the status code: [[2xx]] means the user is onboarded. If the user was already onboarded, your handler should still return [[2xx]] — onboarding is idempotent. On failure, return [[4xx]] or [[5xx]] so your own retry logic can detect it. Because the client SDK treats any [[2xx]] as success, do not return [[200]] on failure."}]},{tag_type:"h3",text:"Where to call onboarding",selector_uid:"v2_backend_onboarding_where"},{tag_type:"p",text:"Onboarding must be called exactly once per user, ideally the moment your own signup succeeds. Pick your backend language below, then choose the onboarding method that matches your workflow."},{tag_type:"tabs",items:[{label:"Node.js",content:[{tag_type:"p",text:"Express + axios. This is the reference implementation used by Sageion's own sample app."},{tag_type:"tabs",items:[{label:"Backend (Recommended)",content:[{tag_type:"h4",text:"Backend onboarding (Node.js)"},{tag_type:"p",text:"Call onboarding inside your /register handler, right after your own user row is created. It's fire-and-forget: your signup succeeds even if onboarding fails."},{tag_type:"code_with_copy",code:`// routes/auth.js
const axios = require('axios');

router.post('/register', [...validators], async (req, res) => {
  const { email, password, full_name } = req.body;

  // 1. Create the user in your own DB
  const hashed = await hashPassword(password);
  const result = await pool.query(
    'INSERT INTO users (email, password_hash, full_name) VALUES ($1, $2, $3) RETURNING id, email, full_name, role',
    [email, hashed, full_name]
  );
  const user = result.rows[0];

  // 2. Onboard the user into Sageion (fire-and-forget)
  [[[try {
    const onboardingUrl = \`https://\${process.env.SAGEION_REGION}.userauth2.tezkit.com/dev/onboarding\`;
    await axios.post(
      onboardingUrl,
      {
        uid: user.id.toString(),
        app_name: process.env.SAGEION_APP_NAME,
      },
      {
        headers: {
          'X-API-Key': process.env.SAGEION_REST_API_KEY,
          'Content-Type': 'application/json',
        },
        timeout: 5000,
      }
    );
  } catch (onboardErr) {
    // Do NOT fail registration — the user can still log in and use your app.
    // The chat box just won't work for this user until they're onboarded.
    console.error('Sageion onboarding error:', onboardErr.message);
  }]]]

  // 3. Return your own token — Sageion does not issue auth tokens
  const token = generateToken(user.id, user.email, user.role);
  res.status(201).json({ token, user });
});`,language:"javascript"},{tag_type:"callout",type:"warning",title:"Onboarding failure is silent by design",children:[{tag_type:"p",text:"If the onboarding call fails, registration still succeeds. Your user exists in your DB but not in Sageion — the chat box won't work for them until they're onboarded. Add an alert or a background retry so you notice."}]}]},{label:"Frontend",content:[{tag_type:"h4",text:"Frontend onboarding"},{tag_type:"p",text:"If you cannot onboard from your backend (for example, in a static-only deployment), the SDK exposes an onboarding method you can call from the browser immediately after your own signup succeeds."},{tag_type:"code_with_copy",code:`[[[await window.magicchat_io.onboarding(
  { uid: "UNIQUE_USER_ID_FROM_YOUR_PLATFORM" },
  { app_name: "your_application_name" }
);]]]`,language:"javascript"},{tag_type:"callout",type:"warning",title:"Tradeoffs",children:[{tag_type:"ul",items:[{text:"This call must run inside a page where the SDK bundle is already loaded (see Client Side Integration)."},{text:"If your app has a signup → login redirect, call onboarding on the destination page, right before [[initialize()]]."},{text:"Onboarding is idempotent per [[uid]] — calling it twice for the same user is harmless."}]}]}]},{label:"Admin Panel",content:[{tag_type:"h4",text:"Manual onboarding via Admin Panel"},{tag_type:"p",text:"Onboarding one user at a time from the Sageion Admin Panel is useful in two scenarios: quick testing during development, and migrating users that already existed in your app before Sageion was integrated."},{tag_type:"callout",type:"info",title:"Best for legacy users",children:[{tag_type:"p",text:"If your app already has an active user base, you don't need to backfill all of them at once. Onboard users on demand as they log in for the first time after your integration ships. Add a small check in your login handler: if the user hasn't been onboarded yet, call the onboarding API then — the Admin Panel is only needed for users you want to seed manually."}]},{tag_type:"img",src:"/Asset/onboarding_via_admin.png",alt:"Sageion Admin Panel user onboarding interface"},{tag_type:"steps",items:[{title:"Open the Users section",content:[{tag_type:"p",text:"In the Sageion Admin Panel, navigate to your application and open Users."}]},{title:"Select 'Add User'",content:[{tag_type:"p",text:"Enter the [[uid]] — it must exactly match the id you use for that user in your own platform."}]},{title:"Save",content:[{tag_type:"p",text:"The user now appears in the onboarded list and can use the chat box on your site."}]}]},{tag_type:"callout",type:"info",title:"Bulk onboarding",children:[{tag_type:"p",text:"For large migrations (hundreds or thousands of existing users), contact Sageion Support for a batch import option instead of calling the API one user at a time."}]}]}]}]},{label:"Python",content:[{tag_type:"p",text:"FastAPI + httpx. Same flow as Node.js — call onboarding after your own user record is committed."},{tag_type:"tabs",items:[{label:"Backend (Recommended)",content:[{tag_type:"h4",text:"Backend onboarding (Python)"},{tag_type:"code_with_copy",code:`import os
import httpx
from fastapi import APIRouter, HTTPException

router = APIRouter()

SAGEION_REGION = os.environ["SAGEION_REGION"]        # "us" or "in"
SAGEION_APP_NAME = os.environ["SAGEION_APP_NAME"]
SAGEION_REST_API_KEY = os.environ["SAGEION_REST_API_KEY"]


[[[async def onboard_user(user_id: int) -> None:
    """Fire-and-forget onboarding. Never raises — logs and returns."""
    url = f"https://{SAGEION_REGION}.userauth2.tezkit.com/dev/onboarding"
    payload = {"uid": str(user_id), "app_name": SAGEION_APP_NAME}
    headers = {
        "X-API-Key": SAGEION_REST_API_KEY,
        "Content-Type": "application/json",
    }
    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            await client.post(url, json=payload, headers=headers)
    except Exception as exc:
        print(f"Sageion onboarding error for user {user_id}: {exc}")]]]


@router.post("/register")
async def register(body: RegisterBody):
    # 1. Create the user in your own DB
    user = await create_user(body)          # your own function

    # 2. Onboard the user into Sageion (fire-and-forget)
    [[[await onboard_user(user.id)]]]

    # 3. Return your own token — Sageion does not issue auth tokens
    token = generate_token(user.id, user.email, user.role)
    return {"token": token, "user": user}`,language:"python"}]},{label:"Frontend",content:[{tag_type:"p",text:"Framework-agnostic — the SDK call is the same regardless of your backend language."},{tag_type:"code_with_copy",code:`[[[await window.magicchat_io.onboarding(
  { uid: "UNIQUE_USER_ID_FROM_YOUR_PLATFORM" },
  { app_name: "your_application_name" }
);]]]`,language:"javascript"}]},{label:"Admin Panel",content:[{tag_type:"p",text:"See the Node.js → Admin Panel tab for the full manual-onboarding walkthrough. It's identical regardless of your backend language."}]}]}]},{label:"Go",content:[{tag_type:"p",text:"net/http + encoding/json. Same flow as Node.js — call onboarding after your own user record is committed."},{tag_type:"tabs",items:[{label:"Backend (Recommended)",content:[{tag_type:"h4",text:"Backend onboarding (Go)"},{tag_type:"code_with_copy",code:`package auth

import (
    "bytes"
    "context"
    "encoding/json"
    "fmt"
    "net/http"
    "os"
    "time"
)

[[[func onboardUser(ctx context.Context, userID int64) {
    url := fmt.Sprintf(
        "https://%s.userauth2.tezkit.com/dev/onboarding",
        os.Getenv("SAGEION_REGION"),
    )
    body, _ := json.Marshal(map[string]string{
        "uid":      fmt.Sprintf("%d", userID),
        "app_name": os.Getenv("SAGEION_APP_NAME"),
    })

    req, _ := http.NewRequestWithContext(ctx, "POST", url, bytes.NewReader(body))
    req.Header.Set("X-API-Key", os.Getenv("SAGEION_REST_API_KEY"))
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{Timeout: 5 * time.Second}
    resp, err := client.Do(req)
    if err != nil {
        // Fire-and-forget: log and return. Registration still succeeds.
        fmt.Printf("Sageion onboarding error for user %d: %v\\n", userID, err)
        return
    }
    defer resp.Body.Close()
}]]]

func RegisterHandler(w http.ResponseWriter, r *http.Request) {
    // 1. Create the user in your own DB
    user := createUser(r)          // your own function

    // 2. Onboard the user into Sageion (fire-and-forget)
    [[[onboardUser(r.Context(), user.ID)]]]

    // 3. Return your own token — Sageion does not issue auth tokens
    token := generateToken(user.ID, user.Email, user.Role)
    json.NewEncoder(w).Encode(map[string]any{"token": token, "user": user})
}`,language:"go"}]},{label:"Frontend",content:[{tag_type:"p",text:"Framework-agnostic — the SDK call is the same regardless of your backend language."},{tag_type:"code_with_copy",code:`[[[await window.magicchat_io.onboarding(
  { uid: "UNIQUE_USER_ID_FROM_YOUR_PLATFORM" },
  { app_name: "your_application_name" }
);]]]`,language:"javascript"}]},{label:"Admin Panel",content:[{tag_type:"p",text:"See the Node.js → Admin Panel tab for the full manual-onboarding walkthrough."}]}]}]},{label:"PHP",content:[{tag_type:"p",text:"Laravel + Guzzle. Same flow as Node.js — call onboarding after your own user record is committed."},{tag_type:"tabs",items:[{label:"Backend (Recommended)",content:[{tag_type:"h4",text:"Backend onboarding (PHP)"},{tag_type:"code_with_copy",code:`<?php
// app/Http/Controllers/AuthController.php

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

public function register(Request $request)
{
    // 1. Create the user in your own DB
    $user = User::create([
        'email'     => $request->email,
        'password'  => Hash::make($request->password),
        'full_name' => $request->full_name,
    ]);

    // 2. Onboard the user into Sageion (fire-and-forget)
    [[[try {
        $url = sprintf(
            'https://%s.userauth2.tezkit.com/dev/onboarding',
            env('SAGEION_REGION')
        );
        Http::withHeaders([
            'X-API-Key'    => env('SAGEION_REST_API_KEY'),
            'Content-Type' => 'application/json',
        ])->timeout(5)->post($url, [
            'uid'      => (string) $user->id,
            'app_name' => env('SAGEION_APP_NAME'),
        ]);
    } catch (\\Throwable $e) {
        // Do NOT fail registration — the user can still log in.
        \\Log::error('Sageion onboarding error: ' . $e->getMessage());
    }]]]

    // 3. Return your own token — Sageion does not issue auth tokens
    $token = $user->createToken('auth')->plainTextToken;
    return response()->json(['token' => $token, 'user' => $user], 201);
}`,language:"php"}]},{label:"Frontend",content:[{tag_type:"p",text:"Framework-agnostic — the SDK call is the same regardless of your backend language."},{tag_type:"code_with_copy",code:`[[[await window.magicchat_io.onboarding(
  { uid: "UNIQUE_USER_ID_FROM_YOUR_PLATFORM" },
  { app_name: "your_application_name" }
);]]]`,language:"javascript"}]},{label:"Admin Panel",content:[{tag_type:"p",text:"See the Node.js → Admin Panel tab for the full manual-onboarding walkthrough."}]}]}]},{label:"Ruby",content:[{tag_type:"p",text:"Rails + Faraday (or Net::HTTP). Same flow as Node.js — call onboarding after your own user record is committed."},{tag_type:"tabs",items:[{label:"Backend (Recommended)",content:[{tag_type:"h4",text:"Backend onboarding (Ruby)"},{tag_type:"code_with_copy",code:`# app/controllers/auth_controller.rb
require 'faraday'
require 'json'

class AuthController < ApplicationController
  def register
    # 1. Create the user in your own DB
    user = User.create!(
      email:     params[:email],
      password:  params[:password],
      full_name: params[:full_name]
    )

    # 2. Onboard the user into Sageion (fire-and-forget)
    [[[begin
      url = "https://#{ENV['SAGEION_REGION']}.userauth2.tezkit.com/dev/onboarding"
      conn = Faraday.new(url: url) do |f|
        f.options.timeout = 5
      end
      conn.post do |req|
        req.headers['X-API-Key']      = ENV['SAGEION_REST_API_KEY']
        req.headers['Content-Type']   = 'application/json'
        req.body = {
          uid:      user.id.to_s,
          app_name: ENV['SAGEION_APP_NAME']
        }.to_json
      end
    rescue => e
      # Do NOT fail registration — the user can still log in.
      Rails.logger.error("Sageion onboarding error: #{e.message}")
    end]]]

    # 3. Return your own token — Sageion does not issue auth tokens
    token = generate_token(user)
    render json: { token: token, user: user }, status: :created
  end
end`,language:"ruby"}]},{label:"Frontend",content:[{tag_type:"p",text:"Framework-agnostic — the SDK call is the same regardless of your backend language."},{tag_type:"code_with_copy",code:`[[[await window.magicchat_io.onboarding(
  { uid: "UNIQUE_USER_ID_FROM_YOUR_PLATFORM" },
  { app_name: "your_application_name" }
);]]]`,language:"javascript"}]},{label:"Admin Panel",content:[{tag_type:"p",text:"See the Node.js → Admin Panel tab for the full manual-onboarding walkthrough."}]}]}]}]},{tag_type:"h3",text:"What onboarded users look like",selector_uid:"v2_backend_onboarded_users"},{tag_type:"p",text:"Once a user is onboarded, they appear in the Sageion Admin Panel under your application, ready for chat. Applications without any onboarded users show an empty state."},{tag_type:"steps",items:[{title:"Admin Panel — users present",content:[{tag_type:"img",src:"/Asset/onboarded_user.png",alt:"Sageion Admin Panel showing onboarded users"}]},{title:"Admin Panel — no users yet",content:[{tag_type:"img",src:"/Asset/no_users_admin.png",alt:"Sageion Admin Panel showing no onboarded users"}]}]},{tag_type:"h3",text:"Logout cleanup",selector_uid:"v2_backend_logout"},{tag_type:"p",text:"Because authentication is handled by your own product, you must tell Sageion when a user logs out. Otherwise the chat session persists and the chat box may remain visible after logout."},{tag_type:"callout",type:"warning",title:"Always call logout on the client",children:[{tag_type:"p",text:"This is a frontend-only call. Sageion does not expose a server-side logout endpoint — the SDK clears its own storage and disconnects its sockets when you invoke it."}]},{tag_type:"code_with_copy",code:`// In your client-side logout handler:
[[[window.magicchat_io.logout?.();]]]

// It:
//   - clears all tezkit_* keys from localStorage
//   - disconnects the active socket and AI socket
//   - resets setupStatus back to "idle"
// After logout, call initialize() again to re-open the chat as anonymous.`,language:"javascript"},{tag_type:"h3",text:"APIs the AI agent can call — sync vs. async",selector_uid:"v2_backend_async_correlation"},{tag_type:"p",text:"Every API you register with Sageion falls into one of two categories, depending on how quickly it can produce its final result. Pick the one that matches the nature of the endpoint — most APIs are synchronous, and you only reach for async when the final result genuinely cannot be produced within the request lifecycle."},{tag_type:"table",headers:["","Synchronous (default)","Asynchronous ([[Async Callback]] enabled)"],rows:[["When to use","The endpoint can compute and return the final result within a few seconds of the request.","The endpoint cannot produce the final result immediately — it depends on a payment gateway, an approval, a background job, or an external event."],["How the agent gets the result","Reads it from the HTTP response body.","Waits for your backend to POST the final result to Sageion's [[webhook callback URL]]."],["What your handler does","Does the work, returns the final result.","Acknowledges the request, kicks off the work, returns early — then POSTs the final result via webhook when it's ready."],["What Sageion sends","Nothing extra.","An [[x-correlation-id]] header on the initial request."],["Where the config lives","Nothing to configure — this is the default.","Enable [[Async Callback]] when registering the API in the Sageion Admin Panel."]]},{tag_type:"callout",type:"info",title:"One endpoint, one nature",children:[{tag_type:"p",text:"An endpoint is either synchronous or asynchronous — it does not switch between the two at runtime. The example code below uses an if ([[correlation_id]]) branch purely to illustrate both paths on one screen; a real integration picks one and sticks with it. If your API is synchronous, you never read [[x-correlation-id]]. If it's asynchronous, Sageion always sends it (because you enabled [[Async Callback]] for that API) and your handler always uses it."}]},{tag_type:"h4",text:"Path A — Synchronous API",selector_uid:"v2_backend_sync_path"},{tag_type:"p",text:"You write your handler exactly as you would for any normal API. Sageion calls your endpoint, waits for the response, and uses the body as the final result. No special headers to read, no webhook to post — nothing."},{tag_type:"code_with_copy",code:`// Example: a bookings endpoint that confirms the reservation inline.
// This is what a synchronous API looks like — no correlation_id, no webhook.

router.post('/bookings', [...validators], async (req, res) => {
  const { room_id, check_in, check_out } = req.body;
  const user_id = req.user.userId;

  // Do the work and return the final result. That's it.
  const booking = await createBooking(user_id, room_id, check_in, check_out);
  res.status(201).json({
    success: true,
    booking_id: booking.id,
    status: booking.status,
  });
});`,language:"javascript"},{tag_type:"callout",type:"success",title:"You're done",children:[{tag_type:"p",text:"If your API is synchronous, that's all you need to know. Everything that follows in this section is for the async case only."}]},{tag_type:"h4",text:"Path B — Asynchronous API ([[Async Callback]] enabled)",selector_uid:"v2_backend_async_path"},{tag_type:"p",text:"You register the API in the Sageion Admin Panel with [[Async Callback]] enabled. From then on, Sageion attaches an [[x-correlation-id]] header to every request to that endpoint and treats your initial response as an acknowledgment, not as the final answer."},{tag_type:"callout",type:"info",title:"🔄 When async is the right choice",children:[{tag_type:"ul",items:[{text:"The action depends on a payment gateway — the user pays, then the gateway confirms minutes later."},{text:"The action depends on a human approval that happens out-of-band (a manager clicks approve)."},{text:"The action kicks off a multi-step workflow in your own system whose completion is signalled by a separate event."},{text:"The action needs to send the user an email or SMS and wait for a response before it can produce a final result."}]},{tag_type:"p",text:"If none of these apply — if your backend can compute the final result by the time the request handler returns — use the synchronous path instead. Async adds complexity, and there's no reason to reach for it prematurely."}]},{tag_type:"h5",text:"How the async flow works"},{tag_type:"steps",items:[{title:"Sageion sends the request with [[x-correlation-id]]",content:[{tag_type:"p",text:"Because the API is configured with [[Async Callback]] enabled, Sageion attaches an [[x-correlation-id]] header to every call. This header is the only thing that distinguishes an async-configured call from a synchronous one."}]},{title:"Your handler acknowledges the request and kicks off the work",content:[{tag_type:"p",text:"Read [[req.headers['x-correlation-id']]], start whatever needs to happen (send a payment link, queue a job, notify another service), and respond immediately — usually with HTTP [[202]] and any interim data the user should see. Do not wait for the async work to complete inside the handler."}]},{title:"Later — when the work completes — your backend POSTs to Sageion's webhook",content:[{tag_type:"p",text:"Once the async operation finishes (payment confirmed, job complete, external system replied), your backend — or the external service's own webhook handler in your code — POSTs a JSON body containing the same [[correlation_id]] and the final data to Sageion's [[webhook callback URL]]."}]},{title:"Sageion matches the [[correlation_id]] and resumes the workflow",content:[{tag_type:"p",text:"The workflow engine pairs the callback with the original request, resumes execution, and passes the data you sent into the next step."}]}]},{tag_type:"h5",text:"Request header: [[x-correlation-id]]"},{tag_type:"table",headers:["Header","Type","Description"],rows:[["[[x-correlation-id]]","string","Sent by Sageion on every request to an API configured with [[Async Callback]]. Your handler reads it and echoes it back in the webhook payload so the callback can be matched to the original request."]]},{tag_type:"h5",text:"Webhook callback contract"},{tag_type:"code_with_copy",code:"POST https://{region}.autobot2.tezkit.com/dev/webhook/callback",language:"http"},{tag_type:"p",text:"This is Sageion's webhook receiver. Your backend posts here when the async operation completes. The URL and environment suffix vary by region — use the one configured in your Admin Panel's webhook settings."},{tag_type:"table",headers:["Field","Type","Required","Description"],rows:[["[[correlation_id]]","string","Yes","The exact [[x-correlation-id]] value Sageion sent in the original request. Used to match the callback to the workflow step."],["[[data]]","object","Yes","The final payload the workflow engine should receive as the API response. Any JSON shape is allowed — Sageion passes it through to the next step."]]},{tag_type:"callout",type:"warning",title:"Response format is a contract — match it exactly",children:[{tag_type:"ul",items:[{text:"[[correlation_id]] must be the verbatim string from the request header. Do not reformat, prefix, or wrap it."},{text:"[[data]] must be a top-level object, not a string. Wrapping the payload in [[JSON.stringify()]] before posting will break parsing."},{text:"The webhook POST should return [[2xx]]. Sageion retries on non-[[2xx]] responses, so return [[200]] immediately after your handler acknowledges the callback — do not delay on downstream work."},{text:"Extra top-level fields beyond [[correlation_id]] and [[data]] are ignored."}]}]},{tag_type:"h5",text:"Worked example — a booking that waits on payment"},{tag_type:"p",text:"Consider a hotel booking API. When the user asks to book a room, the API does not confirm the booking immediately — instead, it emails a payment link. The booking only becomes confirmed once the payment gateway reports success, which happens minutes later. This is the textbook case for async: the final result genuinely cannot be produced within the request lifecycle."},{tag_type:"p",text:"Below are the same booking endpoint written both ways, so you can see exactly where the async pattern diverges. The synchronous version confirms the booking inline and returns. The async version acknowledges the request, sends the payment link, and produces the final result later via the payment provider's webhook handler."},{tag_type:"tabs",items:[{label:"Synchronous version",content:[{tag_type:"p",text:"The endpoint does everything up front and returns the confirmed booking. Sageion reads the result from the HTTP response body. No [[x-correlation-id]] is present, no webhook is involved."},{tag_type:"code_with_copy",code:`// routes/bookings.js — SYNC booking (confirms immediately)
router.post('/', [...validators], async (req, res) => {
  const { room_id, check_in, check_out } = req.body;
  const user_id = req.user.userId;

  // Do all the work now and return the final result.
  const booking = await createBooking(user_id, room_id, check_in, check_out);

  res.status(201).json({
    success: true,
    booking_id: booking.id,
    status: 'confirmed',
  });
});`,language:"javascript"}]},{label:"Asynchronous version",content:[{tag_type:"p",text:"The endpoint creates a pending booking, sends the user a payment link, and returns immediately. The final confirmation comes later — driven by the payment gateway's webhook hitting a separate handler in your backend, which then POSTs to Sageion's webhook callback."},{tag_type:"code_with_copy",code:`// routes/bookings.js — ASYNC booking (waits on payment)
const axios = require('axios');

router.post('/', [...validators], async (req, res) => {
  [[[const correlation_id = req.headers['x-correlation-id']; // always present (Async Callback is on)]]]
  const { room_id, check_in, check_out } = req.body;
  const user_id = req.user.userId;

  // 1. Create the booking in a pending state.
  const booking = await createPendingBooking(user_id, room_id, check_in, check_out);

  // 2. Send the user a payment link.
  const paymentLink = await createPaymentLink(booking.id, booking.total_price);

  // 3. Remember the correlation_id so the payment webhook can use it later.
  //    (store it against the booking in your DB)
  [[[await attachCorrelationId(booking.id, correlation_id);]]]

  // 4. Acknowledge the request and return immediately.
  [[[res.status(202).json({
    success: true,
    booking_id: booking.id,
    status: 'pending_payment',
    payment_link: paymentLink,
  });]]]
});


// A SEPARATE handler — the payment gateway calls this when payment succeeds.
// It looks up the original correlation_id, then posts the final result to Sageion.
router.post('/payments/webhook', async (req, res) => {
  const { booking_id, status } = req.body; // shape depends on your payment provider

  if (status !== 'success') {
    return res.json({ ok: true }); // acknowledge and move on
  }

  const booking = await confirmBooking(booking_id); // update your DB
  [[[const correlation_id = await getCorrelationIdForBooking(booking_id);]]]

  if (correlation_id) {
    [[[await axios.post(
      \`https://\${process.env.SAGEION_REGION}.autobot2.tezkit.com/dev/webhook/callback\`,
      {
        correlation_id: correlation_id,
        data: {
          success: true,
          booking_id: booking.id,
          status: 'confirmed',
        },
      }
    );]]]
  }

  res.json({ ok: true });
});`,language:"javascript"},{tag_type:"callout",type:"info",title:"Where the webhook call lives",children:[{tag_type:"p",text:"Notice the Sageion webhook callback is posted from the payment provider's webhook handler — not from the original POST /bookings handler. That's the whole point of the async pattern: the request Sageion initiated finishes fast, and the final result arrives through a different code path entirely."}]}]}]},{tag_type:"h5",text:"Async handler — reference implementations"},{tag_type:"p",text:"The concept is identical across languages: read [[x-correlation-id]], return early, then POST the final result to Sageion's webhook callback when the async work finishes. Below are minimal reference implementations."},{tag_type:"tabs",items:[{label:"Node.js",content:[{tag_type:"code_with_copy",code:`// routes/orders.js — async order submission
const axios = require('axios');

router.post('/orders', async (req, res) => {
  [[[const correlation_id = req.headers['x-correlation-id'];]]]

  // Kick off the long-running work (queue a job, call an external system).
  const order = await createPendingOrder(req.body);
  [[[await attachCorrelationId(order.id, correlation_id);]]]

  // Return early.
  [[[res.status(202).json({ success: true, order_id: order.id, status: 'processing' });]]]

  // ... elsewhere, when the work finishes:
  // [[[await axios.post(
  //   \`https://\${process.env.SAGEION_REGION}.autobot2.tezkit.com/dev/webhook/callback\`,
  //   {
  //     correlation_id,
  //     data: { success: true, order_id: order.id, status: 'completed' },
  //   }
  // );]]]
});`,language:"javascript"}]},{label:"Python",content:[{tag_type:"code_with_copy",code:`import os
import httpx
from fastapi import APIRouter, Request, Response

router = APIRouter()

SAGEION_REGION = os.environ["SAGEION_REGION"]


@router.post("/orders")
async def create_order(request: Request):
    [[[correlation_id = request.headers.get("x-correlation-id")]]]

    body = await request.json()
    order = await create_pending_order(body)     # your own function
    [[[await attach_correlation_id(order.id, correlation_id)]]]

    # Return early — do not wait for the async work to finish.
    [[[return Response(
        content=f'{{"success":true,"order_id":"{order.id}","status":"processing"}}',
        status_code=202,
        media_type="application/json",
    )]]]


[[[async def deliver_webhook(correlation_id: str, order_id: int):
    """Call this from wherever the async work completes."""
    url = f"https://{SAGEION_REGION}.autobot2.tezkit.com/dev/webhook/callback"
    async with httpx.AsyncClient(timeout=5.0) as client:
        await client.post(url, json={
            "correlation_id": correlation_id,
            "data": {
                "success": True,
                "order_id": order_id,
                "status": "completed",
            },
        })]]]`,language:"python"}]},{label:"Go",content:[{tag_type:"code_with_copy",code:`package orders

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "os"
    "time"
)

func CreateOrderHandler(w http.ResponseWriter, r *http.Request) {
    [[[correlationID := r.Header.Get("x-correlation-id")]]]

    order := createPendingOrder(r)                 // your own function
    [[[attachCorrelationID(order.ID, correlationID)]]]   // your own function

    // Return early.
    [[[w.WriteHeader(http.StatusAccepted)
    json.NewEncoder(w).Encode(map[string]any{
        "success":  true,
        "order_id": order.ID,
        "status":   "processing",
    })]]]
}

[[[// Call this from wherever the async work completes.
func DeliverWebhook(correlationID string, orderID int64) error {
    url := fmt.Sprintf(
        "https://%s.autobot2.tezkit.com/dev/webhook/callback",
        os.Getenv("SAGEION_REGION"),
    )
    payload, _ := json.Marshal(map[string]any{
        "correlation_id": correlationID,
        "data": map[string]any{
            "success":  true,
            "order_id": orderID,
            "status":   "completed",
        },
    })
    req, _ := http.NewRequest("POST", url, bytes.NewReader(payload))
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{Timeout: 5 * time.Second}
    resp, err := client.Do(req)
    if err != nil { return err }
    defer resp.Body.Close()
    return nil
}]]]`,language:"go"}]},{label:"PHP",content:[{tag_type:"code_with_copy",code:`<?php
// routes/api.php
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;
use Illuminate\\Support\\Facades\\Route;

Route::post('/orders', function (Request $request) {
    [[[$correlationId = $request->header('x-correlation-id');]]]

    $order = create_pending_order($request->all());   // your own function
    [[[attach_correlation_id($order->id, $correlationId);]]]

    // Return early.
    [[[return response()->json([
        'success'  => true,
        'order_id' => $order->id,
        'status'   => 'processing',
    ], 202);]]]
});

[[[// Call this from wherever the async work completes.
function deliver_webhook(string $correlationId, int $orderId): void {
    Http::timeout(5)->post(
        sprintf('https://%s.autobot2.tezkit.com/dev/webhook/callback',
                env('SAGEION_REGION')),
        [
            'correlation_id' => $correlationId,
            'data' => [
                'success'  => true,
                'order_id' => $orderId,
                'status'   => 'completed',
            ],
        ]
    );
}]]]`,language:"php"}]},{label:"Ruby",content:[{tag_type:"code_with_copy",code:`# config/routes.rb
post '/orders', to: 'orders#create'

# app/controllers/orders_controller.rb
class OrdersController < ApplicationController
  def create
    [[[correlation_id = request.headers['x-correlation-id']]]]

    order = create_pending_order(params)          # your own method
    [[[attach_correlation_id(order.id, correlation_id)]]]

    # Return early.
    [[[render json: {
      success:  true,
      order_id: order.id,
      status:   'processing'
    }, status: :accepted]]]
  end
end

[[[# Call this from wherever the async work completes.
def deliver_webhook(correlation_id, order_id)
  conn = Faraday.new(url: "https://#{ENV['SAGEION_REGION']}.autobot2.tezkit.com")
  conn.post('/dev/webhook/callback') do |req|
    req.headers['Content-Type'] = 'application/json'
    req.body = {
      correlation_id: correlation_id,
      data: {
        success:  true,
        order_id: order_id,
        status:   'completed'
      }
    }.to_json
  end
end]]]`,language:"ruby"}]}]},{tag_type:"callout",type:"success",title:"✅ Checklist for async APIs",children:[{tag_type:"ol",items:[{text:"Enable [[Async Callback]] in the Sageion Admin Panel when you register the API. Without this, Sageion sends no [[x-correlation-id]] and your handler will not know a webhook is expected."},{text:"Read [[x-correlation-id]] at the very top of the handler, before any branch that could return early."},{text:"Persist the [[correlation_id]] alongside the entity the async work is about (order, booking, job). You will need it in a completely different request later."},{text:"Respond to the initial request quickly — [[2xx]] with any interim data. Do not wait for the async work inside the original handler."},{text:"When the async work finishes, POST to Sageion's webhook callback with the same [[correlation_id]], verbatim, and a [[data]] object containing the final result."},{text:"Log the [[correlation_id]] at every step of your pipeline. It is the only way to correlate Sageion's original request with your eventual callback."}]}]},{tag_type:"h3",text:"Environment variables",selector_uid:"v2_backend_env_vars"},{tag_type:"p",text:"Your backend needs these variables. Add them to your server's environment — never expose [[SAGEION_REST_API_KEY]] or [[SAGEION_CLIENT_SECRET]] to the browser."},{tag_type:"table",headers:["Variable","Example","Used for"],rows:[["[[SAGEION_REGION]]","us","Regional prefix in the onboarding URL and webhook callback URL."],["[[SAGEION_APP_NAME]]","ai_chatbot_system","Identifies your Sageion app in onboarding and agent-token requests."],["[[SAGEION_REST_API_KEY]]","your_rest_api_key","[[X-API-Key]] header for onboarding."],["[[SAGEION_CLIENT_SECRET]]","your_client_secret","Verifies client credentials on [[/client-user-token]] (only needed if you enable the optional AI agent section below). Never expose to the browser."],["[[WEBHOOK_CALLBACK_URL]]","https://us.autobot2.tezkit.com/dev/webhook/callback","Where your backend posts async results for APIs configured with webhook enabled."]]},{tag_type:"callout",type:"success",title:"✅ Base integration checklist",children:[{tag_type:"ol",items:[{text:"Trigger onboarding immediately after your own user is created — inside the same signup handler, not in a background job."},{text:"Treat onboarding failures as non-fatal to signup, but log them and add an alert so you notice missing users."},{text:"Use the exact same [[uid]] in onboarding and in [[initialize({ uid })]] — they must match for the chat box to work."},{text:"Always call [[window.magicchat_io.logout()]] from your own logout handler, before clearing your own session."},{text:"Never ship [[SAGEION_CLIENT_SECRET]] or [[SAGEION_REST_API_KEY]] to the frontend. If you use the frontend onboarding method, use a different token scoped to onboarding only."},{text:"For bulk onboarding of existing users, contact Sageion Support before calling the API in a loop."}]},{tag_type:"p",text:"Once all six items above are done, your Sageion integration is complete. The next section is optional and can be added at any time."}]},{tag_type:"h3",text:"Binding the AI agent to a user for authenticated API access (Optional)",selector_uid:"v2_agent_integration"},{tag_type:"callout",type:"info",title:"📌 Optional — add this whenever you need it",children:[{tag_type:"p",text:"You do not need this section to get Sageion's chat box running. Your users can chat with the AI agent without it. Set it up only when you want the AI agent to access protected endpoints on your own backend — for example, to fetch or modify a specific user's bookings on their behalf."},{tag_type:"p",text:"You can do this during your initial integration from day one, or add it later when the need arises — nothing on this page conflicts with anything above."}]},{tag_type:"callout",type:"danger",title:"⚠️ Response format is a contract — match it exactly",children:[{tag_type:"p",text:"For the AI agent to successfully call your [[/auth/client-user-token]], [[/auth/send-otp]], and [[/auth/verify-otp]] endpoints, your handlers must return responses in the exact shape documented below. The workflow engine reads specific field names from each response — it does not adapt to renames, extra wrappers, or missing fields."},{tag_type:"ul",items:[{text:"Do not wrap responses in [[{ data: { ... } }]] or [[{ result: { ... } }]] — return the fields at the top level."},{text:"Do not rename fields. [[token]] must be [[token]], [[user_id]] must be [[user_id]], [[scope]] must be [[scope]], [[expires_in]] must be [[expires_in]]."},{text:"Do not omit fields. [[expires_in]] and [[scope]] are read by the client to decide token freshness and permitted actions."},{text:"Extra fields beyond the ones documented are allowed and will be ignored."},{text:"Status codes matter: [[200]] for success, [[401]] for invalid client credentials, [[404]] for unknown user. The workflow engine branches on these codes."}]}]},{tag_type:"h4",text:"What problem does this solve?",selector_uid:"v2_agent_integration_why"},{tag_type:"p",text:"By default, the AI agent talks to your backend as a generic client. If your backend exposes user-scoped endpoints (like GET /bookings/me), the agent has no way to prove who it's acting for — so it can't reach those endpoints."},{tag_type:"p",text:"This integration closes that gap. Your backend exchanges its client credentials for a short-lived, scoped token tied to a specific user. The agent then calls your authenticated endpoints as that user."},{tag_type:"callout",type:"info",title:"🧩 When you need this",children:[{tag_type:"ul",items:[{text:"Your AI workflows call your own backend APIs on behalf of a logged-in user"},{text:"You want fine-grained scopes (read, create, update, cancel) rather than blanket access"},{text:"You want short-lived tokens (1 hour) rather than long-lived user sessions"}]}]},{tag_type:"h4",text:"1. Agent token endpoint ([[/auth/client-user-token]])",selector_uid:"v2_agent_token_endpoint"},{tag_type:"p",text:"Your backend exposes this endpoint. It accepts the client credentials plus a user id, verifies both, and returns a short-lived JWT the agent can use."},{tag_type:"code_with_copy",code:"POST /auth/client-user-token",language:"http"},{tag_type:"table",headers:["Field","Type","Required","Description"],rows:[["[[client_id]]","string","Yes","Your Sageion [[app_name]]."],["[[client_secret]]","string","Yes","Your Sageion client secret. Keep this server-side only."],["[[user_id]]","string","Yes","The user's id from your platform. Must be numeric."],["[[session_id]]","string","No","Optional session identifier to correlate token usage."]]},{tag_type:"p",text:"Response:"},{tag_type:"table",headers:["Field","Type","Description"],rows:[["[[token]]","string","Short-lived JWT the agent uses for subsequent calls."],["[[expires_in]]","number","Seconds until expiry — currently [[3600]]."],["[[scope]]","string[]","Actions authorized by the token. Currently: [[booking:read]], [[booking:create]], [[booking:update]], [[booking:cancel]]."],["[[user_id]]","string","Echo of the [[user_id]] the token was issued for."]]},{tag_type:"callout",type:"warning",title:"Response contract — required fields",children:[{tag_type:"table",headers:["Field","Type","Required","Why it matters"],rows:[["[[token]]","string","Yes","The JWT the agent attaches as a Bearer token. Missing or null → the agent cannot make authenticated calls."],["[[expires_in]]","number","Yes","Seconds until expiry. If omitted, the agent cannot tell when to refresh the token."],["[[scope]]","string[]","Yes","The list of actions this token authorizes. The agent checks this list before attempting operations."],["[[user_id]]","string","Yes","Echo of the [[user_id]] the token was issued for. The agent uses it to verify the token is bound to the right user."]]},{tag_type:"p",text:"Return this object at the top level with HTTP [[200]]. On failure, return HTTP [[401]] (invalid client credentials) or HTTP [[404]] (user not found) with a plain JSON body — the agent treats non-[[2xx]] responses as refusals, not as retryable errors."}]},{tag_type:"h5",text:"Reference implementation by language"},{tag_type:"tabs",items:[{label:"Node.js",content:[{tag_type:"h4",text:"Backend handler — Node.js"},{tag_type:"code_with_copy",code:`// routes/auth.js

const SAGEION_APP_NAME = process.env.SAGEION_APP_NAME;
const SAGEION_CLIENT_SECRET = process.env.SAGEION_CLIENT_SECRET;

router.post('/client-user-token', [
  body('client_id').notEmpty(),
  body('client_secret').notEmpty(),
  body('user_id').notEmpty().isInt(),
  body('session_id').optional().isString(),
], async (req, res) => {
  const { client_id, client_secret, user_id, session_id } = req.body;

  // 1. Verify client credentials
  if (client_id !== SAGEION_APP_NAME || client_secret !== SAGEION_CLIENT_SECRET) {
    return res.status(401).json({ error: 'Invalid client credentials' });
  }

  // 2. Verify the user exists
  const check = await pool.query('SELECT id FROM users WHERE id = $1', [user_id]);
  if (check.rows.length === 0) {
    return res.status(404).json({ error: 'User not found' });
  }

  // 3. Issue a scoped, short-lived token
  const scopes = [
    'booking:read', 'booking:create', 'booking:update', 'booking:cancel',
  ];
  const token = generateToken(user_id, 'client@system', 'client', {
    scope: scopes,
    client_id,
    session_id,
  });

  res.json({ token, expires_in: 3600, scope: scopes, user_id });
});`,language:"javascript"},{tag_type:"h5",text:"Calling it from your agent workflow (Node.js)"},{tag_type:"code_with_copy",code:`const axios = require('axios');

async function getAgentToken(userId) {
  const { data } = await axios.post(
    \`\${process.env.API_BASE_URL}/auth/client-user-token\`,
    {
      client_id: process.env.SAGEION_APP_NAME,
      client_secret: process.env.SAGEION_CLIENT_SECRET,
      user_id: String(userId),
    }
  );
  return data.token; // use as Bearer token for agent-initiated calls
}`,language:"javascript"}]},{label:"Python",content:[{tag_type:"h4",text:"Backend handler — Python (FastAPI)"},{tag_type:"code_with_copy",code:`import os
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

SAGEION_APP_NAME = os.environ["SAGEION_APP_NAME"]
SAGEION_CLIENT_SECRET = os.environ["SAGEION_CLIENT_SECRET"]


class ClientUserTokenBody(BaseModel):
    client_id: str
    client_secret: str
    user_id: int
    session_id: str | None = None


@router.post("/client-user-token")
async def client_user_token(body: ClientUserTokenBody):
    # 1. Verify client credentials
    if body.client_id != SAGEION_APP_NAME or body.client_secret != SAGEION_CLIENT_SECRET:
        raise HTTPException(status_code=401, detail="Invalid client credentials")

    # 2. Verify the user exists
    user = await fetch_user(body.user_id)   # your own DB helper
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    # 3. Issue a scoped, short-lived token
    scopes = ["booking:read", "booking:create", "booking:update", "booking:cancel"]
    token = issue_agent_token(             # your own token issuer
        user_id=body.user_id,
        scopes=scopes,
        client_id=body.client_id,
        session_id=body.session_id,
    )
    return {
        "token": token,
        "expires_in": 3600,
        "scope": scopes,
        "user_id": str(body.user_id),
    }`,language:"python"},{tag_type:"h5",text:"Calling it from your agent workflow (Python)"},{tag_type:"code_with_copy",code:`import os
import httpx

async def get_agent_token(user_id: int) -> str:
    async with httpx.AsyncClient(timeout=5.0) as client:
        r = await client.post(
            f"{os.environ['API_BASE_URL']}/auth/client-user-token",
            json={
                "client_id": os.environ["SAGEION_APP_NAME"],
                "client_secret": os.environ["SAGEION_CLIENT_SECRET"],
                "user_id": str(user_id),
            },
        )
        r.raise_for_status()
        return r.json()["token"]`,language:"python"}]},{label:"Go",content:[{tag_type:"h4",text:"Backend handler — Go"},{tag_type:"code_with_copy",code:`package auth

import (
    "encoding/json"
    "net/http"
    "os"
    "strconv"
)

type clientUserTokenBody struct {
    ClientID     string \`json:"client_id"\`
    ClientSecret string \`json:"client_secret"\`
    UserID       string \`json:"user_id"\`
    SessionID    string \`json:"session_id,omitempty"\`
}

func ClientUserTokenHandler(w http.ResponseWriter, r *http.Request) {
    var body clientUserTokenBody
    if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
        http.Error(w, "bad request", http.StatusBadRequest)
        return
    }

    // 1. Verify client credentials
    if body.ClientID != os.Getenv("SAGEION_APP_NAME") ||
        body.ClientSecret != os.Getenv("SAGEION_CLIENT_SECRET") {
        http.Error(w, "invalid client credentials", http.StatusUnauthorized)
        return
    }

    // 2. Verify the user exists
    uid, err := strconv.ParseInt(body.UserID, 10, 64)
    if err != nil {
        http.Error(w, "user_id must be numeric", http.StatusBadRequest)
        return
    }
    if !userExists(uid) {                // your own DB helper
        http.Error(w, "user not found", http.StatusNotFound)
        return
    }

    // 3. Issue a scoped, short-lived token
    scopes := []string{"booking:read", "booking:create", "booking:update", "booking:cancel"}
    token := issueAgentToken(uid, scopes, body.ClientID, body.SessionID)

    json.NewEncoder(w).Encode(map[string]any{
        "token":      token,
        "expires_in": 3600,
        "scope":      scopes,
        "user_id":    body.UserID,
    })
}`,language:"go"},{tag_type:"h5",text:"Calling it from your agent workflow (Go)"},{tag_type:"code_with_copy",code:`package agent

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "os"
    "time"
)

func GetAgentToken(userID int64) (string, error) {
    payload, _ := json.Marshal(map[string]string{
        "client_id":     os.Getenv("SAGEION_APP_NAME"),
        "client_secret": os.Getenv("SAGEION_CLIENT_SECRET"),
        "user_id":       fmt.Sprintf("%d", userID),
    })
    req, _ := http.NewRequest("POST",
        os.Getenv("API_BASE_URL")+"/auth/client-user-token",
        bytes.NewReader(payload))
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{Timeout: 5 * time.Second}
    resp, err := client.Do(req)
    if err != nil { return "", err }
    defer resp.Body.Close()

    var out struct{ Token string \`json:"token"\` }
    if err := json.NewDecoder(resp.Body).Decode(&out); err != nil { return "", err }
    return out.Token, nil
}`,language:"go"}]},{label:"PHP",content:[{tag_type:"h4",text:"Backend handler — PHP (Laravel)"},{tag_type:"code_with_copy",code:`<?php
// routes/api.php
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Route;

Route::post('/client-user-token', function (Request $request) {
    // 1. Verify client credentials
    if ($request->client_id !== env('SAGEION_APP_NAME') ||
        $request->client_secret !== env('SAGEION_CLIENT_SECRET')) {
        return response()->json(['error' => 'Invalid client credentials'], 401);
    }

    // 2. Verify the user exists
    $user = \\App\\Models\\User::find($request->user_id);
    if (!$user) {
        return response()->json(['error' => 'User not found'], 404);
    }

    // 3. Issue a scoped, short-lived token
    $scopes = ['booking:read', 'booking:create', 'booking:update', 'booking:cancel'];
    $token = issue_agent_token(
        userId: (int) $user->id,
        scopes: $scopes,
        clientId: $request->client_id,
        sessionId: $request->session_id,
    );

    return response()->json([
        'token'      => $token,
        'expires_in' => 3600,
        'scope'      => $scopes,
        'user_id'    => (string) $user->id,
    ]);
});`,language:"php"},{tag_type:"h5",text:"Calling it from your agent workflow (PHP)"},{tag_type:"code_with_copy",code:`<?php
use Illuminate\\Support\\Facades\\Http;

function get_agent_token(int $userId): string {
    $response = Http::timeout(5)->post(
        env('API_BASE_URL') . '/auth/client-user-token',
        [
            'client_id'     => env('SAGEION_APP_NAME'),
            'client_secret' => env('SAGEION_CLIENT_SECRET'),
            'user_id'       => (string) $userId,
        ]
    );
    return $response->json('token');
}`,language:"php"}]},{label:"Ruby",content:[{tag_type:"h4",text:"Backend handler — Ruby (Rails)"},{tag_type:"code_with_copy",code:`# config/routes.rb
post '/auth/client-user-token', to: 'auth#client_user_token'

# app/controllers/auth_controller.rb
class AuthController < ApplicationController
  skip_before_action :verify_authenticity_token

  def client_user_token
    # 1. Verify client credentials
    unless params[:client_id] == ENV['SAGEION_APP_NAME'] &&
           params[:client_secret] == ENV['SAGEION_CLIENT_SECRET']
      return render json: { error: 'Invalid client credentials' }, status: :unauthorized
    end

    # 2. Verify the user exists
    user = User.find_by(id: params[:user_id])
    return render json: { error: 'User not found' }, status: :not_found unless user

    # 3. Issue a scoped, short-lived token
    scopes = %w[booking:read booking:create booking:update booking:cancel]
    token = issue_agent_token(
      user_id:    user.id,
      scopes:     scopes,
      client_id:  params[:client_id],
      session_id: params[:session_id]
    )

    render json: {
      token:      token,
      expires_in: 3600,
      scope:      scopes,
      user_id:    user.id.to_s
    }
  end
end`,language:"ruby"},{tag_type:"h5",text:"Calling it from your agent workflow (Ruby)"},{tag_type:"code_with_copy",code:`require 'faraday'
require 'json'

def get_agent_token(user_id)
  conn = Faraday.new(url: ENV['API_BASE_URL'])
  response = conn.post('/auth/client-user-token') do |req|
    req.headers['Content-Type'] = 'application/json'
    req.body = {
      client_id:     ENV['SAGEION_APP_NAME'],
      client_secret: ENV['SAGEION_CLIENT_SECRET'],
      user_id:       user_id.to_s
    }.to_json
  end
  JSON.parse(response.body)['token']
end`,language:"ruby"}]}]},{tag_type:"h4",text:"2. OTP endpoints ([[/auth/send-otp]], [[/auth/verify-otp]])",selector_uid:"v2_agent_otp"},{tag_type:"p",text:"Two endpoints back an OTP flow, useful when an action triggered from chat needs a second factor of confirmation — for example, cancelling a booking."},{tag_type:"callout",type:"warning",title:"OTP is not your login",children:[{tag_type:"p",text:"These endpoints verify one-off actions. They are separate from your main login flow and do not issue a session token."}]},{tag_type:"h5",text:"2a. Send OTP — POST [[/auth/send-otp]]"},{tag_type:"table",headers:["Field","Type","Required","Description"],rows:[["[[email]]","string","Yes","Email address the OTP is associated with."]]},{tag_type:"p",text:"Generates a 6-digit OTP, stores it against the email, and expires it after 5 minutes. The reference implementation logs the OTP — plug in your own email provider for delivery."},{tag_type:"callout",type:"warning",title:"Response contract — required fields",children:[{tag_type:"table",headers:["Field","Type","Required","Why it matters"],rows:[["[[success]]","boolean","Yes","The workflow engine checks this to decide whether to proceed to the verification step."]]},{tag_type:"p",text:"Return this object at the top level with HTTP [[200]]. If sending fails (bad email, provider outage), return HTTP [[400]] or [[500]] — do not return [[200]] with [[success: false]], because the workflow engine treats [[2xx]] as authoritative."}]},{tag_type:"h5",text:"Reference implementation by language — [[/send-otp]]"},{tag_type:"tabs",items:[{label:"Node.js",content:[{tag_type:"code_with_copy",code:`// routes/auth.js — send OTP
router.post('/send-otp', [
  body('email').isEmail().normalizeEmail(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 min

  try {
    await pool.query(
      \`INSERT INTO otps (email, otp, expires_at) VALUES ($1, $2, $3)
       ON CONFLICT (email) DO UPDATE SET otp = $2, expires_at = $3\`,
      [email, otp, expiresAt]
    );
    // TODO: send via your email provider
    console.log(\`[OTP] Sent OTP \${otp} to \${email}\`);
    res.json({ success: true, message: 'OTP sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});`,language:"javascript"}]},{label:"Python",content:[{tag_type:"code_with_copy",code:`import random
from datetime import datetime, timedelta
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter()


class SendOtpBody(BaseModel):
    email: EmailStr


@router.post("/send-otp")
async def send_otp(body: SendOtpBody):
    otp = f"{random.randint(100000, 999999)}"
    expires_at = datetime.utcnow() + timedelta(minutes=5)

    await upsert_otp(body.email, otp, expires_at)   # your own DB helper

    # TODO: send via your email provider
    print(f"[OTP] Sent OTP {otp} to {body.email}")
    return {"success": True, "message": "OTP sent"}`,language:"python"}]},{label:"Go",content:[{tag_type:"code_with_copy",code:`package auth

import (
    "encoding/json"
    "fmt"
    "math/rand"
    "net/http"
    "time"
)

type sendOtpBody struct {
    Email string \`json:"email"\`
}

func SendOtpHandler(w http.ResponseWriter, r *http.Request) {
    var body sendOtpBody
    if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
        http.Error(w, "bad request", http.StatusBadRequest)
        return
    }

    otp := fmt.Sprintf("%06d", rand.Intn(900000)+100000)
    expiresAt := time.Now().Add(5 * time.Minute)

    if err := upsertOTP(body.Email, otp, expiresAt); err != nil {   // your own DB helper
        http.Error(w, "server error", http.StatusInternalServerError)
        return
    }

    // TODO: send via your email provider
    fmt.Printf("[OTP] Sent OTP %s to %s\\n", otp, body.Email)

    json.NewEncoder(w).Encode(map[string]any{
        "success": true,
        "message": "OTP sent",
    })
}`,language:"go"}]},{label:"PHP",content:[{tag_type:"code_with_copy",code:`<?php
// routes/api.php
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\Facades\\Route;

Route::post('/send-otp', function (Request $request) {
    $request->validate(['email' => 'required|email']);

    $otp = str_pad((string) random_int(100000, 999999), 6, '0', STR_PAD_LEFT);
    $expiresAt = now()->addMinutes(5);

    DB::table('otps')->updateOrInsert(
        ['email' => $request->email],
        ['otp' => $otp, 'expires_at' => $expiresAt]
    );

    // TODO: send via your email provider
    \\Log::info("[OTP] Sent OTP {$otp} to {$request->email}");

    return response()->json(['success' => true, 'message' => 'OTP sent']);
});`,language:"php"}]},{label:"Ruby",content:[{tag_type:"code_with_copy",code:`# config/routes.rb
post '/auth/send-otp', to: 'auth#send_otp'

# app/controllers/auth_controller.rb
def send_otp
  email = params[:email]

  otp = format('%06d', rand(100000..999999))
  expires_at = Time.now + 5 * 60

  Otp.upsert({ email: email, otp: otp, expires_at: expires_at },
             unique_by: :email)

  # TODO: send via your email provider
  Rails.logger.info("[OTP] Sent OTP #{otp} to #{email}")

  render json: { success: true, message: 'OTP sent' }
end`,language:"ruby"}]}]},{tag_type:"h5",text:"2b. Verify OTP — POST [[/auth/verify-otp]]"},{tag_type:"table",headers:["Field","Type","Required","Description"],rows:[["[[email]]","string","Yes","The email the OTP was sent to."],["[[otp]]","string","Yes","The 6-digit code the user entered."]]},{tag_type:"p",text:"On success, returns [[{ success: true, user_id }]] so the workflow can continue with the verified identity. The OTP record is deleted after verification."},{tag_type:"callout",type:"warning",title:"Response contract — required fields",children:[{tag_type:"table",headers:["Field","Type","Required","Why it matters"],rows:[["[[success]]","boolean","Yes","The workflow engine checks this to allow the OTP-gated action to proceed."],["[[user_id]]","string","Yes","The verified user's id. The workflow continues with this identity — omitting it breaks any downstream user-scoped call."]]},{tag_type:"p",text:"Return this object at the top level with HTTP [[200]]. On verification failure, return HTTP [[400]] with a plain JSON body."}]},{tag_type:"callout",type:"info",title:"user_id must be a string",children:[{tag_type:"p",text:'JSON numbers lose leading zeros and can be represented inconsistently across languages (JavaScript numbers, Go int64, Python int). To keep the identity check reliable, always return [[user_id]] as a JSON string — for example "[[user_id]]": "[[12345]]" — even if your database column is an integer.'}]},{tag_type:"h5",text:"Reference implementation by language — [[/verify-otp]]"},{tag_type:"tabs",items:[{label:"Node.js",content:[{tag_type:"code_with_copy",code:`// routes/auth.js — verify OTP
router.post('/verify-otp', [
  body('email').isEmail().normalizeEmail(),
  body('otp').isLength({ min: 6, max: 6 }).matches(/^\\d+$/),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { email, otp } = req.body;
  try {
    const result = await pool.query(
      'SELECT otp, expires_at FROM otps WHERE email = $1',
      [email]
    );
    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'No OTP request found' });
    }
    const record = result.rows[0];
    if (record.otp !== otp) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }
    if (new Date() > new Date(record.expires_at)) {
      return res.status(400).json({ error: 'OTP expired' });
    }

    const userResult = await pool.query(
      'SELECT id FROM users WHERE email = $1', [email]
    );
    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    const userId = userResult.rows[0].id;

    await pool.query('DELETE FROM otps WHERE email = $1', [email]);

    res.json({
      success: true,
      message: 'OTP verified successfully',
      user_id: userId.toString(),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});`,language:"javascript"}]},{label:"Python",content:[{tag_type:"code_with_copy",code:`from datetime import datetime
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter()


class VerifyOtpBody(BaseModel):
    email: EmailStr
    otp: str


@router.post("/verify-otp")
async def verify_otp(body: VerifyOtpBody):
    if not body.otp.isdigit() or len(body.otp) != 6:
        raise HTTPException(status_code=400, detail="Invalid OTP format")

    record = await fetch_otp(body.email)   # your own DB helper
    if record is None:
        raise HTTPException(status_code=400, detail="No OTP request found")
    if record["otp"] != body.otp:
        raise HTTPException(status_code=400, detail="Invalid OTP")
    if datetime.utcnow() > record["expires_at"]:
        raise HTTPException(status_code=400, detail="OTP expired")

    user = await fetch_user_by_email(body.email)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    await delete_otp(body.email)

    return {
        "success": True,
        "message": "OTP verified successfully",
        "user_id": str(user["id"]),
    }`,language:"python"}]},{label:"Go",content:[{tag_type:"code_with_copy",code:`package auth

import (
    "encoding/json"
    "net/http"
    "strconv"
    "time"
)

type verifyOtpBody struct {
    Email string \`json:"email"\`
    Otp   string \`json:"otp"\`
}

func VerifyOtpHandler(w http.ResponseWriter, r *http.Request) {
    var body verifyOtpBody
    if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
        http.Error(w, "bad request", http.StatusBadRequest)
        return
    }
    if len(body.Otp) != 6 {
        http.Error(w, "invalid OTP format", http.StatusBadRequest)
        return
    }

    rec, err := fetchOTP(body.Email)   // your own DB helper
    if err != nil || rec == nil {
        http.Error(w, "no OTP request found", http.StatusBadRequest)
        return
    }
    if rec.Otp != body.Otp {
        http.Error(w, "invalid OTP", http.StatusBadRequest)
        return
    }
    if time.Now().After(rec.ExpiresAt) {
        http.Error(w, "OTP expired", http.StatusBadRequest)
        return
    }

    user, err := fetchUserByEmail(body.Email)
    if err != nil || user == nil {
        http.Error(w, "user not found", http.StatusNotFound)
        return
    }

    _ = deleteOTP(body.Email)

    json.NewEncoder(w).Encode(map[string]any{
        "success": true,
        "message": "OTP verified successfully",
        "user_id": strconv.FormatInt(user.ID, 10),
    })
}`,language:"go"}]},{label:"PHP",content:[{tag_type:"code_with_copy",code:`<?php
// routes/api.php
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\Facades\\Route;

Route::post('/verify-otp', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'otp'   => 'required|digits:6',
    ]);

    $record = DB::table('otps')->where('email', $request->email)->first();
    if (!$record) {
        return response()->json(['error' => 'No OTP request found'], 400);
    }
    if ($record->otp !== $request->otp) {
        return response()->json(['error' => 'Invalid OTP'], 400);
    }
    if (now()->greaterThan($record->expires_at)) {
        return response()->json(['error' => 'OTP expired'], 400);
    }

    $user = \\App\\Models\\User::where('email', $request->email)->first();
    if (!$user) {
        return response()->json(['error' => 'User not found'], 404);
    }

    DB::table('otps')->where('email', $request->email)->delete();

    return response()->json([
        'success' => true,
        'message' => 'OTP verified successfully',
        'user_id' => (string) $user->id,
    ]);
});`,language:"php"}]},{label:"Ruby",content:[{tag_type:"code_with_copy",code:`# config/routes.rb
post '/auth/verify-otp', to: 'auth#verify_otp'

# app/controllers/auth_controller.rb
def verify_otp
  email = params[:email]
  otp   = params[:otp]

  return render json: { error: 'Invalid OTP format' }, status: :bad_request unless otp&.match?(/^\\d{6}$/)

  record = Otp.find_by(email: email)
  return render json: { error: 'No OTP request found' }, status: :bad_request unless record
  return render json: { error: 'Invalid OTP' }, status: :bad_request unless record.otp == otp
  return render json: { error: 'OTP expired' }, status: :bad_request if Time.now > record.expires_at

  user = User.find_by(email: email)
  return render json: { error: 'User not found' }, status: :not_found unless user

  record.destroy

  render json: {
    success: true,
    message: 'OTP verified successfully',
    user_id: user.id.to_s
  }
end`,language:"ruby"}]}]},{tag_type:"callout",type:"success",title:"✅ You're done with the base integration",children:[{tag_type:"p",text:'Everything above the "Binding the AI agent to a user" section is what you need to get Sageion working. Everything from that section onward is additive — nothing there is required for the chat box to work.'}]}]}],[{tag_type:"div",children:[{tag_type:"h2",text:"Platform",selector_uid:"v2_platform_overview"},{tag_type:"p",text:"The Sageion Admin Platform provides comprehensive tools for managing your chat applications, users, and system settings. Below is an overview of the key sections available in the Admin UI."},{tag_type:"h3",text:"Global Level Settings",selector_uid:"v2_global_level_settings"},{tag_type:"p",text:"These settings apply across all applications within your tenant, providing centralized control over system-wide configurations."},{tag_type:"callout",type:"warning",title:"🔐 Admin Access Required",children:[{tag_type:"p",text:"Only users with ADMIN or MANAGER role have access to these settings. If you don't see these options, contact your system administrator."}]},{tag_type:"h4",text:"Global Tenant Settings",selector_uid:"v2_global_tenant_settings"},{tag_type:"p",text:"The Global Tenant Settings page allows administrators to configure tenant-wide features that affect all applications under the tenant."},{tag_type:"tabs",items:[{label:"Advanced Email Notifications",content:[{tag_type:"p",text:"Enables email notifications at various useful events across all applications. This toggle controls whether email alerts are sent for key system events."},{tag_type:"h5",text:"📧 Available Notification Triggers"},{tag_type:"table",headers:["Trigger","Description","Availability"],rows:[["FIRST MSG ON ANY APP","Triggers when the first message arrives on any app since admin went offline","All Plans"],["FIRST MSG ON EVERY APP","Triggers when the first message arrives on every app since admin went offline","📌 ADVANCE Plan Only"]]},{tag_type:"callout",type:"info",title:"Configuration Options",children:[{tag_type:"p",text:"Email notifications can be customized per event type. Configure which events trigger emails and the recipient list in the settings panel."}]},{tag_type:"callout",type:"warning",title:"Plan Restriction",children:[{tag_type:"p",text:'"FIRST MSG ON EVERY APP" is only available on the ADVANCE plan. Upgrade your plan to access this feature.'}]}]},{label:"Multi Admin",content:[{tag_type:"p",text:"Enables multi-administrator support for your tenant. This allows multiple users to have ADMIN-level access to the system."},{tag_type:"h5",text:"✅ What Multi-Admin Enables"},{tag_type:"ul",items:[{text:"Multiple administrators can manage the tenant"},{text:"Invite Support User feature becomes available"},{text:"Share Integration Steps feature becomes available"},{text:"Granular permission assignment for team members"}]},{tag_type:"callout",type:"danger",title:"🚫 Permanent Action - Cannot Be Undone",children:[{tag_type:"p",text:"Once enabled, Multi Admin cannot be disabled. This is a permanent system change that will:"},{tag_type:"ol",items:[{text:"Notify all active clients to sync the new settings"},{text:"Log you out automatically — you'll need to log in again"},{text:"Enable the 'Invite Support User' and 'Share Integration Steps' features"}]}]},{tag_type:"mesgTip",title:"💡 Pro Tip",children:[{tag_type:"p",text:"Before enabling Multi-Admin, ensure you have all necessary team members identified and their roles defined. This will streamline the permission assignment process."}]}]}]},{tag_type:"h4",text:"Invite Support User",selector_uid:"v2_invite_support"},{tag_type:"p",text:"Invite team members as support users with granular permission controls. This feature allows you to add users with specific roles and permissions to manage your applications."},{tag_type:"callout",type:"info",title:"📌 Multi-Admin Required",children:[{tag_type:"p",text:"The Invite Support User feature requires Multi-Admin to be enabled in Global Tenant Settings first. This ensures proper permission hierarchy and security."}]},{tag_type:"tabs",items:[{label:"Available Roles",content:[{tag_type:"h5",text:"👤 User Roles"},{tag_type:"table",headers:["Role","Access Level","Primary Responsibilities"],rows:[["MANAGER","Full Access","Manage applications, settings, and users"],["DEVELOPER","Technical Access","API configuration, workflows, and technical settings"],["CUSTOMER_CARE_EXECUTIVE","Limited Access","All Chats and user management"]]},{tag_type:"callout",type:"info",title:"Role Assignment",children:[{tag_type:"p",text:"Users can be assigned multiple roles. The combination of roles determines the user's overall permissions."}]},{tag_type:"mesgTip",title:"💡 Best Practice",children:[{tag_type:"p",text:"Assign the minimum required roles to each user to maintain security best practices."}]}]},{label:"Permission Types",content:[{tag_type:"h5",text:"🔑 App-Specific Permissions"},{tag_type:"table",headers:["Permission","Description","Use Case"],rows:[["read","View application data and settings","Read-only access"],["delete","Remove applications and resources","Cleanup and maintenance"],["manage","Full administrative control","Complete app management"]]},{tag_type:"h5",text:"✨ Create Permissions"},{tag_type:"ul",items:[{text:"create_apps - Allows creating new applications"},{text:"create_users - Allows creating new users (automatically includes write permission)"}]},{tag_type:"callout",type:"info",title:"Permission Levels",children:[{tag_type:"p",text:"Permissions can be assigned at the app level or globally. App-specific permissions override global permissions when both are configured."}]}]},{label:"How to Invite",content:[{tag_type:"h5",text:"📋 Step-by-Step Process"},{tag_type:"steps",items:[{title:"Navigate to Invite Support User",content:[{tag_type:"p",text:"Access this page from the sidebar under 'Global Level Settings'."}]},{title:"Select Mode",content:[{tag_type:"p",text:"Switch to 'Invite User' mode if not already selected."}]},{title:"Enter User Details",content:[{tag_type:"p",text:"Enter the user's email address and optional full name."}]},{title:"Assign Roles & Permissions",content:[{tag_type:"p",text:"Select the roles to assign and configure app-specific permissions."}]},{title:"Send Invite",content:[{tag_type:"p",text:"Click 'Send Invite' to send the invitation. The user will receive an email with access instructions."}]}]},{tag_type:"callout",type:"success",title:"✅ Invitation Flow",children:[{tag_type:"p",text:"The invited user will receive an email with a link to accept the invitation. Once accepted, they can access the system with the assigned permissions."}]}]}]},{tag_type:"h4",text:"Whitelabel Domains",selector_uid:"v2_whitelabel_domains"},{tag_type:"p",text:"Configure custom domains for your applications to maintain brand consistency. This allows you to serve the Sageion chat interface from your own domain."},{tag_type:"h5",text:"Available Features"},{tag_type:"ol",items:[{text:"Add custom domain names for your applications"},{text:"SSL certificate management"},{text:"DNS configuration guidance"}]},{tag_type:"callout",type:"info",title:"DNS Configuration Guide",children:[{tag_type:"p",text:"To set up a custom domain:"},{tag_type:"ol",items:[{text:"Add your domain in the Whitelabel Domains section"},{text:"Configure DNS records as instructed"},{text:"Wait for DNS propagation (24-48 hours)"},{text:"Verify the domain and enable SSL"}]}]},{tag_type:"callout",type:"success",title:"✅ Setup Complete",children:[{tag_type:"p",text:"Once configured, your chat interface will be served from your custom domain, providing a seamless brand experience for your users."}]},{tag_type:"h3",text:"FAQ Chat & Lead Generation",selector_uid:"v2_faq_chat_lead_gen"},{tag_type:"p",text:"The FAQ Chat & Lead Generation section provides powerful tools for building interactive FAQ trees, managing leads, and capturing visitor information through forms."},{tag_type:"h4",text:"LeadGen & FAQ",selector_uid:"v2_leadgen_faq"},{tag_type:"p",text:"This feature combines two powerful capabilities: Interactive FAQ/Q&A Trees and Lead Generation."},{tag_type:"callout",type:"info",title:"Two Modes",children:[{tag_type:"ol",items:[{text:"FAQ/Q&A Tree Mode: Build hierarchical question-answer structures"},{text:"Lead Generation Mode: Capture leads at any node in the tree"}]}]},{tag_type:"h5",text:"🌳 FAQ Tree Builder"},{tag_type:"p",text:"The Dynamic Tree Builder allows you to create structured FAQ content:"},{tag_type:"ol",items:[{text:"Create hierarchical question-answer trees"},{text:"Add sub-questions and answers"},{text:"Attach lead generation forms at any node"},{text:"Enable/disable the FAQ bot content"}]},{tag_type:"callout",type:"warning",title:"⚠️ At Least One Chatbot Required",children:[{tag_type:"p",text:"You must have at least one chatbot enabled at all times. The system validates that either AI Chat, Live Agent, or FAQ Bot is active. You cannot disable all chatbots simultaneously."}]},{tag_type:"h5",text:"🎯 Lead Generation Management"},{tag_type:"p",text:"Capture and manage leads from your FAQ forms and other sources:"},{tag_type:"ol",items:[{text:"View all captured leads with timestamps and metadata"},{text:"Export leads to XLSX or CSV format"},{text:"Leads are automatically stored in the Admin Panel"},{text:"Connect to external servers via AI Agent workflows"}]},{tag_type:"table",headers:["Lead Field","Description"],rows:[["Lead ID","Unique identifier for each lead"],["Timestamp","When the lead was captured"],["Lead Data","Form fields and user responses"],["Metadata","Additional context (source, page, etc.)"]]},{tag_type:"h5",text:"📝 Bot Forms & Post-Processing"},{tag_type:"p",text:"Configure how forms behave and what happens after submission:"},{tag_type:"table",headers:["Template Type","Description","Use Case"],rows:[["THANK_YOU","Shows appreciation message","Simple thank you response"],["GET_BACK_TO_YOU_SHORTLY","Informs about follow-up","Lead qualification"]]},{tag_type:"callout",type:"info",title:"Lead Storage Options",children:[{tag_type:"ol",items:[{text:"Built-in Storage: Leads stored in Sageion Admin Panel under Lead Generation section"},{text:"External Integration: Send to external servers via orchestrated AI Agent workflows"}]}]},{tag_type:"h5",text:"🔧 Form Field Configuration"},{tag_type:"p",text:"Each form can have multiple fields with the following properties:"},{tag_type:"table",headers:["Field Property","Description","Example"],rows:[["Label","Display name","Email Address"],["Type","Field type","text, email, phone, etc."],["Required","Whether field is mandatory","true/false"],["Placeholder","Hint text","Enter your email"]]},{tag_type:"callout",type:"success",title:"✅ Best Practice",children:[{tag_type:"p",text:"Keep lead capture forms short and focused on essential information to maximize conversion rates."}]},{tag_type:"h5",text:"🔄 Update Process"},{tag_type:"p",text:"When updating LeadGen & FAQ settings:"},{tag_type:"ol",items:[{text:"Make your changes to the FAQ tree or lead settings"},{text:"Click the 'Update' button at the bottom"},{text:"Review the confirmation modal (all clients will be rebooted)"},{text:"Confirm to apply changes"}]},{tag_type:"callout",type:"warning",title:"⚠️ Client Reboot Warning",children:[{tag_type:"p",text:"Updating LeadGen & FAQ settings will reboot all active clients to sync the new configuration."}]},{tag_type:"accordion",title:"📖 Quick Navigation Guide",children:[{tag_type:"ol",items:[{text:"FAQ Tree Builder → Build and organize Q&A content"},{text:"Lead Generation → View and export captured leads"},{text:"Bot Forms → Configure forms and post-processing templates"},{text:"Update → Save and apply changes"}]}]},{tag_type:"callout",type:"success",title:"✅ FAQ Chat & Lead Generation Overview Complete",children:[{tag_type:"p",text:"The LeadGen & FAQ feature provides a complete solution for building interactive FAQ trees and capturing leads from your website visitors."}]},{tag_type:"h3",text:"Live Agent",selector_uid:"v2_live_agent"},{tag_type:"p",text:"The Live Agent feature enables real-time human-to-human chat support, allowing you to interact directly with your website visitors and provide personalized assistance."},{tag_type:"h4",text:"Live Agent Features",selector_uid:"v2_live_agent_features"},{tag_type:"p",text:"Configure all aspects of your Live Agent experience including enabling/disabling, user capacity, chat appearance, messaging, and updates."},{tag_type:"tabs",items:[{label:"👥 Site Users & Limits",content:[{tag_type:"p",text:"Site Users represent the total number of unique visitors who can register and interact with your Live Agent. Each registered user consumes one slot from your capacity."},{tag_type:"h5",text:"📊 Understanding Your Capacity"},{tag_type:"table",headers:["Metric","Description"],rows:[["Plan Limit","Base number of user slots included in your plan"],["Top-ups Added","Additional slots purchased through top-ups"],["Total Capacity","Plan Limit + Top-ups Added"],["Available Slots","Remaining slots available for new users"]]},{tag_type:"ol",items:[{text:"Progress bar shows remaining capacity percentage"},{text:"Low capacity warning appears when below 20%"},{text:"Critical warning appears when 0 slots remain"}]},{tag_type:"callout",type:"info",title:"🔄 How Site Users Work",children:[{tag_type:"p",text:"Each unique visitor who registers or starts a chat session consumes one user slot. Slots are not released until the user is explicitly removed or the session expires."}]},{tag_type:"h5",text:"👥 Top-Up Options"},{tag_type:"p",text:"When you're running low on user slots, you can purchase additional capacity:"},{tag_type:"table",headers:["Slots Added","Price","Cost Per Slot"],rows:[["+125 Slots","₹1,500","~₹12 per slot"],["+250 Slots","₹3,000","~₹12 per slot"],["+375 Slots","₹4,500","~₹12 per slot"]]},{tag_type:"callout",type:"success",title:"💡 Pro Tip",children:[{tag_type:"p",text:"Top-ups are added permanently to your total capacity. Consider purchasing larger packages for better value if you expect high user growth."}]}]},{label:"🎨 Chat Opener Styles",content:[{tag_type:"p",text:"Customize the appearance of your Live Agent chat opener button to match your brand identity. The style you select will be applied to the chat button on your website."},{tag_type:"table",headers:["Style Name","Description","Best For"],rows:[["Default Style","Clean circular button with icon","Minimalist designs"],["Gradient Pulse","Gradient background with pulsing animation","Modern, eye-catching designs"],["Neomorphic Glass","Glassmorphism with soft shadows","Premium, sophisticated brands"]]},{tag_type:"callout",type:"info",title:"🎯 Visual Preview",children:[{tag_type:"ul",items:[{text:"Default Style: Simple, clean, and professional"},{text:"Gradient Pulse: Animated gradient with pulsing effect"},{text:"Neomorphic Glass: Glass-like appearance with soft shadows"}]}]},{tag_type:"callout",type:"success",title:"💡 Brand Consistency",children:[{tag_type:"p",text:"Choose a style that complements your brand colors and overall design language. The Gradient Pulse style works well for modern, dynamic brands while Neomorphic Glass suits premium, sophisticated aesthetics."}]}]},{label:"💬 Welcome & Offline Messages",content:[{tag_type:"p",text:"Configure the messages that users see when they first open the chat or when agents are unavailable."},{tag_type:"h5",text:"👋 Welcome Message"},{tag_type:"ul",items:[{text:"Displayed when the chat is first opened"},{text:"Max 50 words recommended"},{text:"Sets the tone for the conversation"}]},{tag_type:"code_with_copy",code:`Example: "Hello! 👋 How can we help you today? We're here to assist with any questions you may have."`,language:"text"},{tag_type:"h5",text:"📴 Offline Message"},{tag_type:"ul",items:[{text:"Displayed when no agents are available"},{text:"Max 30 words recommended"},{text:"Sets expectations for response time"}]},{tag_type:"code_with_copy",code:`Example: "We're offline right now. 📝 Please leave a message and we'll get back to you within 24 hours."`,language:"text"},{tag_type:"callout",type:"success",title:"💡 Best Practice",children:[{tag_type:"p",text:"Keep your welcome message friendly and inviting. Use the offline message to set clear expectations about response times. A warm, professional tone builds trust with your visitors."}]},{tag_type:"mesgTip",title:"💡 Pro Tip",children:[{tag_type:"p",text:"Test different message variations to see which ones get the best engagement. Personalize the welcome message with the visitor's name if possible."}]}]},{label:"🔘 Enabling Live Agent",content:[{tag_type:"p",text:"To enable and configure Live Agent features:"},{tag_type:"steps",items:[{title:"Navigate to Live Agent Settings",content:[{tag_type:"p",text:"Go to the Live Agent settings page from the sidebar under Platform → Live Agent."}]},{title:"Enable Live Agent Features",content:[{tag_type:"p",text:"Toggle the 'Live Agent Features' switch to ON. All live agent settings will appear below."}]},{title:"Configure Your Settings",content:[{tag_type:"p",text:"Use the tabs above to configure Site Users & Limits, Chat Opener Styles, and Welcome & Offline Messages."}]},{title:"Save Changes",content:[{tag_type:"p",text:"Click the 'Update Live Agent' button at the bottom of the page to save all changes."}]}]},{tag_type:"callout",type:"warning",title:"⚠️ At Least One Chatbot Required",children:[{tag_type:"p",text:"You must have at least one chatbot enabled at all times. The system validates that either AI Chat, QnA (LeadGen) Bot, or Live Agent is active. You cannot disable all chatbots simultaneously."}]},{tag_type:"mesgTip",title:"💡 Quick Start",children:[{tag_type:"p",text:"If you're new to Live Agent, start by enabling the feature, then configure your welcome message and choose a chat opener style. You can always come back later to fine-tune other settings."}]}]},{label:"🔄 Update Process",content:[{tag_type:"p",text:"When updating Live Agent settings, follow this process to ensure changes are applied correctly:"},{tag_type:"steps",items:[{title:"Make Your Changes",content:[{tag_type:"p",text:"Configure your Live Agent settings across the tabs above. All changes are saved locally until you click Update."}]},{title:"Click Update",content:[{tag_type:"p",text:"Click the 'Update Live Agent' button at the bottom of the settings page."}]},{title:"Review Confirmation",content:[{tag_type:"p",text:"A confirmation modal will appear warning that all clients will be rebooted."}]},{title:"Confirm Changes",content:[{tag_type:"p",text:"Click 'Ok' to confirm and apply changes, or 'Cancel' to abort."}]}]},{tag_type:"callout",type:"warning",title:"⚠️ Client Reboot Warning",children:[{tag_type:"p",text:"Updating Live Agent settings will reboot all active clients to sync the new configuration. Users may experience a brief interruption (1-2 seconds) while the new settings are applied."}]},{tag_type:"callout",type:"success",title:"✅ After Update",children:[{tag_type:"ul",items:[{text:"All connected clients will receive the new configuration"},{text:"Changes will take effect immediately after reboot"},{text:"New users will see the updated chat experience"}]}]}]}]},{tag_type:"accordion",title:"📖 Quick Navigation Guide",children:[{tag_type:"ol",items:[{text:"Site Users & Limits → Monitor user capacity and top-up"},{text:"Chat Opener Styles → Customize the chat button appearance"},{text:"Welcome/Offline Messages → Configure user messages"},{text:"Enabling Live Agent → Turn on/off live chat features"},{text:"Update Process → Save and apply changes"}]}]},{tag_type:"callout",type:"success",title:"✅ Live Agent Overview Complete",children:[{tag_type:"p",text:"The Live Agent feature provides real-time human chat support for your website visitors. Enable it to offer personalized assistance and improve customer satisfaction."},{tag_type:"p",text:"Monitor your Site Users capacity regularly and top up when needed to ensure you never run out of slots for new users."}]},{tag_type:"h3",text:"AI Chat",selector_uid:"v2_ai_chat"},{tag_type:"p",text:"The AI Chat feature provides intelligent conversational AI capabilities for your website, enabling automated customer support, lead qualification, and information retrieval using advanced language models."},{tag_type:"h4",text:"AI Chat Features",selector_uid:"v2_ai_chat_features"},{tag_type:"p",text:"Configure all aspects of your AI Chat experience including enabling/disabling, message credits, ingestion storage, data sources, and training."},{tag_type:"tabs",items:[{label:"🔘 Enable AI Agent",content:[{tag_type:"p",text:"The AI Agent bot provides automated conversational AI capabilities for your website visitors."},{tag_type:"h5",text:"How to Enable"},{tag_type:"ol",items:[{text:"Navigate to AI Chat settings from the sidebar"},{text:"Toggle the 'Enable AI Agent Bot' switch to ON"},{text:"All AI agent settings will appear below"},{text:"Configure your data sources and training"},{text:"Click 'Update AI Chat' to save changes"}]},{tag_type:"callout",type:"info",title:"🤖 What the AI Agent Can Do",children:[{tag_type:"ol",items:[{text:"Answer customer questions 24/7"},{text:"Qualify leads through conversation"},{text:"Retrieve information from your knowledge base"},{text:"Escalate complex issues to human agents"}]}]},{tag_type:"callout",type:"warning",title:"⚠️ At Least One Chatbot Required",children:[{tag_type:"p",text:"You must have at least one chatbot enabled at all times. The system validates that either AI Chat, QnA (LeadGen) Bot, or Live Agent is active. You cannot disable all chatbots simultaneously."}]}]},{label:"🔋 AI Message Credits",content:[{tag_type:"p",text:"AI Message Credits are consumed each time the AI Agent responds to a user query. Monitor your usage and top up when needed."},{tag_type:"h5",text:"📊 Understanding Your Credits"},{tag_type:"table",headers:["Metric","Description"],rows:[["Plan Limit","Base number of messages included in your plan"],["Top-ups Added","Additional messages purchased through top-ups"],["Total Capacity","Plan Limit + Top-ups Added"],["Available Credits","Remaining credits available for AI responses"]]},{tag_type:"ol",items:[{text:"Each AI response consumes 1 credit"},{text:"Progress bar shows remaining capacity percentage"},{text:"Low credit warning appears when below 20%"},{text:"Critical warning appears when 0 credits remain"}]},{tag_type:"h5",text:"⚡ Top-Up Options"},{tag_type:"p",text:"When you're running low on AI message credits, you can purchase additional capacity:"},{tag_type:"table",headers:["Messages Added","Price","Cost Per Message"],rows:[["+750 Messages","₹1,500","~₹2 per message"],["+1,500 Messages","₹3,000","~₹2 per message"],["+2,250 Messages","₹4,500","~₹2 per message"]]},{tag_type:"callout",type:"success",title:"💡 Pro Tip",children:[{tag_type:"p",text:"Monitor your AI message usage regularly to avoid service interruption. Top-ups are permanent additions to your total capacity."}]}]},{label:"📦 Ingestion Storage",content:[{tag_type:"p",text:"Ingestion Storage represents the total space available for storing your AI training documents, URLs, and sitemap data."},{tag_type:"h5",text:"📊 Understanding Your Storage"},{tag_type:"table",headers:["Metric","Description"],rows:[["Plan Limit","Base storage included in your plan"],["Top-ups Added","Additional storage purchased through top-ups"],["Total Capacity","Plan Limit + Top-ups Added"],["Available Storage","Remaining space for new documents"]]},{tag_type:"ul",items:[{text:"Each KB of documents consumes storage space"},{text:"Progress bar shows remaining capacity percentage"},{text:"Low storage warning appears when below 20%"},{text:"Critical warning appears when 0 storage remains"}]},{tag_type:"h5",text:"⚡ Top-Up Options"},{tag_type:"p",text:"When you're running low on storage, you can purchase additional capacity:"},{tag_type:"table",headers:["Storage Added","Price","Cost Per KB"],rows:[["+250,000 KB","₹1,500","~₹0.006 per KB"],["+500,000 KB","₹3,000","~₹0.006 per KB"],["+750,000 KB","₹4,500","~₹0.006 per KB"]]},{tag_type:"callout",type:"success",title:"💡 Pro Tip",children:[{tag_type:"p",text:"For large-scale knowledge bases, consider optimizing your documents to reduce storage usage. Remove redundant or outdated content regularly."}]}]},{label:"📦 Product Information",content:[{tag_type:"p",text:"Provide information about your product to help the AI Agent understand your business better. This context improves response quality and relevance."},{tag_type:"h5",text:"📝 Required Information"},{tag_type:"table",headers:["Field","Description","Example"],rows:[["Bot Name","The name that will appear as your bot's display name","SupportBot, AssistantPro"],["Bot Context","Description of your bot's purpose and capabilities","Helps customers with product inquiries, order tracking, and troubleshooting"]]},{tag_type:"callout",type:"info",title:"🤖 Why This Matters",children:[{tag_type:"p",text:"The product information provides critical context for the AI Agent. It helps the model understand your business domain, tone, and user expectations."}]},{tag_type:"callout",type:"warning",title:"⚠️ Required for Training",children:[{tag_type:"p",text:"Product Information is required before training the AI Agent. You'll be prompted to fill this in when you attempt to retrain without it."}]},{tag_type:"mesgTip",title:"💡 Best Practice",children:[{tag_type:"p",text:"Keep your bot context concise but informative. Include key differentiators, target audience, and primary use cases. This helps the AI Agent provide more relevant responses."}]}]},{label:"📂 Data Sources",content:[{tag_type:"p",text:"Configure the data sources that the AI Agent will use to answer user queries. You can upload files, add URLs, and configure sitemaps."},{tag_type:"h5",text:"📁 Files"},{tag_type:"ul",items:[{text:"Upload documents, PDFs, and text files"},{text:"Support for multiple file uploads"},{text:"Force Reingest option for updating existing files"},{text:"Force Delete option for removing ingested content"}]},{tag_type:"h5",text:"🌐 URLs"},{tag_type:"ul",items:[{text:"Add website URLs for crawling"},{text:"Allow Nested URLs to follow links within pages"},{text:"Explore Clickables to find content hidden behind interactions"},{text:"Force Reingest option for updating existing URLs"},{text:"Force Delete option for removing ingested content"}]},{tag_type:"callout",type:"info",title:"🔍 Explore Clickables Explained",children:[{tag_type:"p",text:"Explore Clickables goes through all clickable elements on your pages (tabs, accordions, dropdowns, etc.) to find meaningful content that might not be visible at first glance."}]},{tag_type:"h5",text:"🗺️ Sitemap"},{tag_type:"ul",items:[{text:"Upload sitemap XML for bulk URL ingestion"},{text:"📌 Coming Soon - This feature is under development"}]},{tag_type:"callout",type:"warning",title:"⚠️ Data Source Status",children:[{tag_type:"p",text:"Ingested files and URLs will show their status (Success/Failed). Failed items can be reviewed and retried."}]}]},{label:"🔄 Retraining Process",content:[{tag_type:"p",text:"Retraining updates the AI Agent's knowledge base with your latest data sources. Follow this process to ensure successful training:"},{tag_type:"steps",items:[{title:"Prepare Your Data Sources",content:[{tag_type:"p",text:"Add files, URLs, or sitemaps to the Data Sources section. Ensure all URLs are valid and files are properly formatted."}]},{title:"Configure Options",content:[{tag_type:"p",text:"Set Allow Nested URLs and Explore Clickables as needed. Use Force Reingest for updated content and Force Delete for content to remove."}]},{title:"Click Retrain",content:[{tag_type:"p",text:"Click the 'Retrain' button to prepare the training data. The button will show 'Ready to Train' when data is prepared."}]},{title:"Update AI Chat",content:[{tag_type:"p",text:"Click 'Update AI Chat' at the bottom of the page to save changes and start training in the background."}]},{title:"Monitor Training Status",content:[{tag_type:"p",text:"The AI Agent will show 'Training...' status while training is in progress. You'll receive a notification when training is complete."}]}]},{tag_type:"callout",type:"warning",title:"⚠️ Client Reboot Warning",children:[{tag_type:"p",text:"Updating AI Chat settings will reboot all active clients to sync the new configuration. Training continues in the background."}]},{tag_type:"callout",type:"success",title:"✅ After Training",children:[{tag_type:"ul",items:[{text:"The AI Agent will use the latest data sources"},{text:"Failed URLs and files can be reviewed and retried"},{text:"Data IDs for each ingested item are available for reference"}]}]}]},{label:"🔄 Update Process",content:[{tag_type:"p",text:"When updating AI Chat settings, follow this process to ensure changes are applied correctly:"},{tag_type:"steps",items:[{title:"Make Your Changes",content:[{tag_type:"p",text:"Configure your AI Chat settings across the tabs above. All changes are saved locally until you click Update."}]},{title:"Click Update",content:[{tag_type:"p",text:"Click the 'Update AI Chat' button at the bottom of the settings page."}]},{title:"Review Confirmation",content:[{tag_type:"p",text:"A confirmation modal will appear warning that all clients will be rebooted."}]},{title:"Confirm Changes",content:[{tag_type:"p",text:"Click 'Ok' to confirm and apply changes, or 'Cancel' to abort."}]}]},{tag_type:"callout",type:"warning",title:"⚠️ Client Reboot Warning",children:[{tag_type:"p",text:"Updating AI Chat settings will reboot all active clients to sync the new configuration. Users may experience a brief interruption (1-2 seconds) while the new settings are applied."}]},{tag_type:"callout",type:"success",title:"✅ After Update",children:[{tag_type:"ul",items:[{text:"All connected clients will receive the new configuration"},{text:"Changes will take effect immediately after reboot"},{text:"Training will continue in the background if initiated"}]}]}]}]},{tag_type:"accordion",title:"📖 Quick Navigation Guide",children:[{tag_type:"ol",items:[{text:"Enable AI Agent → Turn on/off AI chat features"},{text:"AI Message Credits → Monitor usage and top-up"},{text:"Ingestion Storage → Manage storage capacity"},{text:"Product Information → Provide bot context"},{text:"Data Sources → Add files, URLs, and sitemaps"},{text:"Retraining Process → Update AI knowledge base"},{text:"Update → Save and apply changes"}]}]},{tag_type:"callout",type:"success",title:"✅ AI Chat Overview Complete",children:[{tag_type:"p",text:"The AI Chat feature provides intelligent conversational AI for your website. Enable it to automate customer support, qualify leads, and provide 24/7 assistance."},{tag_type:"p",text:"Monitor your AI message credits and ingestion storage regularly. Top up when needed and retrain your AI Agent with fresh data to keep responses accurate and relevant."}]},{tag_type:"h3",text:"All Chat",selector_uid:"v2_all_chat"},{tag_type:"p",text:"The All Chat feature provides a comprehensive real-time messaging interface for agents to communicate with site visitors, manage conversations, and provide support across all applications."},{tag_type:"h4",text:"All Chat Features",selector_uid:"v2_all_chat_features"},{tag_type:"p",text:"The All Chat interface provides a complete messaging solution for support agents, including user management, real-time messaging, file sharing, and conversation history."},{tag_type:"tabs",items:[{label:"💬 Chat Interface Overview",content:[{tag_type:"p",text:"The All Chat interface is divided into two main sections: the left sidebar showing all users and the right panel displaying the active conversation."},{tag_type:"h5",text:"📱 Interface Layout"},{tag_type:"table",headers:["Section","Description","Key Features"],rows:[["Left Sidebar","Displays all users across all applications","User list, online status, unread counts, app grouping"],["Right Panel","Shows the active conversation","Message history, typing indicator, message input, file upload"]]},{tag_type:"ol",items:[{text:"Users are grouped by application for easy navigation"},{text:"Each user shows their name, online status, and unread message count"},{text:"Click on a user to open the conversation"},{text:"The chat header displays the user's name and online status"}]},{tag_type:"img",src:"/Asset/all_chat_interface.png",alt:"All Chat Interface Overview"},{tag_type:"callout",type:"info",title:"💡 Quick Navigation",children:[{tag_type:"p",text:"Use the 'Back to Users' button in the chat header to return to the user list. The 'Refresh' button at the top reloads the entire user list."}]}]},{label:"👥 User List & Management",content:[{tag_type:"p",text:"The left sidebar displays all users who have signed up or started conversations across your applications."},{tag_type:"h5",text:"📋 User List Features"},{tag_type:"ul",items:[{text:"Users are grouped by application name"},{text:"Each user shows their full name or UID"},{text:"Online status indicator (green = online, yellow = away, white = offline)"},{text:"Unread message count badge"},{text:"'New' tag for recently joined users"},{text:"Typing indicator when user is typing"}]},{tag_type:"h5",text:"🔘 User Actions"},{tag_type:"table",headers:["Action","Description","When Available"],rows:[["View","Open conversation with the user","Always"],["Join","Accept a pending join request","When user has requested connection"],["Disconnect","End the current connection","When user is connected to you"]]},{tag_type:"callout",type:"info",title:"📌 Multi-Admin Support",children:[{tag_type:"p",text:"When Multi-Admin is enabled, you'll see Join/Disconnect buttons for managing user connections. This allows multiple agents to handle support requests."}]},{tag_type:"callout",type:"success",title:"💡 Pro Tip",children:[{tag_type:"p",text:"Users who are online will automatically move to the top of the list, making it easier to prioritize active conversations."}]}]},{label:"✉️ Sending Messages",content:[{tag_type:"p",text:"The message input area at the bottom of the chat panel allows you to send text messages to users."},{tag_type:"h5",text:"📝 Message Input Features"},{tag_type:"ul",items:[{text:"Type your message in the input box"},{text:"Press 'Enter' to send (like WhatsApp)"},{text:"Press 'Shift + Enter' for new line"},{text:"Message status: Sent → Delivered → Read"},{text:"Typing indicator shows when the user is typing"}]},{tag_type:"h5",text:"🔔 Message Status Indicators"},{tag_type:"table",headers:["Status","Icon","Description"],rows:[["Sent","✓","Message sent to server"],["Delivered","✓✓","Message delivered to user's device"],["Read","✓✓ (Green)","Message has been read by the user"]]},{tag_type:"callout",type:"warning",title:"⚠️ Connection Check",children:[{tag_type:"p",text:"If Multi-Admin is enabled, the system checks if the user is connected with another agent. If so, you'll see a warning that the user is already connected with someone else."}]},{tag_type:"mesgTip",title:"💡 Keyboard Shortcut",children:[{tag_type:"p",text:"Press 'Enter' to send messages quickly. This works like WhatsApp and other popular messaging apps for a familiar experience."}]}]},{label:"📎 File & Media Sharing",content:[{tag_type:"p",text:"The All Chat interface supports file and media sharing, allowing you to send images, documents, and other files to users."},{tag_type:"h5",text:"📤 Supported File Types"},{tag_type:"table",headers:["File Type","Display","Features"],rows:[["Images","Thumbnail preview","Click to view in new tab"],["PDFs","Document icon with filename","Click to download/view"],["Other Files","File name display","Download available"]]},{tag_type:"h5",text:"📤 How to Share Files"},{tag_type:"ol",items:[{text:"Click the attachment button (📎) in the message input area"},{text:"Select one or more files to upload"},{text:"The input area changes to show file previews"},{text:"Click 'Proceed Upload' to send the files"},{text:"Files appear in the chat with previews"}]},{tag_type:"callout",type:"info",title:"📸 Image Preview",children:[{tag_type:"p",text:"Images are displayed as thumbnails in the chat. Click on an image to open it in a new tab for full-size viewing."}]},{tag_type:"callout",type:"success",title:"💡 Pro Tip",children:[{tag_type:"p",text:"You can share multiple files at once. The system will upload them and display them in the conversation."}]}]},{label:"👍 Message Reactions",content:[{tag_type:"p",text:"Message reactions allow you to respond to messages with emojis, similar to Slack or WhatsApp."},{tag_type:"h5",text:"😊 Available Reactions"},{tag_type:"ul",items:[{text:"👍 Thumbs Up"},{text:"❤️ Heart"},{text:"😂 Laughing"},{text:"😮 Surprised"},{text:"😢 Sad"},{text:"👏 Clapping"}]},{tag_type:"h5",text:"📋 How to Use Reactions"},{tag_type:"ol",items:[{text:"Hover over a message to reveal the reaction button (☺)"},{text:"Click the reaction button to open the emoji picker"},{text:"Select an emoji to react to the message"},{text:"The reaction appears below the message"},{text:"Clicking the reaction button again allows you to change or remove the reaction"}]},{tag_type:"callout",type:"info",title:"💡 Reaction Visibility",children:[{tag_type:"p",text:"Reactions are visible to both the agent and the user. They provide quick feedback without sending a separate message."}]}]},{label:"✏️ Reply & Edit Messages",content:[{tag_type:"p",text:"The All Chat interface supports replying to specific messages and editing sent messages."},{tag_type:"h5",text:"↩️ Reply to a Message"},{tag_type:"ol",items:[{text:"Hover over a message to reveal the dropdown menu (▼)"},{text:"Click 'Reply' from the dropdown"},{text:"The message input area shows the message you're replying to"},{text:"Type your reply and press Enter or click Send"},{text:"The reply appears with a reference to the original message"}]},{tag_type:"h5",text:"✏️ Edit a Sent Message"},{tag_type:"ol",items:[{text:"Hover over your sent message to reveal the dropdown menu (▼)"},{text:"Click 'Edit' from the dropdown"},{text:"A popup appears with the current message text"},{text:"Edit the text and click 'Send'"},{text:"The message is updated for both parties"}]},{tag_type:"callout",type:"warning",title:"⚠️ Edit Limitations",children:[{tag_type:"p",text:"You can only edit messages that you have sent. The edit function is not available for messages from other users."}]},{tag_type:"mesgTip",title:"💡 Pro Tip",children:[{tag_type:"p",text:"Use the Reply feature to keep conversations organized. It's especially useful in busy chats where multiple topics are being discussed."}]}]},{label:"🌐 Multi-Region Support",content:[{tag_type:"p",text:"The All Chat system supports multiple regions, allowing you to manage users from different geographical locations."},{tag_type:"h5",text:"📍 Supported Regions"},{tag_type:"ul",items:[{text:"US (us-east-1) - Displayed as 'us' in the sidebar"},{text:"IN (ap-south-1) - Displayed as 'in' in the sidebar"}]},{tag_type:"h5",text:"🔄 How Multi-Region Works"},{tag_type:"ul",items:[{text:"Users are grouped by their region"},{text:"Region headers show 'us' or 'in' above the user list"},{text:"Messages are routed through the appropriate regional servers"},{text:"Real-time communication works across regions"}]},{tag_type:"callout",type:"info",title:"📌 Why Multi-Region",children:[{tag_type:"p",text:"Multi-region support ensures low latency for users in different parts of the world. Users connect to the nearest server for optimal performance."}]}]}]},{tag_type:"accordion",title:"📖 Quick Navigation Guide",children:[{tag_type:"ol",items:[{text:"Chat Interface → Understand the layout and navigation"},{text:"User List → Manage and view all users"},{text:"Sending Messages → Send and track message status"},{text:"File Sharing → Share images and documents"},{text:"Message Reactions → React to messages with emojis"},{text:"Reply & Edit → Reply to or edit existing messages"},{text:"Multi-Region → Support for different regions"}]}]},{tag_type:"callout",type:"success",title:"✅ All Chat Overview Complete",children:[{tag_type:"p",text:"The All Chat feature provides a complete real-time messaging solution for support agents. It includes user management, file sharing, message reactions."},{tag_type:"p",text:"Use the All Chat interface to manage all your support conversations in one place, across all applications and regions."}]},{tag_type:"h3",text:"Integrations & APIs & Workflows",selector_uid:"v2_integrations_apis_workflows"},{tag_type:"p",text:"The Integrations & APIs & Workflows section provides comprehensive tools for configuring API connections, building multi-step workflows, and managing response templates for your chatbot applications."},{tag_type:"h4",text:"API Config",selector_uid:"v2_api_config"},{tag_type:"p",text:"The API Config section allows you to define and manage API endpoints that your chatbot can call. Each API configuration includes authentication, request structure, and response handling."},{tag_type:"tabs",items:[{label:"🔐 Authentication Setup",content:[{tag_type:"p",text:"Configure authentication for your APIs to securely connect to backend services."},{tag_type:"h5",text:"Primary Authentication (Login Server)"},{tag_type:"ol",items:[{text:"Configure the login server that provides access tokens"},{text:"Must NOT contain an Authorization header (system adds it automatically)"},{text:"Payload must include: client_secret, user_id, client_id"},{text:"Only one Primary Authentication setup per application"}]},{tag_type:"h5",text:"Step 1: Send Verification Code (OTP)"},{tag_type:"ol",items:[{text:"Send a one-time password (OTP) to the user's email or phone"},{text:"Must NOT contain an Authorization header"},{text:"Used for multi-factor authentication flows"}]},{tag_type:"h5",text:"Step 2: Verify Code & Get User ID"},{tag_type:"ol",items:[{text:"Verify the OTP and return the authenticated user_id"},{text:"Must NOT contain an Authorization header"},{text:"The user_id returned is used for all subsequent API calls"}]},{tag_type:"callout",type:"info",title:"💡 Authentication Flow",children:[{tag_type:"p",text:"The authentication flow typically follows: Login Server → (Token) → API Calls. For multi-factor auth, add Step 1 (Send Code) and Step 2 (Verify Code) before the main API calls."}]}]},{label:"⚙️ API Configuration",content:[{tag_type:"p",text:"Define the API endpoint, method, headers, query parameters, and payload template."},{tag_type:"h5",text:"Key Configuration Fields"},{tag_type:"table",headers:["Field","Description","Example"],rows:[["API URL","Full endpoint URL with placeholders","https://api.example.com/bookings/{{ booking_id }}"],["HTTP Method","GET, POST, PUT, etc.","POST"],["Headers","Request headers (Authorization with {{ token }})","Authorization: Bearer {{ token }}"],["Query Parameters","URL query parameters","limit={{ limit }}&page={{ page }}"],["Payload Template","JSON body with placeholders",'{"room_id": "{{ room_id }}", "check_in": "{{ check_in }}" }']]},{tag_type:"h5",text:"🔄 cURL Import"},{tag_type:"ul",items:[{text:"Paste a cURL command to auto-generate the API configuration"},{text:"Parses URL, method, headers, query parameters, and payload"},{text:"Detects dynamic path variables (IDs, UUIDs)"},{text:"Supports multiple sample responses for different status codes"}]},{tag_type:"callout",type:"success",title:"💡 Pro Tip",children:[{tag_type:"p",text:"Use the cURL importer to quickly set up APIs from existing curl commands. This saves time and reduces errors when configuring complex endpoints."}]}]},{label:"📝 Response Templates",content:[{tag_type:"p",text:"Define how API responses are converted into user-friendly messages using Jinja-style templates."},{tag_type:"h5",text:"Template Features"},{tag_type:"ul",items:[{text:"Create templates for each HTTP status code (200, 404, 500, etc.)"},{text:"Use Jinja syntax with {{ field }} variables"},{text:"Access entire response as response_data"},{text:"Iterate over arrays with {% for item in response_data %}"},{text:"Load saved templates from other configurations"}]},{tag_type:"h5",text:"📋 Template Scopes"},{tag_type:"table",headers:["Scope","Description","Sharing"],rows:[["Local App","Tied to a specific API config","Single API only"],["Default App","Shared across the app","All APIs in the app"],["Global","Shared across all apps","All apps in the tenant"]]},{tag_type:"code_with_copy",code:"✅ Available rooms:\n{% for room in response_data %}\n• {{ room.room_type }} – {{ room.price_per_night }}\n{% endfor %}",language:"text"},{tag_type:"callout",type:"warning",title:"⚠️ Template Validation",children:[{tag_type:"p",text:"Templates must be customized before saving. The default template '{{ response_data | dump | safe }}' shows raw JSON and should be replaced with user-friendly content."}]}]},{label:"⏳ Webhook Support",content:[{tag_type:"p",text:"Enable webhook support for asynchronous API calls that require waiting for a callback."},{tag_type:"h5",text:"Webhook Configuration"},{tag_type:"ul",items:[{text:"Enable Async Callback for long-running operations"},{text:"Auto-generated event name for tracking"},{text:"Configurable timeout (default: 600 seconds / 10 minutes)"},{text:"Useful for operations like booking confirmations"}]},{tag_type:"callout",type:"info",title:"🔄 When to Use Webhooks",children:[{tag_type:"p",text:"Enable webhooks when your API processes requests asynchronously (e.g., payment processing, booking confirmations, or long-running operations). The chatbot will wait for the callback before continuing."}]}]}]},{tag_type:"h4",text:"ChainApis",selector_uid:"v2_chain_apis"},{tag_type:"p",text:"ChainApis enables you to create multi-step API workflows where the response from one API determines the next API to call. This is useful for complex business logic that requires multiple steps."},{tag_type:"tabs",items:[{label:"🔗 What is a Chain?",content:[{tag_type:"p",text:"A Chain is a sequence of API calls where each step can branch based on the response status of the previous step."},{tag_type:"h5",text:"Chain Structure"},{tag_type:"ol",items:[{text:"Root API: The first API call in the chain"},{text:"Branches: Follow-up APIs triggered by specific response statuses"},{text:"Each branch can have its own field mappings"},{text:"Chains can be enabled/disabled"}]},{tag_type:"code_with_copy",code:"Root API: /api/check_availability (Status: 200)\n  → Branch (Success): /api/book_room\n  → Branch (404): /api/notify_unavailable",language:"text"},{tag_type:"callout",type:"info",title:"💡 When to Use Chains",children:[{tag_type:"p",text:"Use Chains when you need to handle complex, multi-step workflows. For example: Check Availability → (Success) Book Room → (Failure) Suggest Alternatives."}]}]},{label:"📋 Chain Configuration",content:[{tag_type:"p",text:"Configure chains by defining the root API and branches for different response statuses."},{tag_type:"h5",text:"Configuration Steps"},{tag_type:"ol",items:[{text:"Name your chain (e.g., 'Booking Flow')"},{text:"Select the Root API"},{text:"Add branches for each response status you want to handle"},{text:"Select follow-up APIs for each branch"},{text:"Map fields from the root response to the branch API"}]},{tag_type:"h5",text:"Branch Status Codes"},{tag_type:"ul",items:[{text:"200, 201: Success branches"},{text:"400, 404, 422: Error branches"},{text:"500, 503: Server error branches"}]},{tag_type:"callout",type:"warning",title:"⚠️ Branch Requirements",children:[{tag_type:"p",text:"Each branch must have a valid API configuration. The root API must have sample responses configured to define available branches."}]}]},{label:"🎨 Canvas View",content:[{tag_type:"p",text:"The Canvas View provides a visual representation of your chains, making it easy to understand and modify the workflow."},{tag_type:"h5",text:"Canvas Features"},{tag_type:"ul",items:[{text:"Visual node representation of each API step"},{text:"Arrows show the flow between steps"},{text:"Branch indicators show different paths"},{text:"Inline editing of API configurations"},{text:"Status indicators for active/disabled chains"}]},{tag_type:"callout",type:"info",title:"🎯 Quick Overview",children:[{tag_type:"p",text:"The Canvas View gives you a bird's-eye view of your workflow. Use it to understand complex chains quickly and identify missing branches."}]}]},{label:"🔀 Field Mapping",content:[{tag_type:"p",text:"Field mapping connects data from the previous API response to the next API's request parameters."},{tag_type:"h5",text:"Mapping Options"},{tag_type:"ul",items:[{text:"Map fields from initial form data"},{text:"Map fields from previous API response"},{text:"Use Jinja-style {{ field }} syntax"},{text:"Convert data types (string, number, date, etc.)"}]},{tag_type:"code_with_copy",code:'// Example mapping: Room ID from check_availability response\n// maps to booking API as room_id\n{\n  "room_id": "{{ response_data.room_id }}",\n  "guest_name": "{{ guest_name }}"\n}',language:"json"},{tag_type:"callout",type:"success",title:"💡 Pro Tip",children:[{tag_type:"p",text:"Use the field mapping editor to see available fields from both the initial form data and the previous API response. This prevents errors from mismatched field names."}]}]}]},{tag_type:"h4",text:"Response Settings",selector_uid:"v2_response_settings"},{tag_type:"p",text:"Response Settings allows you to manage response templates across all API configurations in one centralized location."},{tag_type:"tabs",items:[{label:"📋 Template Management",content:[{tag_type:"p",text:"Centrally manage all response templates for your API configurations."},{tag_type:"h5",text:"Template Features"},{tag_type:"ol",items:[{text:"View and edit templates for each API config"},{text:"Create templates for multiple status codes"},{text:"Preview rendered messages"},{text:"Use Jinja syntax with field autocomplete"}]},{tag_type:"callout",type:"info",title:"📌 Centralized Management",children:[{tag_type:"p",text:"Response Settings provides a single view of all templates across your API configurations. This makes it easy to maintain consistent messaging across your chatbot."}]}]},{label:"✏️ Template Editor",content:[{tag_type:"p",text:"The Template Editor provides a powerful interface for creating and editing response templates."},{tag_type:"h5",text:"Editor Features"},{tag_type:"ul",items:[{text:"Status code tabs for multi-status templates"},{text:"Field autocomplete with @ trigger"},{text:"Live preview of rendered messages"},{text:"JSON sample response parsing"},{text:"Insert field dropdown for easy field selection"}]},{tag_type:"code_with_copy",code:"✅ Your booking has been confirmed!\n\nBooking ID: {{ response_data.booking_id }}\nRoom: {{ response_data.room_type }}\nCheck-in: {{ response_data.check_in }}\nCheck-out: {{ response_data.check_out }}\nTotal: {{ response_data.total }}\n\nWe look forward to welcoming you.",language:"text"},{tag_type:"callout",type:"success",title:"💡 Best Practice",children:[{tag_type:"p",text:"Test your templates with different data types. Use conditional logic to handle edge cases (e.g., pluralization, null values). A well-designed template creates a professional user experience."}]}]},{label:"🔍 Template Types",content:[{tag_type:"p",text:"Templates can be scoped at different levels, controlling where they can be used."},{tag_type:"table",headers:["Type","Scope","Use Case"],rows:[["Local App","Specific API Config","Unique formatting for a specific endpoint"],["Default App","All APIs in the app","Consistent messaging across the app"],["Global","All apps in the tenant","Standardized messages across all apps"]]},{tag_type:"ul",items:[{text:"Templates inherit from broader scopes if not defined locally"},{text:"Local templates override default and global templates"},{text:"Default templates provide app-wide consistency"},{text:"Global templates ensure brand consistency across all apps"}]},{tag_type:"callout",type:"info",title:"📊 Template Inheritance",children:[{tag_type:"p",text:"Templates follow an inheritance hierarchy: Global → Default App → Local App. The most specific template (Local) takes precedence when available."}]}]},{label:"🎨 Preview Tester",content:[{tag_type:"p",text:"The Preview Tester allows you to design and test response templates with sample data before saving."},{tag_type:"h5",text:"Preview Tester Features"},{tag_type:"ul",items:[{text:"Load sample responses for different status codes"},{text:"Edit template with live preview"},{text:"Insert fields from sample data"},{text:"Apply transformations to data"},{text:"Save designed templates directly to your API config"}]},{tag_type:"callout",type:"success",title:"💡 Pro Tip",children:[{tag_type:"p",text:"Use the Preview Tester to quickly design and test templates. You can see the rendered message in real-time as you edit, ensuring the final output looks perfect before saving."}]}]}]},{tag_type:"accordion",title:"📖 Quick Navigation Guide",children:[{tag_type:"ol",items:[{text:"API Config → Configure API endpoints and authentication"},{text:"ChainApis → Build multi-step API workflows"},{text:"Response Settings → Manage response templates centrally"}]}]},{tag_type:"callout",type:"success",title:"✅ Integrations & APIs & Workflows Overview Complete",children:[{tag_type:"p",text:"The Integrations & APIs & Workflows section provides a complete toolkit for connecting your chatbot to backend services, building complex workflows, and managing user-facing responses."},{tag_type:"p",text:"Start by configuring your APIs, then build chains for complex workflows, and finally design user-friendly response templates to create a seamless user experience."}]},{tag_type:"h3",text:"Visual Response Designer",selector_uid:"v2_visual_response_designer"},{tag_type:"p",text:"The Visual Response Designer is a powerful no-code tool that lets you design exactly how your AI responses appear to users. Build stunning, interactive screens without writing a single line of code."},{tag_type:"h4",text:"What is the Visual Response Designer?",selector_uid:"v2_what_is_visual_designer"},{tag_type:"p",text:"The Visual Response Designer is a drag-and-drop interface that transforms raw API responses into beautiful, user-friendly messages. It's designed for product managers, support teams, and developers who want full control over their chat experience without writing code."},{tag_type:"callout",type:"info",title:"💡 Why Use the Visual Response Designer?",children:[{tag_type:"ul",items:[{text:"✅ No coding required — design visually, just like building a slide"},{text:"✅ See exactly what your users will see, in real-time"},{text:"✅ Transform data into tables, cards, lists, and styled text with one click"},{text:"✅ Perfect for customer support teams, product managers, and non-technical users"}]}]},{tag_type:"h4",text:"Key Concepts",selector_uid:"v2_visual_designer_concepts"},{tag_type:"p",text:"Understanding these core concepts will help you get started quickly:"},{tag_type:"h5",text:"📄 Screen"},{tag_type:"p",text:"A Screen is what your users see in the chat. Each screen can display different information. You can create:"},{tag_type:"ul",items:[{text:"Single Screen: All data appears on one screen (perfect for simple responses)"},{text:"Multiple Screens: Each data item appears on its own screen (great for lists, search results, or multi-item responses)"}]},{tag_type:"h5",text:"📋 Template"},{tag_type:"p",text:"A Template is the design of your response. It defines what information appears and how it's organized. Think of it like a slide design in PowerPoint — you design once, and it works for all your data."},{tag_type:"h5",text:"🔄 Transformations"},{tag_type:"p",text:"Transformations are visual enhancements you can apply to your design with one click:"},{tag_type:"ul",items:[{text:"📊 Table View — Show data in a clean, organized table"},{text:"🃏 Card View — Display each item as a beautiful card"},{text:"📋 List View — Show items in a simple list format"},{text:"🎨 Style Transformations — Highlight, bold, italicize, or underline text"}]},{tag_type:"h4",text:"Getting Started",selector_uid:"v2_visual_designer_getting_started"},{tag_type:"p",text:"Follow these steps to create your first visual response:"},{tag_type:"steps",items:[{title:"Step 1: Paste Your Sample Response",content:[{tag_type:"p",text:"Copy a sample JSON response from your API and paste it into the 'Sample Response' area. This gives the designer an example of your data structure."},{tag_type:"callout",type:"info",title:"💡 Tip",children:[{tag_type:"p",text:"Use a real response from your API to see exactly how your data will appear. The designer automatically generates a starting template from your sample."}]}]},{title:"Step 2: Click 'Render Preview'",content:[{tag_type:"p",text:"This generates a visual preview of your response. You'll see how your data looks and can start designing."}]},{title:"Step 3: Open the Visual Editor",content:[{tag_type:"p",text:"Click 'Open Editor' to access the visual design interface. Here you can:"},{tag_type:"ul",items:[{text:"Drag rows to reorder content"},{text:"Edit text directly inline"},{text:"Add custom messages"},{text:"Insert dynamic data fields"}]}]},{title:"Step 4: Apply Transformations",content:[{tag_type:"p",text:"Use the 'Start Wizard' button to transform your design:"},{tag_type:"ul",items:[{text:"Structure — Convert to Table, Cards, or List view"},{text:"Media — Turn image URLs into actual pictures"},{text:"Styles — Apply colors, bold, italic, and alignment"}]}]},{title:"Step 5: Save Your Design",content:[{tag_type:"p",text:"Click 'Use Template' or 'Save Configuration' to save your visual design. It's now ready for your users!"}]}]},{tag_type:"h4",text:"The Visual Editor",selector_uid:"v2_visual_editor"},{tag_type:"p",text:"The Visual Editor is where you design your responses. It's designed to be intuitive and powerful, like a slide editor:"},{tag_type:"h5",text:"🖱️ Drag & Drop Reordering"},{tag_type:"p",text:"Simply drag any row up or down to change the order of content. Your changes are reflected instantly in the preview."},{tag_type:"h5",text:"✏️ Inline Editing"},{tag_type:"p",text:"Click the ✎ icon on any row to edit its content directly. You can:"},{tag_type:"ul",items:[{text:"Change text labels"},{text:"Add custom messages"},{text:"Insert dynamic data using the @ menu"}]},{tag_type:"h5",text:"➕ Add Buttons & Button Groups"},{tag_type:"p",text:"Add interactive elements to your responses:"},{tag_type:"ul",items:[{text:"Single Buttons — Perfect for simple actions like 'Book Now' or 'Learn More'"},{text:"Button Groups — Multiple buttons in a row for related actions"}]},{tag_type:"callout",type:"success",title:"💡 Pro Tip",children:[{tag_type:"p",text:"Use Button Groups to offer users choices. Each button can trigger different actions, like 'View Details', 'Book Now', or 'Contact Support'."}]},{tag_type:"h4",text:"The Transformation Wizard",selector_uid:"v2_transformation_wizard"},{tag_type:"p",text:"The Transformation Wizard is your creative toolkit for enhancing responses. It walks you through three steps:"},{tag_type:"tabs",items:[{label:"📐 Structural Transformations",content:[{tag_type:"p",text:"Change how your data is organized and displayed:"},{tag_type:"table",headers:["Transformation","What It Does","Best For"],rows:[["📊 Table View","Organizes data into a clean table with headers and rows","Comparing multiple items, structured data"],["🃏 Card View","Shows each item as a separate card with a title and details","Profiles, product listings, individual records"],["📋 List View","Simple list format with each item on a new line","Quick overviews, short lists"],["📝 JSON View","Shows the raw data structure","Debugging and technical reviews"]]},{tag_type:"callout",type:"info",title:"💡 Card View Options",children:[{tag_type:"p",text:"Card View can be displayed vertically (scrolling down) or horizontally (scrolling sideways). Choose the direction that best fits your content."}]}]},{label:"🖼️ Media Transformations",content:[{tag_type:"p",text:"Transform image URLs into actual pictures users can see:"},{tag_type:"ul",items:[{text:"Select any image URL in your design"},{text:"Click 'Render Images' to convert URLs to images"},{text:"Adjust image size (width and height)"},{text:"Toggle aspect ratio preservation"}]},{tag_type:"callout",type:"info",title:"📸 Image Rendering",children:[{tag_type:"p",text:"Images are rendered directly in the chat response. Users can click on images to view them full-size."}]}]},{label:"🎨 Style Transformations",content:[{tag_type:"p",text:"Apply visual styles to make your content stand out:"},{tag_type:"table",headers:["Style","Effect","Use Case"],rows:[["✨ Highlight","Adds a yellow highlight background","Drawing attention to important info"],["𝐁 Bold","Makes text bold","Emphasizing key points"],["𝐼 Italic","Makes text italic","Quotes, subtle emphasis"],["U̲ Underline","Underlines text","Links, important phrases"],["S̶t̶r̶i̶k̶e̶","Strikes through text","Completed items, deleted content"]]},{tag_type:"h5",text:"Text Alignment"},{tag_type:"ul",items:[{text:"⬅️ Left — Default alignment for most content"},{text:"⬛ Center — Perfect for titles and announcements"},{text:"➡️ Right — Good for numbers and dates"}]},{tag_type:"callout",type:"success",title:"💡 Combine Styles",children:[{tag_type:"p",text:"You can apply multiple styles at once! For example, highlight + bold makes important information really stand out."}]}]}]},{tag_type:"h4",text:"Single Screen vs Multiple Screens",selector_uid:"v2_single_vs_multiple_screens"},{tag_type:"p",text:"The Visual Response Designer automatically detects your data structure and suggests the best layout:"},{tag_type:"table",headers:["Layout Type","When It's Used","What Users See","Example"],rows:[["Single Screen","Your data has a single item or metadata with arrays","All information on one screen","A hotel booking confirmation with guest details"],["Multiple Screens","Your data has a list of items at the root or in an array","Each item appears on its own screen","A list of available rooms, each with its own screen"]]},{tag_type:"callout",type:"info",title:"💡 How It Works",children:[{tag_type:"p",text:"The designer analyzes your data structure automatically. If you have a list of items, you'll get multiple screens. If you have a single object, you'll get a single screen. You can always adjust the design manually."}]},{tag_type:"h4",text:"Live Preview",selector_uid:"v2_live_preview"},{tag_type:"p",text:"The Visual Response Designer shows you exactly what your users will see, updated in real-time as you design:"},{tag_type:"ul",items:[{text:"👁️ See your changes instantly — no refresh needed"},{text:"📱 Preview in Desktop or Mobile view"},{text:"🔄 See how your design looks with different data"},{text:"✅ Ensure everything looks perfect before saving"}]},{tag_type:"callout",type:"success",title:"💡 Pro Tip",children:[{tag_type:"p",text:"Use the Desktop/Mobile toggle to test how your design looks on different devices. This ensures a great experience for all users."}]},{tag_type:"h4",text:"Saving & Deployment",selector_uid:"v2_saving_deployment"},{tag_type:"p",text:"Once your design is ready, saving it is simple:"},{tag_type:"steps",items:[{title:"Review Your Design",content:[{tag_type:"p",text:"Check the preview to ensure everything looks perfect."}]},{title:"Click 'Use Template'",content:[{tag_type:"p",text:"This saves your design to the configuration. If you're in the standalone tool, click 'Save Configuration'."}]},{title:"Deploy to Users",content:[{tag_type:"p",text:"Your visual design is now live! Users will see the beautiful, professional responses you've created."}]}]},{tag_type:"callout",type:"warning",title:"⚠️ Important",children:[{tag_type:"p",text:"When you save a design, all active clients (users) will be updated automatically to see the new response format."}]},{tag_type:"h4",text:"Best Practices",selector_uid:"v2_visual_designer_best_practices"},{tag_type:"p",text:"Follow these tips to create the best user experience:"},{tag_type:"ul",items:[{text:"💡 Start simple — begin with a basic design and add complexity gradually"},{text:"📱 Test on mobile — always preview your design in mobile view"},{text:"🎯 Be consistent — use similar styles across all responses for brand coherence"},{text:"📊 Use Card View for multi-item responses to improve readability"},{text:"🎨 Apply styles sparingly — highlight only what's truly important"},{text:"🔘 Use buttons to guide users to the next action"}]},{tag_type:"callout",type:"success",title:"✅ Visual Response Designer Overview Complete",children:[{tag_type:"p",text:"The Visual Response Designer is a no-code tool that empowers you to create beautiful, professional responses without writing code. Whether you're a product manager, support lead, or developer, you can design exactly what users see in the chat."},{tag_type:"p",text:"Start with your sample data, design visually, and deploy to users instantly. No coding required."}]},{tag_type:"accordion",title:"📖 Quick Navigation Guide",children:[{tag_type:"ul",items:[{text:"What is the Visual Response Designer? → Understand the tool"},{text:"Getting Started → Create your first design in 5 steps"},{text:"The Visual Editor → Drag, drop, and edit visually"},{text:"The Transformation Wizard → Apply one-click enhancements"},{text:"Single vs Multiple Screens → Choose the right layout"},{text:"Live Preview → See your design in real-time"},{text:"Best Practices → Tips for professional results"}]}]}]}]);e.s(["versionSlugMap",0,{V2:"byo"}],48651),e.s(["default",0,{V2:t}],53632)},13247,e=>{e.v({"content-area":"docPageSty-module__yHWKmW__content-area","content-list":"docPageSty-module__yHWKmW__content-list",doc_core_wrapper:"docPageSty-module__yHWKmW__doc_core_wrapper",doc_sidebar:"docPageSty-module__yHWKmW__doc_sidebar","document-container":"docPageSty-module__yHWKmW__document-container",integration_successful:"docPageSty-module__yHWKmW__integration_successful","main-content":"docPageSty-module__yHWKmW__main-content","main-content-full":"docPageSty-module__yHWKmW__main-content-full",mainHeading:"docPageSty-module__yHWKmW__mainHeading",mobileBurgerBtn:"docPageSty-module__yHWKmW__mobileBurgerBtn",mobileOverlay:"docPageSty-module__yHWKmW__mobileOverlay",mobileOverlayVisible:"docPageSty-module__yHWKmW__mobileOverlayVisible",mobileSidebar:"docPageSty-module__yHWKmW__mobileSidebar",mobileSidebarClose:"docPageSty-module__yHWKmW__mobileSidebarClose",mobileSidebarContent:"docPageSty-module__yHWKmW__mobileSidebarContent",mobileSidebarHeader:"docPageSty-module__yHWKmW__mobileSidebarHeader",mobileSidebarOpen:"docPageSty-module__yHWKmW__mobileSidebarOpen",mobileSidebarWrapper:"docPageSty-module__yHWKmW__mobileSidebarWrapper",noFilterMessage:"docPageSty-module__yHWKmW__noFilterMessage",ordered:"docPageSty-module__yHWKmW__ordered",rightWrap:"docPageSty-module__yHWKmW__rightWrap",rightWrap_full:"docPageSty-module__yHWKmW__rightWrap_full",sidebar_closed:"docPageSty-module__yHWKmW__sidebar_closed",sidebar_open:"docPageSty-module__yHWKmW__sidebar_open",sidebar_toggle_btn:"docPageSty-module__yHWKmW__sidebar_toggle_btn"})},86997,e=>{"use strict";var t=e.i(84414);e.i(7431);var a=e.i(7686),o=e.i(13247);function n({selectedFilter:e,onLinkClick:n}){let i=e?.version_type,s={V2:[{tag_type:"div",className:"sidebar-section",children:[{tag_type:"h3",className:"sidebar-section-title"},{tag_type:"ol",items:[{tag_type:"li",text:"Integration",default_expanded:!0,selector_uid:"v2_prerequisites",sub_items:[{tag_type:"li",text:"Prerequisite",link_configuration:{show:!0,type:"internal",selector_uid:"v2_prerequisites"}},{tag_type:"li",text:"Client Integration",link_configuration:{show:!0,type:"internal",selector_uid:"v2_client_integration"}},{tag_type:"li",text:"Code Example",link_configuration:{show:!0,type:"internal",selector_uid:"v2_code_example"}},{tag_type:"li",text:"Backend Integration",link_configuration:{show:!0,type:"internal",selector_uid:"v2_backend_integration"}}],link_configuration:{show:!0,type:"internal",targetSelector:".content-inner-heading",selector_uid:"v2_prerequisites"}}],property:{collapse:{collapsable:!0,fc_non_collapsable:!0}}}]},{tag_type:"div",className:"sidebar-section",children:[{tag_type:"h3",className:"sidebar-section-title"},{tag_type:"ol",items:[{tag_type:"li",text:"Platform",default_expanded:!1,selector_uid:"v2_whitelabel_domains",sub_items:[{tag_type:"li",text:"Global Level Settings",selector_uid:"v2_global_level_settings",sub_items:[{tag_type:"li",text:"Global Tenant Settings",link_configuration:{show:!0,type:"internal",selector_uid:"v2_global_tenant_settings"}},{tag_type:"li",text:"Invite Support User",link_configuration:{show:!0,type:"internal",selector_uid:"v2_invite_support"}},{tag_type:"li",text:"Whitelabel Domains",link_configuration:{show:!0,type:"internal",selector_uid:"v2_whitelabel_domains"}}],link_configuration:{show:!0,type:"internal",selector_uid:"v2_global_level_settings"}},{tag_type:"li",text:"FAQ Chat & Lead Generation",selector_uid:"v2_faq_chat_lead_gen",sub_items:[{tag_type:"li",text:"LeadGen & FAQ",link_configuration:{show:!0,type:"internal",selector_uid:"v2_leadgen_faq"}}],link_configuration:{show:!0,type:"internal",selector_uid:"v2_faq_chat_lead_gen"}},{tag_type:"li",text:"Live Agent",selector_uid:"v2_live_agent",sub_items:[{tag_type:"li",text:"Live Agent Features",link_configuration:{show:!0,type:"internal",selector_uid:"v2_live_agent_features"}}],link_configuration:{show:!0,type:"internal",selector_uid:"v2_live_agent"}},{tag_type:"li",text:"AI Chat",selector_uid:"v2_ai_chat",sub_items:[{tag_type:"li",text:"AI Chat Features",link_configuration:{show:!0,type:"internal",selector_uid:"v2_ai_chat_features"}}],link_configuration:{show:!0,type:"internal",selector_uid:"v2_ai_chat"}},{tag_type:"li",text:"All Chat",selector_uid:"v2_all_chat",sub_items:[{tag_type:"li",text:"All Chat Features",link_configuration:{show:!0,type:"internal",selector_uid:"v2_all_chat_features"}}],link_configuration:{show:!0,type:"internal",selector_uid:"v2_all_chat"}},{tag_type:"li",text:"Integrations & APIs & Workflows",selector_uid:"v2_integrations_apis_workflows",sub_items:[{tag_type:"li",text:"API Config",link_configuration:{show:!0,type:"internal",selector_uid:"v2_api_config"}},{tag_type:"li",text:"ChainApis",link_configuration:{show:!0,type:"internal",selector_uid:"v2_chain_apis"}},{tag_type:"li",text:"Response Settings",link_configuration:{show:!0,type:"internal",selector_uid:"v2_response_settings"}}],link_configuration:{show:!0,type:"internal",selector_uid:"v2_integrations_apis_workflows"}},{tag_type:"li",text:"Visual Response Designer",selector_uid:"v2_visual_response_designer",sub_items:[{tag_type:"li",text:"What is the Visual Response Designer?",link_configuration:{show:!0,type:"internal",selector_uid:"v2_what_is_visual_designer"}},{tag_type:"li",text:"Getting Started",link_configuration:{show:!0,type:"internal",selector_uid:"v2_visual_designer_getting_started"}},{tag_type:"li",text:"The Visual Editor",link_configuration:{show:!0,type:"internal",selector_uid:"v2_visual_editor"}},{tag_type:"li",text:"The Transformation Wizard",link_configuration:{show:!0,type:"internal",selector_uid:"v2_transformation_wizard"}},{tag_type:"li",text:"Single vs Multiple Screens",link_configuration:{show:!0,type:"internal",selector_uid:"v2_single_vs_multiple_screens"}},{tag_type:"li",text:"Live Preview",link_configuration:{show:!0,type:"internal",selector_uid:"v2_live_preview"}},{tag_type:"li",text:"Saving & Deployment",link_configuration:{show:!0,type:"internal",selector_uid:"v2_saving_deployment"}},{tag_type:"li",text:"Best Practices",link_configuration:{show:!0,type:"internal",selector_uid:"v2_visual_designer_best_practices"}}],link_configuration:{show:!0,type:"internal",selector_uid:"v2_visual_response_designer"}}],link_configuration:{show:!0,type:"internal",selector_uid:"v2_platform_overview"}}],property:{collapse:{collapsable:!0,fc_non_collapsable:!0}}}]}]};return(0,t.jsx)(a.SidebarLinkContext.Provider,{value:n,children:(0,t.jsx)("div",{className:o.default.reetusingh,children:i&&s[i]?(0,t.jsx)(a.default,{content:s[i]},`${i}`):(0,t.jsx)("div",{children:"Please select a valid application type and version"})})})}e.s(["default",()=>n])}]);