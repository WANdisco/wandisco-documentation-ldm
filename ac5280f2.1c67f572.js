(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(126)),o={id:"license",title:"Upgrade your LiveData Migrator license",sidebar_label:"Upgrade your license"},c={unversionedId:"license",id:"license",isDocsHomePage:!1,title:"Upgrade your LiveData Migrator license",description:"The LiveData Migrator trial license includes 14 days operation and 5TB of data migration. This gives you full use of LiveData Migrator up to either of these limits.",source:"@site/docs/license.md",slug:"/license",permalink:"/wandisco-documentation-ldm/docs/license",version:"current",sidebar_label:"Upgrade your license",sidebar:"someSidebar",previous:{title:"Install LiveData Migrator",permalink:"/wandisco-documentation-ldm/docs/installation"},next:{title:"Uninstall and upgrade LiveData Migrator",permalink:"/wandisco-documentation-ldm/docs/uninstall"}},l=[{value:"Upgrade your license in the UI",id:"upgrade-your-license-in-the-ui",children:[]},{value:"Upgrade your license with the CLI",id:"upgrade-your-license-with-the-cli",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The LiveData Migrator trial license includes 14 days operation and 5TB of data migration. This gives you full use of LiveData Migrator up to either of these limits."),Object(i.b)("p",null,"Once you've reached the limit of your trial license, you'll need to upgrade to a full license to continue using LiveData Migrator. These instructions explain how to upgrade or renew a full license with either the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#upgrade-your-license-in-the-ui"}),"UI")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#upgrade-your-license-with-the-cli"}),"CLI"),"."),Object(i.b)("h2",{id:"upgrade-your-license-in-the-ui"},"Upgrade your license in the UI"),Object(i.b)("p",null,"Upload your new license in the License panel of the UI. This panel displays current license information, including the expiry date, and warnings if your license limits are approaching."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Upgrade License"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click the option to purchase a license now. Follow the provided instructions to get your license."),Object(i.b)("p",{parentName:"li"},"Once your license has been sent, ensure it is available on your local machine.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Upload your new license.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check the ",Object(i.b)("strong",{parentName:"p"},"License Information")," window and ensure that your new data limit has been applied."),Object(i.b)("p",{parentName:"li"},"We'll notify you when it's time to renew your license."))),Object(i.b)("h2",{id:"upgrade-your-license-with-the-cli"},"Upgrade your license with the CLI"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://community.wandisco.com/s/article/How-to-upgrade-your-license"}),"Contact WANdisco")," to purchase a full license. Once you have your new license, use the following commands to upload the new license key to LiveData Migrator."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to the LiveData Migrator host.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to the LiveData Migrator CLI."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"livedata-migrator --host=localhost\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference#license-show"}),Object(i.b)("inlineCode",{parentName:"a"},"license show"))," command to see details of your current LiveData Migrator license.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Upload the new license key with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference#license-upload"}),Object(i.b)("inlineCode",{parentName:"a"},"license upload"))," command."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"license upload --path /user/hdfs/license.key\n\n")))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"You're ready to migrate data! Learn how to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/get-started"}),"get started with LiveData Migrator"),"."))}p.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);