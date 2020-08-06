(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),i=(a(0),a(117)),o={id:"operation",title:"Operation",sidebar_label:"Operation"},c={id:"operation",isDocsHomePage:!1,title:"Operation",description:"LiveData Migrator is in public preview. This gives you access to all product functionality for review, but limits operation time to 10 minutes during the preview period.",source:"@site/docs/operation.md",permalink:"/wandisco-documentation-ldm/docs/operation",sidebar_label:"Operation",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/wandisco-documentation-ldm/docs/getting-started"},next:{title:"Configuration",permalink:"/wandisco-documentation-ldm/docs/configuration"}},b=[{value:"Operating LiveData Migrator",id:"operating-livedata-migrator",children:[{value:"Interactive Commands",id:"interactive-commands",children:[]},{value:"LiveData Migrator Resources",id:"livedata-migrator-resources",children:[]}]},{value:"LiveData Migrator Commands",id:"livedata-migrator-commands",children:[{value:"Built-In Commands",id:"built-in-commands",children:[]},{value:"Exclusion Commands",id:"exclusion-commands",children:[]},{value:"File System Commands",id:"file-system-commands",children:[]},{value:"Migration Commands",id:"migration-commands",children:[]},{value:"Source Commands",id:"source-commands",children:[]}]}],m={rightToc:b};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Public Preview")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"LiveData Migrator is in public preview. This gives you access to all product functionality for review, but limits operation time to 10 minutes during the preview period."))),Object(i.b)("p",null,"Here, you'll find information about how to interact with LiveData Migrator to create and manage resources that control your migrations."),Object(i.b)("p",null,"If you're new to the concept of LiveData, or want to know what LiveData Migrator does, please read the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/"}),"introduction to LiveData Migrator")," before learning ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/getting-started"}),"how to install")," and use the product."),Object(i.b)("h2",{id:"operating-livedata-migrator"},"Operating LiveData Migrator"),Object(i.b)("p",null,"Control how LiveData Migrator performs migrations using commands at the action prompt ",Object(i.b)("inlineCode",{parentName:"p"},"WANdisco LiveMigrator >>"),". The prompt is available immediately when you run LiveData Migrator from the command line."),Object(i.b)("p",null,"If you are running it as a system service, you will need to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/configuration#ssh-access"}),"configure")," and use SSH to access the action prompt. By default, SSH access is insecure, with username ",Object(i.b)("inlineCode",{parentName:"p"},"user"),", and password ",Object(i.b)("inlineCode",{parentName:"p"},"password")," on port 2222."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"$ ssh user@localhost -p 2222\n")),Object(i.b)("p",null,"Change this using the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/configuration#ssh-access"}),"configuration properties")," for SSH access to:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Comment out the SSH password configuration property")," ",Object(i.b)("inlineCode",{parentName:"li"},"ssh.shell.password")," so that password access is disabled, and"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Specify an authorized keys file")," with ",Object(i.b)("inlineCode",{parentName:"li"},"ssh.shell.authorized-public-keys-file")," to allow access only from authorized clients that hold a matching private key.")),Object(i.b)("h3",{id:"interactive-commands"},"Interactive Commands"),Object(i.b)("p",null,"The action prompt provides many features to guide you during operation, including:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Feature"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"How to use it"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Interactive help")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type ",Object(i.b)("inlineCode",{parentName:"td"},"help")," at the action prompt.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Review available commands")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Commands that cannot be used without creating other resources first are tagged with ",Object(i.b)("inlineCode",{parentName:"td"},"*")," in the output of the ",Object(i.b)("inlineCode",{parentName:"td"},"help")," command.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Command completion")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hit the ",Object(i.b)("inlineCode",{parentName:"td"},"<tab>")," key at any time to get assistance or to complete partially-entered commands.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Cancel input")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type ",Object(i.b)("inlineCode",{parentName:"td"},"<Ctrl-C>")," before entering a command to return to an empty action prompt.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Syntax indication")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Invalid commands are highlighted as you type.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Clear the display")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type ",Object(i.b)("inlineCode",{parentName:"td"},"<Ctrl-L>")," at any time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Show command history")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type ",Object(i.b)("inlineCode",{parentName:"td"},"history")," at the action prompt.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Previous commands")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Navigate previous commands using the up and down arrows, and use standard emacs shortcuts.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Interactive or scripted operation")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"You can interact with the command line interface directly, or send it commands on standard input to incorporate it into shell scripts.")))),Object(i.b)("h3",{id:"livedata-migrator-resources"},"LiveData Migrator Resources"),Object(i.b)("p",null,"You define three different types of resources when operating LiveData Migrator:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"File systems"),": Create and manage file system resources to specify how LiveData Migrator connects to and uses file systems as migration sources and targets."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Migrations"),": Initiate data migration by creating migration resources. A migration references the source and target file system resources, and adds additional information to specify the path for content to be migrated, and may reference exclusion resources."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Exclusions"),": Constrain the content migrated by creating and referencing exclusion resources. Use different types of exclusions to enforce constaints with different conditions, e.g. by file size or by a regular expression match against the file name."),Object(i.b)("h2",{id:"livedata-migrator-commands"},"LiveData Migrator Commands"),Object(i.b)("p",null,"There are five types of commands in LiveData Migrator: ",Object(i.b)("em",{parentName:"p"},"Built-in"),", ",Object(i.b)("em",{parentName:"p"},"Exclusion"),", ",Object(i.b)("em",{parentName:"p"},"File System"),", ",Object(i.b)("em",{parentName:"p"},"Migration")," and ",Object(i.b)("em",{parentName:"p"},"Source")," commands.  Each will respond with either JSON-formatted output, or with plain text output. You can find a summary of those commands here, each of which links to details in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference"}),"LiveData Migrator Command Reference"),"."),Object(i.b)("p",null,"Find a full list of commands that can be used at the action prompt with the ",Object(i.b)("inlineCode",{parentName:"p"},"help")," command. Get command specific help by typing ",Object(i.b)("inlineCode",{parentName:"p"},"help <command>")," for each command available."),Object(i.b)("p",null,"Use tab-completion to become familar with the commands available and options that should be provided to them. Type the ",Object(i.b)("inlineCode",{parentName:"p"},"<tab>")," key if you are uncertain whether a command requires an additional parameter, or if you need to provide a specific value. It will help auto-complete parameter values, and display options available for any command."),Object(i.b)("h3",{id:"built-in-commands"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"/wandisco-documentation-ldm/docs/command-reference#built-in-commands"}),"Built-In Commands")),Object(i.b)("p",null,"The built-in commands are always available in a LiveData Migrator command line interactive session. They are unrelated to migration resources and operation (other than ",Object(i.b)("inlineCode",{parentName:"p"},"exit"),"/",Object(i.b)("inlineCode",{parentName:"p"},"quit"),"), but help you to interact with LiveData Migrator and automate processing through scripts for the action prompt."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#clear"}),Object(i.b)("inlineCode",{parentName:"a"},"clear"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Clear the shell screen")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#exit"}),Object(i.b)("inlineCode",{parentName:"a"},"exit")),"/",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#exit"}),Object(i.b)("inlineCode",{parentName:"a"},"quit"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exit the interactive session with the action prompt, and stop LiveData Migrator if not running as a system service. You can also exit the session with ",Object(i.b)("inlineCode",{parentName:"td"},"<Ctrl-D>"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#help"}),Object(i.b)("inlineCode",{parentName:"a"},"help"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Display help about available commands")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#history"}),Object(i.b)("inlineCode",{parentName:"a"},"history"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Display or save the history of previously run commands")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#script"}),Object(i.b)("inlineCode",{parentName:"a"},"script"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Read and execute commands from a file")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#stacktrace"}),Object(i.b)("inlineCode",{parentName:"a"},"stacktrace"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Display the full stacktrace of the last error")))),Object(i.b)("h3",{id:"exclusion-commands"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"/wandisco-documentation-ldm/docs/command-reference#exclusion-commands"}),"Exclusion Commands")),Object(i.b)("p",null,"Define exclusion resources to constrain the content migrated by a migration resource. Different types of exclusions allow you to selectively ignore content from the source file system so that you have full control over what is transferred to, and modified in the target during migration. Exclusions need to be associated with migrations to take effect for them. You can do this when you create a migration resource, or associate exclusions with an existing migration."),Object(i.b)("p",null,"Modifying exclusions on a migration that is in progress will change the future actions performed for that migration, but will not affect previously migrated content. Adding exclusions when a migration is created ensures a migration outcome consistent in full with those exclusions."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#exclusion-add-file-size"}),Object(i.b)("inlineCode",{parentName:"a"},"exclusion add file-size"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create a new file size rule")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#exclusion-add-regex"}),Object(i.b)("inlineCode",{parentName:"a"},"exclusion add regex"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create a new regex exclusion rule")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#exclusion-del"}),Object(i.b)("inlineCode",{parentName:"a"},"exclusion del"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete an exclusion rule")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#exclusion-list"}),Object(i.b)("inlineCode",{parentName:"a"},"exclusion list"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List all exclusion rules")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#exclusion-show"}),Object(i.b)("inlineCode",{parentName:"a"},"exclusion show"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Get details for a particular exclusion rule")))),Object(i.b)("h3",{id:"file-system-commands"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"/wandisco-documentation-ldm/docs/command-reference#file-system-commands"}),"File System Commands")),Object(i.b)("p",null,"Create file system resources to provide LiveData Migrator with the information needed to read content from your source and migrate content to your target. A range of different file system types are supported as targets, including ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction"}),"ADLS Gen 2"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"}),"HDFS"),", local file systems, and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html"}),"S3A"),". LiveData Migrator currently supports HDFS file systems as a migration source."),Object(i.b)("p",null,"You can define multiple target file systems, and have migrations operating at the same time to them."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-add-adls2-sharedkey"}),Object(i.b)("inlineCode",{parentName:"a"},"filesystem add adls2 sharedKey"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add an ADLS Gen 2 file system resource")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-add-hdfs"}),Object(i.b)("inlineCode",{parentName:"a"},"filesystem add hdfs"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add a Hadoop HDFS file system resource")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-add-local"}),Object(i.b)("inlineCode",{parentName:"a"},"filesystem add local"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add a local file system resource")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-add-s3a"}),Object(i.b)("inlineCode",{parentName:"a"},"filesystem add s3a"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add an S3 file system resource")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-clear"}),Object(i.b)("inlineCode",{parentName:"a"},"filesystem clear"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete all target file systems")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-del"}),Object(i.b)("inlineCode",{parentName:"a"},"filesystem del"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete a target file system")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-list"}),Object(i.b)("inlineCode",{parentName:"a"},"filesystem list"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List of target file systems")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-show"}),Object(i.b)("inlineCode",{parentName:"a"},"filesystem show"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Get target file system details")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-types"}),Object(i.b)("inlineCode",{parentName:"a"},"filesystem types"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List the types of target file systems available")))),Object(i.b)("h3",{id:"migration-commands"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-commands"}),"Migration Commands")),Object(i.b)("p",null,"Create migration resources to define and initiate data migration. Migration occurs from your source file system to a target defined using a ",Object(i.b)("inlineCode",{parentName:"p"},"filesystem")," command. Migrations will transfer existing data, as well as any subsequent changes made to data in their scope, automatically maintaining the data in the target to be as current as possible with any changes to the source while LiveData Migrator remains in operation."),Object(i.b)("p",null,"You will typically create multiple migrations so that you can select specific content from your source file system by location. It is also possible to migrate to multiple independent file systems at the same time by defining multiple migration resources."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-abort"}),Object(i.b)("inlineCode",{parentName:"a"},"migration abort"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Abort a migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-del"}),Object(i.b)("inlineCode",{parentName:"a"},"migration del"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete a migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-exclusion-add"}),Object(i.b)("inlineCode",{parentName:"a"},"migration exclusion add"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add an exclusion to a migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-exclusion-del"}),Object(i.b)("inlineCode",{parentName:"a"},"migration exclusion del"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Remove an exclusion from a migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-list"}),Object(i.b)("inlineCode",{parentName:"a"},"migration list"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List running and active migrations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-new"}),Object(i.b)("inlineCode",{parentName:"a"},"migration new"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create a new migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-run"}),Object(i.b)("inlineCode",{parentName:"a"},"migration run"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Start or resume a migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#migration-show"}),Object(i.b)("inlineCode",{parentName:"a"},"migration show"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Get migration details")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#status"}),Object(i.b)("inlineCode",{parentName:"a"},"status"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Get migration status")))),Object(i.b)("p",null,"Migrations exist in one of eight states:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"NONSCHEDULED"),"\n: A ",Object(i.b)("em",{parentName:"p"},"non-scheduled migration")," has been defined but not yet started. Create a migration in this state by not specifying the ",Object(i.b)("inlineCode",{parentName:"p"},"--auto-start")," parameter on creation."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"SCHEDULED"),"\n: A ",Object(i.b)("em",{parentName:"p"},"scheduled")," migration will start when directed to run."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"STARTING"),"\n: A ",Object(i.b)("em",{parentName:"p"},"starting")," migration is being started and will soon begin transferring content to the target."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"RUNNING"),"\n: A ",Object(i.b)("em",{parentName:"p"},"running")," migration is scanning through source content and transferring content to the target, as well as responding to change notifications from the source if applicable."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"LIVE"),"\n: A ",Object(i.b)("em",{parentName:"p"},"live")," migration has completed scanning through source content, continues to respond to change notifications from the source, and will transfer content to and make changes in the target as required."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PAUSING"),"\n: A ",Object(i.b)("em",{parentName:"p"},"pausing")," migration has been instructed to pause transfer, but is temporarily continuing to make changes to the target."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PAUSED"),"\n: A ",Object(i.b)("em",{parentName:"p"},"paused")," migration has been instructed to pause transfer, and is not transferring content or making other changes to the target."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ABORTED"),"\n: An ",Object(i.b)("em",{parentName:"p"},"aborted")," migration will not make any changes to the target and cannot be run again."),Object(i.b)("h3",{id:"source-commands"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"/wandisco-documentation-ldm/docs/command-reference#source-commands"}),"Source Commands")),Object(i.b)("p",null,"LiveData Migrator migrates data from a source file system. The source file system is normally detected on startup when launched using ",Object(i.b)("inlineCode",{parentName:"p"},"hadoop jar live-migrator.jar"),", but will not be detected automatically if LiveData Migrator is launched as a system service, or if your Hadoop configuration does not contain the information needed to connect to the Hadoop file system. You can manage the source file system through these commands."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#source-clear"}),Object(i.b)("inlineCode",{parentName:"a"},"source clear"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete all sources")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#source-del"}),Object(i.b)("inlineCode",{parentName:"a"},"source del"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete a source")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/command-reference#source-fs-show"}),Object(i.b)("inlineCode",{parentName:"a"},"source fs show"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show the source FileSystem configuration")))),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"--source")," parameter on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference#filesystem-add-hdfs"}),Object(i.b)("inlineCode",{parentName:"a"},"filesystem add hdfs"))," command to create a suitable HDFS source file system when running as a system service."))}d.isMDXComponent=!0},117:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),d=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=d(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=b(e,["components","mdxType","originalType","parentName"]),l=d(a),p=n,O=l["".concat(o,".").concat(p)]||l[p]||s[p]||i;return a?r.a.createElement(O,c(c({ref:t},m),{},{components:a})):r.a.createElement(O,c({ref:t},m))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var m=2;m<i;m++)o[m]=a[m];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);