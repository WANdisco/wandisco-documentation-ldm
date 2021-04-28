(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),b=(a(0),a(202)),i={id:"configuration-ui",title:"Configuring the LiveData UI",sidebar_label:"LiveData UI"},l={unversionedId:"configuration-ui",id:"version-1.10.0/configuration-ui",isDocsHomePage:!1,title:"Configuring the LiveData UI",description:"Find details here for the configuration properties of LiveData Migrator UI. Properties are defined in the following file:",source:"@site/versioned_docs/version-1.10.0/configuration-ui.md",slug:"/configuration-ui",permalink:"/wandisco-documentation-ldm/docs/1.10.0/configuration-ui",version:"1.10.0",sidebar_label:"LiveData UI",sidebar:"version-1.10.0/someSidebar",previous:{title:"Configuring LiveData Migrator",permalink:"/wandisco-documentation-ldm/docs/1.10.0/configuration-ldm"},next:{title:"Configuring Data Migrations",permalink:"/wandisco-documentation-ldm/docs/1.10.0/configuration-data-migrations"}},c=[{value:"General configuration",id:"general-configuration",children:[{value:"Logging",id:"logging",children:[]},{value:"Security",id:"security",children:[]}]},{value:"Directory structure",id:"directory-structure",children:[]}],o={toc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Find details here for the configuration properties of LiveData Migrator UI. Properties are defined in the following file:"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"/etc/wandisco/ui/application-prod.properties")),Object(b.b)("p",null,"Below is an example ",Object(b.b)("inlineCode",{parentName:"p"},"application-prod.properties")," file, which overrides any application defaults."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"#Updated Application Properties\n#Thu Nov 05 14:40:38 UTC 2020\napplication.hiveMigrator.servers=localhost\\:6780\nspring.datasource.password=ENC(xxx)\nlogging.output.path=/var/log/wandisco/ui\napplication.liveMigratorV2.servers=localhost\\:18080\n")),Object(b.b)("h2",{id:"general-configuration"},"General configuration"),Object(b.b)("p",null,"Configure how the UI is run overall."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"server.port")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set the port on which the UI will be available. This is overridden by the ",Object(b.b)("inlineCode",{parentName:"td"},"server.ssl.port")," when SSL is enabled.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Default value"),": ",Object(b.b)("inlineCode",{parentName:"td"},"8081"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Allowed values"),": An integer value between ",Object(b.b)("inlineCode",{parentName:"td"},"1024")," and ",Object(b.b)("inlineCode",{parentName:"td"},"65535"))))),Object(b.b)("h3",{id:"logging"},"Logging"),Object(b.b)("p",null,"Configure how the UI logs information about its state or user interactions."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"logging.output.path")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The output path for all logging.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Default value"),": ",Object(b.b)("inlineCode",{parentName:"td"},"/var/log/wandisco/ui"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Allowed values"),": The full path to a valid directory that is writable by the user running the UI (typically ",Object(b.b)("inlineCode",{parentName:"td"},"hdfs"),".)")))),Object(b.b)("h3",{id:"security"},"Security"),Object(b.b)("p",null,"Configure how the UI uses SSL, which is disabled by default."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"server.ssl.enabled")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to ",Object(b.b)("inlineCode",{parentName:"td"},"true")," to enable SSL. If no other SSL values are set, this will use an internal keystore and a self-signed certificate to serve the UI.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Default value"),": ",Object(b.b)("inlineCode",{parentName:"td"},"false"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Allowed values"),": ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", ",Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"server.ssl.port")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set the port on which the UI should be available when SSL is enabled.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Default value"),": ",Object(b.b)("inlineCode",{parentName:"td"},"8443"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Allowed values"),": An integer value between ",Object(b.b)("inlineCode",{parentName:"td"},"1024")," and ",Object(b.b)("inlineCode",{parentName:"td"},"65535"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"server.ssl.key-store")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The path to the key store which should be used instead of the internal default")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"server.ssl.key-store-password")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The password to be used to access the key store")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"server.ssl.key-alias")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The alias of the certificate to be used")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"server.ssl.key-store-type")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional: set the key store type. Defaults to ",Object(b.b)("inlineCode",{parentName:"td"},"PKCS12"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"application.liveMigratorV2.client.noCheckCertificate")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional: add this property and set the value to ",Object(b.b)("inlineCode",{parentName:"td"},"true")," if you want to implicitly trust certificates from remote LiveData Migrator instances. ",Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Default value"),": ",Object(b.b)("inlineCode",{parentName:"td"},"false")," ",Object(b.b)("br",null),Object(b.b)("br",null)," It is not recommended to use this property unless you are fully aware of the consequences. A safer method is to import your server certificate inside a truststore (see the tip below for an example).")))),Object(b.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"The example command below will import a certificate named ",Object(b.b)("inlineCode",{parentName:"p"},"server_cert.key")," into an existing Java truststore named ",Object(b.b)("inlineCode",{parentName:"p"},"cacerts"),":"),Object(b.b)("pre",{parentName:"div"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"keytool -import -trustcacerts -alias wandisco-ui -file server_cert.key -keystore cacerts\n")),Object(b.b)("p",{parentName:"div"},"See the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.oracle.com/cd/E19906-01/820-4916/geygn/index.html"}),"Oracle documentation")," for details on the parameters used."))),Object(b.b)("h2",{id:"directory-structure"},"Directory structure"),Object(b.b)("p",null,"The following directories are used for the LiveData Migrator core package:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Location"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Content"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/var/log/wandisco/livedata-migrator")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Logs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/etc/wandisco/livedata-migrator")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configuration files")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/opt/wandisco/livedata-migrator")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Java archive files")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/opt/wandisco/livedata-migrator/db")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LiveData Migrator runtime state")))),Object(b.b)("p",null,"The following directories are used for HiveMigrator:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Location"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Content"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/var/log/wandisco/hivemigrator")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Logs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/etc/wandisco/hivemigrator")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configuration files")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/opt/wandisco/hivemigrator")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Java archive files")))),Object(b.b)("p",null,"The following directories are used for the LiveData UI:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Location"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Content"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/var/log/wandisco/ui")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Logs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/etc/wandisco/ui")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configuration files")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/opt/wandisco/ui")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Operation files")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/var/run/wandisco/ui")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UI runtime state")))))}d.isMDXComponent=!0},202:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,s=p["".concat(i,".").concat(u)]||p[u]||O[u]||b;return a?r.a.createElement(s,l(l({ref:t},o),{},{components:a})):r.a.createElement(s,l({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<b;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);