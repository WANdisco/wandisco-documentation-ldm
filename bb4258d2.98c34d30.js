(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{184:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),o=(a(0),a(235)),i={id:"ldm-trial-for-aws",title:"LiveData Migrator Trial for Amazon Web Services (AWS)"},c={unversionedId:"ldm-trial-for-aws",id:"ldm-trial-for-aws",isDocsHomePage:!1,title:"LiveData Migrator Trial for Amazon Web Services (AWS)",description:"If you want to get familiar with LiveData Migrator before committing to a production implementation, you can use a HDFS Sandbox cluster as your source filesystem for LiveData Migrator.",source:"@site/docs/ldm-trial-for-aws.md",slug:"/ldm-trial-for-aws",permalink:"/wandisco-documentation-ldm/docs/ldm-trial-for-aws",version:"current"},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deploy the Sandbox",id:"deploy-the-sandbox",children:[]},{value:"Install and configure LiveData Migrator",id:"install-and-configure-livedata-migrator",children:[]},{value:"Start a migration",id:"start-a-migration",children:[]},{value:"Confirm the migration is successful",id:"confirm-the-migration-is-successful",children:[]}],b={toc:l};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you want to get familiar with LiveData Migrator before committing to a production implementation, you can use a HDFS Sandbox cluster as your source filesystem for LiveData Migrator."),Object(o.b)("p",null,"The HDFS Sandbox for LiveData Migrator is a non-kerberized ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.cloudera.com/downloads/hortonworks-sandbox.html"}),"HDP 2.6.5 Sandbox")," Docker environment."),Object(o.b)("p",null,"The following steps explain how to deploy the HDFS Sandbox and perform a migration of data to your Amazon Simple Storage Service (S3) bucket using LiveData Migrator."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Follow our guide to create an Amazon Elastic Compute Cloud (Amazon EC2) instance that has the correct dependencies installed to host the HDP Sandbox:"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/preparation/aws_vm_creation/"}),"Amazon EC2 Creation")),Object(o.b)("p",null,"Alternatively, create the host through the AWS portal or host the Sandbox on your own server. The requirements for the host are as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Linux Server",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Minimum size recommendation = ",Object(o.b)("strong",{parentName:"li"},"8 CPUs, 32 GiB memory"),"."),Object(o.b)("li",{parentName:"ul"},"A minimum of 24GB available storage for the ",Object(o.b)("inlineCode",{parentName:"li"},"/var/lib/docker")," directory."),Object(o.b)("li",{parentName:"ul"},"Network connectivity to your S3 bucket."),Object(o.b)("li",{parentName:"ul"},"Port 8080 must be accessible to access the Ambari UI."),Object(o.b)("li",{parentName:"ul"},"Port 8081 must be accessible to access the LiveData UI.")))),Object(o.b)("p",null,"The following services must be installed:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"Git")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.docker.com/install/"}),"Docker")," (v19.03.5 or higher)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/#install-compose"}),"Docker Compose for Linux")," (v1.25.0 or higher)")),Object(o.b)("h2",{id:"deploy-the-sandbox"},"Deploy the Sandbox"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log in to your host for the Sandbox.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone the git repository for the HDFS Sandbox:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"git clone https://github.com/WANdisco/hdp-vanilla.git\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Change directory to the repository:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"cd hdp-vanilla\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Start the HDFS Sandbox"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"docker-compose up -d\n")))),Object(o.b)("h2",{id:"install-and-configure-livedata-migrator"},"Install and configure LiveData Migrator"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download and install LiveData Migrator:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),'docker-compose exec sandbox-hdp-vanilla bash -c "wget wandisco.com/downloads/livedata-migrator.sh -P /tmp; chmod +x /tmp/livedata-migrator.sh; /tmp/livedata-migrator.sh"\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open a browser window and access the LiveData UI using the Sandbox host IP on port 8081:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"http://sandbox_host_ip_address:8081\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fill out your account details and click ",Object(o.b)("strong",{parentName:"p"},"Register"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click the settings cog to configure your ",Object(o.b)("strong",{parentName:"p"},"Target")," storage.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select the ",Object(o.b)("strong",{parentName:"p"},"Storage Type")," as ",Object(o.b)("strong",{parentName:"p"},"S3")," and fill in the following details:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Storage Name")," - This is a user-provided identifier for the storage."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Bucket Name")," - Your ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#create-bucket-intro"}),"S3 bucket name"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Credentials Provider")," - Select the ",Object(o.b)("inlineCode",{parentName:"li"},"org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider")," option to provide an access and secret key."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Access Key")," - The ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"}),"access key")," for the S3 bucket."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Secret Key")," - The ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"}),"secret key")," for the S3 bucket.")),Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Save")," once complete, and return to the dashboard."))),Object(o.b)("h2",{id:"start-a-migration"},"Start a migration"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click the ",Object(o.b)("strong",{parentName:"p"},"+")," in the ",Object(o.b)("strong",{parentName:"p"},"Rules/Migrations")," panel to create a new migration.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enter the migration details as follows:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Select the target storage as the one defined in the previous section (",Object(o.b)("strong",{parentName:"li"},"Storage Name"),")."),Object(o.b)("li",{parentName:"ul"},"Set the migration path as ",Object(o.b)("inlineCode",{parentName:"li"},"/retail_demo")),Object(o.b)("li",{parentName:"ul"},"Enable auto-start migration.")),Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Create")," to begin the migration with the details provided."))),Object(o.b)("h2",{id:"confirm-the-migration-is-successful"},"Confirm the migration is successful"),Object(o.b)("p",null,"Once the migration is complete, check that the ",Object(o.b)("inlineCode",{parentName:"p"},"/retail_demo")," directory exists on your S3 bucket."),Object(o.b)("p",null,"A sub-directory should exist inside (",Object(o.b)("inlineCode",{parentName:"p"},"customer_addresses_dim_hive"),") with a ~50MB file inside (",Object(o.b)("inlineCode",{parentName:"p"},"customer_addresses_dim.tsv.gz"),")."))}s.isMDXComponent=!0},235:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return a?n.a.createElement(d,c(c({ref:t},b),{},{components:a})):n.a.createElement(d,c({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);