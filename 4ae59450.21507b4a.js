(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(235)),i={id:"api-reference",title:"API Reference",sidebar_label:"API Reference"},c={unversionedId:"api-reference",id:"version-1.8.3/api-reference",isDocsHomePage:!1,title:"API Reference",description:"LiveData Migrator exposes a REST API for use by external clients. These API resources provide equivalent functionality to the commands described in the Command Reference except for the commands related to metadata migrations.",source:"@site/versioned_docs/version-1.8.3/api-reference.md",slug:"/api-reference",permalink:"/wandisco-documentation-ldm/docs/1.8.3/api-reference",version:"1.8.3",sidebar_label:"API Reference",sidebar:"version-1.8.3/someSidebar",previous:{title:"Using the LiveData Migrator jar",permalink:"/wandisco-documentation-ldm/docs/1.8.3/jar"}},l=[{value:"Metadata migrations (preview)",id:"metadata-migrations-preview",children:[]}],p={toc:l};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"LiveData Migrator exposes a REST API for use by external clients. These API resources provide equivalent functionality to the commands described in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.8.3/command-reference"}),"Command Reference")," except for the commands related to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#metadata-migrations"}),"metadata migrations"),"."),Object(o.b)("p",null,"You can access the API documentation for LiveData Migrator directly on your host machine:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"http(s)://<ldm-hostname>:<ldm-port>/ldm-api.html")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"http://localhost:18080/ldm-api.html\n")),Object(o.b)("p",null,"This version will reflect exactly the API exposed from your instance of LiveData Migrator."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:18080/ldm-api.html"}),Object(o.b)("img",{alt:"LiveData Migrator Swagger Documentation",src:r(240).default}))),Object(o.b)("h2",{id:"metadata-migrations-preview"},"Metadata migrations (preview)"),Object(o.b)("p",null,"Commands related to metadata migrations (such as ",Object(o.b)("inlineCode",{parentName:"p"},"hive agent"),", ",Object(o.b)("inlineCode",{parentName:"p"},"hive rule"),", ",Object(o.b)("inlineCode",{parentName:"p"},"hive migration"),") are serviced through a different REST API port."),Object(o.b)("p",null,"Access the API documentation for metadata migrations on your host machine:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"http(s)://<ldm-hostname>:<hvm-port>/docs")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"http://localhost:6780/docs\n")))}s.isMDXComponent=!0},235:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return r?a.a.createElement(b,c(c({ref:t},p),{},{components:r})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},240:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/swagger-fb573a395ef9c97ec547aae1cb1e8a1a.png"}}]);