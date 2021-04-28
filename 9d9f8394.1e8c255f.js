(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var i=a(3),o=a(7),n=(a(0),a(202)),r={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},c={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"This article details issues that you may face when installing and using LiveData Migrator. Follow the provided steps if you encounter these issues.",source:"@site/docs/troubleshooting.md",slug:"/troubleshooting",permalink:"/wandisco-documentation-ldm/docs/troubleshooting",version:"current",sidebar_label:"Troubleshooting",sidebar:"someSidebar",previous:{title:"Backup and Restore",permalink:"/wandisco-documentation-ldm/docs/backup-and-restore"},next:{title:"LiveData Migrator Support",permalink:"/wandisco-documentation-ldm/docs/support"}},s=[{value:"General",id:"general",children:[{value:"Rule names parameter does not autocomplete in the CLI",id:"rule-names-parameter-does-not-autocomplete-in-the-cli",children:[]}]},{value:"Microsoft Azure resources",id:"microsoft-azure-resources",children:[{value:"Insufficient container permissions with an ADLS2 target filesystem when using OAuth2 authentication",id:"insufficient-container-permissions-with-an-adls2-target-filesystem-when-using-oauth2-authentication",children:[]}]},{value:"Amazon Web Services (AWS) resources",id:"amazon-web-services-aws-resources",children:[{value:"Failed to connect to LiveData Migrator when adding S3 storage through the UI using access/secret keys",id:"failed-to-connect-to-livedata-migrator-when-adding-s3-storage-through-the-ui-using-accesssecret-keys",children:[]}]},{value:"Notifications",id:"notifications",children:[{value:"LiveMigratorPanicNotification",id:"livemigratorpanicnotification",children:[]},{value:"HighPendingRegionNotification",id:"highpendingregionnotification",children:[]}]}],l={toc:s};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This article details issues that you may face when installing and using LiveData Migrator. Follow the provided steps if you encounter these issues."),Object(n.b)("p",null,"Please ensure you have read the ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/prereqs"}),"Prerequisites")," as you may experience problems if you miss any of these requirements."),Object(n.b)("p",null,"We recommend making use of logs when troubleshooting LiveData Migrator. See ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference#log-commands"}),"Log Commands")," for information on how to enable logging across various levels. Logs for each component of LiveData Migrator are stored in the ",Object(n.b)("inlineCode",{parentName:"p"},"/var/log/wandisco/")," directory within the LiveData Migrator installation directory, with a directory for each component, such as ",Object(n.b)("inlineCode",{parentName:"p"},"/var/log/wandisco/ui")," for the LiveData UI."),Object(n.b)("h2",{id:"general"},"General"),Object(n.b)("h3",{id:"rule-names-parameter-does-not-autocomplete-in-the-cli"},"Rule names parameter does not autocomplete in the CLI"),Object(n.b)("p",null,"When adding the ",Object(n.b)("inlineCode",{parentName:"p"},"--rule-names")," parameter to the end of a ",Object(n.b)("inlineCode",{parentName:"p"},"hive migration add")," command, auto-completion will not suggest the parameter name. For example:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"WANdisco LiveData Migrator >> hive migration add --name test --source sourceAgent --target testGlue --rule-names\n")),Object(n.b)("p",null,"To work around this, either:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Use the ",Object(n.b)("inlineCode",{parentName:"li"},"--rule-names")," parameter earlier in the command. For example: ",Object(n.b)("inlineCode",{parentName:"li"},"WANdisco LiveData Migrator >> hive migration add --name test --rule-names")),Object(n.b)("li",{parentName:"ul"},"Use the Tab key twice in the CLI when attempting to autocomplete the parameter, and select ",Object(n.b)("inlineCode",{parentName:"li"},"--rule-names")," with the left and right arrow keys.")),Object(n.b)("h2",{id:"microsoft-azure-resources"},"Microsoft Azure resources"),Object(n.b)("h3",{id:"insufficient-container-permissions-with-an-adls2-target-filesystem-when-using-oauth2-authentication"},"Insufficient container permissions with an ADLS2 target filesystem when using OAuth2 authentication"),Object(n.b)("p",null,"When creating or updating an ADLS2 target filesystem using the OAuth2 authentication protocol, you may have insufficient permission to guarantee a successful migration. This is usually because the Role Based Access Control on the service principal does not guarantee root access. In this case, the migration will fail to start (or resume) and issue a warning."),Object(n.b)("p",null,"To force the migration to start (or resume) despite the warning, update the ADLS2 filesystem with the following property and restart LiveData Migrator afterwards:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text",metastring:'title="Property"',title:'"Property"'}),"fs.ignore-authentication-privileges=true\n")),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example Usage"',title:'"Example','Usage"':!0}),"filesystem update adls2 oauth --file-system-id target --properties fs.ignore-authentication-privileges=true\n")),Object(n.b)("h2",{id:"amazon-web-services-aws-resources"},"Amazon Web Services (AWS) resources"),Object(n.b)("h3",{id:"failed-to-connect-to-livedata-migrator-when-adding-s3-storage-through-the-ui-using-accesssecret-keys"},"Failed to connect to LiveData Migrator when adding S3 storage through the UI using access/secret keys"),Object(n.b)("p",null,"When adding an S3 bucket as a storage through the LiveData UI, the following error may display when attempting to save the configuration:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Failed to connect to LiveData Migrator")),Object(n.b)("p",null,"This can be due to an incorrectly entered access or secret key. Double check that you provided the correct keys with no extra characters (including spaces), and try again."),Object(n.b)("h2",{id:"notifications"},"Notifications"),Object(n.b)("p",null,"Below are some of the most common notifications that you may encounter during the deployment or use of LiveData Migrator."),Object(n.b)("h3",{id:"livemigratorpanicnotification"},"LiveMigratorPanicNotification"),Object(n.b)("p",null,"When LiveData Migrator encounters an unexpected run-time exception, it will emit a log message with the notification ",Object(n.b)("inlineCode",{parentName:"p"},"LiveMigratorPanicNotification"),". The message provided, and therefore the resolution, will vary based on the cause of the exception. For example:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"2020-11-12 16:26:37.441 ERROR - [engine-pool-1 ] c.w.l.e.LM2UncaughtExceptionHandler : Uncaught exception in thread Thread[engine-pool-1,5,main], exception:\n java.lang.IllegalArgumentException: Wrong FS: hdfs://.livemigrator_55f9bf54-77fc-4bc1-95e9-0a378d938609, expected: hdfs://nmcnu01-vm0.bdfrem.wandisco.com at org.apache.hadoop.fs.FileSystem.checkPath(FileSystem.java:730) at org.apache.hadoop.hdfs.DistributedFileSystem.getPathName(DistributedFileSystem.java:233) at org.apache.hadoop.hdfs.DistributedFileSystem$29.doCall(DistributedFileSystem.java:1576) at org.apache.hadoop.hdfs.DistributedFileSystem$29.doCall(DistributedFileSystem.java:1573) at org.apache.hadoop.fs.FileSystemLinkResolver.resolve(FileSystemLinkResolver.java:81) at org.apache.hadoop.hdfs.DistributedFileSystem.getFileStatus(DistributedFileSystem.java:1588) at org.apache.hadoop.fs.FileSystem.exists(FileSystem.java:1683) at com.wandisco.livemigrator2.fs.hdfs.HdfsFileSystemWrapper.exists(HdfsFileSystemWrapper.java:154) at com.wandisco.livemigrator2.fs.hdfs.HdfsFileSystemWrapper$$FastClassBySpringCGLIB$$c15450b.invoke(<generated>) at org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:218) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:771) at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:749) at org.springframework.aop.aspectj.MethodInvocationProceedingJoinPoint.proceed(MethodInvocationProceedingJoinPoint.java:88) at com.wandisco.livemigrator2.fs.FileSystemExceptionHandlerAspect.handleException(FileSystemExceptionHandlerAspect.java:19) at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) at java.lang.reflect.Method.invoke(Method.java:498) at org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:644) at org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:633) at org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:70) at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:749) at org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:95) at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:749) at org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:691) at com.wandisco.livemigrator2.fs.hdfs.HdfsFileSystemWrapper$$EnhancerBySpringCGLIB$$57c6ec3a.exists(<generated>) at com.wandisco.livemigrator2.migration.MigratorEngine.createMarkerIfNecesssary(MigratorEngine.java:959) at com.wandisco.livemigrator2.migration.MigratorEngine.init(MigratorEngine.java:211) at com.wandisco.livemigrator2.migration.MigratorEngine.run(MigratorEngine.java:304) at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) at java.lang.Thread.run(Thread.java:748)\n 2020-11-12 16:26:37.442 INFO - [engine-pool-1 ] c.w.l.n.NotificationManagerImpl : Notification: Notification{level=ERROR, type='LiveMigratorPanicNotification', message='Wrong FS: hdfs://.livemigrator_55f9bf54-77fc-4bc1-95e9-0a378d938609, expected: hdfs://nmcnu01-vm0.bdfrem.wandisco.com', id='urn:uuid:8bf396b3-2b58-473c-9e77-8cab70e88c04', timeStamp=1605198397441, code=40003, resolved=false, updatedTimeStamp=1605198397441, payload={}}\n")),Object(n.b)("p",null,"Any issue triggering this notification will cause the application to shut down with a return code of -1, indicating an abnormal termination."),Object(n.b)("h3",{id:"highpendingregionnotification"},"HighPendingRegionNotification"),Object(n.b)("p",null,"When directories are moved or modified during a migration, they are logged as pending regions. Exceeding the configured maximum number of pending regions, during migration, will cause the migration to abort."),Object(n.b)("p",null,"This issue can be resolved by raising the maximum number of pending regions in the migration."),Object(n.b)("p",null,'This notification displays when the number of pending regions exceeds the "high watermark" percentage of maximum pending regions, and is resolved when the number falls below the "low watermark" percentage.'),Object(n.b)("p",null,"Both watermarks may be configured by adding settings to application.properties. The following setting configures the high watermark percentage of pending regions:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"notifications.pending.region.warn.percent=60\n")),Object(n.b)("p",null,"And the following setting determines the low watermark percentage:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"notifications.pending.region.clear.percent=50\n")))}d.isMDXComponent=!0},202:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var i=a(0),o=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=i,m=p["".concat(r,".").concat(u)]||p[u]||g[u]||n;return a?o.a.createElement(m,c(c({ref:t},l),{},{components:a})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<n;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);