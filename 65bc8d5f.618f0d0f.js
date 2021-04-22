(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(200)),o={id:"prereqs",title:"Prerequisites",sidebar_label:"Prerequisites"},l={unversionedId:"prereqs",id:"prereqs",isDocsHomePage:!1,title:"Prerequisites",description:"Ready to start? Check the prerequisites and then follow these steps to get ready for LiveData Migrator. This latest version of LiveData Migrator also includes a metadata migration feature. Prerequisites to migrate metadata are included in the list below, and you'll find instructions explaining how to use the feature throughout this guide.",source:"@site/docs/prereqs.md",slug:"/prereqs",permalink:"/wandisco-documentation-ldm/docs/prereqs",version:"current",sidebar_label:"Prerequisites",sidebar:"someSidebar",previous:{title:"Welcome to LiveData Migrator",permalink:"/wandisco-documentation-ldm/docs/about"},next:{title:"Licensing",permalink:"/wandisco-documentation-ldm/docs/license"}},c=[{value:"Recommended Technical Knowledge",id:"recommended-technical-knowledge",children:[{value:"System administration",id:"system-administration",children:[]},{value:"Networking",id:"networking",children:[]},{value:"Cloud Storage Technologies",id:"cloud-storage-technologies",children:[]},{value:"LiveData",id:"livedata",children:[]}]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Machine Specification",id:"machine-specification",children:[]},{value:"Production Use Configuration",id:"production-use-configuration",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],s={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ready to start? Check the prerequisites and then follow these steps to get ready for LiveData Migrator. This latest version of LiveData Migrator also includes a metadata migration feature. Prerequisites to migrate metadata are included in the list below, and you'll find instructions explaining how to use the feature throughout this guide."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://community.wandisco.com/s/article/Release-Notes-WANdisco-LiveData-Migrator-Release-Notes-1-11-1"}),"Read the release notes")," to get the latest information about the current version of LiveData Migrator."),Object(i.b)("h2",{id:"recommended-technical-knowledge"},"Recommended Technical Knowledge"),Object(i.b)("h3",{id:"system-administration"},"System administration"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Linux operating system installation"),Object(i.b)("li",{parentName:"ul"},"Disk management"),Object(i.b)("li",{parentName:"ul"},"Memory monitoring and management"),Object(i.b)("li",{parentName:"ul"},"Command line administration and manually editing configuration files"),Object(i.b)("li",{parentName:"ul"},"Service configuration and management")),Object(i.b)("h3",{id:"networking"},"Networking"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"IP Address assignation"),Object(i.b)("li",{parentName:"ul"},"TCP/IP ports and Firewall setup or server certificates (for SSL)")),Object(i.b)("h3",{id:"cloud-storage-technologies"},"Cloud Storage Technologies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Proficiency with intended target storage technologies, such as ADLS Gen 2, GCS, HDFS, and Amazon Simple Storage Service (S3)."),Object(i.b)("li",{parentName:"ul"},"For Amazon Web Services, this includes:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Knowledge of AWS Marketplace, Amazon Elastic Compute Cloud (Amazon EC2) Console, Amazon Simple Storage Service (Amazon S3), and AWS Command Line Tool."),Object(i.b)("li",{parentName:"ul"},"Specifically, starting, stopping, and terminating AWS instances, understanding any storage persistence and related costs."),Object(i.b)("li",{parentName:"ul"},"Ability to monitor and troubleshoot AWS services.")))),Object(i.b)("h3",{id:"livedata"},"LiveData"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An understanding of the installation procedures for your platform, as provided in this guide.")),Object(i.b)("p",null,"If you\u2019re not confident about meeting the requirements, you can discuss a supported installation by contacting ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www2.wandisco.com/ldmaquestion"}),"WANdisco"),"."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Linux host",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"See the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://community.wandisco.com/s/article/Release-Notes-WANdisco-LiveData-Migrator-Release-Notes-1-11"}),"release notes")," for a list of supported operating systems."))),Object(i.b)("li",{parentName:"ul"},"Java 1.8 64-bit."),Object(i.b)("li",{parentName:"ul"},"Network connectivity from your LiveData Migrator host to your target storage (for example: ADLS Gen2 endpoint or S3 bucket)."),Object(i.b)("li",{parentName:"ul"},"Port 8081 accessible on your Linux host (to access the UI through a web browser)."),Object(i.b)("li",{parentName:"ul"},"If migrating from HDFS:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Hadoop client libraries must be installed on the Linux host."),Object(i.b)("li",{parentName:"ul"},"Ability to authenticate as the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User"}),"HDFS superuser")," (for example: ",Object(i.b)("inlineCode",{parentName:"li"},"hdfs"),")."),Object(i.b)("li",{parentName:"ul"},"If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the HDFS superuser must be available on the Linux host."))),Object(i.b)("li",{parentName:"ul"},"If you want to migrate metadata to or from ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://cwiki.apache.org/confluence/display/Hive/Home"}),"Apache Hive"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The Hive service must be present on the cluster."),Object(i.b)("li",{parentName:"ul"},"SSH/CLI access to the cluster."),Object(i.b)("li",{parentName:"ul"},"If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the Hive service user must be available. The host for the keytab will depend on whether you deploy locally, remotely, or both (see the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation-ldm/docs/command-reference#hive-agent-add-hive"}),Object(i.b)("inlineCode",{parentName:"a"},"hive agent add hive"))," section for more information).")))),Object(i.b)("h2",{id:"machine-specification"},"Machine Specification"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"16 CPUs, 32 GB RAM")," (minimum ",Object(i.b)("strong",{parentName:"li"},"4 CPUs, 16 GB RAM"),")",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If deploying LiveData Migrator on a Hadoop cluster, the host machine should be an edge node that matches at least 75-80% of the NameNode host specification."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"200 GB")," (SSD-backed volumes) (minimum ",Object(i.b)("strong",{parentName:"li"},"100 GB"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2 Gbps")," minimum network. Your network bandwidth must be able to cope with transferring data and ongoing changes from your source storage.")),Object(i.b)("h2",{id:"production-use-configuration"},"Production Use Configuration"),Object(i.b)("p",null,"We recommended you configure ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./configuration-data-migrations"}),"Data Migration properties")," on your Hadoop Distributed File System to ensure smooth operation."),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Once you have all the prerequisites, you're ready to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/installation"}),"download and install")," LiveData Migrator."))}u.isMDXComponent=!0},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,p=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return a?r.a.createElement(p,l(l({ref:t},s),{},{components:a})):r.a.createElement(p,l({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);