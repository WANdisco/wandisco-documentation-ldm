(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var i=a(3),n=a(7),o=(a(0),a(204)),r={id:"operation-ui",title:"Using LiveData Migrator with the UI",sidebar_label:"UI"},l={unversionedId:"operation-ui",id:"version-1.8.3/operation-ui",isDocsHomePage:!1,title:"Using LiveData Migrator with the UI",description:"The UI can manage multiple LiveData Migrators as well as LiveData Plane from one convenient interface. It is designed to be intuitive and contains on-screen instructions to help you perform migrations and configuration tasks successfully.",source:"@site/versioned_docs/version-1.8.3/operation-ui.md",slug:"/operation-ui",permalink:"/wandisco-documentation-ldm/docs/1.8.3/operation-ui",version:"1.8.3",sidebar_label:"UI",sidebar:"version-1.8.3/someSidebar",previous:{title:"Install LiveData Migrator",permalink:"/wandisco-documentation-ldm/docs/1.8.3/installation"},next:{title:"Using LiveData Migrator with the CLI",permalink:"/wandisco-documentation-ldm/docs/1.8.3/operation-cli"}},s=[{value:"Before you start",id:"before-you-start",children:[{value:"Register",id:"register",children:[]},{value:"Upgrade your license",id:"upgrade-your-license",children:[]}]},{value:"How the UI works",id:"how-the-ui-works",children:[{value:"License information",id:"license-information",children:[]},{value:"Bandwidth usage",id:"bandwidth-usage",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Rules and Migrations",id:"rules-and-migrations",children:[]},{value:"Notifications",id:"notifications",children:[]}]},{value:"Configure storage",id:"configure-storage",children:[{value:"Configure source storage",id:"configure-source-storage",children:[]},{value:"Add target storages",id:"add-target-storages",children:[]}]},{value:"Configure exclusions",id:"configure-exclusions",children:[{value:"Add new exclusions",id:"add-new-exclusions",children:[]},{value:"Remove exclusions from the templates list",id:"remove-exclusions-from-the-templates-list",children:[]}]},{value:"Migrate data",id:"migrate-data",children:[{value:"Create migrations",id:"create-migrations",children:[]},{value:"Manage migrations",id:"manage-migrations",children:[]}]},{value:"Bandwidth management",id:"bandwidth-management",children:[]}],c={toc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The UI can manage multiple LiveData Migrators as well as LiveData Plane from one convenient interface. It is designed to be intuitive and contains on-screen instructions to help you perform migrations and configuration tasks successfully."),Object(o.b)("p",null,"If you're new to the concept of LiveData, or want to know what LiveData Migrator does, see the ",Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.8.3/about"},"introduction to LiveData Migrator")," before learning ",Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.8.3/installation"},"how to install")," and use LiveData Migrator."),Object(o.b)("h2",{id:"before-you-start"},"Before you start"),Object(o.b)("p",null,"The UI is available on port 8081 on your LiveData Migrator host. For example, if you were running LiveData Migrator on a host named ",Object(o.b)("inlineCode",{parentName:"p"},"myldmhost.example.com"),", the URL would be:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"http://myldmhost.example.com:8081\n")),Object(o.b)("h3",{id:"register"},"Register"),Object(o.b)("p",null,"You'll be asked to register a LiveData Migrator account the first time you use the UI. Fill in the registration form to create your user account."),Object(o.b)("p",null,"Internet access from the host is not required, but when it is available, you'll be sent confirmation of your registration. We'll use your registration information to send you important information about your LiveData Migrator account, such as a reminder before your license expires. You can also opt in to receive additional product updates."),Object(o.b)("h3",{id:"upgrade-your-license"},"Upgrade your license"),Object(o.b)("p",null,"If you want to upgrade to a full license before you start using LiveData Migrator, follow these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Upgrade License"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click the option to purchase a license now. Follow the provided instructions to get your license."),Object(o.b)("p",{parentName:"li"},"Once your license has been sent, ensure it is available on your local machine.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Upload your new license.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check the ",Object(o.b)("strong",{parentName:"p"},"License Information")," window and ensure that your new data limit has been applied."),Object(o.b)("p",{parentName:"li"},"The License panel also displays the expiry date. We'll notify you when it's time to renew your license."))),Object(o.b)("h2",{id:"how-the-ui-works"},"How the UI works"),Object(o.b)("p",null,"The UI has four main panels and a Notification system."),Object(o.b)("h3",{id:"license-information"},"License information"),Object(o.b)("p",null,"Use the License information panel to see current license information (including warnings if the product is approaching license limits), and uploading a new license."),Object(o.b)("h3",{id:"bandwidth-usage"},"Bandwidth usage"),Object(o.b)("p",null,"The Bandwidth panel shows how much bandwidth LiveData Migrator is currently using to migrate data. It shows this over the most recent 5 minute period and continually updates. The left axis scales automatically to accommodate the highest throughput during that period."),Object(o.b)("h3",{id:"storage"},"Storage"),Object(o.b)("p",null,"The Storage panel shows the underlying storage used by LiveData Migrator as either a source or target. LiveData Migrator supports one source and one or more targets. Each storage displays its associated processes, such as which LiveData Migrator is used to access it."),Object(o.b)("p",null,"Use the Storage panel to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"View and configure the source and target storages"),Object(o.b)("li",{parentName:"ul"},"Add further targets"),Object(o.b)("li",{parentName:"ul"},"Add additional LiveData Migrator servers and ",Object(o.b)("a",{parentName:"li",href:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/preparation/get-started"},"LiveData Plane")," servers")),Object(o.b)("p",null,"For more information about sources and targets, see the ",Object(o.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.8.3/about"},"introduction to LiveData Migrator"),"."),Object(o.b)("h3",{id:"rules-and-migrations"},"Rules and Migrations"),Object(o.b)("p",null,"The Rules and Migrations panel in LiveData Migrator shows migrations and their progress. If the UI also manages LiveData Plane, the panel will also show rules."),Object(o.b)("p",null,"Use the Rules and Migrations panel to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add further migrations or rules"),Object(o.b)("li",{parentName:"ul"},"View more detail about existing rules and migrations")),Object(o.b)("h3",{id:"notifications"},"Notifications"),Object(o.b)("p",null,"The bell icon in the top-right of the UI is where you'll receive notifications about errors, warnings, or important milestones in your usage."),Object(o.b)("h2",{id:"configure-storage"},"Configure storage"),Object(o.b)("p",null,"Configure your storages to define at least one source and at least one target to migrate data. LiveData Migrator will connect to these storages for migration."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Supported sources are: ",Object(o.b)("strong",{parentName:"li"},"HDFS")),Object(o.b)("li",{parentName:"ul"},"Supported targets are: ",Object(o.b)("strong",{parentName:"li"},"ADLS Gen2"),", ",Object(o.b)("strong",{parentName:"li"},"S3"),", ",Object(o.b)("strong",{parentName:"li"},"Google Cloud Storage"),", and ",Object(o.b)("strong",{parentName:"li"},"IBM Cloud Object Storage (S3)"))),Object(o.b)("p",null,"You can also use the Storage panel to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Configure S3-compatible Targets using the ",Object(o.b)("a",{parentName:"li",href:"http://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html"},"Hadoop S3A configuration")," exposed in the UI."),Object(o.b)("li",{parentName:"ul"},"Connect to additional LiveData Migrator or LiveData Plane instances and configure their respective storages.")),Object(o.b)("h3",{id:"configure-source-storage"},"Configure source storage"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The source file system is normally detected on startup. It will not be detected automatically if Kerberos is enabled or your Hadoop configuration does not contain the information needed to connect to the Hadoop file system."))),Object(o.b)("p",null,"If Kerberos is enabled, on the ",Object(o.b)("a",{parentName:"p",href:"#storage"},"Storage")," panel, select to configure your ",Object(o.b)("em",{parentName:"p"},"Unknown source")," and provide your source HDFS configuration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"File System ID")," - Provide a name for your source storage."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Default FS")," - Provide the ",Object(o.b)("inlineCode",{parentName:"li"},"fs.defaultFS")," value from your HDFS configuration."),Object(o.b)("li",{parentName:"ul"},"Kerberos Configuration",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Kerberos Principal")," - Provide a principal that will map to the ",Object(o.b)("a",{parentName:"li",href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User"},"HDFS super user")," using ",Object(o.b)("a",{parentName:"li",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SecureMode.html#Mapping_from_Kerberos_principals_to_OS_user_accounts"},"auth_to_local")," rules."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Kerberos Keytab Location")," - Provide the path to the Kerberos keytab containing the ",Object(o.b)("strong",{parentName:"li"},"Kerberos Principal"),". This must be accessible to the local system user running the LiveData Migrator service (default is ",Object(o.b)("inlineCode",{parentName:"li"},"hdfs"),")."))),Object(o.b)("li",{parentName:"ul"},"Additional Configuration",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Provide a path to files")," - Provide the directory or directories containing your HDFS configuration (such as the ",Object(o.b)("inlineCode",{parentName:"li"},"core-site.xml")," and ",Object(o.b)("inlineCode",{parentName:"li"},"hdfs-site.xml"),") on your LiveData Migrator host's local filesystem."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Additional Configuration")," (Optional) - Override properties or specify additional properties by adding Key/Value pairs.")))),Object(o.b)("h3",{id:"add-target-storages"},"Add target storages"),Object(o.b)("p",null,"Selecting to configure your ",Object(o.b)("em",{parentName:"p"},"Target")," storage on the ",Object(o.b)("a",{parentName:"p",href:"#storage"},"Storage")," panel, see the links below for the configuration needed for each platform:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ADLS Gen2 - The configuration needed will depend on the ",Object(o.b)("strong",{parentName:"li"},"Authentication Type")," chosen:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/1.8.3/command-reference#mandatory-parameters-2"},"Shared Key")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/1.8.3/command-reference#mandatory-parameters-1"},"Service Principal (OAuth2)")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/1.8.3/command-reference#mandatory-parameters-5"},"S3 / IBM Cloud Object Storage (S3)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/1.8.3/command-reference#mandatory-parameters-3"},"Google Cloud Storage"))),Object(o.b)("h2",{id:"configure-exclusions"},"Configure exclusions"),Object(o.b)("p",null,"Define exclusions to exclude certain file sizes or file names (defined using ",Object(o.b)("a",{parentName:"p",href:"https://regexr.com/"},"regex")," patterns) during a migration. These templates are associated with a storage, allowing you to selectively ignore content during migration when that storage is used as the source."),Object(o.b)("p",null,"Assign exclusions to new or existing migrations."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Default exclusions will automatically apply to certain storages depending on the platform. For example, ADLS storage types have a maximum individual file size limit of 4.55TiB."))),Object(o.b)("h3",{id:"add-new-exclusions"},"Add new exclusions"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In the ",Object(o.b)("strong",{parentName:"li"},"Storages")," list on the dashboard, click the settings for the appropriate storage."),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"LiveData Migrator")," under the ",Object(o.b)("em",{parentName:"li"},"Processes")," list to display the exclusion templates."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Add Exclusion Template")," to associate the exclusion with the selected storage and enter the parameters for the exclusion:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Exclusion type")," - ",Object(o.b)("em",{parentName:"li"},"Regex"),", ",Object(o.b)("em",{parentName:"li"},"File Size"),", or ",Object(o.b)("em",{parentName:"li"},"Date"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Name")," - The name given to the exclusion template (for example: ",Object(o.b)("inlineCode",{parentName:"li"},"100gbfilelimit"),")."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Description"),' - A brief description of what the exclusion is doing. For example: "',Object(o.b)("em",{parentName:"li"},"Files larger than 100GB are excluded"),'").'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"File Size")," = ",Object(o.b)("strong",{parentName:"li"},"Value / Unit")," - The value and unit for the file size limit (for example: ",Object(o.b)("inlineCode",{parentName:"li"},"100")," ",Object(o.b)("inlineCode",{parentName:"li"},"GB"),")."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Regex")," = ",Object(o.b)("strong",{parentName:"li"},"Regex")," - The regex pattern to be used for the filename exclusion (for example: ",Object(o.b)("inlineCode",{parentName:"li"},"/**/.hive-staging**"),")."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Date")," = ",Object(o.b)("strong",{parentName:"li"},"Select Date")," - Any files that have been modified before the specified date will be excluded during migrations.")))),Object(o.b)("p",null,"Once the exclusion is added and passed validation, it appears on the exclusion list."),Object(o.b)("h3",{id:"remove-exclusions-from-the-templates-list"},"Remove exclusions from the templates list"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In the ",Object(o.b)("strong",{parentName:"li"},"Storages")," list on the dashboard, click the settings for the appropriate storage."),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"LiveData Migrator")," under the ",Object(o.b)("em",{parentName:"li"},"Processes")," list to display the exclusion templates."),Object(o.b)("li",{parentName:"ol"},"Click the trash icon.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This will not remove the exclusion from an existing migration. See the ",Object(o.b)("a",{parentName:"p",href:"#remove-exclusions-from-an-existing-migration"},"Remove exclusions from an existing migration")," section for guidance on how to do this."))),Object(o.b)("h2",{id:"migrate-data"},"Migrate data"),Object(o.b)("h3",{id:"create-migrations"},"Create migrations"),Object(o.b)("p",null,"Migrations transfer existing data from the defined source to a target. LiveData Migrator migrates any changes made to the source data while it is being migrated and ensures that the target is up to date with those changes. It does this while continuing to perform the migration."),Object(o.b)("p",null,"You will typically create multiple migrations so that you can select specific content from your source storage by Path. You can also migrate to multiple independent storages at the same time by defining multiple migration resources."),Object(o.b)("p",null,"To create a migration:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Choose a source and target from previously defined ",Object(o.b)("a",{parentName:"li",href:"#configure-storage"},"storages"),"."),Object(o.b)("li",{parentName:"ol"},"Choose the Path to set the scope of the migration."),Object(o.b)("li",{parentName:"ol"},"Enable the ",Object(o.b)("strong",{parentName:"li"},"Auto-start migration")," option if you want to start the migration immediately after creation.",Object(o.b)("br",{parentName:"li"}),"Migrations can be started at a later point when ",Object(o.b)("a",{parentName:"li",href:"#view-migrations"},"viewing migration details"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#assign-exclusions-to-a-new-migration"},"Apply any exclusions")," to reduce the scope within this Path."),Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("strong",{parentName:"li"},"Overwrite")," or ",Object(o.b)("strong",{parentName:"li"},"Skip if Size Match")," setting for the migration.  ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Skip if Size Match")," - If the file size is identical between the source and target, the file is skipped. If it\u2019s a different size, the whole file is replaced."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Overwrite")," - Everything is replaced, even if the file size is identical.")))),Object(o.b)("p",null,"If you've already migrated some data from the same source to the same target, you can choose whether to overwrite all the content (Overwrite) or only migrate new content that isn't already there (Skip if Size Match)."),Object(o.b)("h4",{id:"assign-exclusions-to-a-new-migration"},"Assign exclusions to a new migration"),Object(o.b)("p",null,"Adding exclusions to a new migration ensures the outcome is consistent with the chosen exclusions."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In the new migration page, click ",Object(o.b)("strong",{parentName:"li"},"Add new exclusion")),Object(o.b)("li",{parentName:"ol"},"Select the appropriate exclusion template from the drop-down list.")),Object(o.b)("p",null,"The exclusion appears in the list, and can be removed before the migration is started."),Object(o.b)("h3",{id:"manage-migrations"},"Manage migrations"),Object(o.b)("h4",{id:"view-migrations"},"View migrations"),Object(o.b)("p",null,"The Dashboard displays an overview of migrations and their status, showing what pre-existing data has been moved and data added since the migration started."),Object(o.b)("p",null,"Click to View migration to see more detail."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"A migration must be stopped before it can be deleted. A stopped migration can not be resumed."))),Object(o.b)("h4",{id:"assign-exclusions-to-an-existing-migration"},"Assign exclusions to an existing migration"),Object(o.b)("p",null,"Adding exclusions to an existing migration will change the future actions performed for that migration, but will not affect previously migrated content."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In the dashboard, select an ongoing migration to view its ",Object(o.b)("strong",{parentName:"li"},"Exclusions"),"."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Add")," and select the appropriate exclusion template from the drop-down list.")),Object(o.b)("h4",{id:"remove-exclusions-from-an-existing-migration"},"Remove exclusions from an existing migration"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In the dashboard, select an ongoing migration to view its ",Object(o.b)("strong",{parentName:"li"},"Exclusions"),"."),Object(o.b)("li",{parentName:"ol"},"Remove any of the exclusions one at a time.")),Object(o.b)("h2",{id:"bandwidth-management"},"Bandwidth management"),Object(o.b)("p",null,"By default, LiveData Migrator will use all network bandwidth available to the server unless a specific limit is applied."),Object(o.b)("p",null,"To apply a bandwidth limit between the source and target storage(s), follow the steps below:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In the ",Object(o.b)("strong",{parentName:"li"},"Storages")," list on the dashboard, click the settings for the appropriate storage."),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"Bandwidth Management")," under the ",Object(o.b)("em",{parentName:"li"},"Grouping")," list."),Object(o.b)("li",{parentName:"ol"},"Uncheck the ",Object(o.b)("strong",{parentName:"li"},"Unlimited")," option."),Object(o.b)("li",{parentName:"ol"},"Define the ",Object(o.b)("strong",{parentName:"li"},"Maximum bandwidth limit")," and ",Object(o.b)("strong",{parentName:"li"},"Unit")," (for example: MiB/s), and click ",Object(o.b)("strong",{parentName:"li"},"Apply"),".")),Object(o.b)("p",null,"You will need to define a bandwidth limit for each LiveData Migrator server (if you have more than one)."))}b.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var i=a(0),n=a.n(i);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(a),p=i,u=d["".concat(r,".").concat(p)]||d[p]||m[p]||o;return a?n.a.createElement(u,l(l({ref:t},c),{},{components:a})):n.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);