(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),r=(n(0),n(197)),o={id:"manage-migrations",title:"Manage migrations",sidebar_label:"Manage migrations"},c={unversionedId:"manage-migrations",id:"manage-migrations",isDocsHomePage:!1,title:"Manage migrations",description:"Manage your migrations with LiveData Migrator using either the UI or CLI.",source:"@site/docs/manage-migrations.md",slug:"/manage-migrations",permalink:"/wandisco-documentation-ldm/docs/manage-migrations",version:"current",sidebar_label:"Manage migrations",sidebar:"someSidebar",previous:{title:"Configure exclusions",permalink:"/wandisco-documentation-ldm/docs/configure-exclusions"},next:{title:"Define your bandwidth policy",permalink:"/wandisco-documentation-ldm/docs/manage-bandwidth"}},m=[{value:"Manage migrations with the UI",id:"manage-migrations-with-the-ui",children:[{value:"Assign exclusions to an existing migration",id:"assign-exclusions-to-an-existing-migration",children:[]},{value:"Remove exclusions from an existing migration",id:"remove-exclusions-from-an-existing-migration",children:[]},{value:"Stop a migration",id:"stop-a-migration",children:[]},{value:"Resume a migration",id:"resume-a-migration",children:[]},{value:"Delete a migration",id:"delete-a-migration",children:[]}]},{value:"Manage migrations with the CLI",id:"manage-migrations-with-the-cli",children:[{value:"Data migration states",id:"data-migration-states",children:[]}]}],b={toc:m};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Manage your migrations with LiveData Migrator using either the ",Object(r.b)("a",{parentName:"p",href:"#manage-migrations-with-the-ui"},"UI")," or ",Object(r.b)("a",{parentName:"p",href:"#manage-migrations-with-the-cli"},"CLI"),"."),Object(r.b)("h2",{id:"manage-migrations-with-the-ui"},"Manage migrations with the UI"),Object(r.b)("p",null,"The Dashboard displays an overview of migrations and their status, showing what pre-existing data has been moved and data added since the migration started."),Object(r.b)("p",null,"Click ",Object(r.b)("strong",{parentName:"p"},"View migration")," to see more detail."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"A migration must be stopped or aborted before it can be deleted."))),Object(r.b)("h3",{id:"assign-exclusions-to-an-existing-migration"},"Assign exclusions to an existing migration"),Object(r.b)("p",null,"Adding exclusions to an existing migration will change the future actions performed for that migration, but will not affect previously migrated content."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In the dashboard, select an ongoing migration to view its ",Object(r.b)("strong",{parentName:"li"},"Exclusions"),"."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Add")," and select the appropriate exclusion template from the drop-down list.")),Object(r.b)("h3",{id:"remove-exclusions-from-an-existing-migration"},"Remove exclusions from an existing migration"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In the dashboard, select an ongoing migration to view its ",Object(r.b)("strong",{parentName:"li"},"Exclusions"),"."),Object(r.b)("li",{parentName:"ol"},"Remove any of the exclusions one at a time.")),Object(r.b)("h3",{id:"stop-a-migration"},"Stop a migration"),Object(r.b)("p",null,"When you start a migration, the ",Object(r.b)("strong",{parentName:"p"},"Start")," button will be replaced with a ",Object(r.b)("strong",{parentName:"p"},"Stop")," button. Click it to stop the migration and suspend all current file transfer."),Object(r.b)("h3",{id:"resume-a-migration"},"Resume a migration"),Object(r.b)("p",null,"When you stop a migration, the ",Object(r.b)("strong",{parentName:"p"},"Stop")," button will be replaced with a ",Object(r.b)("strong",{parentName:"p"},"Resume")," button. Click it to resume the migration, which will continue from where it left off."),Object(r.b)("h3",{id:"delete-a-migration"},"Delete a migration"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Migrations must be ",Object(r.b)("a",{parentName:"p",href:"#stop-a-migration"},"stopped")," before they can be deleted."))),Object(r.b)("p",null,"When viewing a migration, click on the ",Object(r.b)("strong",{parentName:"p"},"Details")," panel. Click the option to ",Object(r.b)("strong",{parentName:"p"},"Delete")," the migration."),Object(r.b)("h2",{id:"manage-migrations-with-the-cli"},"Manage migrations with the CLI"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Command"),Object(r.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#migration-stop"},Object(r.b)("inlineCode",{parentName:"a"},"migration stop"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Stop a migration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#migration-resume"},Object(r.b)("inlineCode",{parentName:"a"},"migration resume"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Resume a stopped migration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#migration-del"},Object(r.b)("inlineCode",{parentName:"a"},"migration del"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Delete a migration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#migration-exclusion-add"},Object(r.b)("inlineCode",{parentName:"a"},"migration exclusion add"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Add an exclusion to a migration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#migration-exclusion-del"},Object(r.b)("inlineCode",{parentName:"a"},"migration exclusion del"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Remove an exclusion from a migration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#migration-list"},Object(r.b)("inlineCode",{parentName:"a"},"migration list"))),Object(r.b)("td",{parentName:"tr",align:"left"},"List running and active migrations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#migration-run"},Object(r.b)("inlineCode",{parentName:"a"},"migration run"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Start a migration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#migration-show"},Object(r.b)("inlineCode",{parentName:"a"},"migration show"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Get migration details")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#status"},Object(r.b)("inlineCode",{parentName:"a"},"status"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Get migration status")))),Object(r.b)("h3",{id:"data-migration-states"},"Data migration states"),Object(r.b)("p",null,"Migrations can be in one of eight states:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"NONSCHEDULED"),"\n: A ",Object(r.b)("em",{parentName:"p"},"non-scheduled migration")," has been defined but not yet started. Create a migration in this state by not specifying the ",Object(r.b)("inlineCode",{parentName:"p"},"--auto-start")," parameter on creation."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"SCHEDULED"),"\n: A ",Object(r.b)("em",{parentName:"p"},"scheduled")," migration will start when directed to run."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"STARTING"),"\n: A ",Object(r.b)("em",{parentName:"p"},"starting")," migration is being started and will soon begin transferring content to the target."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"RUNNING"),"\n: A ",Object(r.b)("em",{parentName:"p"},"running")," migration is scanning through source content and transferring content to the target, as well as responding to change notifications from the source if applicable."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"LIVE"),"\n: A ",Object(r.b)("em",{parentName:"p"},"live")," migration has completed scanning through source content, continues to respond to change notifications from the source, and will transfer content to and make changes in the target as required."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"PAUSING"),"\n: A ",Object(r.b)("em",{parentName:"p"},"pausing")," migration has been instructed to pause transfer, but is temporarily continuing to make changes to the target."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"PAUSED"),"\n: A ",Object(r.b)("em",{parentName:"p"},"paused")," migration has been instructed to pause transfer, and is not transferring content or making other changes to the target."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ABORTED"),"\n: An ",Object(r.b)("em",{parentName:"p"},"aborted")," migration will not make any changes to the target and cannot be run again."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"COMPLETED"),"\n: A ",Object(r.b)("em",{parentName:"p"},"completed")," migration has scanned through all source content and finished transferring all applicable data to the target filesystem, and has ignored any updates to the source data."))}s.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return g}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=m(e,["components","mdxType","originalType","parentName"]),l=s(n),p=a,g=l["".concat(o,".").concat(p)]||l[p]||d[p]||r;return n?i.a.createElement(g,c(c({ref:t},b),{},{components:n})):i.a.createElement(g,c({ref:t},b))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);