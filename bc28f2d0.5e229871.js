(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(162)),o={id:"configuration-metadata",title:"Configuring your environment for metadata migrations",sidebar_label:"Metadata migrations"},c={unversionedId:"configuration-metadata",id:"configuration-metadata",isDocsHomePage:!1,title:"Configuring your environment for metadata migrations",description:"We recommend that you make the following configuration changes to your environment to prepare for metadata migrations.",source:"@site/docs/configuration-metadata.md",slug:"/configuration-metadata",permalink:"/wandisco-documentation-ldm/docs/configuration-metadata",version:"current",sidebar_label:"Metadata migrations",sidebar:"someSidebar",previous:{title:"Configuring Data Migrations",permalink:"/wandisco-documentation-ldm/docs/configuration-data-migrations"},next:{title:"Configuring System Users",permalink:"/wandisco-documentation-ldm/docs/configure-system-users"}},s=[{value:"Enable Hive metastore event listener",id:"enable-hive-metastore-event-listener",children:[]}],l={toc:s};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We recommend that you make the following configuration changes to your environment to prepare for metadata migrations."),Object(i.b)("h2",{id:"enable-hive-metastore-event-listener"},"Enable Hive metastore event listener"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This recommendation is currently supported on HDP platforms only."))),Object(i.b)("p",null,"When deploying a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-hive"}),"hive agent for Apache Hive"),", it is recommended to enable the standard ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://hive.apache.org/javadocs/r2.3.7/api/org/apache/hive/hcatalog/listener/DbNotificationListener.html"}),Object(i.b)("inlineCode",{parentName:"a"},"DBNotificationListener"))," listener for the Hive metastore. This allows a publisher-subscriber mechanism and dramatically reduces the load on the metastore after the initial scan of the metastore is complete."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To enable it, add the following properties and values to the Apache Hive metastore's ",Object(i.b)("inlineCode",{parentName:"p"},"hive-site.xml"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"<property>\n  <name>hive.metastore.event.listeners</name>\n  <value>org.apache.hive.hcatalog.listener.DbNotificationListener</value>\n</property>\n<property>\n  <name>hive.metastore.event.db.listener.timetolive</name>\n  <value>86400s</value>\n</property>\n")),Object(i.b)("p",{parentName:"li"},"A restart of the Hive metastore services is required for the changes to take effect.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"LiveData Migrator will rescan its configuration at the start of a migration, and auto-detects the presence of the ",Object(i.b)("inlineCode",{parentName:"p"},"DbNotificationListener"),"."),Object(i.b)("p",{parentName:"li"},"As such, all running metadata migrations should be stopped and started."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Stop all metadata migrations through the CLI"',title:'"Stop',all:!0,metadata:!0,migrations:!0,through:!0,the:!0,'CLI"':!0}),"hive migration stop all\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Start all metadata migrations through the CLI"',title:'"Start',all:!0,metadata:!0,migrations:!0,through:!0,the:!0,'CLI"':!0}),"hive migration start all\n")),Object(i.b)("p",{parentName:"li"},"Any new migrations will auto-detect the presence of the listener straight away.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Confirm that migrations are now using the listener by checking the status of a hive migration:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example status command"',title:'"Example',status:!0,'command"':!0}),"hive migration status --name hivemigration1\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example output"',title:'"Example','output"':!0}),'{\n  "migrationName": "hivemigration1",\n  "migratedRules": [\n    {\n      "name": "test",\n      "dbNamePattern": "test*",\n      "tableNamePattern": "test*"\n    }\n  ],\n  "discoveredItems": 2752,\n  "migratedItems": 50,\n  "state": "RUNNING",\n  "upToDate": true,\n  "description": "Listening to events..."\n}\n')),Object(i.b)("p",{parentName:"li"},"The description should state ",Object(i.b)("inlineCode",{parentName:"p"},'"Listening to events..."'),"."))))}m.isMDXComponent=!0},162:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(a),d=n,u=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return a?r.a.createElement(u,c(c({ref:t},l),{},{components:a})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);