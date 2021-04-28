(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(204)),o={id:"manage-bandwidth",title:"Define your bandwidth policy",sidebar_label:"Bandwidth management"},d={unversionedId:"manage-bandwidth",id:"version-1.11.0/manage-bandwidth",isDocsHomePage:!1,title:"Define your bandwidth policy",description:"By default, LiveData Migrator will use all network bandwidth available to the server unless a specific limit is applied. Follow the UI or CLI instructions to set bandwidth limits.",source:"@site/versioned_docs/version-1.11.0/manage-bandwidth.md",slug:"/manage-bandwidth",permalink:"/wandisco-documentation-ldm/docs/1.11.0/manage-bandwidth",version:"1.11.0",sidebar_label:"Bandwidth management",sidebar:"version-1.11.0/someSidebar",previous:{title:"Manage migrations",permalink:"/wandisco-documentation-ldm/docs/1.11.0/manage-migrations"},next:{title:"Connect metastores for metadata migrations",permalink:"/wandisco-documentation-ldm/docs/1.11.0/connect-metastores"}},l=[{value:"Manage bandwidth with the UI",id:"manage-bandwidth-with-the-ui",children:[]},{value:"Manage bandwidth with the CLI",id:"manage-bandwidth-with-the-cli",children:[]}],c={toc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"By default, LiveData Migrator will use all network bandwidth available to the server unless a specific limit is applied. Follow the ",Object(r.b)("a",{parentName:"p",href:"#manage-bandwidth-with-the-ui"},"UI")," or ",Object(r.b)("a",{parentName:"p",href:"#manage-bandwidth-with-the-cli"},"CLI")," instructions to set bandwidth limits."),Object(r.b)("h2",{id:"manage-bandwidth-with-the-ui"},"Manage bandwidth with the UI"),Object(r.b)("p",null,"The Bandwidth panel shows how much bandwidth LiveData Migrator is currently using to migrate data. It shows this over the most recent 5 minute period and continually updates. The left axis scales automatically to accommodate the highest throughput during that period."),Object(r.b)("p",null,"To apply a bandwidth limit between the source and target storage(s), follow the steps below:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In the ",Object(r.b)("strong",{parentName:"li"},"Storages")," list on the dashboard, click the settings for the appropriate storage."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Bandwidth Management")," under the ",Object(r.b)("em",{parentName:"li"},"Grouping")," list."),Object(r.b)("li",{parentName:"ol"},"Uncheck the ",Object(r.b)("strong",{parentName:"li"},"Unlimited")," option."),Object(r.b)("li",{parentName:"ol"},"Define the ",Object(r.b)("strong",{parentName:"li"},"Maximum bandwidth limit")," and ",Object(r.b)("strong",{parentName:"li"},"Unit")," (for example: MiB/s), and click ",Object(r.b)("strong",{parentName:"li"},"Apply"),".")),Object(r.b)("p",null,"You will need to define a bandwidth limit for each LiveData Migrator server (if you have more than one)."),Object(r.b)("h2",{id:"manage-bandwidth-with-the-cli"},"Manage bandwidth with the CLI"),Object(r.b)("p",null,"Limit the total amount of bandwidth LiveData Migrator can use by using the ",Object(r.b)("inlineCode",{parentName:"p"},"bandwidth policy")," command. Once defined, the bandwidth limit will apply immediately to all migrations (new and ongoing)."),Object(r.b)("p",null,"Only one bandwidth policy can be active at a time. The default policy is unlimited bandwidth."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Command"),Object(r.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.11.0/command-reference#bandwidth-policy-del"},Object(r.b)("inlineCode",{parentName:"a"},"bandwidth policy del"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Delete a bandwidth policy")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.11.0/command-reference#bandwidth-policy-set"},Object(r.b)("inlineCode",{parentName:"a"},"bandwidth policy set"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Define the bandwidth policy")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.11.0/command-reference#bandwidth-policy-show"},Object(r.b)("inlineCode",{parentName:"a"},"bandwidth policy show"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Get details for the current bandwidth policy")))))}b.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=b(n),s=a,h=m["".concat(o,".").concat(s)]||m[s]||p[s]||r;return n?i.a.createElement(h,d(d({ref:t},c),{},{components:n})):i.a.createElement(h,d({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);