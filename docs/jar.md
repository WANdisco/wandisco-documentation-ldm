---
id: jar
title: Using the LiveData Migrator jar
sidebar_label: LiveData Migrator Jar

---

If you want to try out LiveData Migrator using a quick method, use the `livedata-migrator.jar`. This is an alternative to using the system service and it does not require configuration.

:::important
Use the system service instead for Production deployment as it allows you to maintain long-lived migrations, have a common configuration that survives service restarts, and retain logging information in a central directory.
:::

On the LiveData Migrator host, follow the steps below to run the jar:

1. Switch to the [HDFS superuser](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User).  
   _Example_  
   `su - hdfs`
1. Change to the directory where the jar is located:  
   `cd /opt/wandisco/livedata-migrator`
1. Run the jar file to access the action prompt.
   * If Kerberos is disabled in your environment, run:  
     `java -jar livedata-migrator.jar`
   * If Kerberos is enabled in your environment, you must obtain a ticket before running the jar.  
     _Example_  
     `kinit -kt /etc/security/keytabs/hdfs.keytab hdfs@REALM.COM`  
