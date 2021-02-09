(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{159:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),m=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=m(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),l=m(a),p=n,O=l["".concat(i,".").concat(p)]||l[p]||s[p]||c;return a?r.a.createElement(O,o(o({ref:t},d),{},{components:a})):r.a.createElement(O,o({ref:t},d))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<c;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=(a(0),a(159)),i={id:"connect-metastores",title:"Connect metastores for metadata migrations (preview)",sidebar_label:"Connect metastores"},o={unversionedId:"connect-metastores",id:"version-1.10.0/connect-metastores",isDocsHomePage:!1,title:"Connect metastores for metadata migrations (preview)",description:"This version of LiveData Migrator includes a preview of a feature that migrates metadata. Metadata can be migrated from Apache Hive and AWS Glue.",source:"@site/versioned_docs/version-1.10.0/connect-metastores.md",slug:"/connect-metastores",permalink:"/wandisco-documentation-ldm/docs/1.10.0/connect-metastores",version:"1.10.0",sidebar_label:"Connect metastores",sidebar:"version-1.10.0/someSidebar",previous:{title:"Define your bandwidth policy",permalink:"/wandisco-documentation-ldm/docs/1.10.0/manage-bandwidth"},next:{title:"Define metadata rules (preview)",permalink:"/wandisco-documentation-ldm/docs/1.10.0/define-metadata-rules"}},b=[{value:"Add hive agents",id:"add-hive-agents",children:[]},{value:"Configure existing hive agents",id:"configure-existing-hive-agents",children:[]},{value:"Manage hive agents",id:"manage-hive-agents",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={toc:b};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This version of LiveData Migrator includes a ",Object(c.b)("strong",{parentName:"p"},"preview")," of a feature that migrates metadata. Metadata can be migrated from ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cwiki.apache.org/confluence/display/Hive/Home"}),"Apache Hive")," and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html"}),"AWS Glue"),"."),Object(c.b)("p",null,"Ready to migrate metadata? First, connect to your metastores by adding Hive agents. Then, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/define-metadata-rules"}),"define metadata rules")," before ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/migrate-metadata"}),"migrating metadata"),"."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Metadata migration functionality is only available when using the CLI. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://community.wandisco.com/s/article/WANdisco-LiveData-Migrator-Release-Notes-1-8-3"}),"Read the release notes")," for more details about migrating metadata with LiveData Migrator."))),Object(c.b)("h2",{id:"add-hive-agents"},"Add hive agents"),Object(c.b)("p",null,"Add hive agents to connect your source and target metastores."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-add-azure"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent add azure"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add a hive agent for an Azure SQL database server")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-add-filesystem"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent add filesystem"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add a hive agent for a local filesystem")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-add-glue"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent add glue"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add a hive agent for an AWS Glue Data Catalog")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-add-hive"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent add hive"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add a hive agent for a local or remote Apache Hive metastore")))),Object(c.b)("h2",{id:"configure-existing-hive-agents"},"Configure existing hive agents"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-configure-azure"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent configure azure"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Change the configuration of an existing hive agent for the Azure SQL database server")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-configure-filesystem"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent configure filesystem"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Change the configuration of an existing hive agent for the local filesystem")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-configure-glue"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent configure glue"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Change the configuration of an existing hive agent for the AWS Glue Data Catalog")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-configure-hive"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent configure hive"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Change the configuration of an existing hive agent for the Apache Hive metastore")))),Object(c.b)("h2",{id:"manage-hive-agents"},"Manage hive agents"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-check"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent check"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Check whether the hive agent can connect to the metastore")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-delete"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent delete"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete a hive agent")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-list"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent list"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List all configured hive agents")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-show"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent show"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show the configuration for a hive agent")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-types"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent types"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List supported hive agent types")))),Object(c.b)("h2",{id:"next-steps"},"Next Steps"),Object(c.b)("p",null,"Connected to your metastores? ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/define-metadata-rules"}),"Define metadata rules")," for your metadata migrations."))}m.isMDXComponent=!0}}]);