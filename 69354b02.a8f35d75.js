(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(235)),o={id:"one-time-migration",title:"Create a one-time migration",sidebar_label:"Create a one-time migration"},c={unversionedId:"one-time-migration",id:"version-1.11.1/one-time-migration",isDocsHomePage:!1,title:"Create a one-time migration",description:"One-time migrations do not track activity in your data during a migration. If you create a one-time migration, LiveData Migrator will not scan your source storage for updates to the data as the migration progresses.",source:"@site/versioned_docs/version-1.11.1/one-time-migration.md",slug:"/one-time-migration",permalink:"/wandisco-documentation-ldm/docs/1.11.1/one-time-migration",version:"1.11.1",sidebar_label:"Create a one-time migration",sidebar:"version-1.11.1/someSidebar",previous:{title:"Create a migration",permalink:"/wandisco-documentation-ldm/docs/1.11.1/create-migration"},next:{title:"Configure exclusions",permalink:"/wandisco-documentation-ldm/docs/1.11.1/configure-exclusions"}},m=[{value:"Create a one-time migration with the UI",id:"create-a-one-time-migration-with-the-ui",children:[]},{value:"Create a one-time migration with the CLI",id:"create-a-one-time-migration-with-the-cli",children:[]}],s={toc:m};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"One-time migrations do not track activity in your data during a migration. If you create a one-time migration, LiveData Migrator will not scan your source storage for updates to the data as the migration progresses."),Object(i.b)("p",null,"A one-time migration does not write a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.11.1/configuration-ldm/#hdfs-marker-storage"}),"marker file")," to the source storage. Once the scan of the source filesystem completes (to determine which files and directories are to be migrated), the migration will enter a ",Object(i.b)("inlineCode",{parentName:"p"},"COMPLETED")," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.11.1/manage-migrations/#data-migration-states"}),"data migration state")," and won't perform any further scans."),Object(i.b)("p",null,"This means you can perform one-time migrations without write access, and without the need to operate the migration as the ",Object(i.b)("inlineCode",{parentName:"p"},"hdfs")," user."),Object(i.b)("h2",{id:"create-a-one-time-migration-with-the-ui"},"Create a one-time migration with the UI"),Object(i.b)("p",null,"To create a one-time migration with the CLI, deselect the ",Object(i.b)("strong",{parentName:"p"},"Live Migration")," option when creating a migration. Unlike a live migration, one-time migrations won't display a ",Object(i.b)("strong",{parentName:"p"},"live")," state in the UI. During a migration, the migration tells you that you must rerun it to see new changes."),Object(i.b)("h2",{id:"create-a-one-time-migration-with-the-cli"},"Create a one-time migration with the CLI"),Object(i.b)("p",null,"There are two ways to create a one-time migration through the CLI:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start a migration with a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.11.1/configure-storage#configure-static-storage"}),"source storage configured for one-time migrations"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Specify the ",Object(i.b)("inlineCode",{parentName:"p"},"scanOnly")," flag when you create the migration:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:'language-text="Code"'}),"  migration add --scanOnly ...\n")))))}l.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,g=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?a.a.createElement(g,c(c({ref:t},s),{},{components:n})):a.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);