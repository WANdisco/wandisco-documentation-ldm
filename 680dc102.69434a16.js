(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(202)),i={id:"api-reference",title:"API Reference",sidebar_label:"API Reference"},c={unversionedId:"api-reference",id:"version-1.10.0/api-reference",isDocsHomePage:!1,title:"API Reference",description:"LiveData Migrator exposes a REST API for use by external clients. These API resources provide equivalent functionality to the commands described in the Command Reference except for the commands related to metadata migrations.",source:"@site/versioned_docs/version-1.10.0/api-reference.md",slug:"/api-reference",permalink:"/wandisco-documentation-ldm/docs/1.10.0/api-reference",version:"1.10.0",sidebar_label:"API Reference",sidebar:"version-1.10.0/someSidebar",previous:{title:"Command Reference",permalink:"/wandisco-documentation-ldm/docs/1.10.0/command-reference"},next:{title:"Using the LiveData Migrator jar",permalink:"/wandisco-documentation-ldm/docs/1.10.0/jar"}},l=[{value:"Metadata migrations (preview)",id:"metadata-migrations-preview",children:[]}],p={toc:l};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"LiveData Migrator exposes a REST API for use by external clients. These API resources provide equivalent functionality to the commands described in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference"}),"Command Reference")," except for the commands related to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/migrate-metadata"}),"metadata migrations"),"."),Object(o.b)("p",null,"You can access the API documentation for LiveData Migrator directly on your host machine:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"http(s)://<ldm-hostname>:<ldm-port>/ldm-api.html")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"http://localhost:18080/ldm-api.html\n")),Object(o.b)("p",null,"This version will reflect exactly the API exposed from your instance of LiveData Migrator."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:18080/ldm-api.html"}),Object(o.b)("img",{alt:"LiveData Migrator Swagger Documentation",src:n(207).default}))),Object(o.b)("h2",{id:"metadata-migrations-preview"},"Metadata migrations (preview)"),Object(o.b)("p",null,"Commands related to metadata migrations (such as ",Object(o.b)("inlineCode",{parentName:"p"},"hive agent"),", ",Object(o.b)("inlineCode",{parentName:"p"},"hive rule"),", ",Object(o.b)("inlineCode",{parentName:"p"},"hive migration"),") are serviced through a different REST API port."),Object(o.b)("p",null,"Access the API documentation for metadata migrations on your host machine:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"http(s)://<ldm-hostname>:<hvm-port>/docs")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"http://localhost:6780/docs\n")))}s.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},207:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-fb573a395ef9c97ec547aae1cb1e8a1a.png"}}]);