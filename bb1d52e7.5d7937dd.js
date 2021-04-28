(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),o=(a(0),a(202)),i={id:"about",title:"LiveData Migrator",sidebar_label:"LiveData Migrator"},c={unversionedId:"about",id:"version-1.8.3/about",isDocsHomePage:!1,title:"LiveData Migrator",description:"LiveData Migrator migrates changing data at scale from HDFS to your choice of target environment, including the ongoing changes made to those data before, throughout and after migration. Targets include  ADLS Gen 2, GCS, HDFS, and S3 (including IBM COS).",source:"@site/versioned_docs/version-1.8.3/about.md",slug:"/about",permalink:"/wandisco-documentation-ldm/docs/1.8.3/about",version:"1.8.3",sidebar_label:"LiveData Migrator",sidebar:"version-1.8.3/someSidebar",next:{title:"Prerequisites",permalink:"/wandisco-documentation-ldm/docs/1.8.3/prereqs"}},s=[{value:"Get started",id:"get-started",children:[]}],p={toc:s};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"LiveData Migrator ",Object(o.b)("em",{parentName:"p"},"migrates changing data")," at scale from HDFS to your choice of target environment, including the ongoing changes made to those data before, throughout and after migration. Targets include  ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction"}),"ADLS Gen 2"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.google.com/storage"}),"GCS"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"}),"HDFS"),", and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html"}),"S3")," (including ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-getting-started-cloud-object-storage"}),"IBM COS"),")."),Object(o.b)("p",null,"The latest version of LiveData Migrator includes a ",Object(o.b)("strong",{parentName:"p"},"preview")," of a feature that migrates metadata in either direction between metastores and databases. Supported platforms include ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://cwiki.apache.org/confluence/display/Hive/Home"}),"Apache Hive"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-gb/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview"}),"Azure SQL"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/whitepapers/latest/aws-overview/database.html"}),"AWS-hosted databases"),", and local filesystems."),Object(o.b)("h2",{id:"get-started"},"Get started"),Object(o.b)("p",null,"Ready to use LiveData Migrator? See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.8.3/prereqs"}),"prerequisites")," to prepare your environment for installation and successful data migrations. Once set up, you're ready to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.8.3/installation"}),"install LiveData Migrator"),"."))}d.isMDXComponent=!0},202:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),d=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),b=r,m=u["".concat(i,".").concat(b)]||u[b]||l[b]||o;return a?n.a.createElement(m,c(c({ref:t},p),{},{components:a})):n.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);