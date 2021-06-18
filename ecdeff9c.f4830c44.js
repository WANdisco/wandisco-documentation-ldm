(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{219:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(235)),c={id:"define-metadata-rules",title:"Define metadata rules",sidebar_label:"Define metadata rules"},d={unversionedId:"define-metadata-rules",id:"version-1.11.1/define-metadata-rules",isDocsHomePage:!1,title:"Define metadata rules",description:"Once you have connected your metastores, define the metadata rules that determine the metadata you want to migrate.",source:"@site/versioned_docs/version-1.11.1/define-metadata-rules.md",slug:"/define-metadata-rules",permalink:"/wandisco-documentation-ldm/docs/1.11.1/define-metadata-rules",version:"1.11.1",sidebar_label:"Define metadata rules",sidebar:"version-1.11.1/someSidebar",previous:{title:"Connect metastores for metadata migrations",permalink:"/wandisco-documentation-ldm/docs/1.11.1/connect-metastores"},next:{title:"Create a metadata migration",permalink:"/wandisco-documentation-ldm/docs/1.11.1/migrate-metadata"}},o=[{value:"Define metadata rules with the UI",id:"define-metadata-rules-with-the-ui",children:[]},{value:"Define metadata rules with the CLI",id:"define-metadata-rules-with-the-cli",children:[{value:"Add hive rules",id:"add-hive-rules",children:[]},{value:"Configure existing hive rules",id:"configure-existing-hive-rules",children:[]},{value:"Manage hive rules",id:"manage-hive-rules",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],b={toc:o};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Once you have ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.11.1/connect-metastores"}),"connected your metastores"),", define the metadata rules that determine the metadata you want to migrate."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Ensure that you have ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.11.1/create-migration"}),"migrated")," the HCFS data for the databases and tables that you want to migrate."),Object(i.b)("p",{parentName:"div"},"Both HCFS data and associated metadata are needed before successful queries can be run on migrated databases."))),Object(i.b)("h2",{id:"define-metadata-rules-with-the-ui"},"Define metadata rules with the UI"),Object(i.b)("p",null,"In the UI, metadata rules are defined when ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.11.1/migrate-metadata#create-a-metadata-migration-with-the-ui"}),"creating a metadata migration"),"."),Object(i.b)("h2",{id:"define-metadata-rules-with-the-cli"},"Define metadata rules with the CLI"),Object(i.b)("h3",{id:"add-hive-rules"},"Add hive rules"),Object(i.b)("p",null,"Define which databases and tables you want to migrate by creating hive rules."),Object(i.b)("p",null,"Create a database pattern and a table pattern based upon ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-Show"}),"Hive DDL")," that will match the databases and tables you want to migrate. For example, using ",Object(i.b)("inlineCode",{parentName:"p"},"--database-pattern test*"),' will match any database with "test" at the beginning of its name, such as ',Object(i.b)("inlineCode",{parentName:"p"},"test01"),", ",Object(i.b)("inlineCode",{parentName:"p"},"test02"),", ",Object(i.b)("inlineCode",{parentName:"p"},"test03"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#hive-rule-addhive-rule-create"}),Object(i.b)("inlineCode",{parentName:"a"},"hive rule add"),",",Object(i.b)("inlineCode",{parentName:"a"},"hive rule create"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create a hive rule that can be used for a migration")))),Object(i.b)("h4",{id:"default-metadata-rule"},"Default metadata rule"),Object(i.b)("p",null,"A default hive rule is created during installation named ",Object(i.b)("inlineCode",{parentName:"p"},"DEFAULT"),'. This has a simple "include all" pattern for databases and for tables:'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'hive rule show --name DEFAULT\n\n{\n  "name": "DEFAULT",\n  "dbNamePattern": "*",\n  "tableNamePattern": "*"\n}\n')),Object(i.b)("p",null,"When ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.11.1/migrate-metadata"}),"creating a metadata migration"),", use the default rule to migrate all of your metastore content or define and use new rules to migrate a selection of databases and tables."),Object(i.b)("h3",{id:"configure-existing-hive-rules"},"Configure existing hive rules"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#hive-rule-configure"}),Object(i.b)("inlineCode",{parentName:"a"},"hive rule configure"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Configure an existing hive rule")))),Object(i.b)("h3",{id:"manage-hive-rules"},"Manage hive rules"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#hive-rule-delete"}),Object(i.b)("inlineCode",{parentName:"a"},"hive rule delete"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete a hive rule")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#hive-rule-list"}),Object(i.b)("inlineCode",{parentName:"a"},"hive rule list"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List all hive rules")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#hive-rule-show"}),Object(i.b)("inlineCode",{parentName:"a"},"hive rule show"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show the configuration of a hive rule")))),Object(i.b)("h2",{id:"next-steps"},"Next steps"),Object(i.b)("p",null,"Once you have defined the metadata rules, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.11.1/migrate-metadata"}),"create a metadata migration"),"."))}l.isMDXComponent=!0},235:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,p=m["".concat(c,".").concat(u)]||m[u]||s[u]||i;return a?r.a.createElement(p,d(d({ref:t},b),{},{components:a})):r.a.createElement(p,d({ref:t},b))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:n,c[1]=d;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);