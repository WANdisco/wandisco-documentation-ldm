(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{120:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(237)),p={id:"create-path-mappings",title:"Create path mappings",sidebar_label:"Create path mappings"},o={unversionedId:"create-path-mappings",id:"version-1.11.1/create-path-mappings",isDocsHomePage:!1,title:"Create path mappings",description:"Create path mappings when you want to define a alternative target path for a specific target filesystem.",source:"@site/versioned_docs/version-1.11.1/create-path-mappings.md",slug:"/create-path-mappings",permalink:"/wandisco-documentation-ldm/docs/1.11.1/create-path-mappings",version:"1.11.1",sidebar_label:"Create path mappings",sidebar:"version-1.11.1/someSidebar",previous:{title:"Configure storage",permalink:"/wandisco-documentation-ldm/docs/1.11.1/configure-storage"},next:{title:"Create a migration",permalink:"/wandisco-documentation-ldm/docs/1.11.1/create-migration"}},l=[{value:"Why use path mapping?",id:"why-use-path-mapping",children:[]},{value:"Create a path mapping with the UI",id:"create-a-path-mapping-with-the-ui",children:[{value:"Add a path mapping",id:"add-a-path-mapping",children:[]},{value:"Remove a path mapping",id:"remove-a-path-mapping",children:[]}]},{value:"Create a path mapping with the CLI",id:"create-a-path-mapping-with-the-cli",children:[{value:"Add path mappings",id:"add-path-mappings",children:[]},{value:"Manage path mappings",id:"manage-path-mappings",children:[]}]},{value:"Path mapping limitation",id:"path-mapping-limitation",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],c={toc:l};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Create path mappings when you want to define a alternative target path for a specific target filesystem."),Object(i.b)("h2",{id:"why-use-path-mapping"},"Why use path mapping?"),Object(i.b)("p",null,"When path mapping is not used, the source path on your source filesystem will be created on your target filesystem. This may not always be suitable for the purposes of your migration."),Object(i.b)("p",null,"The following example shows a common use-case where the default ",Object(i.b)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/Hive/Configuration+Properties#ConfigurationProperties-hive.metastore.warehouse.dir"},"Hive metastore warehouse directory")," for Hortonworks is ",Object(i.b)("inlineCode",{parentName:"p"},"/apps/hive/warehouse"),", and the default for Azure HDInsight is ",Object(i.b)("inlineCode",{parentName:"p"},"/hive/warehouse"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Example for Hortonworks to HDInsight"),Object(i.b)("th",{parentName:"tr",align:null},"Source path"),Object(i.b)("th",{parentName:"tr",align:null},"Target path"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Without path mapping"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/apps/hive/warehouse")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/apps/hive/warehouse"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"With path mapping"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/apps/hive/warehouse")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/hive/warehouse"))))),Object(i.b)("p",null,"Using path mapping enables any migrated data (relating to managed Hive databases and tables) to be stored in the equivalent default location on the target."),Object(i.b)("h2",{id:"create-a-path-mapping-with-the-ui"},"Create a path mapping with the UI"),Object(i.b)("p",null,"You can create path mappings through the UI. To access path mappings:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Clicking on the LiveData Migrator hostname under your "Products" list in the dashboard.'),Object(i.b)("li",{parentName:"ul"},'Under the "Configuration" menu, select "Path Mappings"')),Object(i.b)("p",null,"Here, you will see a list of your existing path mappings, if any."),Object(i.b)("h3",{id:"add-a-path-mapping"},"Add a path mapping"),Object(i.b)("p",null,'To add a path mapping, click the "Add New Path" button in the top right of the interface.'),Object(i.b)("p",null,"In the form that appears, provide the following details:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Name:")," A reference name for your path mapping."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Source Filesystem:")," The file system source. Selectable via a drop-down menu."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Path for <Source_Filesystem_Name>:")," The directory path on the source file system to map from. Appears only after selecting a source filesystem."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Target Filesystem:")," The target file system to map to in migrations. Selectable via a drop-down menu."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Path for <Target_Filesystem_Name>:")," The directory path on the target file system to map to. Appears only after selecting a target filesystem.")),Object(i.b)("p",null,'Click "Add" once you\'ve provided all necessary information to create your new path mapping. It will be listed in the path mappings tab.'),Object(i.b)("h3",{id:"remove-a-path-mapping"},"Remove a path mapping"),Object(i.b)("p",null,"To delete a path mapping, locate the path mapping you want to remove in the list and click the delete icon to the right of it, depicted by a trash can."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"When a path mapping is deleted, any migrations using the path mapping will not be affected. They will continue to function as if the path mapping were still in place."))),Object(i.b)("h2",{id:"create-a-path-mapping-with-the-cli"},"Create a path mapping with the CLI"),Object(i.b)("h3",{id:"add-path-mappings"},"Add path mappings"),Object(i.b)("p",null,"Use the ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#path-mapping-create"},Object(i.b)("inlineCode",{parentName:"a"},"path mapping create"))," command to define your source and target paths, as well as your target filesystem."),Object(i.b)("h3",{id:"manage-path-mappings"},"Manage path mappings"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Command"),Object(i.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#path-mapping-del"},Object(i.b)("inlineCode",{parentName:"a"},"path mapping del"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Delete a path mapping")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#path-mapping-list"},Object(i.b)("inlineCode",{parentName:"a"},"path mapping list"))),Object(i.b)("td",{parentName:"tr",align:"left"},"List all path mappings or list path mappings for a specific filesystem")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#path-mapping-show"},Object(i.b)("inlineCode",{parentName:"a"},"path mapping show"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Show details of a specified path mapping")))),Object(i.b)("h2",{id:"path-mapping-limitation"},"Path mapping limitation"),Object(i.b)("p",null,"Paths on the source filesystem will not be migrated if they conflict with target paths that are created by the path mapping rules."),Object(i.b)("p",null,"An example would be if you had a path mapping rule such as below:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Source path"),Object(i.b)("th",{parentName:"tr",align:null},"Target path"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/repl/folder/old")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/repl/folder/old/archive"))))),Object(i.b)("p",null,"In this case, if a new directory is created on the source ",Object(i.b)("inlineCode",{parentName:"p"},"/repl/folder/old/newdir"),", it is migrated to the target as ",Object(i.b)("inlineCode",{parentName:"p"},"/repl/folder/old/archive/newdir"),"."),Object(i.b)("p",null,"However, if the following directory is created on the source ",Object(i.b)("inlineCode",{parentName:"p"},"/repl/folder/old/archive"),", this would not be migrated as it conflicts with the path mapping rule."),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Once you have defined any path mappings and ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/configure-exclusions"},"exclusions"),", you're ready to ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/create-migration"},"migrate data"),"."))}m.isMDXComponent=!0},237:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=m(a),d=n,h=b["".concat(p,".").concat(d)]||b[d]||s[d]||i;return a?r.a.createElement(h,o(o({ref:t},c),{},{components:a})):r.a.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var c=2;c<i;c++)p[c]=a[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);