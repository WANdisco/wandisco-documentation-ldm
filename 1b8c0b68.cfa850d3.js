(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{116:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.a.createElement(g,s(s({ref:t},l),{},{components:a})):n.a.createElement(g,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),o=(a(0),a(116)),i={id:"about",title:"LiveData Migrator",sidebar_label:"About LiveData Migrator"},s={unversionedId:"about",id:"version-1.4.7/about",isDocsHomePage:!1,title:"LiveData Migrator",description:"WANdisco LiveData Migrator is a fully self-service data migration solution that is immediate, live, and scalable.",source:"@site/versioned_docs/version-1.4.7/about.md",slug:"/about",permalink:"/docs/1.4.7/about",version:"1.4.7",sidebar_label:"About LiveData Migrator",sidebar:"version-1.4.7/someSidebar",next:{title:"Installation",permalink:"/docs/1.4.7/installation"}},c=[{value:"Features",id:"features",children:[]},{value:"WANdisco LiveData Platform",id:"wandisco-livedata-platform",children:[]},{value:"Get started",id:"get-started",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"WANdisco LiveData Migrator is a fully self-service data migration solution that is immediate, live, and scalable."),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Immediate:")," enabling administrators to easily deploy the solution and begin migration of data lake content to the cloud immediately. It is entirely non-intrusive and requires zero changes to applications, cluster or node configuration or operation."),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Live:")," WANdisco\u2019s LiveData capabilities enable data migration to occur while the source data is under active change, without requiring any production system downtime or business disruption supporting complete and continuous data migration."),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Scalable:")," able to accommodate data migration at any scale, without any risk of data loss."),Object(o.a)("h2",{id:"features"},"Features"),Object(o.a)("p",null,"LiveData Migrator ",Object(o.a)("em",{parentName:"p"},"migrates changing data")," at scale from HDFS to your choice of target environment, including the ongoing changes made to those data before, throughout and after migration. Targets include  ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction"}),"ADLS Gen 2"),", ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"}),"HDFS"),", and ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html"}),"S3"),"."),Object(o.a)("p",null,"Manage your migrations through a ",Object(o.a)("strong",{parentName:"p"},"user interface"),", a ",Object(o.a)("strong",{parentName:"p"},"command-line interface")," or from the self-documenting ",Object(o.a)("strong",{parentName:"p"},"REST API"),", track and ",Object(o.a)("strong",{parentName:"p"},"monitor migration progress"),", and take advantage of optional management from WANdisco's ",Object(o.a)("strong",{parentName:"p"},"browser-based user interface")," and deep integration with ",Object(o.a)("strong",{parentName:"p"},"cloud vendors' management interfaces"),"."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"A robust and efficient scanner that visits source items only once to identify content for migration."),Object(o.a)("li",{parentName:"ul"},"Integration with HDFS notifications that describe changes in source data while migration is  underway."),Object(o.a)("li",{parentName:"ul"},"Selective and flexible choices of data to be migrated."),Object(o.a)("li",{parentName:"ul"},"Measurement and monitoring of migration progress to help estimate completion and plan your other activities.")),Object(o.a)("h2",{id:"wandisco-livedata-platform"},"WANdisco LiveData Platform"),Object(o.a)("p",null,"LiveData Migrator is a part of the WANdisco LiveData Platform, which provides the easiest and most capable solution for migrating your on-premises Hadoop data to cloud environments. Use it to:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Rapidly ",Object(o.a)("strong",{parentName:"li"},"provision a Live Data service")," that supports simple and advanced migration needs."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Reduce the cost and risk")," of bringing your business-critical data to ",Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction"}),"Azure Data Lake Storage"),", ",Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"https://aws.amazon.com/s3/"}),"AWS S3"),", ",Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.google.com/storage"}),"Google Cloud Storage"),", other ",Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"}),"HDFS")," or ",Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"https://cwiki.apache.org/confluence/display/HADOOP2/HCFS"}),"Hadoop-compatible storage platforms"),"."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Continue to run")," your on-premises big data operations while migration is in progress.")),Object(o.a)("p",null,"LiveData Platform solves the challenges of migrating large data volumes from Hadoop to the cloud and keeping those data consistent across storage systems throughput migration, ",Object(o.a)("em",{parentName:"p"},"even while data are under continual change"),". It employs a unique, wide-area network capable consensus engine to achieve data consistency and to implement migration of data with consistency guarantees while data are ingested or modified."),Object(o.a)("h2",{id:"get-started"},"Get started"),Object(o.a)("p",null,"Ready to use LiveData Migrator? See the ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.4.7/installation#prerequisites"}),"prerequisites")," to prepare your environment for installation and successful data migrations. Once set up, you're ready to ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.4.7/installation"}),"install LiveData Migrator"),"."))}p.isMDXComponent=!0}}]);