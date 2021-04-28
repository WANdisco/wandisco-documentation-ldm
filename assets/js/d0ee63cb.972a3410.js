(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(204)),o={id:"backup-and-restore",title:"Backup and Restore",sidebar_label:"Backup and Restore"},c={unversionedId:"backup-and-restore",id:"backup-and-restore",isDocsHomePage:!1,title:"Backup and Restore",description:"Backup and Restore is currently available as a preview feature. You must enable this feature in the application properties file to use it.",source:"@site/docs/backup-and-restore.md",slug:"/backup-and-restore",permalink:"/wandisco-documentation-ldm/docs/backup-and-restore",version:"current",sidebar_label:"Backup and Restore",sidebar:"someSidebar",previous:{title:"Enable Preview Features",permalink:"/wandisco-documentation-ldm/docs/preview-features"},next:{title:"Troubleshooting",permalink:"/wandisco-documentation-ldm/docs/troubleshooting"}},l=[{value:"API Commands",id:"api-commands",children:[{value:"Create a backup",id:"create-a-backup",children:[]},{value:"Restore from backup",id:"restore-from-backup",children:[]},{value:"Periodic Backup",id:"periodic-backup",children:[]}]}],s={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Backup and Restore is currently available as a preview feature. You must ",Object(i.b)("a",{parentName:"p",href:"./preview-features"},"enable this feature in the application properties file")," to use it."),Object(i.b)("p",{parentName:"div"},"This preview version can only be used through the REST API."))),Object(i.b)("p",null,"LiveData Migrator allows you to backup all of your configured migrations, exclusions and settings through the CLI. Restore this backup at any time to revert your LiveData Migrator instance to its prior state. This will not undo file transfers that have already been completed."),Object(i.b)("p",null,"The backup will save:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Migrations"),Object(i.b)("li",{parentName:"ul"},"Targets"),Object(i.b)("li",{parentName:"ul"},"Source configuration"),Object(i.b)("li",{parentName:"ul"},"Path mappings"),Object(i.b)("li",{parentName:"ul"},"Bandwidth Policy"),Object(i.b)("li",{parentName:"ul"},"Exclusions"),Object(i.b)("li",{parentName:"ul"},"Secure keys for accessing filesystems","*")),Object(i.b)("p",null,"*"," These are masked by default, unless the ",Object(i.b)("inlineCode",{parentName:"p"},"mask=false")," property is supplied in the backup request."),Object(i.b)("p",null,"By default, created backups are stored in ",Object(i.b)("inlineCode",{parentName:"p"},"/opt/wandisco/livedata-migrator/db/backup"),"."),Object(i.b)("h2",{id:"api-commands"},"API Commands"),Object(i.b)("p",null,"The backup and restore feature makes use of a REST API to send backup and restore requests. Below are some examples using curl commands."),Object(i.b)("h3",{id:"create-a-backup"},"Create a backup"),Object(i.b)("p",null,"Use the following command to write a backup to a file on the host machine:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Save a masked backup"',title:'"Save',a:!0,masked:!0,'backup"':!0},"curl -X POST http://myldmhost:18080/backups\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Save an unmasked backup"',title:'"Save',an:!0,unmasked:!0,'backup"':!0},"curl -X POST http://myldmhost:18080/backups?mask=false\n")),Object(i.b)("p",null,"In the above example, ",Object(i.b)("inlineCode",{parentName:"p"},"myldmhost")," should be replaced with the IP address or domain name of the server hosting LiveData Migrator."),Object(i.b)("p",null,"By default, the backup file will be stored in ",Object(i.b)("inlineCode",{parentName:"p"},"/opt/wandisco/livedata-migrator/db/backup")," with a filename following the pattern ",Object(i.b)("inlineCode",{parentName:"p"},"backup.dateTtime"),", such as ",Object(i.b)("inlineCode",{parentName:"p"},"backup.2021-04-22T12/59/19"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"mask")," parameter, which is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," by default, means secure keys - such as those used to access filesystems - will be masked for security purposes. This means they will have to be resupplied with the correct values after recovery. If the ",Object(i.b)("inlineCode",{parentName:"p"},"mask=false")," parameter is supplied, the backup will store these properties as plain text. It will therefore not be necessary to resupply them."),Object(i.b)("p",null,"Use the following command to write the backup to a specified file (in this case, ",Object(i.b)("inlineCode",{parentName:"p"},"backup.json"),"):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Write the backup to a specific file"',title:'"Write',the:!0,backup:!0,to:!0,a:!0,specific:!0,'file"':!0},"curl -X POST http://myldmhost:18080/backups?mask=false > backup.json\n")),Object(i.b)("h3",{id:"restore-from-backup"},"Restore from backup"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Before restoring LiveData Migrator from a backup, you should delete the ",Object(i.b)("inlineCode",{parentName:"p"},"default-db")," file to ensure there are no setting conflicts. By default, the folder is in the following directory:"),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"/opt/wandisco/livedata-migrator/db/default-db")," "),Object(i.b)("p",{parentName:"div"},"The restoration process will still reinstate your previously backed up settings, meaning you will not lose them."))),Object(i.b)("p",null,"Restore LiveData Migrator from a backup by using the following curl command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Restore from backup"',title:'"Restore',from:!0,'backup"':!0},'curl -X POST -H "Content-Type: application/json" -d @backup.json http://myldmhost:18080/backups/restore --verbose\n')),Object(i.b)("p",null,"In this example, the backup file is named ",Object(i.b)("inlineCode",{parentName:"p"},"backup.json")," and the file is located in the user's current working directory."),Object(i.b)("h3",{id:"periodic-backup"},"Periodic Backup"),Object(i.b)("p",null,"When the backup and restore feature is enabled, LiveData Migrator will automatically create a backup every hour. To configure the backup interval, modify the following property in ",Object(i.b)("inlineCode",{parentName:"p"},"application.properties"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"backup.scheduled.collection.period=60\n")),Object(i.b)("p",null,"The value is measured in minutes."))}p.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);