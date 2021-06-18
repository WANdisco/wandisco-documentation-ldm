(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{137:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return s})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return m}));var n=i(3),a=i(7),r=(i(0),i(237)),o={id:"configure-smtp",title:"Configure Email Notifications",sidebar_label:"Email Notifications"},s={unversionedId:"configure-smtp",id:"configure-smtp",isDocsHomePage:!1,title:"Configure Email Notifications",description:"LiveData Migrator supports sending email notifications whenever certain events occur, such as when a migration stops or falls behind file system events.",source:"@site/docs/configure-smtp.md",slug:"/configure-smtp",permalink:"/wandisco-documentation-ldm/docs/configure-smtp",version:"current",sidebar_label:"Email Notifications",sidebar:"someSidebar",previous:{title:"Configuring System Users",permalink:"/wandisco-documentation-ldm/docs/configure-system-users"},next:{title:"Viewing Metrics",permalink:"/wandisco-documentation-ldm/docs/ldm-metrics"}},c=[{value:"Configure an SMTP server in the UI",id:"configure-an-smtp-server-in-the-ui",children:[{value:"SMTP Server Configuration Fields",id:"smtp-server-configuration-fields",children:[]}]},{value:"Configure an SMTP server through the CLI",id:"configure-an-smtp-server-through-the-cli",children:[{value:"Mandatory Parameters",id:"mandatory-parameters",children:[]},{value:"Optional Parameters",id:"optional-parameters",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Configure email notifications in the UI",id:"configure-email-notifications-in-the-ui",children:[{value:"Email notification types",id:"email-notification-types",children:[]}]},{value:"Configure email notifications through the CLI",id:"configure-email-notifications-through-the-cli",children:[]}],l={toc:c};function m(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"LiveData Migrator supports sending email notifications whenever certain events occur, such as when a migration stops or falls behind file system events."),Object(r.b)("p",null,"To use email notifications:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#configure-an-smtp-server-in-the-ui"},"Configure an SMTP server to send the emails")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#configure-email-notifications-in-the-ui"},"Opt into the desired notifications"))),Object(r.b)("h2",{id:"configure-an-smtp-server-in-the-ui"},"Configure an SMTP server in the UI"),Object(r.b)("p",null,"Configure an SMTP server in the UI by accessing the SMTP configuration tab and filling in the necessary fields."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},'Click on the LiveData Migrator instance name (for example, "localhost") on the dashboard to access the overview page.'),Object(r.b)("li",{parentName:"ol"},"Under the configuration category on the left, select ",Object(r.b)("strong",{parentName:"li"},"SMTP Settings"),"."),Object(r.b)("li",{parentName:"ol"},"Provide the necessary fields in the empty form."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Save"),".")),Object(r.b)("h3",{id:"smtp-server-configuration-fields"},"SMTP Server Configuration Fields"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"SMTP Email Server (Required)"),": The host domain or IP address of your SMTP server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"SMTP Connection Security (Required)"),": The type of security your SMTP server uses. Can be ",Object(r.b)("strong",{parentName:"li"},"TLS"),", ",Object(r.b)("strong",{parentName:"li"},"SSL")," or ",Object(r.b)("strong",{parentName:"li"},"None"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"SMTP Port (Required)"),": The port used to connect to the SMTP server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Use Authentication"),": Optional field. Enables the provision of a username and password for authenticating with the SMTP server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"SMTP Username"),": The username to use for authenticating with the SMTP server. Requires ",Object(r.b)("strong",{parentName:"li"},"Use Authentication")," to be enabled."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"SMTP Password"),": The password to use for authenticating with the SMTP server. Requires ",Object(r.b)("strong",{parentName:"li"},"Use Authentication")," to be enabled."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Sender Email Address (Required)"),": The email address to use with any emails automatically sent by LiveData Migrator from the SMTP server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Email Subject Prefix (Required)"),": Text that will automatically precede the subject of any email sent by LiveData Migrator from the SMTP server. This can be used to easily identify these emails in the inbox.")),Object(r.b)("p",null,"Once you've saved the form and the SMTP server is configured, you can ",Object(r.b)("a",{parentName:"p",href:"#configure-email-notifications-in-the-ui"},"configure email notifications in the UI"),"."),Object(r.b)("h2",{id:"configure-an-smtp-server-through-the-cli"},"Configure an SMTP server through the CLI"),Object(r.b)("p",null,"Use the following command to set up a connection to an SMTP server through the CLI:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"notification email smtp set\n")),Object(r.b)("p",null,"Supply the following parameters:"),Object(r.b)("h3",{id:"mandatory-parameters"},"Mandatory Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"--host"))," The host address of the SMTP server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"--port"))," The port to connect to the SMTP server. Many SMTP servers use port 25."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"--security"))," The type of security the server uses. Can be either ",Object(r.b)("inlineCode",{parentName:"li"},"ssl"),", ",Object(r.b)("inlineCode",{parentName:"li"},"tls")," or ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"--email"))," The email address for LiveData Migrator to use with emails sent through the SMTP server. This address will be the sender of all configured email notifications.")),Object(r.b)("h3",{id:"optional-parameters"},"Optional Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"--login"))," The username to authenticate with the SMTP server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"--password"))," The password to authenticate with the SMTP server login. Required if a login is provided.")),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"notification email smtp set --host my.internal.host --port 587 --security SSL --email livedatamigrator@wandisco.com  --login myusername --password mypassword\n")),Object(r.b)("p",null,"You can view the details of your SMTP server configuration at any time by running the command ",Object(r.b)("inlineCode",{parentName:"p"},"notifications email smtp show"),"."),Object(r.b)("p",null,"Once your SMTP server is ready, you can ",Object(r.b)("a",{parentName:"p",href:"#configure-email-notifications-through-the-cli"},"configure email notifications through the CLI"),"."),Object(r.b)("h2",{id:"configure-email-notifications-in-the-ui"},"Configure email notifications in the UI"),Object(r.b)("p",null,"Set up email notifications in the UI by accessing the Email Notifications tab and filling in the necessary fields."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},'Click on the LiveData Migrator instance name (for example, "localhost") on the dashboard to access the overview page (or continue from configuring an SMTP server in the UI).'),Object(r.b)("li",{parentName:"ol"},"Under the configuration category on the left, select ",Object(r.b)("strong",{parentName:"li"},"Email Notifications"),"."),Object(r.b)("li",{parentName:"ol"},"Enter the email address you want to send notifications to."),Object(r.b)("li",{parentName:"ol"},"Opt into the event notifications you want to receive."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Save"),".")),Object(r.b)("p",null,"Click ",Object(r.b)("strong",{parentName:"p"},"Send a test email"),' to send a test notification email to the specified address. If you receive an email with the text "This is a test email notification" and a list of email addresses subscribed to notifications, you\'ve configured email notifications correctly.'),Object(r.b)("h3",{id:"email-notification-types"},"Email notification types"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Data migration has stopped:")," LiveData Migrator sends this notification any time a migration automatically stops, informing you of the migration's name and the exception message that caused the migration to terminate."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"LiveData Migrator is falling behind system events:")," LiveData Migrator sends this notification when it determines the number of events (changes to data) occurring on a source filesystem is too rapid for a migration to keep up with over a given period of time. The email will contain the migration name, the file system ID and simple statistics about the events. ",Object(r.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/configuration-ldm#configure-notification-properties"},"The sensitivity of this notification is configurable"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Data migration is missing events:")," This notification is thrown when LiveData Migrator doesn't receive the expected number of events in a migration, and fails to retry querying them 10 times."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Filesystems are unhealthy:")," LiveData Migrator sends this notification when it cannot connect to a source or target filesystem, notifying you of the filesystem that failed connection."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Files are failing to migrate:")," These notifications are sent when a file fails to transfer in a migration, providing a link to the migration that failed to transfer the files.")),Object(r.b)("h2",{id:"configure-email-notifications-through-the-cli"},"Configure email notifications through the CLI"),Object(r.b)("p",null,"Use ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/command-reference#notification-commands"},"commands in the CLI")," to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#notification-email-addresses-add"},"Subscribe email addresses to notifications"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#notification-email-addresses-remove"},"Unsubscribe email addresses from notifications"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#notification-email-types-add"},"Add notification types to subscribe to"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#notification-email-types-remove"},"Remove notification types from subscription"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/wandisco-documentation-ldm/docs/command-reference#notification-email-types-show"},"View the available notification types for subscription"),".")))}m.isMDXComponent=!0},237:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return d}));var n=i(0),a=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},b=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=m(i),p=n,d=b["".concat(o,".").concat(p)]||b[p]||u[p]||r;return i?a.a.createElement(d,s(s({ref:t},l),{},{components:i})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);