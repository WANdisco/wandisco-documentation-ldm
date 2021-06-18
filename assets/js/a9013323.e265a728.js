(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=(a(0),a(237));const i={id:"migrate-metadata",title:"Create a metadata migration",sidebar_label:"Create a metadata migration"},o={unversionedId:"migrate-metadata",id:"version-1.11.1/migrate-metadata",isDocsHomePage:!1,title:"Create a metadata migration",description:"Migrations will transfer existing metadata, as well as any subsequent changes made to the source metadata (in its scope), while HiveMigrator keeps working.",source:"@site/versioned_docs/version-1.11.1/migrate-metadata.md",slug:"/migrate-metadata",permalink:"/wandisco-documentation-ldm/docs/1.11.1/migrate-metadata",version:"1.11.1",sidebar_label:"Create a metadata migration",sidebar:"version-1.11.1/someSidebar",previous:{title:"Define metadata rules",permalink:"/wandisco-documentation-ldm/docs/1.11.1/define-metadata-rules"},next:{title:"Manage metadata migrations",permalink:"/wandisco-documentation-ldm/docs/1.11.1/manage-metadata-migrations"}},c=[{value:"Create a metadata migration with the UI",id:"create-a-metadata-migration-with-the-ui",children:[]},{value:"Create a metadata migration with the CLI",id:"create-a-metadata-migration-with-the-cli",children:[]}],m={toc:c};function d({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},m,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Migrations will transfer existing metadata, as well as any subsequent changes made to the source metadata (in its scope), while HiveMigrator keeps working."),Object(r.b)("h2",{id:"create-a-metadata-migration-with-the-ui"},"Create a metadata migration with the UI"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Ensure that you have ",Object(r.b)("a",{parentName:"p",href:"#migrate-data"},"migrated")," the HCFS data for the databases and tables that you want to migrate."),Object(r.b)("p",{parentName:"div"},"Both HCFS data and associated metadata are needed before successful queries can be run on migrated databases."))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the dashboard, select to add a Hive migration.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Provide a name for this migration.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose a ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/connect-metastores#add-source-agent"},"source")," and ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/connect-metastores#add-target-agents"},"target")," agent.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a database pattern and a table pattern based upon ",Object(r.b)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-Show"},"Hive DDL")," that will match the databases and tables you want to migrate."),Object(r.b)("p",{parentName:"li"},"For example, using ",Object(r.b)("inlineCode",{parentName:"p"},"test*"),' for the database pattern will match any database with "test" at the beginning of its name, such as ',Object(r.b)("inlineCode",{parentName:"p"},"test01"),", ",Object(r.b)("inlineCode",{parentName:"p"},"test02"),", ",Object(r.b)("inlineCode",{parentName:"p"},"test03"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Create")," to start the metadata migration with the parameters provided."))),Object(r.b)("h2",{id:"create-a-metadata-migration-with-the-cli"},"Create a metadata migration with the CLI"),Object(r.b)("p",null,"Migrate metadata from your source metastore to a target metastore using the ",Object(r.b)("inlineCode",{parentName:"p"},"hive migration")," command."),Object(r.b)("p",null,"Define the source and target using the ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/connect-metastores#add-hive-agents"},"hive agent names"),", and apply the ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/define-metadata-rules#add-hive-rules"},"hive rule names")," to the migration."),Object(r.b)("p",null,"Follow the command links to learn how to set the parameters and see examples."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a new hive migration:"),Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#hive-migration-add"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration add"))),Object(r.b)("p",{parentName:"li"},"Apply the ",Object(r.b)("inlineCode",{parentName:"p"},"--auto-start")," parameter if you would like the migration to start right away.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If you don't have auto-start enabled, manually start the migration:"),Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#hive-migration-start"},Object(r.b)("inlineCode",{parentName:"a"},"hive migration start"))))))}d.isMDXComponent=!0},237:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),l=s(a),b=n,u=l["".concat(o,".").concat(b)]||l[b]||p[b]||i;return a?r.a.createElement(u,c(c({ref:t},d),{},{components:a})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);