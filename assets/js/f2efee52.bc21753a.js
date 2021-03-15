(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{183:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(197)),o={id:"uninstall",title:"Uninstall and upgrade LiveData Migrator",sidebar_label:"Uninstalling and upgrading"},l={unversionedId:"uninstall",id:"version-1.11.0/uninstall",isDocsHomePage:!1,title:"Uninstall and upgrade LiveData Migrator",description:"We recommend that you regularly upgrade LiveData Migrator so you can take advantage of new functionality and other improvements. To upgrade, uninstall your current version and then install the new version.",source:"@site/versioned_docs/version-1.11.0/uninstall.md",slug:"/uninstall",permalink:"/wandisco-documentation-ldm/docs/1.11.0/uninstall",version:"1.11.0",sidebar_label:"Uninstalling and upgrading",sidebar:"version-1.11.0/someSidebar",previous:{title:"Upgrade your LiveData Migrator license",permalink:"/wandisco-documentation-ldm/docs/1.11.0/license"},next:{title:"Get started",permalink:"/wandisco-documentation-ldm/docs/1.11.0/get-started"}},c=[{value:"Stop all active migrations",id:"stop-all-active-migrations",children:[]},{value:"Uninstall any remote agents",id:"uninstall-any-remote-agents",children:[]},{value:"Uninstall LiveData Migrator",id:"uninstall-livedata-migrator",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],m={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We recommend that you regularly upgrade LiveData Migrator so you can take advantage of new functionality and other improvements. To upgrade, uninstall your current version and then ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.0/installation"},"install the new version"),"."),Object(i.b)("p",null,"The following steps explain how to uninstall LiveData Migrator and its components."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Backup any configuration files that you wish to save (located in ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/wandisco"),") before uninstalling LiveData Migrator."),Object(i.b)("p",{parentName:"div"},"If you are installing a newer release afterward, note the details of any current migrations that you want to start again once the new version is installed."))),Object(i.b)("h2",{id:"stop-all-active-migrations"},"Stop all active migrations"),Object(i.b)("p",null,"Before uninstalling LiveData Migrator, stop all active migrations of data and/or metadata."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Stop migrations in the UI when ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.0/manage-migrations#manage-migrations-with-the-ui"},"viewing the migration"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you prefer to stop data migrations in the CLI, run the ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.0/command-reference#migration-stop"},"stop migration")," command:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Example"',title:'"Example"'},"migration stop --migration-id <migration-id>\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To stop metadata migrations, run the ",Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.0/command-reference#hive-migration-stop-all"},"stop metadata migration")," command:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Example"',title:'"Example"'},"hive migration stop all\n")))),Object(i.b)("h2",{id:"uninstall-any-remote-agents"},"Uninstall any remote agents"),Object(i.b)("p",null,"If you have deployed any remote agents (for target metastore connections), log in to the hosts for the remote agents and uninstall them using the following commands:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Stop the service:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text"},"service hivemigrator-remote-server stop\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Remove the remote server package:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Red Hat/CentOS"',title:'"Red','Hat/CentOS"':!0},"yum remove -y hivemigrator-remote-server.noarch\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Ubuntu"',title:'"Ubuntu"'},"apt-get purge -y hivemigrator-remote-server\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="SUSE 12"',title:'"SUSE','12"':!0},"zypper remove -y hivemigrator-remote-server\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Delete all related directories:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text"},"rm -rf /etc/wandisco/hivemigrator-remote-server /var/run/hivemigrator-remote-server\n")))),Object(i.b)("h2",{id:"uninstall-livedata-migrator"},"Uninstall LiveData Migrator"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Stop all LiveData Migrator services:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text"},"service livedata-ui stop && service hivemigrator stop && service livedata-migrator stop\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Remove all LiveData Migrator components:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Red Hat/CentOS"',title:'"Red','Hat/CentOS"':!0},"yum remove -y hivemigrator.noarch hivemigrator-azure-hdi.noarch livedata-migrator.noarch livedata-migrator-cli.noarch livedata-ui.noarch\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Ubuntu"',title:'"Ubuntu"'},"apt-get purge -y hivemigrator hivemigrator-azure-hdi livedata-migrator livedata-migrator-cli livedata-ui\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="SUSE 12"',title:'"SUSE','12"':!0},"zypper remove -y hivemigrator hivemigrator-azure-hdi livedata-migrator livedata-ui && rpm -e livedata-migrator-cli\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Delete all related directories:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text"},"rm -rf /etc/wandisco/ui /etc/wandisco/hivemigrator /var/run/hivemigrator /var/run/livedata-migrator /var/run/livedata-ui\n")))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/wandisco-documentation-ldm/docs/1.11.0/installation"},"Install the latest version")," of LiveData Migrator."))}s.isMDXComponent=!0},197:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),s=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(a),b=n,u=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return a?r.a.createElement(u,l(l({ref:t},m),{},{components:a})):r.a.createElement(u,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);