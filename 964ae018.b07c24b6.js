(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(202)),c={id:"api-reference",title:"API Reference",sidebar_label:"API reference"},i={unversionedId:"api-reference",id:"api-reference",isDocsHomePage:!1,title:"API Reference",description:"LiveData Migrator exposes a REST API for use by external clients. These API resources provide equivalent functionality to the commands described in the Command Reference except for the commands related to metadata migrations.",source:"@site/docs/api-reference.md",slug:"/api-reference",permalink:"/wandisco-documentation-ldm/docs/api-reference",version:"current",sidebar_label:"API reference",sidebar:"someSidebar",previous:{title:"Command Reference",permalink:"/wandisco-documentation-ldm/docs/command-reference"},next:{title:"Using the LiveData Migrator jar",permalink:"/wandisco-documentation-ldm/docs/jar"}},l=[{value:"Metadata migrations",id:"metadata-migrations",children:[]}],m={toc:l};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"LiveData Migrator exposes a REST API for use by external clients. These API resources provide equivalent functionality to the commands described in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference"}),"Command Reference")," except for the commands related to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/migrate-metadata"}),"metadata migrations"),"."),Object(o.b)("p",null,"You can access the API documentation for LiveData Migrator directly on your host machine:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"http(s)://<ldm-hostname>:<ldm-port>/ldm-api.html")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"http://localhost:18080/ldm-api.html\n")),Object(o.b)("p",null,"This version will reflect exactly the API exposed from your instance of LiveData Migrator."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:18080/ldm-api.html"}),Object(o.b)("img",{alt:"LiveData Migrator Swagger Documentation",src:n(207).default}))),Object(o.b)("h2",{id:"metadata-migrations"},"Metadata migrations"),Object(o.b)("p",null,"Commands related to metadata migrations (such as ",Object(o.b)("inlineCode",{parentName:"p"},"hive agent"),", ",Object(o.b)("inlineCode",{parentName:"p"},"hive rule"),", ",Object(o.b)("inlineCode",{parentName:"p"},"hive migration"),") are serviced through a different REST API port."),Object(o.b)("p",null,"Access the API documentation for metadata migrations on your host machine:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"http(s)://<ldm-hostname>:<hvm-port>/docs")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"http://localhost:6780/docs\n")))}p.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),p=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,b=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return n?a.a.createElement(b,i(i({ref:t},m),{},{components:n})):a.a.createElement(b,i({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var m=2;m<o;m++)c[m]=n[m];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},207:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-fb573a395ef9c97ec547aae1cb1e8a1a.png"}}]);