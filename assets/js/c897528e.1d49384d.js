(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{166:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(203)),c={id:"connect-metastores",title:"Connect metastores for metadata migrations",sidebar_label:"Connect metastores"},o={unversionedId:"connect-metastores",id:"connect-metastores",isDocsHomePage:!1,title:"Connect metastores for metadata migrations",description:"This version of LiveData Migrator includes a feature that migrates metadata. Metadata can be migrated from Apache Hive, AWS Glue, and Azure SQL.",source:"@site/docs/connect-metastores.md",slug:"/connect-metastores",permalink:"/wandisco-documentation-ldm/docs/connect-metastores",version:"current",sidebar_label:"Connect metastores",sidebar:"someSidebar",previous:{title:"Define your bandwidth policy",permalink:"/wandisco-documentation-ldm/docs/manage-bandwidth"},next:{title:"Define metadata rules",permalink:"/wandisco-documentation-ldm/docs/define-metadata-rules"}},d=[{value:"Connect metastores with the UI",id:"connect-metastores-with-the-ui",children:[{value:"Add source agent",id:"add-source-agent",children:[]},{value:"Add target agents",id:"add-target-agents",children:[]}]},{value:"Connect metastores with the CLI",id:"connect-metastores-with-the-cli",children:[{value:"Add hive agents",id:"add-hive-agents",children:[]},{value:"Configure existing hive agents",id:"configure-existing-hive-agents",children:[]},{value:"Manage hive agents",id:"manage-hive-agents",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],b={toc:d};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This version of LiveData Migrator includes a feature that migrates metadata. Metadata can be migrated from ",Object(i.b)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/Hive/Home"},"Apache Hive"),", ",Object(i.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html"},"AWS Glue"),", and ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview"},"Azure SQL"),"."),Object(i.b)("p",null,"Additionally, ",Object(i.b)("a",{parentName:"p",href:"https://databricks.com/product/delta-lake-on-databricks"},"Databricks Delta Lake")," metastores are supported as a target and LiveData Migrator can convert tables to Delta format during migration."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Databricks agents are currently available as a preview feature."))),Object(i.b)("p",null,"Ready to migrate metadata? First, connect to your metastores by adding Hive agents. Then, ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/define-metadata-rules"},"define metadata rules")," before ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/migrate-metadata"},"migrating metadata"),"."),Object(i.b)("h2",{id:"connect-metastores-with-the-ui"},"Connect metastores with the UI"),Object(i.b)("h3",{id:"add-source-agent"},"Add source agent"),Object(i.b)("p",null,"LiveData Migrator will attempt to auto-discover and create an agent for your source environment. Select your LiveData Migrator instance from the Storage panel and check whether an existing agent is listed."),Object(i.b)("p",null,"If Kerberos is enabled on your cluster and HDFS is configured as your source storage, select to configure the existing agent and provide the Kerberos credentials."),Object(i.b)("p",null,"Alternatively, add a new agent. The source agent can be any of the following distributions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-hive"},"Apache Hive")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-glue"},"AWS Glue Data Catalog")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-azure"},"Azure SQL"))),Object(i.b)("h3",{id:"add-target-agents"},"Add target agents"),Object(i.b)("p",null,"Select your LiveData Migrator instance from the Storage panel and add new agents. LiveData Migrator supports target agents of the following distributions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-hive"},"Apache Hive")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-glue"},"AWS Glue Data Catalog")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-azure"},"Azure SQL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-databricks"},"Databricks Delta Lake"))),Object(i.b)("h2",{id:"connect-metastores-with-the-cli"},"Connect metastores with the CLI"),Object(i.b)("h3",{id:"add-hive-agents"},"Add hive agents"),Object(i.b)("p",null,"Add hive agents to connect your source and target metastores."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Command"),Object(i.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-azure"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent add azure"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Add a hive agent for an Azure SQL connection")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-filesystem"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent add filesystem"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Add a hive agent for a local filesystem")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-glue"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent add glue"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Add a hive agent for an AWS Glue Data Catalog")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-hive"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent add hive"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Add a hive agent for a local or remote Apache Hive metastore")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-databricks"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent add databricks"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Add a hive agent for a Databricks Delta Lake metastore")))),Object(i.b)("h3",{id:"configure-existing-hive-agents"},"Configure existing hive agents"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Command"),Object(i.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-configure-azure"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent configure azure"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Change the configuration of an existing hive agent for the Azure SQL database server")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-configure-filesystem"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent configure filesystem"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Change the configuration of an existing hive agent for the local filesystem")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-configure-glue"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent configure glue"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Change the configuration of an existing hive agent for the AWS Glue Data Catalog")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-configure-hive"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent configure hive"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Change the configuration of an existing hive agent for the Apache Hive metastore")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-configure-databricks"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent configure databricks"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Change the configuration of an existing hive agent for the Databricks Delta Lake metastore")))),Object(i.b)("h3",{id:"manage-hive-agents"},"Manage hive agents"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Command"),Object(i.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-check"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent check"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Check whether the hive agent can connect to the metastore")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-delete"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent delete"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Delete a hive agent")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-list"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent list"))),Object(i.b)("td",{parentName:"tr",align:"left"},"List all configured hive agents")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-show"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent show"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Show the configuration for a hive agent")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-types"},Object(i.b)("inlineCode",{parentName:"a"},"hive agent types"))),Object(i.b)("td",{parentName:"tr",align:"left"},"List supported hive agent types")))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Connected to your metastores? ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/define-metadata-rules"},"Define metadata rules")," for your metadata migrations."))}m.isMDXComponent=!0},203:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),m=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=m(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=d(e,["components","mdxType","originalType","parentName"]),l=m(a),p=n,g=l["".concat(c,".").concat(p)]||l[p]||s[p]||i;return a?r.a.createElement(g,o(o({ref:t},b),{},{components:a})):r.a.createElement(g,o({ref:t},b))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);