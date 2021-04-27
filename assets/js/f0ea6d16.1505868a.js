(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),r=(a(0),a(203)),o={id:"create-migration",title:"Create a migration",sidebar_label:"Create a migration"},c={unversionedId:"create-migration",id:"version-1.11.0/create-migration",isDocsHomePage:!1,title:"Create a migration",description:"Create new migrations with LiveData Migrator using either the UI or CLI.",source:"@site/versioned_docs/version-1.11.0/create-migration.md",slug:"/create-migration",permalink:"/wandisco-documentation-ldm/docs/1.11.0/create-migration",version:"1.11.0",sidebar_label:"Create a migration",sidebar:"version-1.11.0/someSidebar",previous:{title:"Create path mappings",permalink:"/wandisco-documentation-ldm/docs/1.11.0/create-path-mappings"},next:{title:"Create a one-time migration",permalink:"/wandisco-documentation-ldm/docs/1.11.0/one-time-migration"}},s=[{value:"Create a new migration with the UI",id:"create-a-new-migration-with-the-ui",children:[{value:"Assign exclusions to a new migration",id:"assign-exclusions-to-a-new-migration",children:[]}]},{value:"Create a new migration with the CLI",id:"create-a-new-migration-with-the-cli",children:[]},{value:"Create a one-time migration",id:"create-a-one-time-migration",children:[]}],l={toc:s};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Create new migrations with LiveData Migrator using either the ",Object(r.b)("a",{parentName:"p",href:"#create-a-new-migration-with-the-ui"},"UI")," or ",Object(r.b)("a",{parentName:"p",href:"#create-a-new-migration-with-the-cli"},"CLI"),"."),Object(r.b)("p",null,"Migrations transfer existing data from the defined source to a target. LiveData Migrator migrates any changes made to the source data while it is being migrated and ensures that the target is up to date with those changes. It does this while continuing to perform the migration."),Object(r.b)("p",null,"You will typically create multiple migrations so that you can select specific content from your source storage by Path. You can also migrate to multiple independent storages at the same time by defining multiple migration resources."),Object(r.b)("h2",{id:"create-a-new-migration-with-the-ui"},"Create a new migration with the UI"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose a source and target from one of your ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.0/configure-storage"},"storages"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose the Path to set the scope of the migration."),Object(r.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"ADLS Gen2 has a filesystem restriction of 60 segments. If you are migrating to an ADLS Gen2 storage, your path must have less than 60 segments.")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Enable the ",Object(r.b)("strong",{parentName:"p"},"Auto-start migration")," option if you want to start the migration right away. (You can start it manually when ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.0/manage-migrations#manage-migrations-with-the-ui"},"viewing it later")," if you prefer.)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"#assign-exclusions-to-a-new-migration"},"Apply any exclusions")," to reduce the scope within this Path.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select the ",Object(r.b)("strong",{parentName:"p"},"Overwrite")," or ",Object(r.b)("strong",{parentName:"p"},"Skip if Size Match")," setting for the migration.  "),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Skip if Size Match")," - If the file size is identical between the source and target, the file is skipped. If it\u2019s a different size, the whole file is replaced."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Overwrite")," - Everything is replaced, even if the file size is identical.")))),Object(r.b)("p",null,"If you've already migrated some data from the same source to the same target, you can choose whether to overwrite all the content (Overwrite) or only migrate new content that isn't already there (Skip if Size Match)."),Object(r.b)("h3",{id:"assign-exclusions-to-a-new-migration"},"Assign exclusions to a new migration"),Object(r.b)("p",null,"Assign exclusions to your migration to exclude specific file sizes or file names from the migration. If you want to exclude file sizes or names from your migration but haven't defined any exclusion templates yet, see the ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.0/configure-exclusions"},"define exclusions")," topic to learn how."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In the new migration page, click ",Object(r.b)("strong",{parentName:"li"},"Add new exclusion")),Object(r.b)("li",{parentName:"ol"},"Select the appropriate exclusion template from the drop-down list.")),Object(r.b)("p",null,"The exclusion appears in the list, and can be removed before the migration is started."),Object(r.b)("h2",{id:"create-a-new-migration-with-the-cli"},"Create a new migration with the CLI"),Object(r.b)("p",null,"Migrate data from your source file system to a target defined using the ",Object(r.b)("inlineCode",{parentName:"p"},"migration")," command. Migrations will transfer existing data, as well as any subsequent changes made to the source data (in its scope), while LiveData Migrator remains in operation."),Object(r.b)("p",null,"You will typically create multiple migrations so that you can select specific content from your source file system by path/directory. It is also possible to migrate to multiple independent file systems at the same time by defining multiple migration resources."),Object(r.b)("p",null,"Follow the command links to learn how to set the parameters and see examples."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a new migration:"),Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.0/command-reference#migration-add"},Object(r.b)("inlineCode",{parentName:"a"},"migration add"))),Object(r.b)("p",{parentName:"li"},"Apply the ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.0/command-reference#optional-parameters-5"},Object(r.b)("inlineCode",{parentName:"a"},"--auto-start"))," parameter if you would like the migration to start right away.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Assign exclusions to the migration:"),Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.0/command-reference#migration-exclusion-add"},Object(r.b)("inlineCode",{parentName:"a"},"migration exclusion add")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If you don't have auto-start enabled, manually start the migration:"),Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.0/command-reference#migration-run"},Object(r.b)("inlineCode",{parentName:"a"},"migration run"))))),Object(r.b)("h2",{id:"create-a-one-time-migration"},"Create a one-time migration"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.0/one-time-migration"},"Create a one-time migration")," if you do not want LiveData Migrator to scan for changes to your data during a migration. These migrations do not require you to have write access to the source filesystem, or operate the migration as the ",Object(r.b)("inlineCode",{parentName:"p"},"hdfs")," user."))}m.isMDXComponent=!0},203:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),m=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=m(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(a),d=n,u=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return a?i.a.createElement(u,c(c({ref:t},l),{},{components:a})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);