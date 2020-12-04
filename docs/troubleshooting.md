---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

This article provides details on some of the issues you may face when installing and using LiveData Migrator, and provides steps to help you resolve these problem.

Please ensure you have read the [Prerequisites](./prereqs.md) as if any of these items are missed, issues may be encountered.

# Notifications

This article lists some common notifications that may be encountered during the deployment or use of LiveData Migrator.

## LiveMigratorPanicNotification

When LiveData Migrator encounters an unexpected run-time exception, it will emit a log message with the notification `LiveMigratorPanicNotification`. The message provided, and therefore the resolution, will vary based on the cause of the exception. For example:

```text title="Example"
2020-11-12 16:26:37.441 ERROR - [engine-pool-1 ] c.w.l.e.LM2UncaughtExceptionHandler : Uncaught exception in thread Thread[engine-pool-1,5,main], exception:
 java.lang.IllegalArgumentException: Wrong FS: hdfs://.livemigrator_55f9bf54-77fc-4bc1-95e9-0a378d938609, expected: hdfs://nmcnu01-vm0.bdfrem.wandisco.com at org.apache.hadoop.fs.FileSystem.checkPath(FileSystem.java:730) at org.apache.hadoop.hdfs.DistributedFileSystem.getPathName(DistributedFileSystem.java:233) at org.apache.hadoop.hdfs.DistributedFileSystem$29.doCall(DistributedFileSystem.java:1576) at org.apache.hadoop.hdfs.DistributedFileSystem$29.doCall(DistributedFileSystem.java:1573) at org.apache.hadoop.fs.FileSystemLinkResolver.resolve(FileSystemLinkResolver.java:81) at org.apache.hadoop.hdfs.DistributedFileSystem.getFileStatus(DistributedFileSystem.java:1588) at org.apache.hadoop.fs.FileSystem.exists(FileSystem.java:1683) at com.wandisco.livemigrator2.fs.hdfs.HdfsFileSystemWrapper.exists(HdfsFileSystemWrapper.java:154) at com.wandisco.livemigrator2.fs.hdfs.HdfsFileSystemWrapper$$FastClassBySpringCGLIB$$c15450b.invoke(<generated>) at org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:218) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:771) at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:749) at org.springframework.aop.aspectj.MethodInvocationProceedingJoinPoint.proceed(MethodInvocationProceedingJoinPoint.java:88) at com.wandisco.livemigrator2.fs.FileSystemExceptionHandlerAspect.handleException(FileSystemExceptionHandlerAspect.java:19) at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) at java.lang.reflect.Method.invoke(Method.java:498) at org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:644) at org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:633) at org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:70) at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:749) at org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:95) at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:749) at org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:691) at com.wandisco.livemigrator2.fs.hdfs.HdfsFileSystemWrapper$$EnhancerBySpringCGLIB$$57c6ec3a.exists(<generated>) at com.wandisco.livemigrator2.migration.MigratorEngine.createMarkerIfNecesssary(MigratorEngine.java:959) at com.wandisco.livemigrator2.migration.MigratorEngine.init(MigratorEngine.java:211) at com.wandisco.livemigrator2.migration.MigratorEngine.run(MigratorEngine.java:304) at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) at java.lang.Thread.run(Thread.java:748)
 2020-11-12 16:26:37.442 INFO - [engine-pool-1 ] c.w.l.n.NotificationManagerImpl : Notification: Notification{level=ERROR, type='LiveMigratorPanicNotification', message='Wrong FS: hdfs://.livemigrator_55f9bf54-77fc-4bc1-95e9-0a378d938609, expected: hdfs://nmcnu01-vm0.bdfrem.wandisco.com', id='urn:uuid:8bf396b3-2b58-473c-9e77-8cab70e88c04', timeStamp=1605198397441, code=40003, resolved=false, updatedTimeStamp=1605198397441, payload={}}
 ```

Any issue triggering this notification will cause the application to shut down with a return code of -1, indicating an abnormal termination.

### HighPendingRegionNotification
