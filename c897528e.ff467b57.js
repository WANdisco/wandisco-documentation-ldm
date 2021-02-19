(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),c=(a(0),a(161)),i={id:"connect-metastores",title:"Connect metastores for metadata migrations (preview)",sidebar_label:"Connect metastores"},o={unversionedId:"connect-metastores",id:"connect-metastores",isDocsHomePage:!1,title:"Connect metastores for metadata migrations (preview)",description:"This version of LiveData Migrator includes a preview of a feature that migrates metadata. Metadata can be migrated from Apache Hive, AWS Glue, and Azure SQL.",source:"@site/docs/connect-metastores.md",slug:"/connect-metastores",permalink:"/wandisco-documentation-ldm/docs/connect-metastores",version:"current",sidebar_label:"Connect metastores",sidebar:"someSidebar",previous:{title:"Define your bandwidth policy",permalink:"/wandisco-documentation-ldm/docs/manage-bandwidth"},next:{title:"Define metadata rules (preview)",permalink:"/wandisco-documentation-ldm/docs/define-metadata-rules"}},d=[{value:"Connect metastores with the UI",id:"connect-metastores-with-the-ui",children:[{value:"Add source agent",id:"add-source-agent",children:[]},{value:"Add target agents",id:"add-target-agents",children:[]}]},{value:"Connect metastores with the CLI",id:"connect-metastores-with-the-cli",children:[{value:"Add hive agents",id:"add-hive-agents",children:[]},{value:"Configure existing hive agents",id:"configure-existing-hive-agents",children:[]},{value:"Manage hive agents",id:"manage-hive-agents",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],b={toc:d};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This version of LiveData Migrator includes a ",Object(c.b)("strong",{parentName:"p"},"preview")," of a feature that migrates metadata. Metadata can be migrated from ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cwiki.apache.org/confluence/display/Hive/Home"}),"Apache Hive"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html"}),"AWS Glue"),", and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview"}),"Azure SQL"),"."),Object(c.b)("p",null,"Ready to migrate metadata? First, connect to your metastores by adding Hive agents. Then, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/define-metadata-rules"}),"define metadata rules")," before ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/migrate-metadata"}),"migrating metadata"),"."),Object(c.b)("h2",{id:"connect-metastores-with-the-ui"},"Connect metastores with the UI"),Object(c.b)("h3",{id:"add-source-agent"},"Add source agent"),Object(c.b)("p",null,"LiveData Migrator will attempt to auto-discover and create an agent for your source environment. Select your LiveData Migrator instance from the Storage panel and check whether an existing agent is listed."),Object(c.b)("p",null,"If Kerberos is enabled on your cluster and HDFS is configured as your source storage, select to configure the existing agent and provide the Kerberos credentials."),Object(c.b)("p",null,"Alternatively, add a new agent. The source agent can be any of the following distributions:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-hive"}),"Apache Hive")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-glue"}),"AWS Glue Data Catalog")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-azure"}),"Azure SQL"))),Object(c.b)("h3",{id:"add-target-agents"},"Add target agents"),Object(c.b)("p",null,"Select your LiveData Migrator instance from the Storage panel and add new agents. LiveData Migrator supports target agents of the following distributions:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-hive"}),"Apache Hive")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-glue"}),"AWS Glue Data Catalog")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-azure"}),"Azure SQL"))),Object(c.b)("h2",{id:"connect-metastores-with-the-cli"},"Connect metastores with the CLI"),Object(c.b)("h3",{id:"add-hive-agents"},"Add hive agents"),Object(c.b)("p",null,"Add hive agents to connect your source and target metastores."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-azure"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent add azure"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add a hive agent for an Azure SQL connection")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-filesystem"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent add filesystem"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add a hive agent for a local filesystem")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-glue"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent add glue"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add a hive agent for an AWS Glue Data Catalog")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-hive"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent add hive"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add a hive agent for a local or remote Apache Hive metastore")))),Object(c.b)("h3",{id:"configure-existing-hive-agents"},"Configure existing hive agents"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-configure-azure"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent configure azure"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Change the configuration of an existing hive agent for the Azure SQL database server")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-configure-filesystem"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent configure filesystem"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Change the configuration of an existing hive agent for the local filesystem")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-configure-glue"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent configure glue"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Change the configuration of an existing hive agent for the AWS Glue Data Catalog")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-configure-hive"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent configure hive"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Change the configuration of an existing hive agent for the Apache Hive metastore")))),Object(c.b)("h3",{id:"manage-hive-agents"},"Manage hive agents"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-check"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent check"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Check whether the hive agent can connect to the metastore")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-delete"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent delete"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete a hive agent")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-list"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent list"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List all configured hive agents")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-show"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent show"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show the configuration for a hive agent")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-types"}),Object(c.b)("inlineCode",{parentName:"a"},"hive agent types"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List supported hive agent types")))),Object(c.b)("h2",{id:"next-steps"},"Next Steps"),Object(c.b)("p",null,"Connected to your metastores? ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/define-metadata-rules"}),"Define metadata rules")," for your metadata migrations."))}l.isMDXComponent=!0},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=d(e,["components","mdxType","originalType","parentName"]),m=l(a),p=n,g=m["".concat(i,".").concat(p)]||m[p]||s[p]||c;return a?r.a.createElement(g,o(o({ref:t},b),{},{components:a})):r.a.createElement(g,o({ref:t},b))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);