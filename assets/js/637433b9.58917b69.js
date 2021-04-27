(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{118:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(203)),i={id:"get-started",title:"Get started",sidebar_label:"Get started"},c={unversionedId:"get-started",id:"version-1.10.0/get-started",isDocsHomePage:!1,title:"Get started",description:"You can use either LiveData Migrator's UI or CLI to manage resources and migrate data. If you're using the UI to operate LiveData Migrator, you'll need to open ports and register your LiveData Migrator account after installation. If you're using the CLI to operate LiveData Migrator, you're ready to log in.",source:"@site/versioned_docs/version-1.10.0/get-started.md",slug:"/get-started",permalink:"/wandisco-documentation-ldm/docs/1.10.0/get-started",version:"1.10.0",sidebar_label:"Get started",sidebar:"version-1.10.0/someSidebar",previous:{title:"Uninstall and upgrade LiveData Migrator",permalink:"/wandisco-documentation-ldm/docs/1.10.0/uninstall"},next:{title:"Configure storage",permalink:"/wandisco-documentation-ldm/docs/1.10.0/configure-storage"}},s=[{value:"Get started with the LiveData Migrator UI",id:"get-started-with-the-livedata-migrator-ui",children:[{value:"Register",id:"register",children:[]}]},{value:"Log in to the LiveData Migrator CLI",id:"log-in-to-the-livedata-migrator-cli",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use either LiveData Migrator's UI or CLI to manage resources and migrate data. If you're using the ",Object(o.b)("a",{parentName:"p",href:"#get-started-with-the-livedata-migrator-ui"},"UI")," to operate LiveData Migrator, you'll need to open ports and register your LiveData Migrator account after installation. If you're using the ",Object(o.b)("a",{parentName:"p",href:"#get-started-with-the-livedata-migrator-cli"},"CLI")," to operate LiveData Migrator, you're ready to log in."),Object(o.b)("h2",{id:"get-started-with-the-livedata-migrator-ui"},"Get started with the LiveData Migrator UI"),Object(o.b)("p",null,"LiveData Migrator's UI can manage multiple LiveData Migrators as well as LiveData Plane from one convenient interface. It is designed to be intuitive and contains on-screen instructions to help you perform migrations and configuration tasks successfully."),Object(o.b)("p",null,"The UI is available on port 8081 on your LiveData Migrator host. For example, if you were running LiveData Migrator on a host named ",Object(o.b)("inlineCode",{parentName:"p"},"myldmhost.example.com"),", the URL would be:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"http://myldmhost.example.com:8081\n")),Object(o.b)("h3",{id:"register"},"Register"),Object(o.b)("p",null,"You'll be asked to register the first time you use the UI. Fill in the registration form to create your user account."),Object(o.b)("p",null,"Internet access from the host is not required, but when it is available, you'll be sent confirmation of your registration. We'll use your registration information to send you important information about your LiveData Migrator account, such as a reminder before your license expires. You can also opt in to receive additional product updates."),Object(o.b)("h2",{id:"log-in-to-the-livedata-migrator-cli"},"Log in to the LiveData Migrator CLI"),Object(o.b)("p",null,"You can use LiveData Migrator's command line interface (CLI) to create and manage resources in LiveData Migrator, and migrate data and metadata."),Object(o.b)("p",null,"Run the following command to log in to the LiveData Migrator CLI:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"livedata-migrator\n")),Object(o.b)("p",null,"The command prompt will then load and automatically connect to the LiveData Migrator services located on your host."),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"Ready to migrate data? ",Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.10.0/configure-storage"},"Configure your storage")," to start."))}u.isMDXComponent=!0},203:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),g=a,m=d["".concat(i,".").concat(g)]||d[g]||p[g]||o;return r?n.a.createElement(m,c(c({ref:t},l),{},{components:r})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);