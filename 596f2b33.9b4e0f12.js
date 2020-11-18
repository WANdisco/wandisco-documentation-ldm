(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(2),n=a(6),i=(a(0),a(84)),o={id:"installation",title:"Installation",sidebar_label:"Installation"},c={unversionedId:"installation",id:"version-1.4.7/installation",isDocsHomePage:!1,title:"Installation",description:"Ready to install? Check the prerequisites and then follow these steps to get up and running with LiveData Migrator.",source:"@site/versioned_docs/version-1.4.7/installation.md",slug:"/installation",permalink:"/wandisco-documentation-ldm/docs/installation",version:"1.4.7",sidebar_label:"Installation",sidebar:"version-1.4.7/someSidebar",previous:{title:"LiveData Migrator",permalink:"/wandisco-documentation-ldm/docs/about"},next:{title:"Using LiveData Migrator with the UI",permalink:"/wandisco-documentation-ldm/docs/operation-ui"}},l=[{value:"Before you start",id:"before-you-start",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Machine specification",id:"machine-specification",children:[]},{value:"License",id:"license",children:[]}]},{value:"Download and install LiveData Migrator",id:"download-and-install-livedata-migrator",children:[]},{value:"Using LiveData Migrator",id:"using-livedata-migrator",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ready to install? Check the prerequisites and then follow these steps to get up and running with LiveData Migrator."),Object(i.b)("p",null,"If you're new to the concept of LiveData, or want to know what LiveData Migrator does, see the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/about"}),"introduction to LiveData Migrator"),"."),Object(i.b)("h2",{id:"before-you-start"},"Before you start"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://community.wandisco.com/s/article/WANdisco-LiveData-Migrator-Release-Notes-1-4-7"}),"Read the release notes")," to get the latest information about the current version of LiveData Migrator."),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Linux host running either Red Hat, CentOS or Ubuntu."),Object(i.b)("li",{parentName:"ul"},"Java 1.8 64-bit."),Object(i.b)("li",{parentName:"ul"},"Network connectivity from your LiveData Migrator host to your target storage (for example: ADLS Gen2 endpoint or S3 bucket)."),Object(i.b)("li",{parentName:"ul"},"Port 8081 accessible on your Linux host (to access the UI through a web browser)."),Object(i.b)("li",{parentName:"ul"},"If migrating from HDFS:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Hadoop client libraries must be installed on the Linux host."),Object(i.b)("li",{parentName:"ul"},"Ability to authenticate as the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User"}),"HDFS superuser")," (for example: ",Object(i.b)("inlineCode",{parentName:"li"},"hdfs"),")."),Object(i.b)("li",{parentName:"ul"},"If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the HDFS superuser must be available on the Linux host.")))),Object(i.b)("h3",{id:"machine-specification"},"Machine specification"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"16 CPUs, 32 GB RAM")," (minimum ",Object(i.b)("strong",{parentName:"li"},"4 CPUs, 16 GB RAM"),")",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If deploying LiveData Migrator on a Hadoop cluster, the host machine should be an edge node that matches at least 75-80% of the NameNode host specification."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"200 GB")," (SSD-backed volumes) (minimum ",Object(i.b)("strong",{parentName:"li"},"100 GB"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2 Gbps")," minimum network. Your network bandwidth must be able to cope with transferring data and ongoing changes from your source storage.")),Object(i.b)("h3",{id:"license"},"License"),Object(i.b)("p",null,"The LiveData Migrator trial license is limited to 14 days operation and 5TB of data migration. This gives you full use of LiveData Migrator up to either of these limits. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.wandisco.com"}),"Contact WANdisco to upgrade to a full license.")),Object(i.b)("h2",{id:"download-and-install-livedata-migrator"},"Download and install LiveData Migrator"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download LiveData Migrator and upload to your chosen host. If you're migrating from HDFS, install LiveData Migrator on an edge node in the Hadoop cluster."),Object(i.b)("div",{class:"download"},Object(i.b)("a",{href:"https://www2.wandisco.com/ldm-trial"},"Download LiveData Migrator"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make the installation script executable and install as the root (or sudo) user. These commands assume that the installer is inside your working directory."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"chmod +x livedata-migrator.sh && ./livedata-migrator.sh\n")),Object(i.b)("p",{parentName:"li"},"If you're migrating from HDFS, install LiveData Migrator on an edge node in the Hadoop cluster using the HDFS superuser."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example for HDFS superuser"',title:'"Example',for:!0,HDFS:!0,'superuser"':!0}),"su - hdfs\n\nchmod +x livedata-migrator.sh && sudo ./livedata-migrator.sh\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check the service statuses with these commands:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"service livedata-migrator status\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"service one-ui-server status\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If Kerberos is enabled in your environment:"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Edit the Kerberos security properties in the ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/wandisco/livedata-migrator/application.properties")," file.",Object(i.b)("br",{parentName:"p"}),"\n","Refer to the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/configuration#kerberos-integration"}),"Kerberos Integration")," section for details about the required properties.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Restart the LiveData Migrator service to make any configuration changes live:",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"service livedata-migrator restart")))))),Object(i.b)("h2",{id:"using-livedata-migrator"},"Using LiveData Migrator"),Object(i.b)("p",null,"Once you have LiveData Migrator running, you can use the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/operation-ui"}),"UI"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/operation-cli"}),"CLI"),", or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/api-reference"}),"REST API")," to start migrating data."))}b.isMDXComponent=!0},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return a?n.a.createElement(m,c(c({ref:t},s),{},{components:a})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);