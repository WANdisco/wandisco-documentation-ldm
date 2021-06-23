(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(235)),i={id:"configuration-data-migrations",title:"Configuring Data Migrations",sidebar_label:"Data migrations"},c={unversionedId:"configuration-data-migrations",id:"version-1.11.1/configuration-data-migrations",isDocsHomePage:!1,title:"Configuring Data Migrations",description:"We recommend you make the following configuration changes to your HDFS cluster environment to prepare for data migrations.",source:"@site/versioned_docs/version-1.11.1/configuration-data-migrations.md",slug:"/configuration-data-migrations",permalink:"/wandisco-documentation-ldm/docs/1.11.1/configuration-data-migrations",version:"1.11.1",sidebar_label:"Data migrations",sidebar:"version-1.11.1/someSidebar",previous:{title:"Configuring the LiveData UI",permalink:"/wandisco-documentation-ldm/docs/1.11.1/configuration-ui"},next:{title:"Configuring your environment for metadata migrations",permalink:"/wandisco-documentation-ldm/docs/1.11.1/configuration-metadata"}},s=[{value:"DFS NameNode properties",id:"dfs-namenode-properties",children:[{value:"dfs.namenode.inotify.max.events.per.rpc",id:"dfsnamenodeinotifymaxeventsperrpc",children:[]},{value:"dfs.namenode.checkpoint.txns",id:"dfsnamenodecheckpointtxns",children:[]}]}],d={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We recommend you make the following configuration changes to your HDFS cluster environment to prepare for data migrations."),Object(a.b)("h2",{id:"dfs-namenode-properties"},"DFS NameNode properties"),Object(a.b)("p",null,"There are a number of properties adjustable on the HDFS NameNode that can be used to prevent data migrations from stalling due to an excess of notifications, or from operating too slowly."),Object(a.b)("p",null,"These can all be configured within ",Object(a.b)("inlineCode",{parentName:"p"},"hdfs-site.xml"),"."),Object(a.b)("h3",{id:"dfsnamenodeinotifymaxeventsperrpc"},"dfs.namenode.inotify.max.events.per.rpc"),Object(a.b)("p",null,"This value dictates the maximum number of events the NameNode can send to an inotify client in a single RPC response. By default, this is set to ",Object(a.b)("inlineCode",{parentName:"p"},"1000"),", which should consume no more than 1MB of memory."),Object(a.b)("p",null,"You may increase this value to allow for more events to occur simultaneously, at the cost of higher memory use and potentially lower performance, depending on the hardware your HDFS cluster is running on."),Object(a.b)("p",null,"We recommend setting this value to ",Object(a.b)("inlineCode",{parentName:"p"},"100,000")," for production use, provided your cluster is capable of providing at least 100MB of memory to the migration process at a given time."),Object(a.b)("h3",{id:"dfsnamenodecheckpointtxns"},"dfs.namenode.checkpoint.txns"),Object(a.b)("p",null,"This value determines how many namespace transactions will trigger a checkpoint to occur, updating the filesystem metadata."),Object(a.b)("p",null,"The default value for this is ",Object(a.b)("inlineCode",{parentName:"p"},"1,000,000"),", but we recommend increasing it to ",Object(a.b)("inlineCode",{parentName:"p"},"10,000,000")," for production use."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"After configuring HDFS properties, you must restart all cluster services that rely on HDFS configuration for their function (including the HDFS service) for the changes to apply."))))}l.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=o,f=u["".concat(i,".").concat(p)]||u[p]||m[p]||a;return n?r.a.createElement(f,c(c({ref:t},d),{},{components:n})):r.a.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);