(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(235)),i={id:"uc-on-prem-hadoop-hdi",title:"On-premises Hadoop cluster to Azure HDInsights cluster",sidebar_label:"On-premises Hadoop to Azure HDI"},c={unversionedId:"uc-on-prem-hadoop-hdi",id:"version-1.10.0/uc-on-prem-hadoop-hdi",isDocsHomePage:!1,title:"On-premises Hadoop cluster to Azure HDInsights cluster",description:"Below is an outline of the steps needed to ready your environment for migration of data and metadata.",source:"@site/versioned_docs/version-1.10.0/uc-on-prem-hadoop-hdi.md",slug:"/uc-on-prem-hadoop-hdi",permalink:"/wandisco-documentation-ldm/docs/1.10.0/uc-on-prem-hadoop-hdi",version:"1.10.0",sidebar_label:"On-premises Hadoop to Azure HDI",sidebar:"version-1.10.0/someSidebar",previous:{title:"Create a metadata migration (preview)",permalink:"/wandisco-documentation-ldm/docs/1.10.0/migrate-metadata"},next:{title:"Configuring LiveData Migrator",permalink:"/wandisco-documentation-ldm/docs/1.10.0/configuration-ldm"}},s=[{value:"Prerequisites",id:"prerequisites",children:[{value:"On-premises Hadoop cluster",id:"on-premises-hadoop-cluster",children:[]},{value:"Azure HDInsights cluster",id:"azure-hdinsights-cluster",children:[]}]},{value:"Configure for data migrations",id:"configure-for-data-migrations",children:[{value:"Add HDFS as source filesystem",id:"add-hdfs-as-source-filesystem",children:[]},{value:"Add ADLS Gen2 storage as target filesystem",id:"add-adls-gen2-storage-as-target-filesystem",children:[]}]},{value:"Configure for metadata migrations",id:"configure-for-metadata-migrations",children:[{value:"Add source hive agent",id:"add-source-hive-agent",children:[]},{value:"Add target hive agent",id:"add-target-hive-agent",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],d={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Below is an outline of the steps needed to ready your environment for migration of data and metadata."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The steps on this page assume that you are using LiveData Migrator through the CLI. Follow the links for each command to see the required parameters and example usage."),Object(o.b)("p",{parentName:"div"},"Alternative steps for the UI will be provided in a future release."))),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("h3",{id:"on-premises-hadoop-cluster"},"On-premises Hadoop cluster"),Object(o.b)("p",null,"Ensure that all ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/prereqs#prerequisites"}),"prerequisites")," are met for the source environment. This also includes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Network connectivity between your edge node and your ADLS Gen2 storage container."),Object(o.b)("li",{parentName:"ul"},"If using an ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-use-external-metadata-stores#create-and-config-azure-sql-database-for-the-custom-metastore"}),"Azure SQL Database")," on your HDInsights cluster, network connectivity between your edge node and this database.")),Object(o.b)("h3",{id:"azure-hdinsights-cluster"},"Azure HDInsights cluster"),Object(o.b)("p",null,"For your target environment, ensure the following prerequisites are met:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Your HDInsights cluster is using ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/hdinsight/overview-data-lake-storage-gen2"}),"ADLS Gen2")," as its primary storage type."),Object(o.b)("li",{parentName:"ul"},"(Recommended) ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation-ldm/docs/1.10.0/configuration-ui#default-hive-metastore-warehouse-directory"}),"Check that your default Hive warehouse directory is configured the same as your source on-premises Hadoop cluster"),"."),Object(o.b)("li",{parentName:"ul"},"If using a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-use-external-metadata-stores#default-metastore"}),"default metastore"),", SSH access to an edge node on the HDInsights cluster.",Object(o.b)("br",{parentName:"li"}),"The edge node requires the following:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"HDFS and Hive client libraries installed."),Object(o.b)("li",{parentName:"ul"},"Port 5052 open for outbound connections to communicate with the LiveData Migrator service on the on-premises Hadoop edge node.")))),Object(o.b)("h2",{id:"configure-for-data-migrations"},"Configure for data migrations"),Object(o.b)("h3",{id:"add-hdfs-as-source-filesystem"},"Add HDFS as source filesystem"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If Kerberos is enabled on your Hadoop cluster, specify the Kerberos credentials for the HDFS superuser on your Hadoop cluster:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#filesystem-auto-discover-source-hdfs"}),Object(o.b)("inlineCode",{parentName:"a"},"filesystem auto-discover-source hdfs")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check that HDFS on your on-premises Hadoop cluster is set as your source filesystem:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#source-fs-show"}),Object(o.b)("inlineCode",{parentName:"a"},"source fs show"))),Object(o.b)("p",{parentName:"li"},"If the filesystem shown is incorrect, delete it using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#source-del"}),Object(o.b)("inlineCode",{parentName:"a"},"source del"))," and configure the source manually:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#filesystem-add-hdfs"}),Object(o.b)("inlineCode",{parentName:"a"},"filesystem add hdfs"))),Object(o.b)("p",{parentName:"li"},"Ensure to include the ",Object(o.b)("inlineCode",{parentName:"p"},"--source")," parameter when using the command above."))),Object(o.b)("h3",{id:"add-adls-gen2-storage-as-target-filesystem"},"Add ADLS Gen2 storage as target filesystem"),Object(o.b)("p",null,"Configure your ADLS Gen2 storage container as your target filesystem. The method chosen will depend on the authentication method:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Using a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal"}),"service principal")," and ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols"}),"OAuth 2")," credentials: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#filesystem-add-adls2-oauth"}),Object(o.b)("inlineCode",{parentName:"a"},"filesystem add adls2 oauth"))),Object(o.b)("li",{parentName:"ul"},"Using ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys"}),"access key")," credentials: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#filesystem-add-adls2-sharedkey"}),Object(o.b)("inlineCode",{parentName:"a"},"filesystem add adls2 sharedKey")))),Object(o.b)("h2",{id:"configure-for-metadata-migrations"},"Configure for metadata migrations"),Object(o.b)("h3",{id:"add-source-hive-agent"},"Add source hive agent"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"(Recommended) ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/configuration-ui#enable-hive-metastore-event-listener"}),"Enable the Hive metastore event listener")," on the on-premises Hadoop cluster.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Configure the source hive agent to connect to the Hive metastore on the on-premises Hadoop cluster:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-add-hive"}),Object(o.b)("inlineCode",{parentName:"a"},"hive agent add hive")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check that the configuration for the hive agent is correct:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"hive agent check --name hiveAgent\n")))),Object(o.b)("h3",{id:"add-target-hive-agent"},"Add target hive agent"),Object(o.b)("p",null,"HDInsights can use either a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-use-external-metadata-stores#default-metastore"}),"default metastore"),", or a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-use-external-metadata-stores#custom-metastore"}),"custom metastore")," in the form of an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-use-external-metadata-stores#create-and-config-azure-sql-database-for-the-custom-metastore"}),"Azure SQL Database"),"."),Object(o.b)("p",null,"Choose one of the methods below depending on the type of metastore deployed in your HDInsights cluster."),Object(o.b)("h4",{id:"default-metastore"},"Default metastore"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Deploy and configure a remote hive agent:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-add-hive"}),Object(o.b)("inlineCode",{parentName:"a"},"hive agent add hive"))),Object(o.b)("p",{parentName:"li"},"Use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#parameters-for-automated-deployment-1"}),"automated deployment parameters")," or follow the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#steps-for-manual-deployment-1"}),"steps for manual deployment"),"."),Object(o.b)("p",{parentName:"li"},"As mentioned in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#prerequisites"}),"prerequisites"),", you will need to specify a suitable edge node on your HDInsights cluster to deploy the hive agent service.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check that the configuration for the hive agent is correct:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"hive agent check --name azureAgent\n")))),Object(o.b)("h4",{id:"custom-metastore-azure-sql-database"},"Custom metastore (Azure SQL database)"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Configure a hive agent to connect to an Azure SQL database:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/command-reference#hive-agent-add-azure"}),Object(o.b)("inlineCode",{parentName:"a"},"hive agent add azure")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check that the configuration for the hive agent is correct:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"hive agent check --name azureAgent\n")))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"Start ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/configure-exclusions"}),"defining exclusions")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/create-migration"}),"migrating data"),". You can also ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/define-metadata-rules"}),"create metadata rules")," and start ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.10.0/migrate-metadata"}),"migrating metadata"),"."))}l.isMDXComponent=!0},235:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(a),b=n,p=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return a?r.a.createElement(p,c(c({ref:t},d),{},{components:a})):r.a.createElement(p,c({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);