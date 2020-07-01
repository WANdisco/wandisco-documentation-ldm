(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),i=(a(0),a(117)),o={id:"quickstart",title:"Quickstart",sidebar_label:"Quickstart"},c={id:"quickstart",isDocsHomePage:!1,title:"Quickstart",description:"LiveData Migrator is in public preview. This gives you access to all product functionality for review, but limits operation time to 10 minutes during the preview period.",source:"@site/docs/quickstart.md",permalink:"/wandisco-documentation-ldm/docs/quickstart",sidebar_label:"Quickstart",sidebar:"someSidebar",previous:{title:"About LiveData Migrator",permalink:"/wandisco-documentation-ldm/docs/"},next:{title:"Getting Started",permalink:"/wandisco-documentation-ldm/docs/getting-started"}},s=[{value:"1. Run LiveData Migrator",id:"1-run-livedata-migrator",children:[]},{value:"2. Define your target",id:"2-define-your-target",children:[]},{value:"3. Migrate your data",id:"3-migrate-your-data",children:[]}],d={rightToc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Public Preview")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"LiveData Migrator is in public preview. This gives you access to all product functionality for review, but limits operation time to 10 minutes during the preview period."))),Object(i.b)("p",null,"Get started with data migration in less than 30 seconds. If you're new to the concept of LiveData, or want to know what LiveData Migrator does, please read the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/"}),"introduction to LiveData Migrator"),"."),Object(i.b)("div",{class:"download"},Object(i.b)("a",{href:"https://customer.wandisco.com"},"Download LiveData Migrator")),Object(i.b)("p",null,"Migrate your data immediately in three steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run LiveData Migrator,"),Object(i.b)("li",{parentName:"ol"},"Define a target, then"),Object(i.b)("li",{parentName:"ol"},"Migrate your data.")),Object(i.b)("h2",{id:"1-run-livedata-migrator"},"1. Run LiveData Migrator"),Object(i.b)("p",null,"As the ",Object(i.b)("inlineCode",{parentName:"p"},"hdfs")," user on a cluster edge node:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$ hadoop jar live-migrator.jar\n")),Object(i.b)("p",null,"For more details, see the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/getting-started#running-livedata-migrator"}),"Getting Started")," guide."),Object(i.b)("h2",{id:"2-define-your-target"},"2. Define your target"),Object(i.b)("p",null,"Define a reference to your target file system with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference#file-system-commands"}),Object(i.b)("inlineCode",{parentName:"a"},"filesystem add"))," before migrating data to it. e.g."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'WANdisco LiveMigrator >> filesystem add adls2 sharedKey --file-system-id mytarget --storage-account-name psmadls2 --container.name lm2target --fs.azure.shared.key Ri5NxHGqoQ79DBGLVn+COK/sRDwbNqAREDACTEDaMxRkvXt2ijUtAkVqVCBj/vaS/NbzR5rtjE2CZ31ejVpUVA==\n{\n  "fsId" : "lm2target",\n  "fsType" : "adls2-hcfs",\n  "isSource" : false,\n  "properties" : {\n    "fsId" : "lm2target",\n    "fsType" : "adls2-hcfs",\n    "fs.defaultFS" : "abfss://lm2target@psmadls2.dfs.core.windows.net/",\n    "fs.azure.account.auth.type.psmadls2.dfs.core.windows.net" : "SharedKey",\n    "fs.azure.account.key.psmadls2.dfs.core.windows.net" : "Ri5NxHGqoQ79DBGLVn+COK/sRDwbNqAREDACTEDaMxRkvXt2ijUtAkVqVCBj/vaS/NbzR5rtjE2CZ31ejVpUVA==",\n    "fs.abfss.impl" : "org.apache.hadoop.fs.azurebfs.SecureAzureBlobFileSystem",\n    "fs.AbstractFileSystem.abfss.impl" : "org.apache.hadoop.fs.azurebfs.Abfss",\n    "fs.abfss.impl.disable.cache" : "true"\n  },\n  "eventsPosition" : 0\n}\n')),Object(i.b)("h2",{id:"3-migrate-your-data"},"3. Migrate your data"),Object(i.b)("p",null,"Create and auto-start the migration for a directory in your source, like ",Object(i.b)("inlineCode",{parentName:"p"},"/repl1"),", to the target you created with the identifier ",Object(i.b)("inlineCode",{parentName:"p"},"lm2target")," using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-new"}),Object(i.b)("inlineCode",{parentName:"a"},"migration new")),". e.g."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'WANdisco LiveMigrator >> migration new --auto-start --path /repl1 --target lm2target\n{\n  "migrationId" : "343a270e319d5beb0bf1adfbb1a5d0f8f3c0a4d6",\n  "path" : "/repl1",\n  "source" : "auto-discovered-source-hdfs",\n  "target" : "lm2target",\n  "state" : "SCHEDULED",\n  "exclusions" : [ ],\n  "migrationStartTime" : "2020-06-03T05:17:27.936+0000",\n  "migrationEdge" : "/repl1",\n  "scannerSummary" : {\n    "progressSummary" : {\n      "filesScanned" : 0,\n      "directoriesScanned" : 0,\n      "bytesScanned" : 0\n    },\n    "contentSummary" : null\n  },\n  "migrationCompleteTime" : null,\n  "abortReason" : null,\n  "filesSeen" : 0,\n  "dirsSeen" : 0,\n  "sizeOfMigration" : 0\n}\n')),Object(i.b)("p",null,"Use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference#status"}),Object(i.b)("inlineCode",{parentName:"a"},"status"))," for information about the progress of migrations that are underway, as well as those that are Live, meaning that they have migrated all pre-existing data and are keeping the target file system consistent with new data and other changes made to the source."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"WANdisco LiveMigrator >> status\n\nTotal Migrations:  1\nAverage Bandwidth: 0.00 Gb/s, 0.00 Gb/s, 0.00 Gb/s\nPeak Bandwidth:    0.00 Gb/s\nAverage Files/s:   0, 0, 0\nPeak Files/s:      0\n\nLive: 1\n     /repl1 343a270e319d5beb0bf1adfbb1a5d0f8f3c0a4d6\n\nRunning: 0\n\nReady: 0\n")),Object(i.b)("p",null,"Monitor the operation of LiveData Migrator, including the average bandwidth used in the last 10 second, 1 minute, and 5 minute intervals. If you need more specific information about an individual migration, you can view details for it with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-show"}),Object(i.b)("inlineCode",{parentName:"a"},"migration show")),"."),Object(i.b)("h1",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"For a more comprehensive introduction to using LiveData Migrator, including installation, operation and the full set of commands, please read the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/getting-started"}),"Getting Started")," guide."))}l.isMDXComponent=!0},117:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),b=l(a),m=n,p=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return a?r.a.createElement(p,c(c({ref:t},d),{},{components:a})):r.a.createElement(p,c({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);