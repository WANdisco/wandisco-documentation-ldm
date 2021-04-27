(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(203)),o={id:"operation-cli",title:"Using LiveData Migrator with the CLI",sidebar_label:"CLI"},c={unversionedId:"operation-cli",id:"version-1.4.7/operation-cli",isDocsHomePage:!1,title:"Using LiveData Migrator with the CLI",description:"You can use the command line interface (CLI) to create and manage resources that control your migrations in LiveData Migrator.",source:"@site/versioned_docs/version-1.4.7/operation-cli.md",slug:"/operation-cli",permalink:"/wandisco-documentation-ldm/docs/1.4.7/operation-cli",version:"1.4.7",sidebar_label:"CLI",sidebar:"version-1.4.7/someSidebar",previous:{title:"Using LiveData Migrator with the UI",permalink:"/wandisco-documentation-ldm/docs/1.4.7/operation-ui"},next:{title:"Configuration",permalink:"/wandisco-documentation-ldm/docs/1.4.7/configuration"}},l=[{value:"Before you start",id:"before-you-start",children:[{value:"Log in",id:"log-in",children:[]},{value:"Use authorized SSH keys",id:"use-authorized-ssh-keys",children:[]}]},{value:"LiveData Migrator commands",id:"livedata-migrator-commands",children:[{value:"Built-in commands",id:"built-in-commands",children:[]},{value:"Command line help",id:"command-line-help",children:[]}]},{value:"Configure storage",id:"configure-storage",children:[{value:"Validate your source",id:"validate-your-source",children:[]},{value:"Add file systems",id:"add-file-systems",children:[]},{value:"Manage file systems",id:"manage-file-systems",children:[]}]},{value:"Configure exclusions",id:"configure-exclusions",children:[{value:"Define exclusions",id:"define-exclusions",children:[]},{value:"Manage exclusions",id:"manage-exclusions",children:[]}]},{value:"Migrate data",id:"migrate-data",children:[{value:"Create migrations",id:"create-migrations",children:[]},{value:"Manage migrations",id:"manage-migrations",children:[]},{value:"Migration states",id:"migration-states",children:[]}]},{value:"Using the LiveData Migrator jar",id:"using-the-livedata-migrator-jar",children:[]}],s={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can use the command line interface (CLI) to create and manage resources that control your migrations in LiveData Migrator."),Object(i.b)("p",null,"If you're new to the concept of LiveData, or want to know what LiveData Migrator does, see the ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.4.7/about"},"introduction to LiveData Migrator")," before learning ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.4.7/installation"},"how to install")," and use LiveData Migrator."),Object(i.b)("h2",{id:"before-you-start"},"Before you start"),Object(i.b)("p",null,"To start using LiveData Migrator with the CLI, you'll need to configure management access using SSH."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Edit the SSH access properties in the ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/wandisco/livedata-migrator/application.properties")," file to adjust to your requirements. Refer to the ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.4.7/configuration#ssh-access"},"SSH access")," section for details about the required properties.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Restart the LiveData Migrator service to make any configuration changes live:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"service livedata-migrator restart")))),Object(i.b)("h3",{id:"log-in"},"Log in"),Object(i.b)("p",null,"Log in with the default credentials of user ",Object(i.b)("inlineCode",{parentName:"p"},"user"),"  with the password ",Object(i.b)("inlineCode",{parentName:"p"},"password")," on port ",Object(i.b)("inlineCode",{parentName:"p"},"2222"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example"',title:'"Example"'},"$ ssh user@localhost -p 2222\nPassword authentication\nPassword: password\n")),Object(i.b)("p",null,"This starts LiveData Migrator and the action prompt appears."),Object(i.b)("h3",{id:"use-authorized-ssh-keys"},"Use authorized SSH keys"),Object(i.b)("p",null,"Configure the LiveData Migrator service to use authorized SSH keys instead of a password:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Comment out the ",Object(i.b)("inlineCode",{parentName:"li"},"ssh.shell.password")," configuration property so that password access is disabled."),Object(i.b)("li",{parentName:"ol"},"Specify an authorized keys file with ",Object(i.b)("inlineCode",{parentName:"li"},"ssh.shell.authorized-public-keys-file")," to allow access from authorized clients that hold a matching private key."),Object(i.b)("li",{parentName:"ol"},"Restart the LiveData Migrator service afterwards:",Object(i.b)("br",{parentName:"li"}),Object(i.b)("inlineCode",{parentName:"li"},"service livedata-migrator restart"))),Object(i.b)("h2",{id:"livedata-migrator-commands"},"LiveData Migrator commands"),Object(i.b)("p",null,"Use the following commands to manage resources and migrate data with the LiveData Migrator CLI. Follow the links to learn the  mandatory and optional parameters, and see examples."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#source-commands"},Object(i.b)("strong",{parentName:"a"},"Source")),": Manage your source file system.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#file-system-commands"},Object(i.b)("strong",{parentName:"a"},"Filesystem")),": Create and manage file systems (storages) and define them as the source or target of migrations.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#exclusion-commands"},Object(i.b)("strong",{parentName:"a"},"Exclusion")),": Constrain the content migrated by creating and referencing exclusions during a migration. Exclusion constrain content by file size or by a regular expression match against a file name.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#migration-commands"},Object(i.b)("strong",{parentName:"a"},"Migration")),": A migration references the source and target file systems. Specify the source file system directory path for content to be migrated from, and include any exclusions as needed."))),Object(i.b)("p",null,"See the ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference"},"Command Reference")," page for a full list of LiveData Migrator commands and parameters."),Object(i.b)("h3",{id:"built-in-commands"},"Built-in commands"),Object(i.b)("p",null,"The built-in commands are always available in a LiveData Migrator command line interactive session. They are unrelated to migration resources and operation (other than ",Object(i.b)("inlineCode",{parentName:"p"},"exit"),"/",Object(i.b)("inlineCode",{parentName:"p"},"quit"),"), but help you to interact with LiveData Migrator and automate processing through scripts for the action prompt."),Object(i.b)("p",null,"See the ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#built-in-commands"},"Built-In Commands")," section in Command Reference for further details of the available commands."),Object(i.b)("h3",{id:"command-line-help"},"Command line help"),Object(i.b)("p",null,"Find a full list of commands that can be used at the action prompt with the ",Object(i.b)("inlineCode",{parentName:"p"},"help")," command. Get command specific help by typing ",Object(i.b)("inlineCode",{parentName:"p"},"help <command>")," for each command available."),Object(i.b)("p",null,"Type the ",Object(i.b)("inlineCode",{parentName:"p"},"<tab>")," key if you are uncertain whether a command requires an additional parameter, or if you need to provide a specific value. It will help auto-complete parameter values, and display options available for any command."),Object(i.b)("h2",{id:"configure-storage"},"Configure storage"),Object(i.b)("h3",{id:"validate-your-source"},"Validate your source"),Object(i.b)("p",null,"LiveData Migrator migrates data from a source file system. Validate that the correct source file system is registered or delete the existing one (you'll define a new source in the ",Object(i.b)("a",{parentName:"p",href:"#add-file-systems"},"Add File Systems")," step)."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The source file system is normally detected on startup. It will not be detected automatically if your Hadoop configuration does not contain the information needed to connect to the Hadoop file system."))),Object(i.b)("p",null,"You can manage the source file system through these commands."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Command"),Object(i.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#source-clear"},Object(i.b)("inlineCode",{parentName:"a"},"source clear"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Delete all sources")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#source-del"},Object(i.b)("inlineCode",{parentName:"a"},"source del"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Delete a source")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#source-fs-show"},Object(i.b)("inlineCode",{parentName:"a"},"source fs show"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Show the source FileSystem configuration")))),Object(i.b)("h3",{id:"add-file-systems"},"Add file systems"),Object(i.b)("p",null,"Add file systems to provide LiveData Migrator with the information needed to read content from your source and migrate content to your target."),Object(i.b)("p",null,"A range of different file system types are supported as targets, including ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction"},"ADLS Gen 2"),", ",Object(i.b)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"},"HDFS"),", and ",Object(i.b)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html"},"S3A"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"LiveData Migrator currently supports HDFS file systems as a migration source."),Object(i.b)("p",{parentName:"div"},"If your source file system was not discovered automatically or you wish to assign a new source file system, use the ",Object(i.b)("inlineCode",{parentName:"p"},"--source")," parameter with the ",Object(i.b)("inlineCode",{parentName:"p"},"filesystem add hdfs")," command to add a suitable HDFS source file system."))),Object(i.b)("p",null,"You can define multiple target file systems, which you can migrate to at the same time."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Although present when invoking the ",Object(i.b)("inlineCode",{parentName:"p"},"help")," command, Google Cloud Storage and Local Filesystem functionality is not yet available. This will be coming soon in a future release."))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Command"),Object(i.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#filesystem-add-adls2-sharedkey"},Object(i.b)("inlineCode",{parentName:"a"},"filesystem add adls2 sharedKey"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Add an ADLS Gen 2 file system resource")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#filesystem-add-hdfs"},Object(i.b)("inlineCode",{parentName:"a"},"filesystem add hdfs"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Add a Hadoop HDFS file system resource")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#filesystem-add-s3a"},Object(i.b)("inlineCode",{parentName:"a"},"filesystem add s3a"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Add an S3 file system resource")))),Object(i.b)("h3",{id:"manage-file-systems"},"Manage file systems"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Command"),Object(i.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#filesystem-clear"},Object(i.b)("inlineCode",{parentName:"a"},"filesystem clear"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Delete all target file systems")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#filesystem-del"},Object(i.b)("inlineCode",{parentName:"a"},"filesystem del"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Delete a target file system")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#filesystem-list"},Object(i.b)("inlineCode",{parentName:"a"},"filesystem list"))),Object(i.b)("td",{parentName:"tr",align:"left"},"List of target file systems")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#filesystem-show"},Object(i.b)("inlineCode",{parentName:"a"},"filesystem show"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Get target file system details")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#filesystem-types"},Object(i.b)("inlineCode",{parentName:"a"},"filesystem types"))),Object(i.b)("td",{parentName:"tr",align:"left"},"List the types of target file systems available")))),Object(i.b)("h2",{id:"configure-exclusions"},"Configure exclusions"),Object(i.b)("p",null,"Exclusions constrain content migrated from a source file system. Adding exclusions to an existing migration will change the future actions performed for that migration, but will not affect previously migrated content."),Object(i.b)("h3",{id:"define-exclusions"},"Define exclusions"),Object(i.b)("p",null,"Define exclusions so you can apply them to migrations."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Command"),Object(i.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#exclusion-add-file-size"},Object(i.b)("inlineCode",{parentName:"a"},"exclusion add file-size"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Create a new file size rule")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#exclusion-add-regex"},Object(i.b)("inlineCode",{parentName:"a"},"exclusion add regex"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Create a new regex exclusion rule")))),Object(i.b)("h3",{id:"manage-exclusions"},"Manage exclusions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Command"),Object(i.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#exclusion-del"},Object(i.b)("inlineCode",{parentName:"a"},"exclusion del"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Delete an exclusion rule")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#exclusion-list"},Object(i.b)("inlineCode",{parentName:"a"},"exclusion list"))),Object(i.b)("td",{parentName:"tr",align:"left"},"List all exclusion rules")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#exclusion-show"},Object(i.b)("inlineCode",{parentName:"a"},"exclusion show"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Get details for a particular exclusion rule")))),Object(i.b)("h2",{id:"migrate-data"},"Migrate data"),Object(i.b)("h3",{id:"create-migrations"},"Create migrations"),Object(i.b)("p",null,"Migrate data from your source file system to a target defined using the ",Object(i.b)("inlineCode",{parentName:"p"},"migration")," command. Migrations will transfer existing data, as well as any subsequent changes made to the source data (in its scope), while LiveData Migrator remains in operation."),Object(i.b)("p",null,"You will typically create multiple migrations so that you can select specific content from your source file system by path/directory. It is also possible to migrate to multiple independent file systems at the same time by defining multiple migration resources."),Object(i.b)("p",null,"Follow the command links to learn how to set the parameters and see examples."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a new migration:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#migration-new"},Object(i.b)("inlineCode",{parentName:"a"},"migration new"))),Object(i.b)("p",{parentName:"li"},"Apply the ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#optional-parameters-4"},Object(i.b)("inlineCode",{parentName:"a"},"--auto-start"))," parameter if you would like the migration to start right away.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you don't have auto-start enabled, manually start the migration:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#migration-run"},Object(i.b)("inlineCode",{parentName:"a"},"migration run"))))),Object(i.b)("h3",{id:"manage-migrations"},"Manage migrations"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Command"),Object(i.b)("th",{parentName:"tr",align:"left"},"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#migration-stop"},Object(i.b)("inlineCode",{parentName:"a"},"migration stop"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Stop a migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#migration-del"},Object(i.b)("inlineCode",{parentName:"a"},"migration del"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Delete a migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#migration-exclusion-add"},Object(i.b)("inlineCode",{parentName:"a"},"migration exclusion add"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Add an exclusion to a migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#migration-exclusion-del"},Object(i.b)("inlineCode",{parentName:"a"},"migration exclusion del"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Remove an exclusion from a migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#migration-list"},Object(i.b)("inlineCode",{parentName:"a"},"migration list"))),Object(i.b)("td",{parentName:"tr",align:"left"},"List running and active migrations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#migration-run"},Object(i.b)("inlineCode",{parentName:"a"},"migration run"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Start a migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#migration-show"},Object(i.b)("inlineCode",{parentName:"a"},"migration show"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Get migration details")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/wandisco-documentation-ldm/docs/1.4.7/command-reference#status"},Object(i.b)("inlineCode",{parentName:"a"},"status"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Get migration status")))),Object(i.b)("h3",{id:"migration-states"},"Migration states"),Object(i.b)("p",null,"Migrations can be in one of eight states:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"NONSCHEDULED"),"\n: A ",Object(i.b)("em",{parentName:"p"},"non-scheduled migration")," has been defined but not yet started. Create a migration in this state by not specifying the ",Object(i.b)("inlineCode",{parentName:"p"},"--auto-start")," parameter on creation."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"SCHEDULED"),"\n: A ",Object(i.b)("em",{parentName:"p"},"scheduled")," migration will start when directed to run."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"STARTING"),"\n: A ",Object(i.b)("em",{parentName:"p"},"starting")," migration is being started and will soon begin transferring content to the target."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"RUNNING"),"\n: A ",Object(i.b)("em",{parentName:"p"},"running")," migration is scanning through source content and transferring content to the target, as well as responding to change notifications from the source if applicable."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"LIVE"),"\n: A ",Object(i.b)("em",{parentName:"p"},"live")," migration has completed scanning through source content, continues to respond to change notifications from the source, and will transfer content to and make changes in the target as required."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PAUSING"),"\n: A ",Object(i.b)("em",{parentName:"p"},"pausing")," migration has been instructed to pause transfer, but is temporarily continuing to make changes to the target."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PAUSED"),"\n: A ",Object(i.b)("em",{parentName:"p"},"paused")," migration has been instructed to pause transfer, and is not transferring content or making other changes to the target."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ABORTED"),"\n: An ",Object(i.b)("em",{parentName:"p"},"aborted")," migration will not make any changes to the target and cannot be run again."),Object(i.b)("h2",{id:"using-the-livedata-migrator-jar"},"Using the LiveData Migrator jar"),Object(i.b)("p",null,"If you want to try out LiveData Migrator using a quick method, use the ",Object(i.b)("inlineCode",{parentName:"p"},"livedata-migrator.jar"),". This is an alternative to using the system service and it does not require configuration."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Use the system service instead for Production deployment as it allows you to maintain long-lived migrations, have a common configuration that survives service restarts, and retain logging information in a central directory."))),Object(i.b)("p",null,"On the LiveData Migrator host, follow the steps below to run the jar:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Switch to the ",Object(i.b)("a",{parentName:"li",href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User"},"HDFS superuser"),".",Object(i.b)("br",{parentName:"li"}),Object(i.b)("em",{parentName:"li"},"Example"),Object(i.b)("br",{parentName:"li"}),Object(i.b)("inlineCode",{parentName:"li"},"su - hdfs")),Object(i.b)("li",{parentName:"ol"},"Change to the directory where the jar is located:",Object(i.b)("br",{parentName:"li"}),Object(i.b)("inlineCode",{parentName:"li"},"cd /opt/wandisco/livedata-migrator")),Object(i.b)("li",{parentName:"ol"},"Run the jar file to access the action prompt.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If Kerberos is disabled in your environment, run:",Object(i.b)("br",{parentName:"li"}),Object(i.b)("inlineCode",{parentName:"li"},"java -jar livedata-migrator.jar")),Object(i.b)("li",{parentName:"ul"},"If Kerberos is enabled in your environment, you must obtain a ticket before running the jar.",Object(i.b)("br",{parentName:"li"}),Object(i.b)("em",{parentName:"li"},"Example"),Object(i.b)("br",{parentName:"li"}),Object(i.b)("inlineCode",{parentName:"li"},"kinit -kt /etc/security/keytabs/hdfs.keytab hdfs@REALM.COM"),Object(i.b)("br",{parentName:"li"}),"Afterwards, run:",Object(i.b)("br",{parentName:"li"}),Object(i.b)("inlineCode",{parentName:"li"},"java -Dlm.kerberos.is.enabled=true -jar livedata-migrator.jar"))))))}b.isMDXComponent=!0},203:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=b(a),p=n,u=m["".concat(o,".").concat(p)]||m[p]||d[p]||i;return a?r.a.createElement(u,c(c({ref:t},s),{},{components:a})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);