(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var i=a(3),n=a(7),o=(a(0),a(235)),r={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},s={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"This article details issues that you may face when installing and using LiveData Migrator. Follow the provided steps if you encounter these issues.",source:"@site/docs/troubleshooting.md",slug:"/troubleshooting",permalink:"/wandisco-documentation-ldm/docs/troubleshooting",version:"current",sidebar_label:"Troubleshooting",sidebar:"someSidebar",previous:{title:"Migration Verifications",permalink:"/wandisco-documentation-ldm/docs/migration-verifications"},next:{title:"LiveData Migrator Support",permalink:"/wandisco-documentation-ldm/docs/support"}},c=[{value:"General",id:"general",children:[{value:"Rule names parameter does not autocomplete in the CLI",id:"rule-names-parameter-does-not-autocomplete-in-the-cli",children:[]},{value:"HiveMigrator configuration files missing when reinstalling LiveData Migrator on Ubuntu/Debian",id:"hivemigrator-configuration-files-missing-when-reinstalling-livedata-migrator-on-ubuntudebian",children:[]}]},{value:"Microsoft Azure resources",id:"microsoft-azure-resources",children:[{value:"Insufficient container permissions with an ADLS2 target filesystem when using OAuth2 authentication",id:"insufficient-container-permissions-with-an-adls2-target-filesystem-when-using-oauth2-authentication",children:[]}]},{value:"Amazon Web Services (AWS) resources",id:"amazon-web-services-aws-resources",children:[{value:"Failed to connect to LiveData Migrator when adding S3 storage through the UI using access/secret keys",id:"failed-to-connect-to-livedata-migrator-when-adding-s3-storage-through-the-ui-using-accesssecret-keys",children:[]},{value:"Error Code: AccessDenied. Error Message: Access to the resource https://sqs.eu-west-1.amazonaws.com/ is denied.",id:"error-code-accessdenied-error-message-access-to-the-resource-httpssqseu-west-1amazonawscom-is-denied",children:[]}]},{value:"Notifications",id:"notifications",children:[{value:"LiveMigratorPanicNotification",id:"livemigratorpanicnotification",children:[]},{value:"HighPendingRegionNotification",id:"highpendingregionnotification",children:[]}]},{value:"Troubleshooting techniques",id:"troubleshooting-techniques",children:[{value:"Check path status",id:"check-path-status",children:[]}]}],l={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This article details issues that you may face when installing and using LiveData Migrator. Follow the provided steps if you encounter these issues."),Object(o.b)("p",null,"Please ensure you have read the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/prereqs"}),"Prerequisites")," as you may experience problems if you miss any of these requirements."),Object(o.b)("p",null,"We recommend making use of logs when troubleshooting LiveData Migrator. See ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/command-reference#log-commands"}),"Log Commands")," for information on how to enable logging across various levels. Logs for each component of LiveData Migrator are stored in the ",Object(o.b)("inlineCode",{parentName:"p"},"/var/log/wandisco/")," directory within the LiveData Migrator installation directory, with a directory for each component, such as ",Object(o.b)("inlineCode",{parentName:"p"},"/var/log/wandisco/ui")," for the LiveData UI."),Object(o.b)("h2",{id:"general"},"General"),Object(o.b)("h3",{id:"rule-names-parameter-does-not-autocomplete-in-the-cli"},"Rule names parameter does not autocomplete in the CLI"),Object(o.b)("p",null,"When adding the ",Object(o.b)("inlineCode",{parentName:"p"},"--rule-names")," parameter to the end of a ",Object(o.b)("inlineCode",{parentName:"p"},"hive migration add")," command, auto-completion will not suggest the parameter name. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"WANdisco LiveData Migrator >> hive migration add --name test --source sourceAgent --target testGlue --rule-names\n")),Object(o.b)("p",null,"To work around this, either:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use the ",Object(o.b)("inlineCode",{parentName:"li"},"--rule-names")," parameter earlier in the command. For example: ",Object(o.b)("inlineCode",{parentName:"li"},"WANdisco LiveData Migrator >> hive migration add --name test --rule-names")),Object(o.b)("li",{parentName:"ul"},"Use the Tab key twice in the CLI when attempting to autocomplete the parameter, and select ",Object(o.b)("inlineCode",{parentName:"li"},"--rule-names")," with the left and right arrow keys.")),Object(o.b)("h3",{id:"hivemigrator-configuration-files-missing-when-reinstalling-livedata-migrator-on-ubuntudebian"},"HiveMigrator configuration files missing when reinstalling LiveData Migrator on Ubuntu/Debian"),Object(o.b)("p",null,"This issue will occur when you have removed the HiveMigrator package with ",Object(o.b)("inlineCode",{parentName:"p"},"apt-get remove")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"apt-get purge")," during the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/uninstall#uninstall-livedata-migrator"}),"uninstall")," steps."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/wandisco/hivemigrator")," directory will be missing files as a result. The cause is that the Ubuntu package management tool (",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://man7.org/linux/man-pages/man1/dpkg.1.html"}),"dpkg"),") stores service configuration information in its internal database and assumes this directory already has the needed files (even if they were manually removed)."),Object(o.b)("p",null,"To resolve this:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Cleanup the dpkg database for the HiveMigrator service:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text"}),"rm -f /var/lib/dpkg/info/hivemigrator*\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fully remove the HiveMigrator package again using ",Object(o.b)("inlineCode",{parentName:"p"},"dpkg")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"--purge")," option:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text"}),"dpkg --purge hivemigrator\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Carry out the install steps for the new version of LiveData Migrator.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If needed, install the HiveMigrator package using ",Object(o.b)("inlineCode",{parentName:"p"},"dpkg")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"--force-confmiss")," option:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"dpkg -i --force-confmiss hivemigrator_1.3.1-518_all.deb\n")))),Object(o.b)("h2",{id:"microsoft-azure-resources"},"Microsoft Azure resources"),Object(o.b)("h3",{id:"insufficient-container-permissions-with-an-adls2-target-filesystem-when-using-oauth2-authentication"},"Insufficient container permissions with an ADLS2 target filesystem when using OAuth2 authentication"),Object(o.b)("p",null,"When creating or updating an ADLS2 target filesystem using the OAuth2 authentication protocol, you may have insufficient permission to guarantee a successful migration. This is usually because the Role Based Access Control on the service principal does not guarantee root access. In this case, the migration will fail to start (or resume) and issue a warning."),Object(o.b)("p",null,"To force the migration to start (or resume) despite the warning, update the ADLS2 filesystem with the following property and restart LiveData Migrator afterwards:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text",metastring:'title="Property"',title:'"Property"'}),"fs.ignore-authentication-privileges=true\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example Usage"',title:'"Example','Usage"':!0}),"filesystem update adls2 oauth --file-system-id target --properties fs.ignore-authentication-privileges=true\n")),Object(o.b)("h2",{id:"amazon-web-services-aws-resources"},"Amazon Web Services (AWS) resources"),Object(o.b)("h3",{id:"failed-to-connect-to-livedata-migrator-when-adding-s3-storage-through-the-ui-using-accesssecret-keys"},"Failed to connect to LiveData Migrator when adding S3 storage through the UI using access/secret keys"),Object(o.b)("p",null,"When adding an S3 bucket as a storage through the LiveData UI, the following error may display when attempting to save the configuration:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Failed to connect to LiveData Migrator")),Object(o.b)("p",null,"This can be due to an incorrectly entered access or secret key. Double check that you provided the correct keys with no extra characters (including spaces), and try again."),Object(o.b)("h3",{id:"error-code-accessdenied-error-message-access-to-the-resource-httpssqseu-west-1amazonawscom-is-denied"},"Error Code: AccessDenied. Error Message: Access to the resource ",Object(o.b)("a",Object(i.a)({parentName:"h3"},{href:"https://sqs.eu-west-1.amazonaws.com/"}),"https://sqs.eu-west-1.amazonaws.com/")," is denied."),Object(o.b)("p",null,"This problem arises if your account does not have sufficient SQS permissions to access the bucket resource. To fix this, ask your organisation administrator to ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-basic-examples-of-sqs-policies.html"}),"assign the necessary privileges in the SQS policy manager"),"."),Object(o.b)("p",null,"For example, configuring an allow rule for ",Object(o.b)("inlineCode",{parentName:"p"},"sqs:*")," will allow all organization users configured with SQS to perform the necessary actions with LiveData Migrator."),Object(o.b)("h2",{id:"notifications"},"Notifications"),Object(o.b)("p",null,"Below are some of the most common notifications that you may encounter during the deployment or use of LiveData Migrator."),Object(o.b)("h3",{id:"livemigratorpanicnotification"},"LiveMigratorPanicNotification"),Object(o.b)("p",null,"When LiveData Migrator encounters an unexpected run-time exception, it will emit a log message with the notification ",Object(o.b)("inlineCode",{parentName:"p"},"LiveMigratorPanicNotification"),". The message provided, and therefore the resolution, will vary based on the cause of the exception. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"2020-11-12 16:26:37.441 ERROR - [engine-pool-1 ] c.w.l.e.LM2UncaughtExceptionHandler : Uncaught exception in thread Thread[engine-pool-1,5,main], exception:\n java.lang.IllegalArgumentException: Wrong FS: hdfs://.livemigrator_55f9bf54-77fc-4bc1-95e9-0a378d938609, expected: hdfs://nmcnu01-vm0.bdfrem.wandisco.com at org.apache.hadoop.fs.FileSystem.checkPath(FileSystem.java:730) at org.apache.hadoop.hdfs.DistributedFileSystem.getPathName(DistributedFileSystem.java:233) at org.apache.hadoop.hdfs.DistributedFileSystem$29.doCall(DistributedFileSystem.java:1576) at org.apache.hadoop.hdfs.DistributedFileSystem$29.doCall(DistributedFileSystem.java:1573) at org.apache.hadoop.fs.FileSystemLinkResolver.resolve(FileSystemLinkResolver.java:81) at org.apache.hadoop.hdfs.DistributedFileSystem.getFileStatus(DistributedFileSystem.java:1588) at org.apache.hadoop.fs.FileSystem.exists(FileSystem.java:1683) at com.wandisco.livemigrator2.fs.hdfs.HdfsFileSystemWrapper.exists(HdfsFileSystemWrapper.java:154) at com.wandisco.livemigrator2.fs.hdfs.HdfsFileSystemWrapper$$FastClassBySpringCGLIB$$c15450b.invoke(<generated>) at org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:218) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:771) at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:749) at org.springframework.aop.aspectj.MethodInvocationProceedingJoinPoint.proceed(MethodInvocationProceedingJoinPoint.java:88) at com.wandisco.livemigrator2.fs.FileSystemExceptionHandlerAspect.handleException(FileSystemExceptionHandlerAspect.java:19) at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) at java.lang.reflect.Method.invoke(Method.java:498) at org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:644) at org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:633) at org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:70) at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:749) at org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:95) at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:749) at org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:691) at com.wandisco.livemigrator2.fs.hdfs.HdfsFileSystemWrapper$$EnhancerBySpringCGLIB$$57c6ec3a.exists(<generated>) at com.wandisco.livemigrator2.migration.MigratorEngine.createMarkerIfNecesssary(MigratorEngine.java:959) at com.wandisco.livemigrator2.migration.MigratorEngine.init(MigratorEngine.java:211) at com.wandisco.livemigrator2.migration.MigratorEngine.run(MigratorEngine.java:304) at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) at java.lang.Thread.run(Thread.java:748)\n 2020-11-12 16:26:37.442 INFO - [engine-pool-1 ] c.w.l.n.NotificationManagerImpl : Notification: Notification{level=ERROR, type='LiveMigratorPanicNotification', message='Wrong FS: hdfs://.livemigrator_55f9bf54-77fc-4bc1-95e9-0a378d938609, expected: hdfs://nmcnu01-vm0.bdfrem.wandisco.com', id='urn:uuid:8bf396b3-2b58-473c-9e77-8cab70e88c04', timeStamp=1605198397441, code=40003, resolved=false, updatedTimeStamp=1605198397441, payload={}}\n")),Object(o.b)("p",null,"Any issue triggering this notification will cause the application to shut down with a return code of -1, indicating an abnormal termination."),Object(o.b)("h3",{id:"highpendingregionnotification"},"HighPendingRegionNotification"),Object(o.b)("p",null,"When directories are moved or modified during a migration, they are logged as pending regions. Exceeding the configured maximum number of pending regions, during migration, will cause the migration to abort."),Object(o.b)("p",null,"This issue can be resolved by raising the maximum number of pending regions in the migration."),Object(o.b)("p",null,'This notification displays when the number of pending regions exceeds the "high watermark" percentage of maximum pending regions, and is resolved when the number falls below the "low watermark" percentage.'),Object(o.b)("p",null,"Both watermarks may be configured by adding settings to application.properties. The following setting configures the high watermark percentage of pending regions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"notifications.pending.region.warn.percent=60\n")),Object(o.b)("p",null,"And the following setting determines the low watermark percentage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"notifications.pending.region.clear.percent=50\n")),Object(o.b)("h2",{id:"troubleshooting-techniques"},"Troubleshooting techniques"),Object(o.b)("p",null,"Use these LiveData Migrator features to identify problems with migrations or filesystems."),Object(o.b)("h3",{id:"check-path-status"},"Check path status"),Object(o.b)("p",null,"You can ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/wandisco-documentation-ldm/docs/configure-storage#check-path-status"}),"check the status of a file path")," in either the UI or the CLI to determine whether any work is scheduled on the file. "))}p.isMDXComponent=!0},235:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var i=a(0),n=a.n(i);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,m=d["".concat(r,".").concat(u)]||d[u]||g[u]||o;return a?n.a.createElement(m,s(s({ref:t},l),{},{components:a})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);