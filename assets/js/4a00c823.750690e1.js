(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(237)),i={id:"network-requirements",title:"Network Requirements",sidebar_label:"Network requirements"},c={unversionedId:"network-requirements",id:"network-requirements",isDocsHomePage:!1,title:"Network Requirements",description:"Configure your network to allow connectivity between your source and target environments, and for accessing the management interface (LiveData UI).",source:"@site/docs/network.md",slug:"/network-requirements",permalink:"/wandisco-documentation-ldm/docs/network-requirements",version:"current",sidebar_label:"Network requirements",sidebar:"someSidebar",previous:{title:"Prerequisites",permalink:"/wandisco-documentation-ldm/docs/prereqs"},next:{title:"Install LiveData Migrator",permalink:"/wandisco-documentation-ldm/docs/installation"}},l=[{value:"LiveData Migrator port requirements",id:"livedata-migrator-port-requirements",children:[]},{value:"HiveMigrator port requirements",id:"hivemigrator-port-requirements",children:[{value:"HiveMigrator remote agents port requirements",id:"hivemigrator-remote-agents-port-requirements",children:[]}]},{value:"LiveData UI port requirements",id:"livedata-ui-port-requirements",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Next steps",id:"next-steps",children:[]}],b={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Configure your network to allow connectivity between your source and target environments, and for accessing the management interface (LiveData UI)."),Object(o.b)("p",null,"There are three LDM components that use network ports for TCP connections: LiveData Migrator, HiveMigrator and LiveData UI."),Object(o.b)("h2",{id:"livedata-migrator-port-requirements"},"LiveData Migrator port requirements"),Object(o.b)("p",null,"Ensure the following ports are open on your on-premises network:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Port"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"),Object(o.b)("th",{parentName:"tr",align:"left"},"Direction"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"18080"),Object(o.b)("td",{parentName:"tr",align:"left"},"LDM REST API"),Object(o.b)("td",{parentName:"tr",align:"left"},"Inbound")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"443"),Object(o.b)("td",{parentName:"tr",align:"left"},"Data transfer (HTTPS)"),Object(o.b)("td",{parentName:"tr",align:"left"},"Outbound")))),Object(o.b)("p",null,"For more information (such as port changes), see ",Object(o.b)("a",{parentName:"p",href:"https://docs.wandisco.com/live-data-migrator/docs/configuration-ldm#general-configuration"},"General configuration for LiveData Migrator"),"."),Object(o.b)("h2",{id:"hivemigrator-port-requirements"},"HiveMigrator port requirements"),Object(o.b)("p",null,"Ensure the following ports are open on your on-premises network:"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You only need to enable one of these ports depending on whether your connection will utilise HTTP or HTTPS."))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Port"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"),Object(o.b)("th",{parentName:"tr",align:"left"},"Direction"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"6780"),Object(o.b)("td",{parentName:"tr",align:"left"},"Metadata transfer (HTTP)"),Object(o.b)("td",{parentName:"tr",align:"left"},"Inbound")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"6781"),Object(o.b)("td",{parentName:"tr",align:"left"},"Metadata transfer (HTTPS)"),Object(o.b)("td",{parentName:"tr",align:"left"},"Inbound")))),Object(o.b)("h3",{id:"hivemigrator-remote-agents-port-requirements"},"HiveMigrator remote agents port requirements"),Object(o.b)("p",null,"The port used to communicate with a remote agent is defined in remote agent's configuration. This port will be open for inbound connections on the remote agent side and HiveMigrator will connect to it as a client."),Object(o.b)("h2",{id:"livedata-ui-port-requirements"},"LiveData UI port requirements"),Object(o.b)("p",null,"Ensure the following port is open on your platform to allow bi-directional communication for WANdisco's management user interface (LiveData UI)."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Port"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"),Object(o.b)("th",{parentName:"tr",align:"left"},"Direction"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"8081"),Object(o.b)("td",{parentName:"tr",align:"left"},"LiveData UI"),Object(o.b)("td",{parentName:"tr",align:"left"},"Inbound")))),Object(o.b)("p",null,"For more information (such as port changes), see ",Object(o.b)("a",{parentName:"p",href:"https://docs.wandisco.com/live-data-migrator/docs/configuration-ui#general-configuration"},"General configuration for LiveData UI"),"."),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("p",null,"If you are having problems with networking, you can find solutions in the ",Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/troubleshooting"},"troubleshooting guide"),"."),Object(o.b)("h2",{id:"next-steps"},"Next steps"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/installation"},"Install LiveData Migrator")," after setting up your network."))}s.isMDXComponent=!0},237:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return r?a.a.createElement(d,c(c({ref:t},b),{},{components:r})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);