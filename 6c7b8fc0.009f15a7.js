(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(235)),o={id:"installation",title:"Install LiveData Migrator",sidebar_label:"Install LiveData Migrator"},l={unversionedId:"installation",id:"version-1.8.3/installation",isDocsHomePage:!1,title:"Install LiveData Migrator",description:"Ready to install? Check the prerequisites and then follow these steps to get up and running with LiveData Migrator. The latest version of LiveData Migrator includes a preview of functionality that you can use to migrate metadata.",source:"@site/versioned_docs/version-1.8.3/installation.md",slug:"/installation",permalink:"/wandisco-documentation-ldm/docs/1.8.3/installation",version:"1.8.3",sidebar_label:"Install LiveData Migrator",sidebar:"version-1.8.3/someSidebar",previous:{title:"Prerequisites",permalink:"/wandisco-documentation-ldm/docs/1.8.3/prereqs"},next:{title:"Using LiveData Migrator with the UI",permalink:"/wandisco-documentation-ldm/docs/1.8.3/operation-ui"}},c=[{value:"Download and install LiveData Migrator",id:"download-and-install-livedata-migrator",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ready to install? Check the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.8.3/prereqs"}),"prerequisites")," and then follow these steps to get up and running with LiveData Migrator. The latest version of LiveData Migrator includes a preview of functionality that you can use to migrate metadata."),Object(i.b)("h2",{id:"download-and-install-livedata-migrator"},"Download and install LiveData Migrator"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download LiveData Migrator and upload to your chosen host. If you're migrating from HDFS, install LiveData Migrator on an edge node in the Hadoop cluster."),Object(i.b)("div",{class:"download"},Object(i.b)("a",{href:"https://www2.wandisco.com/ldm-trial"},"Download LiveData Migrator"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make the installation script executable and install as the root (or sudo) user. These commands assume that the installer is inside your working directory."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"chmod +x livedata-migrator.sh && ./livedata-migrator.sh\n")),Object(i.b)("p",{parentName:"li"},"If you're migrating from HDFS, install LiveData Migrator on an edge node in the Hadoop cluster using the HDFS superuser."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example for HDFS superuser"',title:'"Example',for:!0,HDFS:!0,'superuser"':!0}),"su - hdfs\n\nchmod +x livedata-migrator.sh && sudo ./livedata-migrator.sh\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check the service statuses with these commands:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"service livedata-migrator status\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"service hivemigrator status\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"service livedata-ui status\n")))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Once you have LiveData Migrator running, you can use the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.8.3/operation-ui"}),"UI")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.8.3/operation-cli"}),"CLI")," to start migrating data."))}p.isMDXComponent=!0},235:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return a?r.a.createElement(b,l(l({ref:t},s),{},{components:a})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);