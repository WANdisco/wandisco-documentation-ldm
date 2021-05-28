(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{205:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(237)),i={id:"configure-storage",title:"Configure storage",sidebar_label:"Configure storage"},c={unversionedId:"configure-storage",id:"configure-storage",isDocsHomePage:!1,title:"Configure storage",description:"The first step in the process of migrating data is to configure your storage, which defines where data is being migrated from (the source) and to (the target).",source:"@site/docs/configure-storage.md",slug:"/configure-storage",permalink:"/wandisco-documentation-ldm/docs/configure-storage",version:"current",sidebar_label:"Configure storage",sidebar:"someSidebar",previous:{title:"Get started",permalink:"/wandisco-documentation-ldm/docs/get-started"},next:{title:"Create path mappings",permalink:"/wandisco-documentation-ldm/docs/create-path-mappings"}},s=[{value:"Configure storage with the UI",id:"configure-storage-with-the-ui",children:[{value:"Configure source storage",id:"configure-source-storage",children:[]},{value:"Add target storages",id:"add-target-storages",children:[]}]},{value:"Configure storage with the CLI",id:"configure-storage-with-the-cli",children:[{value:"Validate your source",id:"validate-your-source",children:[]},{value:"Add file systems",id:"add-file-systems",children:[]},{value:"Manage file systems",id:"manage-file-systems",children:[]}]},{value:"Configure storage for one-time migrations",id:"configure-storage-for-one-time-migrations",children:[{value:"Create storage for one-time migrations with the UI",id:"create-storage-for-one-time-migrations-with-the-ui",children:[]},{value:"Create storage for one-time migrations with the CLI",id:"create-storage-for-one-time-migrations-with-the-cli",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],l={toc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The first step in the process of migrating data is to configure your storage, which defines where data is being migrated from (the source) and to (the target)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Supported sources are: ",Object(o.b)("strong",{parentName:"li"},"HDFS"),", ",Object(o.b)("strong",{parentName:"li"},"Amazon Simple Storage Service (Amazon S3) ",Object(o.b)("em",{parentName:"strong"},"(preview)"))," and ",Object(o.b)("strong",{parentName:"li"},"local storage")),Object(o.b)("li",{parentName:"ul"},"Supported targets are: ",Object(o.b)("strong",{parentName:"li"},"ADLS Gen2"),", ",Object(o.b)("strong",{parentName:"li"},"Amazon Simple Storage Service (Amazon S3)"),", ",Object(o.b)("strong",{parentName:"li"},"Google Cloud Storage"),", ",Object(o.b)("strong",{parentName:"li"},"IBM Cloud Object Storage (S3)")," and ",Object(o.b)("strong",{parentName:"li"},"HDFS"))),Object(o.b)("p",null,"Configure storage with either the ",Object(o.b)("a",{parentName:"p",href:"#configure-storage-with-the-ui"},"UI")," or the ",Object(o.b)("a",{parentName:"p",href:"#configure-storage-with-the-cli"},"CLI"),"."),Object(o.b)("h2",{id:"configure-storage-with-the-ui"},"Configure storage with the UI"),Object(o.b)("p",null,"The Storage panel shows the filesystems LiveData Migrator uses as either a source or target for data migrations. LiveData Migrator supports one source and one or more targets. Each filesystem displays its associated processes, such as which LiveData Migrator is used to access it."),Object(o.b)("p",null,"Use the Storage panel to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"View and configure the source and target filesystems."),Object(o.b)("li",{parentName:"ul"},"Add further targets."),Object(o.b)("li",{parentName:"ul"},"Add additional LiveData Migrator servers and ",Object(o.b)("a",{parentName:"li",href:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/preparation/get-started"},"LiveData Plane")," servers."),Object(o.b)("li",{parentName:"ul"},"Configure Amazon S3-compatible targets using the ",Object(o.b)("a",{parentName:"li",href:"http://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html"},"Hadoop S3A configuration")," exposed in the UI."),Object(o.b)("li",{parentName:"ul"},"Connect to additional LiveData Migrator or LiveData Plane instances and configure their respective storages.")),Object(o.b)("h3",{id:"configure-source-storage"},"Configure source storage"),Object(o.b)("p",null,"You can can add a new source by performing one of the below actions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Configure the ",Object(o.b)("em",{parentName:"li"},"Unknown source")," on the LiveData Migrator dashboard"),Object(o.b)("li",{parentName:"ul"},'Click the add prompt under "Products" on the LiveData Migrator dashboard'),Object(o.b)("li",{parentName:"ul"},"Click the add source prompt under the LiveData Migrator overview page")),Object(o.b)("p",null,"You can create a source of one of the following three types:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"HDFS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Amazon S3 bucket")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Local filesystem"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"By default, LiveData Migrator will normally detect the HDFS source filesystem (if available) on startup. It will not be detected automatically if Kerberos is enabled or your Hadoop configuration does not contain the information needed to connect to the Hadoop file system."),Object(o.b)("p",{parentName:"div"},"If the automatic detection does not work, ",Object(o.b)("a",{parentName:"p",href:"#source-hdfs-configuration"},"configure the HDFS source filesystem manually"),"."),Object(o.b)("p",{parentName:"div"},"If you want to manually configure a source for LiveData Migrator to use, you must first delete any existing source and add your own."))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you have deleted the automatically discovered HDFS source but want to restore it, you can run ",Object(o.b)("inlineCode",{parentName:"p"},"service livedata-migrator restart"),". Upon restarting, LiveData Migrator will automatically attempt to discover the HDFS source again."))),Object(o.b)("h4",{id:"source-hdfs-configuration"},"Source HDFS configuration"),Object(o.b)("p",null,"If Kerberos is enabled, provide the following details:"),Object(o.b)("p",null,"Configure your source filesystem if Kerberos is enabled or Hadoop configuration is in a non-default location."),Object(o.b)("p",null,"In the Storage panel, select to configure your ",Object(o.b)("em",{parentName:"p"},"Unknown source")," and provide your source HDFS configuration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"File System ID")," - Provide a name for your source storage."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Storage Type")," - The type of filesystem source. Choose ",Object(o.b)("em",{parentName:"li"},"HDFS"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Default FS")," - Provide the ",Object(o.b)("inlineCode",{parentName:"li"},"fs.defaultFS")," value from your HDFS configuration."),Object(o.b)("li",{parentName:"ul"},"Kerberos Configuration",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Kerberos Principal")," - Provide a principal that will map to the ",Object(o.b)("a",{parentName:"li",href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User"},"HDFS super user")," using ",Object(o.b)("a",{parentName:"li",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SecureMode.html#Mapping_from_Kerberos_principals_to_OS_user_accounts"},"auth_to_local")," rules."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Kerberos Keytab Location")," - Provide the path to the Kerberos keytab containing the ",Object(o.b)("strong",{parentName:"li"},"Kerberos Principal"),". This must be accessible to the local system user running the LiveData Migrator service (default is ",Object(o.b)("inlineCode",{parentName:"li"},"hdfs"),")."))),Object(o.b)("li",{parentName:"ul"},"Additional Configuration",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Provide a path to files")," - Provide the directory or directories containing your HDFS configuration (such as the ",Object(o.b)("inlineCode",{parentName:"li"},"core-site.xml")," and ",Object(o.b)("inlineCode",{parentName:"li"},"hdfs-site.xml"),") on your LiveData Migrator host's local filesystem."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Additional Configuration")," (Optional) - Override properties or specify additional properties by adding Key/Value pairs.")))),Object(o.b)("h4",{id:"source-amazon-s3-bucket-configuration"},"Source Amazon S3 bucket configuration"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Amazon S3 buckets as a source are currently supported as a preview feature."))),Object(o.b)("p",null,"To configure an Amazon S3 bucket source for use with LiveData Migrator, provide the following details:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"File System ID")," - Provide a name for your source storage.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Storage Type")," - The type of filesystem source. Choose ",Object(o.b)("em",{parentName:"p"},"AWS S3"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Bucket Name")," - The reference name of the Amazon S3 bucket you are using.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Credentials Provider")," - The Java class name of a credentials provider for authenticating with the S3 endpoint. This is not a required parameter when adding an IBM COS bucket through the UI.\nThe Provider options available include:")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"))),Object(o.b)("p",{parentName:"li"},"Use this provider to offer credentials as an access key and secret access key with the ",Object(o.b)("inlineCode",{parentName:"p"},"--access-key")," and ",Object(o.b)("inlineCode",{parentName:"p"},"--secret-key")," Parameters.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"com.amazonaws.auth.InstanceProfileCredentialsProvider"))),Object(o.b)("p",{parentName:"li"},"Use this provider when running LiveData Migrator on an EC2 instance that has ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html"},"been assigned an IAM role")," with policies that allow it to access the S3 bucket.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"com.amazonaws.auth.DefaultAWSCredentialsProviderChain"))),Object(o.b)("p",{parentName:"li"},"A commonly-used credentials provider chain that looks for credentials in this order:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Environment Variables - ",Object(o.b)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID")," and ",Object(o.b)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY"),", or ",Object(o.b)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY")," and ",Object(o.b)("inlineCode",{parentName:"li"},"AWS_SECRET_KEY"),"."),Object(o.b)("li",{parentName:"ul"},"Java System Properties - ",Object(o.b)("inlineCode",{parentName:"li"},"aws.accessKeyId")," and ",Object(o.b)("inlineCode",{parentName:"li"},"aws.secretKey"),"."),Object(o.b)("li",{parentName:"ul"},"Web Identity Token credentials from the environment or container."),Object(o.b)("li",{parentName:"ul"},"Credential profiles file at the default location (",Object(o.b)("inlineCode",{parentName:"li"},"~/.aws/credentials"),") shared by all AWS SDKs and the AWS CLI."),Object(o.b)("li",{parentName:"ul"},"Credentials delivered through the Amazon EC2 container service if ",Object(o.b)("inlineCode",{parentName:"li"},"AWS_CONTAINER_CREDENTIALS_RELATIVE_URI")," environment variable is set and security manager has permission to access the variable."),Object(o.b)("li",{parentName:"ul"},"Instance profile credentials delivered through the Amazon EC2 metadata service."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Access Key")," (Optional) - When using the ",Object(o.b)("inlineCode",{parentName:"p"},"org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider")," credentials provider, specify the access key with this parameter. This is a required parameter when adding an IBM COS bucket.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Secret Key")," (Optional) - When using the ",Object(o.b)("inlineCode",{parentName:"p"},"org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider")," credentials provider, specify the secret key using this parameter. This is a required parameter when adding an IBM COS bucket.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"S3A Properties")," (Optional) - Override properties or specify additional properties by adding Key/Value pairs.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Migrate Live Events")," - Enabled by default, this setting will allow LiveData Migrator to automatically migrate changes from this source's data to the target storage during a migration. See ",Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/one-time-migration"},"One-Time Migration")," for more information."))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"As an additional step, ensure your account has the ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-basic-examples-of-sqs-policies.html"},"necessary SQS permissions")," to ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/grant-destinations-permissions-to-s3.html#grant-sns-sqs-permission-for-s3"},"access the bucket as storage"),"."),Object(o.b)("p",{parentName:"div"},"For example, configuring an allow rule for ",Object(o.b)("inlineCode",{parentName:"p"},"sqs:*")," will allow all organization users configured with SQS to perform the necessary actions with LiveData Migrator."))),Object(o.b)("h4",{id:"local-filesystem-source-configuration"},"Local filesystem source configuration"),Object(o.b)("p",null,"To configure a local filesystem source for use with LiveData Migrator, provide the following details:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"File System ID")," - Provide a name for your source storage."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Storage Type")," - The type of filesystem source. Choose ",Object(o.b)("em",{parentName:"li"},"Local Filesystem"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Mount Point")," - The directory within the local filesystem to use as the source storage. You can migrate any data contained within the Mount Point directory.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If Kerberos is disabled, and Hadoop configuration is on the host, LiveData Migration will automatically detect the source filesystem on startup."),Object(o.b)("p",{parentName:"div"},"Hadoop should be installed globally on the filesystem to allow LiveData Migrator to access Hadoop configuration during automatic detection. Alternatively, if you're running LiveData Migrator for a single user's environment, Hadoop should be made available to the agent running the service on the PATH environment variable:"),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Systemctl"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"sudo systemctl set-environment PATH=$PATH")))),Object(o.b)("h3",{id:"add-target-storages"},"Add target storages"),Object(o.b)("p",null,"Selecting to configure your ",Object(o.b)("em",{parentName:"p"},"Target")," storage on the Storage panel, see the links below for the configuration needed for each platform:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ADLS Gen2 - The configuration needed will depend on the ",Object(o.b)("strong",{parentName:"li"},"Authentication Type")," chosen:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#mandatory-parameters-2"},"Shared Key")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#mandatory-parameters-1"},"Service Principal (OAuth2)")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#s3a-mandatory-parameters"},"S3 / IBM Cloud Object Storage (S3)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#mandatory-parameters-3"},"Google Cloud Storage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./command-reference/#mandatory-parameters-4"},"HDFS"))),Object(o.b)("h2",{id:"configure-storage-with-the-cli"},"Configure storage with the CLI"),Object(o.b)("h3",{id:"validate-your-source"},"Validate your source"),Object(o.b)("p",null,"LiveData Migrator migrates data from a source filesystem. Validate that the correct source filesystem is registered or delete the existing one (you'll define a new source in the ",Object(o.b)("a",{parentName:"p",href:"#add-file-systems"},"Add File Systems")," step)."),Object(o.b)("p",null,"If Kerberos is enabled or your Hadoop configuration does not contain the information needed to connect to the Hadoop file system, use the ",Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-auto-discover-source-hdfs"},Object(o.b)("inlineCode",{parentName:"a"},"filesystem auto-discover-source hdfs"))," command to provide your Kerberos credentials and auto-discover your source HDFS configuration."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If Kerberos is disabled, and Hadoop configuration is on the host, LiveData Migration will automatically detect the source filesystem on startup."))),Object(o.b)("p",null,"Manage the source filesystem with the following commands:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Command"),Object(o.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#source-clear"},Object(o.b)("inlineCode",{parentName:"a"},"source clear"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Delete all sources")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#source-del"},Object(o.b)("inlineCode",{parentName:"a"},"source del"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Delete a source")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#source-fs-show"},Object(o.b)("inlineCode",{parentName:"a"},"source fs show"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Show the source FileSystem configuration")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-auto-discover-source-hdfs"},Object(o.b)("inlineCode",{parentName:"a"},"filesystem auto-discover-source hdfs"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Provide your Kerberos credentials to access your source HDFS configuration")))),Object(o.b)("h3",{id:"add-file-systems"},"Add file systems"),Object(o.b)("p",null,"Add file systems to provide LiveData Migrator with the information needed to read content from your source and migrate content to your target."),Object(o.b)("p",null,"A range of different file system types are supported as targets, including ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction"},"ADLS Gen 2"),", ",Object(o.b)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"},"HDFS"),", ",Object(o.b)("a",{parentName:"p",href:"https://cloud.google.com/storage"},"GCS"),", and ",Object(o.b)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html"},"S3A"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"LiveData Migrator currently supports HDFS as a migration source."),Object(o.b)("p",{parentName:"div"},"If your source file system was not discovered automatically or you wish to assign a new source file system, use the ",Object(o.b)("inlineCode",{parentName:"p"},"--source")," parameter with the ",Object(o.b)("inlineCode",{parentName:"p"},"filesystem add hdfs")," command to add a suitable HDFS source file system."))),Object(o.b)("p",null,"You can define multiple target file systems, which you can migrate to at the same time."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Command"),Object(o.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-add-adls2-oauth"},Object(o.b)("inlineCode",{parentName:"a"},"filesystem add adls2 oauth"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Add an ADLS Gen 2 filesystem resource using a service principal and oauth credentials")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-add-adls2-sharedkey"},Object(o.b)("inlineCode",{parentName:"a"},"filesystem add adls2 sharedKey"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Add an ADLS Gen 2 filesystem resource using access key credentials")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-add-gcs"},Object(o.b)("inlineCode",{parentName:"a"},"filesystem add gcs"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Add a Google Cloud Storage filesystem resource")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-add-hdfs"},Object(o.b)("inlineCode",{parentName:"a"},"filesystem add hdfs"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Add an HDFS resource")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-add-s3a"},Object(o.b)("inlineCode",{parentName:"a"},"filesystem add s3a"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Add an S3 filesystem resource (choose this when using IBM COS)")))),Object(o.b)("h3",{id:"manage-file-systems"},"Manage file systems"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Command"),Object(o.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-clear"},Object(o.b)("inlineCode",{parentName:"a"},"filesystem clear"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Delete all target file systems")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-del"},Object(o.b)("inlineCode",{parentName:"a"},"filesystem del"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Delete a target file system")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-list"},Object(o.b)("inlineCode",{parentName:"a"},"filesystem list"))),Object(o.b)("td",{parentName:"tr",align:"left"},"List of target file systems")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-show"},Object(o.b)("inlineCode",{parentName:"a"},"filesystem show"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Get target file system details")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-types"},Object(o.b)("inlineCode",{parentName:"a"},"filesystem types"))),Object(o.b)("td",{parentName:"tr",align:"left"},"List the types of target file systems available")))),Object(o.b)("h2",{id:"configure-storage-for-one-time-migrations"},"Configure storage for one-time migrations"),Object(o.b)("p",null,"It's possible to create a source filesystem that is not tracked by LiveData Migrator for changes during a migration. Migrations created from this type of source will become ",Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/one-time-migration"},"one-time migrations")," by default. Note that it is not necessary to create a file storage of this type to create a one-time migration."),Object(o.b)("h3",{id:"create-storage-for-one-time-migrations-with-the-ui"},"Create storage for one-time migrations with the UI"),Object(o.b)("p",null,"To create a source filesystem for a one-time migration, uncheck the ",Object(o.b)("strong",{parentName:"p"},"Migrate Live Events")," box when you configure the storage. When creating a migration from the UI from the storage created, the UI will uncheck the ",Object(o.b)("strong",{parentName:"p"},"live migration")," option and prevent it from being enabled."),Object(o.b)("h3",{id:"create-storage-for-one-time-migrations-with-the-cli"},"Create storage for one-time migrations with the CLI"),Object(o.b)("p",null,"LiveData Migrator will only perform ",Object(o.b)("em",{parentName:"p"},"read")," tasks on a source filesystem created for one-time migrations. It will not check the source storage for modifications to data during transfer. Any migration that uses the source storage will automatically become a one-time migration, and will have the ",Object(o.b)("inlineCode",{parentName:"p"},"scanOnly")," flag applied."),Object(o.b)("p",null,"To create a source for one-time migrations, add the ",Object(o.b)("inlineCode",{parentName:"p"},"scanOnly")," flag during source creation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:'language-text="Code"'},"filesystem add hdfs --source --scanOnly ...\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The account used to connect to a source storage intended for one-time migrations only requires read access. Write access is not necessary."))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"Once you have your source and target storage configured, you're ready to ",Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/create-migration"},"migrate data"),". If you want migrate data to a different path on your target filesystem, ",Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/create-path-mappings"},"create path mappings")," first."),Object(o.b)("p",null,"If you want to exclude specific file sizes or file names from your data migrations, ",Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/configure-exclusions"},"define exclusions"),"."))}d.isMDXComponent=!0},237:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(a),p=n,u=b["".concat(i,".").concat(p)]||b[p]||m[p]||o;return a?r.a.createElement(u,c(c({ref:t},l),{},{components:a})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);