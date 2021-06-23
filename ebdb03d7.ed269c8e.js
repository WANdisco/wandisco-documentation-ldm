(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{216:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),i=(r(0),r(235)),o={id:"configure-system-users",title:"Configuring System Users",sidebar_label:"System users"},c={unversionedId:"configure-system-users",id:"version-1.11.1/configure-system-users",isDocsHomePage:!1,title:"Configuring System Users",description:"Adjust the system user or group for each LiveData Migrator service to suit your environment.",source:"@site/versioned_docs/version-1.11.1/configure-system-users.md",slug:"/configure-system-users",permalink:"/wandisco-documentation-ldm/docs/1.11.1/configure-system-users",version:"1.11.1",sidebar_label:"System users",sidebar:"version-1.11.1/someSidebar",previous:{title:"Configuring your environment for metadata migrations",permalink:"/wandisco-documentation-ldm/docs/1.11.1/configuration-metadata"},next:{title:"Command Reference",permalink:"/wandisco-documentation-ldm/docs/1.11.1/command-reference"}},l=[{value:"Defaults",id:"defaults",children:[]},{value:"Running a service as a different user or group",id:"running-a-service-as-a-different-user-or-group",children:[{value:"LiveData Migrator and LiveData UI",id:"livedata-migrator-and-livedata-ui",children:[]},{value:"HiveMigrator and HiveMigrator remote server",id:"hivemigrator-and-hivemigrator-remote-server",children:[]}]}],s={toc:l};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Adjust the system user or group for each LiveData Migrator service to suit your environment."),Object(i.b)("h2",{id:"defaults"},"Defaults"),Object(i.b)("p",null,"The default system users and groups for each service are as follows:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Service"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default system user"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default system group"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"livedata-migrator")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"hdfs")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"hdfs"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"livedata-ui")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"hdfs")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"hdfs"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"hivemigrator")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"hive")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"hadoop"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"hivemigrator-remote-server")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"hive")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"hadoop"))))),Object(i.b)("h2",{id:"running-a-service-as-a-different-user-or-group"},"Running a service as a different user or group"),Object(i.b)("p",null,"Follow the steps depending on which service or services you want to change the user/group for."),Object(i.b)("h3",{id:"livedata-migrator-and-livedata-ui"},"LiveData Migrator and LiveData UI"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Adjust the system user or group in the service configuration. Choose one of options below depending on your operating system."),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Linux distributions with systemd"),Object(i.b)("br",{parentName:"p"}),"\n","Create an override service file for the intended service:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="livedata-migrator"',title:'"livedata-migrator"'}),"systemctl edit livedata-migrator\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="livedata-ui"',title:'"livedata-ui"'}),"systemctl edit livedata-ui\n")),Object(i.b)("p",{parentName:"li"},"In the text editor that opens automatically, override the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Group")," variables with your preferred user and group:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"[Service]\nUser=<user>\nGroup=<group>\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Linux distributions without systemd"),Object(i.b)("br",{parentName:"p"}),"\n","Update the values for ",Object(i.b)("inlineCode",{parentName:"p"},"USERNAME")," and ",Object(i.b)("inlineCode",{parentName:"p"},"GROUPNAME")," in the configuration file for the intended service:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="livedata-migrator"',title:'"livedata-migrator"'}),"/etc/wandisco/livedata-migrator/vars.env\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="livedata-ui"',title:'"livedata-ui"'}),"/etc/wandisco/ui/vars.env\n"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Change ownership of the related directories to the new system user/group:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="livedata-migrator"',title:'"livedata-migrator"'}),"chown -R <user>:<group> /opt/wandisco/livedata-migrator\nchown -R <user>:<group> /etc/wandisco/livedata-migrator\nchown -R <user>:<group> /var/log/wandisco/livedata-migrator\nchown -R <user>:<group> /var/run/livedata-migrator\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="livedata-ui"',title:'"livedata-ui"'}),"chown -R <user>:<group> /opt/wandisco/ui\nchown -R <user>:<group> /etc/wandisco/ui\nchown -R <user>:<group> /var/log/wandisco/ui\nchown -R <user>:<group> /var/run/livedata-ui\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Once you've finished making changes, restart the corresponding service:"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Linux distributions with systemd"),"  "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="livedata-migrator"',title:'"livedata-migrator"'}),"systemctl restart livedata-migrator\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="livedata-ui"',title:'"livedata-ui"'}),"systemctl restart livedata-ui\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Linux distributions without systemd"),"  "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="livedata-migrator"',title:'"livedata-migrator"'}),"service livedata-migrator restart\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="livedata-ui"',title:'"livedata-ui"'}),"service livedata-ui restart\n")))))),Object(i.b)("h3",{id:"hivemigrator-and-hivemigrator-remote-server"},"HiveMigrator and HiveMigrator remote server"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Update the values for ",Object(i.b)("inlineCode",{parentName:"p"},"HIVE_MIGRATOR_SERVER_USER")," and ",Object(i.b)("inlineCode",{parentName:"p"},"HIVE_MIGRATOR_SERVER_GROUP")," in the configuration file for the intended service:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="hivemigrator"',title:'"hivemigrator"'}),"/etc/wandisco/hivemigrator/vars.sh\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="hivemigrator-remote-server"',title:'"hivemigrator-remote-server"'}),"/etc/wandisco/hivemigrator-remote-server/vars.sh\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Change ownership of the related directories to the new system user/group:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="hivemigrator"',title:'"hivemigrator"'}),"chown -R <user>:<group> /opt/wandisco/hivemigrator\nchown -R <user>:<group> /etc/wandisco/hivemigrator\nchown -R <user>:<group> /var/log/wandisco/hivemigrator\nchown -R <user>:<group> /var/run/hivemigrator\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="hivemigrator-remote-server"',title:'"hivemigrator-remote-server"'}),"chown -R <user>:<group> /opt/wandisco/hivemigrator-remote-server\nchown -R <user>:<group> /etc/wandisco/hivemigrator-remote-server\nchown -R <user>:<group> /var/log/wandisco/hivemigrator-remote-server\nchown -R <user>:<group> /var/run/livedata-hivemigrator-remote-server\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Once you've finished making changes, restart the corresponding service:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="hivemigrator"',title:'"hivemigrator"'}),"service hivemigrator restart\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="hivemigrator-remote-server"',title:'"hivemigrator-remote-server"'}),"service hivemigrator-remote-server restart\n")))))}b.isMDXComponent=!0},235:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=b(r),u=a,d=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return r?n.a.createElement(d,c(c({ref:t},s),{},{components:r})):n.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);