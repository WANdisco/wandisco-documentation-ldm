(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{202:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),m=s(a),p=n,f=m["".concat(c,".").concat(p)]||m[p]||l[p]||o;return a?r.a.createElement(f,i(i({ref:t},d),{},{components:a})):r.a.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=p;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<o;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(202)),c={id:"view-metadata",title:"View Metadata",sidebar_label:"View metadata"},i={unversionedId:"view-metadata",id:"view-metadata",isDocsHomePage:!1,title:"View Metadata",description:"Use the LiveData Migrator CLI to view your metadata such as databases, tables and partitions. You can also view values for configuration properties of your metastore distribution.",source:"@site/docs/view-metadata.md",slug:"/view-metadata",permalink:"/wandisco-documentation-ldm/docs/view-metadata",version:"current",sidebar_label:"View metadata",sidebar:"someSidebar",previous:{title:"Manage metadata migrations",permalink:"/wandisco-documentation-ldm/docs/manage-metadata-migrations"},next:{title:"On-premises Hadoop to Azure HDInsights",permalink:"/wandisco-documentation-ldm/docs/uc-on-prem-hadoop-hdi"}},b=[],d={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use the LiveData Migrator CLI to view your metadata such as databases, tables and partitions. You can also view values for configuration properties of your metastore distribution."),Object(o.b)("p",null,"Define the agent name in each command to connect to the metastore that you want to query."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-show-conf"}),Object(o.b)("inlineCode",{parentName:"a"},"hive show conf"))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show the configured value of a particular property")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-show-database"}),Object(o.b)("inlineCode",{parentName:"a"},"hive show database"))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show details of a database")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-show-databases"}),Object(o.b)("inlineCode",{parentName:"a"},"hive show databases"))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show a list of databases")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-show-indexes"}),Object(o.b)("inlineCode",{parentName:"a"},"hive show indexes"))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show a list of indexes from a specific database/table")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-show-partitions"}),Object(o.b)("inlineCode",{parentName:"a"},"hive show partitions"))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show a list of partitions from a specific database/table")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-show-table"}),Object(o.b)("inlineCode",{parentName:"a"},"hive show table"))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show details of a table from a database")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-show-tables"}),Object(o.b)("inlineCode",{parentName:"a"},"hive show tables"))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show a list of tables from a database")))))}s.isMDXComponent=!0}}]);