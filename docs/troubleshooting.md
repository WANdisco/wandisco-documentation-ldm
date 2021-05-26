---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---


This article details issues that you may face when installing and using LiveData Migrator. Follow the provided steps if you encounter these issues.

Please ensure you have read the [Prerequisites](./prereqs.md) as you may experience problems if you miss any of these requirements.

We recommend making use of logs when troubleshooting LiveData Migrator. See [Log Commands](./command-reference.md#log-commands) for information on how to enable logging across various levels. Logs for each component of LiveData Migrator are stored in the `/var/log/wandisco/` directory within the LiveData Migrator installation directory, with a directory for each component, such as `/var/log/wandisco/ui` for the LiveData UI.

## General

### Rule names parameter does not autocomplete in the CLI

When adding the `--rule-names` parameter to the end of a `hive migration add` command, auto-completion will not suggest the parameter name. For example:

```text title="Example"
WANdisco LiveData Migrator >> hive migration add --name test --source sourceAgent --target testGlue --rule-names
```

To work around this, either:

* Use the `--rule-names` parameter earlier in the command. For example: `WANdisco LiveData Migrator >> hive migration add --name test --rule-names`
* Use the Tab key twice in the CLI when attempting to autocomplete the parameter, and select `--rule-names` with the left and right arrow keys.

## Microsoft Azure resources

### Insufficient container permissions with an ADLS2 target filesystem when using OAuth2 authentication

When creating or updating an ADLS2 target filesystem using the OAuth2 authentication protocol, you may have insufficient permission to guarantee a successful migration. This is usually because the Role Based Access Control on the service principal does not guarantee root access. In this case, the migration will fail to start (or resume) and issue a warning.

To force the migration to start (or resume) despite the warning, update the ADLS2 filesystem with the following property and restart LiveData Migrator afterwards:

```text title="Property"
fs.ignore-authentication-privileges=true
```

```text title="Example Usage"
filesystem update adls2 oauth --file-system-id target --properties fs.ignore-authentication-privileges=true
```

## Amazon Web Services (AWS) resources

### Failed to connect to LiveData Migrator when adding S3 storage through the UI using access/secret keys

When adding an S3 bucket as a storage through the LiveData UI, the following error may display when attempting to save the configuration:

`Failed to connect to LiveData Migrator`

This can be due to an incorrectly entered access or secret key. Double check that you provided the correct keys with no extra characters (including spaces), and try again.

### Error Code: AccessDenied. Error Message: Access to the resource https://sqs.eu-west-1.amazonaws.com/ is denied.

This problem arises if your account does not have sufficient SQS permissions to access the bucket resource. To fix this, ask your organisation administrator to [assign the necessary privileges in the SQS policy manager](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-basic-examples-of-sqs-policies.html).

For example, configuring an allow rule for `sqs:*` will allow all organization users configured with SQS to perform the necessary actions with LiveData Migrator.

## Notifications

Below are some of the most common notifications that you may encounter during the deployment or use of LiveData Migrator.

### LiveMigratorPanicNotification

When LiveData Migrator encounters an unexpected run-time exception, it will emit a log message with the notification `LiveMigratorPanicNotification`. The message provided, and therefore the resolution, will vary based on the cause of the exception. For example:

```text title="Example"
2020-11-12 16:26:37.441 ERROR - [engine-pool-1 ] c.w.l.e.LM2UncaughtExceptionHandler : Uncaught exception in thread Thread[engine-pool-1,5,main], exception:
 java.lang.IllegalArgumentException: Wrong FS: hdfs://.livemigrator_55f9bf54-77fc-4bc1-95e9-0a378d938609, expected: hdfs://nmcnu01-vm0.bdfrem.wandisco.com at org.apache.hadoop.fs.FileSystem.checkPath(FileSystem.java:730) at org.apache.hadoop.hdfs.DistributedFileSystem.getPathName(DistributedFileSystem.java:233) at org.apache.hadoop.hdfs.DistributedFileSystem$29.doCall(DistributedFileSystem.java:1576) at org.apache.hadoop.hdfs.DistributedFileSystem$29.doCall(DistributedFileSystem.java:1573) at org.apache.hadoop.fs.FileSystemLinkResolver.resolve(FileSystemLinkResolver.java:81) at org.apache.hadoop.hdfs.DistributedFileSystem.getFileStatus(DistributedFileSystem.java:1588) at org.apache.hadoop.fs.FileSystem.exists(FileSystem.java:1683) at com.wandisco.livemigrator2.fs.hdfs.HdfsFileSystemWrapper.exists(HdfsFileSystemWrapper.java:154) at com.wandisco.livemigrator2.fs.hdfs.HdfsFileSystemWrapper$$FastClassBySpringCGLIB$$c15450b.invoke(<generated>) at org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:218) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:771) at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:749) at org.springframework.aop.aspectj.MethodInvocationProceedingJoinPoint.proceed(MethodInvocationProceedingJoinPoint.java:88) at com.wandisco.livemigrator2.fs.FileSystemExceptionHandlerAspect.handleException(FileSystemExceptionHandlerAspect.java:19) at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) at java.lang.reflect.Method.invoke(Method.java:498) at org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:644) at org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:633) at org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:70) at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:749) at org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:95) at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:749) at org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:691) at com.wandisco.livemigrator2.fs.hdfs.HdfsFileSystemWrapper$$EnhancerBySpringCGLIB$$57c6ec3a.exists(<generated>) at com.wandisco.livemigrator2.migration.MigratorEngine.createMarkerIfNecesssary(MigratorEngine.java:959) at com.wandisco.livemigrator2.migration.MigratorEngine.init(MigratorEngine.java:211) at com.wandisco.livemigrator2.migration.MigratorEngine.run(MigratorEngine.java:304) at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) at java.lang.Thread.run(Thread.java:748)
 2020-11-12 16:26:37.442 INFO - [engine-pool-1 ] c.w.l.n.NotificationManagerImpl : Notification: Notification{level=ERROR, type='LiveMigratorPanicNotification', message='Wrong FS: hdfs://.livemigrator_55f9bf54-77fc-4bc1-95e9-0a378d938609, expected: hdfs://nmcnu01-vm0.bdfrem.wandisco.com', id='urn:uuid:8bf396b3-2b58-473c-9e77-8cab70e88c04', timeStamp=1605198397441, code=40003, resolved=false, updatedTimeStamp=1605198397441, payload={}}
 ```

Any issue triggering this notification will cause the application to shut down with a return code of -1, indicating an abnormal termination.

### HighPendingRegionNotification

When directories are moved or modified during a migration, they are logged as pending regions. Exceeding the configured maximum number of pending regions, during migration, will cause the migration to abort.

This issue can be resolved by raising the maximum number of pending regions in the migration.

This notification displays when the number of pending regions exceeds the "high watermark" percentage of maximum pending regions, and is resolved when the number falls below the "low watermark" percentage.

Both watermarks may be configured by adding settings to application.properties. The following setting configures the high watermark percentage of pending regions:

```text title="Example"
notifications.pending.region.warn.percent=60
```

And the following setting determines the low watermark percentage:

```text title="Example"
notifications.pending.region.clear.percent=50
```
