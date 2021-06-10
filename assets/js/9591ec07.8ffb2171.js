(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{156:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),i=(r(0),r(237)),o={id:"preview-features",title:"Enable Preview Features",sidebar_label:"Enable preview features"},c={unversionedId:"preview-features",id:"version-1.12.0/preview-features",isDocsHomePage:!1,title:"Enable Preview Features",description:"Preview features are LiveData Migrator features that are still under development and are subject to improvement. These are disabled by default, and must be enabled in the properties file:",source:"@site/versioned_docs/version-1.12.0/preview-features.md",slug:"/preview-features",permalink:"/wandisco-documentation-ldm/docs/1.12.0/preview-features",version:"1.12.0",sidebar_label:"Enable preview features",sidebar:"version-1.12.0/someSidebar",previous:{title:"Using the LiveData Migrator jar",permalink:"/wandisco-documentation-ldm/docs/1.12.0/jar"},next:{title:"Backup and Restore",permalink:"/wandisco-documentation-ldm/docs/1.12.0/backup-and-restore"}},l=[{value:"Current Preview Features",id:"current-preview-features",children:[{value:"Backup and Restore",id:"backup-and-restore",children:[]},{value:"Migration verifications",id:"migration-verifications",children:[]}]}],s={toc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Preview features are LiveData Migrator features that are still under development and are subject to improvement. These are disabled by default, and must be enabled in the properties file:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/etc/wandisco/livedata-migrator/application.properties")),Object(i.b)("p",null,"Preview features must be enabled by finding the corresponding property with the prefix ",Object(i.b)("inlineCode",{parentName:"p"},"preview.feature.")," and changing the ",Object(i.b)("inlineCode",{parentName:"p"},"OFF")," value to ",Object(i.b)("inlineCode",{parentName:"p"},"ON"),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Example for enabling Backup & Restore"',title:'"Example',for:!0,enabling:!0,Backup:!0,"&":!0,'Restore"':!0},"preview.feature.backup-restore=ON\n")),Object(i.b)("p",null,"LiveData Migrator must then be restarted for the changes to take effect:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"service livedata-migrator restart\n")),Object(i.b)("h2",{id:"current-preview-features"},"Current Preview Features"),Object(i.b)("p",null,"The following preview features are currently available in LiveData Migrator."),Object(i.b)("h3",{id:"backup-and-restore"},Object(i.b)("a",{parentName:"h3",href:"/wandisco-documentation-ldm/docs/1.12.0/backup-and-restore"},"Backup and Restore")),Object(i.b)("p",null,"This feature allows you to save LiveData Migrator's current state - including migrations, filesystems, path mappings and configuration - and restore it later. ",Object(i.b)("a",{parentName:"p",href:"./backup-and-restore"},"View the full list of properties this feature backs up and restores here"),"."),Object(i.b)("p",null,"Enable this feature with the following property:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"preview.feature.backup-restore=ON\n")),Object(i.b)("h3",{id:"migration-verifications"},Object(i.b)("a",{parentName:"h3",href:"/wandisco-documentation-ldm/docs/1.12.0/migration-verifications"},"Migration verifications")),Object(i.b)("p",null,"This feature allows you to run a verification job on a ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.12.0/manage-migrations#data-migration-states"},"Live, Running or Completed")," data migration. The verification job will scan your source and target filesystems (in the migration path) and compare them for any discrepancies."),Object(i.b)("p",null,"Enable this feature with the following property:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"preview.feature.verifications=ON\n")))}u.isMDXComponent=!0},237:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return r?n.a.createElement(f,c(c({ref:t},s),{},{components:r})):n.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);