(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),a=(n(0),n(203)),o={id:"ldm-metrics",title:"Viewing Metrics",sidebar_label:"Viewing metrics"},s={unversionedId:"ldm-metrics",id:"ldm-metrics",isDocsHomePage:!1,title:"Viewing Metrics",description:"View detailed metrics about recent and ongoing LiveData Migrator events and activity through the UI or the CLI, such as changes to source data pending migration, bandwidth usage, data migration statistics and more.",source:"@site/docs/ldm-metrics.md",slug:"/ldm-metrics",permalink:"/wandisco-documentation-ldm/docs/ldm-metrics",version:"current",sidebar_label:"Viewing metrics",sidebar:"someSidebar",previous:{title:"Configuring System Users",permalink:"/wandisco-documentation-ldm/docs/configure-system-users"},next:{title:"Command Reference",permalink:"/wandisco-documentation-ldm/docs/command-reference"}},c=[{value:"Viewing Metrics in the UI",id:"viewing-metrics-in-the-ui",children:[{value:"Bandwidth Usage",id:"bandwidth-usage",children:[]},{value:"Live Events",id:"live-events",children:[]},{value:"Data Migrated per day",id:"data-migrated-per-day",children:[]}]},{value:"Viewing Metrics in the CLI",id:"viewing-metrics-in-the-cli",children:[]}],d={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"View detailed metrics about recent and ongoing LiveData Migrator events and activity through the UI or the CLI, such as changes to source data pending migration, bandwidth usage, data migration statistics and more."),Object(a.b)("h2",{id:"viewing-metrics-in-the-ui"},"Viewing Metrics in the UI"),Object(a.b)("p",null,"Navigate to the Metrics tab beneath the Dashboard tab in the main menu to see a number of graphs tracking bandwidth usage, data migrated and live events."),Object(a.b)("h3",{id:"bandwidth-usage"},"Bandwidth Usage"),Object(a.b)("p",null,"This graph tracks the rate of data migration across the network within a time period specified through the dropdown menu."),Object(a.b)("h3",{id:"live-events"},"Live Events"),Object(a.b)("p",null,"This graph tracks the changes made to source data that have yet to be migrated to the migration target."),Object(a.b)("h3",{id:"data-migrated-per-day"},"Data Migrated per day"),Object(a.b)("p",null,"This graph charts the total amount of data migrated by LiveData Migrator each day across a time frame specified through the date dropdown menus."),Object(a.b)("h2",{id:"viewing-metrics-in-the-cli"},"Viewing Metrics in the CLI"),Object(a.b)("p",null,"Run the ",Object(a.b)("inlineCode",{parentName:"p"},"status")," command with the ",Object(a.b)("inlineCode",{parentName:"p"},"--diagnostics")," parameter to return detailed information about LiveData Migrator operations:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Status with --diagnostics"',title:'"Status',with:!0,'--diagnostics"':!0},'WANdisco LiveMigrator >> status --diagnostics\n\nUptime: 0 Days 1 Hours 23 Minutes 24 Seconds\nSystemCpuLoad: 0.1433 ProcessCpuLoad: 0.0081\nJVM GcCount: 192 GcPauseTime: 36 s (36328 ms)\nOS Connections: 1, Tx: 0 B, Rx: 0 B, Retransmit: 0\nTransfer Bytes (10/30/300s): 0.00 Gib/s, 0.00 Gib/s, 0.00 Gib/s\nTransfer Files (10/30/300s): 0.00/s 0.00/s 0.00/s\nActive Transfers/pull.threads: 0/100\nMigrations: 0 RUNNING, 4 LIVE, 0 STOPPED\nActions Total: 0, Largest: "testmigration" 0, Peak: "MyMigration" 1\nPendingRegions Total: 0 Avg: 0, Largest: "MyMigration" 0\nFailedPaths Total: 0, Largest: "MyMigration" 0\nFile Transfer Retries Total: 0, Largest: "MyMigration" 0\nTotal Excluded Scan files/dirs/bytes: 26, 0, 8.1 MB\nTotal Iterated Scan files/dirs/bytes: 20082, 9876, 2.7 GB\nEventsBehind Current/Avg/Max: 0/0/0, RPC Time Avg/Max: 4/8\nEventsQueued: 0, Total Events Added: 504\nTransferred File Size Percentiles:\n 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B\nTransferred File Transfer Rates Percentiles per Second:\n 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B, 2 B\nActive File Size Percentiles:\n 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B\nActive File Transfer Rates Percentiles per Second:\n 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B, 0 B\n')),Object(a.b)("p",null,"For more information on the ",Object(a.b)("inlineCode",{parentName:"p"},"status")," command, see ",Object(a.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/command-reference#status"},"Command Reference"),"."))}l.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,g=u["".concat(o,".").concat(p)]||u[p]||m[p]||a;return n?i.a.createElement(g,s(s({ref:t},d),{},{components:n})):i.a.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);