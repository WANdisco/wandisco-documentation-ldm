(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),r=(a(0),a(162)),o={id:"manage-bandwidth",title:"Define your bandwidth policy",sidebar_label:"Bandwidth management"},c={unversionedId:"manage-bandwidth",id:"manage-bandwidth",isDocsHomePage:!1,title:"Define your bandwidth policy",description:"By default, LiveData Migrator will use all network bandwidth available to the server unless a specific limit is applied. Follow the UI or CLI instructions to set bandwidth limits.",source:"@site/docs/manage-bandwidth.md",slug:"/manage-bandwidth",permalink:"/wandisco-documentation-ldm/docs/manage-bandwidth",version:"current",sidebar_label:"Bandwidth management",sidebar:"someSidebar",previous:{title:"Manage migrations",permalink:"/wandisco-documentation-ldm/docs/manage-migrations"},next:{title:"Connect metastores for metadata migrations",permalink:"/wandisco-documentation-ldm/docs/connect-metastores"}},d=[{value:"Manage bandwidth with the UI",id:"manage-bandwidth-with-the-ui",children:[]},{value:"Manage bandwidth with the CLI",id:"manage-bandwidth-with-the-cli",children:[]}],l={toc:d};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"By default, LiveData Migrator will use all network bandwidth available to the server unless a specific limit is applied. Follow the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#manage-bandwidth-with-the-ui"}),"UI")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#manage-bandwidth-with-the-cli"}),"CLI")," instructions to set bandwidth limits."),Object(r.b)("h2",{id:"manage-bandwidth-with-the-ui"},"Manage bandwidth with the UI"),Object(r.b)("p",null,"The Bandwidth panel shows how much bandwidth LiveData Migrator is currently using to migrate data. It shows this over the most recent 5 minute period and continually updates. The left axis scales automatically to accommodate the highest throughput during that period."),Object(r.b)("p",null,"To apply a bandwidth limit between the source and target storage(s), follow the steps below:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In the ",Object(r.b)("strong",{parentName:"li"},"Storages")," list on the dashboard, click the settings for the appropriate storage."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Bandwidth Management")," under the ",Object(r.b)("em",{parentName:"li"},"Grouping")," list."),Object(r.b)("li",{parentName:"ol"},"Uncheck the ",Object(r.b)("strong",{parentName:"li"},"Unlimited")," option."),Object(r.b)("li",{parentName:"ol"},"Define the ",Object(r.b)("strong",{parentName:"li"},"Maximum bandwidth limit")," and ",Object(r.b)("strong",{parentName:"li"},"Unit")," (for example: MiB/s), and click ",Object(r.b)("strong",{parentName:"li"},"Apply"),".")),Object(r.b)("p",null,"You will need to define a bandwidth limit for each LiveData Migrator server (if you have more than one)."),Object(r.b)("h2",{id:"manage-bandwidth-with-the-cli"},"Manage bandwidth with the CLI"),Object(r.b)("p",null,"Limit the total amount of bandwidth LiveData Migrator can use by using the ",Object(r.b)("inlineCode",{parentName:"p"},"bandwidth policy")," command. Once defined, the bandwidth limit will apply immediately to all migrations (new and ongoing)."),Object(r.b)("p",null,"Only one bandwidth policy can be active at a time. The default policy is unlimited bandwidth."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#bandwidth-policy-del"}),Object(r.b)("inlineCode",{parentName:"a"},"bandwidth policy del"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete a bandwidth policy")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#bandwidth-policy-set"}),Object(r.b)("inlineCode",{parentName:"a"},"bandwidth policy set"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Define the bandwidth policy")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#bandwidth-policy-show"}),Object(r.b)("inlineCode",{parentName:"a"},"bandwidth policy show"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Get details for the current bandwidth policy")))))}b.isMDXComponent=!0},162:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=b(a),s=n,h=m["".concat(o,".").concat(s)]||m[s]||p[s]||r;return a?i.a.createElement(h,c(c({ref:t},l),{},{components:a})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=s;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);