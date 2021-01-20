(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),r=(a(0),a(112)),o={id:"manage-migrations",title:"Manage migrations",sidebar_label:"Manage migrations"},c={unversionedId:"manage-migrations",id:"manage-migrations",isDocsHomePage:!1,title:"Manage migrations",description:"Manage your migrations with LiveData Migrator using either the UI or CLI.",source:"@site/docs/manage-migrations.md",slug:"/manage-migrations",permalink:"/wandisco-documentation-ldm/docs/manage-migrations",version:"current",sidebar_label:"Manage migrations",sidebar:"someSidebar",previous:{title:"Configure exclusions",permalink:"/wandisco-documentation-ldm/docs/configure-exclusions"},next:{title:"Define your bandwidth policy",permalink:"/wandisco-documentation-ldm/docs/manage-bandwidth"}},b=[{value:"Manage migrations with the UI",id:"manage-migrations-with-the-ui",children:[{value:"Assign exclusions to an existing migration",id:"assign-exclusions-to-an-existing-migration",children:[]},{value:"Remove exclusions from an existing migration",id:"remove-exclusions-from-an-existing-migration",children:[]}]},{value:"Manage migrations with the CLI",id:"manage-migrations-with-the-cli",children:[{value:"Data migration states",id:"data-migration-states",children:[]}]}],m={toc:b};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Manage your migrations with LiveData Migrator using either the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#manage-migrations-with-the-ui"}),"UI")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#manage-migrations-with-the-cli"}),"CLI"),"."),Object(r.b)("h2",{id:"manage-migrations-with-the-ui"},"Manage migrations with the UI"),Object(r.b)("p",null,"The Dashboard displays an overview of migrations and their status, showing what pre-existing data has been moved and data added since the migration started."),Object(r.b)("p",null,"Click ",Object(r.b)("strong",{parentName:"p"},"View migration")," to see more detail."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"A migration must be stopped before it can be deleted. A stopped migration can not be resumed."))),Object(r.b)("h3",{id:"assign-exclusions-to-an-existing-migration"},"Assign exclusions to an existing migration"),Object(r.b)("p",null,"Adding exclusions to an existing migration will change the future actions performed for that migration, but will not affect previously migrated content."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In the dashboard, select an ongoing migration to view its ",Object(r.b)("strong",{parentName:"li"},"Exclusions"),"."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Add")," and select the appropriate exclusion template from the drop-down list.")),Object(r.b)("h3",{id:"remove-exclusions-from-an-existing-migration"},"Remove exclusions from an existing migration"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In the dashboard, select an ongoing migration to view its ",Object(r.b)("strong",{parentName:"li"},"Exclusions"),"."),Object(r.b)("li",{parentName:"ol"},"Remove any of the exclusions one at a time.")),Object(r.b)("h2",{id:"manage-migrations-with-the-cli"},"Manage migrations with the CLI"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-stop"}),Object(r.b)("inlineCode",{parentName:"a"},"migration stop"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stop a migration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-resume"}),Object(r.b)("inlineCode",{parentName:"a"},"migration resume"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Resume a stopped migration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-del"}),Object(r.b)("inlineCode",{parentName:"a"},"migration del"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete a migration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-exclusion-add"}),Object(r.b)("inlineCode",{parentName:"a"},"migration exclusion add"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add an exclusion to a migration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-exclusion-del"}),Object(r.b)("inlineCode",{parentName:"a"},"migration exclusion del"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Remove an exclusion from a migration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-list"}),Object(r.b)("inlineCode",{parentName:"a"},"migration list"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List running and active migrations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-run"}),Object(r.b)("inlineCode",{parentName:"a"},"migration run"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Start a migration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-show"}),Object(r.b)("inlineCode",{parentName:"a"},"migration show"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Get migration details")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#status"}),Object(r.b)("inlineCode",{parentName:"a"},"status"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Get migration status")))),Object(r.b)("h3",{id:"data-migration-states"},"Data migration states"),Object(r.b)("p",null,"Migrations can be in one of eight states:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"NONSCHEDULED"),"\n: A ",Object(r.b)("em",{parentName:"p"},"non-scheduled migration")," has been defined but not yet started. Create a migration in this state by not specifying the ",Object(r.b)("inlineCode",{parentName:"p"},"--auto-start")," parameter on creation."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"SCHEDULED"),"\n: A ",Object(r.b)("em",{parentName:"p"},"scheduled")," migration will start when directed to run."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"STARTING"),"\n: A ",Object(r.b)("em",{parentName:"p"},"starting")," migration is being started and will soon begin transferring content to the target."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"RUNNING"),"\n: A ",Object(r.b)("em",{parentName:"p"},"running")," migration is scanning through source content and transferring content to the target, as well as responding to change notifications from the source if applicable."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"LIVE"),"\n: A ",Object(r.b)("em",{parentName:"p"},"live")," migration has completed scanning through source content, continues to respond to change notifications from the source, and will transfer content to and make changes in the target as required."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"PAUSING"),"\n: A ",Object(r.b)("em",{parentName:"p"},"pausing")," migration has been instructed to pause transfer, but is temporarily continuing to make changes to the target."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"PAUSED"),"\n: A ",Object(r.b)("em",{parentName:"p"},"paused")," migration has been instructed to pause transfer, and is not transferring content or making other changes to the target."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ABORTED"),"\n: An ",Object(r.b)("em",{parentName:"p"},"aborted")," migration will not make any changes to the target and cannot be run again."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"COMPLETED"),"\n: A ",Object(r.b)("em",{parentName:"p"},"completed")," migration has scanned through all source content and finished transferring all applicable data to the target filesystem, and has ignored any updates to the source data."))}s.isMDXComponent=!0},112:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return g}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=i.a.createContext({}),s=function(e){var t=i.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=s(e.components);return i.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,m=b(e,["components","mdxType","originalType","parentName"]),l=s(a),p=n,g=l["".concat(o,".").concat(p)]||l[p]||d[p]||r;return a?i.a.createElement(g,c(c({ref:t},m),{},{components:a})):i.a.createElement(g,c({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var m=2;m<r;m++)o[m]=a[m];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);