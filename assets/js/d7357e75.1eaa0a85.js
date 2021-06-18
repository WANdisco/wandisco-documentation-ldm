(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{206:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=(a(0),a(237));const i={id:"configuration-hvm",title:"Configuring the HiveMigrator service",sidebar_label:"HiveMigrator"},o={unversionedId:"configuration-hvm",id:"version-1.11.1/configuration-hvm",isDocsHomePage:!1,title:"Configuring the HiveMigrator service",description:"The HiveMigrator service is responsible for communication between agents and migration of metadata.",source:"@site/versioned_docs/version-1.11.1/configuration-hvm.md",slug:"/configuration-hvm",permalink:"/wandisco-documentation-ldm/docs/1.11.1/configuration-hvm",version:"1.11.1",sidebar_label:"HiveMigrator",sidebar:"version-1.11.1/someSidebar",previous:{title:"Configuring LiveData Migrator",permalink:"/wandisco-documentation-ldm/docs/1.11.1/configuration-ldm"},next:{title:"Configuring the LiveData UI",permalink:"/wandisco-documentation-ldm/docs/1.11.1/configuration-ui"}},c=[{value:"Security",id:"security",children:[{value:"Basic authentication",id:"basic-authentication",children:[]}]},{value:"TLS/SSL certificates",id:"tlsssl-certificates",children:[{value:"Generate new certificates",id:"generate-new-certificates",children:[]},{value:"Upload your own certificates",id:"upload-your-own-certificates",children:[]}]},{value:"Directory structure",id:"directory-structure",children:[{value:"Remote servers",id:"remote-servers",children:[]}]}],s={toc:c};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The HiveMigrator service is responsible for communication between agents and migration of metadata."),Object(r.b)("p",null,"Find details here for configuring the HiveMigrator service."),Object(r.b)("h2",{id:"security"},"Security"),Object(r.b)("h3",{id:"basic-authentication"},"Basic authentication"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"When basic authentication is enabled on HiveMigrator, ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/configuration-ui#hivemigrator"},"update the LiveData UI with the credentials to maintain functionality"),"."))),Object(r.b)("p",null,"Follow these steps to enable basic authentication on the HiveMigrator REST API:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Edit the ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/wandisco/hivemigrator/application.yaml")," file to enable authentication:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Change the enabled parameter from false to true"',title:'"Change',the:!0,enabled:!0,parameter:!0,from:!0,false:!0,to:!0,'true"':!0},"micronaut:\n\n  security:\n    enabled: true\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/configuration-ldm#security"},"If basic authentication is enabled on the LiveData Migrator REST API"),", add the password to the ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/wandisco/hivemigrator/application.yaml")," file in plain text."),Object(r.b)("p",{parentName:"li"},"Add the ",Object(r.b)("inlineCode",{parentName:"p"},"lm2Password")," key as a top level parameter:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Example"',title:'"Example"'},'storagePath: /opt/wandisco/hivemigrator/hivemigrator.db\nliveDataMigratorPort: 18080\n\nlm2Password: "password"\n')),Object(r.b)("p",{parentName:"li"},"If the LiveData Migrator credentials and the HiveMigrator credentials (defined in the next step) are the same, you will only need to authenticate once when ",Object(r.b)("a",{parentName:"p",href:"#connecting-to-hivemigrator-with-basic-authentication"},"connecting through the CLI"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the same file, add the ",Object(r.b)("inlineCode",{parentName:"p"},"username")," and ",Object(r.b)("inlineCode",{parentName:"p"},"password")," key values as top level parameters."),Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/configuration-ldm#security"},"If basic authentication is enabled on the LiveData Migrator REST API"),", use the same username for HiveMigrator and LiveData Migrator."),Object(r.b)("p",{parentName:"li"},"The password value needs to be encrypted using a ",Object(r.b)("a",{parentName:"p",href:"https://www.browserling.com/tools/bcrypt"},"bcrypt generator"),"."),Object(r.b)("div",{parentName:"li",className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"bcrypt password must have a 2a hash prefix")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},'HiveMigrator only supports "2a" hash prefixes for encrypted passwords. Use a ',Object(r.b)("a",{parentName:"p",href:"https://www.browserling.com/tools/bcrypt"},"bcrypt generator"),' that provides a "2a" prefix at the beginning of the encrypted password.'))),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Example"',title:'"Example"'},'storagePath: /opt/wandisco/hivemigrator/hivemigrator.db\nliveDataMigratorPort: 18080\n\nusername: "admin"\npassword: "$2a$10$mQXFoGAdLryWcZLjSP31Q.5cSgtoCPO3ernnsK4F6/gva8lyn1qgu"\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Restart the HiveMigrator service to enable the new configuration:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-text"},"service hivemigrator restart\n")),Object(r.b)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The username and password values can be changed without having to restart the HiveMigrator service. They will become active once you have saved the file."))))),Object(r.b)("h4",{id:"connecting-to-hivemigrator-with-basic-authentication"},"Connecting to HiveMigrator with basic authentication"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Follow these steps if you have used different credentials for ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/configuration-ldm#security"},"LiveData Migrator")," and HiveMigrator, or if basic authentication is not enabled on LiveData Migrator."),Object(r.b)("p",{parentName:"div"},"If you have used the same credentials for both services, this step is not required."))),Object(r.b)("p",null,"When basic authentication is enabled, provide the username and password when prompted to connect to HiveMigrator through the CLI:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Example"',title:'"Example"'},"  connect hivemigrator localhost: trying to connect...\nUsername: admin\nPassword: ***********\nConnected to hivemigrator v1.2.1-428 on http://localhost:6780.\n")),Object(r.b)("p",null,"The username and password will also be required when accessing the HiveMigrator REST API directly."),Object(r.b)("h2",{id:"tlsssl-certificates"},"TLS/SSL certificates"),Object(r.b)("p",null,"When deploying a remote agent (for example: ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#hive-agent-add-azure"},"Azure SQL")," or ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/command-reference#hive-agent-add-glue"},"AWS Glue"),"), a TLS/SSL connection will be established by default between HiveMigrator and the remote agent."),Object(r.b)("p",null,"Certificates (and keys) are automatically generated for this connection for both HiveMigrator and the remote agent. These are placed in the following directories:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="HiveMigrator - Client and Root CA certificates"',title:'"HiveMigrator',"-":!0,Client:!0,and:!0,Root:!0,CA:!0,'certificates"':!0},"/etc/wandisco/hivemigrator/client-key.pem\n/etc/wandisco/hivemigrator/client-cert.pem\n/etc/wandisco/hivemigrator/ca-cert.pem\n/etc/wandisco/hivemigrator/ca-key.pem\n/etc/wandisco/hivemigrator/ca-cert.srl\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Remote agent - Server and Root CA certificates"',title:'"Remote',agent:!0,"-":!0,Server:!0,and:!0,Root:!0,CA:!0,'certificates"':!0},"/etc/wandisco/hivemigrator-remote-server/server-key.pem\n/etc/wandisco/hivemigrator-remote-server/server-cert.pem\n/etc/wandisco/hivemigrator-remote-server/ca-cert.pem\n")),Object(r.b)("p",null,"You can ",Object(r.b)("a",{parentName:"p",href:"#generate-new-certificates"},"generate new certificates")," at any time or ",Object(r.b)("a",{parentName:"p",href:"#upload-your-own-certificates"},"upload your own"),"."),Object(r.b)("h3",{id:"generate-new-certificates"},"Generate new certificates"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You must generate new certificates for HiveMigrator and all remote agents that are connected."),Object(r.b)("p",{parentName:"div"},"Generating certificates for just one of these components will break existing connections."))),Object(r.b)("p",null,"Generate new certificates and keys by using the following ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/api-reference#metadata-migrations"},"HiveMigrator REST API")," endpoints:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="HiveMigrator"',title:'"HiveMigrator"'},"POST \u200b/config\u200b/certificates\u200b/generate\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Remote agent"',title:'"Remote','agent"':!0},"POST \u200b/agents/{name}/certificates/generate\n")),Object(r.b)("p",null,"The remote agent service will automatically restart when new certificates are generated this way. The HiveMigrator service does not require a restart to start using new certificates."),Object(r.b)("h3",{id:"upload-your-own-certificates"},"Upload your own certificates"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Make sure the correct certificates and keys are uploaded for HiveMigrator and all remote agents that are connected."),Object(r.b)("p",{parentName:"div"},"Existing connections will break if the trust relationship is not established between HiveMigrator and remote agents."))),Object(r.b)("p",null,"Upload certificates and keys by using the following ",Object(r.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.1/api-reference#metadata-migrations"},"HiveMigrator REST API")," endpoints:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="HiveMigrator"',title:'"HiveMigrator"'},"POST \u200b/config\u200b/certificates\u200b/upload\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Remote agent"',title:'"Remote','agent"':!0},"POST \u200b/agents/{name}/certificates/upload\n")),Object(r.b)("p",null,"The remote agent service will automatically restart when new certificates are uploaded this way. The HiveMigrator service does not require a restart to start using new certificates."),Object(r.b)("h2",{id:"directory-structure"},"Directory structure"),Object(r.b)("p",null,"The following directories are used for HiveMigrator:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Location"),Object(r.b)("th",{parentName:"tr",align:null},"Content"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"/var/log/wandisco/hivemigrator")),Object(r.b)("td",{parentName:"tr",align:null},"Logs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"/etc/wandisco/hivemigrator")),Object(r.b)("td",{parentName:"tr",align:null},"Configuration files")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"/opt/wandisco/hivemigrator")),Object(r.b)("td",{parentName:"tr",align:null},"Java archive files")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"/var/run/hivemigrator")),Object(r.b)("td",{parentName:"tr",align:null},"Runtime files")))),Object(r.b)("h3",{id:"remote-servers"},"Remote servers"),Object(r.b)("p",null,"The following directories are used for HiveMigrator remote servers (remote agents):"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Location"),Object(r.b)("th",{parentName:"tr",align:null},"Content"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"/var/log/wandisco/hivemigrator-remote-server")),Object(r.b)("td",{parentName:"tr",align:null},"Logs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"/etc/wandisco/hivemigrator-remote-server")),Object(r.b)("td",{parentName:"tr",align:null},"Configuration files")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"/opt/wandisco/hivemigrator-remote-server")),Object(r.b)("td",{parentName:"tr",align:null},"Java archive files")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"/var/run/hivemigrator-remote-server")),Object(r.b)("td",{parentName:"tr",align:null},"Runtime files")))))}l.isMDXComponent=!0},237:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=b(a),p=n,g=m["".concat(o,".").concat(p)]||m[p]||d[p]||i;return a?r.a.createElement(g,c(c({ref:t},l),{},{components:a})):r.a.createElement(g,c({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);