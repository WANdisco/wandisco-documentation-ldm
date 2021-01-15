(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{116:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,b=m["".concat(o,".").concat(d)]||m[d]||p[d]||n;return a?i.a.createElement(b,s(s({ref:t},c),{},{components:a})):i.a.createElement(b,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),i=a(7),n=(a(0),a(116)),o={id:"prereqs",title:"Prerequisites",sidebar_label:"Prerequisites"},s={unversionedId:"prereqs",id:"prereqs",isDocsHomePage:!1,title:"Prerequisites",description:"Ready to start? Check the prerequisites and then follow these steps to get ready for LiveData Migrator. This latest version of LiveData Migrator also includes a preview of a metadata migration feature. Prerequisites to migrate metadata are included in the list below, and you'll find instructions explaining how to use the feature throughout this guide.",source:"@site/docs/prereqs.md",slug:"/prereqs",permalink:"/docs/prereqs",version:"current",sidebar_label:"Prerequisites",sidebar:"someSidebar",previous:{title:"Welcome to LiveData Migrator",permalink:"/docs/about"},next:{title:"Install LiveData Migrator",permalink:"/docs/installation"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Machine specification",id:"machine-specification",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],c={toc:l};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.a)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.a)("p",null,"Ready to start? Check the prerequisites and then follow these steps to get ready for LiveData Migrator. This latest version of LiveData Migrator also includes a preview of a metadata migration feature. Prerequisites to migrate metadata are included in the list below, and you'll find instructions explaining how to use the feature throughout this guide."),Object(n.a)("p",null,Object(n.a)("a",Object(r.a)({parentName:"p"},{href:"https://community.wandisco.com/s/article/WANdisco-LiveData-Migrator-Release-Notes-1-8-3"}),"Read the release notes")," to get the latest information about the current version of LiveData Migrator."),Object(n.a)("h2",{id:"prerequisites"},"Prerequisites"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"Linux host",Object(n.a)("ul",{parentName:"li"},Object(n.a)("li",{parentName:"ul"},"See the ",Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://community.wandisco.com/s/article/WANdisco-LiveData-Migrator-Release-Notes-1-8-3"}),"release notes")," for a list of supported operating systems."))),Object(n.a)("li",{parentName:"ul"},"Java 1.8 64-bit."),Object(n.a)("li",{parentName:"ul"},"Network connectivity from your LiveData Migrator host to your target storage (for example: ADLS Gen2 endpoint or S3 bucket)."),Object(n.a)("li",{parentName:"ul"},"Port 8081 accessible on your Linux host (to access the UI through a web browser)."),Object(n.a)("li",{parentName:"ul"},"If migrating from HDFS:",Object(n.a)("ul",{parentName:"li"},Object(n.a)("li",{parentName:"ul"},"Hadoop client libraries must be installed on the Linux host."),Object(n.a)("li",{parentName:"ul"},"Ability to authenticate as the ",Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User"}),"HDFS superuser")," (for example: ",Object(n.a)("inlineCode",{parentName:"li"},"hdfs"),")."),Object(n.a)("li",{parentName:"ul"},"If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the HDFS superuser must be available on the Linux host."))),Object(n.a)("li",{parentName:"ul"},"If you want to migrate metadata to or from ",Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"https://cwiki.apache.org/confluence/display/Hive/Home"}),"Apache Hive")," in our preview of the feature:",Object(n.a)("ul",{parentName:"li"},Object(n.a)("li",{parentName:"ul"},"The Hive service must be present on the cluster."),Object(n.a)("li",{parentName:"ul"},"SSH/CLI access to the cluster."),Object(n.a)("li",{parentName:"ul"},"If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the Hive service user must be available. The host for the keytab will depend on whether you deploy locally, remotely, or both (see the ",Object(n.a)("a",Object(r.a)({parentName:"li"},{href:"/docs/command-reference#hive-agent-add-hive"}),Object(n.a)("inlineCode",{parentName:"a"},"hive agent add hive"))," section for more information).")))),Object(n.a)("h2",{id:"machine-specification"},"Machine specification"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"16 CPUs, 32 GB RAM")," (minimum ",Object(n.a)("strong",{parentName:"li"},"4 CPUs, 16 GB RAM"),")",Object(n.a)("ul",{parentName:"li"},Object(n.a)("li",{parentName:"ul"},"If deploying LiveData Migrator on a Hadoop cluster, the host machine should be an edge node that matches at least 75-80% of the NameNode host specification."))),Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"200 GB")," (SSD-backed volumes) (minimum ",Object(n.a)("strong",{parentName:"li"},"100 GB"),")"),Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"2 Gbps")," minimum network. Your network bandwidth must be able to cope with transferring data and ongoing changes from your source storage.")),Object(n.a)("h2",{id:"next-steps"},"Next Steps"),Object(n.a)("p",null,"Once you have all the prerequisites, you're ready to ",Object(n.a)("a",Object(r.a)({parentName:"p"},{href:"/docs/installation"}),"download and install")," LiveData Migrator."))}u.isMDXComponent=!0}}]);