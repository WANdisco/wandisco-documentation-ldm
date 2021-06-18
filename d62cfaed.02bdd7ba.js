(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{204:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(235)),c={id:"configure-exclusions",title:"Configure exclusions",sidebar_label:"Configure exclusions"},l={unversionedId:"configure-exclusions",id:"version-1.11.1/configure-exclusions",isDocsHomePage:!1,title:"Configure exclusions",description:"Define exclusions to prevent certain files and directories from being migrated. There are three types of exclusions, which will exclude by:",source:"@site/versioned_docs/version-1.11.1/configure-exclusions.md",slug:"/configure-exclusions",permalink:"/wandisco-documentation-ldm/docs/1.11.1/configure-exclusions",version:"1.11.1",sidebar_label:"Configure exclusions",sidebar:"version-1.11.1/someSidebar",previous:{title:"Create a one-time migration",permalink:"/wandisco-documentation-ldm/docs/1.11.1/one-time-migration"},next:{title:"Manage migrations",permalink:"/wandisco-documentation-ldm/docs/1.11.1/manage-migrations"}},b=[{value:"Configure exclusions with the UI",id:"configure-exclusions-with-the-ui",children:[{value:"Add new exclusions",id:"add-new-exclusions",children:[]},{value:"Remove exclusions from the templates list",id:"remove-exclusions-from-the-templates-list",children:[]}]},{value:"Configure exclusions with the CLI",id:"configure-exclusions-with-the-cli",children:[{value:"Define exclusions",id:"define-exclusions",children:[]},{value:"Manage exclusions",id:"manage-exclusions",children:[]}]},{value:"Default Exclusions",id:"default-exclusions",children:[{value:"HDFS",id:"hdfs",children:[]},{value:"ADLS Gen2",id:"adls-gen2",children:[]},{value:"GCS",id:"gcs",children:[]}]}],o={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Define exclusions to prevent certain files and directories from being migrated. There are three types of exclusions, which will exclude by:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"File size"),Object(i.b)("li",{parentName:"ul"},"File and directory names (defined using regular expression patterns of either ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://regexr.com/"}),"Java PCRE")," or ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.javatpoint.com/theory-of-automata"}),"Automata")," type)"),Object(i.b)("li",{parentName:"ul"},"Last modification date of directories and files")),Object(i.b)("p",null,"Exclusion templates are associated with a storage, allowing you to selectively ignore content during migration when that storage is used as the source."),Object(i.b)("p",null,"Use the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#configure-exclusions-with-the-ui"}),"UI")," or the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#configure-exclusions-with-the-cli"}),"CLI")," to configure exclusions."),Object(i.b)("h2",{id:"configure-exclusions-with-the-ui"},"Configure exclusions with the UI"),Object(i.b)("p",null,"Assign exclusions to new or existing migrations."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Default exclusions will automatically apply to certain storages depending on the platform. For example, ADLS storage types have a maximum individual file size limit of 4.55TiB, and any files larger will be automatically excluded."))),Object(i.b)("h3",{id:"add-new-exclusions"},"Add new exclusions"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"In the ",Object(i.b)("strong",{parentName:"li"},"Storages")," list on the dashboard, click the settings for the appropriate storage."),Object(i.b)("li",{parentName:"ol"},"Select ",Object(i.b)("strong",{parentName:"li"},"LiveData Migrator")," under the ",Object(i.b)("em",{parentName:"li"},"Processes")," list to display the exclusion templates."),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Add Exclusion Template")," to associate the exclusion with the selected storage and enter the parameters for the exclusion:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Exclusion type")," - ",Object(i.b)("em",{parentName:"li"},"Regex"),", ",Object(i.b)("em",{parentName:"li"},"File Size"),", or ",Object(i.b)("em",{parentName:"li"},"Date"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Name")," - The name given to the exclusion template (for example: ",Object(i.b)("inlineCode",{parentName:"li"},"100gbfilelimit"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Description"),' - A brief description of what the exclusion is doing. For example: "',Object(i.b)("em",{parentName:"li"},"Files larger than 100GB are excluded"),'").'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"File Size")," = ",Object(i.b)("strong",{parentName:"li"},"Value / Unit")," - The value and unit for the file size limit (for example: ",Object(i.b)("inlineCode",{parentName:"li"},"100")," ",Object(i.b)("inlineCode",{parentName:"li"},"GB"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Regex")," = ",Object(i.b)("strong",{parentName:"li"},"Regex")," - The regex pattern to be used for the filename exclusion (for example: ",Object(i.b)("inlineCode",{parentName:"li"},"^test\\.*"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Date")," = ",Object(i.b)("strong",{parentName:"li"},"Select Date")," - Any files that have been modified before the specified date will be excluded during migrations.")))),Object(i.b)("p",null,"Once the exclusion is added and passed validation, it appears on the exclusion list."),Object(i.b)("h3",{id:"remove-exclusions-from-the-templates-list"},"Remove exclusions from the templates list"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"In the ",Object(i.b)("strong",{parentName:"li"},"Storages")," list on the dashboard, click the settings for the appropriate storage."),Object(i.b)("li",{parentName:"ol"},"Select ",Object(i.b)("strong",{parentName:"li"},"LiveData Migrator")," under the ",Object(i.b)("em",{parentName:"li"},"Processes")," list to display the exclusion templates."),Object(i.b)("li",{parentName:"ol"},"Click the trash icon.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This will not remove the exclusion from an existing migration. See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/1.11.1/manage-migrations#remove-exclusions-from-an-existing-migration"}),"Remove exclusions from an existing migration")," section for guidance on how to do this."),Object(i.b)("p",{parentName:"div"},"You cannot remove ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#default-exclusions"}),"default exclusions")," from the templates list, but you may remove them from an existing migration."))),Object(i.b)("h2",{id:"configure-exclusions-with-the-cli"},"Configure exclusions with the CLI"),Object(i.b)("p",null,"Exclusions constrain content migrated from a source file system. Adding exclusions to an existing migration will change the future actions performed for that migration, but will not affect previously migrated content."),Object(i.b)("h3",{id:"define-exclusions"},"Define exclusions"),Object(i.b)("p",null,"Define exclusions so you can apply them to migrations."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#exclusion-add-date"}),Object(i.b)("inlineCode",{parentName:"a"},"exclusion add date"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create a new date-based rule")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#exclusion-add-file-size"}),Object(i.b)("inlineCode",{parentName:"a"},"exclusion add file-size"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create a new file size rule")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#exclusion-add-regex"}),Object(i.b)("inlineCode",{parentName:"a"},"exclusion add regex"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create a new regex exclusion rule")))),Object(i.b)("h3",{id:"manage-exclusions"},"Manage exclusions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#exclusion-del"}),Object(i.b)("inlineCode",{parentName:"a"},"exclusion del"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Delete an exclusion rule")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#exclusion-list"}),Object(i.b)("inlineCode",{parentName:"a"},"exclusion list"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List all exclusion rules")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#exclusion-show"}),Object(i.b)("inlineCode",{parentName:"a"},"exclusion show"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Get details for a particular exclusion rule")))),Object(i.b)("h2",{id:"default-exclusions"},"Default Exclusions"),Object(i.b)("p",null,"When you create a new migration, default exclusions are added to it. The default exclusions will depend on the filesystem types used in the migration."),Object(i.b)("p",null,"Default exclusions can be removed from the migration, but not from the system or the templates list."),Object(i.b)("h3",{id:"hdfs"},"HDFS"),Object(i.b)("p",null,"The default exclusions are as follows:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Exclusion"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Exclusion type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(","/","|","/",".","*","/",")","\\","\\",".hive-staging.","*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Regex (Automata)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Hive staging directories")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(","/","|","/",".","*","/",")","\\","\\",".spark-staging-.","*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Regex (Automata)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Spark staging directories")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(","/","|","/",".","*","/",")","_temporary.","*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Regex (Automata)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Spark temporary directories")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(","/","|","/",".","*","/",")","\\","\\",".Trash","(","/",".","*",")","?"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Regex (Automata)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HDFS trash directories")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(","/","|","/",".","*","/",")","\\","\\",".snapshot","(","/",".","*",")","?"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Regex (Automata)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HDFS Snapshot directories")))),Object(i.b)("p",null,"The Hive or Spark directories are used to stage temporary files during Hive or Spark jobs. These are automatically deleted by Hive or Spark after use, and are excluded by default to avoid the migration of unnecessary data."),Object(i.b)("p",null,"The HDFS Snapshot and trash directories are (generally) only relevant to the local cluster and excluded for the same reason as to avoid migration of unnecessary data."),Object(i.b)("h3",{id:"adls-gen2"},"ADLS Gen2"),Object(i.b)("p",null,"The default exclusions are as follows:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Exclusion"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Exclusion type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"[",".","|","\\","\\","/","]","$"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Regex (JAVA_PCRE)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"File names cannot end with ",Object(i.b)("inlineCode",{parentName:"td"},".")," or ' '")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),".","*","(","[","^","\\","\\","/","]","*","\\","\\","/",")","{","255,","}",".","*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Regex (Automata)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Blob names cannot exceed 254 path segments")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),".","{","1025,","}"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Regex (JAVA_PCRE)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"File name length cannot exceed 1024")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"5 TB"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"File size"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"File size cannot exceed 5TB")))),Object(i.b)("p",null,"These exclusions cover many of the limitations set by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-shares--directories--files--and-metadata#directory-and-file-names"}),"ADLS Gen2 directory and file naming rules"),"."),Object(i.b)("h3",{id:"gcs"},"GCS"),Object(i.b)("p",null,"The default exclusions are as follows:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Exclusion"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Exclusion type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),".","*","[","\\","r","\\","n","]",".","*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Regex (Automata)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"File name cannot contain carriage return or line feeds")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),".","{","1025,","}"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Regex (JAVA_PCRE)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"File name length cannot exceed 1024")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\\","\\",".","\\","\\",".?"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Regex (Automata)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"File name cannot be named ",Object(i.b)("inlineCode",{parentName:"td"},".")," or ",Object(i.b)("inlineCode",{parentName:"td"},".."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"16 TB"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"File size"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"File size cannot exceed 16TB")))),Object(i.b)("p",null,"These exclusions cover the limitations set by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/storage/docs/naming-objects"}),"Google Cloud object naming guidelines"),"."))}s.isMDXComponent=!0},235:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=s(a),p=n,O=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return a?r.a.createElement(O,l(l({ref:t},o),{},{components:a})):r.a.createElement(O,l({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);