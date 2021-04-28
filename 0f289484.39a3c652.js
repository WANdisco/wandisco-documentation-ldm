(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{202:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||n;return a?i.a.createElement(m,s(s({ref:t},l),{},{components:a})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<n;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(3),i=a(7),n=(a(0),a(202)),o={id:"prereqs",title:"Prerequisites",sidebar_label:"Prerequisites"},s={unversionedId:"prereqs",id:"version-1.8.3/prereqs",isDocsHomePage:!1,title:"Prerequisites",description:"Ready to start? Check the prerequisites and then follow these steps to get ready for LiveData Migrator. This latest version of LiveData Migrator also includes a preview of a metadata migration feature. Prerequisites to migrate metadata are included in the list below, and you'll find instructions explaining how to use the feature throughout this guide.",source:"@site/versioned_docs/version-1.8.3/prereqs.md",slug:"/prereqs",permalink:"/wandisco-documentation-ldm/docs/1.8.3/prereqs",version:"1.8.3",sidebar_label:"Prerequisites",sidebar:"version-1.8.3/someSidebar",previous:{title:"LiveData Migrator",permalink:"/wandisco-documentation-ldm/docs/1.8.3/about"},next:{title:"Install LiveData Migrator",permalink:"/wandisco-documentation-ldm/docs/1.8.3/installation"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Machine specification",id:"machine-specification",children:[]},{value:"License",id:"license",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],l={toc:c};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Ready to start? Check the prerequisites and then follow these steps to get ready for LiveData Migrator. This latest version of LiveData Migrator also includes a preview of a metadata migration feature. Prerequisites to migrate metadata are included in the list below, and you'll find instructions explaining how to use the feature throughout this guide."),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://community.wandisco.com/s/article/WANdisco-LiveData-Migrator-Release-Notes-1-8-3"}),"Read the release notes")," to get the latest information about the current version of LiveData Migrator."),Object(n.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Linux host",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"See the ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://community.wandisco.com/s/article/WANdisco-LiveData-Migrator-Release-Notes-1-8-3"}),"release notes")," for a list of supported operating systems."))),Object(n.b)("li",{parentName:"ul"},"Java 1.8 64-bit."),Object(n.b)("li",{parentName:"ul"},"Network connectivity from your LiveData Migrator host to your target storage (for example: ADLS Gen2 endpoint or S3 bucket)."),Object(n.b)("li",{parentName:"ul"},"Port 8081 accessible on your Linux host (to access the UI through a web browser)."),Object(n.b)("li",{parentName:"ul"},"If migrating from HDFS:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Hadoop client libraries must be installed on the Linux host."),Object(n.b)("li",{parentName:"ul"},"Ability to authenticate as the ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User"}),"HDFS superuser")," (for example: ",Object(n.b)("inlineCode",{parentName:"li"},"hdfs"),")."),Object(n.b)("li",{parentName:"ul"},"If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the HDFS superuser must be available on the Linux host."))),Object(n.b)("li",{parentName:"ul"},"If you want to migrate metadata to or from ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://cwiki.apache.org/confluence/display/Hive/Home"}),"Apache Hive")," in our preview of the feature:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The Hive service must be present on the cluster."),Object(n.b)("li",{parentName:"ul"},"SSH/CLI access to the cluster."),Object(n.b)("li",{parentName:"ul"},"If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the Hive service user must be available. The host for the keytab will depend on whether you deploy locally, remotely, or both (see the ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/wandisco-documentation-ldm/docs/1.8.3/command-reference#hive-agent-add-hive"}),Object(n.b)("inlineCode",{parentName:"a"},"hive agent add hive"))," section for more information).")))),Object(n.b)("h2",{id:"machine-specification"},"Machine specification"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"16 CPUs, 32 GB RAM")," (minimum ",Object(n.b)("strong",{parentName:"li"},"4 CPUs, 16 GB RAM"),")",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"If deploying LiveData Migrator on a Hadoop cluster, the host machine should be an edge node that matches at least 75-80% of the NameNode host specification."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"200 GB")," (SSD-backed volumes) (minimum ",Object(n.b)("strong",{parentName:"li"},"100 GB"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"2 Gbps")," minimum network. Your network bandwidth must be able to cope with transferring data and ongoing changes from your source storage.")),Object(n.b)("h2",{id:"license"},"License"),Object(n.b)("p",null,"The LiveData Migrator trial license is limited to 14 days operation and 5TB of data migration. This gives you full use of LiveData Migrator up to either of these limits. ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.wandisco.com"}),"Contact WANdisco to upgrade to a full license.")),Object(n.b)("h2",{id:"next-steps"},"Next Steps"),Object(n.b)("p",null,"Once you have all the prerequisites, you're ready to ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.8.3/installation"}),"download and install")," LiveData Migrator."))}u.isMDXComponent=!0}}]);