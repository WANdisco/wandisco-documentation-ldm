(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),o=(a(0),a(237)),c={id:"about",title:"Welcome to LiveData Migrator",sidebar_label:"Introduction"},i={unversionedId:"about",id:"about",isDocsHomePage:!1,title:"Welcome to LiveData Migrator",description:"LiveData Migrator migrates changing data at scale from HDFS to your choice of target environment, including the ongoing changes made to those data before, throughout and after migration. Targets include  ADLS Gen 2, GCS, HDFS, and Amazon Simple Storage Service (S3) (including IBM COS).",source:"@site/docs/about.md",slug:"/about",permalink:"/wandisco-documentation-ldm/docs/about",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Prerequisites",permalink:"/wandisco-documentation-ldm/docs/prereqs"}},s=[{value:"Get started",id:"get-started",children:[]}],d={toc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"LiveData Migrator ",Object(o.b)("em",{parentName:"p"},"migrates changing data")," at scale from HDFS to your choice of target environment, including the ongoing changes made to those data before, throughout and after migration. Targets include  ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction"},"ADLS Gen 2"),", ",Object(o.b)("a",{parentName:"p",href:"https://cloud.google.com/storage"},"GCS"),", ",Object(o.b)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"},"HDFS"),", and ",Object(o.b)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon Simple Storage Service (S3)")," (including ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-getting-started-cloud-object-storage"},"IBM COS"),")."),Object(o.b)("p",null,"LiveData Migrator can also migrate metadata between source and target metastores. Supported metastore types include ",Object(o.b)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/Hive/Home"},"Apache Hive"),", ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html"},"AWS Glue"),", ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview"},"Azure SQL"),", and ",Object(o.b)("a",{parentName:"p",href:"https://databricks.com/product/delta-lake-on-databricks"},"Databricks Delta Lake")," (preview feature). See the ",Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/connect-metastores"},"Migrate metadata")," section for instructions on how to use this feature."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://community.wandisco.com/s/article/Release-Notes-WANdisco-LiveData-Migrator-Release-Notes-1-12"},"Read the release notes")," to get the latest information about the current version of LiveData Migrator."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you are using a previous version of LiveData Migrator, use the numbered dropdown at the top right of this page to get the right docs for you."))),Object(o.b)("h2",{id:"get-started"},"Get started"),Object(o.b)("p",null,"Ready to use LiveData Migrator? See the ",Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/prereqs"},"prerequisites")," to prepare your environment for installation and successful data migrations. Once set up, you're ready to ",Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/installation"},"install LiveData Migrator"),"."))}p.isMDXComponent=!0},237:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),p=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,b=u["".concat(c,".").concat(m)]||u[m]||l[m]||o;return a?n.a.createElement(b,i(i({ref:t},d),{},{components:a})):n.a.createElement(b,i({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<o;d++)c[d]=a[d];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);