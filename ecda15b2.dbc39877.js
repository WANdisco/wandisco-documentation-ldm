(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),r=(a(0),a(116)),c={id:"configure-exclusions",title:"Configure exclusions",sidebar_label:"Configure exclusions"},o={unversionedId:"configure-exclusions",id:"configure-exclusions",isDocsHomePage:!1,title:"Configure exclusions",description:"Exclusions prevent certain file sizes or file names (defined using regex patterns) from your data migrations. Exclusion templates are associated with a storage, allowing you to selectively ignore content during migration when that storage is used as the source.",source:"@site/docs/configure-exclusions.md",slug:"/configure-exclusions",permalink:"/docs/configure-exclusions",version:"current",sidebar_label:"Configure exclusions",sidebar:"someSidebar",previous:{title:"Create a migration",permalink:"/docs/create-migration"},next:{title:"Manage migrations",permalink:"/docs/manage-migrations"}},l=[{value:"Configure exclusions with the UI",id:"configure-exclusions-with-the-ui",children:[{value:"Add new exclusions",id:"add-new-exclusions",children:[]},{value:"Remove exclusions from the templates list",id:"remove-exclusions-from-the-templates-list",children:[]}]},{value:"Configure exclusions with the CLI",id:"configure-exclusions-with-the-cli",children:[{value:"Define exclusions",id:"define-exclusions",children:[]},{value:"Manage exclusions",id:"manage-exclusions",children:[]}]}],s={toc:l};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"Exclusions prevent certain file sizes or file names (defined using ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://regexr.com/"}),"regex")," patterns) from your data migrations. Exclusion templates are associated with a storage, allowing you to selectively ignore content during migration when that storage is used as the source."),Object(r.a)("p",null,"Use the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#configure-exclusions-with-the-ui"}),"UI")," or the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#configure-exclusions-with-the-cli"}),"CLI")," to configure exclusions."),Object(r.a)("h2",{id:"configure-exclusions-with-the-ui"},"Configure exclusions with the UI"),Object(r.a)("p",null,"Assign exclusions to new or existing migrations."),Object(r.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Default exclusions will automatically apply to certain storages depending on the platform. For example, ADLS storage types have a maximum individual file size limit of 4.55TiB."))),Object(r.a)("h3",{id:"add-new-exclusions"},"Add new exclusions"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"In the ",Object(r.a)("strong",{parentName:"li"},"Storages")," list on the dashboard, click the settings for the appropriate storage."),Object(r.a)("li",{parentName:"ol"},"Select ",Object(r.a)("strong",{parentName:"li"},"LiveData Migrator")," under the ",Object(r.a)("em",{parentName:"li"},"Processes")," list to display the exclusion templates."),Object(r.a)("li",{parentName:"ol"},"Click ",Object(r.a)("strong",{parentName:"li"},"Add Exclusion Template")," to associate the exclusion with the selected storage and enter the parameters for the exclusion:",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"Exclusion type")," - ",Object(r.a)("em",{parentName:"li"},"Regex"),", ",Object(r.a)("em",{parentName:"li"},"File Size"),", or ",Object(r.a)("em",{parentName:"li"},"Date"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"Name")," - The name given to the exclusion template (for example: ",Object(r.a)("inlineCode",{parentName:"li"},"100gbfilelimit"),")."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"Description"),' - A brief description of what the exclusion is doing. For example: "',Object(r.a)("em",{parentName:"li"},"Files larger than 100GB are excluded"),'").'),Object(r.a)("li",{parentName:"ul"},Object(r.a)("em",{parentName:"li"},"File Size")," = ",Object(r.a)("strong",{parentName:"li"},"Value / Unit")," - The value and unit for the file size limit (for example: ",Object(r.a)("inlineCode",{parentName:"li"},"100")," ",Object(r.a)("inlineCode",{parentName:"li"},"GB"),")."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("em",{parentName:"li"},"Regex")," = ",Object(r.a)("strong",{parentName:"li"},"Regex")," - The regex pattern to be used for the filename exclusion (for example: ",Object(r.a)("inlineCode",{parentName:"li"},"/**/.hive-staging**"),")."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("em",{parentName:"li"},"Date")," = ",Object(r.a)("strong",{parentName:"li"},"Select Date")," - Any files that have been modified before the specified date will be excluded during migrations.")))),Object(r.a)("p",null,"Once the exclusion is added and passed validation, it appears on the exclusion list."),Object(r.a)("h3",{id:"remove-exclusions-from-the-templates-list"},"Remove exclusions from the templates list"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"In the ",Object(r.a)("strong",{parentName:"li"},"Storages")," list on the dashboard, click the settings for the appropriate storage."),Object(r.a)("li",{parentName:"ol"},"Select ",Object(r.a)("strong",{parentName:"li"},"LiveData Migrator")," under the ",Object(r.a)("em",{parentName:"li"},"Processes")," list to display the exclusion templates."),Object(r.a)("li",{parentName:"ol"},"Click the trash icon.")),Object(r.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"This will not remove the exclusion from an existing migration. See the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#remove-exclusions-from-an-existing-migration"}),"Remove exclusions from an existing migration")," section for guidance on how to do this."))),Object(r.a)("h2",{id:"configure-exclusions-with-the-cli"},"Configure exclusions with the CLI"),Object(r.a)("p",null,"Exclusions constrain content migrated from a source file system. Adding exclusions to an existing migration will change the future actions performed for that migration, but will not affect previously migrated content."),Object(r.a)("h3",{id:"define-exclusions"},"Define exclusions"),Object(r.a)("p",null,"Define exclusions so you can apply them to migrations."),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/docs/command-reference#exclusion-add-date"}),Object(r.a)("inlineCode",{parentName:"a"},"exclusion add date"))),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create a new date-based rule")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/docs/command-reference#exclusion-add-file-size"}),Object(r.a)("inlineCode",{parentName:"a"},"exclusion add file-size"))),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create a new file size rule")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/docs/command-reference#exclusion-add-regex"}),Object(r.a)("inlineCode",{parentName:"a"},"exclusion add regex"))),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create a new regex exclusion rule")))),Object(r.a)("h3",{id:"manage-exclusions"},"Manage exclusions"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/docs/command-reference#exclusion-del"}),Object(r.a)("inlineCode",{parentName:"a"},"exclusion del"))),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete an exclusion rule")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/docs/command-reference#exclusion-list"}),Object(r.a)("inlineCode",{parentName:"a"},"exclusion list"))),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List all exclusion rules")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/docs/command-reference#exclusion-show"}),Object(r.a)("inlineCode",{parentName:"a"},"exclusion show"))),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Get details for a particular exclusion rule")))))}m.isMDXComponent=!0},116:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),m=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(a),p=n,b=u["".concat(c,".").concat(p)]||u[p]||d[p]||r;return a?i.a.createElement(b,o(o({ref:t},s),{},{components:a})):i.a.createElement(b,o({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<r;s++)c[s]=a[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);