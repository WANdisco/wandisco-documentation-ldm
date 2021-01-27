(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(126)),o={id:"jar",title:"Using the LiveData Migrator jar",sidebar_label:"LiveData Migrator Jar"},c={unversionedId:"jar",id:"jar",isDocsHomePage:!1,title:"Using the LiveData Migrator jar",description:"If you want to try out LiveData Migrator using a quick method, use the livedata-migrator.jar. This is an alternative to using the system service and it does not require configuration.",source:"@site/docs/jar.md",slug:"/jar",permalink:"/wandisco-documentation-ldm/docs/jar",version:"current",sidebar_label:"LiveData Migrator Jar",sidebar:"someSidebar",previous:{title:"API Reference",permalink:"/wandisco-documentation-ldm/docs/api-reference"},next:{title:"Troubleshooting",permalink:"/wandisco-documentation-ldm/docs/troubleshooting"}},s=[],l={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you want to try out LiveData Migrator using a quick method, use the ",Object(i.b)("inlineCode",{parentName:"p"},"livedata-migrator.jar"),". This is an alternative to using the system service and it does not require configuration."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Use the system service instead for Production deployment as it allows you to maintain long-lived migrations, have a common configuration that survives service restarts, and retain logging information in a central directory."))),Object(i.b)("p",null,"On the LiveData Migrator host, follow the steps below to run the jar:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Switch to the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User"}),"HDFS superuser"),".",Object(i.b)("br",{parentName:"li"}),Object(i.b)("em",{parentName:"li"},"Example"),Object(i.b)("br",{parentName:"li"}),Object(i.b)("inlineCode",{parentName:"li"},"su - hdfs")),Object(i.b)("li",{parentName:"ol"},"Change to the directory where the jar is located:",Object(i.b)("br",{parentName:"li"}),Object(i.b)("inlineCode",{parentName:"li"},"cd /opt/wandisco/livedata-migrator")),Object(i.b)("li",{parentName:"ol"},"Run the jar file to access the action prompt.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If Kerberos is disabled in your environment, run:",Object(i.b)("br",{parentName:"li"}),Object(i.b)("inlineCode",{parentName:"li"},"java -jar livedata-migrator.jar")),Object(i.b)("li",{parentName:"ul"},"If Kerberos is enabled in your environment, you must obtain a ticket before running the jar.",Object(i.b)("br",{parentName:"li"}),Object(i.b)("em",{parentName:"li"},"Example"),Object(i.b)("br",{parentName:"li"}),Object(i.b)("inlineCode",{parentName:"li"},"kinit -kt /etc/security/keytabs/hdfs.keytab hdfs@REALM.COM"),"  ")))))}b.isMDXComponent=!0},126:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(r),m=n,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);