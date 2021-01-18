(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),m=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,g=u["".concat(o,".").concat(d)]||u[d]||p[d]||r;return a?i.a.createElement(g,c(c({ref:t},s),{},{components:a})):i.a.createElement(g,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),r=(a(0),a(112)),o={id:"create-migration",title:"Create a migration",sidebar_label:"Create a migration"},c={unversionedId:"create-migration",id:"create-migration",isDocsHomePage:!1,title:"Create a migration",description:"Create new migrations with LiveData Migrator using either the UI or CLI.",source:"@site/docs/create-migration.md",slug:"/create-migration",permalink:"/wandisco-documentation-ldm/docs/create-migration",version:"current",sidebar_label:"Create a migration",sidebar:"someSidebar",previous:{title:"Configure storage",permalink:"/wandisco-documentation-ldm/docs/configure-storage"},next:{title:"Configure exclusions",permalink:"/wandisco-documentation-ldm/docs/configure-exclusions"}},l=[{value:"Create a new migration with the UI",id:"create-a-new-migration-with-the-ui",children:[{value:"Assign exclusions to a new migration",id:"assign-exclusions-to-a-new-migration",children:[]}]},{value:"Create a new migration with the CLI",id:"create-a-new-migration-with-the-cli",children:[]}],s={toc:l};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"Create new migrations with LiveData Migrator using either the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#create-a-new-migration-with-the-ui"}),"UI")," or ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#create-a-new-migration-with-the-cli"}),"CLI"),"."),Object(r.a)("p",null,"Migrations transfer existing data from the defined source to a target. LiveData Migrator migrates any changes made to the source data while it is being migrated and ensures that the target is up to date with those changes. It does this while continuing to perform the migration."),Object(r.a)("p",null,"You will typically create multiple migrations so that you can select specific content from your source storage by Path. You can also migrate to multiple independent storages at the same time by defining multiple migration resources."),Object(r.a)("h2",{id:"create-a-new-migration-with-the-ui"},"Create a new migration with the UI"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Choose a source and target from one of your ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation-ldm/docs/configure-storage"}),"storages"),"."),Object(r.a)("li",{parentName:"ol"},"Choose the Path to set the scope of the migration."),Object(r.a)("li",{parentName:"ol"},"Enable the ",Object(r.a)("strong",{parentName:"li"},"Auto-start migration")," option if you want to start the migration right away. (You can start it manually when ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation-ldm/docs/manage-migrations#manage-migrations-with-the-ui"}),"viewing it later")," if you prefer.)"),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#assign-exclusions-to-a-new-migration"}),"Apply any exclusions")," to reduce the scope within this Path."),Object(r.a)("li",{parentName:"ol"},"Select the ",Object(r.a)("strong",{parentName:"li"},"Overwrite")," or ",Object(r.a)("strong",{parentName:"li"},"Skip if Size Match")," setting for the migration.  ",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"Skip if Size Match")," - If the file size is identical between the source and target, the file is skipped. If it\u2019s a different size, the whole file is replaced."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"Overwrite")," - Everything is replaced, even if the file size is identical.")))),Object(r.a)("p",null,"If you've already migrated some data from the same source to the same target, you can choose whether to overwrite all the content (Overwrite) or only migrate new content that isn't already there (Skip if Size Match)."),Object(r.a)("h3",{id:"assign-exclusions-to-a-new-migration"},"Assign exclusions to a new migration"),Object(r.a)("p",null,"Assign exclusions to your migration to exclude specific file sizes or file names from the migration. If you want to exclude file sizes or names from your migration but haven't defined any exclusion templates yet, see the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/configure-exclusions"}),"define exclusions")," topic to learn how."),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"In the new migration page, click ",Object(r.a)("strong",{parentName:"li"},"Add new exclusion")),Object(r.a)("li",{parentName:"ol"},"Select the appropriate exclusion template from the drop-down list.")),Object(r.a)("p",null,"The exclusion appears in the list, and can be removed before the migration is started."),Object(r.a)("h2",{id:"create-a-new-migration-with-the-cli"},"Create a new migration with the CLI"),Object(r.a)("p",null,"Migrate data from your source file system to a target defined using the ",Object(r.a)("inlineCode",{parentName:"p"},"migration")," command. Migrations will transfer existing data, as well as any subsequent changes made to the source data (in its scope), while LiveData Migrator remains in operation."),Object(r.a)("p",null,"You will typically create multiple migrations so that you can select specific content from your source file system by path/directory. It is also possible to migrate to multiple independent file systems at the same time by defining multiple migration resources."),Object(r.a)("p",null,"Follow the command links to learn how to set the parameters and see examples."),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Create a new migration:"),Object(r.a)("p",{parentName:"li"},Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-add"}),Object(r.a)("inlineCode",{parentName:"a"},"migration add"))),Object(r.a)("p",{parentName:"li"},"Apply the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference#optional-parameters-5"}),Object(r.a)("inlineCode",{parentName:"a"},"--auto-start"))," parameter if you would like the migration to start right away.")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Assign exclusions to the migration:"),Object(r.a)("p",{parentName:"li"},Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-exclusion-add"}),Object(r.a)("inlineCode",{parentName:"a"},"migration exclusion add")))),Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"If you don't have auto-start enabled, manually start the migration:"),Object(r.a)("p",{parentName:"li"},Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-run"}),Object(r.a)("inlineCode",{parentName:"a"},"migration run"))))))}m.isMDXComponent=!0}}]);