(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var i=a(0),n=a.n(i);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(a),p=i,g=m["".concat(r,".").concat(p)]||m[p]||u[p]||o;return a?n.a.createElement(g,s(s({ref:t},c),{},{components:a})):n.a.createElement(g,s({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var i=a(3),n=a(7),o=(a(0),a(112)),r={id:"operation-ui",title:"Using LiveData Migrator with the UI",sidebar_label:"UI"},s={unversionedId:"operation-ui",id:"version-1.4.7/operation-ui",isDocsHomePage:!1,title:"Using LiveData Migrator with the UI",description:"The UI can manage multiple LiveData Migrators as well as LiveData Plane from one convenient interface. It is designed to be intuitive and contains on-screen instructions to help you perform migrations and configuration tasks successfully.",source:"@site/versioned_docs/version-1.4.7/operation-ui.md",slug:"/operation-ui",permalink:"/wandisco-documentation-ldm/docs/1.4.7/operation-ui",version:"1.4.7",sidebar_label:"UI",sidebar:"version-1.4.7/someSidebar",previous:{title:"Installation",permalink:"/wandisco-documentation-ldm/docs/1.4.7/installation"},next:{title:"Using LiveData Migrator with the CLI",permalink:"/wandisco-documentation-ldm/docs/1.4.7/operation-cli"}},l=[{value:"Before you start",id:"before-you-start",children:[{value:"Register",id:"register",children:[]},{value:"Upgrade your license",id:"upgrade-your-license",children:[]}]},{value:"How the UI works",id:"how-the-ui-works",children:[{value:"License information",id:"license-information",children:[]},{value:"Bandwidth usage",id:"bandwidth-usage",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Rules and Migrations",id:"rules-and-migrations",children:[]},{value:"Notifications",id:"notifications",children:[]}]},{value:"Migrate data",id:"migrate-data",children:[{value:"Configure storage",id:"configure-storage",children:[]},{value:"Create migrations",id:"create-migrations",children:[]},{value:"View migrations",id:"view-migrations",children:[]}]},{value:"Add and remove exclusions",id:"add-and-remove-exclusions",children:[{value:"Add new exclusions",id:"add-new-exclusions",children:[]},{value:"Remove exclusions from the templates list",id:"remove-exclusions-from-the-templates-list",children:[]},{value:"Assign exclusion templates to a new migration",id:"assign-exclusion-templates-to-a-new-migration",children:[]},{value:"Assign exclusion templates to an existing migration",id:"assign-exclusion-templates-to-an-existing-migration",children:[]},{value:"Remove exclusion from an existing migration",id:"remove-exclusion-from-an-existing-migration",children:[]}]}],c={toc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"The UI can manage multiple LiveData Migrators as well as LiveData Plane from one convenient interface. It is designed to be intuitive and contains on-screen instructions to help you perform migrations and configuration tasks successfully."),Object(o.a)("p",null,"If you're new to the concept of LiveData, or want to know what LiveData Migrator does, see the ",Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.4.7/about"}),"introduction to LiveData Migrator")," before learning ",Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.4.7/installation"}),"how to install")," and use LiveData Migrator."),Object(o.a)("h2",{id:"before-you-start"},"Before you start"),Object(o.a)("p",null,"The UI is available on port 8081 on the host with your LiveData Migrator installation. For example, if you were running LiveData Migrator locally, the port would be:"),Object(o.a)("p",null,Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"http://127.0.0.1:8081"}),"http://127.0.0.1:8081")),Object(o.a)("h3",{id:"register"},"Register"),Object(o.a)("p",null,"You'll be asked to register a LiveData Migrator account the first time you use the UI. Fill in the registration form to create your user account."),Object(o.a)("p",null,"Internet access from the host is not required, but when it is available, you'll be sent confirmation of your registration. We'll use your registration information to send you important information about your LiveData Migrator account, such as a reminder before your license expires. You can also opt in to receive additional product updates."),Object(o.a)("h3",{id:"upgrade-your-license"},"Upgrade your license"),Object(o.a)("p",null,"Your trial license will last 14 days and is valid for 5TB of data. If you want to upgrade to a full license before you start using LiveData Migrator, follow these steps:"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Click ",Object(o.a)("strong",{parentName:"p"},"Upgrade License"),".")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Click the option to purchase a license now. Follow the provided instructions to get your license."),Object(o.a)("p",{parentName:"li"},"Once your license has been sent, ensure it is available on your local machine.")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Upload your new license.")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Review the license preview and ensure it is correct before selecting ",Object(o.a)("strong",{parentName:"p"},"Upload"),"."),Object(o.a)("p",{parentName:"li"},"The License panel displays your new limits and license expiry date. We'll notify you when it's time to renew your license."))),Object(o.a)("h2",{id:"how-the-ui-works"},"How the UI works"),Object(o.a)("p",null,"The UI has four main panels and a Notification system."),Object(o.a)("h3",{id:"license-information"},"License information"),Object(o.a)("p",null,"Use the License information panel to see current license information (including warnings if the product is approaching license limits), and uploading a new license."),Object(o.a)("h3",{id:"bandwidth-usage"},"Bandwidth usage"),Object(o.a)("p",null,"The Bandwidth panel shows how much bandwidth LiveData Migrator is currently using to migrate data. It shows this over the most recent 5 minute period and continually updates. The left axis scales automatically to accommodate the highest throughput during that period."),Object(o.a)("h3",{id:"storage"},"Storage"),Object(o.a)("p",null,"The Storage panel shows the underlying storage used by LiveData Migrator as either a source or target. LiveData Migrator supports one source and one or more targets. Each storage displays its associated processes, such as which LiveData Migrator is used to access it."),Object(o.a)("p",null,"Use the Storage panel to:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"View and configure the source and target storages"),Object(o.a)("li",{parentName:"ul"},"Add further targets"),Object(o.a)("li",{parentName:"ul"},"Add additional LiveData Migrators and LiveData Plane")),Object(o.a)("p",null,"For more information about sources and targets, see the ",Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.4.7/about"}),"introduction to LiveData Migrator"),"."),Object(o.a)("h3",{id:"rules-and-migrations"},"Rules and Migrations"),Object(o.a)("p",null,"The Rules and Migrations panel in LiveData Migrator shows migrations and their progress. If the UI also manages LiveData Plane, the panel will also show rules."),Object(o.a)("p",null,"Use the Rules and Migrations panel to:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Add further migrations or rules"),Object(o.a)("li",{parentName:"ul"},"View more detail about existing rules and migrations")),Object(o.a)("h3",{id:"notifications"},"Notifications"),Object(o.a)("p",null,"The bell icon in the top-right of the UI is where you'll receive notifications about errors, warnings, or important milestones in your usage."),Object(o.a)("h2",{id:"migrate-data"},"Migrate data"),Object(o.a)("h3",{id:"configure-storage"},"Configure storage"),Object(o.a)("p",null,"Configure your storages to define at least one source and at least one target to migrate data. LiveData Migrator will connect to these storages for migration."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Supported sources are: ",Object(o.a)("strong",{parentName:"li"},"HDFS")),Object(o.a)("li",{parentName:"ul"},"Supported targets are: ",Object(o.a)("strong",{parentName:"li"},"ADSL Gen2")," and ",Object(o.a)("strong",{parentName:"li"},"S3"))),Object(o.a)("p",null,"You can also use the Storage panel to:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Configure S3-compatible Targets using the ",Object(o.a)("a",Object(i.a)({parentName:"li"},{href:"http://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html"}),"Hadoop S3A configuration")," exposed in the UI."),Object(o.a)("li",{parentName:"ul"},"Connect to additional LiveData Migrator or LiveData Plane instances and configure their respective storages.")),Object(o.a)("h3",{id:"create-migrations"},"Create migrations"),Object(o.a)("p",null,"Migrations transfer existing data from the defined source to a target. LiveData Migrator migrates any changes made to the source data while it is being migrated and ensures that the target is up to date with those changes. It does this while continuing to perform the migration."),Object(o.a)("p",null,"You will typically create multiple migrations so that you can select specific content from your source storage by Path. You can also migrate to multiple independent storages at the same time by defining multiple migration resources."),Object(o.a)("p",null,"To create a migration:"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"Choose a source and target from previously defined ",Object(o.a)("a",Object(i.a)({parentName:"li"},{href:"#configure-storage"}),"storages"),"."),Object(o.a)("li",{parentName:"ol"},"Choose the Path to set the scope of the migration."),Object(o.a)("li",{parentName:"ol"},Object(o.a)("a",Object(i.a)({parentName:"li"},{href:"#add-new-exclusions"}),"Apply any exclusions")," to reduce the scope within this Path.")),Object(o.a)("p",null,"Migrations can be automatically started when they're created, or started at a later point when ",Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"#view-migrations"}),"viewing migration details"),"."),Object(o.a)("p",null,"If you've already migrated some data from the same source to the same target, you can choose whether to overwrite all the content (Overwrite) or only migrate new content that isn't already there (Skip)."),Object(o.a)("h3",{id:"view-migrations"},"View migrations"),Object(o.a)("p",null,"The Dashboard displays an overview of migrations and their status, showing what pre-existing data has been moved and data added since the migration started."),Object(o.a)("p",null,"Click into the migrations to see more detail."),Object(o.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.a)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.a)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.a)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"A migration must be stopped before it can be deleted. A stopped migration can not be resumed."))),Object(o.a)("h2",{id:"add-and-remove-exclusions"},"Add and remove exclusions"),Object(o.a)("p",null,"Define exclusion templates to exclude certain file sizes or file names (defined using ",Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"https://regexr.com/"}),"regex")," patterns) during a migration. These templates are associated with a storage, allowing you to selectively ignore content during migration when that storage is used as the source."),Object(o.a)("p",null,"Assign exclusion templates to new migration or existing migrations. Adding exclusions to a new migration ensures the outcome is consistent with the chosen exclusions. Adding exclusions to an existing migration will change the future actions performed for that migration, but will not affect previously migrated content."),Object(o.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.a)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.a)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.a)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"Default exclusions will automatically apply to certain storages depending on the platform. For example, ADLS storage types have a maximum individual file size limit of 5TB."))),Object(o.a)("h3",{id:"add-new-exclusions"},"Add new exclusions"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"In the ",Object(o.a)("strong",{parentName:"li"},"Storages")," list on the dashboard, click the settings cog for the appropriate storage."),Object(o.a)("li",{parentName:"ol"},"Select ",Object(o.a)("strong",{parentName:"li"},"LiveData Migrator")," under the ",Object(o.a)("em",{parentName:"li"},"Processes")," list to display the exclusion templates."),Object(o.a)("li",{parentName:"ol"},"Click ",Object(o.a)("strong",{parentName:"li"},"Add new exclusion")," to associate the exclusion with the selected storage and enter the parameters for the exclusion:",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Exclusion type")," - ",Object(o.a)("em",{parentName:"li"},"File Size")," or ",Object(o.a)("em",{parentName:"li"},"Regex"),"."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Name")," - The name given to the exclusion template (for example: ",Object(o.a)("inlineCode",{parentName:"li"},"100gbfilelimit"),")."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Description"),' - A brief description of what the exclusion is doing. For example: "',Object(o.a)("em",{parentName:"li"},"Files larger than 100GB are excluded"),'").'),Object(o.a)("li",{parentName:"ul"},Object(o.a)("em",{parentName:"li"},"File Size")," = ",Object(o.a)("strong",{parentName:"li"},"Value / Unit")," - The value and unit for the file size limit (for example: ",Object(o.a)("inlineCode",{parentName:"li"},"100")," ",Object(o.a)("inlineCode",{parentName:"li"},"GB"),")."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("em",{parentName:"li"},"Regex")," = ",Object(o.a)("strong",{parentName:"li"},"Regex")," - The regex pattern to be used for the filename exclusion (for example: ",Object(o.a)("inlineCode",{parentName:"li"},"/**/.hive-staging**"),")")))),Object(o.a)("p",null,"Once the exclusion is added and passed validation, it appears on the exclusion list."),Object(o.a)("h3",{id:"remove-exclusions-from-the-templates-list"},"Remove exclusions from the templates list"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"In the ",Object(o.a)("strong",{parentName:"li"},"Storages")," list on the dashboard, click the settings cog for the appropriate storage."),Object(o.a)("li",{parentName:"ol"},"Select ",Object(o.a)("strong",{parentName:"li"},"LiveData Migrator")," under the ",Object(o.a)("em",{parentName:"li"},"Processes")," list to display the exclusion templates."),Object(o.a)("li",{parentName:"ol"},"Click the trash icon.")),Object(o.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.a)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.a)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.a)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"This will not remove the exclusion from an existing migration. See the ",Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"#remove-exclusion-from-an-existing-migration"}),"Remove exclusion from an existing migration")," section for guidance on how to do this."))),Object(o.a)("h3",{id:"assign-exclusion-templates-to-a-new-migration"},"Assign exclusion templates to a new migration"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"In the new migration page, click ",Object(o.a)("strong",{parentName:"li"},"Add new exclusion")),Object(o.a)("li",{parentName:"ol"},"Select the appropriate exclusion template from the drop-down list.")),Object(o.a)("p",null,"The exclusion appears in the list, and can be removed before the migration is started."),Object(o.a)("h3",{id:"assign-exclusion-templates-to-an-existing-migration"},"Assign exclusion templates to an existing migration"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"In the dashboard, select an ongoing migration to view its ",Object(o.a)("strong",{parentName:"li"},"Exclusions"),"."),Object(o.a)("li",{parentName:"ol"},"Click ",Object(o.a)("strong",{parentName:"li"},"Add")," and select the appropriate exclusion template from the drop-down list.")),Object(o.a)("h3",{id:"remove-exclusion-from-an-existing-migration"},"Remove exclusion from an existing migration"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"In the dashboard, select an ongoing migration to view its ",Object(o.a)("strong",{parentName:"li"},"Exclusions"),"."),Object(o.a)("li",{parentName:"ol"},"Remove any of the exclusions one at a time.")))}d.isMDXComponent=!0}}]);