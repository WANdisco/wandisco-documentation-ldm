(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{116:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),m=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(a),u=n,p=s["".concat(c,".").concat(u)]||s[u]||b[u]||i;return a?r.a.createElement(p,l(l({ref:t},d),{},{components:a})):r.a.createElement(p,l({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var d=2;d<i;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(116)),c={id:"define-metadata-rules",title:"Define metadata rules (preview)",sidebar_label:"Define metadata rules"},l={unversionedId:"define-metadata-rules",id:"define-metadata-rules",isDocsHomePage:!1,title:"Define metadata rules (preview)",description:"Once you have connected your metastores, define the metadata rules that determine the metadata you want to migrate.",source:"@site/docs/define-metadata-rules.md",slug:"/define-metadata-rules",permalink:"/docs/define-metadata-rules",version:"current",sidebar_label:"Define metadata rules",sidebar:"someSidebar",previous:{title:"Connect metastores for metadata migrations (preview)",permalink:"/docs/connect-metastores"},next:{title:"Create a metadata migration (preview)",permalink:"/docs/migrate-metadata"}},o=[{value:"Add hive rules",id:"add-hive-rules",children:[{value:"Default metadata rule",id:"default-metadata-rule",children:[]}]},{value:"Configure existing hive rules",id:"configure-existing-hive-rules",children:[]},{value:"Manage hive rules",id:"manage-hive-rules",children:[]}],d={toc:o};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Once you have ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/connect-metastores"}),"connected your metastores"),", define the metadata rules that determine the metadata you want to migrate."),Object(i.a)("h2",{id:"add-hive-rules"},"Add hive rules"),Object(i.a)("div",{className:"admonition admonition-important alert alert--info"},Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"Ensure that you have ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#migrate-data"}),"migrated")," the HCFS data for the databases and tables that you want to migrate."),Object(i.a)("p",{parentName:"div"},"Both HCFS data and associated metadata are needed before successful queries can be run on migrated databases."))),Object(i.a)("p",null,"Define which databases and tables you want to migrate by creating hive rules."),Object(i.a)("p",null,"Create a database pattern and a table pattern using ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://regex101.com/"}),"regex")," that will match the databases and tables you want to migrate. For example, using ",Object(i.a)("inlineCode",{parentName:"p"},"--database-pattern test*"),' will match any database with "test" at the beginning of its name, such as ',Object(i.a)("inlineCode",{parentName:"p"},"test01"),", ",Object(i.a)("inlineCode",{parentName:"p"},"test02"),", ",Object(i.a)("inlineCode",{parentName:"p"},"test03"),"."),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/docs/command-reference#hive-rule-addhive-rule-create"}),Object(i.a)("inlineCode",{parentName:"a"},"hive rule add"),",",Object(i.a)("inlineCode",{parentName:"a"},"hive rule create"))),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create a hive rule that can be used for a migration")))),Object(i.a)("h3",{id:"default-metadata-rule"},"Default metadata rule"),Object(i.a)("p",null,"A default hive rule is created during installation named ",Object(i.a)("inlineCode",{parentName:"p"},"DEFAULT"),'. This has a simple "include all" pattern for databases and for tables:'),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'hive rule show --name DEFAULT\n\n{\n  "name": "DEFAULT",\n  "dbNamePattern": "*",\n  "tableNamePattern": "*"\n}\n')),Object(i.a)("p",null,"When ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/migrate-metadata"}),"creating a metadata migration"),", use the default rule to migrate all of your metastore content or define and use new rules to migrate a selection of databases and tables."),Object(i.a)("h2",{id:"configure-existing-hive-rules"},"Configure existing hive rules"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/docs/command-reference#hive-rule-configure"}),Object(i.a)("inlineCode",{parentName:"a"},"hive rule configure"))),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Configure an existing hive rule")))),Object(i.a)("h2",{id:"manage-hive-rules"},"Manage hive rules"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/docs/command-reference#hive-rule-delete"}),Object(i.a)("inlineCode",{parentName:"a"},"hive rule delete"))),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete a hive rule")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/docs/command-reference#hive-rule-list"}),Object(i.a)("inlineCode",{parentName:"a"},"hive rule list"))),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List all hive rules")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/docs/command-reference#hive-rule-show"}),Object(i.a)("inlineCode",{parentName:"a"},"hive rule show"))),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show the configuration of a hive rule")))))}m.isMDXComponent=!0}}]);