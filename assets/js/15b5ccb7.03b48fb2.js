(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{237:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return g}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),d=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},l=function(e){var t=d(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=d(a),p=n,g=l["".concat(o,".").concat(p)]||l[p]||s[p]||r;return a?i.a.createElement(g,m(m({ref:t},b),{},{components:a})):i.a.createElement(g,m({ref:t},b))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m.mdxType="string"==typeof e?e:n,o[1]=m;for(var b=2;b<r;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return m})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(237)),o={id:"manage-metadata-migrations",title:"Manage metadata migrations",sidebar_label:"Manage metadata migrations"},m={unversionedId:"manage-metadata-migrations",id:"version-1.12.0/manage-metadata-migrations",isDocsHomePage:!1,title:"Manage metadata migrations",description:"Manage your metadata migrations with LiveData Migrator using either the UI or CLI.",source:"@site/versioned_docs/version-1.12.0/manage-metadata-migrations.md",slug:"/manage-metadata-migrations",permalink:"/wandisco-documentation-ldm/docs/1.12.0/manage-metadata-migrations",version:"1.12.0",sidebar_label:"Manage metadata migrations",sidebar:"version-1.12.0/someSidebar",previous:{title:"Create a metadata migration",permalink:"/wandisco-documentation-ldm/docs/1.12.0/migrate-metadata"},next:{title:"View Metadata",permalink:"/wandisco-documentation-ldm/docs/1.12.0/view-metadata"}},c=[{value:"Manage metadata migrations with the UI",id:"manage-metadata-migrations-with-the-ui",children:[{value:"Pause a Hive migration",id:"pause-a-hive-migration",children:[]},{value:"Resume a Hive migration",id:"resume-a-hive-migration",children:[]},{value:"Stop a Hive migration",id:"stop-a-hive-migration",children:[]},{value:"Delete a Hive migration",id:"delete-a-hive-migration",children:[]}]},{value:"Manage metadata migrations with the CLI",id:"manage-metadata-migrations-with-the-cli",children:[]}],b={toc:c};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Manage your metadata migrations with LiveData Migrator using either the ",Object(r.b)("a",{parentName:"p",href:"#manage-metadata-migrations-with-the-ui"},"UI")," or ",Object(r.b)("a",{parentName:"p",href:"#manage-metadata-migrations-with-the-cli"},"CLI"),"."),Object(r.b)("h2",{id:"manage-metadata-migrations-with-the-ui"},"Manage metadata migrations with the UI"),Object(r.b)("p",null,"The dashboard displays an overview of Hive migrations and their status, showing what pre-existing metadata has been moved and added since the migration started."),Object(r.b)("p",null,"Click ",Object(r.b)("strong",{parentName:"p"},"View migration")," to see more detail."),Object(r.b)("h3",{id:"pause-a-hive-migration"},"Pause a Hive migration"),Object(r.b)("p",null,"When you start a Hive migration, the ",Object(r.b)("strong",{parentName:"p"},"Pause")," button will be become available. Click it to pause the migration and suspend all current file transfer."),Object(r.b)("p",null,"Paused migrations can be ",Object(r.b)("a",{parentName:"p",href:"#resume-a-hive-migration"},"resumed")," at any time."),Object(r.b)("h3",{id:"resume-a-hive-migration"},"Resume a Hive migration"),Object(r.b)("p",null,"When you pause a migration, the ",Object(r.b)("strong",{parentName:"p"},"Pause")," button will be replaced with a ",Object(r.b)("strong",{parentName:"p"},"Resume")," button. Click it to resume the migration, which will continue from where it left off."),Object(r.b)("h3",{id:"stop-a-hive-migration"},"Stop a Hive migration"),Object(r.b)("p",null,"When you start a Hive migration, the ",Object(r.b)("strong",{parentName:"p"},"Start")," button will be replaced with a ",Object(r.b)("strong",{parentName:"p"},"Stop")," button. Click it to stop the migration and suspend all current file transfer indefinitely."),Object(r.b)("p",null,"A stopped Hive migration cannot be resumed."),Object(r.b)("h3",{id:"delete-a-hive-migration"},"Delete a Hive migration"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Hive migrations must be ",Object(r.b)("a",{parentName:"p",href:"#stop-a-hive-migration"},"stopped")," before they can be deleted."))),Object(r.b)("p",null,"When viewing a Hive migration, click on the ",Object(r.b)("strong",{parentName:"p"},"Settings")," panel. Select the option to ",Object(r.b)("strong",{parentName:"p"},"Delete")," the Hive migration."),Object(r.b)("h2",{id:"manage-metadata-migrations-with-the-cli"},"Manage metadata migrations with the CLI"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Command"),Object(r.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.12.0/command-reference#hive-migration-delete"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration delete"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Delete a hive migration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.12.0/command-reference#hive-migration-list"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration list"))),Object(r.b)("td",{parentName:"tr",align:"left"},"List all hive migrations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.12.0/command-reference#hive-migration-pause"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration pause"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Pause a hive migration or a list of hive migrations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.12.0/command-reference#hive-migration-pause-all"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration pause all"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Pause all hive migrations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.12.0/command-reference#hive-migration-resume"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration resume"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Resume a hive migration or a list of hive migrations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.12.0/command-reference#hive-migration-resume-all"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration resume all"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Resume all hive migrations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.12.0/command-reference#hive-migration-show"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration show"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Display information about a hive migration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.12.0/command-reference#hive-migration-start"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration start"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Start a hive migration or a list of hive migrations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.12.0/command-reference#hive-migration-start-all"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration start all"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Start all hive migrations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.12.0/command-reference#hive-migration-status"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration status"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Show the status of a hive migration or a list of hive migrations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.12.0/command-reference#hive-migration-status-all"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration status all"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Show the status of all hive migrations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.12.0/command-reference#hive-migration-stop"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration stop"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Stop a hive migration or a list of hive migrations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.12.0/command-reference#hive-migration-stop-all"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration stop all"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Stop all hive migrations")))))}d.isMDXComponent=!0}}]);