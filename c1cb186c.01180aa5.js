(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=m(e,["components","mdxType","originalType","parentName"]),d=l(a),O=n,s=d["".concat(o,".").concat(O)]||d[O]||p[O]||i;return a?r.a.createElement(s,c(c({ref:t},b),{},{components:a})):r.a.createElement(s,c({ref:t},b))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=O;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(112)),o={id:"manage-metadata-migrations",title:"Manage metadata migrations (preview)",sidebar_label:"Manage metadata migrations"},c={unversionedId:"manage-metadata-migrations",id:"manage-metadata-migrations",isDocsHomePage:!1,title:"Manage metadata migrations (preview)",description:"Manage your metadata migrations with the following commands.",source:"@site/docs/manage-metadata-migrations.md",slug:"/manage-metadata-migrations",permalink:"/wandisco-documentation-ldm/docs/manage-metadata-migrations",version:"current",sidebar_label:"Manage metadata migrations"},m=[],b={toc:m};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Manage your metadata migrations with the following commands."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-migration-delete"}),Object(i.b)("inlineCode",{parentName:"a"},"hive migration delete"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete a hive migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-migration-list"}),Object(i.b)("inlineCode",{parentName:"a"},"hive migration list"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List all hive migrations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-migration-pause"}),Object(i.b)("inlineCode",{parentName:"a"},"hive migration pause"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pause a hive migration or a list of hive migrations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-migration-pause---all"}),Object(i.b)("inlineCode",{parentName:"a"},"hive migration pause --all"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pause all hive migrations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-migration-resume"}),Object(i.b)("inlineCode",{parentName:"a"},"hive migration resume"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Resume a hive migration or a list of hive migrations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-migration-resume---all"}),Object(i.b)("inlineCode",{parentName:"a"},"hive migration resume --all"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Resume all hive migrations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-migration-show"}),Object(i.b)("inlineCode",{parentName:"a"},"hive migration show"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Display information about a hive migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-migration-start"}),Object(i.b)("inlineCode",{parentName:"a"},"hive migration start"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Start a hive migration or a list of hive migrations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-migration-start---all"}),Object(i.b)("inlineCode",{parentName:"a"},"hive migration start --all"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Start all hive migrations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-migration-status"}),Object(i.b)("inlineCode",{parentName:"a"},"hive migration status"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show the status of a hive migration or a list of hive migrations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-migration-status---all"}),Object(i.b)("inlineCode",{parentName:"a"},"hive migration status --all"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show the status of all hive migrations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-migration-stop"}),Object(i.b)("inlineCode",{parentName:"a"},"hive migration stop"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stop a hive migration or a list of hive migrations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-migration-stop---all"}),Object(i.b)("inlineCode",{parentName:"a"},"hive migration stop --all"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stop all hive migrations")))))}l.isMDXComponent=!0}}]);